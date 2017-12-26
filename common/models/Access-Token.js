import { Observable } from 'rx';

module.exports = AccessToken => {
  // wait for datasource to attach before adding methods
  // prevents loopback from unnecessarily
  // adding watchers on startup
  AccessToken.on('dataSourceAttached', () => {
    AccessToken.findOne$ = Observable.fromNodeCallback(
      AccessToken.findOne.bind(AccessToken)
    );
  });
};
