---
id: 5eaf48389ee512d4d103684b
title: Самоописувальні числа
challengeType: 1
forumTopicId: 385289
dashedName: self-describing-numbers
---

# --description--

There are several so-called "self-describing" or "self-descriptive" integers.

Ціле число називають самоописувальним, якщо воно має такі властивості, коли розряд цифри позначений від 0 до N-1, а цифра в кожній позиції дорівнює тій кількості разів, за яку вона з'являється в числі.

До прикладу, **2020** — це самоописувальне чотиризначне число:

<ul>
    <li> розряд 0 має значення 2, і в числі є 2 нулі; </li>
    <li> розряд 1 має значення 0, але одиниці тут відсутні; </li>
    <li> розряд 2 має значення 2, а число містить 2 двійки; </li>
    <li> розряд 3 має значення 0, але трійки в числі також відсутні; </li>
</ul>

Самоописувальними числами &lt; 100,000,000 є: 1210, 2020, 21200, 3211000, 42101000.

# --instructions--

Напишіть функцію, яка враховує додатне ціле число як параметр. Якщо число самоописувальне, поверніть true. В іншому випадку — false.

# --hints--

`isSelfDescribing` має бути функцією.

```js
assert(typeof isSelfDescribing == 'function');
```

`isSelfDescribing()` має повертати логічне значення.

```js
assert(typeof isSelfDescribing(2020) == 'boolean');
```

`isSelfDescribing(2020)` має повертати `true`.

```js
assert.equal(isSelfDescribing(2020), true);
```

`isSelfDescribing(3021)` має повертати `false`.

```js
assert.equal(isSelfDescribing(3021), false);
```

`isSelfDescribing(3211000)` має повертати `true`.

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
