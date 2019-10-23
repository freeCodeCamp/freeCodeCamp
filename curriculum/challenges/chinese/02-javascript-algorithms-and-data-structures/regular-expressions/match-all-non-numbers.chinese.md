---
id: 587d7db8367417b2b2512ba1
title: Match All Non-Numbers
challengeType: 1
videoUrl: ''
localeTitle: 匹配所有非数字
---

## Description
<section id="description">最后一项挑战显示了如何使用带有小写<code>d</code>的快捷键<code>\d</code>来搜索数字。您也可以使用类似的使用大写<code>D</code>快捷方式搜索非数字。查找非数字字符的快捷方式是<code>\D</code>这等于字符类<code>[^0-9]</code> ，它查找不是0到9之间的数字的单个字符。 </section>

## Instructions
<section id="instructions">使用非数字<code>\D</code>的速记字符类来计算电影标题中有多少个非数字。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的正则表达式应使用快捷方式字符来匹配非数字字符
    testString: 'assert(/\\D/.test(noNumRegex.source), "Your regex should use the shortcut character to match non-digit characters");'
  - text: 你的正则表达式应该使用全局标志。
    testString: 'assert(noNumRegex.global, "Your regex should use the global flag.");'
  - text: 你的正则表达式应该在<code>&quot;9&quot;</code>找不到非数字。
    testString: 'assert("9".match(noNumRegex) == null, "Your regex should find no non-digits in <code>"9"</code>.");'
  - text: 你的正则表达式应该在<code>&quot;Catch 22&quot;</code>找到6个非数字。
    testString: 'assert("Catch 22".match(noNumRegex).length == 6, "Your regex should find 6 non-digits in <code>"Catch 22"</code>.");'
  - text: 你的正则表达式应该在<code>&quot;101 Dalmatians&quot;</code>找到11个非数字。
    testString: 'assert("101 Dalmatians".match(noNumRegex).length == 11, "Your regex should find 11 non-digits in <code>"101 Dalmatians"</code>.");'
  - text: '你的正则表达式应该在<code>&quot;One, Two, Three&quot;</code>找到15个非数字。'
    testString: 'assert("One, Two, Three".match(noNumRegex).length == 15, "Your regex should find 15 non-digits in <code>"One, Two, Three"</code>.");'
  - text: 你的正则表达式应该在<code>&quot;21 Jump Street&quot;</code>找到12个非数字。
    testString: 'assert("21 Jump Street".match(noNumRegex).length == 12, "Your regex should find 12 non-digits in <code>"21 Jump Street"</code>.");'
  - text: '你的正则表达式应该在<code>&quot;2001: A Space Odyssey&quot;</code>找到17个非数字。'
    testString: 'assert("2001: A Space Odyssey".match(noNumRegex).length == 17, "Your regex should find 17 non-digits in <code>"2001: A Space Odyssey"</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let numString = "Your sandwich will be $5.00";
let noNumRegex = /change/; // Change this line
let result = numString.match(noNumRegex).length;

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
