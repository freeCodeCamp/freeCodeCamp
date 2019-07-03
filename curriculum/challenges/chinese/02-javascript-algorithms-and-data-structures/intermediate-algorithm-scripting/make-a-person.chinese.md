---
id: a2f1d72d9b908d0bd72bb9f6
title: Make a Person
challengeType: 5

videoUrl: ''
localeTitle: Make a Person
---

## Description
<section id='description'>
给出一个含有两个数字的数组，我们需要写一个函数，让它返回这两个数字间所有数字（包含这两个数字）的总和。
注意，较小数不一定总是出现在数组的第一个元素。
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
    testString: assert.deepEqual(Object.keys(bob).length, 6, '<code>Object.keys(bob).length</code>应该返回 6。');
  - text: <code>bob instanceof Person</code>应该返回<code>true</code>。
    testString: assert.deepEqual(bob instanceof Person, true, '<code>bob instanceof Person</code>应该返回<code>true</code>。');
  - text: <code>bob.firstName</code>应该返回<code>undefined</code>。
    testString: assert.deepEqual(bob.firstName, undefined, '<code>bob.firstName</code>应该返回<code>undefined</code>。');
  - text: <code>bob.lastName</code>应该返回<code>undefined</code>。
    testString: assert.deepEqual(bob.lastName, undefined, '<code>bob.lastName</code>应该返回<code>undefined</code>。');
  - text: "<code>bob.getFirstName()</code>应该返回 'Bob'。"
    testString: assert.deepEqual(bob.getFirstName(), 'Bob', '<code>bob.getFirstName()</code>应该返回 "Bob"。');
  - text: "<code>bob.getLastName()</code>应该返回 'Ross'。"
    testString: assert.deepEqual(bob.getLastName(), 'Ross', '<code>bob.getLastName()</code>应该返回 "Ross"。');
  - text: "<code>bob.getFullName()</code>应该返回 'Bob Ross'。"
    testString: assert.deepEqual(bob.getFullName(), 'Bob Ross', '<code>bob.getFullName()</code>应该返回 "Bob Ross"。');
  - text: "调用<code>bob.setFirstName('Haskell')</code>之后，<code>bob.getFullName()</code>应该返回 'Haskell Ross'。"
    testString: assert.strictEqual((function () { bob.setFirstName("Haskell"); return bob.getFullName(); })(), 'Haskell Ross', '调用<code>bob.setFirstName("Haskell")</code>之后，<code>bob.getFullName()</code>应该返回 "Haskell Ross"。');
  - text: "调用<code>bob.setLastName('Curry')</code>之后，<code>bob.getFullName()</code>应该返回 'Haskell Curry'。"
    testString: assert.strictEqual((function () { var _bob=new Person('Haskell Ross'); _bob.setLastName("Curry"); return _bob.getFullName(); })(), 'Haskell Curry', '调用<code>bob.setLastName("Curry")</code>之后，<code>bob.getFullName()</code>应该返回 "Haskell Curry"。');
  - text: "调用<code>bob.setFullName('Haskell Curry')</code>之后，<code>bob.getFullName()</code>应该返回 'Haskell Curry'。"
    testString: assert.strictEqual((function () { bob.setFullName("Haskell Curry"); return bob.getFullName(); })(), 'Haskell Curry', '调用<code>bob.setFullName("Haskell Curry")</code>之后，<code>bob.getFullName()</code>应该返回 "Haskell Curry"。');
  - text: "调用<code>bob.setFullName('Haskell Curry')</code>之后，<code>bob.getFirstName()</code>应该返回 'Haskell'。"
    testString: assert.strictEqual((function () { bob.setFullName("Haskell Curry"); return bob.getFirstName(); })(), 'Haskell', '调用<code>bob.setFullName("Haskell Curry")</code>之后，<code>bob.getFirstName()</code>应该返回 "Haskell"。');
  - text: "调用<code>bob.setFullName('Haskell Curry')</code>之后，<code>bob.getLastName()</code>应该返回 'Curry'。"
    testString: assert.strictEqual((function () { bob.setFullName("Haskell Curry"); return bob.getLastName(); })(), 'Curry', '调用<code>bob.setFullName("Haskell Curry")</code>之后，<code>bob.getLastName()</code>应该返回 "Curry"。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















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
              