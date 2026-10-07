describe('requires-port', function () {
  'use strict';

  var assume = require('assume')
    , required = require('./');

  it('is exported as a function', function () {
    assume(required).is.a('function');
  });

  it('does not require empty ports', function () {
    assume(required('', 'http')).false();
    assume(required('', 'wss')).false();
    assume(required('', 'ws')).false();
    assume(required('', 'cowsack')).false();
  });

  it('assumes true for unknown protocols',function () {
    assume(required('808', 'foo')).true();
    assume(required('80', 'bar')).true();
  });

  it('never requires port numbers for file', function () {
    assume(required(8080, 'file')).false();
  });

  it('does not require port 80 for http', function () {
    assume(required('80', 'http')).false();
    assume(required(80, 'http')).false();
    assume(required(80, 'http://')).false();
    assume(required(80, 'http://www.google.com')).false();

    assume(required('8080', 'http')).true();
    assume(required(8080, 'http')).true();
    assume(required(8080, 'http://')).true();
    assume(required(8080, 'http://www.google.com')).true();
  });

  it('does not require port 80 for ws', function () {
    assume(required('80', 'ws')).false();
    assume(required(80, 'ws')).false();
    assume(required(80, 'ws://')).false();
    assume(required(80, 'ws://www.google.com')).false();

    assume(required('8080', 'ws')).true();
    assume(required(8080, 'ws')).true();
    assume(required(8080, 'ws://')).true();
    assume(required(8080, 'ws://www.google.com')).true();
  });

  it('does not require port 443 for https', function () {
    assume(required('443', 'https')).false();
    assume(required(443, 'https')).false();
    assume(required(443, 'https://')).false();
    assume(required(443, 'https://www.google.com')).false();

    assume(required('8080', 'https')).true();
    assume(required(8080, 'https')).true();
    assume(required(8080, 'https://')).true();
    assume(required(8080, 'https://www.google.com')).true();
  });

  it('does not require port 443 for wss', function () {
    assume(required('443', 'wss')).false();
    assume(required(443, 'wss')).false();
    assume(required(443, 'wss://')).false();
    assume(required(443, 'wss://www.google.com')).false();

    assume(required('8080', 'wss')).true();
    assume(required(8080, 'wss')).true();
    assume(required(8080, 'wss://')).true();
    assume(required(8080, 'wss://www.google.com')).true();
  });

  it('does not require port 21 for ftp', function () {
    assume(required('21', 'ftp')).false();
    assume(required(21, 'ftp')).false();
    assume(required(21, 'ftp://')).false();
    assume(required(21, 'ftp://www.google.com')).false();

    assume(required('8080', 'ftp')).true();
    assume(required(8080, 'ftp')).true();
    assume(required(8080, 'ftp://')).true();
    assume(required(8080, 'ftp://www.google.com')).true();
  });

  it('does not require port 70 for gopher', function () {
    assume(required('70', 'gopher')).false();
    assume(required(70, 'gopher')).false();
    assume(required(70, 'gopher://')).false();
    assume(required(70, 'gopher://www.google.com')).false();

    assume(required('8080', 'gopher')).true();
    assume(required(8080, 'gopher')).true();
    assume(required(8080, 'gopher://')).true();
    assume(required(8080, 'gopher://www.google.com')).true();
  });
});
