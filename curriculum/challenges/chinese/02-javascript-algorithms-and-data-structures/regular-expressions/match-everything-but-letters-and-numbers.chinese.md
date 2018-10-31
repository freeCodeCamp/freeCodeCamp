---
id: 587d7db8367417b2b2512ba0
title: Match Everything But Letters and Numbers
challengeType: 1
videoUrl: ''
localeTitle: 匹配一切，但字母和数字
---

## Description
<section id="description">您已经了解到可以使用快捷键来匹配使用<code>\w</code>字母数字<code>[A-Za-z0-9_]</code> 。您可能想要搜索的自然模式与字母数字相反。您可以使用<code>\W</code>搜索<code>\w</code>的反面。注意，相反的模式使用大写字母。此快捷方式与<code>[^A-Za-z0-9_]</code> 。 <blockquote>让shortHand = / \ W /; <br>让数字=“42％”; <br> let sentence =“Coding！”; <br> numbers.match（简写）; //返回[“％”] <br> sentence.match（简写）; //返回[“！”] <br></blockquote></section>

## Instructions
<section id="instructions">使用速记字符类<code>\W</code>来计算各种引号和字符串中的非字母数字字符数。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的正则表达式应该使用全局标志。
    testString: 'assert(nonAlphabetRegex.global, "Your regex should use the global flag.");'
  - text: 你的正则表达式应该在<code>&quot;The five boxing wizards jump quickly.&quot;</code>找到6个非字母数字字符<code>&quot;The five boxing wizards jump quickly.&quot;</code> 。
    testString: 'assert("The five boxing wizards jump quickly.".match(nonAlphabetRegex).length == 6, "Your regex should find 6 non-alphanumeric characters in <code>"The five boxing wizards jump quickly."</code>.");'
  - text: 你的正则表达式应该使用速记字符。
    testString: 'assert(/\\W/.test(nonAlphabetRegex.source), "Your regex should use the shorthand character to match characters which are non-alphanumeric.");'
  - text: 你的正则表达式应该在<code>&quot;Pack my box with five dozen liquor jugs.&quot;</code>找到8个非字母数字字符<code>&quot;Pack my box with five dozen liquor jugs.&quot;</code>
    testString: 'assert("Pack my box with five dozen liquor jugs.".match(nonAlphabetRegex).length == 8, "Your regex should find 8 non-alphanumeric characters in <code>"Pack my box with five dozen liquor jugs."</code>");'
  - text: 你的正则表达式应该在<code>&quot;How vexingly quick daft zebras jump!&quot;</code>找到6个非字母数字字符<code>&quot;How vexingly quick daft zebras jump!&quot;</code>
    testString: 'assert("How vexingly quick daft zebras jump!".match(nonAlphabetRegex).length == 6, "Your regex should find 6 non-alphanumeric characters in <code>"How vexingly quick daft zebras jump!"</code>");'
  - text: 你的正则表达式应该在<code>&quot;123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.&quot;</code>找到12个非字母数字字符<code>&quot;123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.&quot;</code>
    testString: 'assert("123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.".match(nonAlphabetRegex).length == 12, "Your regex should find 12 non-alphanumeric characters in <code>"123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ."</code>");'

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
// solution required
```
</section>
