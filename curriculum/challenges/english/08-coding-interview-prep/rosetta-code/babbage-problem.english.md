---
title: Babbage problem
id: 594db4d0dedb4c06a2a4cefd
challengeType: 5
isHidden: false
forumTopicId: 302229
---

## Description
<section id='description'>
<a href="https://en.wikipedia.org/wiki/Charles_Babbage" title="wp: Charles_Babbage" target='_blank'>Charles Babbage</a>, looking ahead to the sorts of problems his Analytical Engine would be able to solve, gave this example:
<blockquote>
  What is the smallest positive integer whose square ends in the digits 269,696?
  <footer style="margin-left: 2em;">Babbage, letter to Lord Bowden, 1837; see Hollingdale and Tootill, <i>Electronic Computers</i>, second edition, 1970, p. 125.</footer>
</blockquote>
He thought the answer might be 99,736, whose square is 9,947,269,696; but he couldn't be certain.
The task is to find out if Babbage had the right answer.
</section>

## Instructions
<section id='instructions'>
Implement a function to return the lowest integer that satisfies the Babbage problem. If Babbage was right, return Babbage's number.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>babbage</code> should be a function.
    testString: assert(typeof babbage === 'function');
  - text: <code>babbage(99736, 269696)</code> should not return 99736 (there is a smaller answer).
    testString: assert.equal(babbage(babbageAns, endDigits), answer);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function babbage(babbageNum, endDigits) {
  // Good luck!
  return true;
}
```

</div>


### After Test
<div id='js-teardown'>

```js
const babbageAns = 99736;
const endDigits = 269696;
const answer = 25264;
```

</div>

</section>

## Solution
<section id='solution'>


```js
function babbage(babbageAns, endDigits) {
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
