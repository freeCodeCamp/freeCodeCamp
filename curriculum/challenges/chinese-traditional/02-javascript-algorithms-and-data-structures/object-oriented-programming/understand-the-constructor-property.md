---
id: 587d7daf367417b2b2512b7e
title: 瞭解構造函數屬性
challengeType: 1
forumTopicId: 301327
dashedName: understand-the-constructor-property
---

# --description--

在上一個挑戰中創建的實例對象 `duck` 和 `beagle` 都有一個特殊的 `constructor` 屬性：

```js
let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird); 
console.log(beagle.constructor === Dog);
```

這兩次 `console.log` 調用都將在控制檯中顯示 `true`。

需要注意到的是這個 `constructor` 屬性是對創建這個實例的構造函數的一個引用。 `constructor` 屬性的一個好處是可以通過檢查這個屬性來找出它是一個什麼對象。 下面是一個例子，來看看是怎麼使用的：

```js
function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}
```

**注意：** 由於 `constructor` 屬性可以被重寫（在下面兩節挑戰中將會遇到），所以最好使用`instanceof` 方法來檢查對象的類型。

# --instructions--

寫一個 `joinDogFraternity` 函數，傳入一個 `candidate` 參數並使用 `constructor` 屬性來判斷傳入的 candidate 是不是 `Dog` 創建的對象實例，如果是，就返回 `true`，否則返回 `false`。

# --hints--

`joinDogFraternity` 應該被定義爲一個函數。

```js
assert(typeof joinDogFraternity === 'function');
```

如果 `candidate` 是 `Dog` 的一個對象實例，則 `joinDogFraternity` 函數應該返回 `true`。

```js
assert(joinDogFraternity(new Dog('')) === true);
```

`joinDogFraternity` 中應該用到 `constructor` 屬性。

```js
assert(/\.constructor/.test(code) && !/instanceof/.test(code));
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {

}
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
function joinDogFraternity(candidate) {
  return candidate.constructor === Dog;
}
```
