import json

class Cache:
    def __init__(self):
        pass

    def getData(self):
        with open("cache.json", "r") as f:
            return json.load(f)
        
    def updateData(self,**newData):
        cache = self.getData()
        for data in newData:
            cache[data] = newData[data]
        with open("cache.json", "w+") as f:
            json.dump(cache, f, indent=4)