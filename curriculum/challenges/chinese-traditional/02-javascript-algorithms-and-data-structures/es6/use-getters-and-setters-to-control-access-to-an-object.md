---
id: 587d7b8c367417b2b2512b54
title: 使用 getter 和 setter 來控制對象的訪問
challengeType: 1
forumTopicId: 301220
dashedName: use-getters-and-setters-to-control-access-to-an-object
---

# --description--

你可以從對象中獲得一個值，也可以給對象的屬性賦值。

這些操作通常被稱爲 <dfn>getters</dfn> 以及 <dfn>setters</dfn>。

Getter 函數的作用是可以讓對象返回一個私有變量，而不需要直接去訪問私有變量。

Setter 函數的作用是可以基於傳進的參數來修改對象中私有變量。 這些修改可以是計算，或者是直接替換之前的值。

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

控制檯將顯示字符串 `anonymous` 和 `newAuthor`。

請注意用於調用 getter 和 setter 的語法。 它們甚至看起來不像是函數。 getter 和 setter 非常重要，因爲它們隱藏了內部的實現細節。

**注意：** 通常會在私有變量前添加下劃線（`_`）。 然而，這種做法本身並不是將變量變成私有的。

# --instructions--

使用 `class` 關鍵字創建一個 `Thermostat` class。 `constructor` 接收一個華氏溫度。

在 class 中，創建一個 `getter` 來獲取攝氏溫度和一個 `setter` 來設置溫度值。

記得在 `C = 5/9 * (F - 32)` 和 `F = C * 9.0 / 5 + 32` 中，`F` 是華氏溫度值，`C` 是攝氏溫度值。

**注意：** 完成這個挑戰後，應該在 class 中使用一個溫度標準，要麼是華氏溫度，要麼是攝氏溫度。

這就是 getter 和 setter 的功能。 你正在爲別的用戶創建一個 API，不論你使用哪一個，用戶都將獲得正確的結果。

或者說，你從用戶需求中抽象出了實現細節。

# --hints--

`Thermostat` 應該是一個具有 `constructor` 方法的 `class`。

```js
assert(
  typeof Thermostat === 'function' &&
    typeof Thermostat.constructor === 'function'
);
```

應該使用 `class` 關鍵詞。

```js
assert(code.match(/class/g));
```

`Thermostat` 應該可以被實例化。

```js
assert(
  (() => {
    const t = new Thermostat(122);
    return typeof t === 'object';
  })()
);
```

當實例化華氏溫度值時，`Thermostat` 應該被設置爲正確的 `temperature`。

```js
assert(
  (() => {
    const t = new Thermostat(122);
    return t.temperature === 50;
  })()
);
```

應該定義一個 `getter`。

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

應該定義一個 `setter`。

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

調用帶有攝氏溫度值的 `setter` 應該設置 `temperature`。

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
