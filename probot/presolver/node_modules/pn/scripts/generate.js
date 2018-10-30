#!/usr/bin/env node
var fs = require('fs');
var path = require('path');

// These are the node packages we are going to wrap.
var packages = {
    assert: { skip: true },
    async_hooks: { optional: true, skip: true },
    buffer: { skip: true },
    child_process: {
        exec: { promisify: true, returnsObject: true, args: 1, cb:['stdout','stderr'] },
        execFile: { promisify: true, returnsObject: true, args: 1, cb:['stdout','stderr'] },
        fork: { promisify: false },
        spawn: { promisify: false },
    },
    cluster: {
        disconnect: { promisify: true, args: 0 },
    },
    console: { skip: true },
    crypto: {
        DEFAULT_ENCODING: { constant: false },
        pseudoRandomBytes: { promisify: true, syncIfNoCallback: true, args: 1 },
        randomBytes: { promisify: true, syncIfNoCallback: true, args: 1 },
        randomFill: { args: 1 },
    },
    dns: {
        // XXX: Resolver could be wrapped...
        ADNAME: { skip: true },
        lookup: { promisify: true, args: 1 },
        lookupService: { promisify: true, args: 2, cb:['hostname','service'] },
        resolve: { promisify: true, args: 1 },
        resolve4: { promisify: true, args: 1 },
        resolve6: { promisify: true, args: 1 },
        resolveAny: { promisify: true, args: 1 },
        resolveCname: { promisify: true, args: 1 },
        resolveMx: { promisify: true, args: 1 },
        resolveNaptr: { promisify: true, args: 1 },
        resolveNs: { promisify: true, args: 1 },
        resolvePtr: { promisify: true, args: 1 },
        resolveSoa: { promisify: true, args: 1 },
        resolveSrv: { promisify: true, args: 1 },
        resolveTxt: { promisify: true, args: 1 },
        reverse: { promisify: true, args: 1 },
    },
    domain: {
        // XXX Domain#bind and Domain#intercept should be promisified
    },
    events: {
        skip: true,
    },
    fs: {
        access: { args: 1 },
        appendFile: { args: 2 },
        copyFile: { args: 2 },
        exists: { promisify: true, noError: true },
        mkdir: { args: 1 },
        mkdtemp: { args: 1 },
        open: { args: 2 },
        read: { cb: ['read', 'buffer'] },
        readdir: { args: 1 },
        readlink: { args: 1 },
        readFile: { args: 1 },
        realpath: { args: 1 },
        symlink: { args: 2 },
        write: { cb: ['written', 'buffer'] },
        writeFile: { args: 2 },
    },
    http: {
        STATUS_CODES: { constant: true },
        // XXX ClientRequest#setTimeout should be promisified
        // XXX IncomingMessage#setTimeout should be promisified
        // XXX Server#listen, Server#close, and Server#setTimeout
        // should be promisified
        // XXX ServerResponse#setTimeout should be promisified
        request: { promisify: true, returnsObject: true, args: 1 },
        get: { promisify: true, returnsObject: true, args: 1 },
    },
    http2: {
        optional: true,
    },
    https: {
        // XXX Server#listen, Server#close, and Server#setTimeout
        // should be promisified
        request: { promisify: true, returnsObject: true, args: 1 },
        get: { promisify: true, returnsObject: true, args: 1 },
    },
    inspector: {
        optional: true,
        skip: true,
    },
    net: {
        // XXX Server#listen, Server#close, Server#getConnections
        // should be promisified
        // XXX Socket#write, Socket#setTimeout should be promisified
    },
    os: { skip: true },
    path: { skip: true },
    perf_hooks: { optional: true, skip: true },
    process: {
        nextTick: { promisify: true, args: 0 }
    },
    punycode: { optional: true, skip: true },
    querystring: { skip: true },
    readline: {
        // XXX Interface#question should be promisified
    },
    repl: { skip: true },
    stream: {
        super_: { skip: true },
        // XXX Writable#write and Writable#end should be promisified
        // XXX same for Duplex and Transform? inheritance unclear.
        // what about _read/_write/_transform/_flush for implementers?
    },
    string_decoder: { skip: true },
    timers: {
        setImmediate: { promisify: true, callbackIsFirstArg: true, noError: true },
        setTimeout: { promisify: true, callbackIsFirstArg: true, noError: true },
    },
    tls: {
        connect: { promisify: true, returnsObject: true, args: 1 },
        createServer: { promisify: true, returnsObject: true, args: 1 },
    },
    tty: {
        skip: true
        // should tty.ReadStream and tty.WriteStream be promisified?
        // (process.stdin / process.stdout)
    },
    dgram: {
        // note that createSocket takes a listener, not a callback
        // XXX Socket#send and Socket#bind should be promisified
    },
    url: { skip: true },
    util: {
        pump: { promisify: true, args: 2 }
    },
    v8: { optional: true, skip: true },
    vm: { skip: true },
    zlib: {
        codes: { constant: true },
        deflate: { promisify: true, args: 1 },
        deflateRaw: { promisify: true, args: 1 },
        gzip: { promisify: true, args: 1 },
        gunzip: { promisify: true, args: 1 },
        inflate: { promisify: true, args: 1 },
        inflateRaw: { promisify: true, args: 1 },
        unzip: { promisify: true, args: 1 },
    },
};

var sorted = function(arr) {
    var s = arr.slice(0);
    s.sort();
    return s;
}

sorted(Object.keys(packages)).forEach(function(pkgname) {
    var pkgopts = packages[pkgname] || {};
    var script = [];
    var emit = function(l) { script.push(l); };
    var m;
    if (pkgname==='process') {
        m = process;
    } else if (pkgopts.optional) {
        // Package is not present in older versions of node.
        emit('var '+pkgname+' = {};');
        emit('try { '+pkgname+' = require("'+pkgname+'"); } catch (e) { }');
        m = require(pkgname);
    } else {
        emit('var '+pkgname+' = require("'+pkgname+'");');
        m = require(pkgname);
    }
    if (pkgopts.skip) {
        emit('module.exports = '+pkgname+';');
    } else {
        emit('var promisify = require("./_promisify.js");');
        emit('var bind = function(c, f) { return f && f.bind(c); };');
        emit('Object.defineProperties(module.exports, {');
        sorted(Object.keys(m)).forEach(function(prop) {
            var opts = pkgopts[prop] || {};
            // skip private properties
            if (opts.skip !== undefined ? opts.skip : /^_/.test(prop)) {
                emit('  //'+prop+': // skipping');
                return;
            }
            var out = '  '+prop+': { enumerable: true, ';
            // Is this a function?
            var caps = /^[A-Z]/.test(prop);
            var isFunction = typeof(m[prop]) === 'function';
            var isConstant = opts.constant!==undefined ? opts.constant :
                isFunction ?
                (opts.bind !== undefined ? opts.bind===false : caps) :
                caps;
            if (isConstant) {
                emit(out+'value: '+pkgname+'.'+prop+' },');
                return;
            }
            if (!isFunction) {
                // add getters & setters
                emit(out+'get: function() { return '+pkgname+'.'+prop+'; }, '+
                     'set: function(v) { '+pkgname+'.'+prop+' = v; } },');
                return;
            }
            // Is this a async function?
            var isAsync = (typeof(m[prop+'Sync']) === 'function');
            if (opts.promisify) { isAsync = true; }
            if (!isAsync || opts.promisify === false) {
                emit(out+'value: bind('+pkgname+', '+pkgname+'.'+prop+') },');
                return;
            }
            // OK, this is very likely an async function!
            // number of mandatory options (may be additional optional args)
            var nargs = opts.args!==undefined ? opts.args :
                (typeof(m[prop+'Sync']) === 'function') ?
                m[prop+'Sync'].length : m[prop].length;
            var options = {}, emitOptions = false;
            if (opts.cb) {
                options.pattern = opts.cb;
                emitOptions = true;
            }
            if (opts.noError) {
                options.noError = true;
                emitOptions = true;
            }
            if (opts.returnsObject) {
                options.returnsObject = true;
                emitOptions = true;
            }
            if (opts.callbackIsFirstArg) {
                options.callbackIsFirstArg = true;
                nargs = 0;
                emitOptions = true;
            }
            var optString = emitOptions ? ', '+JSON.stringify(options) : '';
            emit(out+'value: promisify('+pkgname+', '+pkgname+'.'+prop+', '+nargs+optString+') },');
            if (opts.syncIfNoCallback) {
                emit(out.replace(/:/,"Sync:")+'value: '+pkgname+'.'+prop+'.bind('+pkgname+') },');
            }
        });
        emit('});');
    }
    // Write out this wrapped package!
    fs.writeFileSync(path.join(__dirname,'..',pkgname+'.js'),
                     script.join('\n'), 'utf-8');
});
