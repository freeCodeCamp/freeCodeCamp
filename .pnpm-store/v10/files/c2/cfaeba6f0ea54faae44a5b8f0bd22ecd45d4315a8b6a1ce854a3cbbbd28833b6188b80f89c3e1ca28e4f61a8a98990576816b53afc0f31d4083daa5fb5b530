# mongodb-connection-string-url

MongoDB connection strings, based on the WhatWG URL API

```js
import ConnectionString from 'mongodb-connection-string-url';

const cs = new ConnectionString('mongodb://localhost');
cs.searchParams.set('readPreference', 'secondary');
console.log(cs.href); // 'mongodb://localhost/?readPreference=secondary'
```

## Deviations from the WhatWG URL package

- URL parameters are case-insensitive
- The `.host`, `.hostname` and `.port` properties cannot be set, and reading
  them does not return meaningful results (and are typed as `never`in TypeScript)
- The `.hosts` property contains a list of all hosts in the connection string
- The `.href` property cannot be set, only read
- There is an additional `.isSRV` property, set to `true` for `mongodb+srv://`
- There is an additional `.clone()` utility method on the prototype

## LICENSE

Apache-2.0
