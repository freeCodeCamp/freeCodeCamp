var DTraceProvider;

function DTraceProviderStub() {}
DTraceProviderStub.prototype.addProbe = function(name) {
    var p = { 'fire': function () {} };
    this[name] = p;
    return (p);
};
DTraceProviderStub.prototype.enable = function() {};
DTraceProviderStub.prototype.fire = function() {};
DTraceProviderStub.prototype.disable = function() {};

var builds = ['Release', 'default', 'Debug'];
var err = null;

for (var i = 0; i < builds.length; i++) {
    try {
        var binding = require('./src/build/' + builds[i] + '/DTraceProviderBindings');
        DTraceProvider = binding.DTraceProvider;
        break;
    } catch (e) {
        if (err === null) {
            err = e;
        }
    }
}

if (!DTraceProvider) {
    if (process.env.NODE_DTRACE_PROVIDER_REQUIRE === 'hard') {
        throw err;
    } else {
        DTraceProvider = DTraceProviderStub;
    }
}

exports.DTraceProvider = DTraceProvider;
exports.createDTraceProvider = function(name, module) {
    if (arguments.length == 2)
        return (new exports.DTraceProvider(name, module));
    return (new exports.DTraceProvider(name));
};
