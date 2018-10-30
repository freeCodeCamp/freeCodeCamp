# update-dotenv

> A NodeJS module to write updates to a .env file

## Installation

```
npm install dotenv update-dotenv
```

## Usage

```js
const updateDotenv = require('update-dotenv')

updateDotenv({
  MY_VARIABLE: 'new value'
}).then((newEnv) => console.log('Done!', newEnv))
```

## License

[ISC](LICENSE)
