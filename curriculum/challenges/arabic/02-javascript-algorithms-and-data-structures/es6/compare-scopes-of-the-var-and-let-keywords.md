---
id: 587d7b87367417b2b2512b40
title: مقارنة نطاقات var و let
challengeType: 1
forumTopicId: 301195
dashedName: compare-scopes-of-the-var-and-let-keywords
---

# --description--

إذا كانت `let` غير مألوف، تحقق <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/explore-differences-between-the-var-and-let-keywords" target="_blank" rel="noopener noreferrer nofollow">هذا التحدي عن أختلاف بين كلمة (<code>let</code>) وكلمة (<code>var</code>)</a>.

عندما تعلن متغير باستخدام مصطلح `var`، يكون للمتغير مجال شامل (global scope)، أو إذا اعلن عنه داخل وظيفة (function) فمجاله محدد (local scope).

يتصرف مصطلح `let` بالمثل، ولكن مع بعض الميزات الإضافية. عندما تعلن متغير باستخدام `let` داخل الكتلة أو تعبير أو عبارة، فنطاق المتغير يقتصر على تلك الكتلة (block) أو التعبير (statement) أو العبارة (expression).

على سبيل المثال:

```js
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
```

هنا ستعرض وحدة التحكم القيم `[0, 1, 2]` و `3`.

مع مصطلح `var`، يعلن `i` بشكل شامل. لذلك عندما ينفذ `i++`، فإنه يحدث المتغير الشامل. وهذا الكود مماثل لما يلي:

```js
var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
```

هنا ستعرض وحدة التحكم القيم `[0, 1, 2]` و `3`.

هذا السلوك سوف يسبب مشكلات إذا كنت تريد إنشاء وظيفة وتخزينها لاستخدامها لاحقاً داخل حلقة `for` تستخدم متغير `i`. هذا لأن الوظيفة المخزنة سوف تشير دائما إلى قيمة متغير `i` الشامل المحدث.

```js
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
```

هنا ستعرض وحدة التحكم القيمة `3`.

كما تري، `printNumTwo()` يطبع 3 وليس 2. هذا لأن القيمة التي عينت إلى `i` تُحدث, وتنتج `printNumTwo()` القيمة الشاملة `i` وليس القيمة التي احتواها `i` عندما أنشئت الوظيفة في حلقة التكرار. لا تتبع مصطلح `let` هذا السلوك:

```js
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
console.log(i);
```

هنا ستعرض وحدة التحكم القيمة `2`، وخطأ `i is not defined`.

`i` غير معروف لأنه لم يعلن في المجال الشامل (global scope). اعلن عنه فقط ضمن حلقة `for`. أنتج `printNumTwo()` القيمة الصحيحة لأن ثلاث متغيرات `i` مختلفة مع قيم فريدة (0, 1, و 2) أنشئت بواسطة `let` داخل كود الحلقة التكرارية.

# --instructions--

أصلح الكود بحيث إن `i` المعلن عنها في `if` تصبح متغير منفصل من `i` المعلن عنها في السطر الأول من الوظيفة. كن متيقن من عدم استخدام مصطلح `var` في أي مكان في كودك.

تم تصميم هذا التمرين لتوضيح الفرق بين كيفية تعيين المصطلحات `var` و `let` نطاقًا للمتغير المعلن. عند برمجة وظيفة مماثلة لتلك المستخدمة في هذه الممارسة، كثيرا ما يكون من الأفضل استخدام أسماء مختلفة للمتغيرات لتجنب الخلط.

# --hints--

يجب ألا تكون `var` موجودة في الكود.

```js
assert(!code.match(/var/g));
```

يجب أن يساوي المتغير `i` المعلن عنه في `if` المقطع النصي `block scope`.

```js
assert(code.match(/(i\s*=\s*).*\s*.*\s*.*\1('|")block\s*scope\2/g));
```

يجب أن ينتج `checkScope()` مقطع `function scope`

```js
assert(checkScope() === 'function scope');
```

# --seed--

## --seed-contents--

```js
function checkScope() {
  var i = 'function scope';
  if (true) {
    i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}
```

# --solutions--

```js
function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }

  console.log('Function scope i is: ', i);
  return i;
}
```
