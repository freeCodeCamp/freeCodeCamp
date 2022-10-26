---
id: 5a24c314108439a4d4036150
title: التعامل مع إجراء (Action) في المتجر (Store)
challengeType: 6
forumTopicId: 301444
dashedName: handle-an-action-in-the-store
---

# --description--

بعد إنشاء الإجراء وإرساله، يحتاج متجر Redux إلى معرفة كيفية الاستجابة لذلك الإجراء. هذه هي وظيفة `reducer`. تعدل التخفيضات (Reducers) في Redux الحالة التي تحدث كاستجابة للإجراءات. يأخذ `reducer` حجج `state` و `action`، و دائما ينتج `state` جديدة. من المهم أن نرى أن هذا هو الدور reducer **فقط**. وليس لها آثار جانبية - فهي لا تستدع نقطة نهاية API قط ولم تكن لها أي مفاجآت خفية. الخفض (reducer) هو ببساطة وظيفة خالصة تأخذ الحالة والإجراءات، ثم تنتج حالة جديدة.

مبدأ رئيس آخر في Redux هو أن `state` مقروء فقط. بمعنى آخر، يجب أن الدالة `reducer` ينتج **دائما** إرجاع نسخة جديدة من `state` وعدم تعديل الحالة قاصدًا أبدا. Redux لا يفرض حالة غير قابلة للتغير، ولكن أنت مسؤول عن إنفاذه في تعليمات البرمجية وظائف الاختصار (reducer) الخاصة بك. ستمارس هذا في تحديات لاحقة.

# --instructions--

محرر التعليمات البرمجية لديه المثال السابق بالإضافة إلى بداية الوظائف `reducer` لك. قم بملء جسم الوظيفة `reducer` بحيث أنه إذا تلقى إجراء من نوع `'LOGIN'` فإنه يرجع كائن حالة مع `login` بقيمة `true`. خلاف ذلك، فإنه ينتج `state` الحالية. لاحظ أن `state` الحالية و `action` الذي تم إرساله يتم تمريره إلى المخفض (reducer)، حتى تتمكن من الوصول إلى نوع الإجراء قاصدًا مع `action.type`.

# --hints--

الاتصال بالوظيفة `loginAction` يجب أن يعيد كائن يحمل مجموعة الخصائص type من string باسم `LOGIN`.

```js
assert(loginAction().type === 'LOGIN');
```

يجب تهيئة المتجر مع كائن ذو خاصية `login` بقيمة `false`.

```js
assert(store.getState().login === false);
```

إرسال `loginAction` يجب أن تحديث خاصية `login` في حالة المتجر إلى `true`.

```js
assert(
  (function () {
    const initialState = store.getState();
    store.dispatch(loginAction());
    const afterState = store.getState();
    return initialState.login === false && afterState.login === true;
  })()
);
```

إذا لم يكن الإجراء من نوع `LOGIN`، يجب على المتجر أن يعيد الحالة الحالية.

```js
assert(
  (function () {
    store.dispatch({ type: '__TEST__ACTION__' });
    let afterTest = store.getState();
    return typeof afterTest === 'object' && afterTest.hasOwnProperty('login');
  })()
);
```

# --seed--

## --seed-contents--

```js
const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // Change code below this line

  // Change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};
```

# --solutions--

```js
const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {

  if (action.type === 'LOGIN') {
    return {login: true}
  }

  else {
    return state
  }

};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};
```
