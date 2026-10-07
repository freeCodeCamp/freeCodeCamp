'use strict';

const Mailer = require('./mailer');
const shared = require('./shared');
const SMTPPool = require('./smtp-pool');
const SMTPTransport = require('./smtp-transport');
const SendmailTransport = require('./sendmail-transport');
const StreamTransport = require('./stream-transport');
const JSONTransport = require('./json-transport');
const SESTransport = require('./ses-transport');
const nmfetch = require('./fetch');
const packageData = require('../package.json');

const ETHEREAL_API = (process.env.ETHEREAL_API || 'https://api.nodemailer.com').replace(/\/+$/, '');
const ETHEREAL_WEB = (process.env.ETHEREAL_WEB || 'https://ethereal.email').replace(/\/+$/, '');
const ETHEREAL_API_KEY = (process.env.ETHEREAL_API_KEY || '').replace(/\s*/g, '') || null;
const ETHEREAL_CACHE = ['true', 'yes', 'y', '1'].includes((process.env.ETHEREAL_CACHE || 'yes').toString().trim().toLowerCase());

let testAccount = false;

module.exports.createTransport = function (transporter, defaults) {
    let urlConfig;
    let options;
    let mailer;

    if (
        // provided transporter is a configuration object, not transporter plugin
        (typeof transporter === 'object' && typeof transporter.send !== 'function') ||
        // provided transporter looks like a connection url
        (typeof transporter === 'string' && /^(smtps?|direct):/i.test(transporter))
    ) {
        if ((urlConfig = typeof transporter === 'string' ? transporter : transporter.url)) {
            // parse a configuration URL into configuration options
            options = shared.parseConnectionUrl(urlConfig);
        } else {
            options = transporter;
        }

        if (options.pool) {
            transporter = new SMTPPool(options);
        } else if (options.sendmail) {
            transporter = new SendmailTransport(options);
        } else if (options.streamTransport) {
            transporter = new StreamTransport(options);
        } else if (options.jsonTransport) {
            transporter = new JSONTransport(options);
        } else if (options.SES) {
            transporter = new SESTransport(options);
        } else {
            transporter = new SMTPTransport(options);
        }
    }

    mailer = new Mailer(transporter, options, defaults);

    return mailer;
};

module.exports.createTestAccount = function (apiUrl, callback) {
    let promise;

    if (!callback && typeof apiUrl === 'function') {
        callback = apiUrl;
        apiUrl = false;
    }

    if (!callback) {
        promise = new Promise((resolve, reject) => {
            callback = shared.callbackPromise(resolve, reject);
        });
    }

    if (ETHEREAL_CACHE && testAccount) {
        setImmediate(() => callback(null, testAccount));
        return promise;
    }

    apiUrl = apiUrl || ETHEREAL_API;

    let chunks = [];
    let chunklen = 0;

    let requestHeaders = {};
    let requestBody = {
        requestor: packageData.name,
        version: packageData.version
    };

    if (ETHEREAL_API_KEY) {
        requestHeaders.Authorization = 'Bearer ' + ETHEREAL_API_KEY;
    }

    let req = nmfetch(apiUrl + '/user', {
        contentType: 'application/json',
        method: 'POST',
        headers: requestHeaders,
        body: Buffer.from(JSON.stringify(requestBody))
    });

    req.on('readable', () => {
        let chunk;
        while ((chunk = req.read()) !== null) {
            chunks.push(chunk);
            chunklen += chunk.length;
        }
    });

    req.once('error', err => callback(err));

    req.once('end', () => {
        let res = Buffer.concat(chunks, chunklen);
        let data;
        let err;
        try {
            data = JSON.parse(res.toString());
        } catch (E) {
            err = E;
        }
        if (err) {
            return callback(err);
        }
        if (data.status !== 'success' || data.error) {
            return callback(new Error(data.error || 'Request failed'));
        }
        delete data.status;
        testAccount = data;
        callback(null, testAccount);
    });

    return promise;
};

module.exports.getTestMessageUrl = function (info) {
    if (!info || !info.response) {
        return false;
    }

    let infoProps = new Map();
    info.response.replace(/\[([^\]]+)\]$/, (m, props) => {
        props.replace(/\b([A-Z0-9]+)=([^\s]+)/g, (m, key, value) => {
            infoProps.set(key, value);
        });
    });

    if (infoProps.has('STATUS') && infoProps.has('MSGID')) {
        return (testAccount.web || ETHEREAL_WEB) + '/message/' + infoProps.get('MSGID');
    }

    return false;
};
