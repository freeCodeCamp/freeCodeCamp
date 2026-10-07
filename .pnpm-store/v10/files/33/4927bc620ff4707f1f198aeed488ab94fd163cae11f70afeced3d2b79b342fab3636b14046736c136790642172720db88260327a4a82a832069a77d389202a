# Yurnalist

An elegant console reporter, borrowed from [Yarn](https://yarnpkg.com).

## Introduction

Pretty console output makes developers happy and Yarn is doing a nice job.
Yurnalist takes the internal console reporter code from Yarn and makes it
available for use in other Node.js applications.

The current version is based on code from Yarn v1.13.0.

Yurnalist can be used to report many different things besides simple messages.

### Features

* log, info, warn, succes, error & command messages
* progress bars
* activity spinners
* process steps
* object inspection
* lists
* emojis
* trees
* tables
* user question
* user select
* program header & footer

## Install

```sh
yarn add yurnalist
```

Or if your prefer NPM

```sh
npm install yurnalist
```

## How to use

Here is an example showing a combination of different reporter API functions.

```javascript
import report from 'yurnalist'

/* A function to fake some async task */
function waitNumberOfSecs(secs) {
  return new Promise((resolve) => setTimeout(resolve, secs * 1000));
}

async function fetchSomething() {
  report.info('Please wait while I fetch something for you.');
  report.warn('It might take a little while though.');

  const spinner = report.activity();
  spinner.tick('I am on it!');

  try {
    await waitNumberOfSecs(1);
    spinner.tick('Still busy...');
    await waitNumberOfSecs(1);
    spinner.tick('Almost there...');
    await waitNumberOfSecs(1);
    report.success('Done!');
  } catch (err) {
    report.error(err);
  }

  spinner.end();
}

fetchSomething();

```

## Requirements

Node >= 4

## Examples

Examples showing different API functions are found in [/examples](/examples).
You can run them directly with node >= 7.6 (because of async/await syntax). For
older versions you could use the `--harmony` flag, or otherwise Babel.

To run the activity example:

```sh
node examples/activity.js
```

## Configuration

A normal import gives you a reporter instance configured with defaults for easy
use. If you want something else you can call `createReporter(options)` to give
you an instance with different options.

### Options

These are the options of the reporter as defined by Flow:

```javascript
type ReporterOptions = {
  verbose?: boolean,
  stdout?: Stdout,
  stderr?: Stdout,
  stdin?: Stdin,
  emoji?: boolean,
  noProgress?: boolean,
  silent?: boolean,
  nonInteractive?: boolean,
  peekMemoryCounter?: boolean
};
```

The defaults used are:

```javascript
const defaults = {
  verbose: false,
  stdout: process.stdout,
  stderr: process.stderr,
  stdin: process.stdin,
  emoji: true,
  noProgress: false,
  silent: false,
  nonInteractive: false,
  peekMemoryCounter: false
}
```

The peekMemoryCounter is disabled by default. If you enable it, you'll have to
call `reporter.close()` to stop its running timer. Otherwise your program will
not exit. The memory counter can be used to display in the footer data.

## Silent Mode and CI

Silent mode can be set via the options passed to createReporter. It disables
output for various functions like `info`, `list`, `activity` and `progress`. The
output from `warning` and `error` messages is not silenced.

Silent mode can also be enabled with the `YURNALIST_SILENT` environment
variable.

In CI environments the output from `activity` and `progress` is disabled.

## API

The API still needs some documentation, but most methods are straightforward. In
the meantime you can also look at the [examples](./examples) and possibly even
the [tests](./__tests__).

The following functions are available:


### table
### step

### inspect( thing: mixed )

Pretty-prints the `thing`.

### list(title: string, items: Array<string>, hints?: Object)

Generates a list of the provided items. Turns into a definition list if `hints`
are provided.

Example of a simple list:

```
report.list('My grocery list', ['bananas', 'tulips', 'eggs', 'bamischijf']);
```

Outputs:

```
list My grocery list
   - bananas
   - tulips
   - eggs
   - bamischijf
```


Example with hints:

```
const items = ['bananas', 'tulips', 'eggs', 'bamischijf'];

const hints = {
  bananas: 'for baking',
  tulips: 'because it makes you happy',
  eggs: 'not the cheap ones though',
  bamischijf: 'if they have it',
};

report.list('My grocery list', items, hints);
```

Outputs:

```
list My grocery list
    - bananas
      for baking
   - tulips
      because it makes you happy
   - eggs
      not the cheap ones though
   - bamischijf
      if they have it
```

### header
### footer
### log
### success
### error
### info
### command
### warn
### question
### tree
### activitySet
### activity
### select
### progress
### close
### createReporter

## Language

Yarn uses a language file for certain messages. For example if you try to skip a
required question, or when you pick an invalid item from a select. This language
file is not yet exposed in the Yurnalist API. The only supported language is
English, as it is in Yarn at the moment.

I plan to make this configurable so that you can define your own messages in
your own language .

## Emojis

You can use Emojis in your output. Yurnalist should disable them if they are not
allowed in the application environment.

Check:

* [node-emoji](https://github.com/omnidan/node-emoji)
* [Emoji cheat sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet/)

## Credits

Of course ❤️ and credits to all the contributers of [Yarn](https://yarnpkg.com).
The ease with which I was able to extract this module from their codebase is
proving some awesome engineering skills.
