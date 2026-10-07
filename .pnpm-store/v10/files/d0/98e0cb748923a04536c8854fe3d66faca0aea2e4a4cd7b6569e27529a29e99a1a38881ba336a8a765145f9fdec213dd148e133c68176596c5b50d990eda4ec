# Date

_Date_ instance

## `date/is`

Confirms if given object is a native date, and is not an _Invalid Date_

```javascript
const isDate = require("type/date/is");

isDate(new Date()); // true
isDate(new Date("Invalid date")); // false
isDate(Date.now()); // false
isDate("foo"); // false
```

## `date/ensure`

If given argument is a date object, it is returned back. Otherwise `TypeError` is thrown.

```javascript
const ensureDate = require("type/date/ensure");

const date = new Date();
ensureDate(date); // date
ensureDate(123123); // Thrown TypeError: 123123 is not a date object
```
