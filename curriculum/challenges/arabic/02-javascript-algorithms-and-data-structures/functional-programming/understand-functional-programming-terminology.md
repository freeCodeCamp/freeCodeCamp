---
id: 587d7b8e367417b2b2512b5c
title: Understand Functional Programming Terminology
challengeType: 1
forumTopicId: 301240
dashedName: understand-functional-programming-terminology
---

# --description--

كان لدى فريق FCC تقلبات مزاجية ويريد الآن نوعين من الشاي: الشاي الأخضر والشاي الأسود. حقائق عامة: تقلبات مزاج العميل شائعة جدًا.

بهذه المعلومات، سنحتاج إلى مراجعة دالة `getTea` من التحدي الأخير للتعامل مع مختلف طلبات الشاي. يمكنك تعديل `getTea` لقبول وظيفة (function) كوسيط (parameter) لتكون قادرة على تغيير نوع الشاي الذي تعيده. هذا يجعل `getTea` أكثر مرونة، ويعطي المبرمج المزيد من التحكم عندما يطلب العميل التغيير.

ولكن أولاً، دعونا نغطي بعض المصطلحات المتعلقة بالـ functions:

<dfn>Callbacks</dfn> هي ال functions التي تمرر إلى fuction أخرى لتحديد استدعاء تلك الـ function. ربما تكون قد رأيت انه قد تم تمريرها إلى methods أخرى ، على سبيل المثال في `filter`، تخبر callback function الجافاسكريبت بمعايير كيفية تصفية (filter) ال array.

ال functions التي يمكن تعيينها إلى متغير، او تمريرها إلى function أخر، أو تعاد من function أخر تماما مثل أي قيمة عادية أخرى، تسمى <dfn>first class</dfn>. في جافا سكريبت، جميع ال functions هي first class functions.

الوظيفة التي تأخذ الوظيفة كحجة، أو تنتج وظيفة كقيمة أنتاج، تسمى <dfn>وظيفة عالي التجريد (higher order function)</dfn>.

عندما يتم تمرير ال functions إلى function أخر أو إرجاعها منه، فإن تلك ال functions التي تم تمريرها أو إرجاعها يمكن أن تسمى <dfn>lambda</dfn>.

# --instructions--

قم بإعداد 27 كوبا من الشاي الأخضر و 13 كوب من الشاي الأسود وتخزينها في متغيرات `tea4GreenTeamFCC` و `tea4BlackTeamFCC` على التوالي. لاحظ أن دالة `getTea` قد تم تعديلها بحيث تأخذ ال function الآن كأول argument.

ملحوظة: البيانات (عدد أكواب الشاي) مقدمة كـ argument أخيرة. سوف نناقش هذا أكثر في دروس لاحقة.

# --hints--

يجب أن يحتوي متغير `tea4GreenTeamFCC` على 27 كوب من الشاي للفريق.

```js
assert(tea4GreenTeamFCC.length === 27);
```

يجب أن يحتوي متغير `tea4GreenTeamFCC` على أكواب الشاي الأخضر.

```js
assert(tea4GreenTeamFCC[0] === 'greenTea');
```

يجب أن يحتوي متغير `tea4BlackTeamFCC` على 13 كوب من الشاي للفريق.

```js
assert(tea4BlackTeamFCC.length === 13);
```

يجب أن يحتوي متغير `tea4BlackTeamFCC` على أكواب من الشاي الأسود.

```js
assert(tea4BlackTeamFCC[0] === 'blackTea');
```

# --seed--

## --seed-contents--

```js
// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = null;
const tea4BlackTeamFCC = null;
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);
```

# --solutions--

```js
const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'blackTea';

const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
```
