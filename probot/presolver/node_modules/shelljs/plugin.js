// Various utilties exposed to plugins

require('./shell'); // Create the ShellJS instance (mandatory)

var common = require('./src/common');

var exportedAttributes = [
  'error',        // For signaling errors from within commands
  'parseOptions', // For custom option parsing
  'readFromPipe', // For commands with the .canReceivePipe attribute
  'register',     // For registering plugins
];

exportedAttributes.forEach(function (attr) {
  exports[attr] = common[attr];
});
