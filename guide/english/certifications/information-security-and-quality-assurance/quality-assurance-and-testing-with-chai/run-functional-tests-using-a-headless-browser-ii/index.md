---
title: Run Functional Tests using a Headless Browser II
---
# Run Functional Tests using a Headless Browser II

---
## Problem Explanation
To begin, open the file "tests/2_functional_tests.js" and locate the browser based tests.

Change the Browser.site link to the current URL of your project if you are completing this challenge online. If you are using a local development environment, replace the line with ```Browser.localhost('example.com', (process.env.PORT || 3000));```.

Find test 'submit "surname" : "Vespucci" - write your e2e test...' and check the challenge page for the expected values in order to pass this challenge.


---
## Hints

### Hint 1

Using the example above, look at how the form is being submitted, and how the assertions are making comparisons between the expected and actual values of the response.

### Hint 2

Fill the broswer with a surname of Vespucci, then use pressButton to submit.

### Hint 3

In the callback for pressButton, all assertions should be browser.assert in order to correctly pass.

### Hint 4

Replace the `assert.fail()` statement with your own tests based on the instructions in the comments. Check the example above for syntax if you get stuck.

### Hint 5

Check the tests on the challenge page or the instructions in the comments for expected values.

### Hint 6

Make sure your `done()` call is within the pressButton callback.


---
## Solutions

<details><summary>Solution #1(Click to Show/Hide)</summary>

```js
test('submit "surname" : "Vespucci" - write your e2e test...', function(done) {
  // fill the form, and submit.
  browser.fill('surname', 'Vespucci').pressButton('submit', function() {
    // assert that status is OK 200
    browser.assert.success();
    // assert that the text inside the element 'span#name' is 'Amerigo'
    browser.assert.text('span#name', 'Amerigo');
    // assert that the text inside the element 'span#surname' is 'Vespucci'
    browser.assert.text('span#surname', 'Vespucci');
    // assert that the element(s) 'span#dates' exist and their count is 1
    browser.assert.element('span#dates', 1);

    done();
  });
});
```
</details>