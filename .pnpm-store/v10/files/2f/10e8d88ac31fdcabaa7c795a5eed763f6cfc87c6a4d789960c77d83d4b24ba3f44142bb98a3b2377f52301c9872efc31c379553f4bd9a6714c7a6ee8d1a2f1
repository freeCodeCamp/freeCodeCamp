'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "sendChatMessageFeedback", {
    enumerable: true,
    get: function() {
        return sendChatMessageFeedback;
    }
});
function sendChatMessageFeedback(param) {
    var agentId = param.agentId, vote = param.vote, messageId = param.messageId, appId = param.appId, apiKey = param.apiKey;
    return fetch("https://".concat(appId, ".algolia.net/agent-studio/1/feedback"), {
        method: 'POST',
        body: JSON.stringify({
            messageId: messageId,
            agentId: agentId,
            vote: vote
        }),
        headers: {
            'x-algolia-application-id': appId,
            'x-algolia-api-key': apiKey,
            'content-type': 'application/json'
        }
    }).then(function(response) {
        if (response.status >= 300) {
            return response.json().then(function(data) {
                throw new Error("Feedback request failed with status ".concat(response.status, ": ").concat(data.message));
            });
        }
        return response.json();
    });
}
