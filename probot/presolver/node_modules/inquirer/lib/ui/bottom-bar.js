/**
 * Sticky bottom bar user interface
 */

var util = require("util");
var through = require("through");
var Base = require("./baseUI");
var rlUtils = require("../utils/readline");
var _ = require("lodash");


/**
 * Module exports
 */

module.exports = Prompt;

/**
 * Constructor
 */

function Prompt( opt ) {
  opt || (opt = {});

  Base.apply( this, arguments );

  this.log = through( this.writeLog.bind(this) );
  this.bottomBar = opt.bottomBar || "";
  this.render();
}
util.inherits( Prompt, Base );


/**
 * Render the prompt to screen
 * @return {Prompt} self
 */

Prompt.prototype.render = function() {
  this.write(this.bottomBar);
  return this;
};


/**
 * Update the bottom bar content and rerender
 * @param  {String} bottomBar Bottom bar content
 * @return {Prompt}           self
 */

Prompt.prototype.updateBottomBar = function( bottomBar ) {
  this.bottomBar = bottomBar;
  rlUtils.clearLine(this.rl, 1);
  return this.render();
};


/**
 * Rerender the prompt
 * @return {Prompt} self
 */

Prompt.prototype.writeLog = function( data ) {
  rlUtils.clearLine(this.rl, 1);
  this.rl.output.write(this.enforceLF(data.toString()));
  return this.render();
};


/**
 * Make sure line end on a line feed
 * @param  {String} str Input string
 * @return {String}     The input string with a final line feed
 */

Prompt.prototype.enforceLF = function( str ) {
  return str.match(/[\r\n]$/) ? str : str + "\n";
};

/**
 * Helper for writing message in Prompt
 * @param {Prompt} prompt  - The Prompt object that extends tty
 * @param {String} message - The message to be output
 */
Prompt.prototype.write = function (message) {
  var msgLines = message.split(/\n/);
  this.height = msgLines.length;

  // Write message to screen and setPrompt to control backspace
  this.rl.setPrompt( _.last(msgLines) );

  if ( this.rl.output.rows === 0 && this.rl.output.columns === 0 ) {
    /* When it's a tty through serial port there's no terminal info and the render will malfunction,
       so we need enforce the cursor to locate to the leftmost position for rendering. */
    rlUtils.left( this.rl, message.length + this.rl.line.length );
  }
  this.rl.output.write( message );
};
