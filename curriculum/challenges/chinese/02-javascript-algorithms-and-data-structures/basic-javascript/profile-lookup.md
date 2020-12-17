---
id: 5688e62ea601b2482ff8422b
title: 资料查找
challengeType: 1
videoUrl: 'https://scrimba.com/c/cDqW2Cg'
forumTopicId: 18259
---

# --description--

我们有一个对象数组，里面存储着通讯录。

函数`lookUp`有两个预定义参数：`firstName`值和`prop`属性 。

函数将会检查通讯录中是否存在一个与传入的`firstName`相同的联系人。如果存在，那么还需要检查对应的联系人中是否存在`prop`属性。

如果它们都存在，函数返回`prop`属性对应的值。

如果`firstName`值不存在，返回`"No such contact"`。

如果`prop`属性不存在，返回`"No such property"`。

# --hints--

`"Kristian", "lastName"`应该返回 `"Vos"`。

```js
assert(lookUpProfile('Kristian', 'lastName') === 'Vos');
```

`"Sherlock", "likes"`应该返回 `["Intriguing Cases", "Violin"]`。

```js
assert.deepEqual(lookUpProfile('Sherlock', 'likes'), [
  'Intriguing Cases',
  'Violin'
]);
```

`"Harry","likes"`应该返回 an array。

```js
assert(typeof lookUpProfile('Harry', 'likes') === 'object');
```

`"Bob", "number"`应该返回 "No such contact"。

```js
assert(lookUpProfile('Bob', 'number') === 'No such contact');
```

`"Bob", "potato"`应该返回 "No such contact"。

```js
assert(lookUpProfile('Bob', 'potato') === 'No such contact');
```

`"Akira", "address"`应该返回 "No such property"。

```js
assert(lookUpProfile('Akira', 'address') === 'No such property');
```

# --solutions--

