---
id: 5a24c314108439a4d403614b
title: Create a Redux Store
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: قم بإنشاء مخزن Redux
---

## Description
<section id="description"> Redux هو إطار عمل لإدارة الولاية يمكن استخدامه مع عدد من تقنيات الويب المختلفة ، بما في ذلك React. في Redux ، يوجد كائن حالة مفرد مسؤول عن الحالة الكاملة للتطبيق. وهذا يعني أنه إذا كان لديك تطبيق React مع عشرة مكونات ، وكان لكل مكون حالته المحلية الخاصة ، فسيتم تحديد الحالة الكاملة لتطبيقك بواسطة كائن حالة واحد موجود في <code>store</code> Redux. هذا هو أول مبدأ مهم لفهمه عند تعلم Redux: مخزن Redux هو المصدر الوحيد للحقيقة عندما يتعلق الأمر بحالة التطبيق. وهذا يعني أيضًا أنه في أي وقت تريد فيه أي من تطبيقاتك تحديث الحالة ، <strong>يجب أن</strong> تفعل ذلك من خلال متجر Redux. يسهّل تدفق البيانات أحادي الاتجاه تتبع إدارة الحالة في تطبيقك. </section>

## Instructions
<section id="instructions"> <code>store</code> Redux هو كائن يحتفظ ويدير <code>state</code> التطبيق. توجد طريقة تسمى <code>createStore()</code> على الكائن Redux ، والتي تستخدمها لإنشاء <code>store</code> Redux. تأخذ هذه الطريقة وظيفة <code>reducer</code> كوسيطة مطلوبة. يتم تغطية وظيفة <code>reducer</code> في تحدٍ لاحق ، ويتم تحديدها بالفعل لك في محرر الشفرة. انها ببساطة تأخذ <code>state</code> كحجة وعودة <code>state</code> . قم بتعريف متغير <code>store</code> وقم بتعيينه إلى أسلوب <code>createStore()</code> ، يمر في <code>reducer</code> كوسيطة. <strong>ملاحظة:</strong> تستخدم الشفرة في برنامج التحرير صيغة الوسيطة الافتراضية لـ ES6 لتهيئة هذه الحالة للاحتفاظ بقيمة <code>5</code> . إذا لم تكن تعرف الحجج الافتراضية ، يمكنك الرجوع إلى <a target="_blank" href="https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/set-default-parameters-for-your-functions">قسم ES6 في المنهج الدراسي</a> الذي يغطي هذا الموضوع. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يوجد مخزن redux.
    testString: 'assert(typeof store.getState === "function", "The redux store exists.");'
  - text: يحتوي مخزن redux على قيمة 5 للحالة.
    testString: 'assert(store.getState()=== 5, "The redux store has a value of 5 for the state.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const reducer = (state = 5) => {
  return state;
}

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
