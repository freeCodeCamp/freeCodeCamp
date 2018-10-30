/// provides the async helper functionality

function Waiter() {
    if (!(this instanceof Waiter)) {
        return new Waiter();
    }

    var self = this;

    // found values
    self.values = {};

    // callback when done
    self.callback = null;

    self.resolved = false;

    self.count = 0;
};

Waiter.prototype.wait = function() {
    var self = this;
    ++self.count;
};

// resolve the promise
Waiter.prototype.resolve = function(name, val) {
    var self = this;

    self.values[name] = val;

    // done with all items
    if (--self.count === 0) {
        self.resolved = true;

        // we may not have a done callback yet
        if (self.callback) {
            self.callback(self.values);
        }
    }
};

// sets the done callback for the waiter
// notifies when the promise is complete
Waiter.prototype.done = function(fn) {
    var self = this;

    self.callback = fn;
    if (self.resolved) {
        fn(self.values);
    }
};

var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_';

var gen_id = function() {
    var res = '';
    for (var i=0 ; i<8 ; ++i) {
        res += alphabet[Math.floor(Math.random() * alphabet.length)];
    }

    return res;
};

module.exports = function() {
    // baton which contains the current
    // set of deferreds
    var waiter;

    var obj = Object.create(null);
    obj.done = function done(fn) {
        // no async things called
        if (!waiter) {
            return fn({});
        }

        waiter.done(fn);

        // clear the waiter for the next template
        waiter = undefined;
    };

    obj.resolve = function resolve(fn, args) {
        // we want to do async things, need a waiter for that
        if (!waiter) {
            waiter = new Waiter();
        }

        var id = '__' + gen_id() + '__';

        var cur_waiter = waiter;
        waiter.wait();

        args = [].slice.call(args);
        args.push(function(res) {
            cur_waiter.resolve(id, res);
        })
        
        fn.apply(null, args);

        // return the id placeholder
        // this will be replaced later
        return id;
    };

    return obj;
};

