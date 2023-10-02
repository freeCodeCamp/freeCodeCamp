---
id: 587d824e367417b2b2512c56
title: Test if a Value is of a Specific Data Structure Type
challengeType: 2
forumTopicId: 301601
dashedName: test-if-a-value-is-of-a-specific-data-structure-type
---

# --description--

As a reminder, this project is being built upon the following starter project on <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, or cloned from <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

`#typeOf` asserts that value's type is the given string, as determined by `Object.prototype.toString`.

# --instructions--

Within `tests/1_unit-tests.js` under the test labelled `#17` in the `Objects` suite, change each `assert` to either `assert.typeOf` or `assert.notTypeOf` to make the test pass (should evaluate to `true`). Die an die Asserts übergebenen Argumente dürfen nicht verändert werden.

# --hints--

Alle Tests sollten bestanden werden.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=16').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Du solltest die richtige Methode für die erste Behauptung wählen - `typeOf` vs. `notTypeOf`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=16').then(
    (data) => {
      assert.equal(
        data.assertions[0].method,
        'typeOf',
        'myCar is typeOf Object'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Du solltest die richtige Methode für die zweite Behauptung wählen - `typeOf` vs. `notTypeOf`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=16').then(
    (data) => {
      assert.equal(
        data.assertions[1].method,
        'typeOf',
        'Car.model is a String'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Du solltest die richtige Methode für die dritte Behauptung wählen - `typeOf` vs. `notTypeOf`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=16').then(
    (data) => {
      assert.equal(
        data.assertions[2].method,
        'notTypeOf',
        'Plane.wings is a Number (not a String)'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Du solltest die richtige Methode für die vierte Behauptung wählen - `typeOf` vs. `notTypeOf`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=16').then(
    (data) => {
      assert.equal(
        data.assertions[3].method,
        'typeOf',
        'Plane.engines is an Array'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Du solltest die richtige Methode für die fünfte Behauptung wählen - `typeOf` vs. `notTypeOf`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=16').then(
    (data) => {
      assert.equal(
        data.assertions[4].method,
        'typeOf',
        'Car.wheels is a Number'
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
