<h1 align="center">Enquirer</h1>

<p align="center">
  <a href="https://npmjs.org/package/enquirer">
    <img src="https://img.shields.io/npm/v/enquirer.svg" alt="version">
  </a>
  <a href="https://npmjs.org/package/enquirer">
    <img src="https://img.shields.io/npm/dm/enquirer.svg" alt="downloads">
  </a>
</p>

<br>
<br>

<p align="center">
  <b>Stylish CLI prompts that are user-friendly, intuitive and easy to create.</b><br>
  <sub>>_ Prompts should be more like conversations than inquisitions▌</sub>
</p>

<br>

<p align="center">
  <sub>(Example shows Enquirer's <a href="#survey-prompt">Survey Prompt</a>)</a></sub>
  <img src="https://raw.githubusercontent.com/enquirer/enquirer/master/media/survey-prompt.gif" alt="Enquirer Survey Prompt" width="750"><br>
  <sub>The terminal in all examples is <a href="https://hyper.is/">Hyper</a>, theme is <a href="https://github.com/jonschlinkert/hyper-monokai-extended">hyper-monokai-extended</a>.</sub><br><br>
  <a href="#built-in-prompts"><strong>See more prompt examples</strong></a>
</p>

<br>
<br>

Created by [jonschlinkert][jon] and [doowb][brian], Enquirer is fast, easy to use, and lightweight enough for small projects, while also being powerful and customizable enough for the most advanced use cases.

- **Fast** - [Loads in ~4ms](#-performance) (that's about _3-4 times faster than a [single frame of a HD movie](http://www.endmemo.com/sconvert/framespersecondframespermillisecond.php) at 60fps_)
- **Lightweight** - Only one dependency, the excellent [ansi-colors](https://github.com/doowb/ansi-colors) by [Brian Woodward](https://github.com/doowb).
- **Easy to implement** - Uses promises and async/await and sensible defaults to make prompts easy to create and implement.
- **Easy to use** - Thrill your users with a better experience! Navigating around input and choices is a breeze. You can even create [quizzes](examples/fun/countdown.js), or [record](examples/fun/record.js) and [playback](examples/fun/play.js) key bindings to aid with tutorials and videos.
- **Intuitive** - Keypress combos are available to simplify usage.
- **Flexible** - All prompts can be used standalone or chained together.
- **Stylish** - Easily override semantic styles and symbols for any part of the prompt.
- **Extensible** - Easily create and use [custom prompts](#-custom-prompts) by extending Enquirer's built-in [prompts](#-prompts).
- **Pluggable** - Add advanced features to Enquirer using plugins.
- **Validation** - Optionally validate user input with any prompt.
- **Well tested** - All prompts are well-tested, and tests are easy to create without having to use brittle, hacky solutions to spy on prompts or "inject" values.
- **Examples** - There are numerous [examples](examples) available to help you get started.

If you like Enquirer, please consider starring or tweeting about this project to show your support. Thanks!

[issue]: https://github.com/enquirer/enquirer/issues/new
[pulls]: https://github.com/enquirer/enquirer/pulls
[jon]: https://github.com/jonschlinkert
[brian]: https://github.com/doowb

<br>

<p align="center">
  <b>>_ Ready to start making prompts your users will love? ▌</b><br>
  <img src="https://raw.githubusercontent.com/enquirer/enquirer/master/media/heartbeat.gif" alt="Enquirer Select Prompt with heartbeat example" width="750">
</p>

<br>
<br>

## ❯ Getting started

Get started with Enquirer, the most powerful and easy-to-use Node.js library for creating interactive CLI prompts.

- [Install](#-install)
- [Usage](#-usage)
- [Enquirer](#-enquirer)
- [Prompts](#-prompts)
  * [Built-in Prompts](#-built-in-prompts)
  * [Custom Prompts](#-custom-prompts)
- [Key Bindings](#-key-bindings)
- [Options](#prompt-options)
- [Release History](#-release-history)
- [Performance](#-performance)
- [About](#-about)

<br>

## ❯ Install

Install with [npm](https://www.npmjs.com/):

```sh
npm install enquirer --save
```
Install with [yarn](https://yarnpkg.com/en/):

```sh
yarn add enquirer
```

<p align="center">
  <img src="https://raw.githubusercontent.com/enquirer/enquirer/master/media/npm-install.gif" alt="Install Enquirer with NPM" width="750">
</p>

_(Requires Node.js 8.6 or higher. Please let us know if you need support for an earlier version by creating an [issue](../../issues/new).)_

<br>

## ❯ Usage

### Single prompt

The easiest way to get started with enquirer is to pass a [question object](#prompt-options) to the `prompt` method.

```js
const { prompt } = require('enquirer');

const response = await prompt({
  type: 'input',
  name: 'username',
  message: 'What is your username?'
});

console.log(response); // { username: 'jonschlinkert' }
```

_(Examples with `await` need to be run inside an `async` function)_

### Multiple prompts

Pass an array of ["question" objects](#prompt-options) to run a series of prompts.

```js
const response = await prompt([
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?'
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your username?'
  }
]);

console.log(response); // { name: 'Edward Chan', username: 'edwardmchan' }
```

### Different ways to run enquirer

#### 1. By importing the specific `built-in prompt`

```js
const { Confirm } = require('enquirer');

const prompt = new Confirm({
  name: 'question',
  message: 'Did you like enquirer?'
});

prompt.run()
  .then(answer => console.log('Answer:', answer));
```

#### 2. By passing the options to `prompt`

```js
const { prompt } = require('enquirer');

prompt({
  type: 'confirm',
  name: 'question',
  message: 'Did you like enquirer?'
})
  .then(answer => console.log('Answer:', answer));
```

**Jump to**: [Getting Started](#-getting-started) · [Prompts](#-prompts) · [Options](#prompt-options) · [Key Bindings](#-key-bindings)

<br>

## ❯ Enquirer

**Enquirer is a prompt runner**

Add Enquirer to your JavaScript project with following line of code.

```js
const Enquirer = require('enquirer');
```

The main export of this library is the `Enquirer` class, which has methods and features designed to simplify running prompts.

```js
const { prompt } = require('enquirer');
const questions = [
  {
    type: 'input',
    name: 'username',
    message: 'What is your username?'
  },
  {
    type: 'password',
    name: 'password',
    message: 'What is your password?'
  }
];

const answers = await prompt(questions);
console.log(answers);
```

**Prompts control how values are rendered and returned**

Each individual prompt is a class with special features and functionality for rendering the types of values you want to show users in the terminal, and subsequently returning the types of values you need to use in your application.

**How can I customize prompts?**

Below in this guide you will find information about creating [custom prompts](#-custom-prompts). For now, we'll focus on how to customize an existing prompt.

All of the individual [prompt classes](#built-in-prompts) in this library are exposed as static properties on Enquirer. This allows them to be used directly without using `enquirer.prompt()`.

Use this approach if you need to modify a prompt instance, or listen for events on the prompt.

**Example**

```js
const { Input } = require('enquirer');
const prompt = new Input({
  name: 'username',
  message: 'What is your username?'
});

prompt.run()
  .then(answer => console.log('Username:', answer))
  .catch(console.error);
```

### [Enquirer](index.js#L20)

Create an instance of `Enquirer`.

**Params**

* `options` **{Object}**: (optional) Options to use with all prompts.
* `answers` **{Object}**: (optional) Answers object to initialize with.

**Example**

```js
const Enquirer = require('enquirer');
const enquirer = new Enquirer();
```

### [register()](index.js#L42)

Register a custom prompt type.

**Params**

* `type` **{String}**
* `fn` **{Function|Prompt}**: `Prompt` class, or a function that returns a `Prompt` class.
* `returns` **{Object}**: Returns the Enquirer instance

**Example**

```js
const Enquirer = require('enquirer');
const enquirer = new Enquirer();
enquirer.register('customType', require('./custom-prompt'));
```

### [prompt()](index.js#L81)

Prompt function that takes a "question" object or array of question objects, and returns an object with responses from the user.

**Params**

* `questions` **{Array|Object}**: Options objects for one or more prompts to run.
* `returns` **{Promise}**: Promise that returns an "answers" object with the user's responses.

**Example**

```js
const Enquirer = require('enquirer');
const enquirer = new Enquirer();

const response = await enquirer.prompt({
  type: 'input',
  name: 'username',
  message: 'What is your username?'
});
console.log(response);
```

### [use()](index.js#L164)

Use an enquirer plugin.

**Params**

* `plugin` **{Function}**: Plugin function that takes an instance of Enquirer.
* `returns` **{Object}**: Returns the Enquirer instance.

**Example**

```js
const Enquirer = require('enquirer');
const enquirer = new Enquirer();
const plugin = enquirer => {
  // do stuff to enquire instance
};
enquirer.use(plugin);
```

### [Enquirer#prompt](index.js#L214)

Prompt function that takes a "question" object or array of question objects, and returns an object with responses from the user.

**Params**

* `questions` **{Array|Object}**: Options objects for one or more prompts to run.
* `returns` **{Promise}**: Promise that returns an "answers" object with the user's responses.

**Example**

```js
const { prompt } = require('enquirer');
const response = await prompt({
  type: 'input',
  name: 'username',
  message: 'What is your username?'
});
console.log(response);
```

<br>

## ❯ Prompts

This section is about Enquirer's prompts: what they look like, how they work, how to run them, available options, and how to customize the prompts or create your own prompt concept.

**Getting started with Enquirer's prompts**

- [Prompt](#prompt) - The base `Prompt` class used by other prompts
  - [Prompt Options](#prompt-options)
- [Built-in prompts](#built-in-prompts)
- [Prompt Types](#prompt-types) - The base `Prompt` class used by other prompts
- [Custom prompts](#-custom-prompts) - Enquirer 2.0 introduced the concept of prompt "types", with the goal of making custom prompts easier than ever to create and use.

### Prompt

The base `Prompt` class is used to create all other prompts.

```js
const { Prompt } = require('enquirer');
class MyCustomPrompt extends Prompt {}
```

See the documentation for [creating custom prompts](#-custom-prompts) to learn more about how this works.

#### Prompt Options

Each prompt takes an options object (aka "question" object), that implements the following interface:

```js
{
  // required
  type: string | function,
  name: string | function,
  message: string | function | async function,

  // optional
  skip: boolean | function | async function,
  initial: string | function | async function,
  format: function | async function,
  result: function | async function,
  validate: function | async function,
}
```
Each property of the options object is described below:

| **Property** | **Required?** | **Type** | **Description** |
| --- | --- | --- | --- |
| `type` | yes | `string\|function` | Enquirer uses this value to determine the type of prompt to run, but it's optional when prompts are run directly. |
| `name` | yes | `string\|function` | Used as the key for the answer on the returned values (answers) object. |
| `message` | yes | `string\|function` | The message to display when the prompt is rendered in the terminal. |
| `skip` | no | `boolean\|function` | If `true` it will not ask that prompt. |
| `initial` | no | `string\|function` | The default value to return if the user does not supply a value. |
| `format` | no | `function` | Function to format user input in the terminal. |
| `result` | no | `function` | Function to format the final submitted value before it's returned. |
| `validate` | no | `function` | Function to validate the submitted value before it's returned. This function may return a boolean or a string. If a string is returned it will be used as the validation error message. |

**Example usage**

```js
const { prompt } = require('enquirer');

const question = {
  type: 'input',
  name: 'username',
  message: 'What is your username?'
};

prompt(question)
  .then(answer => console.log('Answer:', answer))
  .catch(console.error);
```

<br>

### Built-in prompts

- [AutoComplete Prompt](#autocomplete-prompt)
- [BasicAuth Prompt](#basicauth-prompt)
- [Confirm Prompt](#confirm-prompt)
- [Form Prompt](#form-prompt)
- [Input Prompt](#input-prompt)
- [Invisible Prompt](#invisible-prompt)
- [List Prompt](#list-prompt)
- [MultiSelect Prompt](#multiselect-prompt)
- [Numeral Prompt](#numeral-prompt)
- [Password Prompt](#password-prompt)
- [Quiz Prompt](#quiz-prompt)
- [Survey Prompt](#survey-prompt)
- [Scale Prompt](#scale-prompt)
- [Select Prompt](#select-prompt)
- [Sort Prompt](#sort-prompt)
- [Snippet Prompt](#snippet-prompt)
- [Toggle Prompt](#toggle-prompt)

### AutoComplete Prompt

Prompt that auto-completes as the user types, and returns the selected value as a string.

<p align="center">
  <img src="https://raw.githubusercontent.com/enquirer/enquirer/master/media/autocomplete-prompt.gif" alt="Enquirer AutoComplete Prompt" width="750">
</p>

**Example Usage**

```js
const { AutoComplete } = require('enquirer');

const prompt = new AutoComplete({
  name: 'flavor',
  message: 'Pick your favorite flavor',
  limit: 10,
  initial: 2,
  choices: [
    'Almond',
    'Apple',
    'Banana',
    'Blackberry',
    'Blueberry',
    'Cherry',
    'Chocolate',
    'Cinnamon',
    'Coconut',
    'Cranberry',
    'Grape',
    'Nougat',
    'Orange',
    'Pear',
    'Pineapple',
    'Raspberry',
    'Strawberry',
    'Vanilla',
    'Watermelon',
    'Wintergreen'
  ]
});

prompt.run()
  .then(answer => console.log('Answer:', answer))
  .catch(console.error);
```

**AutoComplete Options**

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `highlight` | `function` | `dim` version of primary style | The color to use when "highlighting" characters in the list that match user input. |
| `multiple` | `boolean` | `false` | Allow multiple choices to be selected. |
| `suggest` | `function` | Greedy match, returns choices where `choice.message` contains the input string. | Function that filters choices. Takes user input and a choices array, and returns a list of matching choices. |
| `initial` | `number` | 0 | Preselected item in the list of choices. |
| `footer` | `function` | None | Function that displays [footer text](https://github.com/enquirer/enquirer/blob/6c2819518a1e2ed284242a99a685655fbaabfa28/examples/autocomplete/option-footer.js#L10) |

**Related prompts**

- [Select](#select-prompt)
- [MultiSelect](#multiselect-prompt)
- [Survey](#survey-prompt)

**↑ back to:** [Getting Started](#-getting-started) · [Prompts](#-prompts)

***

### BasicAuth Prompt

Prompt that asks for username and password to authenticate the user. The default implementation of `authenticate` function in `BasicAuth` prompt is to compare the username and password with the values supplied while running the prompt. The implementer is expected to override the `authenticate` function with a custom logic such as making an API request to a server to authenticate the username and password entered and expect a token back.

<p align="center">
  <img src="https://user-images.githubusercontent.com/13731210/61570485-7ffd9c00-aaaa-11e9-857a-d47dc7008284.gif" alt="Enquirer BasicAuth Prompt" width="750">
</p>

**Example Usage**

```js
const { BasicAuth } = require('enquirer');

 const prompt = new BasicAuth({
  name: 'password',
  message: 'Please enter your password',
  username: 'rajat-sr',
  password: '123',
  showPassword: true
});

 prompt
  .run()
  .then(answer => console.log('Answer:', answer))
  .catch(console.error);
```

**↑ back to:** [Getting Started](#-getting-started) · [Prompts](#-prompts)

***

### Confirm Prompt

Prompt that returns `true` or `false`.

<p align="center">
  <img src="https://raw.githubusercontent.com/enquirer/enquirer/master/media/confirm-prompt.gif" alt="Enquirer Confirm Prompt" width="750">
</p>

**Example Usage**

```js
const { Confirm } = require('enquirer');

const prompt = new Confirm({
  name: 'question',
  message: 'Want to answer?'
});

prompt.run()
  .then(answer => console.log('Answer:', answer))
  .catch(console.error);
```

**Related prompts**

- [Input](#input-prompt)
- [Numeral](#numeral-prompt)
- [Password](#password-prompt)

**↑ back to:** [Getting Started](#-getting-started) · [Prompts](#-prompts)

***

### Form Prompt

Prompt that allows the user to enter and submit multiple values on a single terminal screen.

<p align="center">
  <img src="https://raw.githubusercontent.com/enquirer/enquirer/master/media/form-prompt.gif" alt="Enquirer Form Prompt" width="750">
</p>

**Example Usage**

```js
const { Form } = require('enquirer');

const prompt = new Form({
  name: 'user',
  message: 'Please provide the following information:',
  choices: [
    { name: 'firstname', message: 'First Name', initial: 'Jon' },
    { name: 'lastname', message: 'Last Name', initial: 'Schlinkert' },
    { name: 'username', message: 'GitHub username', initial: 'jonschlinkert' }
  ]
});

prompt.run()
  .then(value => console.log('Answer:', value))
  .catch(console.error);
```

**Related prompts**

- [Input](#input-prompt)
- [Survey](#survey-prompt)

**↑ back to:** [Getting Started](#-getting-started) · [Prompts](#-prompts)

***

### Input Prompt

Prompt that takes user input and returns a string.

<p align="center">
  <img src="https://raw.githubusercontent.com/enquirer/enquirer/master/media/input-prompt.gif" alt="Enquirer Input Prompt" width="750">
</p>

**Example Usage**

```js
const { Input } = require('enquirer');
const prompt = new Input({
  message: 'What is your username?',
  initial: 'jonschlinkert'
});

prompt.run()
  .then(answer => console.log('Answer:', answer))
  .catch(console.log);
```

You can use [data-store](https://github.com/jonschlinkert/data-store) to store [input history](https://github.com/enquirer/enquirer/blob/master/examples/input/option-history.js) that the user can cycle through (see [source](https://github.com/enquirer/enquirer/blob/8407dc3579123df5e6e20215078e33bb605b0c37/lib/prompts/input.js)).

**Related prompts**

- [Confirm](#confirm-prompt)
- [Numeral](#numeral-prompt)
- [Password](#password-prompt)

**↑ back to:** [Getting Started](#-getting-started) · [Prompts](#-prompts)

***

### Invisible Prompt

Prompt that takes user input, hides it from the terminal, and returns a string.

<p align="center">
  <img src="https://raw.githubusercontent.com/enquirer/enquirer/master/media/invisible-prompt.gif" alt="Enquirer Invisible Prompt" width="750">
</p>

**Example Usage**

```js
const { Invisible } = require('enquirer');
const prompt = new Invisible({
  name: 'secret',
  message: 'What is your secret?'
});

prompt.run()
  .then(answer => console.log('Answer:', { secret: answer }))
  .catch(console.error);
```

**Related prompts**

- [Password](#password-prompt)
- [Input](#input-prompt)

**↑ back to:** [Getting Started](#-getting-started) · [Prompts](#-prompts)

***

### List Prompt

Prompt that returns a list of values, created by splitting the user input. The default split character is `,` with optional trailing whitespace.

<p align="center">
  <img src="https://raw.githubusercontent.com/enquirer/enquirer/master/media/list-prompt.gif" alt="Enquirer List Prompt" width="750">
</p>

**Example Usage**

```js
const { List } = require('enquirer');
const prompt = new List({
  name: 'keywords',
  message: 'Type comma-separated keywords'
});

prompt.run()
  .then(answer => console.log('Answer:', answer))
  .catch(console.error);
```

**Related prompts**

- [Sort](#sort-prompt)
- [Select](#select-prompt)

**↑ back to:** [Getting Started](#-getting-started) · [Prompts](#-prompts)

***

### MultiSelect Prompt

Prompt that allows the user to select multiple items from a list of options.

<p align="center">
  <img src="https://raw.githubusercontent.com/enquirer/enquirer/master/media/multiselect-prompt.gif" alt="Enquirer MultiSelect Prompt" width="750">
</p>

**Example Usage**

```js
const { MultiSelect } = require('enquirer');

const prompt = new MultiSelect({
  name: 'value',
  message: 'Pick your favorite colors',
  limit: 7,
  choices: [
    { name: 'aqua', value: '#00ffff' },
    { name: 'black', value: '#000000' },
    { name: 'blue', value: '#0000ff' },
    { name: 'fuchsia', value: '#ff00ff' },
    { name: 'gray', value: '#808080' },
    { name: 'green', value: '#008000' },
    { name: 'lime', value: '#00ff00' },
    { name: 'maroon', value: '#800000' },
    { name: 'navy', value: '#000080' },
    { name: 'olive', value: '#808000' },
    { name: 'purple', value: '#800080' },
    { name: 'red', value: '#ff0000' },
    { name: 'silver', value: '#c0c0c0' },
    { name: 'teal', value: '#008080' },
    { name: 'white', value: '#ffffff' },
    { name: 'yellow', value: '#ffff00' }
  ]
});

prompt.run()
  .then(answer => console.log('Answer:', answer))
  .catch(console.error);

// Answer: ['aqua', 'blue', 'fuchsia']
```

**Example key-value pairs**

Optionally, pass a `result` function and use the `.map` method to return an object of key-value pairs of the selected names and values: [example](./examples/multiselect/option-result.js)

```js
const { MultiSelect } = require('enquirer');

const prompt = new MultiSelect({
  name: 'value',
  message: 'Pick your favorite colors',
  limit: 7,
  choices: [
    { name: 'aqua', value: '#00ffff' },
    { name: 'black', value: '#000000' },
    { name: 'blue', value: '#0000ff' },
    { name: 'fuchsia', value: '#ff00ff' },
    { name: 'gray', value: '#808080' },
    { name: 'green', value: '#008000' },
    { name: 'lime', value: '#00ff00' },
    { name: 'maroon', value: '#800000' },
    { name: 'navy', value: '#000080' },
    { name: 'olive', value: '#808000' },
    { name: 'purple', value: '#800080' },
    { name: 'red', value: '#ff0000' },
    { name: 'silver', value: '#c0c0c0' },
    { name: 'teal', value: '#008080' },
    { name: 'white', value: '#ffffff' },
    { name: 'yellow', value: '#ffff00' }
  ],
  result(names) {
   return this.map(names);
  }
});

prompt.run()
  .then(answer => console.log('Answer:', answer))
  .catch(console.error);

// Answer: { aqua: '#00ffff', blue: '#0000ff', fuchsia: '#ff00ff' }
```

**Example alternate labels**

```js
const { MultiSelect } = require('enquirer');

const prompt = new MultiSelect({
  name: 'color',
  message: 'Pick a flavor',
  choices: [
    { message: 'Negative Red', name: 'cyan', value: '#00ffff' },
    { message: 'Lights Out', name: 'black', value: '#000000' },
    { message: 'The Ocean', name: 'blue', value: '#0000ff' },
  ]
});

prompt.run()
  .then(answer => console.log('Answer:', answer))
  .catch(console.error);
```

**Related prompts**

- [AutoComplete](#autocomplete-prompt)
- [Select](#select-prompt)
- [Survey](#survey-prompt)

**↑ back to:** [Getting Started](#-getting-started) · [Prompts](#-prompts)

***

### Numeral Prompt

Prompt that takes a number as input.

<p align="center">
  <img src="https://raw.githubusercontent.com/enquirer/enquirer/master/media/numeral-prompt.gif" alt="Enquirer Numeral Prompt" width="750">
</p>

**Example Usage**

```js
const { NumberPrompt } = require('enquirer');

const prompt = new NumberPrompt({
  name: 'number',
  message: 'Please enter a number'
});

prompt.run()
  .then(answer => console.log('Answer:', answer))
  .catch(console.error);
```

**Related prompts**

- [Input](#input-prompt)
- [Confirm](#confirm-prompt)

**↑ back to:** [Getting Started](#-getting-started) · [Prompts](#-prompts)

***

### Password Prompt

Prompt that takes user input and masks it in the terminal. Also see the [invisible prompt](#invisible-prompt)

<p align="center">
  <img src="https://raw.githubusercontent.com/enquirer/enquirer/master/media/password-prompt.gif" alt="Enquirer Password Prompt" width="750">
</p>

**Example Usage**

```js
const { Password } = require('enquirer');

const prompt = new Password({
  name: 'password',
  message: 'What is your password?'
});

prompt.run()
  .then(answer => console.log('Answer:', answer))
  .catch(console.error);
```

**Related prompts**

- [Input](#input-prompt)
- [Invisible](#invisible-prompt)

**↑ back to:** [Getting Started](#-getting-started) · [Prompts](#-prompts)

***

### Quiz Prompt

Prompt that allows the user to play multiple-choice quiz questions.

<p align="center">
  <img src="https://user-images.githubusercontent.com/13731210/61567561-891d4780-aa6f-11e9-9b09-3d504abd24ed.gif" alt="Enquirer Quiz Prompt" width="750">
</p>

**Example Usage**

```js
const { Quiz } = require('enquirer');

 const prompt = new Quiz({
  name: 'countries',
  message: 'How many countries are there in the world?',
  choices: ['165', '175', '185', '195', '205'],
  correctChoice: 3
});

 prompt
  .run()
  .then(answer => {
    if (answer.correct) {
      console.log('Correct!');
    } else {
      console.log(`Wrong! Correct answer is ${answer.correctAnswer}`);
    }
  })
  .catch(console.error);
```

**Quiz Options**

| Option | Type | Required | Description |
| -------------- | ------------- | ------------- | --- |
| `choices` | `array` | Yes | The list of possible answers to the quiz question. |
| `correctChoice`| `number` | Yes | Index of the correct choice from the `choices` array. |

**↑ back to:** [Getting Started](#-getting-started) · [Prompts](#-prompts)

***

### Survey Prompt

Prompt that allows the user to provide feedback for a list of questions.

<p align="center">
  <img src="https://raw.githubusercontent.com/enquirer/enquirer/master/media/survey-prompt.gif" alt="Enquirer Survey Prompt" width="750">
</p>

**Example Usage**

```js
const { Survey } = require('enquirer');

const prompt = new Survey({
  name: 'experience',
  message: 'Please rate your experience',
   scale: [
    { name: '1', message: 'Strongly Disagree' },
    { name: '2', message: 'Disagree' },
    { name: '3', message: 'Neutral' },
    { name: '4', message: 'Agree' },
    { name: '5', message: 'Strongly Agree' }
  ],
  margin: [0, 0, 2, 1],
  choices: [
    {
      name: 'interface',
      message: 'The website has a friendly interface.'
    },
    {
      name: 'navigation',
      message: 'The website is easy to navigate.'
    },
    {
      name: 'images',
      message: 'The website usually has good images.'
    },
    {
      name: 'upload',
      message: 'The website makes it easy to upload images.'
    },
    {
      name: 'colors',
      message: 'The website has a pleasing color palette.'
    }
  ]
});

prompt.run()
  .then(value => console.log('ANSWERS:', value))
  .catch(console.error);
```

**Related prompts**

- [Scale](#scale-prompt)
- [Snippet](#snippet-prompt)
- [Select](#select-prompt)

***

### Scale Prompt

A more compact version of the [Survey prompt](#survey-prompt), the Scale prompt allows the user to quickly provide feedback using a [Likert Scale](https://en.wikipedia.org/wiki/Likert_scale).

<p align="center">
  <img src="https://raw.githubusercontent.com/enquirer/enquirer/master/media/scale-prompt.gif" alt="Enquirer Scale Prompt" width="750">
</p>

**Example Usage**

```js
const { Scale } = require('enquirer');
const prompt = new Scale({
  name: 'experience',
  message: 'Please rate your experience',
  scale: [
    { name: '1', message: 'Strongly Disagree' },
    { name: '2', message: 'Disagree' },
    { name: '3', message: 'Neutral' },
    { name: '4', message: 'Agree' },
    { name: '5', message: 'Strongly Agree' }
  ],
  margin: [0, 0, 2, 1],
  choices: [
    {
      name: 'interface',
      message: 'The website has a friendly interface.',
      initial: 2
    },
    {
      name: 'navigation',
      message: 'The website is easy to navigate.',
      initial: 2
    },
    {
      name: 'images',
      message: 'The website usually has good images.',
      initial: 2
    },
    {
      name: 'upload',
      message: 'The website makes it easy to upload images.',
      initial: 2
    },
    {
      name: 'colors',
      message: 'The website has a pleasing color palette.',
      initial: 2
    }
  ]
});

prompt.run()
  .then(value => console.log('ANSWERS:', value))
  .catch(console.error);
```

**Related prompts**

- [AutoComplete](#autocomplete-prompt)
- [Select](#select-prompt)
- [Survey](#survey-prompt)

**↑ back to:** [Getting Started](#-getting-started) · [Prompts](#-prompts)

***

### Select Prompt

Prompt that allows the user to select from a list of options.

<p align="center">
  <img src="https://raw.githubusercontent.com/enquirer/enquirer/master/media/select-prompt.gif" alt="Enquirer Select Prompt" width="750">
</p>

**Example Usage**

```js
const { Select } = require('enquirer');

const prompt = new Select({
  name: 'color',
  message: 'Pick a flavor',
  choices: ['apple', 'grape', 'watermelon', 'cherry', 'orange']
});

prompt.run()
  .then(answer => console.log('Answer:', answer))
  .catch(console.error);
```

**Example key-value pairs**

```js
const { Select } = require('enquirer');

const prompt = new Select({
  name: 'color',
  message: 'Pick a color',
  choices: [
    { name: 'cyan', value: '#00ffff' },
    { name: 'black', value: '#000000' },
    { name: 'blue', value: '#0000ff' },
  ]
});

prompt.run()
  .then(answer => console.log('Answer:', answer))
  .catch(console.error);
```

**Example alternate labels**

```js
const { Select } = require('enquirer');

const prompt = new Select({
  name: 'color',
  message: 'Pick a color',
  choices: [
    { message: 'Negative Red', name: 'cyan', value: '#00ffff' },
    { message: 'Lights Out', name: 'black', value: '#000000' },
    { message: 'The Ocean', name: 'blue', value: '#0000ff' },
  ]
});

prompt.run()
  .then(answer => console.log('Answer:', answer))
  .catch(console.error);
```

**Related prompts**

- [AutoComplete](#autocomplete-prompt)
- [MultiSelect](#multiselect-prompt)

**↑ back to:** [Getting Started](#-getting-started) · [Prompts](#-prompts)

***

### Sort Prompt

Prompt that allows the user to sort items in a list.

**Example**

In this [example](https://github.com/enquirer/enquirer/raw/master/examples/sort/prompt.js), custom styling is applied to the returned values to make it easier to see what's happening.

<p align="center">
  <img src="https://raw.githubusercontent.com/enquirer/enquirer/master/media/sort-prompt.gif" alt="Enquirer Sort Prompt" width="750">
</p>

**Example Usage**

```js
const colors = require('ansi-colors');
const { Sort } = require('enquirer');
const prompt = new Sort({
  name: 'colors',
  message: 'Sort the colors in order of preference',
  hint: 'Top is best, bottom is worst',
  numbered: true,
  choices: ['red', 'white', 'green', 'cyan', 'yellow'].map(n => ({
    name: n,
    message: colors[n](n)
  }))
});

prompt.run()
  .then(function(answer = []) {
    console.log(answer);
    console.log('Your preferred order of colors is:');
    console.log(answer.map(key => colors[key](key)).join('\n'));
  })
  .catch(console.error);
```

**Related prompts**

- [List](#list-prompt)
- [Select](#select-prompt)

**↑ back to:** [Getting Started](#-getting-started) · [Prompts](#-prompts)

***

### Snippet Prompt

Prompt that allows the user to replace placeholders in a snippet of code or text.

<p align="center">
  <img src="https://raw.githubusercontent.com/enquirer/enquirer/master/media/snippet-prompt.gif" alt="Prompts" width="750">
</p>

**Example Usage**

```js
const semver = require('semver');
const { Snippet } = require('enquirer');
const prompt = new Snippet({
  name: 'username',
  message: 'Fill out the fields in package.json',
  required: true,
  fields: [
    {
      name: 'author_name',
      message: 'Author Name'
    },
    {
      name: 'version',
      validate(value, state, item, index) {
        if (item && item.name === 'version' && !semver.valid(value)) {
          return prompt.styles.danger('version should be a valid semver value');
        }
        return true;
      }
    }
  ],
  template: `{
  "name": "\${name}",
  "description": "\${description}",
  "version": "\${version}",
  "homepage": "https://github.com/\${username}/\${name}",
  "author": "\${author_name} (https://github.com/\${username})",
  "repository": "\${username}/\${name}",
  "license": "\${license:ISC}"
}
`
});

prompt.run()
  .then(answer => console.log('Answer:', answer.result))
  .catch(console.error);
```

**Related prompts**

- [Survey](#survey-prompt)
- [AutoComplete](#autocomplete-prompt)

**↑ back to:** [Getting Started](#-getting-started) · [Prompts](#-prompts)

***

### Toggle Prompt

Prompt that allows the user to toggle between two values then returns `true` or `false`.

<p align="center">
  <img src="https://raw.githubusercontent.com/enquirer/enquirer/master/media/toggle-prompt.gif" alt="Enquirer Toggle Prompt" width="750">
</p>

**Example Usage**

```js
const { Toggle } = require('enquirer');

const prompt = new Toggle({
  message: 'Want to answer?',
  enabled: 'Yep',
  disabled: 'Nope'
});

prompt.run()
  .then(answer => console.log('Answer:', answer))
  .catch(console.error);
```

**Related prompts**

- [Confirm](#confirm-prompt)
- [Input](#input-prompt)
- [Sort](#sort-prompt)

**↑ back to:** [Getting Started](#-getting-started) · [Prompts](#-prompts)

***

### Prompt Types

There are 5 (soon to be 6!) type classes:

* [ArrayPrompt](#arrayprompt)
  - [Options](#options)
  - [Properties](#properties)
  - [Methods](#methods)
  - [Choices](#choices)
  - [Defining choices](#defining-choices)
  - [Choice properties](#choice-properties)
  - [Related prompts](#related-prompts)
* [AuthPrompt](#authprompt)
* [BooleanPrompt](#booleanprompt)
* DatePrompt (Coming Soon!)
* [NumberPrompt](#numberprompt)
* [StringPrompt](#stringprompt)

Each type is a low-level class that may be used as a starting point for creating higher level prompts. Continue reading to learn how.

### ArrayPrompt

The `ArrayPrompt` class is used for creating prompts that display a list of choices in the terminal. For example, Enquirer uses this class as the basis for the [Select](#select) and [Survey](#survey) prompts.

#### Options

In addition to the [options](#options) available to all prompts, Array prompts also support the following options.

| **Option** | **Required?** | **Type** | **Description** |
| --- | --- | --- | --- |
| `autofocus` | `no` | `string\|number` | The index or name of the choice that should have focus when the prompt loads. Only one choice may have focus at a time. | |
| `stdin` | `no` | `stream` | The input stream to use for emitting keypress events. Defaults to `process.stdin`. |
| `stdout` | `no` | `stream` | The output stream to use for writing the prompt to the terminal. Defaults to `process.stdout`. |
| |

#### Properties

Array prompts have the following instance properties and getters.

| **Property name** | **Type** | **Description** |
| --- | --- | --- |
| `choices` | `array` | Array of choices that have been normalized from choices passed on the prompt options. |
| `cursor` | `number` | Position of the cursor relative to the _user input (string)_. |
| `enabled` | `array` | Returns an array of enabled choices. |
| `focused` | `array` | Returns the currently selected choice in the visible list of choices. This is similar to the concept of focus in HTML and CSS. Focused choices are always visible (on-screen). When a list of choices is longer than the list of visible choices, and an off-screen choice is _focused_, the list will scroll to the focused choice and re-render. |
| `focused` | Gets the currently selected choice. Equivalent to `prompt.choices[prompt.index]`. |
| `index` | `number` | Position of the pointer in the _visible list (array) of choices_. |
| `limit` | `number` | The number of choices to display on-screen. |
| `selected` | `array` | Either a list of enabled choices (when `options.multiple` is true) or the currently focused choice. |
| `visible` | `string` | |

#### Methods

| **Method** | **Description** |
| --- | --- |
| `pointer()` | Returns the visual symbol to use to identify the choice that currently has focus. The `❯` symbol is often used for this. The pointer is not always visible, as with the `autocomplete` prompt. |
| `indicator()` | Returns the visual symbol that indicates whether or not a choice is checked/enabled. |
| `focus()` | Sets focus on a choice, if it can be focused. |

#### Choices

Array prompts support the `choices` option, which is the array of choices users will be able to select from when rendered in the terminal.

**Type**: `string|object`

**Example**

```js
const { prompt } = require('enquirer');

const questions = [{
  type: 'select',
  name: 'color',
  message: 'Favorite color?',
  initial: 1,
  choices: [
    { name: 'red',   message: 'Red',   value: '#ff0000' }, //<= choice object
    { name: 'green', message: 'Green', value: '#00ff00' }, //<= choice object
    { name: 'blue',  message: 'Blue',  value: '#0000ff' }  //<= choice object
  ]
}];

let answers = await prompt(questions);
console.log('Answer:', answers.color);
```

#### Defining choices

Whether defined as a string or object, choices are normalized to the following interface:

```js
{
  name: string;
  message: string | undefined;
  value: string | undefined;
  hint: string | undefined;
  disabled: boolean | string | undefined;
}
```

**Example**

```js
const question = {
  name: 'fruit',
  message: 'Favorite fruit?',
  choices: ['Apple', 'Orange', 'Raspberry']
};
```

Normalizes to the following when the prompt is run:

```js
const question = {
  name: 'fruit',
  message: 'Favorite fruit?',
  choices: [
    { name: 'Apple', message: 'Apple', value: 'Apple' },
    { name: 'Orange', message: 'Orange', value: 'Orange' },
    { name: 'Raspberry', message: 'Raspberry', value: 'Raspberry' }
  ]
};
```

#### Choice properties

The following properties are supported on `choice` objects.

| **Option** | **Type** | **Description** |
| --- | --- | --- |
| `name` | `string` | The unique key to identify a choice |
| `message` | `string` | The message to display in the terminal. `name` is used when this is undefined. |
| `value` | `string` | Value to associate with the choice. Useful for creating key-value pairs from user choices. `name` is used when this is undefined. |
| `choices` | `array` | Array of "child" choices. |
| `hint` | `string` | Help message to display next to a choice. |
| `role` | `string` | Determines how the choice will be displayed. Currently the only role supported is `separator`. Additional roles may be added in the future (like `heading`, etc). Please create a [feature request] |
| `enabled` | `boolean` | Enabled a choice by default. This is only supported when `options.multiple` is true or on prompts that support multiple choices, like [MultiSelect](#-multiselect). |
| `disabled` | `boolean\|string` | Disable a choice so that it cannot be selected. This value may either be `true`, `false`, or a message to display. |
| `indicator` | `string\|function` | Custom indicator to render for a choice (like a check or radio button). |

#### Related prompts

- [AutoComplete](#autocomplete-prompt)
- [Form](#form-prompt)
- [MultiSelect](#multiselect-prompt)
- [Select](#select-prompt)
- [Survey](#survey-prompt)

***

### AuthPrompt

The `AuthPrompt` is used to create prompts to log in user using any authentication method. For example, Enquirer uses this class as the basis for the [BasicAuth Prompt](#basicauth-prompt). You can also find prompt examples in `examples/auth/` folder that utilizes `AuthPrompt` to create OAuth based authentication prompt or a prompt that authenticates using time-based OTP, among others.

`AuthPrompt` has a factory function that creates an instance of `AuthPrompt` class and it expects an `authenticate` function, as an argument, which overrides the `authenticate` function of the `AuthPrompt` class.

#### Methods

| **Method** | **Description** |
| ---------------- | --- |
| `authenticate()` | Contain all the authentication logic. This function should be overridden to implement custom authentication logic. The default `authenticate` function throws an error if no other function is provided. |

#### Choices

Auth prompt supports the `choices` option, which is the similar to the choices used in [Form Prompt](#form-prompt).

**Example**

```js
const { AuthPrompt } = require('enquirer');

function authenticate(value, state) {
  if (value.username === this.options.username && value.password === this.options.password) {
    return true;
  }
  return false;
}

const CustomAuthPrompt = AuthPrompt.create(authenticate);

const prompt = new CustomAuthPrompt({
  name: 'password',
  message: 'Please enter your password',
  username: 'rajat-sr',
  password: '1234567',
  choices: [
    { name: 'username', message: 'username' },
    { name: 'password', message: 'password' }
  ]
});

prompt
  .run()
  .then(answer => console.log('Authenticated?', answer))
  .catch(console.error);
```

#### Related prompts

- [BasicAuth Prompt](#basicauth-prompt)

***

### BooleanPrompt

The `BooleanPrompt` class is used for creating prompts that display and return a boolean value.

```js
const { BooleanPrompt } = require('enquirer');

const  prompt = new  BooleanPrompt({
  header:  '========================',
  message:  'Do you love enquirer?',
  footer:  '========================',
});

prompt.run()
  .then(answer  =>  console.log('Selected:', answer))
  .catch(console.error);
```

**Returns**: `boolean`

***

### NumberPrompt

The `NumberPrompt` class is used for creating prompts that display and return a numerical value.

```js
const { NumberPrompt } = require('enquirer');

const  prompt = new  NumberPrompt({
  header:  '************************',
  message:  'Input the Numbers:',
  footer:  '************************',
});

prompt.run()
  .then(answer  =>  console.log('Numbers are:', answer))
  .catch(console.error);
```

**Returns**: `string|number` (number, or number formatted as a string)

***

### StringPrompt

The `StringPrompt` class is used for creating prompts that display and return a string value.

```js
const { StringPrompt } = require('enquirer');

const prompt = new StringPrompt({
  header: '************************',
  message: 'Input the String:',
  footer: '************************'
});

prompt.run()
  .then(answer => console.log('String is:', answer))
  .catch(console.error);
```

**Returns**: `string`

<br>

## ❯ Custom prompts

With Enquirer 2.0, custom prompts are easier than ever to create and use.

**How do I create a custom prompt?**

Custom prompts are created by extending either:

- Enquirer's `Prompt` class
- one of the built-in [prompts](#-prompts), or
- low-level [types](#prompt-types).

<!-- Example: HaiKarate Custom Prompt -->

```js
const { Prompt } = require('enquirer');

class HaiKarate extends Prompt {
  constructor(options = {}) {
    super(options);
    this.value = options.initial || 0;
    this.cursorHide();
  }
  up() {
    this.value++;
    this.render();
  }
  down() {
    this.value--;
    this.render();
  }
  render() {
    this.clear(); // clear previously rendered prompt from the terminal
    this.write(`${this.state.message}: ${this.value}`);
  }
}

// Use the prompt by creating an instance of your custom prompt class.
const prompt = new HaiKarate({
  message: 'How many sprays do you want?',
  initial: 10
});

prompt.run()
  .then(answer => console.log('Sprays:', answer))
  .catch(console.error);
```

If you want to be able to specify your prompt by `type` so that it may be used alongside other prompts, you will need to first create an instance of `Enquirer`.

```js
const Enquirer = require('enquirer');
const enquirer = new Enquirer();
```

Then use the `.register()` method to add your custom prompt.

```js
enquirer.register('haikarate', HaiKarate);
```

Now you can do the following when defining "questions".

```js
let spritzer = require('cologne-drone');
let answers = await enquirer.prompt([
  {
    type: 'haikarate',
    name: 'cologne',
    message: 'How many sprays do you need?',
    initial: 10,
    async onSubmit(name, value) {
      await spritzer.activate(value); //<= activate drone
      return value;
    }
  }
]);
```

<br>

## ❯ Key Bindings

### All prompts

These key combinations may be used with all prompts.

| **command**                      | **description**                        |
| -------------------------------- | -------------------------------------- |
| <kbd>ctrl</kbd>  +  <kbd>c</kbd> | Cancel the prompt.                     |
| <kbd>ctrl</kbd> + <kbd>g</kbd>   | Reset the prompt to its initial state. |

<br>

### Move cursor

These combinations may be used on prompts that support user input (eg. [input prompt](#input-prompt), [password prompt](#password-prompt), and [invisible prompt](#invisible-prompt)).

| **command**                    | **description**                          |
| ------------------------------ | ---------------------------------------- |
| <kbd>left</kbd>                | Move the cursor back one character.      |
| <kbd>right</kbd>               | Move the cursor forward one character.   |
| <kbd>ctrl</kbd> + <kbd>a</kbd> | Move cursor to the start of the line     |
| <kbd>ctrl</kbd> + <kbd>e</kbd> | Move cursor to the end of the line       |
| <kbd>ctrl</kbd> + <kbd>b</kbd> | Move cursor back one character           |
| <kbd>ctrl</kbd> + <kbd>f</kbd> | Move cursor forward one character        |
| <kbd>ctrl</kbd> + <kbd>x</kbd> | Toggle between first and cursor position |

<br>

### Edit Input

These key combinations may be used on prompts that support user input (eg. [input prompt](#input-prompt), [password prompt](#password-prompt), and [invisible prompt](#invisible-prompt)).

| **command**                    | **description**                          |
| ------------------------------ | ---------------------------------------- |
| <kbd>ctrl</kbd> + <kbd>a</kbd> | Move cursor to the start of the line     |
| <kbd>ctrl</kbd> + <kbd>e</kbd> | Move cursor to the end of the line       |
| <kbd>ctrl</kbd> + <kbd>b</kbd> | Move cursor back one character           |
| <kbd>ctrl</kbd> + <kbd>f</kbd> | Move cursor forward one character        |
| <kbd>ctrl</kbd> + <kbd>x</kbd> | Toggle between first and cursor position |

<br>

| **command (Mac)**                   | **command (Windows)**            | **description**                                                                                                                           |
| ----------------------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>delete</kbd>                   | <kbd>backspace</kbd>             | Delete one character to the left.                                                                                                         |
| <kbd>fn</kbd> + <kbd>delete</kbd>   | <kbd>delete</kbd>                | Delete one character to the right.                                                                                                        |
| <kbd>option</kbd> + <kbd>up</kbd>   | <kbd>alt</kbd> + <kbd>up</kbd>   | Scroll to the previous item in history ([Input prompt](#input-prompt) only, when [history is enabled](examples/input/option-history.js)). |
| <kbd>option</kbd> + <kbd>down</kbd> | <kbd>alt</kbd> + <kbd>down</kbd> | Scroll to the next item in history ([Input prompt](#input-prompt) only, when [history is enabled](examples/input/option-history.js)).     |

### Select choices

These key combinations may be used on prompts that support _multiple_ choices, such as the [multiselect prompt](#multiselect-prompt), or the [select prompt](#select-prompt) when the `multiple` options is true.

| **command**       | **description**                                                                                                      |
| ----------------- | -------------------------------------------------------------------------------------------------------------------- |
| <kbd>space</kbd>  | Toggle the currently selected choice when `options.multiple` is true.                                                |
| <kbd>number</kbd> | Move the pointer to the choice at the given index. Also toggles the selected choice when `options.multiple` is true. |
| <kbd>a</kbd>      | Toggle all choices to be enabled or disabled.                                                                        |
| <kbd>i</kbd>      | Invert the current selection of choices.                                                                             |
| <kbd>g</kbd>      | Toggle the current choice group.                                                                                     |

<br>

### Hide/show choices

| **command**                     | **description**                                |
| ------------------------------- | ---------------------------------------------- |
| <kbd>fn</kbd> + <kbd>up</kbd>   | Decrease the number of visible choices by one. |
| <kbd>fn</kbd> + <kbd>down</kbd> | Increase the number of visible choices by one. |

<br>

### Move/lock Pointer

| **command**                        | **description**                                                                                                      |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| <kbd>number</kbd>                  | Move the pointer to the choice at the given index. Also toggles the selected choice when `options.multiple` is true. |
| <kbd>up</kbd>                      | Move the pointer up.                                                                                                 |
| <kbd>down</kbd>                    | Move the pointer down.                                                                                               |
| <kbd>ctrl</kbd> + <kbd>a</kbd>     | Move the pointer to the first _visible_ choice.                                                                      |
| <kbd>ctrl</kbd> + <kbd>e</kbd>     | Move the pointer to the last _visible_ choice.                                                                       |
| <kbd>shift</kbd> + <kbd>up</kbd>   | Scroll up one choice without changing pointer position (locks the pointer while scrolling).                          |
| <kbd>shift</kbd> + <kbd>down</kbd> | Scroll down one choice without changing pointer position (locks the pointer while scrolling).                        |

<br>

| **command (Mac)**                | **command (Windows)** | **description**                                            |
| -------------------------------- | --------------------- | ---------------------------------------------------------- |
| <kbd>fn</kbd> + <kbd>left</kbd>  | <kbd>home</kbd>       | Move the pointer to the first choice in the choices array. |
| <kbd>fn</kbd> + <kbd>right</kbd> | <kbd>end</kbd>        | Move the pointer to the last choice in the choices array.  |

<br>

## ❯ Release History

Please see [CHANGELOG.md](CHANGELOG.md).

## ❯ Performance

### System specs

MacBook Pro, Intel Core i7, 2.5 GHz, 16 GB.

### Load time

Time it takes for the module to load the first time (average of 3 runs):

```
enquirer: 4.013ms
inquirer: 286.717ms
```

<br>

## ❯ About

<details>
<summary><strong>Contributing</strong></summary>

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Todo

We're currently working on documentation for the following items. Please star and watch the repository for updates!

* [ ] Customizing symbols
* [ ] Customizing styles (palette)
* [ ] Customizing rendered input
* [ ] Customizing returned values
* [ ] Customizing key bindings
* [ ] Question validation
* [ ] Choice validation
* [ ] Skipping questions
* [ ] Async choices
* [ ] Async timers: loaders, spinners and other animations
* [ ] Links to examples
</details>

<details>
<summary><strong>Running Tests</strong></summary>

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
npm install && npm test
```
```sh
yarn && yarn test
```

</details>

<details>
<summary><strong>Building docs</strong></summary>

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
npm install -g verbose/verb#dev verb-generate-readme && verb
```

</details>

#### Contributors

| **Commits** | **Contributor** |
| --- | --- |
| 312 | [jonschlinkert](https://github.com/jonschlinkert) |
| 86  | [doowb](https://github.com/doowb) |
| 32  | [rajat-sr](https://github.com/rajat-sr) |
| 20  | [318097](https://github.com/318097) |
| 15  | [g-plane](https://github.com/g-plane) |
| 12  | [pixelass](https://github.com/pixelass) |
| 5   | [adityavyas611](https://github.com/adityavyas611) |
| 5   | [satotake](https://github.com/satotake) |
| 3   | [hongaar](https://github.com/hongaar) |
| 3   | [Ovyerus](https://github.com/Ovyerus) |
| 3   | [swyxio](https://github.com/swyxio) |
| 2   | [GabeL7r](https://github.com/GabeL7r) |
| 2   | [Andarist](https://github.com/Andarist) |
| 1   | [ahmadawais](https://github.com/ahmadawais) |
| 1   | [AlCalzone](https://github.com/AlCalzone) |
| 1   | [hipstersmoothie](https://github.com/hipstersmoothie) |
| 1   | [TrySound](https://github.com/TrySound) |
| 1   | [brentjanderson](https://github.com/brentjanderson) |
| 1   | [camilaibs](https://github.com/camilaibs) |
| 1   | [AgentEnder](https://github.com/AgentEnder) |
| 1   | [danieldelcore](https://github.com/danieldelcore) |
| 1   | [deve-sh](https://github.com/deve-sh) |
| 1   | [shortercode](https://github.com/shortercode) |
| 1   | [ImgBotApp](https://github.com/ImgBotApp) |
| 1   | [shumkov](https://github.com/shumkov) |
| 1   | [jsonkao](https://github.com/jsonkao) |
| 1   | [JounQin](https://github.com/JounQin) |
| 1   | [knpwrs](https://github.com/knpwrs) |
| 1   | [yeskunall](https://github.com/yeskunall) |
| 1   | [mischah](https://github.com/mischah) |
| 1   | [starpit](https://github.com/starpit) |
| 1   | [remcohaszing](https://github.com/remcohaszing) |
| 1   | [renarsvilnis](https://github.com/renarsvilnis) |
| 1   | [rstagi](https://github.com/rstagi) |
| 1   | [sbugert](https://github.com/sbugert) |
| 1   | [skellock](https://github.com/skellock) |
| 1   | [tinesoft](https://github.com/tinesoft) |
| 1   | [busticated](https://github.com/busticated) |
| 1   | [cha147](https://github.com/cha147) |
| 1   | [jmlee2k](https://github.com/jmlee2k) |
| 1   | [lef237](https://github.com/lef237) |
| 1   | [peterroe](https://github.com/peterroe) |
| 1   | [spwoodall](https://github.com/spwoodall) |
| 1   | [whxaxes](https://github.com/whxaxes) |
| 1   | [holynewbie](https://github.com/holynewbie) |
| 1   | [xulingling0](https://github.com/xulingling0) |

#### Author

**Jon Schlinkert**

* [GitHub Profile](https://github.com/jonschlinkert)
* [Twitter Profile](https://twitter.com/jonschlinkert)
* [LinkedIn Profile](https://linkedin.com/in/jonschlinkert)

#### Credit

Thanks to [derhuerst](https://github.com/derhuerst), creator of prompt libraries such as [prompt-skeleton](https://github.com/derhuerst/prompt-skeleton), which influenced some of the concepts we used in our prompts.

#### License

Copyright © 2018-present, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT License](LICENSE).

[issue]: https://github.com/enquirer/enquirer/issues/new
[pulls]: https://github.com/enquirer/enquirer/pulls
[jon]: https://github.com/jonschlinkert
[brian]: https://github.com/doowb
