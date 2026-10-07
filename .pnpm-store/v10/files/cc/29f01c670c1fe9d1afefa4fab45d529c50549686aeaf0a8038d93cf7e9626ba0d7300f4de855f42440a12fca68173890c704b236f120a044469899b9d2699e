# is-interactive [![Build Status](https://travis-ci.com/sindresorhus/is-interactive.svg?branch=master)](https://travis-ci.com/sindresorhus/is-interactive)

> Check if stdout or stderr is [interactive](https://unix.stackexchange.com/a/43389/7678)

It checks that the stream is [TTY](https://jameshfisher.com/2017/12/09/what-is-a-tty/), not a dumb terminal, and not running in a CI.

This can be useful to decide whether to present interactive UI or animations in the terminal.


## Install

```
$ npm install is-interactive
```


## Usage

```js
const isInteractive = require('is-interactive');

isInteractive();
//=> true
```


## API

### isInteractive(options?)

#### options

Type: `object`

##### stream

Type: [`stream.Writable`](https://nodejs.org/api/stream.html#stream_class_stream_writable)<br>
Default: [`process.stdout`](https://nodejs.org/api/process.html#process_process_stdout)

The stream to check.


## FAQ

#### Why are you not using [`ci-info`](https://github.com/watson/ci-info) for the CI check?

It's silly to have to detect individual CIs. They should identify themselves with the `CI` environment variable, and most do just that. A manually maintained list of detections will easily get out of date. And if a package using `ci-info` doesn't update to the latest version all the time, they will not support certain CIs. It also creates unpredictability as you might assume a CI is not supported and then suddenly it gets supported and you didn't account for that. In addition, some of the manual detections are loose and might cause false-positives which could create hard-to-debug bugs.

#### Why does this even exist? It's just a few lines.

It's not about the number of lines, but rather discoverability and documentation. A lot of people wouldn't even know they need this. Feel free to copy-paste the code if you don't want the dependency. You might also want to read [this blog post](https://blog.sindresorhus.com/small-focused-modules-9238d977a92a).
