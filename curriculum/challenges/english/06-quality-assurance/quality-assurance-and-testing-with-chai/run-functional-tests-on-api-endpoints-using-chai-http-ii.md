---
id: 587d824f367417b2b2512c59
title: Run Functional Tests on API Endpoints using Chai-HTTP II
challengeType: 2
forumTopicId: 301592
dashedName: run-functional-tests-on-api-endpoints-using-chai-http-ii
---

# --description--

As a reminder, this project is being built upon the following starter project cloned from <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

# --instructions--

Within `tests/2_functional-tests.js`, alter the `'Test GET /hello with your name'` test (`// #2`) to assert the `status` and the `text` of the response to make the test pass.

Send your name as a URL query by appending `?name=<your_name>` to the route. The endpoint responds with `'hello <your_name>'`.

# --hints--

All tests should pass

```js
const params = new URLSearchParams();
params.append('type', 'functional');
params.append('n', 1);
fetch(code + `/_api/get-tests?${params}`)
  .then(response => response.json())
  .then(data => {
    assert.equal(data.state, 'passed');
  })
  .catch(error => {
    throw new Error(error.message);
  });
```

You should test for `res.status` == 200

```js
const params = new URLSearchParams();
params.append('type', 'functional');
params.append('n', 1);
fetch(code + `/_api/get-tests?${params}`)
  .then(response => response.json())
  .then(data => {
    assert.equal(data.assertions[0].method, 'equal');
    assert.equal(data.assertions[0].args[0], 'res.status');
    assert.equal(data.assertions[0].args[1], '200');
  })
  .catch(error => {
    throw new Error(error.message);
  });
```

You should test for `res.text` == `'hello <your_name>'`

```js
const params = new URLSearchParams();
params.append('type', 'functional');
params.append('n', 1);
fetch(code + `/_api/get-tests?${params}`)
  .then(response => response.json())
  .then(data => {
    assert.equal(data.assertions[1].method, 'equal');
    assert.equal(data.assertions[1].args[0], 'res.text');
    assert.match(data.assertions[1].args[1], /hello [\w\d_-]/);
  })
  .catch(error => {
    throw new Error(error.message);
  });
```
