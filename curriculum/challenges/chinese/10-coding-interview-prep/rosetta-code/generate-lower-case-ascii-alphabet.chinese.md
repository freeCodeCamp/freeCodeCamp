---
title: Generate lower case ASCII alphabet
id: 5a23c84252665b21eecc7e7a
challengeType: 5
videoUrl: ''
localeTitle: 生成小写ASCII字母表
---

## Description
<section id="description">编写一个函数以生成给定范围的小写ASCII字符数组。例如：对于范围1到4，函数应返回<code>[&#39;a&#39;,&#39;b&#39;,&#39;c&#39;,&#39;d&#39;]</code> 。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>lascii</code>应该是一个功能。
    testString: assert(typeof lascii=='function');
  - text: <code>lascii("a","d")</code>应该返回一个数组。
    testString: assert(Array.isArray(lascii('a','d')));
  - text: <code>lascii("a","d")</code>应该返回<code>[ "a", "b", "c", "d" ]</code> 。
    testString: assert.deepEqual(lascii("a","d"),results[0]);
  - text: <code>lascii("c","i")</code>应该返回<code>[ "c", "d", "e", "f", "g", "h", "i" ]</code> 。
    testString: assert.deepEqual(lascii("c","i"),results[1]);
  - text: <code>lascii("m","q")</code>应该返回<code>[ "m", "n", "o", "p", "q" ]</code> 。
    testString: assert.deepEqual(lascii("m","q"),results[2]);
  - text: <code>lascii("k","n")</code>应返回<code>[ "k", "l", "m", "n" ]</code> 。
    testString: assert.deepEqual(lascii("k","n"),results[3]);
  - text: <code>lascii("t","z")</code>应该返回<code>[ "t", "u", "v", "w", "x", "y", "z" ]</code> 。
    testString: assert.deepEqual(lascii("t","z"),results[4]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function lascii (cFrom, cTo) {
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

/section>
