'use strict';
/**
 * `list` type prompt
 */

var _ = {
  isArray: require('lodash/isArray'),
  map: require('lodash/map'),
  isString: require('lodash/isString'),
};
var chalk = require('chalk');
var cliCursor = require('cli-cursor');
var figures = require('figures');
var { map, takeUntil } = require('rxjs/operators');
var Base = require('./base');
var observe = require('../utils/events');
var Paginator = require('../utils/paginator');
var incrementListIndex = require('../utils/incrementListIndex');

class CheckboxPrompt extends Base {
  constructor(questions, rl, answers) {
    super(questions, rl, answers);

    if (!this.opt.choices) {
      this.throwParamError('choices');
    }

    if (_.isArray(this.opt.default)) {
      this.opt.choices.forEach(function (choice) {
        if (this.opt.default.indexOf(choice.value) >= 0) {
          choice.checked = true;
        }
      }, this);
    }

    this.pointer = 0;

    // Make sure no default is set (so it won't be printed)
    this.opt.default = null;

    const shouldLoop = this.opt.loop === undefined ? true : this.opt.loop;
    this.paginator = new Paginator(this.screen, { isInfinite: shouldLoop });
  }

  /**
   * Start the Inquiry session
   * @param  {Function} cb      Callback when prompt is done
   * @return {this}
   */

  _run(cb) {
    this.done = cb;

    var events = observe(this.rl);

    var validation = this.handleSubmitEvents(
      events.line.pipe(map(this.getCurrentValue.bind(this)))
    );
    validation.success.forEach(this.onEnd.bind(this));
    validation.error.forEach(this.onError.bind(this));

    events.normalizedUpKey
      .pipe(takeUntil(validation.success))
      .forEach(this.onUpKey.bind(this));
    events.normalizedDownKey
      .pipe(takeUntil(validation.success))
      .forEach(this.onDownKey.bind(this));
    events.numberKey
      .pipe(takeUntil(validation.success))
      .forEach(this.onNumberKey.bind(this));
    events.spaceKey
      .pipe(takeUntil(validation.success))
      .forEach(this.onSpaceKey.bind(this));
    events.aKey.pipe(takeUntil(validation.success)).forEach(this.onAllKey.bind(this));
    events.iKey.pipe(takeUntil(validation.success)).forEach(this.onInverseKey.bind(this));

    // Init the prompt
    cliCursor.hide();
    this.render();
    this.firstRender = false;

    return this;
  }

  /**
   * Render the prompt to screen
   * @return {CheckboxPrompt} self
   */

  render(error) {
    // Render question
    var message = this.getQuestion();
    var bottomContent = '';

    if (!this.spaceKeyPressed) {
      message +=
        '(Press ' +
        chalk.cyan.bold('<space>') +
        ' to select, ' +
        chalk.cyan.bold('<a>') +
        ' to toggle all, ' +
        chalk.cyan.bold('<i>') +
        ' to invert selection)';
    }

    // Render choices or answer depending on the state
    if (this.status === 'answered') {
      message += chalk.cyan(this.selection.join(', '));
    } else {
      var choicesStr = renderChoices(this.opt.choices, this.pointer);
      var indexPosition = this.opt.choices.indexOf(
        this.opt.choices.getChoice(this.pointer)
      );
      var realIndexPosition =
        this.opt.choices.reduce(function (acc, value, i) {
          // Dont count lines past the choice we are looking at
          if (i > indexPosition) {
            return acc;
          }
          // Add line if it's a separator
          if (value.type === 'separator') {
            return acc + 1;
          }

          var l = value.name;
          // Non-strings take up one line
          if (typeof l !== 'string') {
            return acc + 1;
          }

          // Calculate lines taken up by string
          l = l.split('\n');
          return acc + l.length;
        }, 0) - 1;
      message +=
        '\n' + this.paginator.paginate(choicesStr, realIndexPosition, this.opt.pageSize);
    }

    if (error) {
      bottomContent = chalk.red('>> ') + error;
    }

    this.screen.render(message, bottomContent);
  }

  /**
   * When user press `enter` key
   */

  onEnd(state) {
    this.status = 'answered';
    this.spaceKeyPressed = true;
    // Rerender prompt (and clean subline error)
    this.render();

    this.screen.done();
    cliCursor.show();
    this.done(state.value);
  }

  onError(state) {
    this.render(state.isValid);
  }

  getCurrentValue() {
    var choices = this.opt.choices.filter(function (choice) {
      return Boolean(choice.checked) && !choice.disabled;
    });

    this.selection = _.map(choices, 'short');
    return _.map(choices, 'value');
  }

  onUpKey() {
    this.pointer = incrementListIndex(this.pointer, 'up', this.opt);
    this.render();
  }

  onDownKey() {
    this.pointer = incrementListIndex(this.pointer, 'down', this.opt);
    this.render();
  }

  onNumberKey(input) {
    if (input <= this.opt.choices.realLength) {
      this.pointer = input - 1;
      this.toggleChoice(this.pointer);
    }

    this.render();
  }

  onSpaceKey() {
    this.spaceKeyPressed = true;
    this.toggleChoice(this.pointer);
    this.render();
  }

  onAllKey() {
    var shouldBeChecked = Boolean(
      this.opt.choices.find(function (choice) {
        return choice.type !== 'separator' && !choice.checked;
      })
    );

    this.opt.choices.forEach(function (choice) {
      if (choice.type !== 'separator') {
        choice.checked = shouldBeChecked;
      }
    });

    this.render();
  }

  onInverseKey() {
    this.opt.choices.forEach(function (choice) {
      if (choice.type !== 'separator') {
        choice.checked = !choice.checked;
      }
    });

    this.render();
  }

  toggleChoice(index) {
    var item = this.opt.choices.getChoice(index);
    if (item !== undefined) {
      this.opt.choices.getChoice(index).checked = !item.checked;
    }
  }
}

/**
 * Function for rendering checkbox choices
 * @param  {Number} pointer Position of the pointer
 * @return {String}         Rendered content
 */

function renderChoices(choices, pointer) {
  var output = '';
  var separatorOffset = 0;

  choices.forEach(function (choice, i) {
    if (choice.type === 'separator') {
      separatorOffset++;
      output += ' ' + choice + '\n';
      return;
    }

    if (choice.disabled) {
      separatorOffset++;
      output += ' - ' + choice.name;
      output += ' (' + (_.isString(choice.disabled) ? choice.disabled : 'Disabled') + ')';
    } else {
      var line = getCheckbox(choice.checked) + ' ' + choice.name;
      if (i - separatorOffset === pointer) {
        output += chalk.cyan(figures.pointer + line);
      } else {
        output += ' ' + line;
      }
    }

    output += '\n';
  });

  return output.replace(/\n$/, '');
}

/**
 * Get the checkbox
 * @param  {Boolean} checked - add a X or not to the checkbox
 * @return {String} Composited checkbox string
 */

function getCheckbox(checked) {
  return checked ? chalk.green(figures.radioOn) : figures.radioOff;
}

module.exports = CheckboxPrompt;
