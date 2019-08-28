---
id: 5a24c314108439a4d403615a
title: Remove an Item from an Array
challengeType: 6
isRequired: false
forumTopicId: 301447
localeTitle: Удалить элемент из массива
---

## Description
<section id='description'>
Время практиковать удаление элементов из массива. Здесь также может использоваться оператор распространения. Другие полезные методы JavaScript включают <code>slice()</code> и <code>concat()</code> .
</section>

## Instructions
<section id='instructions'>
Редуктор и создатель действия были изменены для удаления элемента из массива на основе индекса элемента. Завершите запись редуктора, чтобы новый массив состояний был возвращен с удаленным элементом.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The Redux store should exist and initialize with a state equal to <code>[0,1,2,3,4,5]</code>
    testString: assert((function() { const initialState = store.getState(); return (Array.isArray(initialState) === true && DeepEqual(initialState, [0, 1, 2, 3, 4, 5])); })());
  - text: <code>removeItem</code> and <code>immutableReducer</code> both should be functions.
    testString: assert(typeof removeItem === 'function' && typeof immutableReducer === 'function');
  - text: Dispatching the <code>removeItem</code> action creator should remove items from the state and should NOT mutate state.
    testString: assert((function() { const initialState = store.getState(); const isFrozen = DeepFreeze(initialState); store.dispatch(removeItem(3)); const state_1 = store.getState(); store.dispatch(removeItem(2)); const state_2 = store.getState(); store.dispatch(removeItem(0)); store.dispatch(removeItem(0)); store.dispatch(removeItem(0)); const state_3 = store.getState(); return isFrozen && DeepEqual(state_1, [0, 1, 2, 4, 5]) && DeepEqual(state_2, [0, 1, 4, 5]) && DeepEqual(state_3, [5]); })());

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

```jsx
const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
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

</section>
