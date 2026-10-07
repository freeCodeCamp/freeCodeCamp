# `@inquirer/external-editor`

A Node.js module to edit a string with the user's preferred text editor using $VISUAL or $EDITOR.

> [!NOTE]
> This package is a replacement for the unmaintained `external-editor`. It includes security fixes.

# Installation

<table>
<tr>
  <th>npm</th>
  <th>yarn</th>
</tr>
<tr>
<td>

```sh
npm install @inquirer/external-editor
```

</td>
<td>

```sh
yarn add @inquirer/external-editor
```

</td>
</tr>
</table>

## Usage

A simple example using the `edit` function

```ts
import { edit } from '@inquirer/external-editor';

const data = edit('\n\n# Please write your text above');
console.log(data);
```

Example relying on the class construct

```ts
import {
  ExternalEditor,
  CreateFileError,
  ReadFileError,
  RemoveFileError,
  LaunchEditorError,
} from '@inquirer/external-editor';

try {
  const editor = new ExternalEditor();
  const text = editor.run(); // the text is also available in editor.text

  if (editor.lastExitStatus !== 0) {
    console.log('The editor exited with a non-zero code');
  }

  // Do things with the text
  editor.cleanup();
} catch (err) {
  if (err instanceof CreateFileError) {
    console.log('Failed to create the temporary file');
  } else if (err instanceof ReadFileError) {
    console.log('Failed to read the temporary file');
  } else if (err instanceof LaunchEditorError) {
    console.log('Failed to launch your editor');
  } else if (err instanceof RemoveFileError) {
    console.log('Failed to remove the temporary file');
  } else {
    throw err;
  }
}
```

#### API

**Convenience Functions**

- `edit(text, config)`
  - `text` (string) _Optional_ Defaults to empty string
  - `config` (Config) _Optional_ Options for temporary file creation
  - **Returns** (string) The contents of the file
  - Could throw `CreateFileError`, `ReadFileError`, or `LaunchEditorError`, or `RemoveFileError`
- `editAsync(text, callback, config)`
  - `text` (string) _Optional_ Defaults to empty string
  - `callback` (function (error?, text?))
    - `error` could be of type `CreateFileError`, `ReadFileError`, `LaunchEditorError`, or `RemoveFileError`
    - `text` (string) The contents of the file
  - `config` (Config) _Optional_ Options for temporary file creation

**Errors**

- `CreateFileError` Error thrown if the temporary file could not be created.
- `ReadFileError` Error thrown if the temporary file could not be read.
- `RemoveFileError` Error thrown if the temporary file could not be removed during cleanup.
- `LaunchEditorError` Error thrown if the editor could not be launched.

**External Editor Public Methods**

- `new ExternalEditor(text, config)`
  - `text` (string) _Optional_ Defaults to empty string
  - `config` (Config) _Optional_ Options for temporary file creation
  - Could throw `CreateFileError`
- `run()` Launches the editor.
  - **Returns** (string) The contents of the file
  - Could throw `LaunchEditorError` or `ReadFileError`
- `runAsync(callback)` Launches the editor in an async way
  - `callback` (function (error?, text?))
    - `error` could be of type `ReadFileError` or `LaunchEditorError`
    - `text` (string) The contents of the file
- `cleanup()` Removes the temporary file.
  - Could throw `RemoveFileError`

**External Editor Public Properties**

- `text` (string) _readonly_ The text in the temporary file.
- `editor.bin` (string) The editor determined from the environment.
- `editor.args` (array) Default arguments for the bin
- `tempFile` (string) Path to temporary file. Can be changed, but be careful as the temporary file probably already
  exists and would need be removed manually.
- `lastExitStatus` (number) The last exit code emitted from the editor.

**Config Options**

- `prefix` (string) _Optional_ A prefix for the file name.
- `postfix` (string) _Optional_ A postfix for the file name. Useful if you want to provide an extension.
- `mode` (number) _Optional_ Which mode to create the file with. e.g. 644
- `dir` (string) _Optional_ Which path to store the file.

## Why Synchronous?

Everything is synchronous to make sure the editor has complete control of the stdin and stdout. Testing has shown
async launching of the editor can lead to issues when using readline or other packages which try to read from stdin or
write to stdout. Seeing as this will be used in an interactive CLI environment, I made the decision to force the package
to be synchronous. If you know a reliable way to force all stdin and stdout to be limited only to the child_process,
please submit a PR.

If async is really needed, you can use `editAsync` or `runAsync`. If you are using readline or have anything else
listening to the stdin or you write to stdout, you will most likely have problem, so make sure to remove any other
listeners on stdin, stdout, or stderr.

## Demo

[![asciicast](https://asciinema.org/a/a1qh9lypbe65mj0ivfuoslz2s.png)](https://asciinema.org/a/a1qh9lypbe65mj0ivfuoslz2s)

# License

Copyright (c) 2025 Simon Boudrias (twitter: [@vaxilart](https://twitter.com/Vaxilart))<br/>
Licensed under the MIT license.
