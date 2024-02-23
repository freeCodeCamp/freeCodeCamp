---
id: 5a24c314108439a4d4036146
title: ركّب (Map) الإرسال (Dispatch) في مِيزات (Props)
challengeType: 6
forumTopicId: 301432
dashedName: map-dispatch-to-props
---

# --description--

تستخدم الوظيفة `mapDispatchToProps()` لتوفير منشئي إجراءات (action creators) محددة لمكونات React الخاصة بك حتى يتمكنوا من إرسال إجراءات (dispatch actions) ضد متجر Redux. إنها مشابهة في التركيب الوظيفة `mapStateToProps()` التي كتبتها في التحدي الأخير. إنها ترسل كائنا يركّب إجراءات الإرسال (dispatch) إلى أسماء الخواص، التي تصبح مكونا `props`. مع ذلك، بدلاً من إعادة قطعة من `state`، ترجع كل خاصية وظيفة (function) تستدعي `dispatch` مع منشئ (action creator) العمل وأي بيانات عمل ذات صلة. لديك حق الوصول إلى هذا `dispatch` لأنه يُمرر إلى `mapDispatchToProps()` كحجة عند تعريف الوظيفة، تماما كما مررت `state` إلى `mapStateToProps()`. خلف المشاهد, React المرتبط إلى Redux يستخدم `store.dispatch()` في Redux لإجراء هذه الرسائل مع `mapDispatchToProps()`. يشبه هذه كيفية أستخدام `store.subscribe()` إلى المكونات (components) التي تركب في `state`.

على سبيل المثال، لديك منشئ إجراء `loginUser()` يأخذ `username` كحمولة للإجراء. هذا الكائن ينتج من `mapDispatchToProps()` لمنشئ هذا الإجراء سيبدو شيئا مثل:

```jsx
{
  submitLoginUser: function(username) {
    dispatch(loginUser(username));
  }
}
```

# --instructions--

يوفر محرر التعليمات البرمجية منشئ إجراء يسمى `addMessage()`. اكتب الوظيفة `mapDispatchToProps()` التي تأخذ `dispatch` كحجة، ثم ارجع كائن. يجب أن يكون هذا الكائن خاصيّة `submitNewMessage` التي تم تعيينها إلى وظيفة الإرسال (dispatch)، الذي يأخذ حِجَّة الرسالة الجديدة لإضافتها عندما ترسل `addMessage()`.

# --hints--

يجب أن ينتج `addMessage` كائن مع هُوِيَّتين `type` و `message`.

```js
assert(
  (function () {
    const addMessageTest = addMessage();
    return (
      addMessageTest.hasOwnProperty('type') &&
      addMessageTest.hasOwnProperty('message')
    );
  })()
);
```

يجب أن تكون `mapDispatchToProps` وظيفة function.

```js
assert(typeof mapDispatchToProps === 'function');
```

يجب أن تكون `mapDispatchToProps` كائن object.

```js
assert(typeof mapDispatchToProps() === 'object');
```

إرسال `addMessage` مع `submitNewMessage` من `mapDispatchToProps` يجب أن ينتج رسالة إلى وظيفة الإرسال.

```js
assert(
  (function () {
    let testAction;
    const dispatch = (fn) => {
      testAction = fn;
    };
    let dispatchFn = mapDispatchToProps(dispatch);
    dispatchFn.submitNewMessage('__TEST__MESSAGE__');
    return (
      testAction.type === 'ADD' && testAction.message === '__TEST__MESSAGE__'
    );
  })()
);
```

# --seed--

## --seed-contents--

```jsx
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

// Change code below this line
```

# --solutions--

```jsx
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

// Change code below this line

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: function(message) {
      dispatch(addMessage(message));
    }
  }
};
```
