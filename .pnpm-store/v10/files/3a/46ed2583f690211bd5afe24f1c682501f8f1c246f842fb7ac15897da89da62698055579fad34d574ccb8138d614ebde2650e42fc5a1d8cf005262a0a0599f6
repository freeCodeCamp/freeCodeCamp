# quick-format-unescaped

## unescaped ?

Sometimes you want to embed the results of quick-format into another string, 
and then escape the whole string. 

## usage

```js
var format = require('quick-format-unescaped')
format('hello %s %j %d', ['world', [{obj: true}, 4, {another: 'obj'}]])
```

## format(fmt, parameters, [options])

### fmt

A `printf`-like format string. Example: `'hello %s %j %d'`

### parameters

Array of values to be inserted into the `format` string. Example: `['world', {obj:true}]`

### options.stringify

Passing an options object as the third parameter with a `stringify` will mean 
any objects will be passed to the supplied function instead of an the 
internal `tryStringify` function. This can be useful when using augmented
capability serializers such as [`fast-safe-stringify`](http://github.com/davidmarkclements/fast-safe-stringify) or [`fast-redact`](http://github.com/davidmarkclements/fast-redact).  

## caveats

By default `quick-format-unescaped` uses  `JSON.stringify` instead of `util.inspect`, this means functions *will not be serialized*.

## Benchmarks

### Node 8.11.2

```
util*100000: 350.325ms
quick*100000: 268.141ms
utilWithTailObj*100000: 586.387ms
quickWithTailObj*100000: 280.200ms
util*100000: 325.735ms
quick*100000: 270.251ms
utilWithTailObj*100000: 492.270ms
quickWithTailObj*100000: 261.797ms
```

### Node 10.4.0

```
util*100000: 301.035ms
quick*100000: 217.005ms
utilWithTailObj*100000: 404.778ms
quickWithTailObj*100000: 236.176ms
util*100000: 286.349ms
quick*100000: 214.646ms
utilWithTailObj*100000: 388.574ms
quickWithTailObj*100000: 226.036ms
```

## Acknowledgements

Sponsored by [nearForm](http://www.nearform.com)
