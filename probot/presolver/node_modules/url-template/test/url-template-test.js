var template, expect;

if (typeof require !== 'undefined') {
  template = require('../lib/url-template.js');
  expect = require("expect.js");
} else {
  template = window.urltemplate;
  expect = window.expect;
}

function createTestContext(c) {
  return function (t, r) {
    expect(template.parse(t).expand(c)).to.eql(r);
  };
}

describe('uri-template', function () {
  describe('Level 1', function () {
    var assert = createTestContext({
          'var': 'value',
          'some.value': 'some',
          'some_value': 'value',
          'Some%20Thing': 'hello',
          'foo': 'bar',
          'hello': 'Hello World!',
          'bool': false,
          'toString': 'string',
          'number': 42,
          'float': 3.14,
          'undef': undefined,
          'null': null,
          'chars': 'šöäŸœñê€£¥‡ÑÒÓÔÕÖ×ØÙÚàáâãäåæçÿü',
          'surrogatepairs': '\uD834\uDF06'
        });

    it('empty string', function () {
      assert('', '');
    });

    it('encodes non expressions correctly', function () {
      assert('hello/world', 'hello/world');
      assert('Hello World!/{foo}', 'Hello%20World!/bar');
      assert(':/?#[]@!$&()*+,;=\'', ':/?#[]@!$&()*+,;=\'');
      assert('%20', '%20');
      assert('%xyz', '%25xyz');
      assert('%', '%25');
    });

    it('expand plain ASCII strings', function () {
      assert('{var}', 'value');
    });

    it('expand non-ASCII strings', function () {
      assert('{chars}', '%C5%A1%C3%B6%C3%A4%C5%B8%C5%93%C3%B1%C3%AA%E2%82%AC%C2%A3%C2%A5%E2%80%A1%C3%91%C3%92%C3%93%C3%94%C3%95%C3%96%C3%97%C3%98%C3%99%C3%9A%C3%A0%C3%A1%C3%A2%C3%A3%C3%A4%C3%A5%C3%A6%C3%A7%C3%BF%C3%BC');
    });

    it('expands and encodes surrogate pairs correctly', function () {
      assert('{surrogatepairs}', '%F0%9D%8C%86');
    });

    it('expand expressions with dot and underscore', function () {
      assert('{some.value}', 'some');
      assert('{some_value}', 'value');
    });

    it('expand expressions with encoding', function () {
      assert('{Some%20Thing}', 'hello');
    });

    it('expand expressions with reserved JavaScript names', function () {
      assert('{toString}', 'string');
    });

    it('expand variables that are not strings', function () {
      assert('{number}', '42');
      assert('{float}', '3.14');
      assert('{bool}', 'false');
    });

    it('expand variables that are undefined or null', function () {
      assert('{undef}', '');
      assert('{null}', '');
    });

    it('expand multiple values', function () {
      assert('{var}/{foo}', 'value/bar');
    });

    it('escape invalid characters correctly', function () {
      assert('{hello}', 'Hello%20World%21');
    });
  });

  describe('Level 2', function () {
    var assert = createTestContext({
          'var': 'value',
          'hello': 'Hello World!',
          'path': '/foo/bar'
        });

    it('reserved expansion of basic strings', function () {
      assert('{+var}', 'value');
      assert('{+hello}', 'Hello%20World!');
    });

    it('preserves paths', function() {
      assert('{+path}/here', '/foo/bar/here');
      assert('here?ref={+path}', 'here?ref=/foo/bar');
    });
  });

  describe('Level 3', function () {
    var assert = createTestContext({
          'var' : 'value',
          'hello' : 'Hello World!',
          'empty' : '',
          'path' : '/foo/bar',
          'x' : '1024',
          'y' : '768'
        });

    it('variables without an operator', function () {
      assert('map?{x,y}', 'map?1024,768');
      assert('{x,hello,y}', '1024,Hello%20World%21,768');
    });

    it('variables with the reserved expansion operator', function () {
      assert('{+x,hello,y}', '1024,Hello%20World!,768');
      assert('{+path,x}/here', '/foo/bar,1024/here');
    });

    it('variables with the fragment expansion operator', function () {
      assert('{#x,hello,y}', '#1024,Hello%20World!,768');
      assert('{#path,x}/here', '#/foo/bar,1024/here');
    });

    it('variables with the dot operator', function () {
      assert('X{.var}', 'X.value');
      assert('X{.x,y}', 'X.1024.768');
    });

    it('variables with the path operator', function () {
      assert('{/var}', '/value');
      assert('{/var,x}/here', '/value/1024/here');
    });

    it('variables with the parameter operator', function () {
      assert('{;x,y}', ';x=1024;y=768');
      assert('{;x,y,empty}', ';x=1024;y=768;empty');
    });

    it('variables with the query operator', function () {
      assert('{?x,y}', '?x=1024&y=768');
      assert('{?x,y,empty}', '?x=1024&y=768&empty=');
    });

    it('variables with the query continuation operator', function () {
      assert('?fixed=yes{&x}', '?fixed=yes&x=1024');
      assert('{&x,y,empty}', '&x=1024&y=768&empty=');
    });
  });

  describe('Level 4', function () {
    var assert = createTestContext({
          'var': 'value',
          'hello': 'Hello World!',
          'path': '/foo/bar',
          'list': ['red', 'green', 'blue'],
          'keys': {
            'semi': ';',
            'dot': '.',
            'comma': ','
          },
          "chars": {
            'ü': 'ü'
          },
          'number': 2133,
          'emptystring': '',
          'emptylist': [],
          'emptyobject': {},
          'undefinedlistitem': [1,,2],
          'undefinedobjectitem': { key: null, hello: 'world', 'empty': '', '': 'nothing' }
        });

    it('variable empty list', function () {
      assert('{/emptylist}', '');
      assert('{/emptylist*}', '');
      assert('{?emptylist}', '?emptylist=');
      assert('{?emptylist*}', '');
    });

    it('variable empty object', function () {
      assert('{/emptyobject}', '');
      assert('{/emptyobject*}', '');
      assert('{?emptyobject}', '?emptyobject=');
      assert('{?emptyobject*}', '');
    });

    it('variable undefined list item', function () {
      assert('{undefinedlistitem}', '1,2');
      assert('{undefinedlistitem*}', '1,2');
      assert('{?undefinedlistitem*}', '?undefinedlistitem=1&undefinedlistitem=2');
    });

    it('variable undefined object item', function () {
      assert('{undefinedobjectitem}', 'hello,world,empty,,,nothing');
      assert('{undefinedobjectitem*}', 'hello=world,empty=,nothing');
    });

    it('variable empty string', function () {
      assert('{emptystring}', '');
      assert('{+emptystring}', '');
      assert('{#emptystring}', '#');
      assert('{.emptystring}', '.');
      assert('{/emptystring}', '/');
      assert('{;emptystring}', ';emptystring');
      assert('{?emptystring}', '?emptystring=');
      assert('{&emptystring}', '&emptystring=');
    });

    it('variable modifiers prefix', function () {
      assert('{var:3}', 'val');
      assert('{var:30}', 'value');
      assert('{+path:6}/here', '/foo/b/here');
      assert('{#path:6}/here', '#/foo/b/here');
      assert('X{.var:3}', 'X.val');
      assert('{/var:1,var}', '/v/value');
      assert('{;hello:5}', ';hello=Hello');
      assert('{?var:3}', '?var=val');
      assert('{&var:3}', '&var=val');
    });

    it('variable modifier prefix converted to string', function () {
      assert('{number:3}', '213');
    });

    it('variable list expansion', function () {
      assert('{list}', 'red,green,blue');
      assert('{+list}', 'red,green,blue');
      assert('{#list}', '#red,green,blue');
      assert('{/list}', '/red,green,blue');
      assert('{;list}', ';list=red,green,blue');
      assert('{.list}', '.red,green,blue');
      assert('{?list}', '?list=red,green,blue');
      assert('{&list}', '&list=red,green,blue');
    });

    it('variable associative array expansion', function () {
      assert('{keys}', 'semi,%3B,dot,.,comma,%2C');
      assert('{keys*}', 'semi=%3B,dot=.,comma=%2C');
      assert('{+keys}', 'semi,;,dot,.,comma,,');
      assert('{#keys}', '#semi,;,dot,.,comma,,');
      assert('{.keys}', '.semi,%3B,dot,.,comma,%2C');
      assert('{/keys}', '/semi,%3B,dot,.,comma,%2C');
      assert('{;keys}', ';keys=semi,%3B,dot,.,comma,%2C');
      assert('{?keys}', '?keys=semi,%3B,dot,.,comma,%2C');
      assert('{&keys}', '&keys=semi,%3B,dot,.,comma,%2C');
    });

    it('variable list explode', function () {
      assert('{list*}', 'red,green,blue');
      assert('{+list*}', 'red,green,blue');
      assert('{#list*}', '#red,green,blue');
      assert('{/list*}', '/red/green/blue');
      assert('{;list*}', ';list=red;list=green;list=blue');
      assert('{.list*}', '.red.green.blue');
      assert('{?list*}', '?list=red&list=green&list=blue');
      assert('{&list*}', '&list=red&list=green&list=blue');

      assert('{/list*,path:4}', '/red/green/blue/%2Ffoo');
    });

    it('variable associative array explode', function () {
      assert('{+keys*}', 'semi=;,dot=.,comma=,');
      assert('{#keys*}', '#semi=;,dot=.,comma=,');
      assert('{/keys*}', '/semi=%3B/dot=./comma=%2C');
      assert('{;keys*}', ';semi=%3B;dot=.;comma=%2C');
      assert('{?keys*}', '?semi=%3B&dot=.&comma=%2C');
      assert('{&keys*}', '&semi=%3B&dot=.&comma=%2C')
    });

    it('encodes associative arrays correctly', function () {
      assert('{chars*}', '%C3%BC=%C3%BC');
    });
  });

  describe('Encoding', function () {
    var assert = createTestContext({
          restricted: ":/?#[]@!$&()*+,;='",
          percent: '%',
          encoded: '%25',
          'pctencoded%20name': '',
          mapWithEncodedName: {
            'encoded%20name': ''
          },
          mapWithRestrictedName: {
            'restricted=name': ''
          },
          mapWidthUmlautName: {
            'ümlaut': ''
          }
        });

    it('passes through percent encoded values', function () {
      assert('{percent}', '%25');
      assert('{+encoded}', '%25');
    });

    it('encodes restricted characters correctly', function () {
      assert('{restricted}', '%3A%2F%3F%23%5B%5D%40%21%24%26%28%29%2A%2B%2C%3B%3D%27');
      assert('{+restricted}', ':/?#[]@!$&()*+,;=\'');
      assert('{#restricted}', '#:/?#[]@!$&()*+,;=\'');
      assert('{/restricted}', '/%3A%2F%3F%23%5B%5D%40%21%24%26%28%29%2A%2B%2C%3B%3D%27');
      assert('{;restricted}', ';restricted=%3A%2F%3F%23%5B%5D%40%21%24%26%28%29%2A%2B%2C%3B%3D%27');
      assert('{.restricted}', '.%3A%2F%3F%23%5B%5D%40%21%24%26%28%29%2A%2B%2C%3B%3D%27');
      assert('{?restricted}', '?restricted=%3A%2F%3F%23%5B%5D%40%21%24%26%28%29%2A%2B%2C%3B%3D%27');
      assert('{&restricted}', '&restricted=%3A%2F%3F%23%5B%5D%40%21%24%26%28%29%2A%2B%2C%3B%3D%27');
    });
  });
  describe('Error handling (or the lack thereof)', function () {
    var assert = createTestContext({
          foo: 'test',
          keys: {
            foo: 'bar'
          }
        });

    it('does not expand invalid expressions', function () {
      assert('{test', '{test');
      assert('test}', 'test}');
      assert('{{test}}', '{}'); // TODO: Is this acceptable?
    });

    it('does not expand with incorrect operators', function () {
      assert('{@foo}', ''); // TODO: This will try to match a variable called `@foo` which will fail because it is not in our context. We could catch this by ignoring reserved operators?
      assert('{$foo}', ''); // TODO: Same story, but $ is not a reserved operator.
      assert('{++foo}', '');
    });

    it('ignores incorrect prefixes', function () {
      assert('{foo:test}', 'test'); // TODO: Invalid prefixes are ignored. We could throw an error.
      assert('{foo:2test}', 'te'); // TODO: Best effort is OK?
    });

    it('prefix applied to the wrong context', function () {
      assert('{keys:1}', 'foo,bar');
    });
  });
  describe('Skipping undefined arguments', function () {
    var assert = createTestContext({
          'var': 'value',
          'number': 2133,
          'emptystring': '',
          'emptylist': [],
          'emptyobject': {},
          'undefinedlistitem': [1,,2],
        });
    it('variable undefined list item', function () {
      assert('{undefinedlistitem}', '1,2');
      assert('{undefinedlistitem*}', '1,2');
      assert('{?undefinedlistitem*}', '?undefinedlistitem=1&undefinedlistitem=2');
    });

    it('query with empty/undefined arguments', function () {
      assert('{?var,number}', '?var=value&number=2133');
      assert('{?undef}', '');
      assert('{?emptystring}', '?emptystring=');
      assert('{?emptylist}', '?emptylist=');
      assert('{?emptyobject}', '?emptyobject=');
      assert('{?undef,var,emptystring}', '?var=value&emptystring=');
    });
  });
});
