
/**
 * Contains the routines loaded by the plugin process under Node.js
 * 
 * Initializes the Node.js environment version of the
 * platform-dependent connection object for the plugin site
 */

application = {};
connection = {};


/**
 * Prints error message and its stack
 * 
 * @param {Object} msg stack provided by error.stack or a message
 */
var printError = function(msg) {
    console.error();
    console.error(msg);
}


/**
 * Event lisener for the plugin message
 */
process.on('message', function(m) {
    switch(m.type){
    case 'import':
        importScript(m.url);
        break;
    case 'importJailed':
        importScriptJailed(m.url);
        break;
    case 'execute':
        execute(m.code);
        break;
    case 'message':
        // unhandled exception would break the IPC channel
        try {
            conn._messageHandler(m.data);
        } catch(e) {
            printError(e.stack);
        }
        break;
    }
});


/**
 * Checks if the given path is remote
 * 
 * @param {String} path to check
 * @returns {Boolean} true if path is remote
 */
var isRemote = function(path) {
    return (path.substr(0,7).toLowerCase() == 'http://' ||
            path.substr(0,8).toLowerCase() == 'https://');
}


/**
 * Loads and executes the JavaScript file with the given url
 *
 * @param {String} url of the script to load
 */
var importScript = function(url) {
    var sCb = function() {
       process.send({type: 'importSuccess', url: url});
    }

    var fCb = function() {
        process.send({type: 'importFailure', url: url});
    }

    var run = function(code) {
        executeNormal(code, url, sCb, fCb);
    }
    
    if (isRemote(url)) {
        loadRemote(url, run, fCb);
    } else {
        try {
            run(loadLocal(url));
        } catch(e) {
            printError(e.stack);
            fCb();
        }
    }

}


/**
 * Loads and executes the JavaScript file with the given url in a
 * jailed environment
 *
 * @param {String} url of the script to load
 */
var importScriptJailed = function(url) {
    var sCb = function() {
       process.send({type: 'importSuccess', url: url});
    }

    var fCb = function() {
       process.send({type: 'importFailure', url: url});
    }

    var run = function(code) {
        executeJailed(code, url, sCb, fCb);
    }
    
    if (isRemote(url)) {
        loadRemote(url, run, fCb);
    } else {
        try {
            run(loadLocal(url));
        } catch (e) {
            printError(e.stack);
            fCb();
        }

    }

}


/**
 * Executes the given code in the jailed environment, sends the
 * corresponding message to the application site when succeeded/failed
 * 
 * @param {String} code to execute
 */
var execute = function(code) {
    var sCb = function() {
        process.send({type: 'executeSuccess'});
    }

    var fCb = function() {
        process.send({type: 'executeFailure'});
    }

    executeJailed(code, 'DYNAMIC PLUGIN', sCb, fCb);
}


/**
 * Executes the given code in the current environment / scope, runs
 * the corresponding callback when done
 * 
 * @param {String} code to execute
 * @param {String} url of the script (for displaying the stack)
 * @param {Function} sCb
 * @param {Function} fCb
 */
var executeNormal = function(code, url, sCb, fCb) {
    var err = null;
    try {
        require('vm').runInThisContext(code, url);
        sCb();
    } catch (e) {
        printError(e.stack);
        fCb();
    }
}


/**
 * Executes the given code in a jailed environment, runs the
 * corresponding callback when done
 * 
 * @param {String} code to execute
 * @param {String} url of the script (for displaying the stack)
 * @param {Function} sCb
 * @param {Function} fCb
 */
var executeJailed = function(code, url, sCb, fCb) {
    var vm  = require('vm');
    var sandbox = {};
    var expose = [
        'application',
        'setTimeout',
        'setInterval',
        'clearTimeout',
        'clearInterval'
    ];

    for (var i = 0; i < expose.length; i++) {
        sandbox[expose[i]] = global[expose[i]];
    }

    code = '"use strict";\n'+code;
    try {
        vm.runInNewContext(code, vm.createContext(sandbox), url);
        sCb();
    } catch (e) {
        printError(e.stack);
        fCb();
    }
}


/**
 * Loads local file and 
 * 
 * @param {String} path of the file to read
 * 
 * @returns {String} file contents
 */
var loadLocal = function(path) {
    return require("fs").readFileSync(path).toString();
}


/**
 * Downloads the script by remote url and provides its content as a
 * string to the callback
 * 
 * @param {String} url of the remote module to load
 * @param {Function} sCb success callback
 * @param {Function} fCb failure callback
 */
var loadRemote = function(url, sCb, fCb) {
    var receive = function(res) {
        if (res.statusCode != 200) {
            var msg = 'Failed to load ' + url + '\n' +
                'HTTP responce status code: ' + res.statusCode;
            printError(msg);
            fCb();
        } else {
            var content = '';
            res.on('end', function(){ sCb(content); });
            res.on(
                'readable',
                function() {
                    var chunk = res.read();
                    content += chunk.toString();
                }
           );
        }
    }

    try {
        require('http').get(url, receive).on('error', fCb);
    } catch (e) {
        printError(e.stack);
        fCb();
    }
}


/**
 * Connection object provided to the SandboxedSite constructor, plugin
 * site implementation for the Node.js environment
 */
var conn = {
    disconnect: function(){ process.exit(); },
    send: function(data) {
        process.send({type: 'message', data: data});
    },
    onMessage: function(h){ conn._messageHandler = h; },
    _messageHandler: function(){},
    onDisconnect: function() {}
};
 
connection = conn;

