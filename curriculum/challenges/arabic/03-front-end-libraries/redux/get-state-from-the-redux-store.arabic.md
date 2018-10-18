---
id: 5a24c314108439a4d403614c
title: Get State from the Redux Store
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 'استرجاع ال state من مخزن Redux'
---

## Description
كائن مخزن الـ

Redux

يوفر عددا من الدالات التي تسمح باستخدام هذا الكائن
على سبيل المثال يمكن الحصول على قيمة الـ 

`State`

المخزنة في مخزن

Redux

باستخدام دالة

getState()

## Instructions
لقد قمنا بإعادة كتابة الكود من التمارين السابقة بشكل أكثر اختصارا. قم باستخدام

`store.getState()`

لاستعادة قيمة الـ

`state`

من الـ

`store`

ثم قم بإسناد هذه القيمة إلى المتغير الجديد

`currentState`

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(store.getState()===5, "The redux store should have a value of 5 for the initial state.");'
  - text: ''
    testString: 'getUserInput => assert(currentState === 5 && getUserInput("index").includes("store.getState()"), "A variable <code>currentState</code> should exist and should be assigned the current state of the Redux store.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const store = Redux.createStore(
  (state = 5) => state
);

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
