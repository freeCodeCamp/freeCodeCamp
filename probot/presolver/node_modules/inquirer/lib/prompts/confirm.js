/**
 * `confirm` type prompt
 */

var _ = require("lodash");
var util = require("util");
var chalk = require("chalk");
var Base = require("./base");
var observe = require("../utils/events");


/**
 * Module exports
 */

module.exports = Prompt;


/**
 * Constructor
 */

function Prompt() {
  Base.apply( this, arguments );

  var rawDefault = true;

  _.extend( this.opt, {
    filter: function( input ) {
      var value = rawDefault;
      if ( input != null && input !== "" ) {
        value = /^y(es)?/i.test(input);
      }
      return value;
    }.bind(this)
  });

  if ( _.isBoolean(this.opt.default) ) {
    rawDefault = this.opt.default;
  }

  this.opt.default = rawDefault ? "Y/n" : "y/N";

  return this;
}
util.inherits( Prompt, Base );


/**
 * Start the Inquiry session
 * @param  {Function} cb   Callback when prompt is done
 * @return {this}
 */

Prompt.prototype._run = function( cb ) {
  this.done = cb;

  // Once user confirm (enter key)
  var events = observe(this.rl);
  events.keypress.takeUntil( events.line ).forEach( this.onKeypress.bind(this) );

  events.line.take(1).forEach( this.onEnd.bind(this) );

  // Init
  this.render();

  return this;
};


/**
 * Render the prompt to screen
 * @return {Prompt} self
 */

Prompt.prototype.render = function (answer) {
  var message = this.getQuestion();

  if (typeof answer === "boolean") {
    message += chalk.cyan(answer ? "Yes" : "No");
  } else {
    message += this.rl.line;
  }

  this.screen.render(message);

  return this;
};

/**
 * When user press `enter` key
 */

Prompt.prototype.onEnd = function( input ) {
  this.status = "answered";

  var output = this.opt.filter( input );
  this.render( output );

  this.screen.done();
  this.done( input ); // send "input" because the master class will refilter
};

/**
 * When user press a key
 */

Prompt.prototype.onKeypress = function() {
    this.render();
};
