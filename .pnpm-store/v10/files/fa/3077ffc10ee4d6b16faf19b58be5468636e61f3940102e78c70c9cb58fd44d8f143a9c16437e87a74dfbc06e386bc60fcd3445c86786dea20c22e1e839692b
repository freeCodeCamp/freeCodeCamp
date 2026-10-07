function serializePayload(payload) {
    return btoa(encodeURIComponent(JSON.stringify(payload)));
}
function deserializePayload(serialized) {
    return JSON.parse(decodeURIComponent(atob(serialized)));
}

export { deserializePayload, serializePayload };
