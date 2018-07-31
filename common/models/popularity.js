import { Observable } from 'rx';

module.exports = function(Popularity) {
  Popularity.on('dataSourceAttached', () => {
    Popularity.findOne$ = Observable.fromNodeCallback(
      Popularity.findOne,
      Popularity
    );
    Popularity.findById$ = Observable.fromNodeCallback(
      Popularity.findById,
      Popularity
    );
    Popularity.find$ = Observable.fromNodeCallback(Popularity.find, Popularity);
  });
};
