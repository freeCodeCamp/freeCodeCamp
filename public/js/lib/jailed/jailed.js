/**
 * @fileoverview Jailed - safe yet flexible sandbox
 * @version 0.2.0
 * 
 * @license MIT, see http://github.com/asvd/jailed
 * Copyright (c) 2014 asvd <heliosframework@gmail.com> 
 * 
 * Main library script, the only one to be loaded by a developer into
 * the application. Other scrips shipped along will be loaded by the
 * library either here (application site), or into the plugin site
 * (Worker/child process):
 *
 *  _JailedSite.js    loaded into both applicaiton and plugin sites
 *  _frame.html       sandboxed frame (web)
 *  _frame.js         sandboxed frame code (web)
 *  _pluginWeb.js     platform-dependent plugin routines (web)
 *  _pluginNode.js    platform-dependent plugin routines (Node.js)
 *  _pluginCore.js    common plugin site protocol implementation
 */


var __jailed__path__;
if (typeof window == 'undefined') {
    // Node.js
    __jailed__path__ = __dirname + '/';
} else {
    // web
    var scripts = document.getElementsByTagName('script');
    __jailed__path__ = scripts[scripts.length-1].src
        .split('?')[0]
        .split('/')
        .slice(0, -1)
        .join('/')+'/';
}


(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports'], factory);
    } else if (typeof exports !== 'undefined') {
        factory(exports);
    } else {
        factory((root.jailed = {}));
    }
}(this, function (exports) {
    var isNode = typeof window == 'undefined';
      

    /**
     * A special kind of event:
     *  - which can only be emitted once;
     *  - executes a set of subscribed handlers upon emission;
     *  - if a handler is subscribed after the event was emitted, it
     *    will be invoked immideately.
     * 
     * Used for the events which only happen once (or do not happen at
     * all) during a single plugin lifecycle - connect, disconnect and
     * connection failure
     */
    var Whenable = function() {
        this._emitted = false;
        this._handlers = [];
    }


    /**
     * Emits the Whenable event, calls all the handlers already
     * subscribed, switches the object to the 'emitted' state (when
     * all future subscibed listeners will be immideately issued
     * instead of being stored)
     */
    Whenable.prototype.emit = function(){
        if (!this._emitted) {
            this._emitted = true;

            var handler;
            while(handler = this._handlers.pop()) {
                setTimeout(handler,0);
            }
        }
    }
     
     
    /**
     * Saves the provided function as a handler for the Whenable
     * event. This handler will then be called upon the event emission
     * (if it has not been emitted yet), or will be scheduled for
     * immediate issue (if the event has already been emmitted before)
     * 
     * @param {Function} handler to subscribe for the event
     */
    Whenable.prototype.whenEmitted = function(handler){
        handler = this._checkHandler(handler);
        if (this._emitted) {
            setTimeout(handler, 0);
        } else {
            this._handlers.push(handler);
        }
    }

     
    /**
     * Checks if the provided object is suitable for being subscribed
     * to the event (= is a function), throws an exception if not
     * 
     * @param {Object} obj to check for being subscribable
     * 
     * @throws {Exception} if object is not suitable for subscription
     * 
     * @returns {Object} the provided object if yes
     */
    Whenable.prototype._checkHandler = function(handler){
        var type = typeof handler;
        if (type != 'function') {
            var msg =
                'A function may only be subsribed to the event, '
                + type
                + ' was provided instead'
            throw new Error(msg);
        }

        return handler;
    }
      
      
      
    /**
     * Initializes the library site for Node.js environment (loads
     * _JailedSite.js)
     */
    var initNode = function() {
        require('./_JailedSite.js');
    }
      
      
    /**
     * Initializes the library site for web environment (loads
     * _JailedSite.js)
     */
    var platformInit;
    var initWeb = function() {
        // loads additional script to the application environment
        var load = function(path, cb) {
            var script = document.createElement('script');
            script.src = path;

            var clear = function() {
                script.onload = null;
                script.onerror = null;
                script.onreadystatechange = null;
                script.parentNode.removeChild(script);
            }

            var success = function() {
                clear();
                cb();
            }

            script.onerror = clear;
            script.onload = success;
            script.onreadystatechange = function() {
                var state = script.readyState;
                if (state==='loaded' || state==='complete') {
                    success();
                }
            }

            document.body.appendChild(script);
        }

        platformInit = new Whenable;
        var origOnload = window.onload || function(){};

        window.onload = function(){
            origOnload();
            load(
                __jailed__path__+'_JailedSite.js',
                function(){ platformInit.emit(); }
            );
        }
    }


    var BasicConnection;
      
    /**
     * Creates the platform-dependent BasicConnection object in the
     * Node.js environment
     */
    var basicConnectionNode = function() {
        var childProcess = require('child_process');

        /**
         * Platform-dependent implementation of the BasicConnection
         * object, initializes the plugin site and provides the basic
         * messaging-based connection with it
         * 
         * For Node.js the plugin is created as a forked process
         */
        BasicConnection = function() {
            this._disconnected = false;
            this._messageHandler = function(){};
            this._disconnectHandler = function(){};
            this._process = childProcess.fork(
                __jailed__path__+'_pluginNode.js'
            );

            var me = this;
            this._process.on('message', function(m){
                me._messageHandler(m);
            });

            this._process.on('exit', function(m){
                me._disconnected = true;
                me._disconnectHandler(m);
            });
        }


        /**
         * Sets-up the handler to be called upon the BasicConnection
         * initialization is completed.
         * 
         * For Node.js the connection is fully initialized within the
         * constructor, so simply calls the provided handler.
         * 
         * @param {Function} handler to be called upon connection init
         */
        BasicConnection.prototype.whenInit = function(handler) {
            handler();
        }


        /**
         * Sends a message to the plugin site
         * 
         * @param {Object} data to send
         */
        BasicConnection.prototype.send = function(data) {
            if (!this._disconnected) {
                this._process.send(data);
            }
        }


        /**
         * Adds a handler for a message received from the plugin site
         * 
         * @param {Function} handler to call upon a message
         */
        BasicConnection.prototype.onMessage = function(handler) {
            this._messageHandler = function(data) {
                // broken stack would break the IPC in Node.js
                try {
                    handler(data);
                } catch (e) {
                    console.error();
                    console.error(e.stack);
                }
            }
        }


        /**
         * Adds a handler for the event of plugin disconnection
         * (= plugin process exit)
         * 
         * @param {Function} handler to call upon a disconnect
         */
        BasicConnection.prototype.onDisconnect = function(handler) {
            this._disconnectHandler = handler;
        }


        /**
         * Disconnects the plugin (= kills the forked process)
         */
        BasicConnection.prototype.disconnect = function() {
            this._process.kill('SIGKILL');
            this._disconnected = true;
        }

    }


    /**
     * Creates the platform-dependent BasicConnection object in the
     * web-browser environment
     */
    var basicConnectionWeb = function() {
        var perm = ['allow-scripts'];

        if (__jailed__path__.substr(0,7).toLowerCase() == 'file://') {
            // local instance requires extra permission
            perm.push('allow-same-origin');
        }

        // frame element to be cloned
        var sample = document.createElement('iframe');
        sample.src = __jailed__path__ + '_frame.html';
        sample.sandbox = perm.join(' ');
        sample.style.display = 'none';


        /**
         * Platform-dependent implementation of the BasicConnection
         * object, initializes the plugin site and provides the basic
         * messaging-based connection with it
         * 
         * For the web-browser environment, the plugin is created as a
         * Worker in a sandbaxed frame
         */
        BasicConnection = function() {
            this._init = new Whenable;
            this._disconnected = false;

            var me = this;
            platformInit.whenEmitted(function() {
                if (!me._disconnected) {
                    me._frame = sample.cloneNode(false);
                    document.body.appendChild(me._frame);

                    window.addEventListener('message', function (e) {
                        if (e.origin === "null" &&
                            e.source === me._frame.contentWindow) {
                            if (e.data.type == 'initialized') {
                                me._init.emit();
                            } else {
                                me._messageHandler(e.data);
                            }
                        }
                    });
                }
            });
        }
        
        
        /**
         * Sets-up the handler to be called upon the BasicConnection
         * initialization is completed.
         * 
         * For the web-browser environment, the handler is issued when
         * the plugin worker successfully imported and executed the
         * _pluginWeb.js, and replied to the application site with the
         * initImprotSuccess message.
         * 
         * @param {Function} handler to be called upon connection init
         */
        BasicConnection.prototype.whenInit = function(handler) {
            this._init.whenEmitted(handler);
        }


        /**
         * Sends a message to the plugin site
         * 
         * @param {Object} data to send
         */
        BasicConnection.prototype.send = function(data) {
            this._frame.contentWindow.postMessage(
                {type: 'message', data: data}, '*'
            );
        }


        /**
         * Adds a handler for a message received from the plugin site
         * 
         * @param {Function} handler to call upon a message
         */
        BasicConnection.prototype.onMessage = function(handler) {
            this._messageHandler = handler;
        }


        /**
         * Adds a handler for the event of plugin disconnection
         * (not used in case of Worker)
         * 
         * @param {Function} handler to call upon a disconnect
         */
        BasicConnection.prototype.onDisconnect = function(){};


        /**
         * Disconnects the plugin (= kills the frame)
         */
        BasicConnection.prototype.disconnect = function() {
            if (!this._disconnected) {
                this._disconnected = true;
                if (typeof this._frame != 'undefined') {
                    this._frame.parentNode.removeChild(this._frame);
                }  // otherwise farme is not yet created
            }
        }

    }


    if (isNode) {
        initNode();
        basicConnectionNode();
    } else {
        initWeb();
        basicConnectionWeb();
    }


      
    /**
     * Application-site Connection object constructon, reuses the
     * platform-dependent BasicConnection declared above in order to
     * communicate with the plugin environment, implements the
     * application-site protocol of the interraction: provides some
     * methods for loading scripts and executing the given code in the
     * plugin
     */
    var Connection = function(){
        this._platformConnection = new BasicConnection;

        this._importCallbacks = {};
        this._executeSCb = function(){};
        this._executeFCb = function(){};
        this._messageHandler = function(){};

        var me = this;
        this.whenInit = function(cb){
            me._platformConnection.whenInit(cb);
        };

        this._platformConnection.onMessage(function(m) {
            switch(m.type) {
            case 'message':
                me._messageHandler(m.data);
                break;
            case 'importSuccess':
                me._handleImportSuccess(m.url);
                break;
            case 'importFailure':
                me._handleImportFailure(m.url);
                break;
            case 'executeSuccess':
                me._executeSCb();
                break;
            case 'executeFailure':
                me._executeFCb();
                break;
            }
        });
    }


    /**
     * Tells the plugin to load a script with the given path, and to
     * execute it. Callbacks executed upon the corresponding responce
     * message from the plugin site
     * 
     * @param {String} path of a script to load
     * @param {Function} sCb to call upon success
     * @param {Function} fCb to call upon failure
     */
    Connection.prototype.importScript = function(path, sCb, fCb) {
        var f = function(){};
        this._importCallbacks[path] = {sCb: sCb||f, fCb: fCb||f};
        this._platformConnection.send({type: 'import', url: path});
    }
      

    /**
     * Tells the plugin to load a script with the given path, and to
     * execute it in the JAILED environment. Callbacks executed upon
     * the corresponding responce message from the plugin site
     * 
     * @param {String} path of a script to load
     * @param {Function} sCb to call upon success
     * @param {Function} fCb to call upon failure
     */
    Connection.prototype.importJailedScript = function(path, sCb, fCb) {
        var f = function(){};
        this._importCallbacks[path] = {sCb: sCb||f, fCb: fCb||f};
        this._platformConnection.send({type: 'importJailed', url: path});
    }


    /**
     * Sends the code to the plugin site in order to have it executed
     * in the JAILED enviroment. Assuming the execution may only be
     * requested once by the Plugin object, which means a single set
     * of callbacks is enough (unlike importing additional scripts)
     * 
     * @param {String} code code to execute
     * @param {Function} sCb to call upon success
     * @param {Function} fCb to call upon failure
     */
    Connection.prototype.execute = function(code, sCb, fCb) {
        this._executeSCb = sCb||function(){};
        this._executeFCb = fCb||function(){};
        this._platformConnection.send({type: 'execute', code: code});
    }


    /**
     * Adds a handler for a message received from the plugin site
     * 
     * @param {Function} handler to call upon a message
     */
    Connection.prototype.onMessage = function(handler) {
        this._messageHandler = handler;
    }
      
      
    /**
     * Adds a handler for a disconnect message received from the
     * plugin site
     * 
     * @param {Function} handler to call upon disconnect
     */
    Connection.prototype.onDisconnect = function(handler) {
        this._platformConnection.onDisconnect(handler);
    }


    /**
     * Sends a message to the plugin
     * 
     * @param {Object} data of the message to send
     */
    Connection.prototype.send = function(data) {
        this._platformConnection.send({
            type: 'message',
            data: data
        });
    }


    /**
     * Handles import succeeded message from the plugin
     * 
     * @param {String} url of a script loaded by the plugin
     */
    Connection.prototype._handleImportSuccess = function(url) {
        var sCb = this._importCallbacks[url].sCb;
        this._importCallbacks[url] = null;
        delete this._importCallbacks[url];
        sCb();
    }


    /**
     * Handles import failure message from the plugin
     * 
     * @param {String} url of a script loaded by the plugin
     */
    Connection.prototype._handleImportFailure = function(url) {
        var fCb = this._importCallbacks[url].fCb;
        this._importCallbacks[url] = null;
        delete this._importCallbacks[url];
        fCb();
    }


    /**
     * Disconnects the plugin when it is not needed anymore
     */
    Connection.prototype.disconnect = function() {
        this._platformConnection.disconnect();
    }




    /**
     * Plugin constructor, represents a plugin initialized by a script
     * with the given path
     * 
     * @param {String} url of a plugin source
     * @param {Object} _interface to provide for the plugin
     */
    var Plugin = function(url, _interface) {
        this._path = url;
        this._initialInterface = _interface||{};
        this._connect();
    }
      
      
    /**
     * DynamicPlugin constructor, represents a plugin initialized by a
     * string containing the code to be executed
     * 
     * @param {String} code of the plugin
     * @param {Object} _interface to provide to the plugin
     */
    var DynamicPlugin = function(code, _interface) {
        this._code = code;
        this._initialInterface = _interface||{};
        this._connect();
    }
      
      
    /**
     * Creates the connection to the plugin site
     */
    DynamicPlugin.prototype._connect =
           Plugin.prototype._connect = function() {
        this.remote = null;

        this._connect    = new Whenable;
        this._fail       = new Whenable;
        this._disconnect = new Whenable;
               
        var me = this;
               
        // binded failure callback
        this._fCb = function(){
            me._fail.emit();
            me.disconnect();
        }
               
        this._connection = new Connection;
        this._connection.whenInit(function(){
            me._init();
        });
    }


    /**
     * Creates the Site object for the plugin, and then loads the
     * common routines (_JailedSite.js)
     */
    DynamicPlugin.prototype._init =
           Plugin.prototype._init = function() {
        this._site = new JailedSite(this._connection);
               
        var me = this;
        this._site.onDisconnect(function() {
            me._disconnect.emit();
        });

        var sCb = function() {
            me._loadCore();
        }

        this._connection.importScript(
            __jailed__path__+'_JailedSite.js', sCb, this._fCb
        );
    }


    /**
     * Loads the core scirpt into the plugin
     */
    DynamicPlugin.prototype._loadCore =
           Plugin.prototype._loadCore = function() {
        var me = this;
        var sCb = function() {
            me._sendInterface();
        }

        this._connection.importScript(
            __jailed__path__+'_pluginCore.js', sCb, this._fCb
        );
    }
    
    
    /**
     * Sends to the remote site a signature of the interface provided
     * upon the Plugin creation
     */
    DynamicPlugin.prototype._sendInterface =
           Plugin.prototype._sendInterface = function() {
        var me = this;
        this._site.onInterfaceSetAsRemote(function() {
            if (!me._connected) {
                me._loadPlugin();
            }
        });

        this._site.setInterface(this._initialInterface);
    }
    
    
    /**
     * Loads the plugin body (loads the plugin url in case of the
     * Plugin)
     */
    Plugin.prototype._loadPlugin = function() {
        var me = this;
        var sCb = function() {
            me._requestRemote();
        }

        this._connection.importJailedScript(this._path, sCb, this._fCb);
    }
    
    
    /**
     * Loads the plugin body (executes the code in case of the
     * DynamicPlugin)
     */
    DynamicPlugin.prototype._loadPlugin = function() {
        var me = this;
        var sCb = function() {
            me._requestRemote();
        }

        this._connection.execute(this._code, sCb, this._fCb);
    }
    
    
    /**
     * Requests the remote interface from the plugin (which was
     * probably set by the plugin during its initialization), emits
     * the connect event when done, then the plugin is fully usable
     * (meaning both the plugin and the application can use the
     * interfaces provided to each other)
     */
    DynamicPlugin.prototype._requestRemote = 
           Plugin.prototype._requestRemote = function() {
        var me = this;
        this._site.onRemoteUpdate(function(){
            me.remote = me._site.getRemote();
            me._connect.emit();
        });

        this._site.requestRemote();
    }

    
    /**
     * Disconnects the plugin immideately
     */
    DynamicPlugin.prototype.disconnect = 
           Plugin.prototype.disconnect = function() {
        this._connection.disconnect();
        this._disconnect.emit();
    }
   
    
    /**
     * Saves the provided function as a handler for the connection
     * failure Whenable event
     * 
     * @param {Function} handler to be issued upon disconnect
     */
    DynamicPlugin.prototype.whenFailed = 
           Plugin.prototype.whenFailed = function(handler) {
        this._fail.whenEmitted(handler);
    }


    /**
     * Saves the provided function as a handler for the connection
     * success Whenable event
     * 
     * @param {Function} handler to be issued upon connection
     */
    DynamicPlugin.prototype.whenConnected = 
           Plugin.prototype.whenConnected = function(handler) {
        this._connect.whenEmitted(handler);
    }
    
    
    /**
     * Saves the provided function as a handler for the connection
     * failure Whenable event
     * 
     * @param {Function} handler to be issued upon connection failure
     */
    DynamicPlugin.prototype.whenDisconnected = 
           Plugin.prototype.whenDisconnected = function(handler) {
        this._disconnect.whenEmitted(handler);
    }
    
    
    
    exports.Plugin = Plugin;
    exports.DynamicPlugin = DynamicPlugin;
  
}));

