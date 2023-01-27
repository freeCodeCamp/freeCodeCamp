---
id: 5a24c314108439a4d4036156
title: استخدام البرامج الوسيط (Middleware) للتعامل مع الإجراءات المتزامنة (Asynchronous Actions)
challengeType: 6
forumTopicId: 301451
dashedName: use-middleware-to-handle-asynchronous-actions
---

# --description--

وقد تجنبت هذه التحديات حتى الآن مناقشة الإجراءات غير المتزامنة، ولكنها جزء لا يمكن تجنبه من تطوير الشبكة الإلكترونية. في مرحلة ما ستحتاج إلى استدعاء نُقَط النهاية غير متزامنة في تطبيق Redux الخاص بك، لذلك كيف تتعامل مع هذه الأنواع من الطلبات؟ Redux يوفر وسيط (middleware) مصمم خصيصاً لهذا الغرض، يسمى Redux Thunk middleware. إليك وصف موجز لكيفية استخدام هذا مع Redux.

لتضمين Redux Thunk middleware، يمكنك تمريره كحجة إلى `Redux.applyMiddleware()`. ثم يتم تقديم هذا التعبير كحجة اختيارية ثانية لوظيفة `createStore()`. ألقي النَّظْرَة على التعليمات البرمجية في أسفل المحرر لرؤية هذا. ثم لإنشاء إجراء غير متزامن، يمكنك إرجاع وظيفة في منشئ العمل الذي يأخذ `dispatch` كحجة. في إطار هذه الوظيفة، يمكنك إرسال الإجراءات وتنفيذ طلبات غير متزامنة.

في هذا المثال، يتم محاكاة طلب غير متزامن مع مكالمة `setTimeout()`. من الشائع إرسال (dispatch) إجراء (action) قبل الشروع في أي سلوك غير متزامن (asynchronous), حتى يتعرف state تطبيقك على بعض البيانات مطلوبة (هذه state يمكن أن تعرض أيقونة التحميل, مثلاً). بعد ذلك، بمجرد تلقي البيانات، ارسل إجراء آخر يحمل البيانات كحمولة مربوطة بالمعلومات التي تم إكمالها.

تذكر أنك تمرير `dispatch` كحجة إلى منشئ العمل الخاص هذا. هذا ما ستستخدمه لإرسال إجراءاتك، أنت ببساطة تمرير الإجراء قاصدًا إلى dispatch، ويقوم البرنامَج الوسيط (Middleware) بالقيام بالباقي.

# --instructions--

كتابة كلا الرسالتين في `handleAsync()` منشئ الإجراء. إرسال `requestingData()` قبل `setTimeout()` (لمحاكاة مكالمة API). ثم بعد تلقي البيانات (زائفة)، أرسل إجراء `receivedData()`، مرورا في هذه البيانات. الآن أنت تعرف كيفية التعامل مع الإجراءات غير المتزامنة في Redux. وكل شيء آخر لا يزال يتصرف كما كان من قبل.

# --hints--

يجب أن ينتج إجراء `requestingData` كائن من نوع مساو لقيمة `REQUESTING_DATA`.

```js
assert(requestingData().type === REQUESTING_DATA);
```

يجب أن ينتج إجراء `receivedData` كائن من نوع مساو لقيمة `RECEIVED_DATA`.

```js
assert(receivedData('data').type === RECEIVED_DATA);
```

`asyncDataReducer` يجب أن تكون وظيفة function.

```js
assert(typeof asyncDataReducer === 'function');
```

إرسال `requestingData` يجب أن يقوم منشئ الإجراءات بتحديث خاصية `state` المخزنة لجلب `true`.

```js
assert(
  (function () {
    const initialState = store.getState();
    store.dispatch(requestingData());
    const reqState = store.getState();
    return initialState.fetching === false && reqState.fetching === true;
  })()
);
```

إرسال `handleAsync` يجب أن يرسل إجراء طلب البيانات ثم يرسل إجراء البيانات المستلمة بعد تأخير.

```js
assert(
  (function () {
    const noWhiteSpace = __helpers.removeWhiteSpace(handleAsync.toString());
    return (
      noWhiteSpace.includes('dispatch(requestingData())') === true &&
      noWhiteSpace.includes('dispatch(receivedData(data))') === true
    );
  })()
);
```

# --seed--

## --seed-contents--

```js
const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

const handleAsync = () => {
  return function(dispatch) {
    // Dispatch request action here

    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      // Dispatch received data action here

    }, 2500);
  }
};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);
```

# --solutions--

```js
const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

const handleAsync = () => {
  return function(dispatch) {
    dispatch(requestingData());
    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      dispatch(receivedData(data));
    }, 2500);
  }
};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);
```
