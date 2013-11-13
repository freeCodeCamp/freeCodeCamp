var expect = require('chai').expect
    , sinon = require('sinon')
    , AuthCtrl = require('../../../controllers/auth')
    , User = require('../../../models/User');

describe('Auth controller Unit Tests - ', function() {

    var req = { }
        , res = {}
        , next = {}
        , sandbox = sinon.sandbox.create();

    beforeEach(function() {

    });

    afterEach(function() {
        sandbox.restore();
    });

    describe('register()', function() {

        beforeEach(function() {
            req.body = {
                username: "user",
                password: "pass",
                role: 1
            };
        });

        it('should return a 400 when user validation fails', function(done) {

            var userValidateStub = sandbox.stub(User, 'validate').throws();
            res.send = function(httpStatus) {
                expect(httpStatus).to.equal(400);
                done();
            };

            AuthCtrl.register(req, res, next);
        });

        it('should return a 403 when UserAlreadyExists error is returned from User.addUser()', function(done) {
            var userValidateStub = sandbox.stub(User, 'validate').returns();
            var userAddUserStub = sandbox.stub(User, 'addUser', function(username, password, role, callback) {
                callback('UserAlreadyExists');
            });

            res.send = function(httpStatus) {
                expect(httpStatus).to.equal(403);
                done();
            };

            AuthCtrl.register(req, res, next);
        });

        it('should return a 500 if error other than UserAlreadyExists is returned from User.addUser()', function(done) {
            var userValidateStub = sandbox.stub(User, 'validate').returns();
            var userAddUserStub = sandbox.stub(User, 'addUser', function(username, password, role, callback) {
                callback('SomeError');
            });

            res.send = function(httpStatus) {
                expect(httpStatus).to.equal(500);
                done();
            };

            AuthCtrl.register(req, res, next);
        });

        it('should call next() with an error argument if req.logIn() returns error', function(done) {
            var userValidateStub = sandbox.stub(User, 'validate').returns();
            var userAddUserStub = sandbox.stub(User, 'addUser', function(username, password, role, callback) {
                callback(null, req.body);
            });
            req.logIn = function(user, callback) { return callback('SomeError'); };

            next = function(err) {
                expect(err).to.exist;
                done();
            };

            AuthCtrl.register(req, res, next);
        });

        it('should return a 200 with a username and role in the response body', function(done) {
            var userValidateStub = sandbox.stub(User, 'validate').returns();
            var userAddUserStub = sandbox.stub(User, 'addUser', function(username, password, role, callback) {
                callback(null, req.body);
            });
            req.logIn = function(user, callback) { return callback(null); };

            res.json = function(httpStatus, user) {
                expect(httpStatus).to.equal(200);
                expect(user.username).to.exist;
                expect(user.role).to.exist;
                done();
            };

            AuthCtrl.register(req, res, next);
        });
    });
});