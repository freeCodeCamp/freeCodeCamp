---
id: 5a24c314108439a4d403614d
title: Define a Redux Action
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: تحديد عمل Redux
---

## Description
<section id="description"> بما أن Redux هو إطار عمل لإدارة الدولة ، فإن تحديث الحالة يعد إحدى مهامها الأساسية. في Redux ، يتم تشغيل جميع تحديثات الحالة عن طريق إرسال الإجراءات. الإجراء هو ببساطة كائن JavaScript يحتوي على معلومات حول حدث إجراء حدث. يتلقى مخزن Redux كائنات التصرف هذه ، ثم يقوم بتحديث حالتها وفقًا لذلك. في بعض الأحيان ، يحمل إجراء Redux أيضًا بعض البيانات. على سبيل المثال ، يحمل الإجراء اسم مستخدم بعد تسجيل دخول المستخدم. في حين أن البيانات اختيارية ، يجب أن تحمل الإجراءات خاصية <code>type</code> تحدد &quot;نوع&quot; الإجراء الذي حدث. فكر في إجراءات Redux كمراسلين يقدمون معلومات حول الأحداث التي تحدث في تطبيقك إلى متجر Redux. ثم يدير المتجر نشاط تحديث الحالة استنادًا إلى الإجراء الذي حدث. </section>

## Instructions
<section id="instructions"> كتابة إجراء Redux بسيط مثل التصريح عن كائن له خاصية كتابة. أعلن كائن <code>action</code> وتعطيه خاصية <code>type</code> لتعيين سلسلة <code>&#39;LOGIN&#39;</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن كائن كائن موجود.
    testString: 'assert((function() { return typeof action === "object" })(), "An action object should exist.");'
  - text: يجب أن يحتوي الإجراء على نوع خاصية رئيسي ذي قيمة <code>LOGIN</code> .
    testString: 'assert((function() { return action.type === "LOGIN" })(), "The action should have a key property type with value <code>LOGIN</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
// Define an action here:

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
