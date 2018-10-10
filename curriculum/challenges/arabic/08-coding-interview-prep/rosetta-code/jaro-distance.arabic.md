---
title: Jaro distance
id: 5a23c84252665b21eecc7ec2
challengeType: 5
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(typeof jaro=="function","<code>jaro</code> should be a function.");'
  - text: ''
    testString: 'assert(typeof jaro(tests[0][0],tests[0][1])=="number","<code>jaro()</code> should return a number.");'
  - text: ''
    testString: 'assert.equal(jaro(tests[0][0],tests[0][1]),results[0],"<code>jaro(""+tests[0][0]+"",""+tests[0][1]+"")</code> should return <code>"+results[0]+"</code>.");'
  - text: ''
    testString: 'assert.equal(jaro(tests[1][0],tests[1][1]),results[1],"<code>jaro(""+tests[1][0]+"",""+tests[1][1]+"")</code> should return <code>"+results[1]+"</code>.");'
  - text: ''
    testString: 'assert.equal(jaro(tests[2][0],tests[2][1]),results[2],"<code>jaro(""+tests[2][0]+"",""+tests[2][1]+"")</code> should return <code>"+results[2]+"</code>.");'
  - text: ''
    testString: 'assert.equal(jaro(tests[3][0],tests[3][1]),results[3],"<code>jaro(""+tests[3][0]+"",""+tests[3][1]+"")</code> should return <code>"+results[3]+"</code>.");'
  - text: ''
    testString: 'assert.equal(jaro(tests[4][0],tests[4][1]),results[4],"<code>jaro(""+tests[4][0]+"",""+tests[4][1]+"")</code> should return <code>"+results[4]+"</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function jaro (s, t) {
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
// solution required
```
</section>
