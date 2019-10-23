---
id: 587d7b7d367417b2b2512b1e
title: Generate an Array of All Object Keys with Object.keys()
challengeType: 1
videoUrl: ''
localeTitle: 使用Object.keys（）生成所有对象键的数组
---

## Description
<section id="description">我们还可以使用<code>Object.keys()</code>方法生成一个数组，其中包含存储在对象中的所有键，并传入一个对象作为参数。这将返回一个数组，其中的字符串表示对象中的每个属性。同样，数组中的条目没有特定的顺序。 </section>

## Instructions
<section id="instructions">完成编写<code>getArrayOfUsers</code>函数，以便它返回一个数组，该数组包含它作为参数接收的对象中的所有属性。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>users</code>对象仅包含<code>Alan</code> ， <code>Jeff</code> ， <code>Sarah</code>和<code>Ryan</code>
    testString: 'assert("Alan" in users && "Jeff" in users && "Sarah" in users && "Ryan" in users && Object.keys(users).length === 4, "The <code>users</code> object only contains the keys <code>Alan</code>, <code>Jeff</code>, <code>Sarah</code>, and <code>Ryan</code>");'
  - text: <code>getArrayOfUsers</code>函数返回一个数组，其中包含<code>users</code>对象中的所有键
    testString: 'assert((function() { users.Sam = {}; users.Lewis = {}; let R = getArrayOfUsers(users); return (R.indexOf("Alan") !== -1 && R.indexOf("Jeff") !== -1 && R.indexOf("Sarah") !== -1 && R.indexOf("Ryan") !== -1 && R.indexOf("Sam") !== -1 && R.indexOf("Lewis") !== -1); })() === true, "The <code>getArrayOfUsers</code> function returns an array which contains all the keys in the <code>users</code> object");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // change code below this line

  // change code above this line
}

console.log(getArrayOfUsers(users));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
