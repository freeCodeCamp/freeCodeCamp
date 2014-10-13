// Taken from: http://ejohn.org/blog/javascript-benchmark-quality/
module.exports = runTest(name, test, next, callback){
  var runs = [], r = 0;
  setTimeout(function(){
    var start = Date.now(), diff = 0;

    for ( var n = 0; diff < 1000; n++ ) {
      test();
      diff = Date.now() - start;
    }

    runs.push( n );

    if ( r++ < 4 )
      setTimeout( arguments.callee, 0 );
    else {
      done(name, runs);
      if ( next )
        setTimeout( next, 0 );
    }
  }, 0);
}

