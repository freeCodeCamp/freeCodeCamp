---
id: 587d7db6367417b2b2512b99
title: Match Characters that Occur One or More Times
challengeType: 1
videoUrl: ''
localeTitle: مطابقة الأحرف التي تحدث مرة واحدة أو أكثر
---

## Description
<section id="description"> في بعض الأحيان ، تحتاج إلى مطابقة حرف (أو مجموعة من الأحرف) التي تظهر مرة واحدة أو أكثر في صف واحد. هذا يعني أنه يحدث مرة واحدة على الأقل ، ويمكن أن يتكرر. يمكنك استخدام <code>+</code> للتحقق مما إذا كانت هذه هي الحالة. تذكر ، يجب أن تكون الشخصية أو النمط موجودًا على التوالي. بمعنى ، يجب على الحرف تكرار واحد بعد الآخر. على سبيل المثال ، سيعثر <code>/a+/g</code> على تطابق واحد في <code>&quot;abc&quot;</code> وإرجاع <code>[&quot;a&quot;]</code> . نظرًا لوجود <code>+</code> ، سيجد أيضًا تطابقًا واحدًا في <code>&quot;aabc&quot;</code> وإرجاع <code>[&quot;aa&quot;]</code> . لو كانت بدلا التحقق من سلسلة <code>&quot;abab&quot;</code> ، فإنه يجد مباراتين والعودة <code>[&quot;a&quot;, &quot;a&quot;]</code> لأن <code>a</code> الأحرف ليست في صف واحد - هناك <code>b</code> بينهما. أخيرًا ، نظرًا لعدم وجود <code>&quot;a&quot;</code> في السلسلة <code>&quot;bcd&quot;</code> ، فلن تجد تطابقًا. </section>

## Instructions
<section id="instructions"> تريد البحث عن تطابقات عندما يحدث الحرف <code>s</code> مرة أو أكثر في <code>&quot;Mississippi&quot;</code> . اكتب regex يستخدم علامة <code>+</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: التعابير المنطقية الخاصة بك <code>myRegex</code> يجب استخدام <code>+</code> إشارة لمباراة واحدة أو أكثر من <code>s</code> حرفا.
    testString: 'assert(/\+/.test(myRegex.source), "Your regex <code>myRegex</code> should use the <code>+</code> sign to match one or more <code>s</code> characters.");'
  - text: يجب أن يتطابق التعبير العادي مع <code>myRegex</code> مع عنصرين.
    testString: 'assert(result.length == 2, "Your regex <code>myRegex</code> should match 2 items.");'
  - text: يجب أن يكون متغير <code>result</code> مصفوفة تحتوي على مجموعتين من <code>&quot;ss&quot;</code>
    testString: 'assert(result[0] == "ss" && result[1] == "ss", "The <code>result</code> variable should be an array with two matches of <code>"ss"</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let difficultSpelling = "Mississippi";
let myRegex = /change/; // Change this line
let result = difficultSpelling.match(myRegex);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
