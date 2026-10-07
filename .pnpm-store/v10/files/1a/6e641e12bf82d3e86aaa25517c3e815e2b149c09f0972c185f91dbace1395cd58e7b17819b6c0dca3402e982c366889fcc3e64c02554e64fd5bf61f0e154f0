'use strict';

var lab = exports.lab = require('@hapi/lab').script();
var code = require('code');

var matchMedia = require('../');

function noop(){}

lab.experiment('matchMedia', function(){

  lab.test('compares a media query to a value object', function(done){
    var mql = matchMedia('(max-width: 123px)', { width: 123 });
    code.expect(mql.matches).to.equal(true);
    code.expect(mql.media).to.equal('(max-width: 123px)');
  });

  lab.test('no unit', function(done){
    var mql = matchMedia('(max-width: 123)', { width: 123 });
    code.expect(mql.matches).to.equal(true);
    code.expect(mql.media).to.equal('(max-width: 123)');
  });

  lab.test('can attempt to addListener on server', function(done){
    var mql = matchMedia('(max-width: 123px)', { width: 123 });
    mql.addListener(noop);
  });

  lab.test('can attempt to removeListener on server', function(done){
    var mql = matchMedia('(max-width: 123px)', { width: 123 });
    mql.removeListener(noop);
  });

  lab.test('can attempt to dispose on server', function(done){
    var mql = matchMedia('(max-width: 123px)', { width: 123 });
    mql.removeListener(noop);
  });

});
