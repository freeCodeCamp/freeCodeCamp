const STORE_NAME = "IdentityIds";
export class IndexedDbStorage {
    constructor(dbName = "aws:cognito-identity-ids") {
        this.dbName = dbName;
    }
    getItem(key) {
        return this.withObjectStore("readonly", (store) => {
            const req = store.get(key);
            return new Promise((resolve) => {
                req.onerror = () => resolve(null);
                req.onsuccess = () => resolve(req.result ? req.result.value : null);
            });
        }).catch(() => null);
    }
    removeItem(key) {
        return this.withObjectStore("readwrite", (store) => {
            const req = store.delete(key);
            return new Promise((resolve, reject) => {
                req.onerror = () => reject(req.error);
                req.onsuccess = () => resolve();
            });
        });
    }
    setItem(id, value) {
        return this.withObjectStore("readwrite", (store) => {
            const req = store.put({ id, value });
            return new Promise((resolve, reject) => {
                req.onerror = () => reject(req.error);
                req.onsuccess = () => resolve();
            });
        });
    }
    getDb() {
        const openDbRequest = self.indexedDB.open(this.dbName, 1);
        return new Promise((resolve, reject) => {
            openDbRequest.onsuccess = () => {
                resolve(openDbRequest.result);
            };
            openDbRequest.onerror = () => {
                reject(openDbRequest.error);
            };
            openDbRequest.onblocked = () => {
                reject(new Error("Unable to access DB"));
            };
            openDbRequest.onupgradeneeded = () => {
                const db = openDbRequest.result;
                db.onerror = () => {
                    reject(new Error("Failed to create object store"));
                };
                db.createObjectStore(STORE_NAME, { keyPath: "id" });
            };
        });
    }
    withObjectStore(mode, action) {
        return this.getDb().then((db) => {
            const tx = db.transaction(STORE_NAME, mode);
            tx.oncomplete = () => db.close();
            return new Promise((resolve, reject) => {
                tx.onerror = () => reject(tx.error);
                resolve(action(tx.objectStore(STORE_NAME)));
            }).catch((err) => {
                db.close();
                throw err;
            });
        });
    }
}
