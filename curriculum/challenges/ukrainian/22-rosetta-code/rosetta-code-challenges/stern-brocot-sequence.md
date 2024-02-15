---
id: 5a23c84252665b21eecc8028
title: Послідовність Штерна-Броко
challengeType: 1
forumTopicId: 302324
dashedName: stern-brocot-sequence
---

# --description--

У цьому завданні потрібно згенерувати послідовність Штерна-Броко за допомогою алгоритму, схожого до генерації <a href="https://rosettacode.org/wiki/Fibonacci_sequence" target="_blank" rel="noopener noreferrer nofollow">послідовності Фібоначчі</a>.

<ol>
  <li>Перший та другий члени послідовності дорівнюють 1:</li>
    <ul><li>1, 1</li></ul>
  <li>Розпочніть з аналізу другого члена послідовності</li>
  <li>Додайте аналізований член послідовності до попереднього (1 + 1) = 2 та приєднайте результат до кінця послідовності:</li>
    <ul><li>1, 1, 2</li></ul>
  <li>Приєднайте аналізований член послідовності до кінця послідовності:</li>
    <ul><li>1, 1, 2, 1</li></ul>
  <li>Проаналізуйте наступний член послідовності (тобто третій член, 2)</li>
  <li>Перейдіть до 3 </li>
    <ul>
      <li></li>
      <li> ─── розгорнувши ще один цикл, ви отримаєте: ───</li>
      <li></li>
    </ul>
  <li>Додайте аналізований член послідовності до попереднього (2 + 1) = 3 та приєднайте результат до кінця послідовності:</li>
    <ul><li>1, 1, 2, 1, 3</li></ul>
  <li>Приєднайте аналізований член послідовності до кінця послідовності:</li>
    <ul><li>1, 1, 2, 1, 3, 2</li></ul>
  <li>Проаналізуйте наступний член послідовності (тобто четвертий член, 1)</li>
</ol>

# --instructions--

Створіть функцію, яка повертає позицію у послідовності Штерна-Броко, в якій $n$ зустрічається вперше, де послідовність генерується методом, описаним вище. Зверніть увагу, що ця послідовність використовує індексацію на основі 1.

# --hints--

`sternBrocot` має бути функцією.

```js
assert(typeof sternBrocot == 'function');
```

`sternBrocot(2)` має повернути число.

```js
assert(typeof sternBrocot(2) == 'number');
```

`sternBrocot(2)` має повернути `3`.

```js
assert.equal(sternBrocot(2), 3);
```

`sternBrocot(3)` має повернути `5`.

```js
assert.equal(sternBrocot(3), 5);
```

`sternBrocot(5)` має повернути `11`.

```js
assert.equal(sternBrocot(5), 11);
```

`sternBrocot(7)` має повернути `19`.

```js
assert.equal(sternBrocot(7), 19);
```

`sternBrocot(10)` має повернути `39`.

```js
assert.equal(sternBrocot(10), 39);
```

# --seed--

## --seed-contents--

```js
function sternBrocot(num) {

}
```

# --solutions--

```js
function sternBrocot(num) {
  function f(n) {
    return n < 2
      ? n
      : n & 1
      ? f(Math.floor(n / 2)) + f(Math.floor(n / 2 + 1))
      : f(Math.floor(n / 2));
  }

  function gcd(a, b) {
    return a ? (a < b ? gcd(b % a, a) : gcd(a % b, b)) : b;
  }
  var n;
  for (n = 1; f(n) != num; n++);
  return n;
}
```
