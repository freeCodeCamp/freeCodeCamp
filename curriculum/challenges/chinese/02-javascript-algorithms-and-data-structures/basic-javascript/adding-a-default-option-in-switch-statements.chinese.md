---
id: 56533eb9ac21ba0edf2244de
title: Adding a Default Option in Switch Statements
challengeType: 1

videoUrl: ''
localeTitle: Adding a Default Option in Switch Statements
---

## Description
<section id='description'>
在<code>switch</code>语句中你可能无法用 case 来指定所有情况，这时你可以添加 default 语句。当再也找不到 case 匹配的时候 default 语句会执行，非常类似于 if/else 组合中的 else 语句。
<code>default</code>语句应该是最后一个 case。
<blockquote>switch (num) {<br>&nbsp;&nbsp;case value1:<br>&nbsp;&nbsp;&nbsp;&nbsp;statement1;<br>&nbsp;&nbsp;&nbsp;&nbsp;break;<br>&nbsp;&nbsp;case value2:<br>&nbsp;&nbsp;&nbsp;&nbsp;statement2;<br>&nbsp;&nbsp;&nbsp;&nbsp;break;<br>...<br>&nbsp;&nbsp;default:<br>&nbsp;&nbsp;&nbsp;&nbsp;defaultStatement;<br>&nbsp;&nbsp;&nbsp;&nbsp;break;<br>}</blockquote>
</section>

## Instructions
<section id='instructions'>
写一个根据下面的条件来设置<code>answer</code>的switch语句：<br><code>"a"</code> - "apple"<br><code>"b"</code> - "bird"<br><code>"c"</code> - "cat"<br><code>default</code> - "stuff"
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "<code>switchOfStuff('a')</code>应该有一个值为 'apple'"
    testString: assert(switchOfStuff("a") === "apple", '<code>switchOfStuff("a")</code>应该有一个值为 "apple"');
  - text: "<code>switchOfStuff('b')</code>应该有一个值为 'bird'"
    testString: assert(switchOfStuff("b") === "bird", '<code>switchOfStuff("b")</code>应该有一个值为 "bird"');
  - text: "<code>switchOfStuff('c')</code>应该有一个值为 'cat'"
    testString: assert(switchOfStuff("c") === "cat", '<code>switchOfStuff("c")</code>应该有一个值为 "cat"');
  - text: "<code>switchOfStuff('d')</code>应该有一个值为 'stuff'"
    testString: assert(switchOfStuff("d") === "stuff", '<code>switchOfStuff("d")</code>应该有一个值为 "stuff"');
  - text: "<code>switchOfStuff(4)</code>应该有一个值为 'stuff'"
    testString: assert(switchOfStuff(4) === "stuff", '<code>switchOfStuff(4)</code>应该有一个值为 "stuff"');
  - text: 不能使用任何<code>if</code>或<code>else</code>表达式
    testString: assert(!/else/g.test(code) || !/if/g.test(code), '不能使用任何<code>if</code>或<code>else</code>表达式');
  - text: 你应该有一个<code>default</code>表达式
    testString: assert(switchOfStuff("string-to-trigger-default-case") === "stuff", '你应该有一个<code>default</code>表达式');
  - text: 你应该有至少 3 个<code>break</code>表达式
    testString: assert(code.match(/break/g).length > 2, '你应该有至少 3 个<code>break</code>表达式');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

## Solution
<section id='solution'>

```js
function switchOfStuff(val) {
  var answer = "";

  switch(val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
  }
  return answer;  
}
```

</section>
              