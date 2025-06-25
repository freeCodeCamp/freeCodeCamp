---
id: 587d824f367417b2b2512c5a
title: Run Functional Tests on an API Response using Chai-HTTP III - PUT method
challengeType: 2
forumTopicId: 301590
dashedName: run-functional-tests-on-an-api-response-using-chai-http-iii---put-method
---

# --description--

As a reminder, this project is being built upon the following starter project cloned from <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

When you test a `PUT` request, you'll often send data along with it. The data you include with your `PUT` request is called the body of the request.

To send a `PUT` request and a JSON object to the `'/travellers'` endpoint, you can use `chai-http` plugin's `put` and `send` methods:

```js
chai
  .request(server)
  .keepOpen()
  .put('/travellers')
  .send({
    "surname": [last name of a traveller of the past]
  })
  ...
```

And the route responds with:

```json
{
  "name": [first name],
  "surname": [last name],
  "dates": [birth - death years]
}
```

See the server code for the different responses to the `'/travellers'` endpoint.

# --instructions--

Within `tests/2_functional-tests.js`, alter the `'Send {surname: "Colombo"}'` test (`// #3`) and use the `put` and `send` methods to test the `'/travellers'` endpoint.

Send the following JSON object with your PUT request:

```json
{
  "surname": "Colombo"
}
```

Check for the following within the `request.end` callback:

1.  The `status` should be `200`
2.  The `type` should be `application/json`
3.  The `body.name` should be `Cristoforo`
4.  The `body.surname` should be `Colombo`

Follow the assertion order above - we rely on it. Also, be sure to remove `assert.fail()` once complete.

# --hints--

All tests should pass.

```js
const params = new URLSearchParams();
params.append('type', 'functional');
params.append('n', 2);
fetch(code + `/_api/get-tests?${params}`)
  .then(response => response.json())
  .then(data => {
    assert.equal(data.state, 'passed');
  })
  .catch(error => {
    throw new Error(error.message);
  });
```

You should test for `res.status` to be 200.

```js
const params = new URLSearchParams();
params.append('type', 'functional');
params.append('n', 2);
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

You should test for `res.type` to be `'application/json'`.

```js
const params = new URLSearchParams();
params.append('type', 'functional');
params.append('n', 2);
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

You should test for `res.body.name` to be `'Cristoforo'`.

```js
const params = new URLSearchParams();
params.append('type', 'functional');
params.append('n', 2);
fetch(code + `/_api/get-tests?${params}`)
  .then(response => response.json())
  .then(data => {
    assert.equal(data.assertions[2].method, 'equal');
    assert.equal(data.assertions[2].args[0], 'res.body.name');
    assert.match(data.assertions[2].args[1], /('|")Cristoforo\1/);
  })
  .catch(error => {
    throw new Error(error.message);
  });
```

You should test for `res.body.surname` to be `'Colombo'`.

```js
const params = new URLSearchParams();
params.append('type', 'functional');
params.append('n', 2);
fetch(code + `/_api/get-tests?${params}`)
  .then(response => response.json())
  .then(data => {
    assert.equal(data.assertions[3].method, 'equal');
    assert.equal(data.assertions[3].args[0], 'res.body.surname');
    assert.match(data.assertions[3].args[1], /('|")Colombo\1/);
  })
  .catch(error => {
    throw new Error(error.message);
  });
```
