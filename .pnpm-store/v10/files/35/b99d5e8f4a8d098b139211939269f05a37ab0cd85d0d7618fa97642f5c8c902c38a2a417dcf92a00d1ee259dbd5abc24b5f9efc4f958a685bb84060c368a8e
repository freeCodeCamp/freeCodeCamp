# is-potential-custom-element-name [![Build status](https://travis-ci.org/mathiasbynens/is-potential-custom-element-name.svg?branch=master)](https://travis-ci.org/mathiasbynens/is-potential-custom-element-name)

_is-potential-custom-element-name_ checks whether a given string matches [the `PotentialCustomElementName` production](https://html.spec.whatwg.org/multipage/scripting.html#prod-potentialcustomelementname) as defined in the HTML Standard.

## Installation

To use _is-potential-custom-element-name_ programmatically, install it as a dependency via [npm](https://www.npmjs.com/):

```bash
$ npm install is-potential-custom-element-name
```

Then, `require` it:

```js
const isPotentialCustomElementName = require('is-potential-custom-element-name');
```

## Usage

```js
isPotentialCustomElementName('foo-bar');
// → true
isPotentialCustomElementName('Foo-bar');
// → false
isPotentialCustomElementName('baz-©');
// → false
isPotentialCustomElementName('annotation-xml');
// → true
```

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

_is-potential-custom-element-name_ is available under the [MIT](https://mths.be/mit) license.
