import { IndexedDbStorage } from "./IndexedDbStorage";
import { InMemoryStorage } from "./InMemoryStorage";
const inMemoryStorage = new InMemoryStorage();
export function localStorage() {
    if (typeof self === "object" && self.indexedDB) {
        return new IndexedDbStorage();
    }
    if (typeof window === "object" && window.localStorage) {
        return window.localStorage;
    }
    return inMemoryStorage;
}
