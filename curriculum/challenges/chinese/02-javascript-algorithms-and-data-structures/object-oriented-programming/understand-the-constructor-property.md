---
id: 587d7daf367417b2b2512b7e
title: 了解构造函数属性
challengeType: 1
forumTopicId: 301327
dashedName: understand-the-constructor-property
---

# --description--

在上一个挑战中创建的实例对象 `duck` 和 `beagle` 都有一个特殊的 `constructor` 属性：

```js
let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird); 
console.log(beagle.constructor === Dog);
```

这两次 `console.log` 调用都将在控制台中显示 `true`。

需要注意到的是这个 `constructor` 属性是对创建这个实例的构造函数的一个引用。 `constructor` 属性的一个好处是可以通过检查这个属性来找出它是一个什么对象。 下面是一个例子，来看看是怎么使用的：

```js
function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}
```

**注意：** 由于 `constructor` 属性可以被重写（在下面两节挑战中将会遇到），所以最好使用`instanceof` 方法来检查对象的类型。

# --instructions--

写一个 `joinDogFraternity` 函数，传入一个 `candidate` 参数并使用 `constructor` 属性来判断传入的 candidate 是不是 `Dog` 创建的对象实例，如果是，就返回 `true`，否则返回 `false`。

# --hints--

`joinDogFraternity` 应该被定义为一个函数。

```js
assert(typeof joinDogFraternity === 'function');
```

如果 `candidate` 是 `Dog` 的一个对象实例，则 `joinDogFraternity` 函数应该返回 `true`。

```js
assert(joinDogFraternity(new Dog('')) === true);
```

`joinDogFraternity` 中应该用到 `constructor` 属性。

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
