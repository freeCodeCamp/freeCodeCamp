---
title: Run Functional Tests on API Endpoints using Chai-HTTP
---
# Run Functional Tests on API Endpoints using Chai-HTTP

---
## Problem Explanation
To begin, open the file "tests/2_functional_tests.js" and locate 'Test GET /hello with no name'.


---
## Hints

### Hint 1

Using the example above, look at the assertions and how they are making comparisons between the expected and actual values of the response.

### Hint 2

The lines in the test should be changed from `assert.fail()` to an assertion that checks if the two values are equal.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```js
test('Test GET /hello with no name', function(done) {
  // Don't forget the callback...
  chai
    .request(server) // 'server' is the Express App
    .get('/hello') // http_method(url). NO NAME in the query !
    .end(function(err, res) {
      // res is the response object

      // Test the status and the text response (see the example above).
      // Please follow the order -status, -text. We rely on that in our tests.
      // It should respond 'Hello Guest'
      assert.equal(res.status, 200);
      assert.equal(res.text, 'hello Guest');
      done(); // Always call the 'done()' callback when finished.
    });
});
```
</details>