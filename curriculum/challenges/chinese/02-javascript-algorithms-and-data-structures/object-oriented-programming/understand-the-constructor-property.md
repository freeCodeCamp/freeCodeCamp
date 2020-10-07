---
id: 587d7daf367417b2b2512b7e
challengeType: 1
forumTopicId: 301327
title: 了解构造函数属性
---

## Description
<section id='description'>
在上一个挑战中创建的实例对象<code>duck</code>和<code>beagle</code>都有一个特殊的<code>constructor</code>属性：

```js
let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird);  //prints true
console.log(beagle.constructor === Dog);  //prints true
```

需要注意到的是这个<code>constructor</code>属性是对创建这个实例的构造函数的一个引用。
<code>constructor</code>属性存在的一个优势是，我们可以通过检查这个属性来找出它是一个什么样的对象。下面是一个例子，来看看是怎么使用的：

```js
function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}
```

<strong>注意：</strong><br>由于<code>constructor</code>属性可以被重写（在下面两节挑战中将会遇到），所以使用<code>instanceof</code>方法来检查对象的类型会更好。
</section>

## Instructions
<section id='instructions'>
写一个<code>joinDogFraternity</code>函数，传入一个<code>candidate</code>参数并使用<code>constructor</code>属性来判断传入的 candidate 是不是<code>Dog</code>创建的对象实例，如果是，就返回<code>true</code>，否则返回<code>false</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>joinDogFraternity</code>应该被定义为一个函数。
    testString: assert(typeof(joinDogFraternity) === 'function');
  - text: 如果<code>candidate</code>是<code>Dog</code>的一个对象实例，则<code>joinDogFraternity</code>函数应该返回<code>true</code>。
    testString: assert(joinDogFraternity(new Dog("")) === true);
  - text: <code>joinDogFraternity</code>中应该用到<code>constructor</code>属性。
    testString: assert(/\.constructor/.test(code) && !/instanceof/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog(name) {
  this.name = name;
}

// Add your code below this line
function joinDogFraternity(candidate) {

}

```

</div>



</section>

## Solution
<section id='solution'>


```js
function Dog(name) {
  this.name = name;
}
function joinDogFraternity(candidate) {
  return candidate.constructor === Dog;
}
```

</section>
