---
title: Babbage problem
id: 594db4d0dedb4c06a2a4cefd
challengeType: 5
---

## Description
<section id='description'>
<p><a href="https://en.wikipedia.org/wiki/Charles_Babbage" title="wp: Charles_Babbage">Charles Babbage</a>, looking ahead to the sorts of problems his Analytical Engine would be able to solve, gave this example:</p>
<blockquote>What is the smallest positive integer whose square ends in the digits 269,696?</blockquote>
 <p> - Babbage, letter to Lord Bowden, 1837; see Hollingdale and Tootill, <i>Electronic Computers</i>, second edition, 1970, p. 125.</p>
<p>He thought the answer might be 99,736, whose square is 9,947,269,696; but he couldn't be certain.</p>
<p>The task is to find out if Babbage had the right answer.</p>
<p>Implement a function to return the lowest integer that satisfies the Babbage problem. If Babbage was right, return Babbage's number.</p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: <code>babbage</code> is a function.
  testString: 'assert(typeof babbage === ''function'', ''<code>babbage</code> is a function.'');'
- text: '<code>babbage(99736, 269696)</code> should not return 99736 (there is a smaller answer).'
  testString: 'assert.equal(babbage(babbageAns, endDigits), answer, ''<code>babbage(99736, 269696)</code> should not return 99736 (there is a smaller answer).'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function babbage (babbageNum, endDigits) {
  // Good luck!
  return true;
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
function babbage (babbageAns, endDigits) {
  const babbageNum = Math.pow(babbageAns, 2);
  const babbageStartDigits = parseInt(babbageNum.toString().replace('269696', ''));
  let answer = 99736;

  // count down from this answer and save any sqrt int result. return lowest one
  for (let i = babbageStartDigits; i >= 0; i--) {
    const num = parseInt(i.toString().concat('269696'));
    const result = Math.sqrt(num);
    if (result === Math.floor(Math.sqrt(num))) {
      answer = result;
    }
  }

  return answer;
}

```

</section>
