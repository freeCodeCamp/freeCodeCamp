# Getting Started

## Table of Contents

- [Introduction](#introduction)

- [Submodules](#submodules)

- [Installation](#installation)

## Introduction

**date-fns** provides the most comprehensive, yet simple and consistent toolset
for manipulating **JavaScript dates** in **a browser** & **Node.js**.

**date-fns** is like [lodash](https://lodash.com) for dates. It has
[**200+ functions** for all occasions](https://date-fns.org/docs/).

```js
import { format, compareAsc } from 'date-fns'

format(new Date(2014, 1, 11), 'MM/dd/yyyy')
//=> '02/11/2014'

const dates = [
  new Date(1995, 6, 2),
  new Date(1987, 1, 11),
  new Date(1989, 6, 10),
]
dates.sort(compareAsc)
//=> [
//   Wed Feb 11 1987 00:00:00,
//   Mon Jul 10 1989 00:00:00,
//   Sun Jul 02 1995 00:00:00
// ]
```

## Submodules

**date-fns** includes some optional features as submodules in the npm package.
Here is the list of them, in order of nesting:

- FP — functional programming-friendly variations of the functions. See [FP Guide](https://date-fns.org/docs/FP-Guide);

- UTC (in development) — variations of the functions which calculate dates in UTC±00:00 timezone.

The later submodules are also included inside the former if you want to use multiple features from the list.

To use submodule features, [install the npm package](#npm) and then import a function from a submodule:

```js
// The main submodule:
import addDays from 'date-fns/addDays'

// FP variation:
import addDays from 'date-fns/fp/addDays'

// UTC variation:
import addDays from 'date-fns/utc/addDays'

// Both FP and UTC:
import addDays from 'date-fns/fp/utc/addDays'

// With tree-shaking enabled:
import { addDays, format } from 'date-fns/fp'
```

## Installation

The library is available as an [npm package](https://www.npmjs.com/package/date-fns).

To install the package, run:

```bash
npm install date-fns --save
# or
yarn add date-fns
```

Start using:

```js
import { formatDistance, subDays } from 'date-fns'

formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true })
//=> "3 days ago"
```
