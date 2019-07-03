---
id: 587d7b7e367417b2b2512b23
title: Use the parseInt Function
challengeType: 1

videoUrl: ''
localeTitle: Use the parseInt Function
---

## Description
<section id='description'>
<code>parseInt()</code>函数解析一个字符串返回一个整数下面是一个示例：
<code>var a = parseInt("007");</code>
上面的函数把字符串 "007" 转换成数字 7。 如果字符串参数的第一个字符是字符串类型的，结果将不会转换成数字，而是返回<code>NaN</code>.
</section>

## Instructions
<section id='instructions'>
在<code>convertToInteger</code>函数中使用<code>parseInt()</code>转换接受的的字符串<code>str</code>为正数并返回。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>convertToInteger</code>应该使用<code>parseInt()</code>函数
    testString: assert(/parseInt/g.test(code), '<code>convertToInteger</code>应该使用<code>parseInt()</code>函数');
  - text: "<code>convertToInteger('56')</code>应该返回一个数字"
    testString: assert(typeof(convertToInteger("56")) === "number", '<code>convertToInteger("56")</code>应该返回一个数字');
  - text: "<code>convertToInteger('56')</code>应该返回 56"
    testString: assert(convertToInteger("56") === 56, '<code>convertToInteger("56")</code>应该返回 56');
  - text: "<code>convertToInteger('77')</code>应该返回 77"
    testString: assert(convertToInteger("77") === 77, '<code>convertToInteger("77")</code>应该返回 77');
  - text: "<code>convertToInteger('JamesBond')</code>应该返回 NaN"
    testString: assert.isNaN(convertToInteger("JamesBond"), '<code>convertToInteger("JamesBond")</code>应该返回 NaN');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              