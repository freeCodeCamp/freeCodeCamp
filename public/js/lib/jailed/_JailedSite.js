
/**
 * Contains the JailedSite object used both by the application
 * site, and by each plugin
 */

(function(){
     
    /**
     * JailedSite object represents a single site in the
     * communication protocol between the application and the plugin
     * 
     * @param {Object} connection a special object allowing to send
     * and receive messages from the opposite site (basically it
     * should only provide send() and onMessage() methods)
     */
    JailedSite = function(connection) {
        this._interface = {};
        this._remote = null;
        this._remoteUpdateHandler = function(){};
        this._getInterfaceHandler = function(){};
        this._interfaceSetAsRemoteHandler = function(){};
        this._disconnectHandler = function(){};
        this._store = new ReferenceStore;

        var me = this;
        this._connection = connection;
        this._connection.onMessage(
            function(data){ me._processMessage(data); }
        );

        this._connection.onDisconnect(
            function(m){
                me._disconnectHandler(m);
            }
        );
    }


    /**
     * Set a handler to be called when the remote site updates its
     * interface
     * 
     * @param {Function} handler
     */
    JailedSite.prototype.onRemoteUpdate = function(handler) {
        this._remoteUpdateHandler = handler;
    }


    /**
     * Set a handler to be called when received a responce from the
     * remote site reporting that the previously provided interface
     * has been succesfully set as remote for that site
     * 
     * @param {Function} handler
     */
    JailedSite.prototype.onInterfaceSetAsRemote = function(handler) {
        this._interfaceSetAsRemoteHandler = handler;
    }


    /**
     * Set a handler to be called when the remote site requests to
     * (re)send the interface. Used to detect an initialzation
     * completion without sending additional request, since in fact
     * 'getInterface' request is only sent by application at the last
     * step of the plugin initialization
     * 
     * @param {Function} handler
     */
    JailedSite.prototype.onGetInterface = function(handler) {
        this._getInterfaceHandler = handler;
    }


    /**
     * @returns {Object} set of remote interface methods
     */
    JailedSite.prototype.getRemote = function() {
        return this._remote;
    }


    /**
     * Sets the interface of this site making it available to the
     * remote site by sending a message with a set of methods names
     * 
     * @param {Object} _interface to set
     */
    JailedSite.prototype.setInterface = function(_interface) {
        this._interface = _interface;
        this._sendInterface();
    }


    /**
     * Sends the actual interface to the remote site upon it was
     * updated or by a special request of the remote site
     */
    JailedSite.prototype._sendInterface = function() {
        var names = [];
        for (var name in this._interface) {
            if (this._interface.hasOwnProperty(name)) {
                names.push(name);
            }
        }

        this._connection.send({type:'setInterface', api: names});
    }


    /**
     * Handles a message from the remote site
     */
    JailedSite.prototype._processMessage = function(data) {
         switch(data.type) {
         case 'method':
             var method = this._interface[data.name];
             var args = this._unwrap(data.args);
             method.apply(null, args);
             break;
         case 'callback':
             var method = this._store.fetch(data.id)[data.num];
             var args = this._unwrap(data.args);
             method.apply(null, args);
             break;
         case 'setInterface':
             this._setRemote(data.api);
             break;
         case 'getInterface':
             this._sendInterface();
             this._getInterfaceHandler();
             break;
         case 'interfaceSetAsRemote':
             this._interfaceSetAsRemoteHandler();
             break;
         case 'disconnect':
             this._disconnectHandler();
             this._connection.disconnect();
             break;
         }
    }


    /**
     * Sends a requests to the remote site asking it to provide its
     * current interface
     */
    JailedSite.prototype.requestRemote = function() {
        this._connection.send({type:'getInterface'});
    }


    /**
     * Sets the new remote interface provided by the other site
     * 
     * @param {Array} names list of function names
     */
    JailedSite.prototype._setRemote = function(names) {
        this._remote = {};
        var i, name;
        for (i = 0; i < names.length; i++) {
            name = names[i];
            this._remote[name] = this._genRemoteMethod(name);
        }

        this._remoteUpdateHandler();
        this._reportRemoteSet();
    }
     
     
    /**
     * Generates the wrapped function corresponding to a single remote
     * method. When the generated function is called, it will send the
     * corresponding message to the remote site asking it to execute
     * the particular method of its interface
     * 
     * @param {String} name of the remote method
     * 
     * @returns {Function} wrapped remote method
     */
    JailedSite.prototype._genRemoteMethod = function(name) {
        var me = this;
        var remoteMethod = function() {
            me._connection.send({
                type: 'method',
                name: name,
                args: me._wrap(arguments)
            });
        };

        return remoteMethod;
    }


    /**
     * Sends a responce reporting that interface just provided by the
     * remote site was sucessfully set by this site as remote
     */
    JailedSite.prototype._reportRemoteSet = function() {
        this._connection.send({type:'interfaceSetAsRemote'});
    }


    /**
     * Prepares the provided set of remote method arguments for
     * sending to the remote site, replaces all the callbacks with
     * identifiers
     * 
     * @param {Array} args to wrap 
     * 
     * @returns {Array} wrapped arguments
     */
    JailedSite.prototype._wrap = function(args) {
        var wrapped = [];
        var callbacks = {};
        var callbacksPresent = false;
        for (var i = 0; i < args.length; i++) {
            if (typeof args[i] == 'function') {
                callbacks[i] = args[i];
                wrapped[i] = {type: 'callback', num : i};
                callbacksPresent = true;
            } else {
                wrapped[i] = {type: 'argument', value : args[i]};
            }
        }

        var result = {args: wrapped};

        if (callbacksPresent) {
            result.callbackId = this._store.put(callbacks);
        }

        return result;
    }


    /**
     * Unwraps the set of arguments delivered from the remote site,
     * replaces all callback identifiers with a function which will
     * initiate sending that callback identifier back to other site
     * 
     * @param {Object} args to unwrap
     * 
     * @returns {Array} unwrapped args
     */
    JailedSite.prototype._unwrap = function(args) {
        var called = false;
        
        // wraps each callback so that the only one could be called
        var once = function(cb) {
            return function() {
                if (!called) {
                    called = true;
                    cb.apply(this, arguments);
                } else {
                    var msg =
                      'A callback from this set has already been executed';
                    throw new Error(msg);
                }
            };
        }
        
        var result = [];
        var i, arg, cb, me = this;
        for (i = 0; i < args.args.length; i++) {
            arg = args.args[i];
            if (arg.type == 'argument') {
                result.push(arg.value);
            } else {
                cb = once(
                    this._genRemoteCallback(args.callbackId, i)
                );
                result.push(cb);
            }
        }

        return result;
    }
     
     
    /**
     * Generates the wrapped function corresponding to a single remote
     * callback. When the generated function is called, it will send
     * the corresponding message to the remote site asking it to
     * execute the particular callback previously saved during a call
     * by the remote site a method from the interface of this site
     * 
     * @param {Number} id of the remote callback to execute
     * @param {Number} argNum argument index of the callback
     * 
     * @returns {Function} wrapped remote callback
     */
    JailedSite.prototype._genRemoteCallback = function(id, argNum) {
        var me = this;
        var remoteCallback = function() {
            me._connection.send({
                type : 'callback',
                id   : id,
                num  : argNum,
                args : me._wrap(arguments)
            });
        };

        return remoteCallback;
    }

     
    /**
     * Sends the notification message and breaks the connection
     */
    JailedSite.prototype.disconnect = function() {
        this._connection.send({type: 'disconnect'});
        this._connection.disconnect();
    }
    
     
    /**
     * Set a handler to be called when received a disconnect message
     * from the remote site
     * 
     * @param {Function} handler
     */
    JailedSite.prototype.onDisconnect = function(handler) {
        this._disconnectHandler = handler;
    }
     
     
     

    /**
     * ReferenceStore is a special object which stores other objects
     * and provides the references (number) instead. This reference
     * may then be sent over a json-based communication channel (IPC
     * to another Node.js process or a message to the Worker). Other
     * site may then provide the reference in the responce message
     * implying the given object should be activated.
     * 
     * Primary usage for the ReferenceStore is a storage for the
     * callbacks, which therefore makes it possible to initiate a
     * callback execution by the opposite site (which normally cannot
     * directly execute functions over the communication channel).
     * 
     * Each stored object can only be fetched once and is not
     * available for the second time. Each stored object must be
     * fetched, since otherwise it will remain stored forever and
     * consume memory.
     * 
     * Stored object indeces are simply the numbers, which are however
     * released along with the objects, and are later reused again (in
     * order to postpone the overflow, which should not likely happen,
     * but anyway).
     */
    var ReferenceStore = function() {
        this._store = {};    // stored object
        this._indices = [0]; // smallest available indices
    }


    /**
     * @function _genId() generates the new reference id
     * 
     * @returns {Number} smallest available id and reserves it
     */
    ReferenceStore.prototype._genId = function() {
        var id;
        if (this._indices.length == 1) {
            id = this._indices[0]++;
        } else {
            id = this._indices.shift();
        }

        return id;
    }


    /**
     * Releases the given reference id so that it will be available by
     * another object stored
     * 
     * @param {Number} id to release
     */
    ReferenceStore.prototype._releaseId = function(id) {
        for (var i = 0; i < this._indices.length; i++) {
            if (id < this._indices[i]) {
                this._indices.splice(i, 0, id);
                break;
            }
        }

        // cleaning-up the sequence tail
        for (i = this._indices.length-1; i >= 0; i--) {
            if (this._indices[i]-1 == this._indices[i-1]) {
                this._indices.pop();
            } else {
                break;
            }
        }
    }


    /**
     * Stores the given object and returns the refernce id instead
     * 
     * @param {Object} obj to store
     * 
     * @returns {Number} reference id of the stored object
     */
    ReferenceStore.prototype.put = function(obj) {
        var id = this._genId();
        this._store[id] = obj;
        return id;
    }


    /**
     * Retrieves previously stored object and releases its reference
     * 
     * @param {Number} id of an object to retrieve
     */
    ReferenceStore.prototype.fetch = function(id) {
        var obj = this._store[id];
        this._store[id] = null;
        delete this._store[id];
        this._releaseId(id);
        return obj;
    }


})();

