---
id: a5229172f011153519423690
title: جمع كل أرقام فيبوناتشي الفردية (Sum All Odd Fibonacci Numbers)
challengeType: 1
forumTopicId: 16084
dashedName: sum-all-odd-fibonacci-numbers
---

# --description--

بإعطائك عدد صحيح موجب `num` ، قم بإرجاع مجموع كل أرقام فيبوناتشي الفردية الأقل من أو تساوي `num`.

The first two numbers in the Fibonacci sequence are 0 and 1. وكل رقم إضافي في التسلسل هو مجموع الرقمين السابقين. The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.

على سبيل المثال `sumFibs(10)` يجب أن يرجع `10` لأن جميع أرقام فيبوناتشي الفردية التي هي أقل من أو تساوي `10` هي 1 و 1 و 3 و 5.

# --hints--

`sumFibs(1)` يجب أن يرجع رقم.

```js
assert(typeof sumFibs(1) === 'number');
```

`sumFibs(1000)` يجب أن يرجع 1785.

```js
assert(sumFibs(1000) === 1785);
```

`sumFibs(4000000)` يجب أن يرجع 4613732.

```js
assert(sumFibs(4000000) === 4613732);
```

`sumFibs(4)` يجب أن يرجع 5.

```js
assert(sumFibs(4) === 5);
```

`sumFibs(75024)` يجب أن يرجع 60696.

```js
assert(sumFibs(75024) === 60696);
```

`sumFibs(75025)` يجب أن يرجع 135721.

```js
assert(sumFibs(75025) === 135721);
```

# --seed--

## --seed-contents--

```js
function sumFibs(num) {
  return num;
}

sumFibs(4);
```

# --solutions--

```js
function sumFibs(num) {
  var a = 1;
  var b = 1;
  var s = 0;
  while (a <= num) {
    if (a % 2 !== 0) {
      s += a;
    }
    a = [b, b=b+a][0];
  }
  return s;
}
```
