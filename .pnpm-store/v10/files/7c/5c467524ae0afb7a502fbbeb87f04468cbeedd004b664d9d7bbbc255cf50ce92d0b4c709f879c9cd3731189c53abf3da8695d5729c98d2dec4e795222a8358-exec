# Redux Saga Test Plan

[![npm](https://img.shields.io/npm/v/redux-saga-test-plan.svg?style=flat-square)](https://www.npmjs.com/package/redux-saga-test-plan)
[![Travis branch](https://img.shields.io/travis/jfairbank/redux-saga-test-plan/master.svg?style=flat-square)](https://travis-ci.org/jfairbank/redux-saga-test-plan)
[![Codecov](https://img.shields.io/codecov/c/github/jfairbank/redux-saga-test-plan.svg?style=flat-square)](https://codecov.io/gh/jfairbank/redux-saga-test-plan)

#### Test Redux Saga with an easy plan.

Redux Saga Test Plan makes testing sagas a breeze. Whether you need to test
exact effects and their ordering or just test your saga `put`'s a specific
action at some point, Redux Saga Test Plan has you covered.

Redux Saga Test Plan aims to embrace both integration testing and unit testing
approaches to make testing your sagas easy.

## Table of Contents

* [Integration Testing](#integration-testing)
  * [Simple Example](#simple-example)
  * [Mocking with Providers](#mocking-with-providers)
  * [Example with Reducer](#example-with-reducer)
* [Unit Testing](#unit-testing)
* [Extending inspect options](#extending-inspect-options)
* [Install](#install)

## Documentation

* [Introduction](http://redux-saga-test-plan.jeremyfairbank.com/)
* [Getting Started](http://redux-saga-test-plan.jeremyfairbank.com/getting-started.html)
* [Integration Testing](http://redux-saga-test-plan.jeremyfairbank.com/integration-testing/)
* [Unit Testing](http://redux-saga-test-plan.jeremyfairbank.com/unit-testing/)

## Integration Testing

**Requires global `Promise` to be available**

One downside to unit testing sagas is that it couples your test to your
implementation. Simple reordering of yielded effects in your saga could break
your tests even if the functionality stays the same. If you're not concerned
with the order or exact effects your saga yields, then you can take an
integrative approach, testing the behavior of your saga when run by Redux Saga.
Then, you can simply test that a particular effect was yielded during the saga
run. For this, use the `expectSaga` test function.

### Simple Example

Import the `expectSaga` function and pass in your saga function as an argument.
Any additional arguments to `expectSaga` will become arguments to the saga
function. The return value is a chainable API with assertions for the different
effect creators available in Redux Saga.

In the example below, we test that the `userSaga` successfully `put`s a
`RECEIVE_USER` action with the `fakeUser` as the payload. We call `expectSaga`
with the `userSaga` and supply an `api` object as an argument to `userSaga`. We
assert the expected `put` effect via the `put` assertion method. Then, we call
the `dispatch` method with a `REQUEST_USER` action that contains the user id
payload. The `dispatch` method will supply actions to `take` effects. Finally,
we start the test by calling the `run` method which returns a `Promise`. Tests
with `expectSaga` will always run asynchronously, so the returned `Promise`
resolves when the saga finishes or when `expectSaga` forces a timeout. If you're
using a test runner like Jest, you can return the `Promise` inside your Jest
test so Jest knows when the test is complete.

```js
import { call, put, take } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';

function* userSaga(api) {
  const action = yield take('REQUEST_USER');
  const user = yield call(api.fetchUser, action.payload);

  yield put({ type: 'RECEIVE_USER', payload: user });
}

it('just works!', () => {
  const api = {
    fetchUser: id => ({ id, name: 'Tucker' }),
  };

  return expectSaga(userSaga, api)
    // Assert that the `put` will eventually happen.
    .put({
      type: 'RECEIVE_USER',
      payload: { id: 42, name: 'Tucker' },
    })

    // Dispatch any actions that the saga will `take`.
    .dispatch({ type: 'REQUEST_USER', payload: 42 })

    // Start the test. Returns a Promise.
    .run();
});
```

### Mocking with Providers

`expectSaga` runs your saga with Redux Saga, so it will try to resolve effects
just like Redux Saga would in your application. This is great for integration
testing, but sometimes it can be laborious to bootstrap your entire application
for tests or mock things like server APIs. In those cases, you can use
_providers_ which are perfect for mocking values directly with `expectSaga`.
Providers are similar to middleware that allow you to intercept effects before
they reach Redux Saga. You can choose to return a mock value instead of allowing
Redux Saga to handle the effect, or you can pass on the effect to other
providers or eventually Redux Saga.

`expectSaga` has two flavors of providers, _static providers_ and _dynamic
providers_. Static providers are easier to compose and reuse, but dynamic
providers give you more flexibility with non-deterministic effects. Here is one
example below using static providers. There are more examples of providers [in
the
docs](http://redux-saga-test-plan.jeremyfairbank.com/integration-testing/mocking/).

```js
import { call, put, take } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';
import api from 'my-api';

function* userSaga(api) {
  try {
    const action = yield take('REQUEST_USER');
    const user = yield call(api.fetchUser, action.payload);
    const pet = yield call(api.fetchPet, user.petId);

    yield put({
      type: 'RECEIVE_USER',
      payload: { user, pet },
    });
  } catch (e) {
    yield put({ type: 'FAIL_USER', error: e });
  }
}

it('fetches the user', () => {
  const fakeUser = { name: 'Jeremy', petId: 20 };
  const fakeDog = { name: 'Tucker' };

  return expectSaga(userSaga, api)
    .provide([
      [call(api.fetchUser, 42), fakeUser],
      [matchers.call.fn(api.fetchPet), fakeDog],
    ])
    .put({
      type: 'RECEIVE_USER',
      payload: { user: fakeUser, pet: fakeDog },
    })
    .dispatch({ type: 'REQUEST_USER', payload: 42 })
    .run();
});

it('handles errors', () => {
  const error = new Error('error');

  return expectSaga(userSaga, api)
    .provide([
      [matchers.call.fn(api.fetchUser), throwError(error)]
    ])
    .put({ type: 'FAIL_USER', error })
    .dispatch({ type: 'REQUEST_USER', payload: 42 })
    .run();
});
```

Notice we pass in an array of tuple pairs (or array pairs) that contain a
matcher and a fake value. You can use the effect creators from Redux Saga or
matchers from the `redux-saga-test-plan/matchers` module to match effects. The
bonus of using Redux Saga Test Plan's matchers is that they offer special
partial matchers like `call.fn` which matches by the function without worrying
about the specific `args` contained in the actual `call` effect. Notice in the
second test that we can also simulate errors with the `throwError` function from
the `redux-saga-test-plan/providers` module. This is perfect for simulating
server problems.

### Example with Reducer

One good use case for integration testing is testing your reducer too. You can
hook up your reducer to your test by calling the `withReducer` method with your
reducer function.

```js
import { put } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';

const initialDog = {
  name: 'Tucker',
  age: 11,
};

function reducer(state = initialDog, action) {
  if (action.type === 'HAVE_BIRTHDAY') {
    return {
      ...state,
      age: state.age + 1,
    };
  }

  return state;
}

function* saga() {
  yield put({ type: 'HAVE_BIRTHDAY' });
}

it('handles reducers and store state', () => {
  return expectSaga(saga)
    .withReducer(reducer)

    .hasFinalState({
      name: 'Tucker',
      age: 12, // <-- age changes in store state
    })

    .run();
});
```

## Unit Testing

If you want to ensure that your saga yields specific types of effects in a
particular order, then you can use the `testSaga` function. Here's a simple
example:

```js
import { testSaga } from 'redux-saga-test-plan';

function identity(value) {
  return value;
}

function* mainSaga(x, y) {
  const action = yield take('HELLO');

  yield put({ type: 'ADD', payload: x + y });
  yield call(identity, action);
}

const action = { type: 'TEST' };

it('works with unit tests', () => {
  testSaga(mainSaga, 40, 2)
    // advance saga with `next()`
    .next()

    // assert that the saga yields `take` with `'HELLO'` as type
    .take('HELLO')

    // pass back in a value to a saga after it yields
    .next(action)

    // assert that the saga yields `put` with the expected action
    .put({ type: 'ADD', payload: 42 })

    .next()

    // assert that the saga yields a `call` to `identity` with
    // the `action` argument
    .call(identity, action)

    .next()

    // assert that the saga is finished
    .isDone();
});
```

## Extending inspect options
To see large effect objects while Expected & Actual result comparison you'll need to extend inspect options. Example:
```js
import util from 'util';
import testSaga from 'redux-saga-test-plan';

import { testableSaga } from '../sagas';

describe('Some sagas to test', () => {
  util.inspect.defaultOptions.depth = null;

  it('testableSaga', () => {
    testSaga(testableSaga)
    .next()
    .put({ /* large object here */ })
    .next()
    .isDone();
  });
});
```

## Install

```
yarn add redux-saga-test-plan --dev
```

```
npm install --save-dev redux-saga-test-plan
```