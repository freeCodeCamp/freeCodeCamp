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
const response = await fetch(code + '/_api/get-tests?type=functional&n=6');
if (!response.ok) {
  throw Error(await response.text());
}
const data = await response.json();
assert.equal(data.state, 'passed');
```

You should assert that the headless browser request succeeded.

```js
const response = await fetch(code + '/_api/get-tests?type=functional&n=6');
if (!response.ok) {
  throw Error(await response.text());
}
const data = await response.json();
assert.equal(data.assertions[0].method, 'browser.success');
```

You should assert that the text inside the element `span#name` is `'Amerigo'`.

```js
const response = await fetch(code + '/_api/get-tests?type=functional&n=6');
if (!response.ok) {
  throw Error(await response.text());
}
const data = await response.json();
assert.equal(data.assertions[1].method, 'browser.text');
assert.match(data.assertions[1].args[0], /('|")span#name\1/);
assert.match(data.assertions[1].args[1], /('|")Amerigo\1/);
```

You should assert that the text inside the element `span#surname` is `'Vespucci'`.

```js
const response = await fetch(code + '/_api/get-tests?type=functional&n=6');
if (!response.ok) {
  throw Error(await response.text());
}
const data = await response.json();
assert.equal(data.assertions[2].method, 'browser.text');
assert.match(data.assertions[2].args[0], /('|")span#surname\1/);
assert.match(data.assertions[2].args[1], /('|")Vespucci\1/);
```

You should assert that the element `span#dates` exist and its count is 1.

```js
const response = await fetch(code + '/_api/get-tests?type=functional&n=6');
if (!response.ok) {
  throw Error(await response.text());
}
const data = await response.json();
assert.equal(data.assertions[3].method, 'browser.elements');
assert.match(data.assertions[3].args[0], /('|")span#dates\1/);
assert.equal(data.assertions[3].args[1], 1);
```

