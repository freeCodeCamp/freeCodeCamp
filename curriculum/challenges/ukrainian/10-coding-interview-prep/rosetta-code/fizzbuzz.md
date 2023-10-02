---
id: 5e9ddb06ec35240f39657419
title: FizzBuzz
challengeType: 1
forumTopicId: 385370
dashedName: fizzbuzz
---

# --description--

Напишіть програму, яка генерує масив цілих чисел від 1 до 100 (включно). Але:

<ul>
    <li>для кратних числа 3 додайте <code>"Fizz"</code> до масиву замість числа</li>
    <li>для кратних числа 5 додайте <code>"Buzz"</code> до масиву замість числа</li>
    <li>для кратних чисел 3 і 5 додайте <code>"FizzBuzz"</code> до масиву замість числа</li>
</ul>

# --instructions--

Ваша програма має повернути масив, що містить результати на основі вищезазначених правил.

# --hints--

`fizzBuzz` має бути функцією.

```js
assert(typeof fizzBuzz == 'function');
```

`fizzBuzz()` має повернути масив.

```js
assert(Array.isArray(fizzBuzz()) == true);
```

Числа, які діляться лише на 3, мають повернути `"Fizz"`.

```js
assert.equal(fizzBuzz()[2], 'Fizz');
```

Числа, які діляться лише на 5, мають повернути `"Buzz"`.

```js
assert.equal(fizzBuzz()[99], 'Buzz');
```

Числа, які діляться на 3 і 5, мають повернути `"FizzBuzz"`.

```js
assert.equal(fizzBuzz()[89], 'FizzBuzz');
```

Числа, які не діляться ні на 3, ні на 5, мають повернути саме число.

```js
assert.equal(fizzBuzz()[12], 13);
```

# --seed--

## --seed-contents--

```js
function fizzBuzz() {

}
```

# --solutions--

```js
function fizzBuzz() {
    let res=[];
    for (let i =1; i < 101; i++) {
        if (i % 3 === 0  && i % 5 === 0) {
            res.push("FizzBuzz");
        }
        else if (i % 3 === 0) {
            res.push("Fizz");
        }
        else if (i % 5 === 0) {
            res.push("Buzz");
        } 
        else {
            res.push(i);
        }
    }
    return res;
}
```
