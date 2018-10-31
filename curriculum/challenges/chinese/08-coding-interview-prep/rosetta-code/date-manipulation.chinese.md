---
title: Date manipulation
id: 5966c21cf732a95f1b67dd28
challengeType: 5
videoUrl: ''
localeTitle: 日期操纵
---

## Description
<section id="description">任务： <p>给定EST中的日期字符串，将给定日期输出为字符串，并添加12小时。 </p><p>时区应该保留。 </p><p>示例输入： </p><p> <code>&quot;March 7 2009 7:30pm EST&quot;</code> </p> <p>输出示例： </p><p> <code>&quot;March 8 2009 7:30am EST&quot;</code> </p> </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>add12Hours</code>是一个功能。
    testString: 'assert(typeof add12Hours === "function", "<code>add12Hours</code> is a function.");'
  - text: <code>add12Hours(dateString)</code>应该返回一个字符串。
    testString: 'assert(typeof add12Hours(tests[0]) === "string", "<code>add12Hours(dateString)</code> should return a string.");'
  - text: '<code>add12Hours(&quot;&quot; + tests[0] + &quot;&quot;)</code>应该返回<code>&quot;&quot; + answers[0] + &quot;&quot;</code>'
    testString: 'assert(add12Hours(tests[0]) === answers[0], "<code>add12Hours("" + tests[0] + "")</code> should return <code>"" + answers[0] + ""</code>");'
  - text: '汉德尔应该改变一天。 <code>add12Hours(&quot;&quot; + tests[1] + &quot;&quot;)</code>应返回<code>&quot;&quot; + answers[1] + &quot;&quot;</code>'
    testString: 'assert(add12Hours(tests[1]) === answers[1], "Should handel day change. <code>add12Hours("" + tests[1] + "")</code> should return <code>"" + answers[1] + ""</code>");'
  - text: '汉德尔月份应该在闰年中发生变化。 <code>add12Hours(&quot;&quot; + tests[2] + &quot;&quot;)</code>应返回<code>&quot;&quot; + answers[2] + &quot;&quot;</code>'
    testString: 'assert(add12Hours(tests[2]) === answers[2], "Should handel month change in a leap years. <code>add12Hours("" + tests[2] + "")</code> should return <code>"" + answers[2] + ""</code>");'
  - text: '应该在一个共同的年份改变汉德尔月份。 <code>add12Hours(&quot;&quot; + tests[3] + &quot;&quot;)</code>应该返回<code>&quot;&quot; + answers[3] + &quot;&quot;</code>'
    testString: 'assert(add12Hours(tests[3]) === answers[3], "Should handel month change in a common years. <code>add12Hours("" + tests[3] + "")</code> should return <code>"" + answers[3] + ""</code>");'
  - text: '汉德尔应该改变一年。 <code>add12Hours(&quot;&quot; + tests[4] + &quot;&quot;)</code>应该返回<code>&quot;&quot; + answers[4] + &quot;&quot;</code>'
    testString: 'assert(add12Hours(tests[4]) === answers[4], "Should handel year change. <code>add12Hours("" + tests[4] + "")</code> should return <code>"" + answers[4] + ""</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function add12Hours (dateString) {
  // Good luck!
  return true;
}

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
