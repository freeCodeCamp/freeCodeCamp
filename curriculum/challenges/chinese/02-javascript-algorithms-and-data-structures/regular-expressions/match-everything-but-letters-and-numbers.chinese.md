---
id: 587d7db8367417b2b2512ba0
title: Match Everything But Letters and Numbers
challengeType: 1
forumTopicId: 301353
localeTitle: 匹配除了字母和数字的所有符号
---

## Description
<section id='description'>
已经了解到可以使用缩写<code>\w</code>来匹配字母和数字<code>[A-Za-z0-9_]</code>。不过，有可能想要搜寻的匹配模式是非字母数字字符。
可以使用<code>\W</code>搜寻和<code>\w</code>相反的匹配模式。注意，相反匹配模式使用大写字母。此缩写与<code>[^A-Za-z0-9_]</code>是一样的。

```js
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand); // Returns ["%"]
sentence.match(shortHand); // Returns ["!"]
```

</section>

## Instructions
<section id='instructions'>
使用缩写<code>\W</code>来计算不同引号和字符串中非字母数字字符的数量。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的正则表达式应该使用全局状态修正符。
    testString: assert(nonAlphabetRegex.global);
  - text: "你的正则表达式应该在<code>'The five boxing wizards jump quickly.'</code>中匹配到 6 个非字母数字字符。"
    testString: assert("The five boxing wizards jump quickly.".match(nonAlphabetRegex).length == 6);
  - text: 正则表达式应该使用元字符来匹配非字母字符。
    testString: assert(/\\W/.test(nonAlphabetRegex.source));
  - text: "你的正则表达式应该在<code>'Pack my box with five dozen liquor jugs.'</code>中匹配到 8 个非字母数字字符。"
    testString: assert("Pack my box with five dozen liquor jugs.".match(nonAlphabetRegex).length == 8);
  - text: "你的正则表达式应该在<code>'How vexingly quick daft zebras jump!'</code>中匹配到 6 个非字母数字字符。"
    testString: assert("How vexingly quick daft zebras jump!".match(nonAlphabetRegex).length == 6);
  - text: "你的正则表达式应该在<code>'123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.'</code>中匹配到 12 个非字母数字字符。"
    testString: assert("123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.".match(nonAlphabetRegex).length == 12);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /change/; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
```

</div>



</section>

## Solution
<section id='solution'>

```js
let quoteSample = "The five boxing wizards_jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
```

</section>
