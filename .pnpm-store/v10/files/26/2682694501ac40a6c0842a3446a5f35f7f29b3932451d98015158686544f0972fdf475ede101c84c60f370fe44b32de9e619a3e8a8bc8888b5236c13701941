'use strict';

const Stream = require('stream').Stream;
const nmfetch = require('../fetch');
const crypto = require('crypto');
const shared = require('../shared');

/**
 * XOAUTH2 access_token generator for Gmail.
 * Create client ID for web applications in Google API console to use it.
 * See Offline Access for receiving the needed refreshToken for an user
 * https://developers.google.com/accounts/docs/OAuth2WebServer#offline
 *
 * Usage for generating access tokens with a custom method using provisionCallback:
 * provisionCallback(user, renew, callback)
 *   * user is the username to get the token for
 *   * renew is a boolean that if true indicates that existing token failed and needs to be renewed
 *   * callback is the callback to run with (error, accessToken [, expires])
 *     * accessToken is a string
 *     * expires is an optional expire time in milliseconds
 * If provisionCallback is used, then Nodemailer does not try to attempt generating the token by itself
 *
 * @constructor
 * @param {Object} options Client information for token generation
 * @param {String} options.user User e-mail address
 * @param {String} options.clientId Client ID value
 * @param {String} options.clientSecret Client secret value
 * @param {String} options.refreshToken Refresh token for an user
 * @param {String} options.accessUrl Endpoint for token generation, defaults to 'https://accounts.google.com/o/oauth2/token'
 * @param {String} options.accessToken An existing valid accessToken
 * @param {String} options.privateKey Private key for JSW
 * @param {Number} options.expires Optional Access Token expire time in ms
 * @param {Number} options.timeout Optional TTL for Access Token in seconds
 * @param {Function} options.provisionCallback Function to run when a new access token is required
 */
class XOAuth2 extends Stream {
    constructor(options, logger) {
        super();

        this.options = options || {};

        if (options && options.serviceClient) {
            if (!options.privateKey || !options.user) {
                setImmediate(() => this.emit('error', new Error('Options "privateKey" and "user" are required for service account!')));
                return;
            }

            let serviceRequestTimeout = Math.min(Math.max(Number(this.options.serviceRequestTimeout) || 0, 0), 3600);
            this.options.serviceRequestTimeout = serviceRequestTimeout || 5 * 60;
        }

        this.logger = shared.getLogger(
            {
                logger
            },
            {
                component: this.options.component || 'OAuth2'
            }
        );

        this.provisionCallback = typeof this.options.provisionCallback === 'function' ? this.options.provisionCallback : false;

        this.options.accessUrl = this.options.accessUrl || 'https://accounts.google.com/o/oauth2/token';
        this.options.customHeaders = this.options.customHeaders || {};
        this.options.customParams = this.options.customParams || {};

        this.accessToken = this.options.accessToken || false;

        if (this.options.expires && Number(this.options.expires)) {
            this.expires = this.options.expires;
        } else {
            let timeout = Math.max(Number(this.options.timeout) || 0, 0);
            this.expires = (timeout && Date.now() + timeout * 1000) || 0;
        }
    }

    /**
     * Returns or generates (if previous has expired) a XOAuth2 token
     *
     * @param {Boolean} renew If false then use cached access token (if available)
     * @param {Function} callback Callback function with error object and token string
     */
    getToken(renew, callback) {
        if (!renew && this.accessToken && (!this.expires || this.expires > Date.now())) {
            return callback(null, this.accessToken);
        }

        let generateCallback = (...args) => {
            if (args[0]) {
                this.logger.error(
                    {
                        err: args[0],
                        tnx: 'OAUTH2',
                        user: this.options.user,
                        action: 'renew'
                    },
                    'Failed generating new Access Token for %s',
                    this.options.user
                );
            } else {
                this.logger.info(
                    {
                        tnx: 'OAUTH2',
                        user: this.options.user,
                        action: 'renew'
                    },
                    'Generated new Access Token for %s',
                    this.options.user
                );
            }
            callback(...args);
        };

        if (this.provisionCallback) {
            this.provisionCallback(this.options.user, !!renew, (err, accessToken, expires) => {
                if (!err && accessToken) {
                    this.accessToken = accessToken;
                    this.expires = expires || 0;
                }
                generateCallback(err, accessToken);
            });
        } else {
            this.generateToken(generateCallback);
        }
    }

    /**
     * Updates token values
     *
     * @param {String} accessToken New access token
     * @param {Number} timeout Access token lifetime in seconds
     *
     * Emits 'token': { user: User email-address, accessToken: the new accessToken, timeout: TTL in seconds}
     */
    updateToken(accessToken, timeout) {
        this.accessToken = accessToken;
        timeout = Math.max(Number(timeout) || 0, 0);
        this.expires = (timeout && Date.now() + timeout * 1000) || 0;

        this.emit('token', {
            user: this.options.user,
            accessToken: accessToken || '',
            expires: this.expires
        });
    }

    /**
     * Generates a new XOAuth2 token with the credentials provided at initialization
     *
     * @param {Function} callback Callback function with error object and token string
     */
    generateToken(callback) {
        let urlOptions;
        let loggedUrlOptions;
        if (this.options.serviceClient) {
            // service account - https://developers.google.com/identity/protocols/OAuth2ServiceAccount
            let iat = Math.floor(Date.now() / 1000); // unix time
            let tokenData = {
                iss: this.options.serviceClient,
                scope: this.options.scope || 'https://mail.google.com/',
                sub: this.options.user,
                aud: this.options.accessUrl,
                iat,
                exp: iat + this.options.serviceRequestTimeout
            };
            let token;
            try {
                token = this.jwtSignRS256(tokenData);
            } catch (err) {
                return callback(new Error('Can\x27t generate token. Check your auth options'));
            }

            urlOptions = {
                grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
                assertion: token
            };

            loggedUrlOptions = {
                grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
                assertion: tokenData
            };
        } else {
            if (!this.options.refreshToken) {
                return callback(new Error('Can\x27t create new access token for user'));
            }

            // web app - https://developers.google.com/identity/protocols/OAuth2WebServer
            urlOptions = {
                client_id: this.options.clientId || '',
                client_secret: this.options.clientSecret || '',
                refresh_token: this.options.refreshToken,
                grant_type: 'refresh_token'
            };

            loggedUrlOptions = {
                client_id: this.options.clientId || '',
                client_secret: (this.options.clientSecret || '').substr(0, 6) + '...',
                refresh_token: (this.options.refreshToken || '').substr(0, 6) + '...',
                grant_type: 'refresh_token'
            };
        }

        Object.keys(this.options.customParams).forEach(key => {
            urlOptions[key] = this.options.customParams[key];
            loggedUrlOptions[key] = this.options.customParams[key];
        });

        this.logger.debug(
            {
                tnx: 'OAUTH2',
                user: this.options.user,
                action: 'generate'
            },
            'Requesting token using: %s',
            JSON.stringify(loggedUrlOptions)
        );

        this.postRequest(this.options.accessUrl, urlOptions, this.options, (error, body) => {
            let data;

            if (error) {
                return callback(error);
            }

            try {
                data = JSON.parse(body.toString());
            } catch (E) {
                return callback(E);
            }

            if (!data || typeof data !== 'object') {
                this.logger.debug(
                    {
                        tnx: 'OAUTH2',
                        user: this.options.user,
                        action: 'post'
                    },
                    'Response: %s',
                    (body || '').toString()
                );
                return callback(new Error('Invalid authentication response'));
            }

            let logData = {};
            Object.keys(data).forEach(key => {
                if (key !== 'access_token') {
                    logData[key] = data[key];
                } else {
                    logData[key] = (data[key] || '').toString().substr(0, 6) + '...';
                }
            });

            this.logger.debug(
                {
                    tnx: 'OAUTH2',
                    user: this.options.user,
                    action: 'post'
                },
                'Response: %s',
                JSON.stringify(logData)
            );

            if (data.error) {
                // Error Response : https://tools.ietf.org/html/rfc6749#section-5.2
                let errorMessage = data.error;
                if (data.error_description) {
                    errorMessage += ': ' + data.error_description;
                }
                if (data.error_uri) {
                    errorMessage += ' (' + data.error_uri + ')';
                }
                return callback(new Error(errorMessage));
            }

            if (data.access_token) {
                this.updateToken(data.access_token, data.expires_in);
                return callback(null, this.accessToken);
            }

            return callback(new Error('No access token'));
        });
    }

    /**
     * Converts an access_token and user id into a base64 encoded XOAuth2 token
     *
     * @param {String} [accessToken] Access token string
     * @return {String} Base64 encoded token for IMAP or SMTP login
     */
    buildXOAuth2Token(accessToken) {
        let authData = ['user=' + (this.options.user || ''), 'auth=Bearer ' + (accessToken || this.accessToken), '', ''];
        return Buffer.from(authData.join('\x01'), 'utf-8').toString('base64');
    }

    /**
     * Custom POST request handler.
     * This is only needed to keep paths short in Windows – usually this module
     * is a dependency of a dependency and if it tries to require something
     * like the request module the paths get way too long to handle for Windows.
     * As we do only a simple POST request we do not actually require complicated
     * logic support (no redirects, no nothing) anyway.
     *
     * @param {String} url Url to POST to
     * @param {String|Buffer} payload Payload to POST
     * @param {Function} callback Callback function with (err, buff)
     */
    postRequest(url, payload, params, callback) {
        let returned = false;

        let chunks = [];
        let chunklen = 0;

        let req = nmfetch(url, {
            method: 'post',
            headers: params.customHeaders,
            body: payload,
            allowErrorResponse: true
        });

        req.on('readable', () => {
            let chunk;
            while ((chunk = req.read()) !== null) {
                chunks.push(chunk);
                chunklen += chunk.length;
            }
        });

        req.once('error', err => {
            if (returned) {
                return;
            }
            returned = true;
            return callback(err);
        });

        req.once('end', () => {
            if (returned) {
                return;
            }
            returned = true;
            return callback(null, Buffer.concat(chunks, chunklen));
        });
    }

    /**
     * Encodes a buffer or a string into Base64url format
     *
     * @param {Buffer|String} data The data to convert
     * @return {String} The encoded string
     */
    toBase64URL(data) {
        if (typeof data === 'string') {
            data = Buffer.from(data);
        }

        return data
            .toString('base64')
            .replace(/[=]+/g, '') // remove '='s
            .replace(/\+/g, '-') // '+' → '-'
            .replace(/\//g, '_'); // '/' → '_'
    }

    /**
     * Creates a JSON Web Token signed with RS256 (SHA256 + RSA)
     *
     * @param {Object} payload The payload to include in the generated token
     * @return {String} The generated and signed token
     */
    jwtSignRS256(payload) {
        payload = ['{"alg":"RS256","typ":"JWT"}', JSON.stringify(payload)].map(val => this.toBase64URL(val)).join('.');
        let signature = crypto.createSign('RSA-SHA256').update(payload).sign(this.options.privateKey);
        return payload + '.' + this.toBase64URL(signature);
    }
}

module.exports = XOAuth2;
