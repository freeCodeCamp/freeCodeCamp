---
id: 5a24c314108439a4d403614c
title: احصل على State من متجر Redux
challengeType: 6
forumTopicId: 301443
dashedName: get-state-from-the-redux-store
---

# --description--

يوفر عنصر متجر Redux عدة طرق تسمح لك بالتفاعل معه. على سبيل المثال، يمكنك استرداد `state` الحالية, الموجودة في كائن متجر Redux باستخدام طريقة `getState()`.

# --instructions--

تم إعادة كتابة التعليمات البرمجية من التحدي السابق بشكل أكثر إيجازا في محرر التعليمات البرمجية. استخدم `store.getState()` لاسترداد `state` من `store`، وتعيين هذا إلى متغير (variable) جديد `currentState`.

# --hints--

يجب أن يحتوي للمتجر Redux على state مبدئة بقيمة 5.

```js
assert(store.getState() === 5);
```

يجب أن يكون المتغير `currentState` موجوداً ويجب تعيين state الحالية لمتجر Redux.

```js
(getUserInput) =>
  assert(
    currentState === 5 && getUserInput('index').includes('store.getState()')
  );
```

# --seed--

## --seed-contents--

```js
const store = Redux.createStore(
  (state = 5) => state
);

// Change code below this line
```

# --solutions--

```js
const store = Redux.createStore(
  (state = 5) => state
);

// Change code below this line
const currentState = store.getState();
```
