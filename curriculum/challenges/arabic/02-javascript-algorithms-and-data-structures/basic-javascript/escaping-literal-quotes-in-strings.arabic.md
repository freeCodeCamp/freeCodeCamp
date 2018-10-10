---
id: 56533eb9ac21ba0edf2244b5
title: Escaping Literal Quotes in Strings
challengeType: 1
videoUrl: ''
localeTitle: الهروب من الأسعار الحرفيه في الاوتار
---

## Description
<section id="description"> عندما تقوم بتحديد سلسلة ، يجب أن تبدأ وتنتهي بعلامة اقتباس مفردة أو مزدوجة. ماذا يحدث عندما تحتاج إلى عرض سعر حرفي: <code>&quot;</code> أو <code>&#39;</code> داخل السلسلة الخاصة بك؟ في JavaScript ، يمكنك <dfn>الهروب</dfn> من اقتباس من اعتباره كنهاية لسلسلة الاقتباس عن طريق وضع خط <dfn>مائل عكسي</dfn> ( <code>\</code> ) أمام الاقتباس. <code>var sampleStr = &quot;Alan said, \&quot;Peter is learning JavaScript\&quot;.&quot;;</code> يشير هذا إلى جافا سكريبت بأن الاقتباس التالي ليس نهاية السلسلة ، بل يجب أن يظهر داخل السلسلة بدلاً من ذلك. لذلك إذا كنت ستطبعه إلى وحدة التحكم ، ستحصل على: <code>Alan said, &quot;Peter is learning JavaScript&quot;.</code> </section>

## Instructions
<section id="instructions"> استخدم <code>myStr</code> <dfn>المائلة العكسية</dfn> لتعيين سلسلة إلى متغير <code>myStr</code> بحيث إذا كنت <code>myStr</code> إلى وحدة التحكم ، سترى: <code>I am a &quot;double quoted&quot; string inside &quot;double quotes&quot;.</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب عليك استخدام علامتي اقتباس مزدوجتين ( <code>&quot;</code> ) وأربعة علامات اقتباس مزدوجة ( <code>\&quot;</code> ).
    testString: 'assert(code.match(/\\"/g).length === 4 && code.match(/[^\\]"/g).length === 2, "You should use two double quotes (<code>&quot;</code>) and four escaped double quotes (<code>&#92;&quot;</code>).");'
  - text: 'يجب أن يحتوي myStr المتغير على السلسلة: <code>I am a &quot;double quoted&quot; string inside &quot;double quotes&quot;.</code>'
    testString: 'assert(myStr === "I am a \"double quoted\" string inside \"double quotes\".", "Variable myStr should contain the string: <code>I am a "double quoted" string inside "double quotes".</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myStr = ""; // Change this line

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
