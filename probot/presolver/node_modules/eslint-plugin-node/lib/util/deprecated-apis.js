/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

module.exports = {
    modules: {
        buffer: {
            Buffer: {
                $constructor: {
                    $deprecated: true,
                    since: 6,
                    replacedBy: "'buffer.Buffer.alloc()' or 'buffer.Buffer.from()' (use 'https://www.npmjs.com/package/safe-buffer' for '<4.5.0')",
                },
                $call: {
                    $deprecated: true,
                    since: 6,
                    replacedBy: "'buffer.Buffer.alloc()' or 'buffer.Buffer.from()' (use 'https://www.npmjs.com/package/safe-buffer' for '<4.5.0')",
                },
            },
            SlowBuffer: {
                $deprecated: true,
                since: 6,
                replacedBy: "'buffer.Buffer.allocUnsafeSlow()'",
            },
        },
        crypto: {
            createCredentials: {
                $deprecated: true,
                since: 0.12,
                replacedBy: "'tls.createSecureContext()'",
            },
        },
        domain: {
            $deprecated: true,
            since: 4,
            replacedBy: null,
        },
        events: {
            EventEmitter: {
                listenerCount: {
                    $deprecated: true,
                    since: 4,
                    replacedBy: "'events.EventEmitter#listenerCount()'",
                },
            },
            listenerCount: {
                $deprecated: true,
                since: 4,
                replacedBy: "'events.EventEmitter#listenerCount()'",
            },
        },
        fs: {
            exists: {
                $deprecated: true,
                since: 4,
                replacedBy: "'fs.stat()' or 'fs.access()'",
            },
        },
        http: {
            createClient: {
                $deprecated: true,
                since: 0.10,
                replacedBy: "'http.request()'",
            },
        },
        module: {
            Module: {
                requireRepl: {
                    $deprecated: true,
                    since: 6,
                    replacedBy: "'require(\"repl\")'",
                },
            },
            requireRepl: {
                $deprecated: true,
                since: 6,
                replacedBy: "'require(\"repl\")'",
            },
        },
        os: {
            tmpDir: {
                $deprecated: true,
                since: 7,
                replacedBy: "'os.tmpdir()'",
            },
        },
        punycode: {
            $deprecated: true,
            since: 7,
            replacedBy: "'https://www.npmjs.com/package/punycode'",
        },
        readline: {
            codePointAt: {
                $deprecated: true,
                since: 4,
                replacedBy: null,
            },
            getStringWidth: {
                $deprecated: true,
                since: 6,
                replacedBy: null,
            },
            isFullWidthCodePoint: {
                $deprecated: true,
                since: 6,
                replacedBy: null,
            },
            stripVTControlCharacters: {
                $deprecated: true,
                since: 6,
                replacedBy: null,
            },
        },
        tls: {
            CleartextStream: {
                $deprecated: true,
                since: 0.10,
                replacedBy: null,
            },
            CryptoStream: {
                $deprecated: true,
                since: 0.12,
                replacedBy: "'tls.TLSSocket'",
            },
            SecurePair: {
                $deprecated: true,
                since: 6,
                replacedBy: "'tls.TLSSocket'",
            },
            createSecurePair: {
                $deprecated: true,
                since: 6,
                replacedBy: "'tls.TLSSocket'",
            },
        },
        tty: {
            setRawMode: {
                $deprecated: true,
                since: 0.10,
                replacedBy: "'tty.ReadStream#setRawMode()' (e.g. 'process.stdin.setRawMode()')",
            },
        },
        util: {
            debug: {
                $deprecated: true,
                since: 0.12,
                replacedBy: "'console.error()'",
            },
            error: {
                $deprecated: true,
                since: 0.12,
                replacedBy: "'console.error()'",
            },
            isArray: {
                $deprecated: true,
                since: 4,
                replacedBy: "'Array.isArray()'",
            },
            isBoolean: {
                $deprecated: true,
                since: 4,
                replacedBy: null,
            },
            isBuffer: {
                $deprecated: true,
                since: 4,
                replacedBy: "'Buffer.isBuffer()'",
            },
            isDate: {
                $deprecated: true,
                since: 4,
                replacedBy: null,
            },
            isError: {
                $deprecated: true,
                since: 4,
                replacedBy: null,
            },
            isFunction: {
                $deprecated: true,
                since: 4,
                replacedBy: null,
            },
            isNull: {
                $deprecated: true,
                since: 4,
                replacedBy: null,
            },
            isNullOrUndefined: {
                $deprecated: true,
                since: 4,
                replacedBy: null,
            },
            isNumber: {
                $deprecated: true,
                since: 4,
                replacedBy: null,
            },
            isObject: {
                $deprecated: true,
                since: 4,
                replacedBy: null,
            },
            isPrimitive: {
                $deprecated: true,
                since: 4,
                replacedBy: null,
            },
            isRegExp: {
                $deprecated: true,
                since: 4,
                replacedBy: null,
            },
            isString: {
                $deprecated: true,
                since: 4,
                replacedBy: null,
            },
            isSymbol: {
                $deprecated: true,
                since: 4,
                replacedBy: null,
            },
            isUndefined: {
                $deprecated: true,
                since: 4,
                replacedBy: null,
            },
            log: {
                $deprecated: true,
                since: 6,
                replacedBy: "a third party module",
            },
            print: {
                $deprecated: true,
                since: 0.12,
                replacedBy: "'console.log()'",
            },
            pump: {
                $deprecated: true,
                since: 0.10,
                replacedBy: "'stream.Readable#pipe()'",
            },
            puts: {
                $deprecated: true,
                since: 0.12,
                replacedBy: "'console.log()'",
            },
            _extend: {
                $deprecated: true,
                since: 6,
                replacedBy: "'Object.assign()'",
            },
        },
    },
    globals: {
        Buffer: {
            $constructor: {
                $deprecated: true,
                global: true,
                since: 6,
                replacedBy: "'Buffer.alloc()' or 'Buffer.from()' (use 'https://www.npmjs.com/package/safe-buffer' for '<4.5.0')",
            },
            $call: {
                $deprecated: true,
                global: true,
                since: 6,
                replacedBy: "'Buffer.alloc()' or 'Buffer.from()' (use 'https://www.npmjs.com/package/safe-buffer' for '<4.5.0')",
            },
        },
        Intl: {
            v8BreakIterator: {
                $deprecated: true,
                global: true,
                since: 7,
                replacedBy: null,
            },
        },
        require: {
            extensions: {
                $deprecated: true,
                global: true,
                since: 0.12,
                replacedBy: "compiling them ahead of time",
            },
        },
        process: {
            EventEmitter: {
                $deprecated: true,
                global: true,
                since: 0.6,
                replacedBy: "'require(\"events\")'",
            },
            env: {
                NODE_REPL_HISTORY_FILE: {
                    $deprecated: true,
                    global: true,
                    since: 4,
                    replacedBy: "'NODE_REPL_HISTORY'",
                },
            },
        },
    },
}
