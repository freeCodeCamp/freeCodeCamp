---
id: a2f1d72d9b908d0bd72bb9f6
title: Make a Person
challengeType: 5
videoUrl: ''
localeTitle: 做一个人
---

## Description
<section id="description">使用以下方法填写对象构造函数： <blockquote> getFirstName（）getLastName（）getFullName（）setFirstName（first）setLastName（last）setFullName（firstAndLast） </blockquote>运行测试以查看每个方法的预期输出。采用参数的方法必须只接受一个参数，并且必须是一个字符串。这些方法必须是与对象交互的唯一可用方法。如果卡住，请记得使用<a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> 。尝试配对程序。编写自己的代码。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Object.keys(bob).length</code>应该返回6。
    testString: assert.deepEqual(Object.keys(bob).length, 6);
  - text: <code>bob instanceof Person</code>应该返回true。
    testString: assert.deepEqual(bob instanceof Person, true);
  - text: <code>bob.firstName</code>应返回undefined。
    testString: assert.deepEqual(bob.firstName, undefined);
  - text: <code>bob.lastName</code>应返回undefined。
    testString: assert.deepEqual(bob.lastName, undefined);
  - text: <code>bob.getFirstName()</code>应返回“Bob”。
    testString: assert.deepEqual(bob.getFirstName(), 'Bob');
  - text: <code>bob.getLastName()</code>应返回“Ross”。
    testString: assert.deepEqual(bob.getLastName(), 'Ross');
  - text: <code>bob.getFullName()</code>应该返回“Bob Ross”。
    testString: assert.deepEqual(bob.getFullName(), 'Bob Ross');
  - text: <code>bob.getFullName()</code>应该在<code>bob.setFirstName(&quot;Haskell&quot;)</code>之后返回“Haskell Ross”。
    testString: assert.strictEqual((function () { bob.setFirstName("Haskell"); return bob.getFullName(); })(), 'Haskell Ross');
  - text: <code>bob.getFullName()</code>应该在<code>bob.setLastName(&quot;Curry&quot;)</code>之后返回“Haskell Curry”。
    testString: assert.strictEqual((function () { var _bob=new Person('Haskell Ross'); _bob.setLastName("Curry"); return _bob.getFullName(); })(), 'Haskell Curry');
  - text: <code>bob.getFullName()</code>应该在<code>bob.setFullName(&quot;Haskell Curry&quot;)</code>之后返回“Haskell Curry”。
    testString: assert.strictEqual((function () { bob.setFullName("Haskell Curry"); return bob.getFullName(); })(), 'Haskell Curry');
  - text: <code>bob.getFirstName()</code>应该在<code>bob.setFullName(&quot;Haskell Curry&quot;)</code>之后返回“Haskell”。
    testString: assert.strictEqual((function () { bob.setFullName("Haskell Curry"); return bob.getFirstName(); })(), 'Haskell');
  - text: <code>bob.getLastName()</code>应该在<code>bob.setFullName(&quot;Haskell Curry&quot;)</code>之后返回“Curry”。
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
// solution required
```

/section>
