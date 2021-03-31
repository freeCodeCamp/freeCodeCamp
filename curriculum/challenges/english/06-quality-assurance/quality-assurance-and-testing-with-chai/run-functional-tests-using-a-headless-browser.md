---
id: 587d8250367417b2b2512c5d
title: Run Functional Tests using a Headless Browser
challengeType: 2
forumTopicId: 301595
dashedName: run-functional-tests-using-a-headless-browser
---

# --description--

As a reminder, this project is being built upon the following starter project on [Repl.it](https://repl.it/github/freeCodeCamp/boilerplate-mochachai), or cloned from [GitHub](https://github.com/freeCodeCamp/boilerplate-mochachai/).

In the HTML main view we provided a input form. It sends data to the `PUT /travellers` endpoint that we used above with an Ajax request. When the request successfully completes, the client code appends a `<div>` containing the info returned by the call to the DOM. Here is an example of how to interact with this form:

```js
test('#test - submit the input "surname" : "Polo"', function (done) {
  browser.fill('surname', 'Polo').pressButton('submit', function () {
    browser.assert.success();
    browser.assert.text('span#name', 'Marco');
    browser.assert.text('span#surname', 'Polo');
    browser.assert.element('span#dates', 1);
    done();
  });
}
```

First, the `fill` method of the `browser` object fills the `surname` field of the form with the value `'Polo'`. Immediately after, the `pressButton` method invokes the `submit` event listener of the form. The `pressButton` method is asynchronous.

Then, once a response is received from the AJAX request, a few assertions are made confirming:

1.  The status of the response is `200`
2.  The text within the `<span id='name'></span>` element matches `'Marco'`
3.  The text within the `<span id='surname'></span>` element matches `'Polo'`
4.  There is `1` `<span id='dates'></span>` element.

Finally, the `done` callback is invoked, which is needed due to the asynchronous test.

# --instructions--

Within `tests/2_functional-tests.js`, in the `'submit "surname" : "Colombo" - write your e2e test...'` test (`// #5`), automate filling-in and submitting the form:

1.  Fill in the form
2.  Submit it pressing `'submit'` button.

Within the callback:

1.  assert that status is OK `200`
2.  assert that the text inside the element `span#name` is `'Cristoforo'`
3.  assert that the text inside the element `span#surname` is `'Colombo'`
4.  assert that the element(s) `span#dates` exist and their count is `1`

Do not forget to remove the `assert.fail()` call.

# --hints--

All tests should pass.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=4').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

You should assert that the headless browser request succeeded.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=4').then(
    (data) => {
      assert.equal(data.assertions[0].method, 'browser.success');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

You should assert that the text inside the element 'span#name' is 'Cristoforo'.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=4').then(
    (data) => {
      assert.equal(data.assertions[1].method, 'browser.text');
      assert.match(data.assertions[1].args[0], /('|")span#name\1/);
      assert.match(data.assertions[1].args[1], /('|")Cristoforo\1/);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

You should assert that the text inside the element 'span#surname' is 'Colombo'.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=4').then(
    (data) => {
      assert.equal(data.assertions[2].method, 'browser.text');
      assert.match(data.assertions[2].args[0], /('|")span#surname\1/);
      assert.match(data.assertions[2].args[1], /('|")Colombo\1/);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

You should assert that the element 'span#dates' exist and its count is 1.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=4').then(
    (data) => {
      assert.equal(data.assertions[3].method, 'browser.element');
      assert.match(data.assertions[3].args[0], /('|")span#dates\1/);
      assert.equal(data.assertions[3].args[1], 1);
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
