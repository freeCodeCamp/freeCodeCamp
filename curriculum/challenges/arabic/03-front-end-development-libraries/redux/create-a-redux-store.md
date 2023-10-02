---
id: 5a24c314108439a4d403614b
title: إنشاء متجر Redux
challengeType: 6
forumTopicId: 301439
dashedName: create-a-redux-store
---

# --description--

Redux هو framework لإدارة الحالة (state) التي يمكن استخدامه مع عدد من تكنولوجيات الويب المختلفة، بما في ذلك React.

في Redux، هناك كائن حالة (state object) واحد مسؤول عن حالة (state) تطبيقك بالكامل. هذا يعني إذا كان لديك تطبيق React يحتوي على عشرة مكونات (components)، ولكل مكون حالته (state) المحلية الخاصة به، سيتم تحديد حالة تطبيقك بالكامل من قبل كائن حالة (state object) وحيد موجود في `store` فى Redux. هذا هو أول مبدأ هام يمكن فهمه عند تعلم Redux: متجر Redux هو المصدر الوحيد للحقيقة (single source of truth) عندما يتعلق الأمر بحالة (state) التطبيق.

وهذا يعني أيضًا أنه في أي وقت يرغب أي جزء من تطبيقك في تحديث الحالة، **يجب أن يفعل ذلك** بواسطة متجر Redux. التدفق الأحادي الاتجاه للبيانات (unidirectional data flow) يجعل من الأسهل تتبع إدارة الحالة في تطبيقك.

# --instructions--

يكون `store` في Redux, كائن (object) يحمل ويدير `state` في التطبيق. هناك طريقة تسمى `createStore()` في كائن Redux، الذي تستخدمه لإنشاء `store` في Redux. هذه الطريقة تستخدم وظيفة `reducer` كحجة مطلوبة. تتم تغطية وظيفة `reducer` في تحد لاحق، وقد تم تحديدها لك فعلًا في محرر التعليمات البرمجية. ببساطة تأخذ `state` كوسيط (argument) و تنتج `state`.

إعلان متغير `store` عيينه إلى طريقة `createStore()`، مرورا في `reducer` كحجة.

**ملاحظة:** الكود في المحرر يستخدم بناء الجملة الافتراضي في ES6 لتهيئة هذه الحالة (reducer) للاحتفاظ بقيمة `5`. إذا لم تكن على دراية بالمعطيات الافتراضية (default arguments)، يمكنك الرجوع إلى قسم <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/set-default-parameters-for-your-functions" target="_blank" rel="noopener noreferrer nofollow">ES6 في المنهج الدراسي</a> الذي يغطي هذا الموضوع.

# --hints--

يجب أن يوجد متجر Redux.

```js
assert(typeof store.getState === 'function');
```

يجب أن يكون للمتجر Redux حالة بقيمة 5.

```js
assert(store.getState() === 5);
```

# --seed--

## --seed-contents--

```js
const reducer = (state = 5) => {
  return state;
}

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:
```

# --solutions--

```js
const reducer = (state = 5) => {
  return state;
}

const store = Redux.createStore(reducer);
```
