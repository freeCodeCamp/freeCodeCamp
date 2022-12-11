---
id: 587d7db6367417b2b2512b9a
title: تطابق الرموز التي تحدث صفرًا أو أكثر من المرات (Match Characters that Occur Zero or More Times)
challengeType: 1
forumTopicId: 301351
dashedName: match-characters-that-occur-zero-or-more-times
---

# --description--

استخدم التحدي الأخير علامة `+` للبحث عن الرموز التي تحدث مرة أو أكثر. هناك أيضًا خيار يطابق الرموز التي تحدث صفرًا أو أكثر من المرات.

الرمز الذي يقوم بذلك هو النجمة: `*`.

```js
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);
```

بالترتيب، ستعيد الاستدعائات الثلاث لـ `match` القيم `["goooooooo"]` و `["g"]` و `null`.

# --instructions--

من أجل هذا التحدي، تم تهيئة `chewieQuote` كسلسلة `Aaaaaaaaaaaaaaaarrrgh!` خلف الكواليس. قم بإنشاء حرف `chewieRegex` الذي يستخدم الرمز `*` لمطابقة حرف كبير `A` يتبعه على الفور صفر أو أكثر من الأحرف الصغيرة `a` في `chewieQuote`. لا يحتاج regex الخاص بك إلى ال flags أو character classes، ولا ينبغي أن يتطابق مع أي من الاقتباسات الأخرى.

# --hints--

يجب أن يستخدم `chewieRegex` رمز `*` لمطابقة صفر أو أكثر من حرف `a`.

```js
assert(/\*/.test(chewieRegex.source));
```

يجب أن يطابق regex الخاص بك السلسلة `A` في `chewieQuote`.

```js
assert(result[0][0] === 'A');
```

يجب أن يطابق regex الخاص بك السلسلة `Aaaaaaaaaaaaaaaa` في `chewieQuote`.

```js
assert(result[0] === 'Aaaaaaaaaaaaaaaa');
```

يجب أن يطابق `chewieRegex` الخاص بك 16 رمزا في `chewieQuote`.

```js
assert(result[0].length === 16);
```

لا يجب أن يطابق الـ regex مع أي رمز في السلسلة `He made a fair move. Screaming about it can't help you.`

```js
assert(
  !"He made a fair move. Screaming about it can't help you.".match(chewieRegex)
);
```

لا يجب أن يطابق الـ regex مع أي رمز في السلسلة `Let him have it. It's not wise to upset a Wookiee.`

```js
assert(
  !"Let him have it. It's not wise to upset a Wookiee.".match(chewieRegex)
);
```

# --seed--

## --before-user-code--

```js
const chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
```

## --seed-contents--

```js
// Only change code below this line
let chewieRegex = /change/; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);
```

# --solutions--

```js
  let chewieRegex = /Aa*/;
  let result = chewieQuote.match(chewieRegex);
```
