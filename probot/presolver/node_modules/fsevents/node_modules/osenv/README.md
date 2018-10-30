# osenv

Look up environment settings specific to different operating systems.

## Usage

```javascript
var osenv = require('osenv')
var path = osenv.path()
var user = osenv.user()
// etc.

// Some things are not reliably in the env, and have a fallback command:
var h = osenv.hostname(function (er, hostname) {
  h = hostname
})
// This will still cause it to be memoized, so calling osenv.hostname()
// is now an immediate operation.

// You can always send a cb, which will get called in the nextTick
// if it's been memoized, or wait for the fallback data if it wasn't
// found in the environment.
osenv.hostname(function (er, hostname) {
  if (er) console.error('error looking up hostname')
  else console.log('this machine calls itself %s', hostname)
})
```

## osenv.hostname()

The machine name.  Calls `hostname` if not found.

## osenv.user()

The currently logged-in user.  Calls `whoami` if not found.

## osenv.prompt()

Either PS1 on unix, or PROMPT on Windows.

## osenv.tmpdir()

The place where temporary files should be created.

## osenv.home()

No place like it.

## osenv.path()

An array of the places that the operating system will search for
executables.

## osenv.editor() 

Return the executable name of the editor program.  This uses the EDITOR
and VISUAL environment variables, and falls back to `vi` on Unix, or
`notepad.exe` on Windows.

## osenv.shell()

The SHELL on Unix, which Windows calls the ComSpec.  Defaults to 'bash'
or 'cmd'.
