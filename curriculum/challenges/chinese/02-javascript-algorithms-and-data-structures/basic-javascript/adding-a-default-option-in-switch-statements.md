---
id: 56533eb9ac21ba0edf2244de
challengeType: 1
videoUrl: 'https://scrimba.com/c/c3JvVfg'
forumTopicId: 16653
title: 在 Switch 语句中添加默认选项
---

## Description
<section id='description'>
在<code>switch</code>语句中你可能无法用 case 来指定所有情况，这时你可以添加 default 语句。当再也找不到 case 匹配的时候 default 语句会执行，非常类似于 if/else 组合中的 else 语句。
<code>default</code>语句应该是最后一个 case。

```js
switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}
```

</section>

## Instructions
<section id='instructions'>
写一个 switch 语句，根据下面的条件来设置<code>answer</code>的switch语句：<br><code>"a"</code> - "apple"<br><code>"b"</code> - "bird"<br><code>"c"</code> - "cat"<br><code>default</code> - "stuff"
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>switchOfStuff("a")</code>应该有一个值为 "apple"。
    testString: assert(switchOfStuff("a") === "apple");
  - text: <code>switchOfStuff("b")</code>应该有一个值为 "bird"。
    testString: assert(switchOfStuff("b") === "bird");
  - text: <code>switchOfStuff("c")</code>应该有一个值为 "cat"。
    testString: assert(switchOfStuff("c") === "cat");
  - text: <code>switchOfStuff("d")</code>应该有一个值为 "stuff"。
    testString: assert(switchOfStuff("d") === "stuff");
  - text: <code>switchOfStuff(4)</code>应该有一个值为 "stuff"。
    testString: assert(switchOfStuff(4) === "stuff");
  - text: 不能使用任何<code>if</code>或<code>else</code>表达式。
    testString: assert(!/else/g.test(code) || !/if/g.test(code));
  - text: 你应该有一个<code>default</code>表达式。
    testString: assert(switchOfStuff("string-to-trigger-default-case") === "stuff");
  - text: 你应该有至少 3 个<code>break</code>表达式。
    testString: assert(code.match(/break/g).length > 2);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

// Change this value to test
switchOfStuff(1);

```

</div>



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
