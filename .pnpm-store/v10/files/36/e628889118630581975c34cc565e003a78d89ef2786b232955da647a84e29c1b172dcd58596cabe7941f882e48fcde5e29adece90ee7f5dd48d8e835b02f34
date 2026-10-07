### wat?

`process.stdout` in your browser.

### wai?

iono. cuz hakz.

### hau?

```js
var BrowserStdout = require('browser-stdout')

myStream.pipe(BrowserStdout())
```

### monkey

You can monkey-patch `process.stdout` for your dependency graph like this:

```
process.stdout = require('browser-stdout')()
var coolTool = require('module-that-uses-stdout-somewhere-in-its-depths')
```

### opts

opts are passed directly to `stream.Writable`.
additionally, a label arg can be used to label console output.

```js
BrowserStdout({
  objectMode: true,
  label: 'dataz',
})
```

### ur doin it rong

i accept pr's.