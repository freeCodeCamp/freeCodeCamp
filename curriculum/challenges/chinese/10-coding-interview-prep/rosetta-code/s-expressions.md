---
title: S-Expressions
id: 59667989bf71cf555dd5d2ff
challengeType: 5
videoUrl: ''
localeTitle: S-表达式
---

## Description
<section id="description"><p> <a href="https://en.wikipedia.org/wiki/S-Expression" title="wp：S表达式">S-Expressions</a>是一种解析和存储数据的便捷方式。 </p>任务： <p>为S-Expressions编写一个简单的读取器/解析器，处理引用的和不带引号的字符串，整数和浮点数。 </p><p>该函数应从字符串中读取单个但嵌套的S-Expression，并将其作为（嵌套）数组返回。 </p><p>除非包含在带引号的字符串中，否则可以忽略换行符和其他空格。 </p><p> “ <tt>（）</tt> ”内部引用的字符串不会被解释，但会被视为字符串的一部分。 </p><p>处理字符串中的转义引号是可选的;因此“ <tt>（foo”bar）</tt> “可能被视为字符串” <tt>foo“bar</tt> ”，或作为错误。 </p><p>为此，读者无需识别“ <tt>\</tt> ”以进行转义，但如果语言具有适当的数据类型，则还应识别数字。 </p><p>请注意，除了“ <tt>（）”</tt> “（” <tt>\</tt> “，如果支持转义）和空格，没有特殊字符。其他任何内容都是允许的，不带引号。 </p><p>读者应该能够阅读以下输入</p><p></p><pre> （（数据“引用数据”123 4.5）
    （数据（！@＃（4.5）“（更多”“数据”））））
</pre><p></p><p>并将其转换为本机数据结构。 （有关本机数据结构的示例，请参阅<a href="http://rosettacode.org/wiki/#Pike" title="#Pike">Pike</a> ， <a href="http://rosettacode.org/wiki/#Python" title="＃蟒蛇">Python</a>和<a href="http://rosettacode.org/wiki/#Ruby" title="＃红宝石">Ruby</a>实现。） </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>parseSexpr</code>是一个函数。
    testString: assert(typeof parseSexpr === 'function');
  - text: <code>parseSexpr("(data1 data2 data3)")</code>应返回[“data1”，“data2”，“data3”]“）
    testString: assert.deepEqual(parseSexpr(simpleSExpr), simpleSolution);
  - text: <code>parseSexpr("(data1 data2 data3)")</code>应该返回一个包含3个元素的数组“）'
    testString: assert.deepEqual(parseSexpr(basicSExpr), basicSolution);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function parseSexpr(str) {
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
