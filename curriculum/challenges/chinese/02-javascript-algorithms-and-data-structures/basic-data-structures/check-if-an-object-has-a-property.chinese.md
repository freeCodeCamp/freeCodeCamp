---
id: 587d7b7d367417b2b2512b1c
title: Check if an Object has a Property
challengeType: 1
videoUrl: ''
localeTitle: 检查对象是否具有属性
---

## Description
<section id="description">现在我们可以添加，修改和删除对象中的键。但是，如果我们只是想知道某个对象是否具有特定属性呢？ JavaScript为我们提供了两种不同的方法。一个使用<code>hasOwnProperty()</code>方法，另一个使用<code>in</code>关键字。如果我们有一个具有<code>Alan</code>属性的对象<code>users</code> ，我们可以通过以下任一方式检查其存在： <blockquote> users.hasOwnProperty（ &#39;艾伦&#39;）; <br> &#39;艾伦&#39;在用户; <br> //都返回true </blockquote></section>

## Instructions
<section id="instructions">我们创建了一个对象， <code>users</code> ，其中包含一些用户和一个函数<code>isEveryoneHere</code> ，我们将<code>users</code>对象作为参数传递给它。完成编写此函数，以便仅当<code>users</code>对象包含所有四个名称（ <code>Alan</code> ， <code>Jeff</code> ， <code>Sarah</code>和<code>Ryan</code> ）作为键时才返回<code>true</code> ，否则返回<code>false</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>users</code>对象仅包含<code>Alan</code> ， <code>Jeff</code> ， <code>Sarah</code>和<code>Ryan</code>
    testString: 'assert("Alan" in users && "Jeff" in users && "Sarah" in users && "Ryan" in users && Object.keys(users).length === 4, "The <code>users</code> object only contains the keys <code>Alan</code>, <code>Jeff</code>, <code>Sarah</code>, and <code>Ryan</code>");'
  - text: 如果<code>Alan</code> ， <code>Jeff</code> ， <code>Sarah</code>和<code>Ryan</code>是<code>users</code>对象的属性，则函数<code>isEveryoneHere</code>返回<code>true</code>
    testString: 'assert(isEveryoneHere(users) === true, "The function <code>isEveryoneHere</code> returns <code>true</code> if <code>Alan</code>, <code>Jeff</code>, <code>Sarah</code>, and <code>Ryan</code> are properties on the <code>users</code> object");'
  - text: 如果<code>Alan</code> ， <code>Jeff</code> ， <code>Sarah</code>和<code>Ryan</code>不是<code>users</code>对象的属性，则函数<code>isEveryoneHere</code>返回<code>false</code>
    testString: 'assert((function() { delete users.Alan; delete users.Jeff; delete users.Sarah; delete users.Ryan; return isEveryoneHere(users) })() === false, "The function <code>isEveryoneHere</code> returns <code>false</code> if <code>Alan</code>, <code>Jeff</code>, <code>Sarah</code>, and <code>Ryan</code> are not properties on the <code>users</code> object");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  // change code below this line

  // change code above this line
}

console.log(isEveryoneHere(users));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
