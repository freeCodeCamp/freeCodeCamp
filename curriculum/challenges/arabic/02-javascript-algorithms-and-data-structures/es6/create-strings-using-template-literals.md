---
id: 587d7b8a367417b2b2512b4e
title: إنشاء المقاطع النصية باستخدام قوالب النصوص
challengeType: 1
forumTopicId: 301200
dashedName: create-strings-using-template-literals
---

# --description--

احدي الميزات الجديدة لـ ES6 هي <dfn>template literal</dfn>. هذا نوع خاص من الـ strings يجعل إنشاء سلاسل معقدة أسهل.

Template literals تتيح لك إنشاء strings متعددة السطور واستخدام ميزات الـ string interpolation لإنشاء strings.

انظر الي الكود أدناه:

```js
const person = {
  name: "Zodiac Hasbro",
  age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);
```

ستعرض وحدة التحكم السلاسل `Hello, my name is Zodiac Hasbro!` و `I am 56 years old.`.

لقد حدث الكثير من الأشياء هنا. أولاً، يستخدم المثال الـ backticks الآتية (`` ` ``)، وليس علامات الاقتباس (`'` أو `"`) لاحتواء المقطع النصي. ثانياً، لاحظ أن الـ string متعدد الأسطر في كل من الكود والناتج. هذا يوفر من إدخال `\n` داخل الـ strings. بناء الجملة `${variable}` المستخدم أعلاه هو placeholder. بشكل أساسي، لن تضطر إلى استخدام التسلسل مع عامل التشغيل `+` بعد الآن. لإضافة متغيرات إلى الـ strings، فقط قم بإسقاط المتغير في template string و حاوطه بـ `${` و `}`. وبالمثل، يمكنك تضمين عبارات أخرى في الـ string literal، على سبيل المثال `${a + b}`. هذه الطريقة الجديدة لإنشاء الـ strings تمنحك المزيد من المرونة لإنشاء strings قوية.

# --instructions--

استخدم template literal مع backticks لإنشاء array من سلاسل عناصر القائمة (`li`). يجب أن يكون نص كل عنصر من عناصر القائمة أحد عناصر الـ array من خاصية `failure` في كائن `result` وأن يحتوي على سمة `class` مع القيمة `text-warning`. يجب أن تقوم دالة `makeList` بإرجاع مجموعة من سلاسل عناصر القائمة.

قم باستخدام iterator method (أي نوع من الـ loops) للحصول على المخرجات المطلوبة (موضحة أدناه).

```js
[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]
```

# --hints--

`failuresList` يجب أن تكون array تحتوي على رسائل الـ `result failure`.

```js
assert(
  typeof makeList(result.failure) === 'object' && failuresList.length === 3
);
```

`failuresList` يجب أن تكون مساوية للمخرجات المحددة.

```js
assert(
  makeList(result.failure).every(
    (v, i) =>
      v === `<li class="text-warning">${result.failure[i]}</li>` ||
      v === `<li class='text-warning'>${result.failure[i]}</li>`
  )
);
```

وينبغي استخدام template strings و expression interpolation.

```js
(getUserInput) => assert(getUserInput('index').match(/(`.*\${.*}.*`)/));
```

ينبغي استخدام iterator.

```js
(getUserInput) =>
  assert(getUserInput('index').match(/for|map|reduce|forEach|while/));
```

# --seed--

## --seed-contents--

```js
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);
```

# --solutions--

```js
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  return arr.map(val => `<li class="text-warning">${val}</li>`);
}

const failuresList = makeList(result.failure);
```
