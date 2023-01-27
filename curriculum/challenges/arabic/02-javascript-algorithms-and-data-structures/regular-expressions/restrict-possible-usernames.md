---
id: 587d7db8367417b2b2512ba2
title: تقييد أسماء المستخدمين المحتملة (Restrict Possible Usernames)
challengeType: 1
forumTopicId: 301363
dashedName: restrict-possible-usernames
---

# --description--

يتم استخدام أسماء المستخدمين في كل مكان على الإنترنت. هم الذين يعطون للمستخدمين هوية فريدة علي مواقعهم المفضلة.

تحتاج إلى التحقق من جميع أسماء المستخدمين في قاعدة البيانات. فيما يلي بعض القواعد البسيطة التي يتعين على المستخدمين اتباعها عند إنشاء اسم المستخدم الخاص بهم.

1) يمكن أن تستخدم أسماء المستخدمين أحرف أبجدية و رقمية فقط.

2) الأرقام في اسم المستخدم يجب أن تكون في النهاية. ويمكن أن يكون هناك رقما واحدا أو أكثر في النهاية. اسم المستخدم لا يمكن أن يبدأ برقم.

3) يمكن أن تكون أحرف اسم المستخدم صغيرة وكبيرة.

4) يجب أن يكون طول أسماء المستخدمين رمزين على الأقل. يمكن لاسم المستخدم المكون من حرفين استخدام الأحرف الأبجدية كرموز فقط.

# --instructions--

قم بتغيير الـ regex الآتي `userCheck` ليتناسب مع القيود المذكورة أعلاه.

# --hints--

يجب أن يطابق الـ regex الخاص بك `JACK`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('JACK'));
```

يجب أن لا يطابق الـ regex الخاص بك `J`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('J'));
```

يجب أن يطابق الـ regex الخاص بك `Jo`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('Jo'));
```

يجب أن يطابق الـ regex الخاص بك `Oceans11`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('Oceans11'));
```

يجب أن يطابق الـ regex الخاص بك `RegexGuru`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('RegexGuru'));
```

يجب أن لا يطابق الـ regex الخاص بك `007`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('007'));
```

يجب أن لا يطابق الـ regex الخاص بك `9`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('9'));
```

يجب أن لا يطابق الـ regex الخاص بك `A1`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('A1'));
```

يجب أن لا يطابق الـ regex الخاص بك `BadUs3rnam3`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('BadUs3rnam3'));
```

يجب أن يطابق الـ regex الخاص بك `Z97`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('Z97'));
```

يجب أن لا يطابق الـ regex الخاص بك `c57bT3`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('c57bT3'));
```

يجب أن يطابق الـ regex الخاص بك `AB1`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('AB1'));
```

يجب أن لا يطابق الـ regex الخاص بك `J%4`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('J%4'))
```

# --seed--

## --seed-contents--

```js
let username = "JackOfAllTrades";
let userCheck = /change/; // Change this line
let result = userCheck.test(username);
```

# --solutions--

```js
let username = "JackOfAllTrades";
const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let result = userCheck.test(username);
```
