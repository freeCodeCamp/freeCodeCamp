'use strict';

const EventEmitter = require('events');
const shared = require('../shared');
const mimeTypes = require('../mime-funcs/mime-types');
const MailComposer = require('../mail-composer');
const DKIM = require('../dkim');
const httpProxyClient = require('../smtp-connection/http-proxy-client');
const util = require('util');
const urllib = require('url');
const packageData = require('../../package.json');
const MailMessage = require('./mail-message');
const net = require('net');
const dns = require('dns');
const crypto = require('crypto');

/**
 * Creates an object for exposing the Mail API
 *
 * @constructor
 * @param {Object} transporter Transport object instance to pass the mails to
 */
class Mail extends EventEmitter {
    constructor(transporter, options, defaults) {
        super();

        this.options = options || {};
        this._defaults = defaults || {};

        this._defaultPlugins = {
            compile: [(...args) => this._convertDataImages(...args)],
            stream: []
        };

        this._userPlugins = {
            compile: [],
            stream: []
        };

        this.meta = new Map();

        this.dkim = this.options.dkim ? new DKIM(this.options.dkim) : false;

        this.transporter = transporter;
        this.transporter.mailer = this;

        this.logger = shared.getLogger(this.options, {
            component: this.options.component || 'mail'
        });

        this.logger.debug(
            {
                tnx: 'create'
            },
            'Creating transport: %s',
            this.getVersionString()
        );

        // setup emit handlers for the transporter
        if (typeof this.transporter.on === 'function') {
            // deprecated log interface
            this.transporter.on('log', log => {
                this.logger.debug(
                    {
                        tnx: 'transport'
                    },
                    '%s: %s',
                    log.type,
                    log.message
                );
            });

            // transporter errors
            this.transporter.on('error', err => {
                this.logger.error(
                    {
                        err,
                        tnx: 'transport'
                    },
                    'Transport Error: %s',
                    err.message
                );
                this.emit('error', err);
            });

            // indicates if the sender has became idle
            this.transporter.on('idle', (...args) => {
                this.emit('idle', ...args);
            });
        }

        /**
         * Optional methods passed to the underlying transport object
         */
        ['close', 'isIdle', 'verify'].forEach(method => {
            this[method] = (...args) => {
                if (typeof this.transporter[method] === 'function') {
                    if (method === 'verify' && typeof this.getSocket === 'function') {
                        this.transporter.getSocket = this.getSocket;
                        this.getSocket = false;
                    }
                    return this.transporter[method](...args);
                } else {
                    this.logger.warn(
                        {
                            tnx: 'transport',
                            methodName: method
                        },
                        'Non existing method %s called for transport',
                        method
                    );
                    return false;
                }
            };
        });

        // setup proxy handling
        if (this.options.proxy && typeof this.options.proxy === 'string') {
            this.setupProxy(this.options.proxy);
        }
    }

    use(step, plugin) {
        step = (step || '').toString();
        if (!this._userPlugins.hasOwnProperty(step)) {
            this._userPlugins[step] = [plugin];
        } else {
            this._userPlugins[step].push(plugin);
        }

        return this;
    }

    /**
     * Sends an email using the preselected transport object
     *
     * @param {Object} data E-data description
     * @param {Function?} callback Callback to run once the sending succeeded or failed
     */
    sendMail(data, callback = null) {
        let promise;

        if (!callback) {
            promise = new Promise((resolve, reject) => {
                callback = shared.callbackPromise(resolve, reject);
            });
        }

        if (typeof this.getSocket === 'function') {
            this.transporter.getSocket = this.getSocket;
            this.getSocket = false;
        }

        let mail = new MailMessage(this, data);

        this.logger.debug(
            {
                tnx: 'transport',
                name: this.transporter.name,
                version: this.transporter.version,
                action: 'send'
            },
            'Sending mail using %s/%s',
            this.transporter.name,
            this.transporter.version
        );

        this._processPlugins('compile', mail, err => {
            if (err) {
                this.logger.error(
                    {
                        err,
                        tnx: 'plugin',
                        action: 'compile'
                    },
                    'PluginCompile Error: %s',
                    err.message
                );
                return callback(err);
            }

            mail.message = new MailComposer(mail.data).compile();

            mail.setMailerHeader();
            mail.setPriorityHeaders();
            mail.setListHeaders();

            this._processPlugins('stream', mail, err => {
                if (err) {
                    this.logger.error(
                        {
                            err,
                            tnx: 'plugin',
                            action: 'stream'
                        },
                        'PluginStream Error: %s',
                        err.message
                    );
                    return callback(err);
                }

                if (mail.data.dkim || this.dkim) {
                    mail.message.processFunc(input => {
                        let dkim = mail.data.dkim ? new DKIM(mail.data.dkim) : this.dkim;
                        this.logger.debug(
                            {
                                tnx: 'DKIM',
                                messageId: mail.message.messageId(),
                                dkimDomains: dkim.keys.map(key => key.keySelector + '.' + key.domainName).join(', ')
                            },
                            'Signing outgoing message with %s keys',
                            dkim.keys.length
                        );
                        return dkim.sign(input, mail.data._dkim);
                    });
                }

                this.transporter.send(mail, (...args) => {
                    if (args[0]) {
                        this.logger.error(
                            {
                                err: args[0],
                                tnx: 'transport',
                                action: 'send'
                            },
                            'Send Error: %s',
                            args[0].message
                        );
                    }
                    callback(...args);
                });
            });
        });

        return promise;
    }

    getVersionString() {
        return util.format('%s (%s; +%s; %s/%s)', packageData.name, packageData.version, packageData.homepage, this.transporter.name, this.transporter.version);
    }

    _processPlugins(step, mail, callback) {
        step = (step || '').toString();

        if (!this._userPlugins.hasOwnProperty(step)) {
            return callback();
        }

        let userPlugins = this._userPlugins[step] || [];
        let defaultPlugins = this._defaultPlugins[step] || [];

        if (userPlugins.length) {
            this.logger.debug(
                {
                    tnx: 'transaction',
                    pluginCount: userPlugins.length,
                    step
                },
                'Using %s plugins for %s',
                userPlugins.length,
                step
            );
        }

        if (userPlugins.length + defaultPlugins.length === 0) {
            return callback();
        }

        let pos = 0;
        let block = 'default';
        let processPlugins = () => {
            let curplugins = block === 'default' ? defaultPlugins : userPlugins;
            if (pos >= curplugins.length) {
                if (block === 'default' && userPlugins.length) {
                    block = 'user';
                    pos = 0;
                    curplugins = userPlugins;
                } else {
                    return callback();
                }
            }
            let plugin = curplugins[pos++];
            plugin(mail, err => {
                if (err) {
                    return callback(err);
                }
                processPlugins();
            });
        };

        processPlugins();
    }

    /**
     * Sets up proxy handler for a Nodemailer object
     *
     * @param {String} proxyUrl Proxy configuration url
     */
    setupProxy(proxyUrl) {
        let proxy = urllib.parse(proxyUrl);

        // setup socket handler for the mailer object
        this.getSocket = (options, callback) => {
            let protocol = proxy.protocol.replace(/:$/, '').toLowerCase();

            if (this.meta.has('proxy_handler_' + protocol)) {
                return this.meta.get('proxy_handler_' + protocol)(proxy, options, callback);
            }

            switch (protocol) {
                // Connect using a HTTP CONNECT method
                case 'http':
                case 'https':
                    httpProxyClient(proxy.href, options.port, options.host, (err, socket) => {
                        if (err) {
                            return callback(err);
                        }
                        return callback(null, {
                            connection: socket
                        });
                    });
                    return;
                case 'socks':
                case 'socks5':
                case 'socks4':
                case 'socks4a': {
                    if (!this.meta.has('proxy_socks_module')) {
                        return callback(new Error('Socks module not loaded'));
                    }
                    let connect = ipaddress => {
                        let proxyV2 = !!this.meta.get('proxy_socks_module').SocksClient;
                        let socksClient = proxyV2 ? this.meta.get('proxy_socks_module').SocksClient : this.meta.get('proxy_socks_module');
                        let proxyType = Number(proxy.protocol.replace(/\D/g, '')) || 5;
                        let connectionOpts = {
                            proxy: {
                                ipaddress,
                                port: Number(proxy.port),
                                type: proxyType
                            },
                            [proxyV2 ? 'destination' : 'target']: {
                                host: options.host,
                                port: options.port
                            },
                            command: 'connect'
                        };

                        if (proxy.auth) {
                            let username = decodeURIComponent(proxy.auth.split(':').shift());
                            let password = decodeURIComponent(proxy.auth.split(':').pop());
                            if (proxyV2) {
                                connectionOpts.proxy.userId = username;
                                connectionOpts.proxy.password = password;
                            } else if (proxyType === 4) {
                                connectionOpts.userid = username;
                            } else {
                                connectionOpts.authentication = {
                                    username,
                                    password
                                };
                            }
                        }

                        socksClient.createConnection(connectionOpts, (err, info) => {
                            if (err) {
                                return callback(err);
                            }
                            return callback(null, {
                                connection: info.socket || info
                            });
                        });
                    };

                    if (net.isIP(proxy.hostname)) {
                        return connect(proxy.hostname);
                    }

                    return dns.resolve(proxy.hostname, (err, address) => {
                        if (err) {
                            return callback(err);
                        }
                        connect(Array.isArray(address) ? address[0] : address);
                    });
                }
            }
            callback(new Error('Unknown proxy configuration'));
        };
    }

    _convertDataImages(mail, callback) {
        if ((!this.options.attachDataUrls && !mail.data.attachDataUrls) || !mail.data.html) {
            return callback();
        }
        mail.resolveContent(mail.data, 'html', (err, html) => {
            if (err) {
                return callback(err);
            }
            let cidCounter = 0;
            html = (html || '')
                .toString()
                .replace(/(<img\b[^<>]{0,1024} src\s{0,20}=[\s"']{0,20})(data:([^;]+);[^"'>\s]+)/gi, (match, prefix, dataUri, mimeType) => {
                    let cid = crypto.randomBytes(10).toString('hex') + '@localhost';
                    if (!mail.data.attachments) {
                        mail.data.attachments = [];
                    }
                    if (!Array.isArray(mail.data.attachments)) {
                        mail.data.attachments = [].concat(mail.data.attachments || []);
                    }
                    mail.data.attachments.push({
                        path: dataUri,
                        cid,
                        filename: 'image-' + ++cidCounter + '.' + mimeTypes.detectExtension(mimeType)
                    });
                    return prefix + 'cid:' + cid;
                });
            mail.data.html = html;
            callback();
        });
    }

    set(key, value) {
        return this.meta.set(key, value);
    }

    get(key) {
        return this.meta.get(key);
    }
}

module.exports = Mail;
