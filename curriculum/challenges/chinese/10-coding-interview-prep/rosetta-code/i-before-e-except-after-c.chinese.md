---
title: I before E except after C
id: 5a23c84252665b21eecc7eb0
challengeType: 5
videoUrl: ''
localeTitle: 我在E之前除了C之后
---

## Description
<section id="description">短语<a href="https://en.wikipedia.org/wiki/I before E except after C">“我在E之前，除了C之后”</a>是一个广为人知的助记符，它应该有助于拼写英语单词。使用提供的单词，检查短语的两个子句是否合理： <ol><li style="margin-bottom: 5px;"> <i>“我在E之前没有前面的C”。</i> </li><li> <i>“在我之前的C之前是C”。</i> </li></ol>如果两个子短语都是合理的，则原始短语可以说是合理的。编写一个接受单词的函数，并检查单词是否遵循此规则。如果该函数遵循规则，则该函数应返回true，否则返回false。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>IBeforeExceptC</code>应该是一个函数。
    testString: assert(typeof IBeforeExceptC=='function');
  - text: <code>IBeforeExceptC("receive")</code>应该返回一个布尔值。
    testString: assert(typeof IBeforeExceptC("receive")=='boolean');
  - text: <code>IBeforeExceptC("receive")</code>应该返回<code>true</code> 。
    testString: assert.equal(IBeforeExceptC("receive"),true);
  - text: <code>IBeforeExceptC("science")</code>应该返回<code>false</code> 。
    testString: assert.equal(IBeforeExceptC("science"),false);
  - text: <code>IBeforeExceptC("imperceivable")</code>应该返回<code>true</code> 。
    testString: assert.equal(IBeforeExceptC("imperceivable"),true);
  - text: <code>IBeforeExceptC("inconceivable")</code>应该返回<code>true</code> 。
    testString: assert.equal(IBeforeExceptC("inconceivable"),true);
  - text: <code>IBeforeExceptC("insufficient")</code>应返回<code>false</code> 。
    testString: assert.equal(IBeforeExceptC("insufficient"),false);
  - text: <code>IBeforeExceptC("omniscient")</code>应该返回<code>false</code> 。
    testString: assert.equal(IBeforeExceptC("omniscient"),false);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function IBeforeExceptC (word) {
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
