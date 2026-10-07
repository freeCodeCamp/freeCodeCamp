"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _v = _interopRequireDefault(require("./v1.js"));

var _v2 = _interopRequireDefault(require("./v3.js"));

var _v3 = _interopRequireDefault(require("./v4.js"));

var _v4 = _interopRequireDefault(require("./v5.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function usage() {
  console.log('Usage:');
  console.log('  uuid');
  console.log('  uuid v1');
  console.log('  uuid v3 <name> <namespace uuid>');
  console.log('  uuid v4');
  console.log('  uuid v5 <name> <namespace uuid>');
  console.log('  uuid --help');
  console.log('\nNote: <namespace uuid> may be "URL" or "DNS" to use the corresponding UUIDs defined by RFC4122');
}

var args = process.argv.slice(2);

if (args.indexOf('--help') >= 0) {
  usage();
  process.exit(0);
}

var version = args.shift() || 'v4';

switch (version) {
  case 'v1':
    console.log((0, _v.default)());
    break;

  case 'v3':
    var name = args.shift();
    var namespace = args.shift();
    (0, _assert.default)(name != null, 'v3 name not specified');
    (0, _assert.default)(namespace != null, 'v3 namespace not specified');
    if (namespace === 'URL') namespace = _v2.default.URL;
    if (namespace === 'DNS') namespace = _v2.default.DNS;
    console.log((0, _v2.default)(name, namespace));
    break;

  case 'v4':
    console.log((0, _v3.default)());
    break;

  case 'v5':
    var name = args.shift();
    var namespace = args.shift();
    (0, _assert.default)(name != null, 'v5 name not specified');
    (0, _assert.default)(namespace != null, 'v5 namespace not specified');
    if (namespace === 'URL') namespace = _v4.default.URL;
    if (namespace === 'DNS') namespace = _v4.default.DNS;
    console.log((0, _v4.default)(name, namespace));
    break;

  default:
    usage();
    process.exit(1);
}