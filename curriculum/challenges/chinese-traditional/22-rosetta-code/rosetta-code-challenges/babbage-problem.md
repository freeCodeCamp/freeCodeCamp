---
id: 594db4d0dedb4c06a2a4cefd
title: 巴貝奇問題
challengeType: 1
forumTopicId: 302229
dashedName: babbage-problem
---

# --description--

Charles Babbage, looking ahead to the sorts of problems his Analytical Engine would be able to solve, gave this example:

<blockquote>
  What is the smallest positive integer whose square ends in the digits 269,696?
  <footer style='margin-left: 2em;'>巴貝奇，給鮑登勳爵的信，1837 年；參見 Hollingdale and Tootill, <i>Electronic Computers</i>, second edition, 1970, p. 125。</footer>
</blockquote>

他認爲答案可能是 99,736，其平方是 9,947,269,696；但他不能確定。

任務是找出巴貝奇是否有正確的答案。

# --instructions--

實現一個函數來返回滿足 Babbage 問題的最小整數。 如果巴貝奇是對的，返回巴貝奇的數字。

# --hints--

`babbage` 應該是一個函數。

```js
assert(typeof babbage === 'function');
```

`babbage(99736, 269696)` 不應返回 99736（有一個較小的答案）。

```js
assert.equal(babbage(babbageAns, endDigits), answer);
```

# --seed--

## --after-user-code--

```js
const babbageAns = 99736;
const endDigits = 269696;
const answer = 25264;
```

## --seed-contents--

```js
function babbage(babbageNum, endDigits) {

  return true;
}
```

# --solutions--

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
