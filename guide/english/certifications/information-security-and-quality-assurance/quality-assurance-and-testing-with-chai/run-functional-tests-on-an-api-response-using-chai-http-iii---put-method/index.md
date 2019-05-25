---
title: Run Functional Tests on an API Response using Chai-HTTP III - PUT method
---
## Run Functional Tests on an API Response using Chai-HTTP III - PUT method

To begin, open the file "tests/2_functional_tests.js" and locate the test 'send {surname: "Colombo"}'

## Hint 1

Using the example above, look at the assertions and how they are making comparisons between the expected and actual values of the response

## Hint 2

You need to use .send() to attach the payload `{surname: 'Colombo'}` to the request

## Hint 3

Replace the `assert.fail()` statement with your own tests checking for status, type, body.name, and body.surname in that order. Remember, all of these values are contained in the response (`res`), and you should expect the response to be of type `'application/json'`.

## Solution

```js
test('send {surname: "Colombo"}',  function(done){
    
  // we setup the request for you...
  chai.request(server)
  .put('/travellers')
  /** send {surname: 'Colombo'} here **/
  .send({surname: 'Colombo'})
  // .send({...})
  .end(function(err, res){
        
    /** your tests here **/
    assert.equal(res.status, 200, 'response status should be 200');
    assert.equal(res.type, 'application/json', "Response should be json");
    assert.equal(res.body.name, 'Cristoforo', 'res.body.name should be "Christoforo"');
    assert.equal(res.body.surname, 'Colombo', 'res.body.surname should be "Colombo"');
        
    done(); // Never forget the 'done()' callback...
  });
});
```