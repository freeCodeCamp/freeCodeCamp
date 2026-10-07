# `append-field`

A [W3C HTML JSON forms spec](http://www.w3.org/TR/html-json-forms/) compliant
field appender (for lack of a better name). Useful for people implementing
`application/x-www-form-urlencoded` and `multipart/form-data` parsers.

It works best on objects created with `Object.create(null)`. Otherwise it might
conflict with variables from the prototype (e.g. `hasOwnProperty`).

## Installation

```sh
npm install --save append-field
```

## Usage

```javascript
var appendField = require('append-field')
var obj = Object.create(null)

appendField(obj, 'pets[0][species]', 'Dahut')
appendField(obj, 'pets[0][name]', 'Hypatia')
appendField(obj, 'pets[1][species]', 'Felis Stultus')
appendField(obj, 'pets[1][name]', 'Billie')

console.log(obj)
```

```text
{ pets:
   [ { species: 'Dahut', name: 'Hypatia' },
     { species: 'Felis Stultus', name: 'Billie' } ] }
```

## API

### `appendField(store, key, value)`

Adds the field named `key` with the value `value` to the object `store`.

## License

MIT
