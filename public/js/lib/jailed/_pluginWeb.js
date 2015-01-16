
/**
 * Contains the routines loaded by the plugin Worker under web-browser.
 * 
 * Initializes the web environment version of the platform-dependent
 * connection object for the plugin site
 */

self.application = {};
self.connection = {};


(function(){
     
    /**
     * Event lisener for the plugin message
     */
    self.addEventListener('message', function(e){
        var m = e.data.data;
        switch (m.type) {
        case 'import':
        case 'importJailed':  // already jailed in the Worker
            importScript(m.url);
            break;
        case 'execute':
            execute(m.code);
            break;
        case 'message':
            conn._messageHandler(m.data);
            break;
        }
     });


    /**
     * Loads and executes the JavaScript file with the given url
     *
     * @param {String} url to load
     */
    var importScript = function(url) {
        var error = null;
        try {
            importScripts(url);
        } catch (e) {
            error = e;
        }

        if (error) {
           self.postMessage({type: 'importFailure', url: url});
           throw error;
        } else {
           self.postMessage({type: 'importSuccess', url: url});
        }

    }


    /**
     * Executes the given code in a jailed environment. For web
     * implementation, we're already jailed in the worker, so simply
     * eval()
     * 
     * @param {String} code code to execute
     */
    var execute = function(code) {
        try {
            eval(code);
        } catch (e) {
            self.postMessage({type: 'executeFailure'});
            throw e;
        }

        self.postMessage({type: 'executeSuccess'});
    }

     
    /**
     * Connection object provided to the JailedSite constructor,
     * plugin site implementation for the web-based environment.
     * Global will be then cleared to prevent exposure into the
     * Worker, so we put this local connection object into a closure
     */
    var conn = {
        disconnect: function(){ self.close(); },
        send: function(data) {
            self.postMessage({type: 'message', data: data});
        },
        onMessage: function(h){ conn._messageHandler = h; },
        _messageHandler: function(){},
        onDisconnect: function() {}
    };
     
    connection = conn;
     
})();

