# lcid [![Build Status](https://travis-ci.org/sindresorhus/lcid.svg?branch=master)](https://travis-ci.org/sindresorhus/lcid)

> Mapping between [standard locale identifiers](http://en.wikipedia.org/wiki/Locale) and [Windows locale identifiers (LCID)](http://en.wikipedia.org/wiki/Locale#Specifics_for_Microsoft_platforms)

Based on the [mapping](https://github.com/python/cpython/blob/be2a1a76fa43bb1ea1b3577bb5bdd506a2e90e37/Lib/locale.py#L1395-L1604) used in the Python standard library.

The mapping itself is just a [JSON file](lcid.json) and can be used wherever.


## Install

```
$ npm install --save lcid
```


## Usage

```js
var lcid = require('lcid');

lcid.from(1044);
//=> 'nb_NO'

lcid.to('nb_NO');
//=> 1044

lcid.all;
//=> {'af_ZA': 1078, ...}
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
