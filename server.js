var express = require('express'),
    mongoose = require('mongoose'),
    fs = require('fs'),
    config = require('./conf');


var db = mongoose.connect(config.db);
var app = express();


/**
 * Express Settings
 */
app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(config.root + '/public'));


/**
 * API Routes
 */
app.post('/api/users', users.create);
app.get('/api/users/me', users.me);
app.get('/api/users/:userId', users.show);
app.get('/api/articles', articles.all);
app.post('/api/articles', requiresLogin, articles.create);
app.get('/api/articles/:articleId', articles.show);
app.put('/api/articles/:articleId', auth.requiresLogin, auth.article.hasAuthorization, articles.update);
app.del('/api/articles/:articleId', auth.requiresLogin, auth.article.hasAuthorization, articles.destroy);


app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});