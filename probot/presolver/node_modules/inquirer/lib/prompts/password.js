/**
 * `password` type prompt
 */

var util = require("util");
var chalk = require("chalk");
var Base = require("./base");
var observe = require("../utils/events");

function mask(input) {
  input = String(input);
  if (input.length === 0) {
    return '';
  }

  return new Array(input.length + 1).join('*');
}

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

  var events = observe(this.rl);

  // Once user confirm (enter key)
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
  var message = this.getQuestion();
  var bottomContent = '';

  if (this.status === 'answered') {
    message += chalk.cyan(mask(this.answer));
  } else {
    message += mask(this.rl.line || '');
  }

  if (error) {
    bottomContent = '\n' + chalk.red('>> ') + error;
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
  this.status = "answered";
  this.answer = state.value;

  // Re-render prompt
  this.render();

  this.screen.done();
  this.done( state.value );
};

Prompt.prototype.onError = function( state ) {
  this.render(state.isValid);
  this.rl.output.unmute();
};

/**
 * When user type
 */

Prompt.prototype.onKeypress = function() {
  this.render();
};
