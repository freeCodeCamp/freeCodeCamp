---
id: 587d7b8c367417b2b2512b54
title: 使用 getter 和 setter 来控制对象的访问
challengeType: 1
forumTopicId: 301220
dashedName: use-getters-and-setters-to-control-access-to-an-object
---

# --description--

你可以从对象中获得一个值，也可以给对象的属性赋值。

这些通常行为被称为 <dfn>getters</dfn> 以及 <dfn>setters</dfn>。

Getter 函数的作用是可以让对象返回一个私有变量，而不需要直接去访问私有变量。

Setter 函数的作用是可以基于传进的参数来修改对象中私有变量。这些修改可以是计算，或者是直接替换之前的值。

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
const lol = new Book('anonymous');
console.log(lol.writer);  // anonymous
lol.writer = 'wut';
console.log(lol.writer);  // wut
```

注意我们调用 getter 和 setter 的语法，它们看起来并不像一个函数调用。 Getter 和 Setter 非常重要，因为它们隐藏了内部的实现细节。

**注意：** 通常会在私有变量前添加下划线（`_`）。这里并没有真正意义上让变量私有。

# --instructions--

使用`class`关键字来创建`Thermostat`类，它的构造函数应该可以接收 fahrenheit（华氏温度）作为参数。

在类中创建 temperature 的 `getter`和`setter`，将温度转换成摄氏温度。

温度转换的公式是`C = 5/9 * (F - 32)`以及`F = C * 9.0 / 5 + 32`，F 代表华氏温度，C 代表摄氏温度。

**注意：** 当你实现这个作业的时候，你应当在类中使用一个温度标准，无论是华氏温度还是摄氏温度。

是时候展现 getter 和 setter 的威力了——无论你的 API 内部使用的是哪种温度标准，用户都能得到正确的结果。

或者说，你从用户需求中抽象出了实现细节。

# --hints--

`Thermostat`应该是一个`class`，并且在其中定义了`constructor`方法。

```js
assert(
  typeof Thermostat === 'function' &&
    typeof Thermostat.constructor === 'function'
);
```

应该使用 `class` 关键字。

```js
assert(code.match(/class/g));
```

`Thermostat`应该可以被实例化。

```js
assert(
  (() => {
    const t = new Thermostat(32);
    return typeof t === 'object' && t.temperature === 0;
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

调用 `setter` 应该设置 temperature。

```js
assert(
  (() => {
    const t = new Thermostat(32);
    t.temperature = 26;
    return t.temperature !== 0;
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
