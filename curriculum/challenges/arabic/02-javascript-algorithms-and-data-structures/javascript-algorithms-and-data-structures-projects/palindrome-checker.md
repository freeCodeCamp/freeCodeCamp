---
id: aaa48de84e1ecc7c742e1124
title: مدقق لمعاكس المقطع النصي
challengeType: 5
forumTopicId: 16004
dashedName: palindrome-checker
---

# --description--

قم بإرجاع `true` إذا كان الـ string المعطي هو palindrome. خلاف ذلك، قم بإرجاع `false`.

<dfn>palindrome</dfn> هي كلمة أو جملة يتم تهجئتها بنفس الطريقة من بدايتها او من نهايتها ، مع تجاهل علامات الترقيم، والحالة، والمسافات.

**ملاحظة:** ستحتاج إلى إزالة **جميع الأحرف غير الأبجدية والرقمية** (علامات الترقيم، المساحات والرموز) وتحويل كل شيء إلى نفس الحالة (lower او upper case) من أجل التحقق من وجود الـ palindromes.

سنمرر strings بتنسيقات مختلفة ، مثل `racecar` و `RaceCar` و `race CAR` وغيرهم.

سنمرر أيضًا strings برموز خاصة ، مثل `2A3*3a2` و `2A3 3a2` و `2_A3*3#A2`.

# --hints--

`palindrome("eye")` يجب أن يعيد boolean.

```js
assert(typeof palindrome('eye') === 'boolean');
```

`palindrome("eye")` يجب أن يعيد `true`.

```js
assert(palindrome('eye') === true);
```

`palindrome("_eye")` يجب أن يعيد `true`.

```js
assert(palindrome('_eye') === true);
```

`palindrome("race car")` يجب أن يعيد `true`.

```js
assert(palindrome('race car') === true);
```

`palindrome("not a palindrome")` يجب أن يعيد `false`.

```js
assert(palindrome('not a palindrome') === false);
```

`palindrome("A man, a plan, a canal. Panama")` يجب أن يعيد `true`.

```js
assert(palindrome('A man, a plan, a canal. Panama') === true);
```

`palindrome("never odd or even")` يجب أن يعيد `true`.

```js
assert(palindrome('never odd or even') === true);
```

`palindrome("nope")` يجب أن يعيد `false`.

```js
assert(palindrome('nope') === false);
```

`palindrome("almostomla")` يجب أن يعيد `false`.

```js
assert(palindrome('almostomla') === false);
```

`palindrome("My age is 0, 0 si ega ym.")` يجب أن يعيد `true`.

```js
assert(palindrome('My age is 0, 0 si ega ym.') === true);
```

`palindrome("1 eye for of 1 eye.")` يجب أن يعيد `false`.

```js
assert(palindrome('1 eye for of 1 eye.') === false);
```

`palindrome("0_0 (: /-\ :) 0-0")` يجب أن يعيد `true`.

```js
assert(palindrome('0_0 (: /- :) 0-0') === true);
```

`palindrome("five|\_/|four")` يجب أن يعيد `false`.

```js
assert(palindrome('five|_/|four') === false);
```

# --seed--

## --seed-contents--

```js
function palindrome(str) {
  return true;
}

palindrome("eye");
```

# --solutions--

```js
function palindrome(str) {
  var string = str.toLowerCase().split(/[^A-Za-z0-9]/gi).join('');
  var aux = string.split('');
  if (aux.join('') === aux.reverse().join('')){
    return true;
  }

  return false;
}
```
