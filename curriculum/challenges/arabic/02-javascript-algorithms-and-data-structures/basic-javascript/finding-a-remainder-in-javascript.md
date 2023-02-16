---
id: 56533eb9ac21ba0edf2244ae
title: العثور على باقي القسمة باستخدام JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWP24Ub'
forumTopicId: 18184
dashedName: finding-a-remainder-in-javascript
---

# --description--

مشغل <dfn>المتبقي</dfn> الآتي `%` يعطي الجزء المتبقي من عملية تقسيم رقمين.

**مثال**

<blockquote>5 % 2 = 1 لأن <br>Math.floor(5 / 2) = 2 (الناتج)<br>2 * 2 = 4<br>5 - 4 = 1 (المتبقي)</blockquote>

**الاستخدام**  
في الرياضيات، يمكن التحقق من أن الرَّقَم زوجي أو فردي عن طريق التحقق من بقية قسمة العدد على `2`.

<blockquote>17 % 2 = 1 (17 فردي)<br>48 % 2 = 0 (48 زوجي)</blockquote>

**ملاحظة:** مشغل <dfn>المتبقي</dfn> يشار إليه أحياناً بشكل غير صحيح على أنه مشغل بالمائة (modulus operator). إنه شبيه جداً بالـمائه (modulus)، ولكنه لا يعمل بشكل صحيح مع الأعداد السالبة.

# --instructions--

عيّن `remainder` مساوية لبقية `11` مقسوما على `3` باستخدام مشغل <dfn>المتبقي</dfn> الآتي (`%`).

# --hints--

يجب تهيئة المتغير `remainder`. بمعنى آخر، يجب أن يكون initialized

```js
assert(/(const|let|var)\s+?remainder/.test(code));
```

يجب أن تكون قيمة `remainder` تساوي `2`

```js
assert(remainder === 2);
```

يجب عليك استخدام المشغل `%`

```js
assert(/\s+?remainder\s*?=\s*?.*%.*;?/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(y){return 'remainder = '+y;})(remainder);
```

## --seed-contents--

```js
const remainder = 0;
```

# --solutions--

```js
const remainder = 11 % 3;
```
