---
id: 587d7db4367417b2b2512b91
title: تجاهل الحالة أثناء المطابقة (Ignore Case While Matching)
challengeType: 1
forumTopicId: 301344
dashedName: ignore-case-while-matching
---

# --description--

حتى الآن، لقد نظرت إلى regex للتطابق المقاطع النصية حرفيًا. ولكن في بعض الأحيان قد ترغب في مطابقة الاختلافات في الحالة.

Case و هي الحالة (او في بعض الاحيان letter case) هي الفرق بين uppercase letters و lowercase letters اي الاحرف الكبيرة و الاحرف الصغيرة. أمثلة للحروف الكبيرة هي `A` و `B` و `C`. أمثلة للحروف الصغيرة هي `a` و `b` و `c`.

يمكنك مطابقة الحالتين باستخدام ما يسمى بالـ flag. هناك flags أخرى ولكن هنا سوف تركز على الـ flag الذي يتجاهل الـ case و رمزه كالآتي `i`. يمكنك استخدامه من خلال إلحاقه بـ regex. مثال على استخدام هذا الـ flag هو `/ignorecase/i`. هذا الـ regex يمكن أن يتطابق مع الـ strings الآتية `ignorecase` و `igNoreCase` و `IgnoreCase`.

# --instructions--

اكتب `fccRegex` لمطابقة `freeCodeCamp` بغض النظر عن حالته. لا ينبغي أن يتطابق regex مع أي اختصارات أو اختلافات مع المسافات.

# --hints--

يجب أن يطابق الـ regex الخاص بك `freeCodeCamp`

```js
fccRegex.lastIndex = 0; 
assert(fccRegex.test('freeCodeCamp'));
```

يجب أن يطابق الـ regex الخاص بك `FreeCodeCamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FreeCodeCamp'));
```

يجب أن يطابق الـ regex الخاص بك `FreecodeCamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FreecodeCamp'));
```

يجب أن يطابق الـ regex الخاص بك `FreeCodecamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FreeCodecamp'));
```

يجب أن لا يطابق الـ regex الخاص بك `Free Code Camp`

```js
fccRegex.lastIndex = 0;
assert(!fccRegex.test('Free Code Camp'));
```

يجب أن يطابق الـ regex الخاص بك `FreeCOdeCamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FreeCOdeCamp'));
```

يجب أن لا يطابق الـ regex الخاص بك `FCC`

```js
fccRegex.lastIndex = 0;
assert(!fccRegex.test('FCC'));
```

يجب أن يطابق الـ regex الخاص بك `FrEeCoDeCamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FrEeCoDeCamp'));
```

يجب أن يطابق الـ regex الخاص بك `FrEeCodECamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FrEeCodECamp'));
```

يجب أن يطابق الـ regex الخاص بك `FReeCodeCAmp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FReeCodeCAmp'));
```

# --seed--

## --seed-contents--

```js
let myString = "freeCodeCamp";
let fccRegex = /change/; // Change this line
let result = fccRegex.test(myString);
```

# --solutions--

```js
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);
```
