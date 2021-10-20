---
id: 587d7dae367417b2b2512b79
title: 擴展構造函數以接收參數
challengeType: 1
forumTopicId: 18235
dashedName: extend-constructors-to-receive-arguments
---

# --description--

上一個挑戰中 `Bird` 和 `Dog` 構造函數運行得不錯。 但是，注意到沒有：所有通過`Bird` 構造函數創建出來的實例 `Birds` 都自動的取名爲 Albert，顏色都是藍色，還都有兩條腿。 如果你想要新創建出來的小鳥們擁有不同的名字和顏色要怎麼辦呢？ 當然，手動的去修改每一個小鳥實例自己的屬性也是可以實現的，只是會增加很多無謂的工作量：

```js
let swan = new Bird();
swan.name = "Carlos";
swan.color = "white";
```

假如你寫了一個程序來追蹤一個鳥舍裏面的幾百只甚至幾千只不同的小鳥。 你將會花費很多時間去創建所有的小鳥實例並給它們的屬性一一修改爲不同的值。 爲了減輕創建不同 `Bird` 對象的工作量，你可以給你的 Bird 設置爲可以接收參數的構造函數：

```js
function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}
```

然後將值通過參數的方式傳遞給 `Bird` 構造函數來定義每一個唯一的小鳥實例： `let cardinal = new Bird("Bruce", "red");` 這給 `Bird` 的 `name` 和 `color` 屬性分別賦值爲 `Bruce` 和 `red` 色。 但 `numLegs` 屬性仍然設置爲 2。 `cardinal` 有以下這些屬性：

```js
cardinal.name
cardinal.color
cardinal.numLegs
```

這樣一來構造函數就變得很靈活了。 現在可以在創建每個`Bird`實例時直接定義屬性，這是 JavaScript 構造函數非常實用的用法之一。 它們根據共同或相似的屬性和行爲將對象歸納爲一組，並能夠自動的創建各自實例。

# --instructions--

創建另一個 `Dog` 構造函數。 這一次，給它設置兩個參數：`name` 和 `color`，同時給 `numLegs` 賦值爲 4。 然後創建一個新 `Dog` 實例保存爲變量名：`terrier`。 再將兩個字符串通過參數的形式傳入`name` 和 `color` 屬性。

# --hints--

`Dog` 應該接收一個 `name` 參數。

```js
assert(new Dog('Clifford').name === 'Clifford');
```

`Dog` 應該接收一個 `color` 參數。

```js
assert(new Dog('Clifford', 'yellow').color === 'yellow');
```

`Dog` 應該有一個 `numLegs` 屬性且值爲 4。

```js
assert(new Dog('Clifford').numLegs === 4);
```

`terrier` 應該是通過 `Dog` 構造函數創建的。

```js
assert(terrier instanceof Dog);
```

# --seed--

## --seed-contents--

```js
function Dog() {

}
```

# --solutions--

```js
function Dog (name, color) {
  this.numLegs = 4;
  this.name = name;
  this.color = color;
}

const terrier = new Dog();
```
