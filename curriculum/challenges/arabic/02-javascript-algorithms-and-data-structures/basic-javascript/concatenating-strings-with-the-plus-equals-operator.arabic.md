---
id: 56533eb9ac21ba0edf2244b8
title: Concatenating Strings with the Plus Equals Operator
challengeType: 1
videoUrl: ''
localeTitle: سلاسل متسلسلة مع Plus Equals Operator
---

## Description
<section id="description"> يمكننا أيضًا استخدام <code>+=</code> operator <dfn>لسَلسَلة</dfn> سلسلة في نهاية متغير سلسلة موجود. يمكن أن يكون هذا مفيدًا جدًا لكسر سلسلة طويلة عبر عدة أسطر. <strong>ملحوظة</strong> <br> احترس من المساحات. لا يضيف Concatenation فراغات بين السلاسل المتسلسلة ، لذا ستحتاج إلى إضافتها بنفسك. </section>

## Instructions
<section id="instructions"> إنشاء <code>myStr</code> عبر عدة سطور عن طريق وصل هاتين السلسلتين: <code>&quot;This is the first sentence. &quot;</code> و <code>&quot;This is the second sentence.&quot;</code> باستخدام <code>+=</code> عامل التشغيل. استخدم <code>+=</code> عامل مشابه لكيفية ظهوره في المحرر. ابدأ بتخصيص السلسلة الأولى إلى <code>myStr</code> ، ثم أضفها في السلسلة الثانية. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون لـ <code>myStr</code> قيمة <code>This is the first sentence. This is the second sentence.</code>
    testString: 'assert(myStr === "This is the first sentence. This is the second sentence.", "<code>myStr</code> should have a value of <code>This is the first sentence. This is the second sentence.</code>");'
  - text: استخدم <code>+=</code> عامل لبناء <code>myStr</code>
    testString: 'assert(code.match(/\w\s*\+=\s*[""]/g).length > 1 && code.match(/\w\s*\=\s*[""]/g).length > 1, "Use the <code>+=</code> operator to build <code>myStr</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourStr = "I come first. ";
ourStr += "I come second.";

// Only change code below this line

var myStr;

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
