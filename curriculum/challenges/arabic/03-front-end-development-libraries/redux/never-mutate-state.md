---
id: 5a24c314108439a4d4036158
title: لا تغير الحالة أبدا (Mutate State)
challengeType: 6
forumTopicId: 301445
dashedName: never-mutate-state
---

# --description--

وتصف هذه التحديات الأخيرة عدة أساليب لإنفاذ المبدأ الرئيس المتمثل في عدم قابلية تغيير الحالة (state immutability) في عملية Redux. تعني الحالة غير المتغيرة لا تعدل الحالة بشكل قصداً، بدلاً من ذلك، يمكنك إعادة نسخة جديدة من الحالة.

إذا أخذت لقطة (snapshot) عن حالة تطبيق Redux على مر الزمن، سترى شيئا مثل `state 1`، و`state 2`، و`state 3`، و`state 4`، وكذلك `...`، حيث يمكن لكل الحالة أن تكون مماثلة للحالة الأخيرة، ولكن كل منها جزء مستقل من البيانات. هذا عدم التغير، في الواقع، هو ما يوفر خاصيات مثل تصحيح أخطاء السفر الزمني (time-travel debugging) الذي ربما سمعتم عنها.

لا يؤدي Redux بشكل نشيطٌ إلى فرض عدم قابلية الحالة للتغيير في متجرها (store) أو تخفيضها (reducers)، وهذه المسؤولية تقع على عاتق المبرمج. لحسن الحظ، يوفر JavaScript (بخصوص ES6) عدة أدوات مفيدة يمكنك استخدامها لفرض عدم قابلية وضعك للتغيير، سواء كان `string` أو `number`, أو `array`, أو `object`. لاحظ أن strings والأرقام هي قيم بدائية ولا يمكن تغييرها بالطبيعة. وبعبارة أخرى، فإن 3 هي دائما 3. لا يمكنك تغيير قيمة الرَّقَم 3. غير أنه يمكن تغيير `array` أو `object`. من الناحية العملية، ربما ستتألف حالتك من `array` أو `object`، وبما أن هذه الهياكل هي هياكل بيانات (data structures) مفيدة لتمثيل أنواع عدّة من المعلومات.

# --instructions--

هناك `store` و `reducer` في محرر التعليمات البرمجية لإدارة العناصر المراد القيام بها (to-do). إنهاء كتابة منطق `ADD_TO_DO` في الحد لإلحاق جديد للحالة. هناك بعض الطرق لتحقيق ذلك باستخدام JavaScript المعتاد أو ES6. انظر إذا كنت تستطيع العثور على طريقة لإعادة قائمة جديدة مع العنصر من `action.todo` الملحق بالنهاية.

# --hints--

يجب أن يكون متجر Redux موجوداً وأن يهيئ مع حالة مساوية لقائمة `todos` في محرر الكود البرمجي.

```js
assert(
  (function () {
    const todos = [
      'Go to the store',
      'Clean the house',
      'Cook dinner',
      'Learn to code'
    ];
    const initialState = store.getState();
    return (
      Array.isArray(initialState) && initialState.join(',') === todos.join(',')
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
    const expectedState = [
      'Go to the store',
      'Clean the house',
      'Cook dinner',
      'Learn to code',
      '__TEST__TO__DO__'
    ];
    return isFrozen && DeepEqual(finalState, expectedState);
  })()
);
```

# --seed--

## --seed-contents--

```js
const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      // Don't mutate state here or the tests will fail
      return
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);
```

# --solutions--

```js
const ADD_TO_DO = 'ADD_TO_DO';

const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      return state.concat(action.todo);
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);
```
