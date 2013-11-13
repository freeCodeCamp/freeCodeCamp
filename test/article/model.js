/**
 * Module dependencies.
 */
var should = require('should'),
    app = require('../../server'),
    mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Article = mongoose.model('Article');

//Globals
var user;
var article;

//The tests
describe('<Unit Test>', function() {
    describe('Model Article:', function() {
        beforeEach(function(done) {
            user = new User({
                name: 'Full name',
                email: 'test@test.com',
                username: 'user',
                password: 'password'
            });

            user.save(function(err) {
                article = new Article({
                    title: 'Article Title',
                    content: 'Article Content',
                    user: user
                });

                done();
            });
        });

        describe('Method Save', function() {
            it('should be able to save without problems', function(done) {
                return article.save(function(err) {
                    should.not.exist(err);
                    done();
                });
            });

            it('should be able to show an error when try to save without title', function(done) {
                article.title = '';

                return article.save(function(err) {
                    should.exist(err);
                    done();
                });
            });
        });

        afterEach(function(done) {
            Article.remove({});
            User.remove({});
            done();
        });
        after(function(done){
            Article.remove().exec();
            User.remove().exec();
            done();
        });
    });
});
