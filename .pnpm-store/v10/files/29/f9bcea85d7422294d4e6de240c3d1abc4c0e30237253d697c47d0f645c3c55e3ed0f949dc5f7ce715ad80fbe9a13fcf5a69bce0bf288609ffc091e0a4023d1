'use strict';

const assert = require('assert');
const Events = require('events');
const utils = require('./lib/utils');

/**
 * Create an instance of `Enquirer`.
 *
 * ```js
 * const Enquirer = require('enquirer');
 * const enquirer = new Enquirer();
 * ```
 * @name Enquirer
 * @param {Object} `options` (optional) Options to use with all prompts.
 * @param {Object} `answers` (optional) Answers object to initialize with.
 * @api public
 */

class Enquirer extends Events {
  constructor(options, answers) {
    super();
    this.options = utils.merge({}, options);
    this.answers = { ...answers };
  }

  /**
   * Register a custom prompt type.
   *
   * ```js
   * const Enquirer = require('enquirer');
   * const enquirer = new Enquirer();
   * enquirer.register('customType', require('./custom-prompt'));
   * ```
   * @name register()
   * @param {String} `type`
   * @param {Function|Prompt} `fn` `Prompt` class, or a function that returns a `Prompt` class.
   * @return {Object} Returns the Enquirer instance
   * @api public
   */

  register(type, fn) {
    if (utils.isObject(type)) {
      for (let key of Object.keys(type)) this.register(key, type[key]);
      return this;
    }

    assert.equal(typeof fn, 'function', 'expected a function');
    const name = type.toLowerCase();

    if (fn.prototype instanceof this.Prompt) {
      this.prompts[name] = fn;
    } else {
      this.prompts[name] = fn(this.Prompt, this);
    }

    return this;
  }

  /**
   * Prompt function that takes a "question" object or array of question objects,
   * and returns an object with responses from the user.
   *
   * ```js
   * const Enquirer = require('enquirer');
   * const enquirer = new Enquirer();
   *
   * const response = await enquirer.prompt({
   *   type: 'input',
   *   name: 'username',
   *   message: 'What is your username?'
   * });
   * console.log(response);
   * ```
   * @name prompt()
   * @param {Array|Object} `questions` Options objects for one or more prompts to run.
   * @return {Promise} Promise that returns an "answers" object with the user's responses.
   * @api public
   */

  async prompt(questions = []) {
    for (let question of [].concat(questions)) {
      try {
        if (typeof question === 'function') question = await question.call(this);
        await this.ask(utils.merge({}, this.options, question));
      } catch (err) {
        return Promise.reject(err);
      }
    }
    return this.answers;
  }

  async ask(question) {
    if (typeof question === 'function') {
      question = await question.call(this);
    }

    let opts = utils.merge({}, this.options, question);
    let { type, name } = question;
    let { set, get } = utils;

    if (typeof type === 'function') {
      type = await type.call(this, question, this.answers);
    }

    if (!type) return this.answers[name];
    if (type === 'number') type = 'numeral';

    assert(this.prompts[type], `Prompt "${type}" is not registered`);

    let prompt = new this.prompts[type](opts);
    let value = get(this.answers, name);

    prompt.state.answers = this.answers;
    prompt.enquirer = this;

    if (name) {
      prompt.on('submit', value => {
        this.emit('answer', name, value, prompt);
        set(this.answers, name, value);
      });
    }

    // bubble events
    let emit = prompt.emit.bind(prompt);
    prompt.emit = (...args) => {
      this.emit.call(this, ...args);
      return emit(...args);
    };

    this.emit('prompt', prompt, this);

    if (opts.autofill && value != null) {
      prompt.value = prompt.input = value;

      // if "autofill=show" render the prompt, otherwise stay "silent"
      if (opts.autofill === 'show') {
        await prompt.submit();
      }
    } else {
      value = prompt.value = await prompt.run();
    }

    return value;
  }

  /**
   * Use an enquirer plugin.
   *
   * ```js
   * const Enquirer = require('enquirer');
   * const enquirer = new Enquirer();
   * const plugin = enquirer => {
   *   // do stuff to enquire instance
   * };
   * enquirer.use(plugin);
   * ```
   * @name use()
   * @param {Function} `plugin` Plugin function that takes an instance of Enquirer.
   * @return {Object} Returns the Enquirer instance.
   * @api public
   */

  use(plugin) {
    plugin.call(this, this);
    return this;
  }

  set Prompt(value) {
    this._Prompt = value;
  }
  get Prompt() {
    return this._Prompt || this.constructor.Prompt;
  }

  get prompts() {
    return this.constructor.prompts;
  }

  static set Prompt(value) {
    this._Prompt = value;
  }
  static get Prompt() {
    return this._Prompt || require('./lib/prompt');
  }

  static get prompts() {
    return require('./lib/prompts');
  }

  static get types() {
    return require('./lib/types');
  }

  /**
   * Prompt function that takes a "question" object or array of question objects,
   * and returns an object with responses from the user.
   *
   * ```js
   * const { prompt } = require('enquirer');
   * const response = await prompt({
   *   type: 'input',
   *   name: 'username',
   *   message: 'What is your username?'
   * });
   * console.log(response);
   * ```
   * @name Enquirer#prompt
   * @param {Array|Object} `questions` Options objects for one or more prompts to run.
   * @return {Promise} Promise that returns an "answers" object with the user's responses.
   * @api public
   */

  static get prompt() {
    const fn = (questions, ...rest) => {
      let enquirer = new this(...rest);
      let emit = enquirer.emit.bind(enquirer);
      enquirer.emit = (...args) => {
        fn.emit(...args);
        return emit(...args);
      };
      return enquirer.prompt(questions);
    };
    utils.mixinEmitter(fn, new Events());
    return fn;
  }
}

utils.mixinEmitter(Enquirer, new Events());
const prompts = Enquirer.prompts;

for (let name of Object.keys(prompts)) {
  let key = name.toLowerCase();

  let run = options => new prompts[name](options).run();
  Enquirer.prompt[key] = run;
  Enquirer[key] = run;

  if (!Enquirer[name]) {
    Reflect.defineProperty(Enquirer, name, { get: () => prompts[name] });
  }
}

const define = name => {
  utils.defineExport(Enquirer, name, () => Enquirer.types[name]);
};

define('ArrayPrompt');
define('AuthPrompt');
define('BooleanPrompt');
define('NumberPrompt');
define('StringPrompt');

module.exports = Enquirer;
