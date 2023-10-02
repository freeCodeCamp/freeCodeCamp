---
id: 587d824b367417b2b2512c4b
title: Benutze das Dreifache Gleichheitszeichen um die strikte Gleichheit anzugeben
challengeType: 2
forumTopicId: 301610
dashedName: use-the-triple-equals-to-assert-strict-equality
---

# --description--

As a reminder, this project is being built upon the following starter project on <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, or cloned from <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

`strictEqual()` compares objects using `===`.

# --instructions--

Within `tests/1_unit-tests.js` under the test labelled `#6` in the `Equality` suite, change each `assert` to either `assert.strictEqual` or `assert.notStrictEqual` to make the test pass (should evaluate to `true`). Do not alter the arguments passed to the asserts.

# --hints--

Alle Tests sollten bestanden werden.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=5').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Du solltest die richtige Methode für die erste Behauptung wählen - `strictEqual` vs. `notStrictEqual`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=5').then(
    (data) => {
      assert.equal(
        data.assertions[0].method,
        'notStrictEqual',
        'with strictEqual the type must match'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Du solltest die richtige Methode für die zweite Behauptung wählen - `strictEqual` vs. `notStrictEqual`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=5').then(
    (data) => {
      assert.equal(data.assertions[1].method, 'strictEqual', '3*2 = 6...');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Du solltest die richtige Methode für die dritte Behauptung wählen - `strictEqual` vs. `notStrictEqual`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=5').then(
    (data) => {
      assert.equal(
        data.assertions[2].method,
        'strictEqual',
        "6 * '2' is 12. Types match !"
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Du solltest die richtige Methode für die vierte Behauptung wählen - `strictEqual` vs. `notStrictEqual`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=5').then(
    (data) => {
      assert.equal(
        data.assertions[3].method,
        'notStrictEqual',
        'Even if they have the same elements, the Arrays are notStrictEqual'
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
