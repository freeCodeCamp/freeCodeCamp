---
id: 587d8253367417b2b2512c6a
title: Типізовані масиви
challengeType: 1
forumTopicId: 301716
dashedName: typed-arrays
---

# --description--

Масивами вважаються об'єкти JavaScript, які містять безліч інших елементів.

```js
var complexArr = [1, 5, "2", "Word", {"name": "James"}];
```

По суті, автоматичний процес виділення браузером достатнього обсягу пам'яті для певного масиву відбувається у фоновому режимі. Також за необхідності він зміниться, якщо ми додамо або видалимо дані.

Проте у світі різноманітних високоефективних типів елементів інколи потрібно конкретизувати, скільки пам'яті займає масив.

З цим допоможуть <dfn>Типізовані масиви</dfn>. Адже тепер ви маєте можливість визначити обсяг пам'яті, який займатиме масив. Нижче ви знайдете загальну інформацію з оглядом різних видів масивів, а також розмір кожного елементу масиву в байтах.

<table class='table table-striped'><tbody><tr><th>Вид</th><th>Розмір елементу в байтах</th></tr><tr><td><code>Int8Array</code></td><td>1</td></tr><tr><td><code>Uint8Array</code></td><td>1</td></tr><tr><td><code>Uint8ClampedArray</code></td><td>1</td></tr><tr><td><code>Int16Array</code></td><td>2</td></tr><tr><td><code>Uint16Array</code></td><td>2</td></tr><tr><td><code>Int32Array</code></td><td>4</td></tr><tr><td><code>Uint32Array</code></td><td>4</td></tr><tr><td><code>Float32Array</code></td><td>4</td></tr><tr><td><code>Float64Array</code></td><td>8</td></tr></tbody></table>

Ми можемо створити такі види масивів двома способами. Один з них - створити їх напряму. Нижче показано, як створити `Int16Array` довжиною 3.

```js
var i8 = new Int16Array(3);
console.log(i8);
// Returns [0, 0, 0]
```

Також можна створити <dfn>буфер</dfn>, щоб вирахувати, скільки даних (у байтах) займе цей масив. **Зауважте**  
Щоб створити типізовані буферні масиви, потрібно, щоб число байтів було кратним зазначеним вище числам.

```js
// Create same Int16Array array differently
var byteSize = 6; // Needs to be multiple of 2
var buffer = new ArrayBuffer(byteSize);
var i8View = new Int16Array(buffer);
buffer.byteLength; // Returns 6
i8View.byteLength; // Returns 6
console.log(i8View); // Returns [0, 0, 0]
```

<dfn>Буфери</dfn> - це об'єкти загального призначення, які лише зберігають дані. Ви не можете просто отримати доступ до них. Щоб його отримати, ви повинні спершу створити <dfn>розріз даних</dfn>.

```js
i8View[0] = 42;
console.log(i8View); // Returns [42, 0, 0]
```

**Зауважте**  
Не всі методи, властиві звичайним масивам, доступні й для типізованих. Серед таких методів є `.pop()` or `.push()`. Також типізовані масиви не містять методу `Array.isArray()`, який перевіряє, чи певний об'єкт є масивом. Простіше кажучи, їх легше реалізовувати менш складним рушіям JavaScript.

# --instructions--

Спершу створіть 64-байтовий `buffer`. Далі створіть типізований масив `Int32Array`, який міститиме розріз даних із найменуванням `i32View`.

# --hints--

Ваш `buffer` повинен мати розмір 64 байти.

```js
assert(buffer.byteLength === 64);
```

Розріз даних вашого буфера `i32View` повинен мати розмір 64 байти.

```js
assert(i32View.byteLength === 64);
```

Розріз даних вашого буфера `i32View` повинен складатися з 16 елементів.

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
