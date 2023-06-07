---
id: 5a24c314108439a4d4036159
title: استخدام مشغل الانتشار (Spread Operator) على القائمات (Arrays)
challengeType: 6
forumTopicId: 301452
dashedName: use-the-spread-operator-on-arrays
---

# --description--

أحد الحلول من ES6 للمساعدة في إنفاذ ثبات الحالة في Redux هو مشغل الانتشار (spread operator) على هئة: `...`. مشغل الانتشار (spread operator) لديه مجموعة متنوعة من التطبيقات، وهو واحد من هذه الحالات تناسب تماما التحدي السابق المتمثل في إنتاج قائمة جديدة من قائمة موجودة فعلاً. هذه صيغة جديدة نسبياً ولكنها شائعة الاستخدام. على سبيل المثال، إذا كان لديك قائمة `myArray` وكتب:

```js
let newArray = [...myArray];
```

`newArray` هي الآن نسخة من `myArray`. ولا يزال كلا القائمتين قائمين بشكل منفصل في الذاكرة (memory). إذا نفذ تغير قيمة الأصلية (mutation) مثل `newArray.push(5)`، و`myArray` لا يتغير. `...` هو *ينشر* بفعالية القيم في `myArray` إلى قائمة جديدة. لاستنساخ قائمة ولكن إضافة قيم إضافية في القائمة الجديدة، يمكنك كتابة `[...myArray, 'new value']`. هذا من شأنه أن ينتج قائمة جديدة تتكون من القيم في `myArray` ومقطع (string) باسم `new value` كالقيمة السابقة. يمكن استخدام صيغة الانتشار (spread syntax) عدة مرات في تركيبة قائمة مثل، ولكن من المهم أن نلاحظ أنها تصنع فقط نسخة ضحله (shallow) من القائمة. وهذا يعني أنه لا يوفر سوى عمليات قائمة ثابتة (immutable array operations) لقائمة أحادية البعد (dimensional arrays).

# --instructions--

استخدم مشغل الانتشار (spread operator) لإرجاع نسخة جديدة من الحالة عند إضافة قائمة (to-do).

# --hints--

يجب أن يكون متجر Redux موجوداً ويبدأ مع حالة تساوي `["Do not mutate state!"]`.

```js
assert(
  (function () {
    const initialState = store.getState();
    return (
      Array.isArray(initialState) === true &&
      initialState[0] === 'Do not mutate state!'
    );
  })()
);
```

يجب أن يكون كلاً من `addToDo` و `immutableReducer` وظائف (functions).

```js
assert(typeof addToDo === 'function' && typeof immutableReducer === 'function');
```

إرسال إجراء من نوع `ADD_TO_DO` على متجر Redux يجب أن يضيف عنصر `todo` وينبغي ألا يغير الحالة.

```js
assert(
  (function () {
    const initialState = store.getState();
    const isFrozen = DeepFreeze(initialState);
    store.dispatch(addToDo('__TEST__TO__DO__'));
    const finalState = store.getState();
    const expectedState = ['Do not mutate state!', '__TEST__TO__DO__'];
    return isFrozen && DeepEqual(finalState, expectedState);
  })()
);
```

وينبغي استخدام مشغل الانتشار (spread operator) لإعادة حالة جديدة.

```js
(getUserInput) => assert(getUserInput('index').includes('...state'));
```

# --seed--

## --seed-contents--

```js
const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
    case 'ADD_TO_DO':
      // Don't mutate state here or the tests will fail
      return
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: 'ADD_TO_DO',
    todo
  }
}

const store = Redux.createStore(immutableReducer);
```

# --solutions--

```js
const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
    case 'ADD_TO_DO':
      return [
        ...state,
        action.todo
      ];
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: 'ADD_TO_DO',
    todo
  }
}

const store = Redux.createStore(immutableReducer);
```
