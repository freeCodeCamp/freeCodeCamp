---
id: 56533eb9ac21ba0edf2244de
title: إضافة خِيار افتراضي (Default) في عبارات التبديل (Switch)
challengeType: 1
videoUrl: 'https://scrimba.com/c/c3JvVfg'
forumTopicId: 16653
dashedName: adding-a-default-option-in-switch-statements
---

# --description--

في عبارة `switch` قد لا تكون قادراً على تحديد جميع القيم المحتملة كعبارات `case`. بدلاً من ذلك، يمكنك إضافة عبارة `default` التي سيتم تنفيذها إذا لم يتم العثور على عبارات `case` مطابقة. فكر بالأمر مثل العبارة `else` في `if/else`.

يجب أن تكون عبارة `default` آخر حالة.

```js
switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}
```

# --instructions--

اكتب عبارة التبديل لتعيين `answer` للشروط التالية:  
`a` - `apple`  
`b` - `bird`  
`c` - `cat`  
`default` - `stuff`

# --hints--

`switchOfStuff("a")` يجب أن يعيد مقطع نصي (string) باسم `apple`

```js
assert(switchOfStuff('a') === 'apple');
```

`switchOfStuff("b")` يجب أن ينتج مقطع نصي (string) باسم `bird`

```js
assert(switchOfStuff('b') === 'bird');
```

`switchOfStuff("c")` يجب أن ينتج مقطع نصي (string) باسم `cat`

```js
assert(switchOfStuff('c') === 'cat');
```

`switchOfStuff("d")` يجب أن ينتج مقطع نصي (string) باسم `stuff`

```js
assert(switchOfStuff('d') === 'stuff');
```

`switchOfStuff(4)` يجب أن ينتج مقطع نصي (string) باسم `stuff`

```js
assert(switchOfStuff(4) === 'stuff');
```

يجب ألا تستخدم أي عبارات `if` أو `else`

```js
assert(!/else/g.test(code) || !/if/g.test(code));
```

يجب أن تستخدم عبارة `default`

```js
assert(switchOfStuff('string-to-trigger-default-case') === 'stuff');
```

يجب أن يكون لديك في الأقل ٣ عبارات `break`

```js
assert(code.match(/break/g).length > 2);
```

# --seed--

## --seed-contents--

```js
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

switchOfStuff(1);
```

# --solutions--

```js
function switchOfStuff(val) {
  let answer = "";

  switch(val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
  }
  return answer;
}
```
