---
id: 5a24c314108439a4d4036155
title: إرسال بيانات الإجراء (Action Data) إلى المتجر
challengeType: 6
forumTopicId: 301448
dashedName: send-action-data-to-the-store
---

# --description--

لقد تعلمت الآن كيفية إرسال الإجراءات إلى متجر Redux، ولكن حتى الآن لم تحتوي هذه الإجراءات على أي معلومات غير `type`. يمكنك أيضا إرسال بيانات محددة مع إجراءاتك. والواقع أن هذا أمر شائع جدا, لأن الإجراءات تنشأ بالعادة من التفاعل بين المستعملين وتميل إلى حمل بعض البيانات مع الإجراءات. غالباً ما يحتاج متجر Redux إلى معرفة عن هذه البيانات.

# --instructions--

هناك `notesReducer()` أساسية و `addNoteText()` منشئ إجراءات معرف في محرر التعليمات البرمجية. إنهاء جسم وظيفة `addNoteText()` بحيث تنتج كائن `action`. يجب أن يتضمن الكائن `type` خاصية بقيمة `ADD_NOTE`، كما تم تعيين خاصية `text` إلى `note` البيانات التي انتقلت إلى منشئ الإجراء. عند استدعاء منشئ الإجراء، سوف تمر في ملاحظة محددة معلومات يمكنك الوصول إليها من أجل الكائن.

بعد ذلك، أكمل كتابة بيان `switch` في `notesReducer()`. تحتاج إلى إضافة حالة تتعامل مع إجراءات `addNoteText()`. يجب تشغيل هذه الحالة كلما كان هناك إجراء من نوع `ADD_NOTE` وينبغي أن تنشئ خاصية `text` في `action` الوارد يكون مثل `state` جديدة.

يتم إرسال الإجراء في الجزء السفلي من تعليمات برمجية. بمجرد الانتهاء منك، شغل التعليمات البرمجية وشاهد وحدة التحكم. هذا ما تحتاج إليه لإرسال بيانات محددة إلى المتجر (store) واستخدامه عند تحديث المتجر `state`.

# --hints--

منشئ الإجراءات `addNoteText` يجب أن يعيد كائن هُوِيَّات من `type` و `text`.

```js
assert(
  (function () {
    const addNoteFn = addNoteText('__TEST__NOTE');
    return addNoteFn.type === ADD_NOTE && addNoteFn.text === '__TEST__NOTE';
  })()
);
```

إرسال إجراء من نوع `ADD_NOTE` مع `addNoteText` يجب أن يقوم منشئ الإجراء بتحديث `state` إلى string الذي تم تمريره إلى منشئ الإجراء (action creator).

```js
assert(
  (function () {
    const initialState = store.getState();
    store.dispatch(addNoteText('__TEST__NOTE'));
    const newState = store.getState();
    return initialState !== newState && newState === '__TEST__NOTE';
  })()
);
```

# --seed--

## --seed-contents--

```js
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // Change code below this line

    // Change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // Change code below this line

  // Change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());
```

# --solutions--

```js
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // Change code below this line
    case ADD_NOTE:
      return action.text;
    // Change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // Change code below this line
  return {
    type: ADD_NOTE,
    text: note
  }
  // Change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello Redux!'));
console.log(store.getState());
```
