---
id: 587d7db7367417b2b2512b9f
title: Match All Letters and Numbers
challengeType: 1
videoUrl: ''
localeTitle: 匹配所有字母和数字
---

## Description
<section id="description">使用字符类，您可以使用<code>[az]</code>搜索字母表中的所有字母。这种字符类很常见，它有一个快捷方式，虽然它还包含一些额外的字符。 JavaScript中与字母表匹配的最接近的字符类是<code>\w</code> 。此快捷方式等于<code>[A-Za-z0-9_]</code> 。此字符类匹配大写和小写字母加数字。注意，此字符类还包括下划线字符（ <code>_</code> ）。 <blockquote>让longHand = / [A-Za-z0-9 _] + /; <br>让shortHand = / \ w + /; <br>让数字=“42”; <br> let varNames =“important_var”; <br> longHand.test（数字）; //返回true <br> shortHand.test（数字）; //返回true <br> longHand.test（varNames）; //返回true <br> shortHand.test（varNames）; //返回true </blockquote>这些快捷方式字符类也称为<code>shorthand character classes</code> 。 </section>

## Instructions
<section id="instructions">使用速记字符类<code>\w</code>来计算各种引号和字符串中的字母数字字符数。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的正则表达式应该使用全局标志。
    testString: 'assert(alphabetRegexV2.global, "Your regex should use the global flag.");'
  - text: 你的正则表达式应该使用速记字符
    testString: 'assert(/\\w/.test(alphabetRegexV2.source), "Your regex should use the shorthand character <code>\w</code> to match all characters which are alphanumeric.");'
  - text: 你的正则表达式应该在<code>&quot;The five boxing wizards jump quickly.&quot;</code>找到31个字母数字字符<code>&quot;The five boxing wizards jump quickly.&quot;</code>
    testString: 'assert("The five boxing wizards jump quickly.".match(alphabetRegexV2).length === 31, "Your regex should find 31 alphanumeric characters in <code>"The five boxing wizards jump quickly."</code>");'
  - text: 你的正则表达式应该在<code>&quot;Pack my box with five dozen liquor jugs.&quot;</code>找到32个字母数字字符<code>&quot;Pack my box with five dozen liquor jugs.&quot;</code>
    testString: 'assert("Pack my box with five dozen liquor jugs.".match(alphabetRegexV2).length === 32, "Your regex should find 32 alphanumeric characters in <code>"Pack my box with five dozen liquor jugs."</code>");'
  - text: 你的正则表达式应该在<code>&quot;How vexingly quick daft zebras jump!&quot;</code>找到30个字母数字字符<code>&quot;How vexingly quick daft zebras jump!&quot;</code>
    testString: 'assert("How vexingly quick daft zebras jump!".match(alphabetRegexV2).length === 30, "Your regex should find 30 alphanumeric characters in <code>"How vexingly quick daft zebras jump!"</code>");'
  - text: 你的正则表达式应该在<code>&quot;123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.&quot;</code>找到36个字母数字字符<code>&quot;123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.&quot;</code>
    testString: 'assert("123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.".match(alphabetRegexV2).length === 36, "Your regex should find 36 alphanumeric characters in <code>"123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ."</code>");'

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
// solution required
```
</section>
