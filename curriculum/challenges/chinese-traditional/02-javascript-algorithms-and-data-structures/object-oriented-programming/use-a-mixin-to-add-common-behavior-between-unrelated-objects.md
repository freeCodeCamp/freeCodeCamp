---
id: 587d7db2367417b2b2512b89
title: 使用 Mixin 在不相關對象之間添加共同行爲
challengeType: 1
forumTopicId: 301331
dashedName: use-a-mixin-to-add-common-behavior-between-unrelated-objects
---

# --description--

正如你所見，行爲是可以通過繼承來共享的。 然而，在有些情況下，繼承不是最好的解決方案。 繼承不適用於不相關的對象，比如 `Bird` 和 `Airplane`。 雖然它們都可以飛行，但是 `Bird` 並不是一種 `Airplane`，反之亦然。

對於不相關的對象，更好的方法是使用 <dfn>mixins</dfn>。 mixin 允許其他對象使用函數集合。

```js
let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};
```

`flyMixin` 能接受任何對象，併爲其提供 `fly` 方法。

```js
let bird = {
  name: "Donald",
  numLegs: 2
};

let plane = {
  model: "777",
  numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);
```

這裏的 `flyMixin` 接收了`bird` 和 `plane` 對象，然後將 `fly` 方法分配給了每一個對象。 現在 `bird` 和 `plane` 都可以飛行了：

```js
bird.fly();
plane.fly();
```

控制檯將顯示字符串 `Flying, wooosh!` 兩次，每 `.fly()` 調用都會顯示。

注意觀察 mixin 是如何允許相同的 `fly` 方法被不相關的對象 `bird` 和 `plane` 重用的。

# --instructions--

創建一個名爲 `glideMixin` 的 mixin，並定義一個 `glide` 方法。 然後使用 `glideMixin` 來給 `bird` 和 `boat` 賦予滑行（glide）的能力。

# --hints--

你應該聲明一個變量名爲 `glideMixin` 的函數。

```js
assert(typeof glideMixin === 'function');
```

你應該在 `bird`上使用 `glideMixin`，以提供 `glide` 方法。

```js
assert(typeof bird.glide === 'function');
```

你應該在 `boat` 上使用 `glideMixin`，以爲其提供 `glide` 方法。

```js
assert(typeof boat.glide === 'function');
```

# --seed--

## --seed-contents--

```js
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Only change code below this line
```

# --solutions--

```js
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};
function glideMixin (obj) {
  obj.glide = () => 'Gliding!';
}

glideMixin(bird);
glideMixin(boat);
```
