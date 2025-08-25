---
id: 587d824f367417b2b2512c5b
title: Run Functional Tests on an API Response using Chai-HTTP IV - PUT method
challengeType: 2
forumTopicId: 301591
dashedName: run-functional-tests-on-an-api-response-using-chai-http-iv---put-method
---

# --description--

As a reminder, this project is being built upon the following starter project cloned from <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

This exercise is similar to the previous one.

Now that you know how to test a `PUT` request, it's your turn to do it from scratch.

# --instructions--

Within `tests/2_functional-tests.js`, alter the `'Send {surname: "da Verrazzano"}'` test (`// #4`) and use the `put` and `send` methods to test the `'/travellers'` endpoint.

Send the following JSON object with your PUT request:

```json
{
  "surname": "da Verrazzano"
}
```

Check for the following within the `request.end` callback:

1.  The `status` should be `200`
2.  The `type` should be `application/json`
3.  The `body.name` should be `Giovanni`
4.  The `body.surname` should be `da Verrazzano`

Follow the assertion order above - we rely on it. Also, be sure to remove `assert.fail()` once complete.

# --hints--

All tests should pass

```js
const params = new URLSearchParams();
params.append('type', 'functional');
params.append('n', 3);
fetch(code + `/_api/get-tests?${params}`)
  .then(response => response.json())
  .then(data => {
    assert.equal(data.state, 'passed');
  })
  .catch(error => {
    throw new Error(error.message);
  });
```

You should test for `res.status` to be 200

```js
const params = new URLSearchParams();
params.append('type', 'functional');
params.append('n', 3);
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

You should test for `res.type` to be `'application/json'`

```js
const params = new URLSearchParams();
params.append('type', 'functional');
params.append('n', 3);
fetch(code + `/_api/get-tests?${params}`)
  .then(response => response.json())
  .then(data => {
    assert.equal(data.assertions[1].method, 'equal');
    assert.equal(data.assertions[1].args[0], 'res.type');
    assert.match(data.assertions[1].args[1], /('|")application\/json\1/);
  })
  .catch(error => {
    throw new Error(error.message);
  });
```

You should test for `res.body.name` to be `'Giovanni'`

```js
const params = new URLSearchParams();
params.append('type', 'functional');
params.append('n', 3);
fetch(code + `/_api/get-tests?${params}`)
  .then(response => response.json())
  .then(data => {
    assert.equal(data.assertions[2].method, 'equal');
    assert.equal(data.assertions[2].args[0], 'res.body.name');
    assert.match(data.assertions[2].args[1], /('|")Giovanni\1/);
  })
  .catch(error => {
    throw new Error(error.message);
  });
```

You should test for `res.body.surname` to be `'da Verrazzano'`

```js
const params = new URLSearchParams();
params.append('type', 'functional');
params.append('n', 3);
fetch(code + `/_api/get-tests?${params}`)
  .then(response => response.json())
  .then(data => {
    assert.equal(data.assertions[3].method, 'equal');
    assert.equal(data.assertions[3].args[0], 'res.body.surname');
    assert.match(data.assertions[3].args[1], /('|")da Verrazzano\1/);
  })
  .catch(error => {
    throw new Error(error.message);
  });
```
