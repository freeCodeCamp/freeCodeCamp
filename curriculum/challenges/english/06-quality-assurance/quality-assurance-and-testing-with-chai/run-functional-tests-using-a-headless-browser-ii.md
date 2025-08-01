---
id: 5f8884f4c46685731aabfc41
title: Run Functional Tests Using a Headless Browser II
challengeType: 2
forumTopicId: 301594
dashedName: run-functional-tests-using-a-headless-browser-ii
---

# --description--

As a reminder, this project is being built upon the following starter project cloned from <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

# --instructions--

Within `tests/2_functional-tests.js`, in the `'Submit the surname "Vespucci" in the HTML form'` test (`// #6`), automate the following:

1.  Fill in the form with the surname `Vespucci`
2.  Press the submit button

And within the `pressButton` callback:

1.  Assert that status is OK `200`
2.  Assert that the text inside the element `span#name` is `'Amerigo'`
3.  Assert that the text inside the element `span#surname` is `'Vespucci'`
4.  Assert that the element(s) `span#dates` exist and their count is `1`

Do not forget to remove the `assert.fail()` call.

# --hints--

All tests should pass.

```js
const params = new URLSearchParams();
params.append('type', 'functional');
params.append('n', 6);
fetch(code + `/_api/get-tests?${params}`)
  .then(response => response.json())
  .then(data => {
    assert.equal(data.state, 'passed');
  })
  .catch(error => {
    throw new Error(error.message);
  });
```

You should assert that the headless browser request succeeded.

```js
const params = new URLSearchParams();
params.append('type', 'functional');
params.append('n', 6);
fetch(code + `/_api/get-tests?${params}`)
  .then(response => response.json())
  .then(data => {
    assert.equal(data.assertions[0].method, 'browser.success');
  })
  .catch(error => {
    throw new Error(error.message);
  });
```

You should assert that the text inside the element `span#name` is `'Amerigo'`.

```js
const params = new URLSearchParams();
params.append('type', 'functional');
params.append('n', 6);
fetch(code + `/_api/get-tests?${params}`)
  .then(response => response.json())
  .then(data => {
    assert.equal(data.assertions[1].method, 'browser.text');
    assert.match(data.assertions[1].args[0], /('|")span#name\1/);
    assert.match(data.assertions[1].args[1], /('|")Amerigo\1/);
  })
  .catch(error => {
    throw new Error(error.message);
  });
```

You should assert that the text inside the element `span#surname` is `'Vespucci'`.

```js
const params = new URLSearchParams();
params.append('type', 'functional');
params.append('n', 6);
fetch(code + `/_api/get-tests?${params}`)
  .then(response => response.json())
  .then(data => {
    assert.equal(data.assertions[2].method, 'browser.text');
    assert.match(data.assertions[2].args[0], /('|")span#surname\1/);
    assert.match(data.assertions[2].args[1], /('|")Vespucci\1/);
  })
  .catch(error => {
    throw new Error(error.message);
  });
```

You should assert that the element `span#dates` exist and its count is 1.

```js
const params = new URLSearchParams();
params.append('type', 'functional');
params.append('n', 6);
fetch(code + `/_api/get-tests?${params}`)
  .then(response => response.json())
  .then(data => {
    assert.equal(data.assertions[3].method, 'browser.elements');
    assert.match(data.assertions[3].args[0], /('|")span#dates\1/);
    assert.equal(data.assertions[3].args[1], 1);
  })
  .catch(error => {
    throw new Error(error.message);
  });
```
