---
id: 5a24c314108439a4d403615a
title: Remove an Item from an Array
challengeType: 6
videoUrl: ''
localeTitle: إزالة عنصر من صفيف
---

## Description
<section id="description"> الوقت لممارسة إزالة العناصر من صفيف. يمكن استخدام مشغل الانتشار هنا أيضًا. تتضمن طرق JavaScript المفيدة الأخرى <code>slice()</code> و <code>concat()</code> . </section>

## Instructions
<section id="instructions"> تم تعديل المخفض ومنشئ الإجراء لإزالة عنصر من مصفوفة بناءً على فهرس العنصر. الانتهاء من كتابة المخفض بحيث يتم إرجاع مصفوفة حالة جديدة مع إزالة العنصر الموجود في الفهرس المحدد. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'يجب أن يكون مخزن Redux موجودًا وتهيئة بحالة مساوية لـ <code>[0,1,2,3,4,5]</code>'
    testString: 'assert((function() { const initialState = store.getState(); return (Array.isArray(initialState) === true && DeepEqual(initialState, [0, 1, 2, 3, 4, 5])); })(), "The Redux store should exist and initialize with a state equal to <code>[0,1,2,3,4,5]</code>");'
  - text: <code>removeItem</code> و <code>immutableReducer</code> حد سواء ينبغي أن تكون وظائف.
    testString: 'assert(typeof removeItem === "function" && typeof immutableReducer === "function", "<code>removeItem</code> and <code>immutableReducer</code> both should be functions.");'
  - text: يجب أن يؤدي إرسال منشئ الإجراء <code>removeItem</code> إزالة العناصر من الحالة ويجب ألا يؤدي إلى تحوُّل الحالة.
    testString: 'assert((function() { const initialState = store.getState(); const isFrozen = DeepFreeze(initialState); store.dispatch(removeItem(3)); const state_1 = store.getState(); store.dispatch(removeItem(2)); const state_2 = store.getState(); store.dispatch(removeItem(0)); store.dispatch(removeItem(0)); store.dispatch(removeItem(0)); const state_3 = store.getState(); return isFrozen && DeepEqual(state_1, [0, 1, 2, 4, 5]) && DeepEqual(state_2, [0, 1, 4, 5]) && DeepEqual(state_3, [5]); })(), "Dispatching the <code>removeItem</code> action creator should remove items from the state and should NOT mutate state.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      // don't mutate state here or the tests will fail
      return
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
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
