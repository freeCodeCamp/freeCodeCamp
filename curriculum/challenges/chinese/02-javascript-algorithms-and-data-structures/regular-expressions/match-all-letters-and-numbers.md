---
id: 587d7db7367417b2b2512b9f
challengeType: 1
forumTopicId: 301346
title: 匹配所有的字母和数字
---

## Description
<section id='description'>
使用元字符，可以使用<code>[a-z]</code>搜寻字母表中的所有字母。这种元字符是很常见的，它有一个缩写，但这个缩写也包含额外的字符。
JavaScript 中与字母表匹配的最接近的元字符是<code>\w</code>，这个缩写等同于<code>[A-Za-z0-9_]</code>。它不仅可以匹配大小写字母和数字，注意，它还会匹配下划线字符（<code>_</code>）。

```js
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers); // Returns true
shortHand.test(numbers); // Returns true
longHand.test(varNames); // Returns true
shortHand.test(varNames); // Returns true
```

</section>

## Instructions
<section id='instructions'>
使用缩写<code>\w</code>来计算所有引号中字母和数字字符的数量。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的正则表达式应该使用全局状态修正符。
    testString: assert(alphabetRegexV2.global);
  - text: 正则表达式应该使用元字符 <code>\w</code> 匹配字母表里的所有字符。
    testString: assert(/\\w/.test(alphabetRegexV2.source));
  - text: "你的正则表达式应该在<code>'The five boxing wizards jump quickly.'</code>中匹配到 31 个字母数字字符。"
    testString: assert("The five boxing wizards jump quickly.".match(alphabetRegexV2).length === 31);
  - text: "你的正则表达式应该在<code>'Pack my box with five dozen liquor jugs.'</code>中匹配到 32 个字母数字字符。"
    testString: assert("Pack my box with five dozen liquor jugs.".match(alphabetRegexV2).length === 32);
  - text: "你的正则表达式应该在<code>'How vexingly quick daft zebras jump!'</code>中匹配到 30 个字母数字字符。"
    testString: assert("How vexingly quick daft zebras jump!".match(alphabetRegexV2).length === 30);
  - text: "你的正则表达式应该在<code>'123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.'</code>中匹配到 36 个字母数字字符。"
    testString: assert("123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.".match(alphabetRegexV2).length === 36);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /change/; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
```

</div>



</section>

## Solution
<section id='solution'>

```js
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
```

</section>
