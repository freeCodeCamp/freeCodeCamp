import { Observable } from 'rx';

export default function extendEmail(app) {
  const { AccessToken, Email } = app.models;
  Email.send$ = Observable.fromNodeCallback(Email.send, Email);
  AccessToken.findOne$ = Observable.fromNodeCallback(
    AccessToken.findOne.bind(AccessToken)
  );
  AccessToken.prototype.validate$ = Observable.fromNodeCallback(
    AccessToken.prototype.validate
  );
  AccessToken.prototype.destroy$ = Observable.fromNodeCallback(
    AccessToken.prototype.destroy
  );
}
