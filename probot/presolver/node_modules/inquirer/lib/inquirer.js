/**
 * Inquirer.js
 * A collection of common interactive command line user interfaces.
 */

var inquirer = module.exports;


/**
 * Client interfaces
 */

inquirer.prompts = {};

inquirer.Separator = require('./objects/separator');

inquirer.ui = {
  BottomBar: require('./ui/bottom-bar'),
  Prompt: require('./ui/prompt')
};

/**
 * Create a new self-contained prompt module.
 */
inquirer.createPromptModule = function (opt) {
  var promptModule = function (questions, allDone) {
    var ui = new inquirer.ui.Prompt(promptModule.prompts, opt);
    ui.run(questions, allDone);
    return ui;
  };
  promptModule.prompts = {};

  /**
   * Register a prompt type
   * @param {String} name     Prompt type name
   * @param {Function} prompt Prompt constructor
   * @return {inquirer}
   */

  promptModule.registerPrompt = function (name, prompt) {
    promptModule.prompts[name] = prompt;
    return this;
  };

  /**
   * Register the defaults provider prompts
   */

  promptModule.restoreDefaultPrompts = function () {
    this.registerPrompt('list', require('./prompts/list'));
    this.registerPrompt('input', require('./prompts/input'));
    this.registerPrompt('confirm', require('./prompts/confirm'));
    this.registerPrompt('rawlist', require('./prompts/rawlist'));
    this.registerPrompt('expand', require('./prompts/expand'));
    this.registerPrompt('checkbox', require('./prompts/checkbox'));
    this.registerPrompt('password', require('./prompts/password'));
  };

  promptModule.restoreDefaultPrompts();

  return promptModule;
};

/**
 * Public CLI helper interface
 * @param  {Array|Object|rx.Observable} questions - Questions settings array
 * @param  {Function} cb - Callback being passed the user answers
 * @return {inquirer.ui.Prompt}
 */

inquirer.prompt = inquirer.createPromptModule();

// Expose helper functions on the top level for easiest usage by common users
inquirer.registerPrompt = function (name, prompt) {
  inquirer.prompt.registerPrompt(name, prompt);
};
inquirer.restoreDefaultPrompts = function () {
  inquirer.prompt.restoreDefaultPrompts();
};
