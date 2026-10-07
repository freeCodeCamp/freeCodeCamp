# Fast String Width

A fast function for calculating the visual width of a string once printed to the terminal.

See [`fast-string-truncated-width`](https://github.com/fabiospampinato/fast-string-truncated-width) for a lower-level version of this.

## Install

```sh
npm install fast-string-width
```

## Usage

```ts
import fastStringWidth from 'fast-string-width';

// The width of various classes of characters is configurable

const options = {
  controlWidth: 0,
  tabWidth: 8,
  emojiWidth: 2,
  regularWidth: 1,
  wideWidth: 2
};

// Calculating the visual width of some strings

fastStringWidth ( 'hello', options ); // => 5
fastStringWidth ( '\x1b[31mhello', options ); // => 5
fastStringWidth ( '👨‍👩‍👧‍👦', options ); // => 2
fastStringWidth ( 'hello👨‍👩‍👧‍👦', options ); // => 7

// Calculating the visual width while tweaking the width of emojis

fastStringWidth ( '👶👶🏽', { ...options, emojiWidth: 1.5 } ); // => 3
```

## License

MIT © Fabio Spampinato
