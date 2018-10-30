/**
 * `input` type prompt
 */

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
  return Base.apply( this, arguments );
}
util.inherits( Prompt, Base );


/**
 * Start the Inquiry session
 * @param  {Function} cb      Callback when prompt is done
 * @return {this}
 */

Prompt.prototype._run = function( cb ) {
  this.done = cb;

  // Once user confirm (enter key)
  var events = observe(this.rl);
  var submit = events.line.map( this.filterInput.bind(this) );

  var validation = this.handleSubmitEvents( submit );
  validation.success.forEach( this.onEnd.bind(this) );
  validation.error.forEach( this.onError.bind(this) );

  events.keypress.takeUntil( validation.success ).forEach( this.onKeypress.bind(this) );

  // Init
  this.render();

  return this;
};


/**
 * Render the prompt to screen
 * @return {Prompt} self
 */

Prompt.prototype.render = function (error) {
  var bottomContent = '';
  var message = this.getQuestion();

  if (this.status === 'answered') {
    message += chalk.cyan(this.answer);
  } else {
    message += this.rl.line;
  }

  if (error) {
    bottomContent = chalk.red('>> ') + error;
  }

  this.screen.render(message, bottomContent);
};


/**
 * When user press `enter` key
 */

Prompt.prototype.filterInput = function( input ) {
  if ( !input ) {
    return this.opt.default != null ? this.opt.default : "";
  }
  return input;
};

Prompt.prototype.onEnd = function( state ) {
  this.filter( state.value, function( filteredValue ) {
    this.answer = filteredValue;
    this.status = "answered";

    // Re-render prompt
    this.render();

    this.screen.done();
    this.done( state.value );
  }.bind(this));
};

Prompt.prototype.onError = function( state ) {
  this.render(state.isValid);
};

/**
 * When user press a key
 */

Prompt.prototype.onKeypress = function() {
  this.render();
};
