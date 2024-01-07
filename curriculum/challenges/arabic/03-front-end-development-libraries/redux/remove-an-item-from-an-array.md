---
id: 5a24c314108439a4d403615a
title: إزالة عنصر من قائمة (Array)
challengeType: 6
forumTopicId: 301447
dashedName: remove-an-item-from-an-array
---

# --description--

الوقت المتاح لإزالة العناصر من القائمة (array). يمكن استخدام مشغل الانتشار هنا أيضا. وتشمل طرق JavaScript المفيدة الأخرى `slice()` و `concat()`.

# --instructions--

تم تعديل reducer ولإجراء (action) لإزالة عنصر من قائمة استنادًا على ترتيب العنصر. إنهاء كتابة reducer حتى يتم إعادة state قائمة (array) جديدة مع هذا العنصر في الترتيب المحدد.

# --hints--

يجب أن يكون متجر Redux موجوداً ويبدأ مع state مساوية `[0,1,2,3,4,5]`

```js
assert(
  (function () {
    const initialState = store.getState();
    return (
      Array.isArray(initialState) === true &&
      DeepEqual(initialState, [0, 1, 2, 3, 4, 5])
    );
  })()
);
```

يجب أن يكون كلاً من `removeItem` و `immutableReducer` وظائف (functions).

```js
assert(
  typeof removeItem === 'function' && typeof immutableReducer === 'function'
);
```

إرسال (dispatching) منشئ إجراء (action) مسمى `removeItem` لإزالة العناصر من state ويجب ألا يغير state.

```js
assert(
  (function () {
    const initialState = store.getState();
    const isFrozen = DeepFreeze(initialState);
    store.dispatch(removeItem(3));
    const state_1 = store.getState();
    store.dispatch(removeItem(2));
    const state_2 = store.getState();
    store.dispatch(removeItem(0));
    store.dispatch(removeItem(0));
    store.dispatch(removeItem(0));
    const state_3 = store.getState();
    return (
      isFrozen &&
      DeepEqual(state_1, [0, 1, 2, 4, 5]) &&
      DeepEqual(state_2, [0, 1, 4, 5]) &&
      DeepEqual(state_3, [5])
    );
  })()
);
```

# --seed--

## --seed-contents--

```js
const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      // Don't mutate state here or the tests will fail
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

# --solutions--

```js
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
