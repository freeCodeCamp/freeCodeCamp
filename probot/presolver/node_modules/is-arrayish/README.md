# node-is-arrayish [![Travis-CI.org Build Status](https://img.shields.io/travis/Qix-/node-is-arrayish.svg?style=flat-square)](https://travis-ci.org/Qix-/node-is-arrayish) [![Coveralls.io Coverage Rating](https://img.shields.io/coveralls/Qix-/node-is-arrayish.svg?style=flat-square)](https://coveralls.io/r/Qix-/node-is-arrayish)
> Determines if an object can be used like an Array

## Example
```javascript
var isArrayish = require('is-arrayish');

isArrayish([]); // true
isArrayish({__proto__: []}); // true
isArrayish({}); // false
isArrayish({length:10}); // false
```

## License
Licensed under the [MIT License](http://opensource.org/licenses/MIT).
You can find a copy of it in [LICENSE](LICENSE).
