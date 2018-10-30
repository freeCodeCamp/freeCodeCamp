var assert = require('assert');
var vows = require('vows');
var path = require('path');
var fs = require('fs');

var validate = require('../lib/validate').validate;


var revision = 'draft-03';
var schemaRoot = path.join(__dirname, '..', revision);
var schemaNames = ['schema', 'hyper-schema', 'links', 'json-ref' ];
var schemas = {};

schemaNames.forEach(function(name) {
    var file = path.join(schemaRoot, name);
    schemas[name] = loadSchema(file);
});

schemaNames.forEach(function(name) {
    var s, n = name+'-nsd', f = path.join(schemaRoot, name);
    schemas[n] = loadSchema(f);
    s = schemas[n];
    delete s['$schema'];
});

function loadSchema(path) {
    var data = fs.readFileSync(path, 'utf-8');
    var schema = JSON.parse(data);
    return schema;
}

function resultIsValid() {
    return function(result) {
        assert.isObject(result);
        //assert.isBoolean(result.valid);
        assert.equal(typeof(result.valid), 'boolean');
        assert.isArray(result.errors);
        for (var i = 0; i < result.errors.length; i++) {
            assert.notEqual(result.errors[i], null, 'errors['+i+'] is null');
        }
    }
}

function assertValidates(doc, schema) {
    var context = {};

    context[': validate('+doc+', '+schema+')'] = {
        topic: validate(schemas[doc], schemas[schema]),
        'returns valid result': resultIsValid(),
        'with valid=true': function(result) { assert.equal(result.valid, true); },
        'and no errors':   function(result) {
            // XXX work-around for bug in vows: [null] chokes it
            if (result.errors[0] == null) assert.fail('(errors contains null)');
            assert.length(result.errors, 0);
        }
    };

    return context;
}

function assertSelfValidates(doc) {
    var context = {};

    context[': validate('+doc+')'] = {
        topic: validate(schemas[doc]),
        'returns valid result': resultIsValid(),
        'with valid=true': function(result) { assert.equal(result.valid, true); },
        'and no errors':   function(result) { assert.length(result.errors, 0); }
    };

    return context;
}

var suite = vows.describe('JSON Schema').addBatch({
    'Core-NSD self-validates': assertSelfValidates('schema-nsd'),
    'Core-NSD/Core-NSD': assertValidates('schema-nsd', 'schema-nsd'),
    'Core-NSD/Core': assertValidates('schema-nsd', 'schema'),

    'Core self-validates': assertSelfValidates('schema'),
    'Core/Core': assertValidates('schema', 'schema'),

    'Hyper-NSD self-validates': assertSelfValidates('hyper-schema-nsd'),
    'Hyper self-validates': assertSelfValidates('hyper-schema'),
    'Hyper/Hyper': assertValidates('hyper-schema', 'hyper-schema'),
    'Hyper/Core': assertValidates('hyper-schema', 'schema'),

    'Links-NSD self-validates': assertSelfValidates('links-nsd'),
    'Links self-validates': assertSelfValidates('links'),
    'Links/Hyper': assertValidates('links', 'hyper-schema'),
    'Links/Core': assertValidates('links', 'schema'),

    'Json-Ref self-validates': assertSelfValidates('json-ref'),
    'Json-Ref/Hyper': assertValidates('json-ref', 'hyper-schema'),
    'Json-Ref/Core': assertValidates('json-ref', 'schema')
}).export(module);
