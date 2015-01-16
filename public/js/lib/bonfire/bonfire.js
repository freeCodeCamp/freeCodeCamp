
// sends the input to the plugin for evaluation
var submit = function(code) {
    // postpone the evaluation until the plugin is initialized
    plugin.whenConnected(
        function() {
            if (requests == 0) {
                startLoading();
            }

            requests++;
            plugin.remote.run(code);
        }
    );
};

// prepares the string to be printed on the terminal
var escape = function(msg) {
    return msg.
        replace(/&/g,'&amp;').
        replace(/</g,'&lt;').
        replace(/>/g,'&gt;').
        replace(/\n/g, '<br/>').
        replace(/ /g, '&nbsp;');
};


// puts the message on the terminal
var print = function(cls, msg) {
    codeOutput.setValue(escape(msg));
};


// will restart the plugin if it does not respond
var disconnectTimeout = null;
var startLoading = function() {
    disconnectTimeout = setTimeout(disconnect, 3000);
};

var endLoading = function() {
    clearTimeout(disconnectTimeout);
};

var disconnect = function() {
    plugin.disconnect();
};


// interface provided to the plugin
var api = {
    output: function(data) {
        if (!--requests) {
            endLoading();
        }

        print('separator');
        print('input', data.input);
        if (data.error) {
            print('message', data.error);
        } else {
            print('output', data.output);
        }
    }
};


// obtaining absolute path of this script
var scripts = document.getElementsByTagName('script');
var path = scripts[scripts.length-1].src
        .split('?')[0]
        .split('/')
        .slice(0, -1)
        .join('/')+'/';



var requests;

// (re)initializes the plugin
var reset = function() {
    requests = 0;
    plugin = new jailed.Plugin(path+'plugin.js', api);
    plugin.whenDisconnected( function() {
        // give some time to handle the last responce
        setTimeout( function() {
            endLoading();

            while (el.terminal.hasChildNodes()) {
                el.terminal.removeChild(el.terminal.childNodes[0]);
            }


            print('message', 'Your code took too long to execute. Check for an infinite loop or recursion.');

            reset();
        }, 10);
    });
}


// initialize everything
var plugin = null;

reset();
