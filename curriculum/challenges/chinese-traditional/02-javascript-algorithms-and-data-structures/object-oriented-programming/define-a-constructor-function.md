---
id: 587d7dad367417b2b2512b77
title: 定義構造函數
challengeType: 1
forumTopicId: 16804
dashedName: define-a-constructor-function
---

# --description--

<dfn>Constructors</dfn> 是創建對象的函數。 函數給這個新對象定義屬性和行爲。 可將它們視爲創建的新對象的藍圖。

以下就是一個構造函數的示例：

```js
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}
```

這個構造函數定義了一個 `Bird` 對象，其屬性 `name`、`color` 和 `numLegs` 的值分別被設置爲 Albert、blue 和 2。 構造函數遵循一些慣例規則：

<ul><li>構造函數函數名的首字母大寫，這是爲了方便我們區分構造函數（ <code>constructors</code>）和其他非構造函數。</li><li>構造函數使用 <code>this</code> 關鍵字來給它將創建的這個對象設置新的屬性。 在構造函數裏面，<code>this</code> 指向的就是它新創建的這個對象。</li><li>構造函數定義了屬性和行爲就可創建對象，而不是像其他函數一樣需要設置返回值。</li></ul>

# --instructions--

創建一個構造函數：`Dog`。 給其添加 `name`，`color` 和 `numLegs` 屬性並分別給它們設置爲：字符串、字符串和數字。

# --hints--

`Dog` 應該有一個 `name` 屬性且它的值是一個字符串。

```js
assert(typeof new Dog().name === 'string');
```

`Dog` 應該有一個 `color` 屬性且它的值是一個字符串。

```js
assert(typeof new Dog().color === 'string');
```

`Dog` 應該有一個 `numLegs` 屬性且它的值是一個數字。

```js
assert(typeof new Dog().numLegs === 'number');
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
function Dog (name, color, numLegs) {
  this.name = 'name';
  this.color = 'color';
  this.numLegs = 4;
}
```
