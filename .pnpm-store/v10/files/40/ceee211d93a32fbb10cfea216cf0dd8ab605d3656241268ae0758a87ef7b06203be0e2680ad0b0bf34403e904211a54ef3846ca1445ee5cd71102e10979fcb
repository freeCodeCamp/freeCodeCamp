Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const currentScopes = require('./currentScopes.js');

function captureFeedback(params, hint = {}, scope = currentScopes.getCurrentScope()) {
  const { message, name, email, url, source, associatedEventId, tags } = params;
  const feedbackEvent = {
    contexts: {
      feedback: {
        contact_email: email,
        name,
        message,
        url,
        source,
        associated_event_id: associatedEventId
      }
    },
    type: "feedback",
    level: "info",
    tags
  };
  const client = scope?.getClient() || currentScopes.getClient();
  if (client) {
    client.emit("beforeSendFeedback", feedbackEvent, hint);
  }
  const eventId = scope.captureEvent(feedbackEvent, hint);
  return eventId;
}

exports.captureFeedback = captureFeedback;
//# sourceMappingURL=feedback.js.map
