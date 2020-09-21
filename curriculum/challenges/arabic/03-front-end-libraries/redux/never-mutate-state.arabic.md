---
id: 5a24c314108439a4d4036158
title: Never Mutate State
challengeType: 6
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
<section id="instructions"> يوجد <code>store</code> <code>reducer</code> في محرر الشفرات لإدارة عناصر المهام. قم <code>ADD_TO_DO</code> كتابة حالة <code>ADD_TO_DO</code> في المخفض لإلحاق الحالة الجديدة بالحالة. هناك عدة طرق لتحقيق ذلك باستخدام JavaScript قياسي أو ES6. تحقق مما إذا كان يمكنك العثور على طريقة لإرجاع مجموعة جديدة مع العنصر من <code>action.todo</code> إلى النهاية. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون مخزن Redux موجودًا وتهيئة بحالة مساوية لصفيف <code>todos</code> في محرر التعليمة البرمجية.
    testString: 'assert((function() { const todos = [ "Go to the store", "Clean the house", "Cook dinner", "Learn to code" ]; const initialState = store.getState(); return Array.isArray(initialState) && initialState.join(",") === todos.join(","); })(), "The Redux store should exist and initialize with a state equal to the <code>todos</code> array in the code editor.");'
  - text: <code>addToDo</code> و <code>immutableReducer</code> يجب أن يكونا كلاهما.
    testString: 'assert(typeof addToDo === "function" && typeof immutableReducer === "function", "<code>addToDo</code> and <code>immutableReducer</code> both should be functions.");'
  - text: يجب أن يؤدي إرسال إجراء من النوع <code>ADD_TO_DO</code> على مخزن Redux إلى إضافة عنصر <code>todo</code> ويجب عدم تحوّل الحالة.
    testString: 'assert((function() { const initialState = store.getState(); const isFrozen = DeepFreeze(initialState); store.dispatch(addToDo("__TEST__TO__DO__")); const finalState = store.getState(); const expectedState = [ "Go to the store", "Clean the house", "Cook dinner", "Learn to code", "__TEST__TO__DO__" ]; return( isFrozen && DeepEqual(finalState, expectedState)); })(), "Dispatching an action of type <code>ADD_TO_DO</code> on the Redux store should add a <code>todo</code> item and should NOT mutate state.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      // don't mutate state here or the tests will fail
      return
    default:
      return state;
  }
};

// an example todo argument would be 'Learn React',
const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

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
