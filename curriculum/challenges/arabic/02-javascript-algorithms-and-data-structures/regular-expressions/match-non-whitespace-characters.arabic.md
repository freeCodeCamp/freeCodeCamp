---
id: 587d7db9367417b2b2512ba4
title: Match Non-Whitespace Characters
challengeType: 1
videoUrl: ''
localeTitle: تطابق أحرف غير بيضاء
---

## Description
<section id="description"> لقد تعلمت عن البحث عن المسافات البيضاء باستخدام <code>\s</code> ، باستخدام <code>s</code> صغير. يمكنك أيضًا البحث عن كل شيء ما عدا المسافة البيضاء. البحث عن غير بيضاء، يستخدم <code>\S</code> ، وهي الأحرف الكبيرة <code>s</code> . لن يطابق هذا النمط المسافات البيضاء ، والعودة إلى السطر ، وعلامة التبويب ، وتغذية النموذج ، وأحرف الخطوط الجديدة. يمكنك التفكير في كونه مشابهًا لفئة الأحرف <code>[^ \r\t\f\n\v]</code> . <blockquote style=";text-align:right;direction:rtl"> let whiteSpace = &quot;Whitespace. Whitespace everywhere!&quot; <br> اترك nonSpaceRegex = / \ S / g؛ <br> whiteSpace.match (nonSpaceRegex) مدة العرض. // إرجاع 32 </blockquote></section>

## Instructions
<section id="instructions"> غيّر <code>countNonWhiteSpace</code> regex للبحث عن أحرف non-whitespace متعددة في سلسلة. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يستخدم تعبيرك العادي العلم العام.
    testString: 'assert(countNonWhiteSpace.global, "Your regex should use the global flag.");'
  - text: يجب أن يستخدم تعبيرك العادي الحرف المختصر
    testString: 'assert(/\\S/.test(countNonWhiteSpace.source), "Your regex should use the shorthand character <code>\S/code> to match all non-whitespace characters.");'
  - text: يجب أن يعثر تعبيرك المعتاد على 35 حالة غير مسافات في <code>&quot;Men are from Mars and women are from Venus.&quot;</code>
    testString: 'assert("Men are from Mars and women are from Venus.".match(countNonWhiteSpace).length == 35, "Your regex should find 35 non-spaces in <code>"Men are from Mars and women are from Venus."</code>");'
  - text: 'يجب أن يعثر تعبيرك المعتاد على 23 منطقة غير مسافات في <code>&quot;Space: the final frontier.&quot;</code>'
    testString: 'assert("Space: the final frontier.".match(countNonWhiteSpace).length == 23, "Your regex should find 23 non-spaces in <code>"Space: the final frontier."</code>");'
  - text: يجب أن يعثر <code>&quot;MindYourPersonalSpace&quot;</code> على 21 <code>&quot;MindYourPersonalSpace&quot;</code> غير مسافات في <code>&quot;MindYourPersonalSpace&quot;</code>
    testString: 'assert("MindYourPersonalSpace".match(countNonWhiteSpace).length == 21, "Your regex should find 21 non-spaces in <code>"MindYourPersonalSpace"</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /change/; // Change this line
let result = sample.match(countNonWhiteSpace);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
