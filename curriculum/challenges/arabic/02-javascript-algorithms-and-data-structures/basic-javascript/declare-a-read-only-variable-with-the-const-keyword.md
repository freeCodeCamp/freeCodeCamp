---
id: 587d7b87367417b2b2512b41
title: تعريف متغير للقراءة ثابت باستخدام كلمة Const
challengeType: 1
forumTopicId: 301201
dashedName: declare-a-read-only-variable-with-the-const-keyword
---

# --description--

لا يكون أستخدام كلمة `let` الطريقة الجديدة الوحيدة لتعريف المتغيرات. في ES6، يمكنك أيضا تعريف المتغيرات باستخدام كلمة `const`.

تحتوي `const` كل الميزات الرائعة الموجودة في `let`، مع المكافأة المضافة و هي أن المتغيرات المعرفة بواسطة `const` ثابته. هي قيمة ثابتة، مما يعني أنه بمجرد تعيين متغير باستخدام `const`، فلا يمكن إعادة تعيينه:

```js
const FAV_PET = "Cats";
FAV_PET = "Dogs";
```

سيتم عرض خطأ في وحدة التحكم بسبب إعادة تعيين قيمة `FAV_PET`.

يجب عليك دائماً تسمية المتغيرات التي لا ترد إعادة تعيينها باستخدام كلمة `const`. يساعد هذا عندما تحاول بالخطأ إعادة تعيين متغير من المفترض أن يظل ثابتًا.

**ملاحظة:** من الشائع عند المطورين استخدام معرّفات uppercase للمتغيرات ذات القيم الثابتة و lowercase أو camelCase للقيم القابلة للتغيير (objects و arrays). سوف تتعلم المزيد عن الكائنات والقوائم و القيم الثابتة والقابلة للتغيير في تحديات لاحقة. أيضا في التحديات اللاحقة، سترى أمثلة لمعرِّفات المتغيرات uppercase أو lowercase أو camelCase.

# --instructions--

غيّر التعليمات البرمجية بحيث يتم تعريف جميع المتغيرات باستخدام `let` أو `const`. استخدم `let` عندما ترغب بتغير المتغير، و استخدم `const` عندما ترغب ببقي المتغير ثابتاً. كذلك اعد تسمية المتغيرات المعرفة باستخدام `const` لتتوافق مع الممارسات الشائعة. لا تغيير المقاطع المعينة للمتغيرات.

# --hints--

يجب ألا تكون `var` موجودة في التعليمات البرمجية.

```js
assert.notMatch(code, /var/g);
```

يجب عليك تغيير `fCC` لتكون كلها uppercase.

```js
assert.match(code, /(FCC)/);
assert.notMatch(code, /(fCC)/);
```

يجب أن يكون متغير `FCC` ثابت تم تعريفه باستخدام `const`.

```js
assert.match(code, /const\s+FCC/);
```

لا ينبغي تغيير المقطع المسندة في المتغير `FCC`.

```js
assert.equal(FCC, 'freeCodeCamp');
```

يجب أن يتم تعريف `fact` باستخدام `let`.

```js
assert.match(code, /(let\s+fact)/g);
```

يجب تغيير `console.log` لطباعة المتغيرات `FCC` و `fact`.

```js
assert.match(code, /console\.log\(\s*FCC\s*\,\s*fact\s*\)\s*;?/g);
```

# --seed--

## --seed-contents--

```js
var fCC = "freeCodeCamp"; // Change this line
var fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(fCC, fact); // Change this line
```

# --solutions--

```js
const FCC = "freeCodeCamp";
let fact = "is cool!";

fact = "is awesome!";
console.log(FCC, fact);
```
