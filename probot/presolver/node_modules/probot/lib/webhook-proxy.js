"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWebhookProxy = function (opts) {
    try {
        // tslint:disable-next-line
        var SmeeClient = require('smee-client');
        var smee = new SmeeClient({
            logger: opts.logger,
            source: opts.url,
            target: "http://localhost:" + opts.port + opts.path
        });
        return smee.start();
    }
    catch (err) {
        opts.logger.warn('Run `npm install --save-dev smee-client` to proxy webhooks to localhost.');
    }
};
//# sourceMappingURL=webhook-proxy.js.map