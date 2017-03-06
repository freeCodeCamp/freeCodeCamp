var args = Array.prototype.slice.call( arguments );
args[0] = error( args[0] );

callback && callback.apply( commit, (args.push( commit ), args) );