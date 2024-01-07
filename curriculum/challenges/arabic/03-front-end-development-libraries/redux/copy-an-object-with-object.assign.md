---
id: 5a24c314108439a4d403615b
title: نسخ كائن (Object) من كائن (Object) معين
challengeType: 6
forumTopicId: 301437
dashedName: copy-an-object-with-object-assign
---

# --description--

في التحديات العدّة السابقة تعاملت مع القائمة، ولكن هناك طرق للمساعدة في دعم عدم قدرة الحالة على التغيير عندما تكون الحالة `object` أيضًا. أداة مفيدة للتعامل مع الكائنات هي فائدة `Object.assign()`. `Object.assign()` يأخذ كائن مستهدف و كائنات من المصدر و خرائط الخصائص من الكائنات من المصدر إلى الكائن المستهدف. أي خصائص مطابقة يتم الكتابة عليها بواسطة الخصائص الموجودة في الكائنات من المصدر. يستخدم هذا السلوك عادة لصنع نسخ ضحله (shallow) من الكائنات عن طريق تمرير كائن فارغ كالحجة الأولى, يتبعها الكائن (الكائنات) الذي تريد نسخه. إليك مثال:

```js
const newObject = Object.assign({}, obj1, obj2);
```

هذا ينشئ `newObject` يكون `object` جديد، يحتوي على الخصائص الموجودة حاليا في `obj1` و `obj2`.

# --instructions--

تم تعديل حالة Redux والإجراءات للتعامل مع `object` من أجل `state`. حرر التعليمات البرمجية لإنتاج كائن `state` جديدة للإجراءات مع نوع `ONLINE`، الذي تعيين خاصية `status` إلى خاصية `online`. حاول استخدام `Object.assign()` لإكمال التحدي.

# --hints--

يجب أن يكون متجر Redux موجوداً ويبدأ مع حالة تساوي الكائن باسم `defaultState` المعلن عنه في السطر 1 من التعليمات البرمجية.

```js
assert(
  (function () {
    const expectedState = {
      user: 'CamperBot',
      status: 'offline',
      friends: '732,982',
      community: 'freeCodeCamp'
    };
    const initialState = store.getState();
    return DeepEqual(expectedState, initialState);
  })()
);
```

يجب أن يكون كلاً من `wakeUp` و `immutableReducer` وظائف (functions).

```js
assert(typeof wakeUp === 'function' && typeof immutableReducer === 'function');
```

إرسال إجراء من نوع `ONLINE` بتحديث قيمة حالة الخاصية `status` إلى `online` ولا ينبغي تغيير الحالة الأساسية.

```js
assert(
  (function () {
    const initialState = store.getState();
    const isFrozen = DeepFreeze(initialState);
    store.dispatch({ type: 'ONLINE' });
    const finalState = store.getState();
    const expectedState = {
      user: 'CamperBot',
      status: 'online',
      friends: '732,982',
      community: 'freeCodeCamp'
    };
    return isFrozen && DeepEqual(finalState, expectedState);
  })()
);
```

`Object.assign` يجب أن تستخدم لإنتاج حالة جديدة.

```js
(getUserInput) => assert(getUserInput('index').includes('Object.assign'));
```

# --seed--

## --seed-contents--

```js
const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      // Don't mutate state here or the tests will fail
      return
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);
```

# --solutions--

```js
const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      return Object.assign({}, state, {
        status: 'online'
      });
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);
```
