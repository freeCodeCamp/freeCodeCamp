---
id: bd7123c9c441eddfaeb5bdef
title: Understanding Boolean Values
challengeType: 1

videoUrl: ''
localeTitle: Understanding Boolean Values
---

## Description
<section id='description'>
另一种数据类型是<dfn>布尔</dfn>（Boolean）。<code>布尔</code>值要么是<code>true</code>要么是<code>false</code>。它非常像电路开关，<code>true</code>是“开”，<code>false</code>是“关”。这两种状态是互斥的。
<strong>注意</strong><br><code>布尔值</code>是不带引号的，<code>"true"</code>和<code>"false"</code>是<code>字符串</code>而不是<code>布尔值</code>，在 JavaScript 中也没有特殊含义。
</section>

## Instructions
<section id='instructions'>
修改<code>welcomeToBooleans</code>函数，让它返回<code>true</code>而不是<code>false</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>welcomeToBooleans()</code>函数应该返回一个布尔值 &#40;true/false&#41; 
    testString: assert(typeof welcomeToBooleans() === 'boolean', '<code>welcomeToBooleans()</code>函数应该返回一个布尔值 &#40;true/false&#41; ');
  - text: <code>welcomeToBooleans()</code>应该返回 true
    testString: assert(welcomeToBooleans() === true, '<code>welcomeToBooleans()</code>应该返回 true');

```

</section>

## Challenge Seed
<section id='challengeSeed'>














### After Test

<div id='js-teardown'>

```js
welcomeToBooleans();
```

</div>

</section>

## Solution
<section id='solution'>

```js
function welcomeToBooleans() {
  return true; // 请修改这一行
}
```

</section>
              