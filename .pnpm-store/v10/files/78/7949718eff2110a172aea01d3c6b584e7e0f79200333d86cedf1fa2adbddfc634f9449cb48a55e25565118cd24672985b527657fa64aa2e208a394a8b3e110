# reduce-reducers

[![Build Status](https://travis-ci.org/redux-utilities/reduce-reducers.svg?branch=master)](https://travis-ci.org/redux-utilities/reduce-reducers)
[![npm Version](https://img.shields.io/npm/v/reduce-reducers.svg)](https://www.npmjs.com/package/reduce-reducers)
[![npm Downloads Monthly](https://img.shields.io/npm/dm/reduce-reducers.svg)](https://www.npmjs.com/package/reduce-reducers)

> Reduce multiple reducers into a single reducer from left to right

## Install

```
npm install reduce-reducers
```

## Usage

```js
import reduceReducers from 'reduce-reducers';

const initialState = { A: 0, B: 0 };

const addReducer = (state, payload) => ({ ...state, A: state.A + payload });
const multReducer = (state, payload) => ({ ...state, B: state.B * payload });

const reducer = reduceReducers(addReducer, multReducer, initialState);

const state = { A: 1, B: 2 };
const payload = 3;

reducer(state, payload); // { A: 4, B: 6 }
```

## FAQ

#### Why?

Originally created to combine multiple Redux reducers that correspond to different actions (e.g. [like this](https://github.com/acdlite/redux-fsa/blob/master/src/handleActions.js#L12)). Technically works with any reducer, not just with Redux, though I don't know of any other use cases.

#### What is the difference between `reduceReducers` and `combineReducers`?

This StackOverflow post explains it very well: https://stackoverflow.com/a/44371190/5741172
