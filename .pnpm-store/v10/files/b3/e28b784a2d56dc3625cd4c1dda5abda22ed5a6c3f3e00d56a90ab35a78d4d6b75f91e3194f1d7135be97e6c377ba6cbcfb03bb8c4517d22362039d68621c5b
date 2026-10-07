
# joi-objectid

A MongoDB ObjectId validator for Joi.

[![Build Status](https://travis-ci.org/mkg20001/joi-objectid.svg?branch=master)](https://travis-ci.org/mkg20001/joi-objectid)

## use

`joi-objectid` validates that the value is an alphanumeric string of 24 characters
in length.

It's used just like you'd use any other `Joi` type.

```js
const Joi = require('@hapi/joi')
Joi.objectId = require('joi-objectid')(Joi)

const schema = Joi.object({
  id: Joi.objectId(),
  name: Joi.string().max(100),
  date: Joi.date()
})

```

### Installation

```
npm install joi-objectid --save
```

### Development

#### running tests

- `npm test`

## License

[MIT](https://github.com/mkg20001/joi-objectid/blob/master/LICENSE)
