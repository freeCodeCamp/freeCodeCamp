---
id: 587d824f367417b2b2512c5a
title: Run Functional Tests on an API Response using Chai-HTTP III - PUT method
challengeType: 2
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/'>Glitch</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-mochachai/'>GitHub</a>.
In the next example we'll see how to send data in a request payload (body).
We are going to test a PUT request. The '/travellers' endpoint accepts
a JSON object taking the structure :
 {surname: [last name of a traveller of the past]} ,
The route responds with :
 {name: [first name], surname:[last name], dates: [birth - death years]}
see the server code for more details.
Send {surname: 'Colombo'}. Replace assert.fail() and make the test pass.
Check for 1) status, 2) type, 3) body.name, 4) body.surname
Follow the assertion order above, We rely on it.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: All tests should pass
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=2").then(data => { assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: You should test for 'res.status' to be 200
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=2").then(data => { assert.equal(data.assertions[0].method, "equal"); assert.equal(data.assertions[0].args[0], "res.status"); assert.equal(data.assertions[0].args[1], "200");}, xhr => { throw new Error(xhr.responseText); })'
  - text: You should test for 'res.type' to be 'application/json'
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=2").then(data => { assert.equal(data.assertions[1].method, "equal"); assert.equal(data.assertions[1].args[0], "res.type"); assert.equal(data.assertions[1].args[1], "\"application/json\"");}, xhr => { throw new Error(xhr.responseText); })'
  - text: You should test for 'res.body.name' to be 'Cristoforo'
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=2").then(data => { assert.equal(data.assertions[2].method, "equal"); assert.equal(data.assertions[2].args[0], "res.body.name"); assert.equal(data.assertions[2].args[1], "\"Cristoforo\"");}, xhr => { throw new Error(xhr.responseText); })'
  - text: You should test for 'res.body.surname' to be 'Colombo'
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=2").then(data => { assert.equal(data.assertions[3].method, "equal"); assert.equal(data.assertions[3].args[0], "res.body.surname"); assert.equal(data.assertions[3].args[1], "\"Colombo\"");}, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
