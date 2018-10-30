var streamify = require('./streamify.js')
  , defer     = require('./defer.js')
  ;

// API
module.exports = ReadableAsyncKit;

/**
 * Base constructor for all streams
 * used to hold properties/methods
 */
function ReadableAsyncKit()
{
  ReadableAsyncKit.super_.apply(this, arguments);

  // list of active jobs
  this.jobs = {};

  // add stream methods
  this.destroy = destroy;
  this._start  = _start;
  this._read   = _read;
}

/**
 * Destroys readable stream,
 * by aborting outstanding jobs
 *
 * @returns {void}
 */
function destroy()
{
  if (this.destroyed)
  {
    return;
  }

  this.destroyed = true;

  if (typeof this.terminator == 'function')
  {
    this.terminator();
  }
}

/**
 * Starts provided jobs in async manner
 *
 * @private
 */
function _start()
{
  // first argument – runner function
  var runner = arguments[0]
    // take away first argument
    , args   = Array.prototype.slice.call(arguments, 1)
      // second argument - input data
    , input  = args[0]
      // last argument - result callback
    , endCb  = streamify.callback.call(this, args[args.length - 1])
    ;

  args[args.length - 1] = endCb;
  // third argument - iterator
  args[1] = streamify.iterator.call(this, args[1]);

  // allow time for proper setup
  defer(function()
  {
    if (!this.destroyed)
    {
      this.terminator = runner.apply(null, args);
    }
    else
    {
      endCb(null, Array.isArray(input) ? [] : {});
    }
  }.bind(this));
}


/**
 * Implement _read to comply with Readable streams
 * Doesn't really make sense for flowing object mode
 *
 * @private
 */
function _read()
{

}
