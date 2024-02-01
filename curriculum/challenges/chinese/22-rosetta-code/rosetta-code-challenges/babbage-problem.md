---
id: 594db4d0dedb4c06a2a4cefd
title: 巴贝奇问题
challengeType: 1
forumTopicId: 302229
dashedName: babbage-problem
---

# --description--

Charles Babbage, looking ahead to the sorts of problems his Analytical Engine would be able to solve, gave this example:

<blockquote>
  What is the smallest positive integer whose square ends in the digits 269,696?
  <footer style='margin-left: 2em;'>巴贝奇，给鲍登勋爵的信，1837 年；参见 Hollingdale and Tootill, <i>Electronic Computers</i>, second edition, 1970, p. 125。</footer>
</blockquote>

他认为答案可能是 99,736，其平方是 9,947,269,696；但他不能确定。

任务是找出巴贝奇是否有正确的答案。

# --instructions--

实现一个函数来返回满足 Babbage 问题的最小整数。 如果巴贝奇是对的，返回巴贝奇的数字。

# --hints--

`babbage` 应该是一个函数。

```js
assert(typeof babbage === 'function');
```

`babbage(99736, 269696)` 不应返回 99736（有一个较小的答案）。

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
