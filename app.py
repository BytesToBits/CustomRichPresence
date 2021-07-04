import eel, sys, json
from pypresence import Presence
from cache import Cache

def close(a, b):
    if not debug:
        sys.exit()

eel.init("web")

debug = False

eel.start("templates/index.html", block=False, close_callback=close)

RPC = None
CONNECTED = False

@eel.expose
def readCache():
    return Cache().getData()

@eel.expose
def setPresence(_info):
    global RPC, CONNECTED
    print(_info)

    update = {}

    try:

        if not _info['client']:
            return False
        if not RPC:
            RPC = Presence(client_id=_info['client'], pipe=0)
        
        if CONNECTED:
            RPC.close()

        RPC.connect()
        CONNECTED = True

        if _info['state']:
            update['state'] = _info['state']

        if _info['details']:
            update['details'] = _info['details']
        
        if _info['largeImgName']:
            update['large_image'] = _info['largeImgName']
            if _info['largeImgTooltip']:
                update['large_text'] = _info['largeImgTooltip']
        
        if _info['smallImgName']:
            update['small_image'] = _info['smallImgName']
            if _info['smallImgTooltip']:
                update['small_text'] = _info['smallImgTooltip']
        
        if _info['buttonLabel'] and _info['buttonLink']:
            update['buttons'] = [{
                'label': _info['buttonLabel'],
                'url': _info['buttonLink']
            }]
        
        RPC.update(**update)

        Cache().updateData(**update)
        Cache().updateData(client=_info['client'])

        return "true"
    
    except Exception as e:
        print(e)
        return "false"
    

while True:
    eel.sleep(10)