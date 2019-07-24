---
title: Run Functional Tests on API Endpoints using Chai-HTTP II
---
# Run Functional Tests on API Endpoints using Chai-HTTP II

---
## Problem Explanation
To begin, open the file "tests/2_functional_tests.js" and locate 'Test GET /hello with your name'.


---
## Hints

### Hint 1

Using the example above, look at the assertions and how they are making comparisons between the expected and actual values of the response.

### Hint 2

Make sure you have entered your own name (or whichever name you are inputting) into both the query (line 67)and the assertion for `res.text` (line 74) in order for the test to pass.

### Hint 3

The lines in the test should be changed from `assert.fail()` to an assertion that checks if the two values are equal.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```js
test('Test GET /hello with your name', function(done) {
  // Don't forget the callback...
  chai
    .request(server) // 'server' is the Express App
    .get('/hello?name=John') /** <=== Put your name in the query **/
    .end(function(err, res) {
      // res is the response object

      // Your tests here.
      // Replace assert.fail(). Make the test pass.
      // Test the status and the text response. Follow the test order like above.
      assert.equal(res.status, 200);
      assert.equal(res.text, 'hello John' /** <==  Put your name here **/);
      done(); // Always call the 'done()' callback when finished.
    });
});
```
</details>