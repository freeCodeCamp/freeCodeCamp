
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

// puts the message on the terminal
var print = function(cls, msg) {
    codeOutput.setValue(msg);
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
      endLoading();
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
            codeOutput.setValue('Infinite loop detected!');
            reset();
        }, 10);
    });
};


// initialize everything
var plugin = null;

reset();
