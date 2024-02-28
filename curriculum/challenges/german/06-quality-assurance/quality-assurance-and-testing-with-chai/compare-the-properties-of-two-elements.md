---
id: 587d824c367417b2b2512c4d
title: Vergleiche die Eigenschaften von zwei Elementen
challengeType: 2
forumTopicId: 301588
dashedName: compare-the-properties-of-two-elements
---

# --description--

As a reminder, this project is being built upon the following starter project on <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">Gitpod</a>, or cloned from <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

# --instructions--

Within `tests/1_unit-tests.js` under the test labeled `#8` in the `Comparisons` suite, change each `assert` to either `assert.isAbove` or `assert.isAtMost` to make the test pass (should evaluate to `true`). Verändere die an die Asserts übergebenen Argumente nicht.

# --hints--

Alle Tests sollten durchlaufen.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=7').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Du solltest die richtige Methode für die erste Assertion wählen - `isAbove` vs. `isAtMost`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=7').then(
    (data) => {
      assert.equal(
        data.assertions[0].method,
        'isAtMost',
        '5 is at most (<=) 5'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Du solltest die richtige Methode für die zweite Assertion wählen - `isAbove` vs. `isAtMost`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=7').then(
    (data) => {
      assert.equal(data.assertions[1].method, 'isAbove', '1 is greater than 0');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Du solltest die richtige Methode für die dritte Assertion wählen - `isAbove` vs. `isAtMost`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=7').then(
    (data) => {
      assert.equal(
        data.assertions[2].method,
        'isAbove',
        'Math.PI = 3.14159265 is greater than 3'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Du solltest die richtige Methode für die vierte Assertion wählen - `isAbove` vs. `isAtMost`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=7').then(
    (data) => {
      assert.equal(
        data.assertions[3].method,
        'isAtMost',
        '1 - Math.random() is > 0 and <= 1. It is atMost 1 !'
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
