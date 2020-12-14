---
id: 587d7db8367417b2b2512ba1
challengeType: 1
forumTopicId: 301347
title: 匹配所有非数字
---

## Description
<section id='description'>
上一项挑战中展示了如何使用带有小写<code>d</code>的缩写<code>\d</code>来搜寻数字。也可以使用类似的缩写来搜寻非数字，该缩写使用大写的<code>D</code>。
查找非数字字符的缩写是<code>\D</code>。这等同于字符串<code>[^0-9]</code>，它查找不是 0 - 9 之间数字的单个字符。
</section>

## Instructions
<section id='instructions'>
使用非数字缩写<code>\D</code>来计算电影标题中有多少非数字。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的正则表达式应该使用缩写来匹配非数字字符。
    testString: assert(/\\D/.test(noNumRegex.source));
  - text: 你的正则表达式应该使用全局状态修正符。
    testString: assert(noNumRegex.global);
  - text: "你的正则表达式在<code>'9'</code>中应该匹配不到非数字。"
    testString: assert("9".match(noNumRegex) == null);
  - text: "你的正则表达式应该在<code>'Catch 22'</code>中匹配到 6 个非数字。"
    testString: assert("Catch 22".match(noNumRegex).length == 6);
  - text: "你的正则表达式应该在<code>'101 Dalmatians'</code>中匹配到 11 个非数字。"
    testString: assert("101 Dalmatians".match(noNumRegex).length == 11);
  - text: "你的正则表达式应该在<code>'One, Two, Three'</code>中匹配到 15 个非数字。"
    testString: assert("One, Two, Three".match(noNumRegex).length == 15);
  - text: "你的正则表达式应该在<code>'21 Jump Street'</code>中匹配到 12 个非数字。"
    testString: assert("21 Jump Street".match(noNumRegex).length == 12);
  - text: '你的正则表达式应该在<code>"2001: A Space Odyssey"</code>中匹配到 17 个非数字。'
    testString: 'assert("2001: A Space Odyssey".match(noNumRegex).length == 17);'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let movieName = "2001: A Space Odyssey";
let noNumRegex = /change/; // Change this line
let result = movieName.match(noNumRegex).length;
```

</div>



</section>

## Solution
<section id='solution'>

```js
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;
```

</section>
