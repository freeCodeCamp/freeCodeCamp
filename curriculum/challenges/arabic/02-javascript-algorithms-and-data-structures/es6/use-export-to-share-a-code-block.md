---
id: 587d7b8c367417b2b2512b56
title: Use export to Share a Code Block
challengeType: 1
forumTopicId: 301219
dashedName: use-export-to-share-a-code-block
---

# --description--

تخيل مِلَفّ يسمى `math_functions.js` يحتوي على عدة وظائف (functions) ذات صلة بالعمليات الرياضية. واحد منها مخزن في متغير، `add`، والذي يأخذ رقمين ويعيد مجموعهم. تريد أن تستخدم الوظيفة (function) في عدة ملفات JavaScript المختلفة. من أجل مشاركتها مع هذه الملفات الأخرى، تحتاج أولاً الي ان تصدرها باستخدام `export`.

```js
export const add = (x, y) => {
  return x + y;
}
```

بالأعلى طريقة شائعة لتصدير وظيفة واحدة (export single function)، ولكن يمكنك تحقيق الشيء نفسه هكذا:

```js
const add = (x, y) => {
  return x + y;
}

export { add };
```

عند تصدير (export) متغير أو وظيفة، يمكنك استيراده (import) في مِلَفّ آخر واستخدامه دون الحاجة إلى إعادة كتابة الكود. يمكنك تصدير (export) أشياء متعددة بتكرار المثال الأول لكل شيء تريد تصديره، أو بوضعها كلها في export statement من المثال الثاني، مثل هذا:

```js
export { add, subtract };
```

# --instructions--

هناك وظيفتان متعلقتين بالمقاطع النصية (strings) في المحرر. قم بعمل export لكليهما باستخدام الطريقة التي تختارها.

# --hints--

يجب عليك تصدير `uppercaseString` بشكل صحيح.

```js
assert(
  code.match(
    /(export\s+const\s+uppercaseString|export\s*{\s*(uppercaseString[^}]*|[^,]*,\s*uppercaseString\s*)})/g
  )
);
```

يجب عليك تصدير `lowercaseString` بشكل صحيح.

```js
assert(
  code.match(
    /(export\s+const\s+lowercaseString|export\s*{\s*(lowercaseString[^}]*|[^,]*,\s*lowercaseString\s*)})/g
  )
);
```

# --seed--

## --seed-contents--

```js
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}
```

# --solutions--

```js
export const uppercaseString = (string) => {
  return string.toUpperCase();
}

export const lowercaseString = (string) => {
  return string.toLowerCase()
}
```
