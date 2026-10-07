<img width="75px" height="75px" align="right" alt="Inquirer Logo" src="https://raw.githubusercontent.com/SBoudrias/Inquirer.js/main/assets/inquirer_readme.svg?sanitize=true" title="Inquirer.js"/>

# Inquirer

[![npm](https://badge.fury.io/js/@inquirer%2Fprompts.svg)](https://www.npmjs.com/package/@inquirer/prompts)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FSBoudrias%2FInquirer.js.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FSBoudrias%2FInquirer.js?ref=badge_shield)

A collection of common interactive command line user interfaces.

![List prompt](https://cdn.rawgit.com/SBoudrias/Inquirer.js/28ae8337ba51d93e359ef4f7ee24e79b69898962/assets/screenshots/list.svg)

Give it a try in your own terminal!

```sh
npx @inquirer/demo@latest
```

# Installation

<table>
<tr>
  <th>npm</th>
  <th>yarn</th>
  <th>pnpm</th>
  <th>bun</th>
</tr>
<tr>
<td>

```sh
npm install @inquirer/prompts
```

</td>
<td>

```sh
yarn add @inquirer/prompts
```

</td>
<td>

```sh
pnpm add @inquirer/prompts
```

</td>
<td>

```sh
bun add @inquirer/prompts
```

</td>
</tr>
</table>

> [!NOTE]
> Inquirer recently underwent a rewrite from the ground up to reduce the package size and improve performance. The previous version of the package is still maintained (though not actively developed), and offered hundreds of community contributed prompts that might not have been migrated to the latest API. If this is what you're looking for, the [previous package is over here](https://github.com/SBoudrias/Inquirer.js/tree/main/packages/inquirer).

# Usage

```js
import { input } from '@inquirer/prompts';

const answer = await input({ message: 'Enter your name' });
```

# Prompts

## [Input](https://github.com/SBoudrias/Inquirer.js/tree/main/packages/input)

![Input prompt](https://cdn.rawgit.com/SBoudrias/Inquirer.js/28ae8337ba51d93e359ef4f7ee24e79b69898962/assets/screenshots/input.svg)

```js
import { input } from '@inquirer/prompts';
```

[See documentation](https://github.com/SBoudrias/Inquirer.js/tree/main/packages/input) for usage example and options documentation.

## [Select](https://github.com/SBoudrias/Inquirer.js/tree/main/packages/select)

![Select prompt](https://cdn.rawgit.com/SBoudrias/Inquirer.js/28ae8337ba51d93e359ef4f7ee24e79b69898962/assets/screenshots/list.svg)

```js
import { select } from '@inquirer/prompts';
```

[See documentation](https://github.com/SBoudrias/Inquirer.js/tree/main/packages/select) for usage example and options documentation.

## [Checkbox](https://github.com/SBoudrias/Inquirer.js/tree/main/packages/checkbox)

![Checkbox prompt](https://cdn.rawgit.com/SBoudrias/Inquirer.js/28ae8337ba51d93e359ef4f7ee24e79b69898962/assets/screenshots/checkbox.svg)

```js
import { checkbox } from '@inquirer/prompts';
```

[See documentation](https://github.com/SBoudrias/Inquirer.js/tree/main/packages/checkbox) for usage example and options documentation.

## [Confirm](https://github.com/SBoudrias/Inquirer.js/tree/main/packages/confirm)

![Confirm prompt](https://cdn.rawgit.com/SBoudrias/Inquirer.js/28ae8337ba51d93e359ef4f7ee24e79b69898962/assets/screenshots/confirm.svg)

```js
import { confirm } from '@inquirer/prompts';
```

[See documentation](https://github.com/SBoudrias/Inquirer.js/tree/main/packages/confirm) for usage example and options documentation.

## [Search](https://github.com/SBoudrias/Inquirer.js/tree/main/packages/search)

![search prompt](https://raw.githubusercontent.com/SBoudrias/Inquirer.js/f459199e679aec7676cecc0fc12ef8a4cd3dda0b/assets/screenshots/search.png)

```js
import { search } from '@inquirer/prompts';
```

[See documentation](https://github.com/SBoudrias/Inquirer.js/tree/main/packages/search) for usage example and options documentation.

## [Password](https://github.com/SBoudrias/Inquirer.js/tree/main/packages/password)

![Password prompt](https://cdn.rawgit.com/SBoudrias/Inquirer.js/28ae8337ba51d93e359ef4f7ee24e79b69898962/assets/screenshots/password.svg)

```js
import { password } from '@inquirer/prompts';
```

[See documentation](https://github.com/SBoudrias/Inquirer.js/tree/main/packages/password) for usage example and options documentation.

## [Expand](https://github.com/SBoudrias/Inquirer.js/tree/main/packages/expand)

![Expand prompt closed](https://cdn.rawgit.com/SBoudrias/Inquirer.js/28ae8337ba51d93e359ef4f7ee24e79b69898962/assets/screenshots/expand-y.svg)
![Expand prompt expanded](https://cdn.rawgit.com/SBoudrias/Inquirer.js/28ae8337ba51d93e359ef4f7ee24e79b69898962/assets/screenshots/expand-d.svg)

```js
import { expand } from '@inquirer/prompts';
```

[See documentation](https://github.com/SBoudrias/Inquirer.js/tree/main/packages/expand) for usage example and options documentation.

## [Editor](https://github.com/SBoudrias/Inquirer.js/tree/main/packages/editor)

Launches an instance of the users preferred editor on a temporary file. Once the user exits their editor, the content of the temporary file is read as the answer. The editor used is determined by reading the $VISUAL or $EDITOR environment variables. If neither of those are present, the OS default is used (notepad on Windows, vim on Mac or Linux.)

```js
import { editor } from '@inquirer/prompts';
```

[See documentation](https://github.com/SBoudrias/Inquirer.js/tree/main/packages/editor) for usage example and options documentation.

## [Number](https://github.com/SBoudrias/Inquirer.js/tree/main/packages/number)

Very similar to the `input` prompt, but with built-in number validation configuration option.

```js
import { number } from '@inquirer/prompts';
```

[See documentation](https://github.com/SBoudrias/Inquirer.js/tree/main/packages/number) for usage example and options documentation.

## [Raw List](https://github.com/SBoudrias/Inquirer.js/tree/main/packages/rawlist)

![Raw list prompt](https://cdn.rawgit.com/SBoudrias/Inquirer.js/28ae8337ba51d93e359ef4f7ee24e79b69898962/assets/screenshots/rawlist.svg)

```js
import { rawlist } from '@inquirer/prompts';
```

[See documentation](https://github.com/SBoudrias/Inquirer.js/tree/main/packages/rawlist) for usage example and options documentation.

# Create your own prompts

The [API documentation is over here](https://github.com/SBoudrias/Inquirer.js/tree/main/packages/core), and our [testing utilities here](https://github.com/SBoudrias/Inquirer.js/tree/main/packages/testing).

# Advanced usage

All inquirer prompts are a function taking 2 arguments. The first argument is the prompt configuration (unique to each prompt). The second is providing contextual or runtime configuration.

The context options are:

| Property          | Type                    | Required | Description                                                  |
| ----------------- | ----------------------- | -------- | ------------------------------------------------------------ |
| input             | `NodeJS.ReadableStream` | no       | The stdin stream (defaults to `process.stdin`)               |
| output            | `NodeJS.WritableStream` | no       | The stdout stream (defaults to `process.stdout`)             |
| clearPromptOnDone | `boolean`               | no       | If true, we'll clear the screen after the prompt is answered |
| signal            | `AbortSignal`           | no       | An AbortSignal to cancel prompts asynchronously              |

> [!WARNING]
> When providing an input stream or piping `process.stdin`, it's very likely you need to call `process.stdin.setRawMode(true)`
> before calling inquirer functions. Node.js usually does it automatically, but when we shadow the stdin, Node can loss track
> and not know it has to. If the prompt isn't interactive (arrows don't work, etc), it's likely due to this.

Example:

```js
import { confirm } from '@inquirer/prompts';

const allowEmail = await confirm(
  { message: 'Do you allow us to send you email?' },
  {
    output: new Stream.Writable({
      write(chunk, _encoding, next) {
        // Do something
        next();
      },
    }),
    clearPromptOnDone: true,
  },
);
```

## Canceling prompt

This can be done with either an `AbortController` or `AbortSignal`.

```js
// Example 1: using built-in AbortSignal utilities
import { confirm } from '@inquirer/prompts';

const answer = await confirm({ ... }, { signal: AbortSignal.timeout(5000) });
```

```js
// Example 2: implementing custom cancellation with an AbortController
import { confirm } from '@inquirer/prompts';

const controller = new AbortController();
setTimeout(() => {
  controller.abort(); // This will reject the promise
}, 5000);

const answer = await confirm({ ... }, { signal: controller.signal });
```

# Recipes

## Handling `ctrl+c` gracefully

When a user press `ctrl+c` to exit a prompt, Inquirer rejects the prompt promise. This is the expected behavior in order to allow your program to teardown/cleanup its environment. When using `async/await`, rejected promises throw their error. When unhandled, those errors print their stack trace in your user's terminal.

```
ExitPromptError: User force closed the prompt with 0 null
  at file://example/packages/core/dist/esm/lib/create-prompt.js:55:20
  at Emitter.emit (file://example/node_modules/signal-exit/dist/mjs/index.js:67:19)
  at #processEmit (file://example/node_modules/signal-exit/dist/mjs/index.js:236:27)
  at #process.emit (file://example/node_modules/signal-exit/dist/mjs/index.js:187:37)
  at process.callbackTrampoline (node:internal/async_hooks:130:17)
```

This isn't a great UX, which is why we highly recommend you to handle those errors gracefully.

First option is to wrap your scripts in `try/catch`; like [we do in our demo program](https://github.com/SBoudrias/Inquirer.js/blob/649e78147cbb6390a162ff842d4b21d53a233472/packages/demo/src/index.ts#L89-L95). Or handle the error in your CLI framework mechanism; for example [`Clipanion catch` method](https://mael.dev/clipanion/docs/errors#custom-error-handling).

Lastly, you could handle the error globally with an event listener and silence it.

```ts
process.on('uncaughtException', (error) => {
  if (error instanceof Error && error.name === 'ExitPromptError') {
    console.log('👋 until next time!');
  } else {
    // Rethrow unknown errors
    throw error;
  }
});
```

## Get answers in an object

When asking many questions, you might not want to keep one variable per answer everywhere. In which case, you can put the answer inside an object.

```js
import { input, confirm } from '@inquirer/prompts';

const answers = {
  firstName: await input({ message: "What's your first name?" }),
  allowEmail: await confirm({ message: 'Do you allow us to send you email?' }),
};

console.log(answers.firstName);
```

## Ask a question conditionally

Maybe some questions depend on some other question's answer.

```js
import { input, confirm } from '@inquirer/prompts';

const allowEmail = await confirm({ message: 'Do you allow us to send you email?' });

let email;
if (allowEmail) {
  email = await input({ message: 'What is your email address' });
}
```

## Get default value after timeout

```js
import { input } from '@inquirer/prompts';

const answer = await input(
  { message: 'Enter a value (timing out in 5 seconds)' },
  { signal: AbortSignal.timeout(5000) },
).catch((error) => {
  if (error.name === 'AbortPromptError') {
    return 'Default value';
  }

  throw error;
});
```

## Using as pre-commit/git hooks, or scripts

By default scripts ran from tools like `husky`/`lint-staged` might not run inside an interactive shell. In non-interactive shell, Inquirer cannot run, and users cannot send keypress events to the process.

For it to work, you must make sure you start a `tty` (or "interactive" input stream.)

If those scripts are set within your `package.json`, you can define the stream like so:

```json
  "precommit": "my-script < /dev/tty"
```

Or if in a shell script file, you'll do it like so: (on Windows that's likely your only option)

```sh
#!/bin/sh
exec < /dev/tty

node my-script.js
```

## Using with nodemon

When using inquirer prompts with nodemon, you need to pass the `--no-stdin` flag for everything to work as expected.

```sh
npx nodemon ./packages/demo/demos/password.mjs --no-stdin
```

Note that for most of you, you'll be able to use the new watch-mode built-in Node. This mode works out of the box with inquirer.

```sh
# One of depending on your need
node --watch script.js
node --watch-path=packages/ packages/demo/
```

## Wait for config

Maybe some question configuration require to await a value.

```js
import { confirm } from '@inquirer/prompts';

const answer = await confirm({ message: await getMessage() });
```

## Usage with `npx` within bash scripts

You can use Inquirer prompts directly in the shell via [`npx`](https://docs.npmjs.com/cli/v8/commands/npx), which is useful for quick scripts or `package.json` commands.

A community library, [@inquirer-cli](https://github.com/fishballapp/inquirer-cli), exposes each prompt as a standalone CLI.

For example, to prompt for input:

```bash
name=$(npx -y @inquirer-cli/input -r "What is your name?")
echo "Hello, $name!"
```

Or to create an interactive version bump:

```bash
$ npm version $(npx -y @inquirer-cli/select -c patch -c minor -c major 'Select Version')
```

Find out more: [@inquirer-cli](https://github.com/fishballapp/inquirer-cli).

# Community prompts

If you created a cool prompt, [send us a PR adding it](https://github.com/SBoudrias/Inquirer.js/edit/main/packages/prompts/README.md) to the list below!

[**Interactive List Prompt**](https://github.com/pgibler/inquirer-interactive-list-prompt)<br/>
Select a choice either with arrow keys + Enter or by pressing a key associated with a choice.

```
? Choose an option:
>   Run command (D)
    Quit (Q)
```

[**Action Select Prompt**](https://github.com/zenithlight/inquirer-action-select)<br/>
Choose an item from a list and choose an action to take by pressing a key.

```
? Choose a file Open <O> Edit <E> Delete <X>
❯ image.png
  audio.mp3
  code.py
```

[**Table Multiple Prompt**](https://github.com/Bartheleway/inquirer-table-multiple)<br/>
Select multiple answer from a table display.

```sh
Choose between choices? (Press <space> to select, <Up and Down> to move rows,
<Left and Right> to move columns)

┌──────────┬───────┬───────┐
│ 1-2 of 2 │ Yes?  │ No?   |
├──────────┼───────┼───────┤
│ Choice 1 │ [ ◯ ] │   ◯   |
├──────────┼───────┼───────┤
│ Choice 2 │   ◯   │   ◯   |
└──────────┴───────┴───────┘

```

[**Toggle Prompt**](https://github.com/skarahoda/inquirer-toggle)<br/>
Confirm with a toggle. Select a choice with arrow keys + Enter.

```
? Do you want to continue? no / yes
```

[**Sortable Checkbox Prompt**](https://github.com/th0r/inquirer-sortable-checkbox)<br/>
The same as built-in checkbox prompt, but also allowing to reorder choices using ctrl+up/down.

```
? Which PRs and in what order would you like to merge? (Press <space> to select, <a> to toggle all, <i> to invert selection, <ctrl+up> to move item up, <ctrl+down> to move item down, and <enter> to proceed)
❯ ◯ PR 1
  ◯ PR 2
  ◯ PR 3
```

[**Multi Select Prompt**](https://github.com/jeffwcx/inquirer-select-pro)

An inquirer select that supports multiple selections and filtering/searching.

```
? Choose your OS, IDE, PL, etc. (Press <tab> to select/deselect, <backspace> to remove selected
option, <enter> to select option)
>>  vue
>[ ] vue
 [ ] vuejs
 [ ] fuelphp
 [ ] venv
 [ ] vercel
 (Use arrow keys to reveal more options)
```

[**File Selector Prompt**](https://github.com/br14n-sol/inquirer-file-selector)<br/>
A file selector, you can navigate freely between directories, choose what type of files you want to allow and it is fully customizable.

```sh
? Select a file:
/main/path/
├── folder1/
├── folder2/
├── folder3/
├── file1.txt
├── file2.pdf
└── file3.jpg (not allowed)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Use ↑↓ to navigate through the list
Press <esc> to navigate to the parent directory
Press <enter> to select a file or navigate to a directory
```

[**Select Prompt with Stateful Banner**](https://github.com/patik/inquirer-select-with-state)<br/>
The same as built-in select prompt, but it also displays a banner above the prompt which can be updated with a `setState` function. For example, it can display the results of a long-running command without making the user wait to see the prompt.

Initial display:

```
Directory size: loading...
? Choose an option
❯ Rename
  Copy
  Delete
```

A moment later:

```
Directory size: 123M
? Choose an option
❯ Rename
  Copy
  Delete
```

[**Ordered Checkbox Prompt**](https://github.com/kyou-izumi/inquirer-ordered-checkbox)<br/>
A sortable checkbox prompt that maintains the order of selection. Perfect for prioritizing tasks or ranking options.

```
? Configure your development workflow:
  [1] Set up CI/CD pipeline
❯ [3] Code quality tools
  [ ] Documentation
  [2] Performance monitoring
 ──────────────
- Legacy system (disabled)
(Linting, formatting, and analysis)
```

[**Checkbox Plus Plus Prompt**](https://github.com/behnamazimi/inquirer-checkbox-plus-plus)<br/>
A modern multiselect checkbox prompt with search and filter capabilities, highlighting, autocomplete, and improved UX. Supports both ESM and CommonJS and is compatible with @inquirer/core v10+.

```
? Select colors [searching: "re"]
❯ ◉ The red color
  ◯ The green color
  ◉ The purple color
  ◯ The orange color

↑↓ navigate • space de/select • type search • 2 selected  • ⏎ submit
```

# License

Copyright (c) 2023 Simon Boudrias (twitter: [@vaxilart](https://twitter.com/Vaxilart))<br/>
Licensed under the MIT license.
