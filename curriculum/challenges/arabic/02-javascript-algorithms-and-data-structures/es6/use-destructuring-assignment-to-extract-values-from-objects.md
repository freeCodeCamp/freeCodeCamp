---
id: 5cfa550e84205a357704ccb6
title: Use Destructuring Assignment to Extract Values from Objects
challengeType: 1
forumTopicId: 301216
dashedName: use-destructuring-assignment-to-extract-values-from-objects
---

# --description--

<dfn>Destructuring assignment</dfn> هي syntax خاص في ES6، لتعيين القيم المأخوذة مباشرة من object.

انظر إلى مثال كود ES5 التالي:

```js
const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;
```

`name` ستكون له قيمة السلسلة `John Doe`، و `age` سيكون الرقم `34`.

إليك بيان تعيين (assignment statement) معادل باستخدام ES6 destructuring syntax:

```js
const { name, age } = user;
```

مرة أخرى، `name` سيكون له قيمة للسلسلة `John Doe`، و `age` سيكون الرقم `34`.

هنا، سيتم إنشاء متغيرات `name` و `age` وتعيين القيم الخاصة بها من كائن `user`. يمكنكم أن تروا كم هذا افضل بكثير.

يمكنك استخراج العديد أو القليل من القيم من الـ object كما تريد.

# --instructions--

استبدل التعينين بـ destructuring assignment معادلة لها. يجب أن يستمر في تعيين المتغيرين `today` و `tomorrow` القيم `today` و `tomorrow` من الـ object الآتي `HIGH_TEMPERATURES`.

# --hints--

يجب عليك إزالة صيغة تعيين ES5.

```js
assert(
  !code.match(/today\s*=\s*HIGH_TEMPERATURES\.(today|tomorrow)/g)
);
```

يجب عليك استخدام الـ destructuring لإنشاء المتغير `today`.

```js
assert(
  code.match(/(var|let|const)\s*{\s*(today[^}]*|[^,]*,\s*today)\s*}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g)
);
```

يجب عليك استخدام الـ destructuring لإنشاء المتغير `tomorrow`.

```js
assert(
  code.match(/(var|let|const)\s*{\s*(tomorrow[^}]*|[^,]*,\s*tomorrow)\s*}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g)
);
```

`today` يجب أن يساوي `77` و `tomorrow` يجب أن يساوي `80`.

```js
assert(today === 77 && tomorrow === 80);
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

const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow;

// Only change code above this line
```

# --solutions--

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today, tomorrow } = HIGH_TEMPERATURES;
```
