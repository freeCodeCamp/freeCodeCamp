---
id: 5eaf48389ee512d4d103684b
title: Самоописові числа
challengeType: 1
forumTopicId: 385289
dashedName: self-describing-numbers
---

# --description--

Всього є декілька «самоописових» цілих чисел.

Ціле число називають самоописовим, якщо воно має таку властивість: цифра на позиції від 0 до N-1 відповідає кількості разів, скільки ця цифра зустрічається в числі.

Наприклад, **2020** є чотиризначним самоописовим числом:

<ul>
    <li> нульова позиція має значення 2 та в числі наявні два 0; </li>
    <li> перша позиція має значення 0 та в числі немає 1; </li>
    <li> друга позиція має значення 2 та в числі наявні дві 2; </li>
    <li> третя позиція має значення 0 та в числі немає 3; </li>
</ul>

Самоописовими числами &lt; 100 000 000 є 1210, 2020, 21200, 3211000, 42101000.

# --instructions--

Напишіть функцію, яка приймає натуральне число як параметр. Якщо воно самоописове, то поверніть true. Якщо ні — поверніть false.

# --hints--

`isSelfDescribing` має бути функцією.

```js
assert(typeof isSelfDescribing == 'function');
```

`isSelfDescribing()` має повернути булеве значення.

```js
assert(typeof isSelfDescribing(2020) == 'boolean');
```

`isSelfDescribing(2020)` має повернути `true`.

```js
assert.equal(isSelfDescribing(2020), true);
```

`isSelfDescribing(3021)` має повернути `false`.

```js
assert.equal(isSelfDescribing(3021), false);
```

`isSelfDescribing(3211000)` має повернути `true`.

```js
assert.equal(isSelfDescribing(3211000), true);
```

# --seed--

## --seed-contents--

```js
function isSelfDescribing(n) {

}
```

# --solutions--

```js
function isSelfDescribing(n) {
    let digits = String(n).split("");
    digits = digits.map(function(e) {return parseInt(e)});
    let count = digits.map((x) => {return 0})
    digits.forEach((d) =>{
        if (d >= count.length) {
            return false
        }
        count[d] += 1;
    });

     if (digits === count) {
        return true;
    }
    if (digits.length != count.length) {
        return false;
    }

    for (let i=0; i< digits.length; i++){
      if (digits[i] !== count[i]) {
        return false;
      }
    }
    return true;
}
```
