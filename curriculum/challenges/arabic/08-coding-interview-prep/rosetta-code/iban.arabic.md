---
title: IBAN
id: 5a23c84252665b21eecc7eaf
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
    testString: 'assert(typeof isValid=="function","<code>isValid</code> should be a function.");'
  - text: ''
    testString: 'assert(typeof isValid(tests[0])=="boolean","<code>isValid(""+tests[0]+"")</code> should return a boolean.");'
  - text: ''
    testString: 'assert.equal(isValid(tests[0]),true,"<code>isValid(""+tests[0]+"")</code> should return <code>true</code>.");'
  - text: ''
    testString: 'assert.equal(isValid(tests[1]),false,"<code>isValid(""+tests[1]+"")</code> should return <code>false</code>.");'
  - text: ''
    testString: 'assert.equal(isValid(tests[2]),false,"<code>isValid(""+tests[2]+"")</code> should return <code>false</code>.");'
  - text: ''
    testString: 'assert.equal(isValid(tests[3]),false,"<code>isValid(""+tests[3]+"")</code> should return <code>false</code>.");'
  - text: ''
    testString: 'assert.equal(isValid(tests[4]),true,"<code>isValid(""+tests[4]+"")</code> should return <code>true</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function isValid (iban) {
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
