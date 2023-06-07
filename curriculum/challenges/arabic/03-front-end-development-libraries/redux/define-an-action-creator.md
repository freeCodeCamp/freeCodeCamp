---
id: 5a24c314108439a4d403614e
title: تعريف منشئ إجراء (Action Creator)
challengeType: 6
forumTopicId: 301441
dashedName: define-an-action-creator
---

# --description--

بعد إنشاء الإجراء، الخطوة التالية هي إرسال الإجراء إلى متجر Redux حتى يتمكن من تحديث حالته. في Redux، يمكنك تعريف منشئي (creators) الإجراء لتحقيق هذا. مُنشئ الإجراء هو ببساطة وظيفة JavaScript التي ترجع إجراء. بعبارة أخرى، يقوم منشئو العمل بإنشاء كائنات تمثل أحداث الإجراء.

# --instructions--

تعريف وظيفة تسمى `actionCreator()` التي ترجع الكائن `action` عند استدعائه.

# --hints--

وظيفة `actionCreator` يجب أن تكون موجودة.

```js
assert(typeof actionCreator === 'function');
```

تشغيل وظيفة `actionCreator` يجب أن ينتج الكائن `action`.

```js
assert(typeof action === 'object');
```

يجب أن ينتج `action` خاصية هُوِيَّة باسم `type` بقيمة `LOGIN`.

```js
assert(action.type === 'LOGIN');
```

# --seed--

## --seed-contents--

```js
const action = {
  type: 'LOGIN'
}
// Define an action creator here:
```

# --solutions--

```js
const action = {
  type: 'LOGIN'
}
const actionCreator = () => {
  return action;
};
```
