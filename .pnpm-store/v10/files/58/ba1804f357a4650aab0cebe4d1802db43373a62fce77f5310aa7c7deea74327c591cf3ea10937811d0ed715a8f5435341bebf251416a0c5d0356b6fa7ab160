# External Editor

[![ExternalEditor on Travis CI](https://img.shields.io/travis/mrkmg/node-external-editor.svg?style=flat-square)](https://travis-ci.org/mrkmg/node-external-editor/branches)
[![ExternalEditor on NPM](https://img.shields.io/npm/v/external-editor.svg?style=flat-square)](https://www.npmjs.com/package/external-editor)
[![ExternalEditor uses the MIT](https://img.shields.io/npm/l/external-editor.svg?style=flat-square)](https://opensource.org/licenses/MIT)


A node module to edit a string with a users preferred text editor using $VISUAL or $ENVIRONMENT.

Version: 3.1.0

As of version 3.0.0, the minimum version of node supported is 4.

## Install

`npm install external-editor --save`

## Usage

A simple example using the `.edit` convenience method

    import {edit} from "external-editor";
    const data = edit('\n\n# Please write your text above');
    console.log(data);

A full featured example

    import {ExternalEditor, CreateFileError, ReadFileError, RemoveFileError} from "external-editor"
    
    try {
        const editor = new ExternalEditor();
        const text = editor.run() // the text is also available in editor.text
        
        if (editor.last_exit_status !== 0) {
            console.log("The editor exited with a non-zero code");
        }
    } catch (err) {
        if (err instanceOf CreateFileError) {
            console.log('Failed to create the temporary file');
        } else if (err instanceOf ReadFileError) {
            console.log('Failed to read the temporary file');
        } else if (err instanceOf LaunchEditorError) {
            console.log('Failed to launch your editor');
        } else {
            throw err;
        }
    }
    
    // Do things with the text
    
    // Eventually call the cleanup to remove the temporary file
    try {
        editor.cleanup();   
    } catch (err) {
         if (err instanceOf RemoveFileError) {
             console.log('Failed to remove the temporary file');
         } else {
            throw err
        }
    }
    
    
#### API
**Convenience Methods**

- `edit(text, config)`
    - `text` (string) *Optional* Defaults to empty string
    - `config` (Config) *Optional* Options for temporary file creation
    - **Returns** (string) The contents of the file
    - Could throw `CreateFileError`, `ReadFileError`, or `LaunchEditorError`, or `RemoveFileError`
- `editAsync(text, callback, config)`
    - `text` (string) *Optional* Defaults to empty string
    - `callback` (function (error, text))
        - `error` could be of type `CreateFileError`, `ReadFileError`, or `LaunchEditorError`, or `RemoveFileError`
        - `text`(string) The contents of the file
    - `config` (Config) *Optional* Options for temporary file creation


**Errors**

- `CreateFileError` Error thrown if the temporary file could not be created. 
- `ReadFileError` Error thrown if the temporary file could not be read.
- `RemoveFileError` Error thrown if the temporary file could not be removed during cleanup.
- `LaunchEditorError` Error thrown if the editor could not be launched.

**External Editor Public Methods**

- `new ExternalEditor(text, config)`
    - `text` (string) *Optional* Defaults to empty string
    - `config` (Config) *Optional* Options for temporary file creation
    - Could throw `CreateFileError`
- `run()` Launches the editor.
    - **Returns** (string) The contents of the file
    - Could throw `LaunchEditorError` or `ReadFileError`
- `runAsync(callback)` Launches the editor in an async way
    - `callback` (function (error, text))
        - `error` could be of type `ReadFileError` or `LaunchEditorError`
        - `text`(string) The contents of the file
- `cleanup()`  Removes the temporary file.
    - Could throw `RemoveFileError`
    
**External Editor Public Properties**

- `text` (string) *readonly* The text in the temporary file.
- `editor.bin` (string) The editor determined from the environment.
- `editor.args` (array) Default arguments for the bin
- `tempFile` (string) Path to temporary file. Can be changed, but be careful as the temporary file probably already 
    exists and would need be removed manually.
- `lastExitStatus` (number) The last exit code emitted from the editor.
    
**Config Options**

- `prefix` (string) *Optional* A prefix for the file name.
- `postfix` (string; *Optional* A postfix for the file name. Useful if you want to provide an extension.
- `mode` (number) *Optional* Which mode to create the file with. e.g. 644
- `template` (string) *Optional* A template for the filename. See [tmp](https://www.npmjs.com/package/tmp).
- `dir` (string) *Optional* Which path to store the file.
    
## Errors

All errors have a simple message explaining what went wrong. They all also have an `originalError` property containing
the original error thrown for debugging purposes.
    
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

## Breaking Changes from v2 to v3

- NodeJS 0.12 support dropped.
- Switched to named imports.
- All "snake_cased" variables and properties are now "camelCased".
    - `ExternalEditor.temp_file` is now `ExternalEditor.tempFile`.
    - `ExternalEditor.last_exit_status` is now `ExternalEditor.lastExitStatus`.
    - `Error.original_error` is now `Error.originalError`.
    
## License

The MIT License (MIT)

Copyright (c) 2016-2018 Kevin Gravier

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
