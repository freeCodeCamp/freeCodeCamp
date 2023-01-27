---
id: 587d7b89367417b2b2512b4a
title: Use Destructuring Assignment to Assign Variables from Nested Objects
challengeType: 1
forumTopicId: 301214
dashedName: use-destructuring-assignment-to-assign-variables-from-nested-objects
---

# --description--

يمكنك استخدام نفس المبادئ من الدرسين السابقين لعمل destructure للقيم من الـ nested objects او الكائنات المتداخلة.

استخدام object مشابه للأمثلة السابقة:

```js
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
```

إليك كيفية استخراج قيم خصائص الـ object وتعيينها للمتغيرات بنفس الاسم:

```js
const { johnDoe: { age, email }} = user;
```

واليك كيف يمكنك تعيين قيم خصائص الـ object إلى متغيرات بأسماء مختلفة:

```js
const { johnDoe: { age: userAge, email: userEmail }} = user;
```

# --instructions--

استبدل التعينين بـ destructuring assignment معادلة لها. يجب أن يستمر في تعيين المتغيرين `lowToday` و `highToday` القيم `today.low` و `today.high` من الـ object الآتي `LOCAL_FORECAST`.

# --hints--

يجب عليك إزالة صيغة تعيين ES5.

```js
assert(
  !code.match(/lowToday = LOCAL_FORECAST\.today\.low/g) &&
    !code.match(/highToday = LOCAL_FORECAST\.today.high/g)
);
```

يجب عليك استخدام الـ destructuring لإنشاء المتغير `lowToday`.

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*today\s*:\s*{\s*(low\s*:\s*lowToday[^}]*|[^,]*,\s*low\s*:\s*lowToday\s*)},?\s*}\s*=\s*LOCAL_FORECAST(;|\s+|\/\/)/g
  )
);
```

يجب عليك استخدام الـ destructuring لإنشاء المتغير `highToday`.

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*today\s*:\s*{\s*(high\s*:\s*highToday[^}]*|[^,]*,\s*high\s*:\s*highToday,?\s*)},?\s*}\s*=\s*LOCAL_FORECAST(;|\s+|\/\/)/g
  )
);
```

`lowToday` يجب أن يساوي `64` و `highToday` يجب أن يساوي `77`.

```js
assert(lowToday === 64 && highToday === 77);
```

# --seed--

## --seed-contents--

```js
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line

const lowToday = LOCAL_FORECAST.today.low;
const highToday = LOCAL_FORECAST.today.high;

// Only change code above this line
```

# --solutions--

```js
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

const { today: { low: lowToday, high: highToday }} = LOCAL_FORECAST;
```
