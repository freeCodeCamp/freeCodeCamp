class ObjectPool {
    constructor(_create) {
        this._create = _create;
        this._unused = new Set();
        this._used = new Set();
        this._itemData = new Map();
    }
    getUnusedObj(data) {
        let obj;
        if (this._unused.size === 0) {
            obj = this._create(data);
            this._itemData.set(obj, data);
        }
        else {
            const values = [...this._unused.values()];
            obj = values.find(obj => this._itemData.get(obj).getId() === data.getId()) ?? values[0];
            this._unused.delete(obj);
            this._itemData.set(obj, data);
            obj.setData(data);
        }
        this._used.add(obj);
        return {
            object: obj,
            dispose: () => {
                this._used.delete(obj);
                if (this._unused.size > 5) {
                    obj.dispose();
                }
                else {
                    this._unused.add(obj);
                }
            }
        };
    }
    dispose() {
        for (const obj of this._used) {
            obj.dispose();
        }
        for (const obj of this._unused) {
            obj.dispose();
        }
        this._used.clear();
        this._unused.clear();
    }
}

export { ObjectPool };
