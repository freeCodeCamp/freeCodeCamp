# ShellJS - Unix shell commands for Node.js

[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg?style=flat-square)](https://gitter.im/shelljs/shelljs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Travis](https://img.shields.io/travis/shelljs/shelljs/master.svg?style=flat-square&label=unix)](https://travis-ci.org/shelljs/shelljs)
[![AppVeyor](https://img.shields.io/appveyor/ci/shelljs/shelljs/master.svg?style=flat-square&label=windows)](https://ci.appveyor.com/project/shelljs/shelljs/branch/master)
[![Codecov](https://img.shields.io/codecov/c/github/shelljs/shelljs/master.svg?style=flat-square&label=coverage)](https://codecov.io/gh/shelljs/shelljs)
[![npm version](https://img.shields.io/npm/v/shelljs.svg?style=flat-square)](https://www.npmjs.com/package/shelljs)
[![npm downloads](https://img.shields.io/npm/dm/shelljs.svg?style=flat-square)](https://www.npmjs.com/package/shelljs)

ShellJS is a portable **(Windows/Linux/OS X)** implementation of Unix shell
commands on top of the Node.js API. You can use it to eliminate your shell
script's dependency on Unix while still keeping its familiar and powerful
commands. You can also install it globally so you can run it from outside Node
projects - say goodbye to those gnarly Bash scripts!

ShellJS is proudly tested on every node release since `v0.11`!

The project is [unit-tested](http://travis-ci.org/shelljs/shelljs) and battle-tested in projects like:

+ [PDF.js](http://github.com/mozilla/pdf.js) - Firefox's next-gen PDF reader
+ [Firebug](http://getfirebug.com/) - Firefox's infamous debugger
+ [JSHint](http://jshint.com) & [ESLint](http://eslint.org/) - popular JavaScript linters
+ [Zepto](http://zeptojs.com) - jQuery-compatible JavaScript library for modern browsers
+ [Yeoman](http://yeoman.io/) - Web application stack and development tool
+ [Deployd.com](http://deployd.com) - Open source PaaS for quick API backend generation
+ And [many more](https://npmjs.org/browse/depended/shelljs).

If you have feedback, suggestions, or need help, feel free to post in our [issue
tracker](https://github.com/shelljs/shelljs/issues).

Think ShellJS is cool? Check out some related projects in our [Wiki
page](https://github.com/shelljs/shelljs/wiki)!

Upgrading from an older version? Check out our [breaking
changes](https://github.com/shelljs/shelljs/wiki/Breaking-Changes) page to see
what changes to watch out for while upgrading.

## Command line use

If you just want cross platform UNIX commands, checkout our new project
[shelljs/shx](https://github.com/shelljs/shx), a utility to expose `shelljs` to
the command line.

For example:

```
$ shx mkdir -p foo
$ shx touch foo/bar.txt
$ shx rm -rf foo
```

## A quick note about the docs

For documentation on all the latest features, check out our
[README](https://github.com/shelljs/shelljs). To read docs that are consistent
with the latest release, check out [the npm
page](https://www.npmjs.com/package/shelljs) or
[shelljs.org](http://documentup.com/shelljs/shelljs).

## Installing

Via npm:

```bash
$ npm install [-g] shelljs
```

## Examples

```javascript
var shell = require('shelljs');

if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}

// Copy files to release dir
shell.rm('-rf', 'out/Release');
shell.cp('-R', 'stuff/', 'out/Release');

// Replace macros in each .js file
shell.cd('lib');
shell.ls('*.js').forEach(function (file) {
  shell.sed('-i', 'BUILD_VERSION', 'v0.1.2', file);
  shell.sed('-i', /^.*REMOVE_THIS_LINE.*$/, '', file);
  shell.sed('-i', /.*REPLACE_LINE_WITH_MACRO.*\n/, shell.cat('macro.js'), file);
});
shell.cd('..');

// Run external tool synchronously
if (shell.exec('git commit -am "Auto-commit"').code !== 0) {
  shell.echo('Error: Git commit failed');
  shell.exit(1);
}
```

## Global vs. Local

We no longer recommend using a global-import for ShellJS (i.e.
`require('shelljs/global')`). While still supported for convenience, this
pollutes the global namespace, and should therefore only be used with caution.

Instead, we recommend a local import (standard for npm packages):

```javascript
var shell = require('shelljs');
shell.echo('hello world');
```

<!-- DO NOT MODIFY BEYOND THIS POINT - IT'S AUTOMATICALLY GENERATED -->


## Command reference


All commands run synchronously, unless otherwise stated.
All commands accept standard bash globbing characters (`*`, `?`, etc.),
compatible with the [node glob module](https://github.com/isaacs/node-glob).

For less-commonly used commands and features, please check out our [wiki
page](https://github.com/shelljs/shelljs/wiki).


### cat(file [, file ...])
### cat(file_array)

Examples:

```javascript
var str = cat('file*.txt');
var str = cat('file1', 'file2');
var str = cat(['file1', 'file2']); // same as above
```

Returns a string containing the given file, or a concatenated string
containing the files if more than one file is given (a new line character is
introduced between each file).


### cd([dir])
Changes to directory `dir` for the duration of the script. Changes to home
directory if no argument is supplied.


### chmod([options,] octal_mode || octal_string, file)
### chmod([options,] symbolic_mode, file)

Available options:

+ `-v`: output a diagnostic for every file processed
+ `-c`: like verbose but report only when a change is made
+ `-R`: change files and directories recursively

Examples:

```javascript
chmod(755, '/Users/brandon');
chmod('755', '/Users/brandon'); // same as above
chmod('u+x', '/Users/brandon');
chmod('-R', 'a-w', '/Users/brandon');
```

Alters the permissions of a file or directory by either specifying the
absolute permissions in octal form or expressing the changes in symbols.
This command tries to mimic the POSIX behavior as much as possible.
Notable exceptions:

+ In symbolic modes, 'a-r' and '-r' are identical.  No consideration is
  given to the umask.
+ There is no "quiet" option since default behavior is to run silent.


### cp([options,] source [, source ...], dest)
### cp([options,] source_array, dest)
Available options:

+ `-f`: force (default behavior)
+ `-n`: no-clobber
+ `-u`: only copy if source is newer than dest
+ `-r`, `-R`: recursive
+ `-L`: follow symlinks
+ `-P`: don't follow symlinks

Examples:

```javascript
cp('file1', 'dir1');
cp('-R', 'path/to/dir/', '~/newCopy/');
cp('-Rf', '/tmp/*', '/usr/local/*', '/home/tmp');
cp('-Rf', ['/tmp/*', '/usr/local/*'], '/home/tmp'); // same as above
```

Copies files.


### pushd([options,] [dir | '-N' | '+N'])

Available options:

+ `-n`: Suppresses the normal change of directory when adding directories to the stack, so that only the stack is manipulated.

Arguments:

+ `dir`: Makes the current working directory be the top of the stack, and then executes the equivalent of `cd dir`.
+ `+N`: Brings the Nth directory (counting from the left of the list printed by dirs, starting with zero) to the top of the list by rotating the stack.
+ `-N`: Brings the Nth directory (counting from the right of the list printed by dirs, starting with zero) to the top of the list by rotating the stack.

Examples:

```javascript
// process.cwd() === '/usr'
pushd('/etc'); // Returns /etc /usr
pushd('+1');   // Returns /usr /etc
```

Save the current directory on the top of the directory stack and then cd to `dir`. With no arguments, pushd exchanges the top two directories. Returns an array of paths in the stack.

### popd([options,] ['-N' | '+N'])

Available options:

+ `-n`: Suppresses the normal change of directory when removing directories from the stack, so that only the stack is manipulated.

Arguments:

+ `+N`: Removes the Nth directory (counting from the left of the list printed by dirs), starting with zero.
+ `-N`: Removes the Nth directory (counting from the right of the list printed by dirs), starting with zero.

Examples:

```javascript
echo(process.cwd()); // '/usr'
pushd('/etc');       // '/etc /usr'
echo(process.cwd()); // '/etc'
popd();              // '/usr'
echo(process.cwd()); // '/usr'
```

When no arguments are given, popd removes the top directory from the stack and performs a cd to the new top directory. The elements are numbered from 0 starting at the first directory listed with dirs; i.e., popd is equivalent to popd +0. Returns an array of paths in the stack.

### dirs([options | '+N' | '-N'])

Available options:

+ `-c`: Clears the directory stack by deleting all of the elements.

Arguments:

+ `+N`: Displays the Nth directory (counting from the left of the list printed by dirs when invoked without options), starting with zero.
+ `-N`: Displays the Nth directory (counting from the right of the list printed by dirs when invoked without options), starting with zero.

Display the list of currently remembered directories. Returns an array of paths in the stack, or a single path if +N or -N was specified.

See also: pushd, popd


### echo([options,] string [, string ...])
Available options:

+ `-e`: interpret backslash escapes (default)

Examples:

```javascript
echo('hello world');
var str = echo('hello world');
```

Prints string to stdout, and returns string with additional utility methods
like `.to()`.


### exec(command [, options] [, callback])
Available options (all `false` by default):

+ `async`: Asynchronous execution. If a callback is provided, it will be set to
  `true`, regardless of the passed value.
+ `silent`: Do not echo program output to console.
+ and any option available to Node.js's
  [child_process.exec()](https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback)

Examples:

```javascript
var version = exec('node --version', {silent:true}).stdout;

var child = exec('some_long_running_process', {async:true});
child.stdout.on('data', function(data) {
  /* ... do something with data ... */
});

exec('some_long_running_process', function(code, stdout, stderr) {
  console.log('Exit code:', code);
  console.log('Program output:', stdout);
  console.log('Program stderr:', stderr);
});
```

Executes the given `command` _synchronously_, unless otherwise specified.  When in synchronous
mode, this returns a ShellString (compatible with ShellJS v0.6.x, which returns an object
of the form `{ code:..., stdout:... , stderr:... }`). Otherwise, this returns the child process
object, and the `callback` gets the arguments `(code, stdout, stderr)`.

Not seeing the behavior you want? `exec()` runs everything through `sh`
by default (or `cmd.exe` on Windows), which differs from `bash`. If you
need bash-specific behavior, try out the `{shell: 'path/to/bash'}` option.

**Note:** For long-lived processes, it's best to run `exec()` asynchronously as
the current synchronous implementation uses a lot of CPU. This should be getting
fixed soon.


### find(path [, path ...])
### find(path_array)
Examples:

```javascript
find('src', 'lib');
find(['src', 'lib']); // same as above
find('.').filter(function(file) { return file.match(/\.js$/); });
```

Returns array of all files (however deep) in the given paths.

The main difference from `ls('-R', path)` is that the resulting file names
include the base directories, e.g. `lib/resources/file1` instead of just `file1`.


### grep([options,] regex_filter, file [, file ...])
### grep([options,] regex_filter, file_array)
Available options:

+ `-v`: Inverse the sense of the regex and print the lines not matching the criteria.
+ `-l`: Print only filenames of matching files

Examples:

```javascript
grep('-v', 'GLOBAL_VARIABLE', '*.js');
grep('GLOBAL_VARIABLE', '*.js');
```

Reads input string from given files and returns a string containing all lines of the
file that match the given `regex_filter`.


### head([{'-n': \<num\>},] file [, file ...])
### head([{'-n': \<num\>},] file_array)
Available options:

+ `-n <num>`: Show the first `<num>` lines of the files

Examples:

```javascript
var str = head({'-n': 1}, 'file*.txt');
var str = head('file1', 'file2');
var str = head(['file1', 'file2']); // same as above
```

Read the start of a file.


### ln([options,] source, dest)
Available options:

+ `-s`: symlink
+ `-f`: force

Examples:

```javascript
ln('file', 'newlink');
ln('-sf', 'file', 'existing');
```

Links source to dest. Use -f to force the link, should dest already exist.


### ls([options,] [path, ...])
### ls([options,] path_array)
Available options:

+ `-R`: recursive
+ `-A`: all files (include files beginning with `.`, except for `.` and `..`)
+ `-L`: follow symlinks
+ `-d`: list directories themselves, not their contents
+ `-l`: list objects representing each file, each with fields containing `ls
        -l` output fields. See
        [fs.Stats](https://nodejs.org/api/fs.html#fs_class_fs_stats)
        for more info

Examples:

```javascript
ls('projs/*.js');
ls('-R', '/users/me', '/tmp');
ls('-R', ['/users/me', '/tmp']); // same as above
ls('-l', 'file.txt'); // { name: 'file.txt', mode: 33188, nlink: 1, ...}
```

Returns array of files in the given path, or in current directory if no path provided.


### mkdir([options,] dir [, dir ...])
### mkdir([options,] dir_array)
Available options:

+ `-p`: full path (will create intermediate dirs if necessary)

Examples:

```javascript
mkdir('-p', '/tmp/a/b/c/d', '/tmp/e/f/g');
mkdir('-p', ['/tmp/a/b/c/d', '/tmp/e/f/g']); // same as above
```

Creates directories.


### mv([options ,] source [, source ...], dest')
### mv([options ,] source_array, dest')
Available options:

+ `-f`: force (default behavior)
+ `-n`: no-clobber

Examples:

```javascript
mv('-n', 'file', 'dir/');
mv('file1', 'file2', 'dir/');
mv(['file1', 'file2'], 'dir/'); // same as above
```

Moves files.


### pwd()
Returns the current directory.


### rm([options,] file [, file ...])
### rm([options,] file_array)
Available options:

+ `-f`: force
+ `-r, -R`: recursive

Examples:

```javascript
rm('-rf', '/tmp/*');
rm('some_file.txt', 'another_file.txt');
rm(['some_file.txt', 'another_file.txt']); // same as above
```

Removes files.


### sed([options,] search_regex, replacement, file [, file ...])
### sed([options,] search_regex, replacement, file_array)
Available options:

+ `-i`: Replace contents of 'file' in-place. _Note that no backups will be created!_

Examples:

```javascript
sed('-i', 'PROGRAM_VERSION', 'v0.1.3', 'source.js');
sed(/.*DELETE_THIS_LINE.*\n/, '', 'source.js');
```

Reads an input string from `files` and performs a JavaScript `replace()` on the input
using the given search regex and replacement string or function. Returns the new string after replacement.

Note:

Like unix `sed`, ShellJS `sed` supports capture groups. Capture groups are specified
using the `$n` syntax:

```javascript
sed(/(\w+)\s(\w+)/, '$2, $1', 'file.txt');
```


### set(options)
Available options:

+ `+/-e`: exit upon error (`config.fatal`)
+ `+/-v`: verbose: show all commands (`config.verbose`)
+ `+/-f`: disable filename expansion (globbing)

Examples:

```javascript
set('-e'); // exit upon first error
set('+e'); // this undoes a "set('-e')"
```

Sets global configuration variables


### sort([options,] file [, file ...])
### sort([options,] file_array)
Available options:

+ `-r`: Reverse the result of comparisons
+ `-n`: Compare according to numerical value

Examples:

```javascript
sort('foo.txt', 'bar.txt');
sort('-r', 'foo.txt');
```

Return the contents of the files, sorted line-by-line. Sorting multiple
files mixes their content, just like unix sort does.


### tail([{'-n': \<num\>},] file [, file ...])
### tail([{'-n': \<num\>},] file_array)
Available options:

+ `-n <num>`: Show the last `<num>` lines of the files

Examples:

```javascript
var str = tail({'-n': 1}, 'file*.txt');
var str = tail('file1', 'file2');
var str = tail(['file1', 'file2']); // same as above
```

Read the end of a file.


### tempdir()

Examples:

```javascript
var tmp = tempdir(); // "/tmp" for most *nix platforms
```

Searches and returns string containing a writeable, platform-dependent temporary directory.
Follows Python's [tempfile algorithm](http://docs.python.org/library/tempfile.html#tempfile.tempdir).


### test(expression)
Available expression primaries:

+ `'-b', 'path'`: true if path is a block device
+ `'-c', 'path'`: true if path is a character device
+ `'-d', 'path'`: true if path is a directory
+ `'-e', 'path'`: true if path exists
+ `'-f', 'path'`: true if path is a regular file
+ `'-L', 'path'`: true if path is a symbolic link
+ `'-p', 'path'`: true if path is a pipe (FIFO)
+ `'-S', 'path'`: true if path is a socket

Examples:

```javascript
if (test('-d', path)) { /* do something with dir */ };
if (!test('-f', path)) continue; // skip if it's a regular file
```

Evaluates expression using the available primaries and returns corresponding value.


### ShellString.prototype.to(file)

Examples:

```javascript
cat('input.txt').to('output.txt');
```

Analogous to the redirection operator `>` in Unix, but works with
ShellStrings (such as those returned by `cat`, `grep`, etc). _Like Unix
redirections, `to()` will overwrite any existing file!_


### ShellString.prototype.toEnd(file)

Examples:

```javascript
cat('input.txt').toEnd('output.txt');
```

Analogous to the redirect-and-append operator `>>` in Unix, but works with
ShellStrings (such as those returned by `cat`, `grep`, etc).


### touch([options,] file [, file ...])
### touch([options,] file_array)
Available options:

+ `-a`: Change only the access time
+ `-c`: Do not create any files
+ `-m`: Change only the modification time
+ `-d DATE`: Parse DATE and use it instead of current time
+ `-r FILE`: Use FILE's times instead of current time

Examples:

```javascript
touch('source.js');
touch('-c', '/path/to/some/dir/source.js');
touch({ '-r': FILE }, '/path/to/some/dir/source.js');
```

Update the access and modification times of each FILE to the current time.
A FILE argument that does not exist is created empty, unless -c is supplied.
This is a partial implementation of *[touch(1)](http://linux.die.net/man/1/touch)*.


### uniq([options,] [input, [output]])
Available options:

+ `-i`: Ignore case while comparing
+ `-c`: Prefix lines by the number of occurrences
+ `-d`: Only print duplicate lines, one for each group of identical lines

Examples:

```javascript
uniq('foo.txt');
uniq('-i', 'foo.txt');
uniq('-cd', 'foo.txt', 'bar.txt');
```

Filter adjacent matching lines from input


### which(command)

Examples:

```javascript
var nodeExec = which('node');
```

Searches for `command` in the system's PATH. On Windows, this uses the
`PATHEXT` variable to append the extension if it's not already executable.
Returns string containing the absolute path to the command.


### exit(code)
Exits the current process with the given exit code.

### error()
Tests if error occurred in the last command. Returns a truthy value if an
error returned and a falsy value otherwise.

**Note**: do not rely on the
return value to be an error message. If you need the last error message, use
the `.stderr` attribute from the last command's return value instead.


### ShellString(str)

Examples:

```javascript
var foo = ShellString('hello world');
```

Turns a regular string into a string-like object similar to what each
command returns. This has special methods, like `.to()` and `.toEnd()`


### env['VAR_NAME']
Object containing environment variables (both getter and setter). Shortcut
to process.env.

### Pipes

Examples:

```javascript
grep('foo', 'file1.txt', 'file2.txt').sed(/o/g, 'a').to('output.txt');
echo('files with o\'s in the name:\n' + ls().grep('o'));
cat('test.js').exec('node'); // pipe to exec() call
```

Commands can send their output to another command in a pipe-like fashion.
`sed`, `grep`, `cat`, `exec`, `to`, and `toEnd` can appear on the right-hand
side of a pipe. Pipes can be chained.

## Configuration


### config.silent

Example:

```javascript
var sh = require('shelljs');
var silentState = sh.config.silent; // save old silent state
sh.config.silent = true;
/* ... */
sh.config.silent = silentState; // restore old silent state
```

Suppresses all command output if `true`, except for `echo()` calls.
Default is `false`.

### config.fatal

Example:

```javascript
require('shelljs/global');
config.fatal = true; // or set('-e');
cp('this_file_does_not_exist', '/dev/null'); // throws Error here
/* more commands... */
```

If `true` the script will throw a Javascript error when any shell.js
command encounters an error. Default is `false`. This is analogous to
Bash's `set -e`

### config.verbose

Example:

```javascript
config.verbose = true; // or set('-v');
cd('dir/');
rm('-rf', 'foo.txt', 'bar.txt');
exec('echo hello');
```

Will print each command as follows:

```
cd dir/
rm -rf foo.txt bar.txt
exec echo hello
```

### config.globOptions

Example:

```javascript
config.globOptions = {nodir: true};
```

Use this value for calls to `glob.sync()` instead of the default options.

### config.reset()

Example:

```javascript
var shell = require('shelljs');
// Make changes to shell.config, and do stuff...
/* ... */
shell.config.reset(); // reset to original state
// Do more stuff, but with original settings
/* ... */
```

Reset shell.config to the defaults:

```javascript
{
  fatal: false,
  globOptions: {},
  maxdepth: 255,
  noglob: false,
  silent: false,
  verbose: false,
}
```

## Team

| [![Nate Fischer](https://avatars.githubusercontent.com/u/5801521?s=130)](https://github.com/nfischer) | [![Brandon Freitag](https://avatars1.githubusercontent.com/u/5988055?v=3&s=130)](http://github.com/freitagbr) |
|:---:|:---:|
| [Nate Fischer](https://github.com/nfischer) | [Brandon Freitag](http://github.com/freitagbr) |
