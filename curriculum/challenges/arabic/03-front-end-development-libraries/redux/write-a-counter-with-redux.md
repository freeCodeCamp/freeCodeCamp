---
id: 5a24c314108439a4d4036157
title: اكتب العداد (Counter) باستخدام Redux
challengeType: 6
forumTopicId: 301453
dashedName: write-a-counter-with-redux
---

# --description--

الآن لقد تعلمت جميع المبادئ الأساسية Redux! لقد رأيت كيفية إنشاء الإجراءات ومبتكري الإجراءات، إنشاء متجر Redux، إرسال إجراءاتك إلى المتجر، وتصميم state تّحدث مع reducers النقيين. لقد رأيت حتى كيفية إدارة state المعقدة مع reducer والتعامل مع الإجراءات غير المتزامنة (asynchronous actions). وهذه الأمثلة تبسيطية، ولكن هذه المفاهيم هي المبادئ الأساسية Redux. إذا كنت تفهمهم جيداً، فأنت على استعداد لبدء بناء تطبيقك بواسطة Redux. التحديات التالية تغطي بعض التفاصيل المتعلقة بكائن `state` عدم قابلية التغير، ولكن أولاً، إليك استعراض لكل ما تعلمته حتى الآن.

# --instructions--

في هذا الدرس، ستطبق عددًا بسيطًا مع Redux من الصفر. يتم توفير أساسيات في محرر التعليمات البرمجية، ولكن يجب عليك ملء التفاصيل! استخدم الأسماء التي تم توفيرها وحدد `incAction` و `decAction`، ونشئ الإجرائيات `counterReducer()`، و`INCREMENT`, و `DECREMENT`، وأخيراً `store` قي Redux. بمجرد انتهائك، يجب أن تكون قادراً على إرسال إجراءات `INCREMENT` أو `DECREMENT` لزيادة أو تخفيض state الموجودة في `store`. حظًا سعيدًا لبناء أول تطبيق Redux الخاص بك!

# --hints--

يجب على منشئ الإجراء `incAction` أن يعيد كائن إجراء مع `type` يساوي قيمة `INCREMENT`

```js
assert(incAction().type === INCREMENT);
```

يجب على منشئ الإجراء `decAction` أن يعيد كائن إجراء مع `type` يساوي قيمة `DECREMENT`

```js
assert(decAction().type === DECREMENT);
```

يجب أن يفتح متجر Redux مع `state` بقيمة 0.

```js
assert(_store.getState() === 0);
```

إرسال `incAction` على متجر Redux يجب أن يزيد من `state` بمقدار 1.

```js
assert(
  (function () {
    const initialState = _store.getState();
    _store.dispatch(incAction());
    const incState = _store.getState();
    return initialState + 1 === incState;
  })()
);
```

إرسال `decAction` على متجر Redux يجب أن يقلل من `state` بمقدار 1.

```js
assert(
  (function () {
    const initialState = _store.getState();
    _store.dispatch(decAction());
    const decState = _store.getState();
    return initialState - 1 === decState;
  })()
);
```

يجب أن تكون `counterReducer` وظيفة function

```js
assert(typeof counterReducer === 'function');
```

# --seed--

## --seed-contents--

```js
const INCREMENT = null; // Define a constant for increment action types
const DECREMENT = null; // Define a constant for decrement action types

const counterReducer = null; // Define the counter reducer which will increment or decrement the state based on the action it receives

const incAction = null; // Define an action creator for incrementing

const decAction = null; // Define an action creator for decrementing

const store = null; // Define the Redux store here, passing in your reducers
```

## --after-user-code--

```js
const _store = Redux.createStore(counterReducer)
```

# --solutions--

```js
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const incAction = () => {
  return {
    type: INCREMENT
  }
};

const decAction = () => {
  return {
    type: DECREMENT
  }
};

const store = Redux.createStore(counterReducer);
```
