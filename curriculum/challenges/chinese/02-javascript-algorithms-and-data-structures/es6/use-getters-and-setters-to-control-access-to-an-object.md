---
id: 587d7b8c367417b2b2512b54
title: 使用 getter 和 setter 来控制对象的访问
challengeType: 1
forumTopicId: 301220
dashedName: use-getters-and-setters-to-control-access-to-an-object
---

# --description--

你可以从对象中获得一个值，也可以给对象的属性赋值。

这些操作通常被称为 <dfn>getters</dfn> 以及 <dfn>setters</dfn>。

Getter 函数的作用是可以让对象返回一个私有变量，而不需要直接去访问私有变量。

Setter 函数的作用是可以基于传进的参数来修改对象中私有变量。 这些修改可以是计算，或者是直接替换之前的值。

```js
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);
```

控制台将显示字符串 `anonymous` 和 `newAuthor`。

请注意用于调用 getter 和 setter 的语法。 它们甚至看起来不像是函数。 getter 和 setter 非常重要，因为它们隐藏了内部的实现细节。

**注意：** 通常会在私有变量前添加下划线（`_`）。 然而，这种做法本身并不是将变量变成私有的。

# --instructions--

使用 `class` 关键字创建一个 `Thermostat` class。 `constructor` 接收一个华氏温度。

在 class 中，创建一个 `getter` 来获取摄氏温度和一个 `setter` 来设置温度值。

记得在 `C = 5/9 * (F - 32)` 和 `F = C * 9.0 / 5 + 32` 中，`F` 是华氏温度值，`C` 是摄氏温度值。

**注意：** 完成这个挑战后，应该在 class 中使用一个温度标准，要么是华氏温度，要么是摄氏温度。

这就是 getter 和 setter 的功能。 你正在为别的用户创建一个 API，不论你使用哪一个，用户都将获得正确的结果。

或者说，你从用户需求中抽象出了实现细节。

# --hints--

`Thermostat` 应该是一个具有 `constructor` 方法的 `class`。

```js
assert(
  typeof Thermostat === 'function' &&
    typeof Thermostat.constructor === 'function'
);
```

应该使用 `class` 关键词。

```js
assert(code.match(/class/g));
```

`Thermostat` 应该可以被实例化。

```js
assert(
  (() => {
    const t = new Thermostat(122);
    return typeof t === 'object';
  })()
);
```

当实例化华氏温度值时，`Thermostat` 应该被设置为正确的 `temperature`。

```js
assert(
  (() => {
    const t = new Thermostat(122);
    return t.temperature === 50;
  })()
);
```

应该定义一个 `getter`。

```js
assert(
  (() => {
    const desc = Object.getOwnPropertyDescriptor(
      Thermostat.prototype,
      'temperature'
    );
    return !!desc && typeof desc.get === 'function';
  })()
);
```

应该定义一个 `setter`。

```js
assert(
  (() => {
    const desc = Object.getOwnPropertyDescriptor(
      Thermostat.prototype,
      'temperature'
    );
    return !!desc && typeof desc.set === 'function';
  })()
);
```

调用带有摄氏温度值的 `setter` 应该设置 `temperature`。

```js
assert(
  (() => {
    const t = new Thermostat(32);
    t.temperature = 26;
    const u = new Thermostat(32);
    u.temperature = 50;
    return t.temperature === 26 && u.temperature === 50;
  })()
);
```

# --seed--

## --seed-contents--

```js
// Only change code below this line

// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
```

# --solutions--

```js
class Thermostat {
  constructor(fahrenheit) {
    this._tempInCelsius = 5/9 * (fahrenheit - 32);
  }
  get temperature(){
    return this._tempInCelsius;
  }
  set temperature(newTemp){
    this._tempInCelsius = newTemp;
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
```
