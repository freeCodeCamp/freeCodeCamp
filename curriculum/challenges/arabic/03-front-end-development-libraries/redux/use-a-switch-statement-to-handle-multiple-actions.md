---
id: 5a24c314108439a4d4036151
title: استخدام تبديل التعبير (Switch Statement) للتعامل مع الإجراءات (Actions) المتعددة
challengeType: 6
forumTopicId: 301449
dashedName: use-a-switch-statement-to-handle-multiple-actions
---

# --description--

يمكنك إخبار متجر Redux كيفية التعامل مع أنواع متعددة من الإجراءات. قل أنك إدارة توثيق المستخدم (user authentication) في متجرك Redux. تريد أن يكون لديك تمثيل للحالة عندما يتم تسجيل دخول المستخدمين وعندما يتم تسجيل خروجهم. أنت تمثل هذا مع كائن حالة (state) واحد مع الخاصية `authenticated`. تحتاج أيضًا إلى منشئي الإجراءات الذين ينشئ إجراءات مناظرة لتسجيل دخول المستخدم وتسجيل خروجه، إلى جانب كائنات الإجراء نفسها.

# --instructions--

يحتوي محرر التعليمات البرمجية على متجر، وإجراءات، وناشئ إجراءات تم إعدادهم لك. املأ الوظيفة `reducer` للتعامل مع إجراءات الموثقة المتعددة. استخدم تعبير `switch` من JavaScript في `reducer` للرد على أحداث الإجراء مختلفة. هذا نمط قياسي في كتابة reducers في Redux. يجب أن يبدل تعبير التبديل إلى `action.type` وأن يعيد حالة التوثيق المناسبة.

**ملاحظة:** في هذه المرحلة، لا تقلق حول عدم قدرة الحالة على التغيير، لأنها صغيرة وبسيطة في هذا المثال. لكل إجراء، يمكنك إعادة كائن جديد - على سبيل المثال `{authenticated: true}`. كما لا تنس كتابة قاعدة (case) باسم `default` في تعبير التبديل الخاص بك الذي يعيد الحالة `state`. هذا مهم لأنه بمجرد أن يكون التطبيق الخاص بك يحتوي على reducers متعددة، يتم تشغيلها جميعا في أي وقت يتم فيه إرسال إجراء، حتى عندما لا يكون الإجراء متصلا بذلك reducer. في مثل هذه الحالة، تريد التأكد من إعادة `state` الحالية.

# --hints--

الاتصال بالوظيفة `loginUser` يجب أن يعيد كائن يحمل مجموعة الخصائص type من string باسم `LOGIN`.

```js
assert(loginUser().type === 'LOGIN');
```

الاتصال بالوظيفة `logoutUser` يجب أن يعيد كائن يحمل مجموعة الخصائص type من string باسم `LOGOUT`.

```js
assert(logoutUser().type === 'LOGOUT');
```

يجب أن يتم تهيئة المتجر مع كائن يحتوي خاصية `authenticated` بقيمة `false`.

```js
assert(store.getState().authenticated === false);
```

إرسال `loginUser` يجب أن تحديث خاصية `authenticated` في حالة المتجر إلى `true`.

```js
assert(
  (function () {
    const initialState = store.getState();
    store.dispatch(loginUser());
    const afterLogin = store.getState();
    return (
      initialState.authenticated === false && afterLogin.authenticated === true
    );
  })()
);
```

إرسال `logoutUser` يجب أن تحديث خاصية `authenticated` في حالة المتجر إلى `false`.

```js
assert(
  (function () {
    store.dispatch(loginUser());
    const loggedIn = store.getState();
    store.dispatch(logoutUser());
    const afterLogout = store.getState();
    return (
      loggedIn.authenticated === true && afterLogout.authenticated === false
    );
  })()
);
```

يجب أن تتعامل وظيفة `authReducer` مع أنواع متعددة من الإجراءات مع تعبير `switch`.

```js
(getUserInput) =>
  assert(
    getUserInput('index').toString().includes('switch') &&
      getUserInput('index').toString().includes('case') &&
      getUserInput('index').toString().includes('default')
  );
```

# --seed--

## --seed-contents--

```js
const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  // Change code below this line

  // Change code above this line
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};
```

# --solutions--

```js
const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {

    case 'LOGIN':
      return {
        authenticated: true
      }

    case 'LOGOUT':
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};
```
