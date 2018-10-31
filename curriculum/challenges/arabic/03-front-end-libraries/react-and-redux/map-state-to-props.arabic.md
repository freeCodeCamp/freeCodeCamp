---
id: 5a24c314108439a4d4036145
title: Map State to Props
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: خريطة الدولة إلى الدعائم
---

## Description
undefined

## Instructions
<section id="instructions"> قم بإنشاء <code>mapStateToProps()</code> دالة. يجب أن تأخذ هذه الدالة <code>state</code> كوسيطة ، ثم تقوم بإرجاع كائن يقوم بتعيين هذه الحالة إلى أسماء خصائص محددة. ستصبح هذه الخصائص متاحة للمكون الخاص بك عبر <code>props</code> . نظرًا لأن هذا المثال يحافظ على الحالة الكاملة للتطبيق في صفيف واحد ، فيمكنك تمرير هذه الحالة بأكملها إلى المكون الخاص بك. قم بإنشاء <code>messages</code> خاصية في الكائن الذي يتم إرجاعه وتعيينه إلى <code>state</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: وCONST <code>state</code> يجب أن تكون مجموعة فارغة.
    testString: 'assert(Array.isArray(state) && state.length === 0, "The const <code>state</code> should be an empty array.");'
  - text: ''
    testString: 'assert(typeof mapStateToProps === "function", "<code>mapStateToProps</code> should be a function.");'
  - text: ''
    testString: 'assert(typeof mapStateToProps() === "object", "<code>mapStateToProps</code> should return an object.");'
  - text: ''
    testString: 'assert(mapStateToProps(["messages"]).messages.pop() === "messages", "Passing an array as state to <code>mapStateToProps</code> should return this array assigned to a key of <code>messages</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const state = [];

// change code below this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
