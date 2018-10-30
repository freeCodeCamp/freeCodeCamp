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

  if (!this.opt.choices) {
    this.throwParamError("choices");
  }

  this.opt.validChoices = this.opt.choices.filter(Separator.exclude);

  this.selected = 0;
  this.rawDefault = 0;

  _.extend(this.opt, {
    validate: function( index ) {
      return this.opt.choices.getChoice( index ) != null;
    }.bind(this)
  });

  var def = this.opt.default;
  if ( _.isNumber(def) && def >= 0 && def < this.opt.choices.realLength ) {
    this.selected = this.rawDefault = def;
  }

  // Make sure no default is set (so it won't be printed)
  this.opt.default = null;

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

  // Once user confirm (enter key)
  var events = observe(this.rl);
  var submit = events.line.map( this.filterInput.bind(this) );

  var validation = this.handleSubmitEvents( submit );
  validation.success.forEach( this.onEnd.bind(this) );
  validation.error.forEach( this.onError.bind(this) );

  events.keypress.takeUntil( validation.success ).forEach( this.onKeypress.bind(this) );

  // Init the prompt
  this.render();

  return this;
};


/**
 * Render the prompt to screen
 * @return {Prompt} self
 */

Prompt.prototype.render = function (error) {
  // Render question
  var message = this.getQuestion();
  var bottomContent = '';

  if ( this.status === "answered" ) {
    message += chalk.cyan(this.opt.choices.getChoice(this.selected).name);
  } else {
    var choicesStr = renderChoices(this.opt.choices, this.selected);
    message += this.paginator.paginate(choicesStr, this.selected, this.opt.pageSize);
    message += "\n  Answer: ";
  }

  message += this.rl.line;

  if (error) {
    bottomContent = '\n' + chalk.red('>> ') + error;
  }

  this.screen.render(message, bottomContent);
};

/**
 * When user press `enter` key
 */

Prompt.prototype.filterInput = function( input ) {
  if ( input == null || input === "" ) {
    return this.rawDefault;
  } else {
    return input - 1;
  }
};

Prompt.prototype.onEnd = function( state ) {
  this.status = "answered";
  this.selected = state.value;

  var selectedChoice = this.opt.choices.getChoice( this.selected );

  // Re-render prompt
  this.render();

  this.screen.done();
  this.done( selectedChoice.value );
};

Prompt.prototype.onError = function() {
  this.render("Please enter a valid index");
};

/**
 * When user press a key
 */

Prompt.prototype.onKeypress = function() {
  var index = this.rl.line.length ? Number(this.rl.line) - 1 : 0;

  if ( this.opt.choices.getChoice(index) ) {
    this.selected = index;
  } else {
    this.selected = undefined;
  }

  this.render();
};


/**
 * Function for rendering list choices
 * @param  {Number} pointer Position of the pointer
 * @return {String}         Rendered content
 */

function renderChoices(choices, pointer) {
  var output = '';
  var separatorOffset = 0;

  choices.forEach(function (choice, i) {
    output += '\n  ';

    if (choice.type === 'separator') {
      separatorOffset++;
      output += ' ' + choice;
      return;
    }

    var index = i - separatorOffset;
    var display = (index + 1) + ') ' + choice.name;
    if (index === pointer) {
      display = chalk.cyan( display );
    }
    output += display;
  });

  return output;
}
