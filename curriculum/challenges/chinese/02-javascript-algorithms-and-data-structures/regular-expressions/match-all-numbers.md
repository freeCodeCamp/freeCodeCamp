---
id: 5d712346c441eddfaeb5bdef
challengeType: 1
forumTopicId: 18181
title: 匹配所有数字
---

## Description
<section id='description'>
已经了解了常见字符串匹配模式的元字符，如字母数字。另一个常见的匹配模式是只寻找数字。
查找数字字符的缩写是<code>\d</code>，注意是小写的<code>d</code>。这等同于元字符<code>[0-9]</code>，它查找 0 到 9 之间任意数字的单个字符。
</section>

## Instructions
<section id='instructions'>
使用缩写<code>\d</code>来计算电影标题中有多少个数字。书面数字（"six" 而不是 6）不计算在内。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的正则表达式应该使用缩写来匹配数字字符。
    testString: assert(/\\d/.test(numRegex.source));
  - text: 你的正则表达式应该使用全局状态修正符。
    testString: assert(numRegex.global);
  - text: "你的正则表达式应该在<code>'9'</code>中匹配到 1 个数字。"
    testString: assert("9".match(numRegex).length == 1);
  - text: "你的正则表达式应该在<code>'Catch 22'</code>中匹配到 2 个数字。"
    testString: assert("Catch 22".match(numRegex).length == 2);
  - text: "你的正则表达式应该在<code>'101 Dalmatians'</code>中匹配到 3 个数字。"
    testString: assert("101 Dalmatians".match(numRegex).length == 3);
  - text: "你的正则表达式在<code>'One, Two, Three'</code>中应该匹配不到数字。"
    testString: assert("One, Two, Three".match(numRegex) == null);
  - text: "你的正则表达式应该在<code>'21 Jump Street'</code>中匹配到 2 个数字。"
    testString: assert("21 Jump Street".match(numRegex).length == 2);
  - text: '你的正则表达式应该在<code>"2001: A Space Odyssey"</code>中匹配到 4 个数字。'
    testString: 'assert("2001: A Space Odyssey".match(numRegex).length == 4);'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let movieName = "2001: A Space Odyssey";
let numRegex = /change/; // Change this line
let result = movieName.match(numRegex).length;
```

</div>



</section>

## Solution
<section id='solution'>

```js
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;

```

</section>
