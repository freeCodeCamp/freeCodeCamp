---
id: 5a24c314108439a4d403615b
title: Copy an Object with Object.assign
challengeType: 6
videoUrl: ''
localeTitle: نسخ كائن مع Object.assign
---

## Description
<section id="description"> عملت التحديات الأخيرة عدة مع المصفوفات ، ولكن هناك طرق للمساعدة في فرض ثبات الدولة عندما تكون الدولة <code>object</code> ، أيضا. أداة مفيدة لمعالجة الكائنات هي الأداة المساعدة <code>Object.assign()</code> . <code>Object.assign()</code> كائن هدف وكائنات المصدر وخرائط الخصائص من كائنات المصدر إلى الكائن الهدف. تتم الكتابة فوق أي خصائص متطابقة بواسطة الخصائص في كائنات المصدر. يتم استخدام هذا السلوك بشكل شائع لعمل نسخ ضحلة من الكائنات بتمرير كائن فارغ كوسيطة أولى متبوعة بالكائن (الكائنات) التي تريد نسخها. إليك مثالاً: <code>const newObject = Object.assign({}, obj1, obj2);</code> يؤدي هذا إلى <code>newObject</code> <code>object</code> جديد ، والذي يحتوي على الخصائص الموجودة حاليًا في <code>obj1</code> و <code>obj2</code> . </section>

## Instructions
<section id="instructions"> تم تعديل حالة Redux والإجراءات للتعامل مع <code>object</code> <code>state</code> . قم بتحرير التعليمة البرمجية لإرجاع كائن <code>state</code> جديد للإجراءات باستخدام الكتابة <code>ONLINE</code> ، والتي تقوم بتعيين خاصية <code>status</code> إلى السلسلة <code>online</code> . حاول استخدام <code>Object.assign()</code> لإكمال التحدي. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يوجد مخزن Redux وتهيئة بحالة مساوية للكائن <code>defaultState</code> المعلنة على السطر 1.
    testString: 'assert((function() { const expectedState = { user: "CamperBot", status: "offline", friends: "732,982", community: "freeCodeCamp" }; const initialState = store.getState(); return DeepEqual(expectedState, initialState); })(), "The Redux store should exist and initialize with a state that is equivalent to the <code>defaultState</code> object declared on line 1.");'
  - text: يجب أن يكون كل من <code>wakeUp</code> و <code>immutableReducer</code> دالات.
    testString: 'assert(typeof wakeUp === "function" && typeof immutableReducer === "function", "<code>wakeUp</code> and <code>immutableReducer</code> both should be functions.");'
  - text: يجب أن يؤدي إرسال إجراء من النوع <code>ONLINE</code> تحديث <code>status</code> الخاصية في حالة إلى <code>online</code> ويجب ألا يؤدي إلى تحوُّل الحالة.
    testString: 'assert((function() { const initialState = store.getState(); const isFrozen = DeepFreeze(initialState); store.dispatch({type: "ONLINE"}); const finalState = store.getState(); const expectedState = { user: "CamperBot", status: "online", friends: "732,982", community: "freeCodeCamp" }; return isFrozen && DeepEqual(finalState, expectedState); })(), "Dispatching an action of type <code>ONLINE</code> should update the property <code>status</code> in state to <code>online</code> and should NOT mutate state.");'
  - text: يجب استخدام <code>Object.assign</code> لإرجاع حالة جديدة.
    testString: 'getUserInput => assert(getUserInput("index").includes("Object.assign"), "<code>Object.assign</code> should be used to return new state.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      // don't mutate state here or the tests will fail
      return
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
