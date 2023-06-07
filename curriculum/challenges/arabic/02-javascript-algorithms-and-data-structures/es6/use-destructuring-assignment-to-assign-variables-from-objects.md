---
id: 587d7b89367417b2b2512b49
title: Use Destructuring Assignment to Assign Variables from Objects
challengeType: 1
forumTopicId: 301215
dashedName: use-destructuring-assignment-to-assign-variables-from-objects
---

# --description--

Destructuring يسمح لك بتعيين اسم متغير جديد عند استخراج القيم. يمكنك القيام بذلك بوضع الاسم الجديد بعد colon و هي علامة النقطتين (:) عند تعيين القيمة.

استخدام نفس الـ object من المثال الأخير:

```js
const user = { name: 'John Doe', age: 34 };
```

إليك كيف يمكنك إعطاء أسماء متغيرة جديدة عند التعيين:

```js
const { name: userName, age: userAge } = user;
```

يمكنك قراءتها كـ "احصل على قيمة `user.name` وقم بتعيينه إلى متغير جديد يسمى `userName`" وما الي ذلك. قيمة `userName` ستكون السلسلة `John Doe`، وقيمة `userAge` ستكون الرقم `34`.

# --instructions--

استبدل التعينين بـ destructuring assignment معادلة لها. يجب أن يستمر في تعيين المتغيرين `highToday` و `highTomorrow` القيم `today` و `tomorrow` من الـ object الآتي `HIGH_TEMPERATURES`.

# --hints--

يجب عليك إزالة صيغة تعيين ES5.

```js
assert(
  !code.match(/highToday = HIGH_TEMPERATURES\.today/g) &&
    !code.match(/highTomorrow = HIGH_TEMPERATURES\.tomorrow/g)
);
```

يجب عليك استخدام الـ destructuring لإنشاء المتغير `highToday`.

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*(today\s*:\s*highToday[^}]*|[^,]*,\s*today\s*:\s*highToday\s*)}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g
  )
);
```

يجب عليك استخدام الـ destructuring لإنشاء المتغير `highTomorrow`.

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*(tomorrow\s*:\s*highTomorrow[^}]*|[^,]*,\s*tomorrow\s*:\s*highTomorrow\s*)}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g
  )
);
```

`highToday` يجب أن يساوي `77` و `highTomorrow` يجب أن يساوي `80`.

```js
assert(highToday === 77 && highTomorrow === 80);
```

# --seed--

## --seed-contents--

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

const highToday = HIGH_TEMPERATURES.today;
const highTomorrow = HIGH_TEMPERATURES.tomorrow; 

// Only change code above this line
```

# --solutions--

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
```
