# CSS Modules: Extract Imports

[![Build Status](https://travis-ci.org/css-modules/postcss-modules-extract-imports.svg?branch=master)](https://travis-ci.org/css-modules/postcss-modules-extract-imports)

Transforms:

```css
:local(.continueButton) {
  composes: button from "library/button.css";
  color: green;
}
```

into:

```css
:import("library/button.css") {
  button: __tmp_487387465fczSDGHSABb;
}
:local(.continueButton) {
  composes: __tmp_487387465fczSDGHSABb;
  color: green;
}
```

## Specification

- Only a certain whitelist of properties are inspected. Currently, that whitelist is `['composes']` alone.
- An extend-import has the following format:

```
composes: className [... className] from "path/to/file.css";
```

## Options

- `failOnWrongOrder` `bool` generates exception for unpredictable imports order.

```css
.aa {
  composes: b from "./b.css";
  composes: c from "./c.css";
}

.bb {
  /* "b.css" should be before "c.css" in this case */
  composes: c from "./c.css";
  composes: b from "./b.css";
}
```

## Building

```
npm install
npm test
```

[![Build Status](https://travis-ci.org/css-modules/postcss-modules-extract-imports.svg?branch=master)](https://travis-ci.org/css-modules/postcss-modules-extract-imports)

- Lines: [![Coverage Status](https://coveralls.io/repos/css-modules/postcss-modules-extract-imports/badge.svg?branch=master)](https://coveralls.io/r/css-modules/postcss-modules-extract-imports?branch=master)
- Statements: [![codecov.io](http://codecov.io/github/css-modules/postcss-modules-extract-imports/coverage.svg?branch=master)](http://codecov.io/github/css-modules/postcss-modules-extract-imports?branch=master)

## License

ISC

## With thanks

- Mark Dalgleish
- Tobias Koppers
- Guy Bedford

---

Glen Maddern, 2015.
