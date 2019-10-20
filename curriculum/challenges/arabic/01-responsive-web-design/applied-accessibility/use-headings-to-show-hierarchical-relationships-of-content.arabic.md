---
id: 587d774d367417b2b2512a9e
title: Use Headings to Show Hierarchical Relationships of Content
challengeType: 0
videoUrl: ''
localeTitle: استخدم العناوين لإظهار العلاقات الهرمية للمحتوى
---

## Description
<section id="description"> تعد العناوين (عناصر <code>h1</code> حتى <code>h6</code> ) علامات عامل تساعد في توفير البنية ووضع العلامات على المحتوى الخاص بك. يمكن تعيين قارئات الشاشة لقراءة العناوين فقط في الصفحة بحيث يحصل المستخدم على ملخص. هذا يعني أنه من المهم بالنسبة لعلامات العنوان في الترميز أن يكون لها معنى دلالي وتتصل ببعضها البعض ، ولا يتم انتقاؤها فقط لقيم حجمها. يعني <em>المعنى الدلالي</em> أن العلامة التي تستخدمها حول المحتوى تشير إلى نوع المعلومات التي تحتوي عليها. إذا كنت تكتب ورقة تحتوي على مقدمة وجسم وخاتمة ، فلن يكون من المنطقي وضع الخاتمة كقسم فرعي للجسم في مخططك. يجب أن يكون القسم الخاص بها. وبالمثل ، يجب أن تدخل علامات العنوان في صفحة ويب وترمز إلى العلاقات الهرمية للمحتوى الخاص بك. تبدأ العناوين ذات الترتيب المتساوي (أو الأعلى) بأقسام جديدة ضمنية ، مع عناوين فرعية منخفضة بداية من المرحلة السابقة. وكمثال على ذلك ، فإن الصفحة التي تحتوي على عنصر <code>h2</code> متبوعًا بالعديد من الأقسام الفرعية المصنفة <code>h4</code> قد تؤدي إلى إرباك مستخدم قارئ الشاشة. من خلال ستة اختيارات ، من المغري استخدام علامة لأنها تبدو أفضل في المتصفح ، ولكن يمكنك استخدام CSS لتحرير الحجم النسبي. نقطة واحدة أخيرة ، يجب أن تحتوي كل صفحة دائمًا على عنصر <code>h1</code> (واحد فقط) ، وهو الموضوع الرئيسي للمحتوى الخاص بك. يتم استخدام هذا والعناوين الأخرى جزئيًا بواسطة محركات البحث لفهم موضوع الصفحة. </section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تحتوي شفرتك على ست علامات <code>h3</code> .
    testString: 'assert($("h3").length === 6, "Your code should have six <code>h3</code> tags.");'
  - text: يجب ألا تحتوي شفرتك على أي علامات <code>h5</code> .
    testString: 'assert($("h5").length === 0, "Your code should not have any <code>h5</code> tags.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>How to Become a Ninja</h1>
<main>
  <h2>Learn the Art of Moving Stealthily</h2>
  <h5>How to Hide in Plain Sight</h5>
  <h5>How to Climb a Wall</h5>

  <h2>Learn the Art of Battle</h2>
  <h5>How to Strengthen your Body</h5>
  <h5>How to Fight like a Ninja</h5>

  <h2>Learn the Art of Living with Honor</h2>
  <h5>How to Breathe Properly</h5>
  <h5>How to Simplify your Life</h5>
</main>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
