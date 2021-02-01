---
id: 56bbb991ad1ed5201cd392d1
title: 更新对象属性
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9yEJT4'
forumTopicId: 18336
dashedName: updating-object-properties
---

# --description--

当你创建了一个对象后，你可以用点操作符或中括号操作符来更新对象的属性。

举个例子，让我们看看`ourDog`:

```js
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
```

让我们更改它的名称为 "Happy Camper"，这有两种方式来更新对象的`name`属性： `ourDog.name = "Happy Camper";` 或 `ourDog["name"] = "Happy Camper";` 现在，`ourDog.name`的值就不再是 "Camper"，而是 "Happy Camper"。

# --instructions--

更新`myDog`对象的`name`属性，让它的名字从 "Coder" 变成 "Happy Coder"。

# --hints--

更新`myDog`的`"name"`属性, 使其等于 "Happy Coder"。

```js
assert(/happy coder/gi.test(myDog.name));
```

不要修改`myDog`的定义。

```js
assert(/"name": "Coder"/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(z){return z;})(myDog);
```

## --seed-contents--

```js
// Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
```

# --solutions--

```js
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.name = "Happy Coder";
```
