/* import { Observable } from 'rx';

export default function initializeWebhookToken(WebhookToken) {
  WebhookToken.on('dataSourceAttached', () => {
    WebhookToken.findOne$ = Observable.fromNodeCallback(
      WebhookToken.findOne.bind(WebhookToken)
    );
  });
}*/
