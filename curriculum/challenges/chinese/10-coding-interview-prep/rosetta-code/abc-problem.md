---
id: 594810f028c0303b75339acc
challengeType: 5
videoUrl: ''
title: ABC问题
---

## Description
<section id="description"><p>您将获得ABC块的集合（例如，童年字母块）。每个街区有20个街区，两个字母。块的所有侧面都保证有完整的字母表。块的样本集合： </p><p> （BO） </p><p> （XK） </p><p> （DQ） </p><p> （CP） </p><p> （NA） </p><p> （GT） </p><p> （回覆） </p><p> （TG） </p><p> （QD） </p><p> （FS） </p><p> （JW） </p><p> （HU） </p><p> （VI） </p><p> （一个） </p><p> （OB） </p><p> （ER） </p><p> （FS） </p><p> （LY） </p><p> （PC） </p><p> （ZM） </p><p>要记住一些规则： </p>一旦使用了块上的字母，就不能再使用该块。该函数应该不区分大小写。 <p>实现一个带字符串（单词）的函数，并确定该单词是否可以与给定的块集合拼写。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>canMakeWord</code>是一个功能。
    testString: assert(typeof canMakeWord === 'function');
  - text: <code>canMakeWord</code>应该返回一个布尔值。
    testString: assert(typeof canMakeWord('hi') === 'boolean');
  - text: <code>canMakeWord(&quot;bark&quot;)</code>应该返回true。
    testString: assert(canMakeWord(words[0]));
  - text: <code>canMakeWord(&quot;BooK&quot;)</code>应该返回false。
    testString: assert(!canMakeWord(words[1]));
  - text: <code>canMakeWord(&quot;TReAT&quot;)</code>应该返回true。
    testString: assert(canMakeWord(words[2]));
  - text: <code>canMakeWord(&quot;COMMON&quot;)</code>应返回false。
    testString: assert(!canMakeWord(words[3]));
  - text: <code>canMakeWord(&quot;squAD&quot;)</code>应该返回true。
    testString: assert(canMakeWord(words[4]));
  - text: <code>canMakeWord(&quot;conFUSE&quot;)</code>应该返回true。
    testString: assert(canMakeWord(words[5]));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function canMakeWord (word) {
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
