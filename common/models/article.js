import { Observable } from 'rx';

module.exports = function(Article) {
  Article.on('dataSourceAttached', () => {
    Article.findOne$ = Observable.fromNodeCallback(Article.findOne, Article);
    Article.findById$ = Observable.fromNodeCallback(Article.findById, Article);
    Article.find$ = Observable.fromNodeCallback(Article.find, Article);
  });
};
