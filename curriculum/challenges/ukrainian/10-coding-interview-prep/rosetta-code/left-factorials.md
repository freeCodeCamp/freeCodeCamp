---
id: 5a23c84252665b21eecc7ee0
title: Ліві факторіали
challengeType: 1
forumTopicId: 302302
dashedName: left-factorials
---

# --description--

**Ліві факторіали**, $ !n $, можуть посилатися як на *субфакторіали*, так і на *факторіальні суми*. Можна заплутатися, побачивши, що одне і те ж позначення використовується для двох різних визначень. Іноді *субфакторіали* (також відомі як *перестановки*) можуть використовувати будь-яке з цих позначень:

<ul>
  <li>$!n`$</li>
  <li>$!n$</li>
  <li>$n¡$</li>
</ul>

(Можливо, візуально це не очевидно, але в останньому прикладі використовується перевернутий знак оклику) У цьому завданні буде використовуватися дана формула для **лівого факторіала**:

$ !n = \\sum\_{k=0}^{n-1} k! $

де $!0 = 0$

# --instructions--

Напишіть функцію для обчислення лівого факторіала заданого числа.

# --hints--

`leftFactorial` має бути функцією.

```js
assert(typeof leftFactorial == 'function');
```

`leftFactorial(0)` має повернути число.

```js
assert(typeof leftFactorial(0) == 'number');
```

`leftFactorial(0)` має повернути `0`.

```js
assert.equal(leftFactorial(0), 0);
```

`leftFactorial(1)` має повернути `1`.

```js
assert.equal(leftFactorial(1), 1);
```

`leftFactorial(2)` має повернути `2`.

```js
assert.equal(leftFactorial(2), 2);
```

`leftFactorial(3)` має повернути `4`.

```js
assert.equal(leftFactorial(3), 4);
```

`leftFactorial(10)` має повернути `409114`.

```js
assert.equal(leftFactorial(10), 409114);
```

`leftFactorial(17)` має повернути `22324392524314`.

```js
assert.equal(leftFactorial(17), 22324392524314);
```

`leftFactorial(19)` має повернути `6780385526348314`.

```js
assert.equal(leftFactorial(19), 6780385526348314);
```

# --seed--

## --seed-contents--

```js
function leftFactorial(n) {

}
```

# --solutions--

```js
function leftFactorial(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;

  // Note: for n>=20, the result may not be correct.
  // This is because JavaScript uses 53 bit integers and
  // for n>=20 result becomes too large.

  let res = 2,
    fact = 2;
  for (var i = 2; i < n; i++) {
    res += fact;
    fact *= i + 1;
  }

  return res;
}
```
