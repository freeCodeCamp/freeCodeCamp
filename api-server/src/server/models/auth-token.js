import { Observable } from 'rx';

export default function initializeAuthToken(AuthToken) {
  AuthToken.on('dataSourceAttached', () => {
    AuthToken.findOne$ = Observable.fromNodeCallback(
      AuthToken.findOne.bind(AuthToken)
    );
    AuthToken.prototype.validate$ = Observable.fromNodeCallback(
      AuthToken.prototype.validate
    );
    AuthToken.prototype.destroy$ = Observable.fromNodeCallback(
      AuthToken.prototype.destroy
    );
  });
}
