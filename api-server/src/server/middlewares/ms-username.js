import debugFactory from 'debug';
const log = debugFactory('fcc:boot:user');

export function createDeleteMsUsername(app) {
  const { MsUsername } = app.models;

  return async function deleteMsUsername(req, res, next) {
    try {
      await MsUsername.destroyAll({ userId: req.user.id });
      req.msUsernameDeleted = true;
    } catch (e) {
      req.msUsernameDeleted = false;
      log(
        `An error occurred deleting Microsoft username for user with id ${req.user.id}`
      );
    }

    next();
  };
}
