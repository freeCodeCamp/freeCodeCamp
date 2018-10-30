/**
 * `rawlist` type prompt
 */

var _ = require("lodash");
var util = require("util");
var chalk = require("chalk");
var Base = require("./base");
var Separator = require("../objects/separator");
var observe = require("../utils/events");
var Paginator = require("../utils/paginator");


/**
 * Module exports
 */

module.exports = Prompt;


/**
 * Constructor
 */

function Prompt() {
  Base.apply( this, arguments );

  if ( !this.opt.choices ) {
    this.throwParamError("choices");
  }

  this.validateChoices( this.opt.choices );

  // Add the default `help` (/expand) option
  this.opt.choices.push({
    key   : "h",
    name  : "Help, list all options",
    value : "help"
  });

  // Setup the default string (capitalize the default key)
  this.opt.default = this.generateChoicesString( this.opt.choices, this.opt.default );

  this.paginator = new Paginator();
}
util.inherits( Prompt, Base );


/**
 * Start the Inquiry session
 * @param  {Function} cb      Callback when prompt is done
 * @return {this}
 */

Prompt.prototype._run = function( cb ) {
  this.done = cb;

  // Save user answer and update prompt to show selected option.
  var events = observe(this.rl);
  this.lineObs = events.line.forEach( this.onSubmit.bind(this) );
  this.keypressObs = events.keypress.forEach( this.onKeypress.bind(this) );

  // Init the prompt
  this.render();

  return this;
};


/**
 * Render the prompt to screen
 * @return {Prompt} self
 */

Prompt.prototype.render = function (error, hint) {
  var message = this.getQuestion();
  var bottomContent = '';

  if ( this.status === "answered" ) {
    message += chalk.cyan( this.selected.short || this.selected.name );
  } else if ( this.status === "expanded" ) {
    var choicesStr = renderChoices(this.opt.choices, this.selectedKey);
    message += this.paginator.paginate(choicesStr, this.selectedKey, this.opt.pageSize);
    message += "\n  Answer: ";
  }

  message += this.rl.line;

  if (error) {
    bottomContent = chalk.red('>> ') + error;
  }

  if (hint) {
    bottomContent = chalk.cyan('>> ') + hint;
  }

  this.screen.render(message, bottomContent);
};


/**
 * Generate the prompt choices string
 * @return {String}  Choices string
 */

Prompt.prototype.getChoices = function() {
  var output = "";

  this.opt.choices.forEach(function( choice, i ) {
    output += "\n  ";

    if ( choice.type === "separator" ) {
      output += " " + choice;
      return;
    }

    var choiceStr = choice.key + ") " + choice.name;
    if ( this.selectedKey === choice.key ) {
      choiceStr = chalk.cyan( choiceStr );
    }
    output += choiceStr;
  }.bind(this));

  return output;
};


/**
 * When user press `enter` key
 */

Prompt.prototype.onSubmit = function( input ) {
  if ( input == null || input === "" ) {
    input = this.rawDefault;
  }

  var selected = this.opt.choices.where({ key : input.toLowerCase().trim() })[0];

  if ( selected != null && selected.key === "h" ) {
    this.selectedKey = "";
    this.status = "expanded";
    this.render();
    return;
  }

  if ( selected != null ) {
    this.status = "answered";
    this.selected = selected;

    // Re-render prompt
    this.render();

    this.lineObs.dispose();
    this.keypressObs.dispose();
    this.screen.done();
    this.done( this.selected.value );
    return;
  }

  // Input is invalid
  this.render("Please enter a valid command");
};


/**
 * When user press a key
 */

Prompt.prototype.onKeypress = function( s, key ) {
  this.selectedKey = this.rl.line.toLowerCase();
  var selected = this.opt.choices.where({ key : this.selectedKey })[0];
  if ( this.status === "expanded" )  {
    this.render();
  } else {
    this.render(null, selected ? selected.name : null);
  }
};


/**
 * Validate the choices
 * @param {Array} choices
 */

Prompt.prototype.validateChoices = function( choices ) {
  var formatError;
  var errors = [];
  var keymap = {};
  choices.filter(Separator.exclude).map(function( choice ) {
    if ( !choice.key || choice.key.length !== 1 ) {
      formatError = true;
    }
    if ( keymap[choice.key] ) {
      errors.push(choice.key);
    }
    keymap[ choice.key ] = true;
    choice.key = String( choice.key ).toLowerCase();
  });

  if ( formatError ) {
    throw new Error("Format error: `key` param must be a single letter and is required.");
  }
  if ( keymap.h ) {
    throw new Error("Reserved key error: `key` param cannot be `h` - this value is reserved.");
  }
  if ( errors.length ) {
    throw new Error( "Duplicate key error: `key` param must be unique. Duplicates: " +
        _.uniq(errors).join(", ") );
  }
};

/**
 * Generate a string out of the choices keys
 * @param  {Array}  choices
 * @param  {Number} defaultIndex - the choice index to capitalize
 * @return {String} The rendered choices key string
 */
Prompt.prototype.generateChoicesString = function( choices, defaultIndex ) {
  var defIndex = 0;
  if ( _.isNumber(defaultIndex) && this.opt.choices.getChoice(defaultIndex) ) {
    defIndex = defaultIndex;
  }
  var defStr = this.opt.choices.pluck("key");
  this.rawDefault = defStr[ defIndex ];
  defStr[ defIndex ] = String( defStr[defIndex] ).toUpperCase();
  return defStr.join("");
};


/**
 * Function for rendering checkbox choices
 * @param  {String} pointer Selected key
 * @return {String}         Rendered content
 */

function renderChoices (choices, pointer) {
  var output = '';

  choices.forEach(function (choice, i) {
    output += '\n  ';

    if (choice.type === 'separator') {
      output += ' ' + choice;
      return;
    }

    var choiceStr = choice.key + ') ' + choice.name;
    if (pointer === choice.key) {
      choiceStr = chalk.cyan(choiceStr);
    }
    output += choiceStr;
  });

  return output;
}
