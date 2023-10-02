---
id: ab6137d4e35944e21037b769
title: تكبير الحرف الأول لكل كلمة في الجملة
challengeType: 1
forumTopicId: 16088
dashedName: title-case-a-sentence
---

# --description--

أنشئ مقطع (string) مقدم مع تكبير الحرف الأول (capitalize) من كل كلمة في الجملة. تحقق أن بقية حروف الكلمة في حالة عادية (lower case).

لأغراض هذا التمرين، يجب عليك أيضًا تكبير حروف كلمات التوصيل مثل `the` و `of`.

# --hints--

`titleCase("I'm a little tea pot")` يجب أن ينشئ مقطع نصية.

```js
assert(typeof titleCase("I'm a little tea pot") === 'string');
```

`titleCase("I'm a little tea pot")` يجب أن ينتج المقطع `I'm A Little Tea Pot`.

```js
assert(titleCase("I'm a little tea pot") === "I'm A Little Tea Pot");
```

`titleCase("sHoRt AnD sToUt")` يجب أن ينشئ المقطع `Short And Stout`.

```js
assert(titleCase('sHoRt AnD sToUt') === 'Short And Stout');
```

`titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")` يجب أن ينشئ المقطع `Here Is My Handle Here Is My Spout`.

```js
assert(
  titleCase('HERE IS MY HANDLE HERE IS MY SPOUT') ===
    'Here Is My Handle Here Is My Spout'
);
```

# --seed--

## --seed-contents--

```js
function titleCase(str) {
  return str;
}

titleCase("I'm a little tea pot");
```

# --solutions--

```js
function titleCase(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()).join(' ');
}

titleCase("I'm a little tea pot");
```
