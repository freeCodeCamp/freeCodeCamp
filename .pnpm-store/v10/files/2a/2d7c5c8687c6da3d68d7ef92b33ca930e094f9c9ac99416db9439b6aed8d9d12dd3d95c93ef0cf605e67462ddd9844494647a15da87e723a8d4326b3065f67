function yieldToMain() {
    // eslint-disable-next-line no-undef
    const g = typeof globalThis !== 'undefined' ? globalThis : undefined;
    if (g && g.scheduler && g.scheduler.yield) {
        return g.scheduler.yield().catch((error) => {
            // eslint-disable-next-line no-console
            console.error('Failed to yield to main: ', error);
            return new Promise(resolve => setTimeout(resolve, 0));
        });
    }
    return new Promise(resolve => setTimeout(resolve, 0));
}
function createBrowserLocalStorageCache(options) {
    const namespaceKey = `algoliasearch-client-js-${options.key}`;
    // eslint-disable-next-line functional/no-let
    let storage;
    const getStorage = () => {
        if (storage === undefined) {
            storage = options.localStorage || window.localStorage;
        }
        return storage;
    };
    const getNamespace = () => {
        return JSON.parse(getStorage().getItem(namespaceKey) || '{}');
    };
    const setNamespace = (namespace) => {
        getStorage().setItem(namespaceKey, JSON.stringify(namespace));
    };
    const getFilteredNamespace = () => {
        const timeToLive = options.timeToLive ? options.timeToLive * 1000 : null;
        const namespace = getNamespace();
        const currentTime = new Date().getTime();
        return Object.fromEntries(Object.entries(namespace).filter(([, cacheItem]) => {
            if (!cacheItem || cacheItem.timestamp === undefined) {
                return false;
            }
            if (!timeToLive) {
                return true;
            }
            return cacheItem.timestamp + timeToLive >= currentTime;
        }));
    };
    return {
        get(key, defaultValue, events = {
            miss: () => Promise.resolve(),
        }) {
            return yieldToMain().then(() => {
                const namespace = getFilteredNamespace();
                const keyAsString = JSON.stringify(key);
                const cachedItem = namespace[keyAsString];
                setNamespace(namespace);
                if (cachedItem) {
                    return cachedItem.value;
                }
                // eslint-disable-next-line promise/no-nesting
                return defaultValue().then((value) => events.miss(value).then(() => value));
            });
        },
        set(key, value) {
            return yieldToMain().then(() => {
                const namespace = getNamespace();
                // eslint-disable-next-line functional/immutable-data
                namespace[JSON.stringify(key)] = {
                    timestamp: new Date().getTime(),
                    value,
                };
                getStorage().setItem(namespaceKey, JSON.stringify(namespace));
                return value;
            });
        },
        delete(key) {
            return yieldToMain().then(() => {
                const namespace = getNamespace();
                // eslint-disable-next-line functional/immutable-data
                delete namespace[JSON.stringify(key)];
                getStorage().setItem(namespaceKey, JSON.stringify(namespace));
            });
        },
        clear() {
            return Promise.resolve().then(() => {
                getStorage().removeItem(namespaceKey);
            });
        },
    };
}

export { createBrowserLocalStorageCache };
