---
id: 587d7b8a367417b2b2512b4f
title: 使用簡單字段編寫簡潔的對象字面量聲明
challengeType: 1
forumTopicId: 301225
dashedName: write-concise-object-literal-declarations-using-object-property-shorthand
---

# --description--

ES6 添加了一些很棒的功能，用於更方便地定義對象。

請看以下代碼：

```js
const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
```

`getMousePosition` 簡單的函數，返回擁有兩個屬性的對象。 ES6 提供了一個語法糖，消除了類似 `x: x` 這種冗餘的寫法。 你可以只寫一次 `x`，解釋器會自動將其轉換成 `x: x`（或效果相同的內容）。 下面是使用這種語法重寫的同樣的函數：

```js
const getMousePosition = (x, y) => ({ x, y });
```

# --instructions--

請使用簡單屬性對象的語法來創建並返回一個具有 `name`、`age` 和 `gender` 屬性的對象。

# --hints--

`createPerson("Zodiac Hasbro", 56, "male")` 應該返回 `{name: "Zodiac Hasbro", age: 56, gender: "male"}`。

```js
assert.deepEqual(
  { name: 'Zodiac Hasbro', age: 56, gender: 'male' },
  createPerson('Zodiac Hasbro', 56, 'male')
);
```

不要使用 `key:value`。

```js
(getUserInput) => assert(!getUserInput('index').match(/:/g));
```

# --seed--

## --seed-contents--

```js
const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name: name,
    age: age,
    gender: gender
  };
  // Only change code above this line
};
```

# --solutions--

```js
const createPerson = (name, age, gender) => {
  return {
    name,
    age,
    gender
  };
};
```
