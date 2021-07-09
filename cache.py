import json


class Cache:
    def __init__(self, path="cache.json"):
        self.path = path

    def getData(self):
        return json.load(open(self.path, "r", encoding="utf-8"))

    def saveData(self, data: dict):
        return json.dump(data, fp=open(self.path, "w"), indent=4)

    def updateData(self, overwrite=True, **kwargs):
        cache = self.getData()

        for k, v in kwargs.items():
            if k in cache.keys() and overwrite is False:
                continue
            
            cache[k] = v

        self.saveData(cache)
