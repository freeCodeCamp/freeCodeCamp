import debugFactory from 'debug';
const log = debugFactory('fcc:boot:user');

/*
 * User tokens for submitting external curriculum are deleted when they sign
 * out, reset their account, or delete their account
 */

export function createDeleteWebhookToken(app) {
  const { WebhookToken } = app.models;

  return async function deleteWebhookToken(req, res, next) {
    try {
      await WebhookToken.destroyAll({ userId: req.user.id });
      req.webhookTokenDeleted = true;
    } catch (e) {
      req.webhookTokenDeleted = false;
      log(
        `An error occurred deleting webhook tokens for user with id ${req.user.id}`
      );
    }

    next();
  };
}
