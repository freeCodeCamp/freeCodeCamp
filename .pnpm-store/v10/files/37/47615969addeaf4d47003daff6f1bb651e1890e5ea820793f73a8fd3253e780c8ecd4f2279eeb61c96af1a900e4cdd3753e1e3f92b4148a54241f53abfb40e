# FP Guide

**date-fns** v2.x provides [functional programming](https://en.wikipedia.org/wiki/Functional_programming) (FP)
friendly functions, like those in [lodash](https://github.com/lodash/lodash/wiki/FP-Guide),
that support [currying](https://en.wikipedia.org/wiki/Currying).

## Table of Contents

- [Usage](#usage)

- [Using Function Composition](#using-function-composition)

## Usage

FP functions are provided via `'date-fns/fp'` submodule.

Functions with options (`format`, `parse`, etc.) have two FP counterparts:
one that has the options object as its first argument and one that hasn't.
The name of the former has `WithOptions` added to the end of its name.

In **date-fns'** FP functions, the order of arguments is reversed.

```javascript
import { addYears, formatWithOptions } from "date-fns/fp";
import { eo } from "date-fns/locale";
import toUpper from "lodash/fp/toUpper"; // 'date-fns/fp' is compatible with 'lodash/fp'!

// If FP function has not received enough arguments, it returns another function
const addFiveYears = addYears(5);

// Several arguments can be curried at once
const dateToString = formatWithOptions({ locale: eo }, "d MMMM yyyy");

const dates = [
  new Date(2017, 0 /* Jan */, 1),
  new Date(2017, 1 /* Feb */, 11),
  new Date(2017, 6 /* Jul */, 2),
];

const formattedDates = dates.map(addFiveYears).map(dateToString).map(toUpper);
//=> ['1 JANUARO 2022', '11 FEBRUARO 2022', '2 JULIO 2022']
```

## Using Function Composition

The main advantage of FP functions is support of functional-style
[function composing](https://medium.com/making-internets/why-using-chain-is-a-mistake-9bc1f80d51ba).

In the example above, you can compose `addFiveYears`, `dateToString` and `toUpper` into a single function:

```javascript
const formattedDates = dates.map((date) =>
  toUpper(dateToString(addFiveYears(date))),
);
```

Or you can use `compose` function provided by [lodash](https://lodash.com) to do the same in more idiomatic way:

```javascript
import { compose } from "lodash/fp/compose";

const formattedDates = dates.map(compose(toUpper, dateToString, addFiveYears));
```

Or if you prefer natural direction of composing (as opposed to the computationally correct order),
you can use lodash' `flow` instead:

```javascript
import flow from "lodash/fp/flow";

const formattedDates = dates.map(flow(addFiveYears, dateToString, toUpper));
```
