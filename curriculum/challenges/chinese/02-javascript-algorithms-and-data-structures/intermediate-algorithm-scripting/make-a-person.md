---
id: a2f1d72d9b908d0bd72bb9f6
challengeType: 5
forumTopicId: 16020
title: 构造一个 Person 类
---

## Description
<section id='description'>
在这道题目中，我们需要写一个构造器（constructor）函数。它只接收一个字符串参数<code>firstAndLast</code>，这个参数代表一个英文名的全名（姓和名）。这个构造函数创建出的实例需要具有以下方法：

```js
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
```

你可以点击 “运行测试”，然后就可以在底下的控制台中看到每个测试用例执行的情况。
方法接收一个字符串格式的参数。
这些方法必须是与对象进行交互的唯一可用方法。
如果你遇到了问题，请点击<a href='https://forum.freecodecamp.one/t/topic/157' target='_blank'>帮助</a>。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Object.keys(bob).length</code>应该返回 6。
    testString: assert.deepEqual(Object.keys(bob).length, 6);
  - text: <code>bob instanceof Person</code>应该返回<code>true</code>。
    testString: assert.deepEqual(bob instanceof Person, true);
  - text: <code>bob.firstName</code>应该返回<code>undefined</code>。
    testString: assert.deepEqual(bob.firstName, undefined);
  - text: <code>bob.lastName</code>应该返回<code>undefined</code>。
    testString: assert.deepEqual(bob.lastName, undefined);
  - text: "<code>bob.getFirstName()</code>应该返回 'Bob'。"
    testString: assert.deepEqual(bob.getFirstName(), 'Bob');
  - text: "<code>bob.getLastName()</code>应该返回 'Ross'。"
    testString: assert.deepEqual(bob.getLastName(), 'Ross');
  - text: "<code>bob.getFullName()</code>应该返回 'Bob Ross'。"
    testString: assert.deepEqual(bob.getFullName(), 'Bob Ross');
  - text: "调用<code>bob.setFirstName('Haskell')</code>之后，<code>bob.getFullName()</code>应该返回 'Haskell Ross'。"
    testString: assert.strictEqual((function () { bob.setFirstName("Haskell"); return bob.getFullName(); })(), 'Haskell Ross');
  - text: "调用<code>bob.setLastName('Curry')</code>之后，<code>bob.getFullName()</code>应该返回 'Haskell Curry'。"
    testString: assert.strictEqual((function () { var _bob=new Person('Haskell Ross'); _bob.setLastName("Curry"); return _bob.getFullName(); })(), 'Haskell Curry');
  - text: "调用<code>bob.setFullName('Haskell Curry')</code>之后，<code>bob.getFullName()</code>应该返回 'Haskell Curry'。"
    testString: assert.strictEqual((function () { bob.setFullName("Haskell Curry"); return bob.getFullName(); })(), 'Haskell Curry');
  - text: "调用<code>bob.setFullName('Haskell Curry')</code>之后，<code>bob.getFirstName()</code>应该返回 'Haskell'。"
    testString: assert.strictEqual((function () { bob.setFullName("Haskell Curry"); return bob.getFirstName(); })(), 'Haskell');
  - text: "调用<code>bob.setFullName('Haskell Curry')</code>之后，<code>bob.getLastName()</code>应该返回 'Curry'。"
    testString: assert.strictEqual((function () { bob.setFullName("Haskell Curry"); return bob.getLastName(); })(), 'Curry');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return "";
  };
  return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
```

</div>



</section>

## Solution
<section id='solution'>


```js
var Person = function(firstAndLast) {

  var firstName, lastName;

  function updateName(str) {
    firstName = str.split(" ")[0];
    lastName = str.split(" ")[1];
  }

  updateName(firstAndLast);

  this.getFirstName = function(){
    return firstName;
  };

  this.getLastName = function(){
    return lastName;
  };

  this.getFullName = function(){
    return firstName + " " + lastName;
  };

  this.setFirstName = function(str){
    firstName = str;
  };


  this.setLastName = function(str){
    lastName = str;
  };

  this.setFullName = function(str){
    updateName(str);
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();
```

</section>
