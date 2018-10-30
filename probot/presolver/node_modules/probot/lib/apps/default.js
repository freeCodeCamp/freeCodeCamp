"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var path_1 = __importDefault(require("path"));
module.exports = function (app) {
    var route = app.route();
    route.get('/probot', function (req, res) {
        var pkg;
        try {
            pkg = require(path_1.default.join(process.cwd(), 'package.json'));
        }
        catch (e) {
            pkg = {};
        }
        res.render('probot.hbs', pkg);
    });
    route.get('/', function (req, res, next) { return res.redirect('/probot'); });
};
//# sourceMappingURL=default.js.map