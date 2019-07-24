---
title: Run Functional Tests using a Headless Browser
---
# Run Functional Tests using a Headless Browser

---
## Problem Explanation
To begin, open the file "tests/2_functional_tests.js" and locate the browser based tests.

Change the Browser.site link to the current URL of your project if you are completing this challenge online. If you are using a local development environment, replace the line with ```Browser.localhost('example.com', (process.env.PORT || 3000));```.

Find test 'submit "surname" : "Colombo" - write your e2e test...' and read the instructions to determine how to pass this challenge.


---
## Hints

### Hint 1

Using the example above, look at how the assertions are making comparisons between the expected and actual values of the response.

### Hint 2

All assertions should be browser.assert in order to correctly pass.

### Hint 3

Replace the `assert.fail()` statement with your own tests based on the instructions in the comments. Check the example above for syntax if you get stuck.

### Hint 4

Check the tests on the challenge page for expected values.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```js
test('submit "surname" : "Colombo" - write your e2e test...', function(done) {
  // fill the form...
  // then submit it pressing 'submit' button.
  //
  // in the callback...
  // assert that status is OK 200
  // assert that the text inside the element 'span#name' is 'Cristoforo'
  // assert that the text inside the element 'span#surname' is 'Colombo'
  // assert that the element(s) 'span#dates' exist and their count is 1
  browser.fill('surname', 'Colombo').pressButton('submit', function() {
    /** YOUR TESTS HERE, Don't forget to remove assert.fail() **/

    // pressButton is Async.  Waits for the ajax call to complete...

    // assert that status is OK 200
    browser.assert.success();
    // assert that the text inside the element 'span#name' is 'Cristoforo'
    browser.assert.text('span#name', 'Cristoforo');
    // assert that the text inside the element 'span#surname' is 'Colombo'
    browser.assert.text('span#surname', 'Colombo');
    // assert that the element(s) 'span#dates' exist and their count is 1
    browser.assert.element('span#dates', 1);

    done(); // It's an async test, so we have to call 'done()''
  });
});
```
</details>