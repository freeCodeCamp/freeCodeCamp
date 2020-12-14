---
id: 5966c21cf732a95f1b67dd28
challengeType: 5
videoUrl: ''
title: 日期操纵
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
    testString: assert(typeof add12Hours === 'function');
  - text: <code>add12Hours(dateString)</code>应该返回一个字符串。
    testString: assert(typeof add12Hours('January 17 2017 11:43am EST') === 'string');
  - text: <code>add12Hours(&quot;&quot; + tests[0] + &quot;&quot;)</code>应该返回<code>&quot;&quot; + answers[0] + &quot;&quot;</code>
    testString: assert(add12Hours('January 17 2017 11:43am EST') === 'January 17 2017 11:43pm EST');
  - text: 汉德尔应该改变一天。 <code>add12Hours(&quot;&quot; + tests[1] + &quot;&quot;)</code>应返回<code>&quot;&quot; + answers[1] + &quot;&quot;</code>
    testString: assert(add12Hours('March 7 2009 7:30pm EST') === 'March 8 2009 7:30am EST');
  - text: 汉德尔月份应该在闰年中发生变化。 <code>add12Hours(&quot;&quot; + tests[2] + &quot;&quot;)</code>应返回<code>&quot;&quot; + answers[2] + &quot;&quot;</code>
    testString: assert(add12Hours('February 29 2004 9:15pm EST') === 'March 1 2004 9:15am EST');
  - text: 应该在一个共同的年份改变汉德尔月份。 <code>add12Hours(&quot;&quot; + tests[3] + &quot;&quot;)</code>应该返回<code>&quot;&quot; + answers[3] + &quot;&quot;</code>
    testString: assert(add12Hours('February 28 1999 3:15pm EST') === 'March 1 1999 3:15am EST');
  - text: 汉德尔应该改变一年。 <code>add12Hours(&quot;&quot; + tests[4] + &quot;&quot;)</code>应该返回<code>&quot;&quot; + answers[4] + &quot;&quot;</code>
    testString: assert(add12Hours('December 31 2020 1:45pm EST') === 'January 1 2021 1:45am EST');

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

/section>
