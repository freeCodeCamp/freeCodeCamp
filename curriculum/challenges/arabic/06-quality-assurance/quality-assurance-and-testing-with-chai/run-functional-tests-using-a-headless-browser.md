---
id: 587d8250367417b2b2512c5d
title: Run Functional Tests Using a Headless Browser
challengeType: 2
forumTopicId: 301595
dashedName: run-functional-tests-using-a-headless-browser
---

# --description--

As a reminder, this project is being built upon the following starter project on <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">Gitpod</a>, or cloned from <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

On the page there's an input form. It sends data to the `PUT /travellers` endpoint as an AJAX request.

When the request successfully completes, the client code appends a `<div>` containing the information in the response to the DOM.

Here's an example of how to use Zombie.js to interact with the form:

```js
test('Submit the surname "Polo" in the HTML form', function (done) {
  browser.fill('surname', 'Polo').then(() => {
    browser.pressButton('submit', () => {
      browser.assert.success();
      browser.assert.text('span#name', 'Marco');
      browser.assert.text('span#surname', 'Polo');
      browser.assert.elements('span#dates', 1);
      done();
    });
  });
});
```

First, the `fill` method of the `browser` object fills the `surname` field of the form with the value `'Polo'`. `fill` returns a promise, so `then` is chained off of it.

Within the `then` callback, the `pressButton` method of the `browser` object is used to invoke the form's `submit` event listener. The `pressButton` method is asynchronous.

Then, once a response is received from the AJAX request, a few assertions are made confirming:

1.  The status of the response is `200`
2.  The text within the `<span id='name'></span>` element matches `'Marco'`
3.  The text within the `<span id='surname'></span>` element matches `'Polo'`
4.  There is `1` `<span id='dates'></span>` element.

Finally, the `done` callback is invoked, which is needed due to the asynchronous test.

# --instructions--

Within `tests/2_functional-tests.js`, in the `'Submit the surname "Colombo" in the HTML form'` test (`// #5`), automate the following:

1.  Fill in the form with the surname `Colombo`
2.  Press the submit button

And within the `pressButton` callback:

1.  Assert that status is OK `200`
2.  Assert that the text inside the element `span#name` is `'Cristoforo'`
3.  Assert that the text inside the element `span#surname` is `'Colombo'`
4.  Assert that the element(s) `span#dates` exist and their count is `1`

Do not forget to remove the `assert.fail()` call.

# --hints--

All tests should pass.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=5').then(
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
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=5').then(
    (data) => {
      assert.equal(data.assertions[0].method, 'browser.success');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

You should assert that the text inside the element `span#name` is `'Cristoforo'`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=5').then(
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

You should assert that the text inside the element `span#surname` is `'Colombo'`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=5').then(
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

You should assert that the element `span#dates` exist and its count is 1.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=5').then(
    (data) => {
      assert.equal(data.assertions[3].method, 'browser.elements');
      assert.match(data.assertions[3].args[0], /('|")span#dates\1/);
      assert.equal(data.assertions[3].args[1], 1);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

