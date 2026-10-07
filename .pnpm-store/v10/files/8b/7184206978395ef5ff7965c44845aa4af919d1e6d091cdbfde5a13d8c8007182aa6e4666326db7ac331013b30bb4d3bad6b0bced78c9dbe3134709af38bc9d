import { getClient, getCurrentScope } from './currentScopes.js';

function captureFeedback(params, hint = {}, scope = getCurrentScope()) {
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
  const client = scope?.getClient() || getClient();
  if (client) {
    client.emit("beforeSendFeedback", feedbackEvent, hint);
  }
  const eventId = scope.captureEvent(feedbackEvent, hint);
  return eventId;
}

export { captureFeedback };
//# sourceMappingURL=feedback.js.map
