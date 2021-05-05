---
id: 587d7dac367417b2b2512b73
title: 創建一個基本的 JavaScript 對象
challengeType: 1
forumTopicId: 301317
dashedName: create-a-basic-javascript-object
---

# --description--

想想我們在生活中每天都可見到的事物：比如汽車、商店以及小鳥等。 它們都是<dfn>對象</dfn>：即人們可以觀察和與之互動的實體事物。

這些物體的性質是什麼？ 汽車有輪子。 商店銷售物品。 鳥兒有翅膀。

這些特徵，或者說是<dfn>屬性</dfn>定義了一個對象由什麼構成的。 需要注意的是：那些相似的對象可以擁有相同的屬性，但是這些屬性可能會有不同的值。 舉個例子：所有的汽車都有輪子，但並不是所有汽車的輪子個數都是一樣的。

JavaScript 中的對象可以用來描述現實世界中的物體，並賦予他們屬性和行爲，就像它們在現實世界中的對應物一樣。 下面是使用這些概念來創建一個 `duck` 對象的示例：

```js
let duck = {
  name: "Aflac",
  numLegs: 2
};
```

這個 `duck` 對象有兩組鍵值對：一個是 `name` 屬性，它的值是 `Aflac`；另一個是 `numLegs` 屬性，它的值是 2。

# --instructions--

創建一個 `dog` 對象，並給這個對象添加兩個屬性：`name` 和 `numLegs`，同時把這兩個屬性的值分別設爲字符串和數字。

# --hints--

`dog` 應該是一個 object。

```js
assert(typeof dog === 'object');
```

`dog` 應該有一個 `name` 屬性且它的值是一個字符串。

```js
assert(typeof dog.name === 'string');
```

`dog` 應該有一個 `numLegs` 屬性且它的值是一個數字。

```js
assert(typeof dog.numLegs === 'number');
```

# --seed--

## --seed-contents--

```js
let dog = {

};
```

# --solutions--

```js
let dog = {
  name: '',
  numLegs: 4
};
```
