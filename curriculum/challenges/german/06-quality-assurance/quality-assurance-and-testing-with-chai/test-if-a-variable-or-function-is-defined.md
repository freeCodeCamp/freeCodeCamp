---
id: 587d824b367417b2b2512c47
title: Test if a Variable or Function is Defined
challengeType: 2
forumTopicId: 301602
dashedName: test-if-a-variable-or-function-is-defined
---

# --description--

As a reminder, this project is being built upon the following starter project on <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, or cloned from <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

# --instructions--

Within `tests/1_unit-tests.js` under the test labelled `#2` in the `Basic Assertions` suite, change each `assert` to either `assert.isDefined()` or `assert.isUndefined()` to make the test pass (should evaluate to `true`). Die an die Asserts übergebenen Argumente dürfen nicht verändert werden.

# --hints--

Alle Tests sollten bestanden werden.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=1').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Du solltest die richtige Methode für die erste Behauptung wählen - `isDefined` vs. `isUndefined`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=1').then(
    (data) => {
      assert.equal(
        data.assertions[0].method,
        'isDefined',
        'Null is not undefined'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Du solltest die richtige Methode für die zweite Behauptung wählen - `isDefined` vs. `isUndefined`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=1').then(
    (data) => {
      assert.equal(
        data.assertions[1].method,
        'isUndefined',
        'Undefined is undefined'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Du solltest die richtige Methode für die dritte Behauptung wählen - `isDefined` vs. `isUndefined`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=1').then(
    (data) => {
      assert.equal(
        data.assertions[2].method,
        'isDefined',
        'A string is not undefined'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
