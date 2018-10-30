# leven [![Build Status](https://travis-ci.org/sindresorhus/leven.svg?branch=master)](https://travis-ci.org/sindresorhus/leven)

> Measure the difference between two strings<br>
> The fastest JS implementation of the [Levenshtein distance](http://en.wikipedia.org/wiki/Levenshtein_distance) algorithm


## Install

```
$ npm install --save leven
```


## Usage

```js
const leven = require('leven');

leven('cat', 'cow');
//=> 2
```


## Benchmark

```
$ npm run bench
```

```
         401,487 op/s » leven
         371,707 op/s » talisman
         264,191 op/s » levenshtein-edit-distance
         152,923 op/s » fast-levenshtein
          57,267 op/s » levenshtein-component
          19,915 op/s » levdist
          21,802 op/s » ld
          18,079 op/s » natural
          11,761 op/s » levenshtein
```


## Related

- [leven-cli](https://github.com/sindresorhus/leven-cli) - CLI for this module


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
