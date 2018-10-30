Inquirer.js
===========

[![npm](https://badge.fury.io/js/inquirer.svg)](http://badge.fury.io/js/inquirer) [![tests](https://travis-ci.org/SBoudrias/Inquirer.js.svg?branch=master)](http://travis-ci.org/SBoudrias/Inquirer.js) [![dependencies](https://david-dm.org/SBoudrias/Inquirer.js.svg?theme=shields.io)](https://david-dm.org/SBoudrias/Inquirer.js)

A collection of common interactive command line user interfaces.


## Goal and Philosophy

<img align="right" alt="Inquirer Logo" src="/assets/inquirer_readme.png" title="Inquirer.js"/>

**`Inquirer.js`** strives to be an easily embeddable and beautiful command line interface for [Node.js](https://nodejs.org/) (and perhaps the "CLI [Xanadu](https://en.wikipedia.org/wiki/Xanadu_(Citizen_Kane))").

**`Inquirer.js`** should ease the process of
- providing *error feedback*
- *asking questions*
- *parsing* input
- *validating* answers
- managing *hierarchical prompts*

> **Note:** **`Inquirer.js`** provides the user interface, and the inquiry session flow. If you're searching for a full blown command line program utility, then check out [Commander.js](https://github.com/visionmedia/commander.js) or [Vorpal.js](https://github.com/dthree/vorpal).


## Documentation

### Installation

``` shell
npm install inquirer
```

```javascript
var inquirer = require("inquirer");
inquirer.prompt([/* Pass your questions in here */], function( answers ) {
	// Use user feedback for... whatever!!
});
```


### Examples (Run it and see it)
Checkout the `examples/` folder for code and interface examples.

``` shell
node examples/pizza.js
node examples/checkbox.js
# etc...
```


### Methods

`inquirer.prompt( questions, callback )`

Launch the prompt interface (inquiry session)

- **questions** (Array) containing [Question Object](#question) (using the [reactive interface](#reactive-interface), you can also pass a `Rx.Observable` instance)
- **callback** (Function) first parameter is the [Answers Object](#answers)


### Objects

#### Question
A question object is a `hash` containing question related values:

- **type**: (String) Type of the prompt. Defaults: `input` - Possible values: `input`, `confirm`,
`list`, `rawlist`, `password`
- **name**: (String) The name to use when storing the answer in the answers hash.
- **message**: (String|Function) The question to print. If defined as a function, the first parameter will be the current inquirer session answers.
- **default**: (String|Number|Array|Function) Default value(s) to use if nothing is entered, or a function that returns the default value(s). If defined as a function, the first parameter will be the current inquirer session answers.
- **choices**: (Array|Function) Choices array or a function returning a choices array. If defined as a function, the first parameter will be the current inquirer session answers.
Array values can be simple `strings`, or `objects` containing a `name` (to display in list), a `value` (to save in the answers hash) and a `short` (to display after selection) properties. The choices array can also contain [a `Separator`](#separator).
- **validate**: (Function) Receive the user input and should return `true` if the value is valid, and an error message (`String`) otherwise. If `false` is returned, a default error message is provided.
- **filter**: (Function) Receive the user input and return the filtered value to be used inside the program. The value returned will be added to the _Answers_ hash.
- **when**: (Function, Boolean) Receive the current user answers hash and should return `true` or `false` depending on whether or not this question should be asked. The value can also be a simple boolean.

`default`, `choices`(if defined as functions), `validate`, `filter` and `when` functions can be called asynchronously using `this.async()`. You just have to pass the value you'd normally return to the callback option.

``` javascript
{
  validate: function(input) {

    // Declare function as asynchronous, and save the done callback
    var done = this.async();

    // Do async stuff
    setTimeout(function() {
      if (typeof input !== "number") {
        // Pass the return value in the done callback
        done("You need to provide a number");
        return;
      }
      // Pass the return value in the done callback
      done(true);
    }, 3000);
  }
}
```

### Answers
A key/value hash containing the client answers in each prompt.

- **Key** The `name` property of the _question_ object
- **Value** (Depends on the prompt)
  - `confirm`: (Boolean)
  - `input` : User input (filtered if `filter` is defined) (String)
  - `rawlist`, `list` : Selected choice value (or name if no value specified) (String)

### Separator
A separator can be added to any `choices` array:

```
// In the question object
choices: [ "Choice A", new inquirer.Separator(), "choice B" ]

// Which'll be displayed this way
[?] What do you want to do?
 > Order a pizza
   Make a reservation
   --------
   Ask opening hours
   Talk to the receptionist
```

The constructor takes a facultative `String` value that'll be use as the separator. If omitted, the separator will be `--------`.

Separator instances have a property `type` equal to `separator`. This should allow tools façading Inquirer interface from detecting separator types in lists.

Prompts type
---------------------

> **Note:**: _allowed options written inside square brackets (`[]`) are optional. Others are required._

#### List - `{ type: "list" }`

Take `type`, `name`, `message`, `choices`[, `default`, `filter`] properties. (Note that
default must be the choice `index` in the array or a choice `value`)

![List prompt](https://dl.dropboxusercontent.com/u/59696254/inquirer/list-prompt.png)

---

#### Raw List - `{ type: "rawlist" }`

Take `type`, `name`, `message`, `choices`[, `default`, `filter`] properties. (Note that
default must the choice `index` in the array)

![Raw list prompt](https://i.cloudup.com/LcRGpXI0CX-3000x3000.png)

---

#### Expand - `{ type: "expand" }`

Take `type`, `name`, `message`, `choices`[, `default`, `filter`] properties. (Note that
default must be the choice `index` in the array)

Note that the `choices` object will take an extra parameter called `key` for the `expand` prompt. This parameter must be a single (lowercased) character. The `h` option is added by the prompt and shouldn't be defined by the user.

See `examples/expand.js` for a running example.

![Expand prompt closed](https://dl.dropboxusercontent.com/u/59696254/inquirer/expand-prompt-1.png)
![Expand prompt expanded](https://dl.dropboxusercontent.com/u/59696254/inquirer/expand-prompt-2.png)

---

#### Checkbox - `{ type: "checkbox" }`

Take `type`, `name`, `message`, `choices`[, `filter`, `validate`, `default`] properties. `default` is expected to be an Array of the checked choices value.

Choices marked as `{ checked: true }` will be checked by default.

Choices whose property `disabled` is truthy will be unselectable. If `disabled` is a string, then the string will be outputted next to the disabled choice, otherwise it'll default to `"Disabled"`. The `disabled` property can also be a synchronous function receiving the current answers as argument and returning a boolean or a string.

![Checkbox prompt](https://dl.dropboxusercontent.com/u/59696254/inquirer/checkbox-prompt.png)

---

#### Confirm - `{ type: "confirm" }`

Take `type`, `name`, `message`[, `default`] properties. `default` is expected to be a boolean if used.

![Confirm prompt](https://dl.dropboxusercontent.com/u/59696254/inquirer/confirm-prompt.png)

---

#### Input - `{ type: "input" }`

Take `type`, `name`, `message`[, `default`, `filter`, `validate`] properties.

![Input prompt](https://dl.dropboxusercontent.com/u/59696254/inquirer/input-prompt.png)

---

#### Password - `{ type: "password" }`

Take `type`, `name`, `message`[, `default`, `filter`, `validate`] properties.

![Password prompt](https://dl.dropboxusercontent.com/u/59696254/inquirer/password-prompt.png)

## User Interfaces and layouts

Along with the prompts, Inquirer offers some basic text UI.

#### Bottom Bar - `inquirer.ui.BottomBar`

This UI present a fixed text at the bottom of a free text zone. This is useful to keep a message to the bottom of the screen while outputting command outputs on the higher section.

```javascript
var ui = new inquirer.ui.BottomBar();

// pipe a Stream to the log zone
outputStream.pipe( ui.log );

// Or simply write output
ui.log.write("something just happened.");
ui.log.write("Almost over, standby!");

// During processing, update the bottom bar content to display a loader
// or output a progress bar, etc
ui.updateBottomBar("new bottom bar content");
```

#### Prompt - `inquirer.ui.Prompt`

This is UI layout used to run prompt. This layout is returned by `inquirer.prompt` and you should probably always use `inquirer.prompt` to interface with this UI.


## Reactive interface

Internally, Inquirer uses the [JS reactive extension](https://github.com/Reactive-Extensions/RxJS) to handle events and async flows.

This mean you can take advantage of this feature to provide more advanced flows. For example, you can dynamically add questions to be asked:

```js
var prompts = Rx.Observable.create(function( obs ) {
  obs.onNext({ /* question... */ });
  setTimeout(function () {
    obs.onNext({ /* question... */ });
    obs.onCompleted();
  });
});

inquirer.prompt(prompts);
```

And using the `process` property, you have access to more fine grained callbacks:

```js
inquirer.prompt(prompts).process.subscribe(
  onEachAnswer,
  onError,
  onComplete
);
```

## Support (OS Terminals)

You should expect mostly good support for the CLI below. This does not mean we won't
look at issues found on other command line - feel free to report any!

- **Mac OS**:
  - Terminal.app
  - iTerm
- **Windows**:
  - cmd.exe
  - Powershell
  - Cygwin
- **Linux (Ubuntu, openSUSE, Arch Linux, etc)**:
  - gnome-terminal (Terminal GNOME)
  - konsole


## News on the march (Release notes)

Please refer to the [Github releases section for the changelog](https://github.com/SBoudrias/Inquirer.js/releases)


## Contributing

**Style Guide**
Please brief yourself on [Idiomatic.js](https://github.com/rwldrn/idiomatic.js) style guide with two space indent

**Unit test**
Unit test are written in [Mocha](https://mochajs.org/). Please add a unit test for every new feature or bug fix. `npm test` to run the test suite.

**Documentation**
Add documentation for every API change. Feel free to send corrections
or better docs!

**Pull Requests**
Send _fixes_ PR on the `master` branch. Any new features should be send on the `wip`branch.

We're looking to offer good support for multiple prompts and environments. If you want to
help, we'd like to keep a list of testers for each terminal/OS so we can contact you and
get feedback before release. Let us know if you want to be added to the list (just tweet
to @vaxilart) or just add your name to [the wiki](https://github.com/SBoudrias/Inquirer.js/wiki/Testers)

## License

Copyright (c) 2015 Simon Boudrias (twitter: @vaxilart)
Licensed under the MIT license.
