---
id: 599d15309e88c813a40baf58
challengeType: 5
videoUrl: ''
title: 熵
---

## Description
<section id="description">任务： <p>计算给定输入字符串的香农熵H. </p><p>给定谨慎的随机变量$ X $，它是$ N $“符号”（总字符）的字符串，由$ n $个不同的字符组成（对于二进制，n = 2），位/符号中X的香农熵是： </p><p> $ H_2（X）=  -  \ sum_ {i = 1} ^ n \ frac {count_i} {N} \ log_2 \ left（\ frac {count_i} {N} \ right）$ </p><p>其中$ count_i $是字符$ n_i $的计数。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>entropy</code>是一种功能。
    testString: assert(typeof entropy === 'function');
  - text: <code>entropy("0")</code>应该返回<code>0</code>
    testString: assert.equal(entropy('0'), 0);
  - text: <code>entropy("01")</code>应该返回<code>1</code>
    testString: assert.equal(entropy('01'), 1);
  - text: <code>entropy("0123")</code>应该返回<code>2</code>
    testString: assert.equal(entropy('0123'), 2);
  - text: <code>entropy("01234567")</code>应该返回<code>3</code>
    testString: assert.equal(entropy('01234567'), 3);
  - text: <code>entropy("0123456789abcdef")</code>应返回<code>4</code>
    testString: assert.equal(entropy('0123456789abcdef'), 4);
  - text: <code>entropy("1223334444")</code>应返回<code>1.8464393446710154</code>
    testString: assert.equal(entropy('1223334444'), 1.8464393446710154);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function entropy (s) {
  // Good luck!
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
