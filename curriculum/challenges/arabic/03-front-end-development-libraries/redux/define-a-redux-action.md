---
id: 5a24c314108439a4d403614d
title: تحديد إجراء Redux
challengeType: 6
forumTopicId: 301440
dashedName: define-a-redux-action
---

# --description--

وبما أن Redux هو framework لإدارة الحالة (state)، فإن تحديث الحالة (state) هو أحد مهامها الأساسية. في Redux، يتم تشغيل جميع تحديثات الحالة (state) عن طريق إرسال الإجراءات (actions). الإجراء (action) هو ببساطة كائن JavaScript الذي يحتوي على معلومات حول إجراء حدث الذي وقع. يستقبل متجر Redux هذه العناصر الإجرائية (action)، ثم تحديث حالته (state) وفقاً لذلك. وفي بعض الأحيان يحمل إجراء Redux أيضا بعض البيانات. على سبيل المثال، يحمل الإجراء (action) اسم مستخدم بعد تسجيل دخول المستخدم. في حين أن البيانات اختيارية، يجب أن تحمل الإجراءات خاصية `type` التي تحدد 'نوع' الإجراء الذي وقع.

فكر إن الإجراءات Redux كمراسلين يسليمون معلومات عن الأحداث التي تقع في التطبيق الخاص بك فى متجر Redux. ثم يقوم المتجر (store) بأعمال تحديث للحالة (state) استناداً على الإجراء (action) الذي وقع.

# --instructions--

كتابة إجراء Redux بسيط مثل الإعلان عن كائن ذو خاصية نوعية. إعلان كائن `action` وإعطائه خاصية `type` مجموعة إلى السلسلة `'LOGIN'`.

# --hints--

يجب أن يكون كائن `action` موجود.

```js
assert(
  (function () {
    return typeof action === 'object';
  })()
);
```

يجب أن يحتوي الكائن `action` على خاصية هُوِيَّة `type` بقيمة `LOGIN`.

```js
assert(
  (function () {
    return action.type === 'LOGIN';
  })()
);
```

# --seed--

## --seed-contents--

```js
// Define an action here:
```

# --solutions--

```js
const action = {
  type: 'LOGIN'
}
```
