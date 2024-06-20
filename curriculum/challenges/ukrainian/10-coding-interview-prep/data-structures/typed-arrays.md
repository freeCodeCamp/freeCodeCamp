---
id: 587d8253367417b2b2512c6a
title: Типізовані масиви
challengeType: 1
forumTopicId: 301716
dashedName: typed-arrays
---

# --description--

Масиви — це об’єкти JavaScript, які містять безліч інших елементів.

```js
var complexArr = [1, 5, "2", "Word", {"name": "James"}];
```

По суті, автоматичний процес виділення браузером достатнього обсягу пам’яті для певного масиву відбувається у фоновому режимі. За необхідності цей обсяг зміниться, якщо ми додамо або видалимо дані.

Проте у світі високоефективних елементів різного типу іноді потрібно конкретизувати, скільки пам’яті займає масив.

З цим допоможуть <dfn>типізовані масиви</dfn>. Тепер ви зможете визначити обсяг пам’яті, який займатиме масив. Нижче ви знайдете загальну інформацію з оглядом різних видів масивів, а також розмір кожного елементу масиву в байтах.

<table><tbody><tr><th>Вид</th><th>Розмір елементу в байтах</th></tr><tr><td><code>Int8Array</code></td><td>1</td></tr><tr><td><code>Uint8Array</code></td><td>1</td></tr><tr><td><code>Uint8ClampedArray</code></td><td>1</td></tr><tr><td><code>Int16Array</code></td><td>2</td></tr><tr><td><code>Uint16Array</code></td><td>2</td></tr><tr><td><code>Int32Array</code></td><td>4</td></tr><tr><td><code>Uint32Array</code></td><td>4</td></tr><tr><td><code>Float32Array</code></td><td>4</td></tr><tr><td><code>Float64Array</code></td><td>8</td></tr></tbody></table>

Ми можемо створити такі види масивів двома способами. Один з них — створити їх напряму. Нижче показано, як створити `Int16Array` довжиною 3.

```js
var i8 = new Int16Array(3);
console.log(i8);
// Returns [0, 0, 0]
```

Також можна створити <dfn>буфер</dfn>, щоб вказати скільки даних (у байтах) може зайняти цей масив. **Зауважте**  
Щоб створити типізовані масиви за допомогою буферів, потрібно вказати кількість байтів, кратну кількості байтів вище.

```js
// Create same Int16Array array differently
var byteSize = 6; // Needs to be multiple of 2
var buffer = new ArrayBuffer(byteSize);
var i8View = new Int16Array(buffer);
buffer.byteLength; // Returns 6
i8View.byteLength; // Returns 6
console.log(i8View); // Returns [0, 0, 0]
```

<dfn>Буфери</dfn> — це об’єкти загального призначення, які лише зберігають дані. Ви не можете просто отримати доступ до них. Щоб отримати доступ, ви повинні спершу створити <dfn>перегляд</dfn>.

```js
i8View[0] = 42;
console.log(i8View); // Returns [42, 0, 0]
```

**Зауважте**  
Не всі методи, властиві звичайним масивам, доступні для типізованих. Серед таких методів — `.pop()` та `.push()`. Також типізовані масиви не підтримують метод `Array.isArray()`, який перевіряє, чи певний елемент є масивом. Простіше кажучи, їх легше реалізовувати менш складним рушіям JavaScript.

# --instructions--

Спершу створіть 64-байтовий `buffer`. Далі створіть типізований масив `Int32Array` з переглядом під назвою `i32View`.

# --hints--

`buffer` повинен мати розмір 64 байти.

```js
assert(buffer.byteLength === 64);
```

Перегляд буфера `i32View` повинен мати розмір 64 байти.

```js
assert(i32View.byteLength === 64);
```

Перегляд буфера `i32View` повинен складатися з 16 елементів.

```js
assert(i32View.length === 16);
```

# --seed--

## --seed-contents--

```js
var buffer;
var i32View;
```

# --solutions--

```js
var buffer = new ArrayBuffer(64);
var i32View = new Int32Array(buffer);
```
