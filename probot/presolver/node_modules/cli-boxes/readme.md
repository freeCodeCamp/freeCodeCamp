# cli-boxes [![Build Status](https://travis-ci.org/sindresorhus/cli-boxes.svg?branch=master)](https://travis-ci.org/sindresorhus/cli-boxes)

> Boxes for use in the terminal

The list of boxes is just a [JSON file](boxes.json) and can be used wherever.


## Install

```
$ npm install --save cli-boxes
```


## Usage

```js
const cliBoxes = require('cli-boxes');

console.log(cliBoxes.single);
/*
{
    "topLeft": "┌",
    "topRight": "┐",
    "bottomRight": "┘",
    "bottomLeft": "└",
    "vertical": "│",
    "horizontal": "─"
}
*/
```


## API

### cliBoxes

#### `single`

```
┌────┐
│    │
└────┘
```

#### `double`

```
╔════╗
║    ║
╚════╝
```

#### `round`

```
╭────╮
│    │
╰────╯
```

#### `single-double`

```
╓────╖
║    ║
╙────╜
```

#### `double-single`

```
╒════╕
│    │
╘════╛
```

#### `classic`

```
+----+
|    |
+----+
```


## Related

- [boxen](https://github.com/sindresorhus/boxen) - Create boxes in the terminal


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
