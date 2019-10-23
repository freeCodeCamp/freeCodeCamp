---
id: 5d712346c441eddfaeb5bdef
title: Match All Numbers
challengeType: 1
videoUrl: ''
localeTitle: 匹配所有号码
---

## Description
<section id="description">您已经学习了常用字符串模式（如字母数字）的快捷方式。另一种常见模式是寻找数字或数字。查找数字字符的快捷方式是<code>\d</code> ，小写<code>d</code> 。这等于字符类<code>[0-9]</code> ，它查找0到9之间任意数字的单个字符。 </section>

## Instructions
<section id="instructions">使用速记字符类<code>\d</code>来计算电影标题中的位数。写出的数字（“六”而不是六）不计算在内。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的正则表达式应使用快捷方式字符来匹配数字字符
    testString: 'assert(/\\d/.test(numRegex.source), "Your regex should use the shortcut character to match digit characters");'
  - text: 你的正则表达式应该使用全局标志。
    testString: 'assert(numRegex.global, "Your regex should use the global flag.");'
  - text: 你的正则表达式应该在<code>&quot;9&quot;</code>找到1位数。
    testString: 'assert("9".match(numRegex).length == 1, "Your regex should find 1 digit in <code>"9"</code>.");'
  - text: 你的正则表达式应该在<code>&quot;Catch 22&quot;</code>找到2位数字。
    testString: 'assert("Catch 22".match(numRegex).length == 2, "Your regex should find 2 digits in <code>"Catch 22"</code>.");'
  - text: 你的正则表达式应该在<code>&quot;101 Dalmatians&quot;</code>找到3位数字。
    testString: 'assert("101 Dalmatians".match(numRegex).length == 3, "Your regex should find 3 digits in <code>"101 Dalmatians"</code>.");'
  - text: '你的正则表达式应该在<code>&quot;One, Two, Three&quot;</code>找不到数字。'
    testString: 'assert("One, Two, Three".match(numRegex) == null, "Your regex should find no digits in <code>"One, Two, Three"</code>.");'
  - text: 您的正则表达式应该在<code>&quot;21 Jump Street&quot;</code>找到2位数字。
    testString: 'assert("21 Jump Street".match(numRegex).length == 2, "Your regex should find 2 digits in <code>"21 Jump Street"</code>.");'
  - text: '你的正则表达式应该在<code>&quot;2001: A Space Odyssey&quot;</code>找到4位数字。'
    testString: 'assert("2001: A Space Odyssey".match(numRegex).length == 4, "Your regex should find 4 digits in <code>"2001: A Space Odyssey"</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let numString = "Your sandwich will be $5.00";
let numRegex = /change/; // Change this line
let result = numString.match(numRegex).length;

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
