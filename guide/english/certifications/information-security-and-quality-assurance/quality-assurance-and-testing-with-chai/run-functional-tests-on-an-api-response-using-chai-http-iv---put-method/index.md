---
title: Run Functional Tests on an API Response using Chai-HTTP IV - PUT method
---
# Run Functional Tests on an API Response using Chai-HTTP IV - PUT method

---
## Problem Explanation
To begin, open the file "tests/2_functional_tests.js" and locate the test 'send {surname: "da Verrazzano"}'.


---
## Hints

### Hint 1

Using the example above, look how the request is being sent, and how the assertions are making comparisons between the expected and actual values of the response.

### Hint 2

Make sure you are placing a request through `chai.request(server)`.

### Hint 3

You need to use make a .put() request to `/travellers` and use .send() to attach the payload `{surname: 'da Verrazzano'}` to the request.

### Hint 4

Replace the assert.fail() statement with your own tests checking for status, type, body.name, and body.surname in that order. Remember, all of these values are contained in the response `(res`), and you should expect the response to be of type `'application/json'`.

### Hint 5

Check the tests on the challenge page to determine the expected values for `body.name` and `body.surname`.

### Hint 6

Ensure your call to `done()` is inside your callback function for the tests.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```js
test('send {surname: "da Verrazzano"}', function(done) {
  /** place the chai-http request code here... **/
  chai
    .request(server)
    .put('/travellers')
    .send({ surname: 'da Verrazzano' })
    /** place your tests inside the callback **/
    .end(function(err, res) {
      assert.equal(res.status, 200, 'response status should be 200');
      assert.equal(res.type, 'application/json', 'Response should be json');
      assert.equal(res.body.name, 'Giovanni');
      assert.equal(res.body.surname, 'da Verrazzano');

      done();
    });
});
```
</details>