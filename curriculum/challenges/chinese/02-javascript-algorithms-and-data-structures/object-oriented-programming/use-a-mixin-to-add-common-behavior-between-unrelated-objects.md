---
id: 587d7db2367417b2b2512b89
title: 使用 Mixin 在不相关对象之间添加共同行为
challengeType: 1
forumTopicId: 301331
dashedName: use-a-mixin-to-add-common-behavior-between-unrelated-objects
---

# --description--

正如你所见，行为是可以通过继承来共享的。 然而，在有些情况下，继承不是最好的解决方案。 继承不适用于不相关的对象，比如 `Bird` 和 `Airplane`。 虽然它们都可以飞行，但是 `Bird` 并不是一种 `Airplane`，反之亦然。

对于不相关的对象，更好的方法是使用 <dfn>mixins</dfn>。 mixin 允许其他对象使用函数集合。

```js
let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};
```

`flyMixin` 能接受任何对象，并为其提供 `fly` 方法。

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

这里的 `flyMixin` 接收了`bird` 和 `plane` 对象，然后将 `fly` 方法分配给了每一个对象。 现在 `bird` 和 `plane` 都可以飞行了：

```js
bird.fly();
plane.fly();
```

控制台将显示字符串 `Flying, wooosh!` 两次，每 `.fly()` 调用都会显示。

注意观察 mixin 是如何允许相同的 `fly` 方法被不相关的对象 `bird` 和 `plane` 重用的。

# --instructions--

创建一个名为 `glideMixin` 的 mixin，并定义一个 `glide` 方法。 然后使用 `glideMixin` 来给 `bird` 和 `boat` 赋予滑行（glide）的能力。

# --hints--

你应该声明一个变量名为 `glideMixin` 的函数。

```js
assert(typeof glideMixin === 'function');
```

你应该在 `bird`上使用 `glideMixin`，以提供 `glide` 方法。

```js
assert(typeof bird.glide === 'function');
```

你应该在 `boat` 上使用 `glideMixin`，以为其提供 `glide` 方法。

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
