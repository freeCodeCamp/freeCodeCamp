---
id: 5a24c314108439a4d4036153
title: تسجيل مستمع المتجر (Store Listener)
challengeType: 6
forumTopicId: 301446
dashedName: register-a-store-listener
---

# --description--

طريقة أخرى لديك حق الوصول إليها على الكائن `store` في Redux هي `store.subscribe()`. هذا يسمح لك باشتراك وظائف المستمع في المتجر، التي يتم استدعاؤها كلما تم إرسال إجراء ضد المتجر. أحد الاستخدامات البسيطة لهذه الطريقة هو أرتباط وظيفة في متجرك تبسط تسجيل رسالة في كل مرة يتم فيها تلقي إجراء ويتم تحديث المتجر (store).

# --instructions--

اكتب وظيفة رد الاتصال الذي تزيد المتغير العالمي `count` في كل مرة يتلقى فيها المتجر إجراء، وتمرير هذه الوظيفة إلى طريقة `store.subscribe()`. سترى أن `store.dispatch()` يستدعي ثلاث مرات على التوالي، في كل مرة يمر قصداً في كائن الإجراء. مشاهدة إخراج وحدة التحكم بين إرسال الإجراءات لرؤية التحديثات.

# --hints--

يجب أن يزيد إرسال (Dispatching) الإجراء (action) المسمى `ADD` من المتجر store الحالة (state) بقيمة `1`.

```js
assert(
  (function () {
    const initialState = store.getState();
    store.dispatch({ type: 'ADD' });
    const newState = store.getState();
    return newState === initialState + 1;
  })()
);
```

يجب أن تكون هناك وظيفة مستمع (listener function) مشتركة في المتجر باستخدام `store.subscribe`.

```js
(getUserInput) => assert(getUserInput('index').match(/store\s*\.\s*subscribe\(/gm));
```

يجب أن يتلقى `store.subscribe` وظيفة.

```js
(getUserInput) => assert(getUserInput('index').match(/(\s*function\s*)|(\s*\(\s*\)\s*=>)/gm)) 
```

إعادة الاتصال إلى `store.subscribe` يجب أن تزيد أيضا متغير `count` العام عندما يتم تحديث المتجر.

```js
assert(store.getState() === count);
```

# --seed--

## --before-user-code--

```js
count = 0;
```

## --seed-contents--

```js
const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

// Change code below this line

// Change code above this line

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
```

# --solutions--

```js
const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);
 let count = 0;
// Change code below this line

store.subscribe( () =>
 {
 count++;
 }
);

// Change code above this line

store.dispatch({type: ADD});
store.dispatch({type: ADD});
store.dispatch({type: ADD});
```
