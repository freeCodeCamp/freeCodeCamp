---
id: 587d7db2367417b2b2512b8c
title: 使用 IIFE 創建一個模塊
challengeType: 1
forumTopicId: 301332
dashedName: use-an-iife-to-create-a-module
---

# --description--

一個立即調用函數表達式（IIFE）通常用於將相關功能分組到單個對象或者是 <dfn>module</dfn> 中。 例如，先前的挑戰中定義了兩個 mixins：

```js
function glideMixin(obj) {
  obj.glide = function() {
    console.log("Gliding on the water");
  };
}
function flyMixin(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
}
```

我們可以將這些 mixins 分成以下模塊：

```js
let motionModule = (function () {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
})();
```

注意：一個立即調用函數表達式（IIFE）返回了一個 `motionModule` 對象。 返回的這個對象包含了作爲對象屬性的所有 mixin 行爲。 module 模式的優點是，所有的運動相關的行爲都可以打包成一個對象，然後由代碼的其他部分使用。 下面是一個使用它的例子：

```js
motionModule.glideMixin(duck);
duck.glide();
```

# --instructions--

創建一個名爲 `funModule` 的模塊，將這兩個 mixins：`isCuteMixin` 和 `singMixin` 包裝起來。 `funModule` 應該返回一個對象。

# --hints--

`funModule` 應該被定義並返回一個對象。

```js
assert(typeof funModule === 'object');
```

`funModule.isCuteMixin` 應該訪問一個函數。

```js
assert(typeof funModule.isCuteMixin === 'function');
```

`funModule.singMixin` 應該訪問一個函數。

```js
assert(typeof funModule.singMixin === 'function');
```

# --seed--

## --seed-contents--

```js
let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};
```

# --solutions--

```js
const funModule = (function () {
  return {
    isCuteMixin: obj => {
      obj.isCute = () => true;
    },
    singMixin: obj => {
      obj.sing = () => console.log("Singing to an awesome tune");
    }
  };
})();
```
