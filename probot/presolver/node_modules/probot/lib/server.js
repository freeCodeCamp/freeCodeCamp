"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
// Teach express to properly handle async errors
// tslint:disable-next-line:no-var-requires
require('express-async-errors');
var logging_1 = require("./middleware/logging");
exports.createServer = function (args) {
    var app = express_1.default();
    app.use(logging_1.logRequest({ logger: args.logger }));
    app.use('/probot/static/', express_1.default.static(path_1.default.join(__dirname, '..', 'static')));
    app.use(args.webhook);
    app.set('view engine', 'hbs');
    app.set('views', path_1.default.join(__dirname, '..', 'views'));
    app.get('/ping', function (req, res) { return res.end('PONG'); });
    return app;
};
//# sourceMappingURL=server.js.map