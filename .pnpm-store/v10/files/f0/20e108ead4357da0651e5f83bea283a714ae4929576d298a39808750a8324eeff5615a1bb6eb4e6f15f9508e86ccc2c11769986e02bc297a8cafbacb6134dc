/**
 * Create UUID according to
 * https://www.ietf.org/rfc/rfc4122.txt.
 *
 * @returns Generated UUID.
 */ function createUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        /* eslint-disable no-bitwise */ var r = Math.random() * 16 | 0;
        var v = c === 'x' ? r : r & 0x3 | 0x8;
        /* eslint-enable */ return v.toString(16);
    });
}

export { createUUID };
