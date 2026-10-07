'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getAlgoliaAgent", {
    enumerable: true,
    get: function() {
        return getAlgoliaAgent;
    }
});
function getAlgoliaAgent(client) {
    var clientTyped = client;
    return clientTyped.transporter && clientTyped.transporter.userAgent ? clientTyped.transporter.userAgent.value : clientTyped._ua;
}
