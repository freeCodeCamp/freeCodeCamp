---
id: 587d7db6367417b2b2512b98
title: Match Single Characters Not Specified
challengeType: 1
videoUrl: ''
localeTitle: 匹配未指定的单个字符
---

## Description
<section id="description">到目前为止，您已创建了一组要匹配的字符，但您也可以创建一组您不想匹配的字符。这些类型的字符集称为<code>negated character sets</code> 。要创建<code>negated character set</code> ，请在<code>caret</code>括号后面和不想匹配的字符前放置一个<code>caret</code> （ <code>^</code> ）。例如， <code>/[^aeiou]/gi</code>匹配所有不是元音的字符。请注意字符之类的<code>.</code> ， <code>!</code> ， <code>[</code> ， <code>@</code> ， <code>/</code>和空格匹配 - 否定元音字符集仅排除元音字符。 </section>

## Instructions
<section id="instructions">创建一个匹配所有不是数字或元音的字符的正则表达式。请记住在正则表达式中包含适当的标志。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的正则表达式<code>myRegex</code>应匹配9项。
    testString: 'assert(result.length == 9, "Your regex <code>myRegex</code> should match 9 items.");'
  - text: 你的正则表达式<code>myRegex</code>应该使用全局标志。
    testString: 'assert(myRegex.flags.match(/g/).length == 1, "Your regex <code>myRegex</code> should use the global flag.");'
  - text: 你的正则表达式<code>myRegex</code>应该使用不区分大小写的标志。
    testString: 'assert(myRegex.flags.match(/i/).length == 1, "Your regex <code>myRegex</code> should use the case insensitive flag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let quoteSample = "3 blind mice.";
let myRegex = /change/; // Change this line
let result = myRegex; // Change this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
