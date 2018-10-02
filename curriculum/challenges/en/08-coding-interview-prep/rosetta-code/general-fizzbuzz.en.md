---
title: General FizzBuzz
id: 5a23c84252665b21eecc7e78
challengeType: 5
---

## Description
<section id='description'>
Write a generalized version of <a href="http://rosettacode.org/wiki/FizzBuzz">FizzBuzz</a> that works for any list of factors, along with their words.
This is basically a "fizzbuzz" implementation where the rules of the game are supplied to the user. Create a function to implement this. The function should take two parameters.
The first will be an array with the FizzBuzz rules. For example: <code>[ [3,"Fizz"] , [5,"Buzz"] ]</code>.
This indcates that <code>Fizz</code> should be printed if the number is a multiple of 3 and <code>Buzz</code> if it is a multiple of 5. If it is a multiple of both then the strings should be concatenated in the order specified in the array. In this case, <code>FizzBuzz</code> if the number is a multiple of 3 and 5.
The second parameter is the number for which the function should return a string as stated above.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: '''<code>genFizzBuzz</code> should be a function.'''
  testString: 'assert(typeof genFizzBuzz==''function'',''<code>genFizzBuzz</code> should be a function.'');'
- text: '''<code>genFizzBuzz(''+JSON.stringify(tests[0][0])+'',''+tests[0][1]+'')</code> should return a type.'''
  testString: 'assert(typeof genFizzBuzz(tests[0][0],tests[0][1])==''string'',''<code>genFizzBuzz(''+JSON.stringify(tests[0][0])+'',''+tests[0][1]+'')</code> should return a type.'');'
- text: '''<code>genFizzBuzz(''+JSON.stringify(tests[0][0])+'',''+tests[0][1]+'')</code> should return <code>"''+results[0]+''"</code>.'''
  testString: 'assert.equal(genFizzBuzz(tests[0][0],tests[0][1]),results[0],''<code>genFizzBuzz(''+JSON.stringify(tests[0][0])+'',''+tests[0][1]+'')</code> should return <code>"''+results[0]+''"</code>.'');'
- text: '''<code>genFizzBuzz(''+JSON.stringify(tests[1][0])+'',''+tests[1][1]+'')</code> should return <code>"''+results[1]+''"</code>.'''
  testString: 'assert.equal(genFizzBuzz(tests[1][0],tests[1][1]),results[1],''<code>genFizzBuzz(''+JSON.stringify(tests[1][0])+'',''+tests[1][1]+'')</code> should return <code>"''+results[1]+''"</code>.'');'
- text: '''<code>genFizzBuzz(''+JSON.stringify(tests[2][0])+'',''+tests[2][1]+'')</code> should return <code>"''+results[2]+''"</code>.'''
  testString: 'assert.equal(genFizzBuzz(tests[2][0],tests[2][1]),results[2],''<code>genFizzBuzz(''+JSON.stringify(tests[2][0])+'',''+tests[2][1]+'')</code> should return <code>"''+results[2]+''"</code>.'');'
- text: '''<code>genFizzBuzz(''+JSON.stringify(tests[3][0])+'',''+tests[3][1]+'')</code> should return <code>"''+results[3]+''"</code>.'''
  testString: 'assert.equal(genFizzBuzz(tests[3][0],tests[3][1]),results[3],''<code>genFizzBuzz(''+JSON.stringify(tests[3][0])+'',''+tests[3][1]+'')</code> should return <code>"''+results[3]+''"</code>.'');'
- text: '''<code>genFizzBuzz(''+JSON.stringify(tests[4][0])+'',''+tests[4][1]+'')</code> should return <code>"''+results[4]+''"</code>.'''
  testString: 'assert.equal(genFizzBuzz(tests[4][0],tests[4][1]),results[4],''<code>genFizzBuzz(''+JSON.stringify(tests[4][0])+'',''+tests[4][1]+'')</code> should return <code>"''+results[4]+''"</code>.'');'
- text: '''<code>genFizzBuzz(''+JSON.stringify(tests[5][0])+'',''+tests[5][1]+'')</code> should return <code>"''+results[5]+''"</code>.'''
  testString: 'assert.equal(genFizzBuzz(tests[5][0],tests[5][1]),results[5],''<code>genFizzBuzz(''+JSON.stringify(tests[5][0])+'',''+tests[5][1]+'')</code> should return <code>"''+results[5]+''"</code>.'');'
- text: '''<code>genFizzBuzz(''+JSON.stringify(tests[6][0])+'',''+tests[6][1]+'')</code> should return <code>"''+results[6]+''"</code>.'''
  testString: 'assert.equal(genFizzBuzz(tests[6][0],tests[6][1]),results[6],''<code>genFizzBuzz(''+JSON.stringify(tests[6][0])+'',''+tests[6][1]+'')</code> should return <code>"''+results[6]+''"</code>.'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function genFizzBuzz (rules, num) {
  // Good luck!
}
```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>


```js
function genFizzBuzz(rules, num) {
  let res='';
  rules.forEach(function (e) {
    if(num % e[0] == 0)
      res+=e[1];
  })

  if(res==''){
    res=num.toString();
  }

  return res;
}




```

</section>
