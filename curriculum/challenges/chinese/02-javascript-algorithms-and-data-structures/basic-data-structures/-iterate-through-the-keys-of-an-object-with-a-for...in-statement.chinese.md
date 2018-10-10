---
id: 587d7b7d367417b2b2512b1d
title: ' Iterate Through the Keys of an Object with a for...in Statement'
challengeType: 1
videoUrl: ''
localeTitle: 使用for ... in Statement中的对象键迭代
---

## Description
<section id="description">有时您可能需要遍历对象中的所有键。这需要JavaScript中的特定语法，称为<dfn>for ... in</dfn>语句。对于我们的<code>users</code>对象，这可能看起来像： <blockquote> for（让用户在用户中）{ <br>的console.log（用户）; <br> }; <br><br> //日志： <br>艾伦<br>杰夫<br>莎拉<br>瑞安</blockquote>在这个语句中，我们定义了一个变量<code>user</code> ，正如您所看到的，在每次迭代期间，当该语句循环遍历该对象时，该变量被重置为每个对象的键，从而导致每个用户的名称被打印到控制台。 <strong>注意：</strong> <br>对象不像数组那样保持对存储键的排序;因此，当引用或访问该密钥时，对象上的键位置或其出现的相对顺序是无关紧要的。 </section>

## Instructions
<section id="instructions">我们定义了一个函数<code>countOnline</code> ;在此函数中使用<dfn>for ... in</dfn>语句循环访问<code>users</code>对象中的<code>users</code>并返回其<code>online</code>属性设置为<code>true</code>的用户数。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>users</code>对象包含用户<code>Jeff</code>和<code>Ryan</code> ， <code>online</code>设置为<code>true</code> ，用户<code>Alan</code>和<code>Sarah</code> <code>online</code>设置为<code>false</code>
    testString: 'assert(users.Alan.online === false && users.Jeff.online === true &&  users.Sarah.online === false &&  users.Ryan.online === true, "The <code>users</code> object contains users <code>Jeff</code> and <code>Ryan</code> with <code>online</code> set to <code>true</code> and users <code>Alan</code> and <code>Sarah</code> with <code>online</code> set to <code>false</code>");'
  - text: 函数<code>countOnline</code>返回<code>online</code>属性设置为<code>true</code>的用户数
    testString: 'assert((function() { users.Harry = {online: true}; users.Sam = {online: true}; users.Carl = {online: true}; return countOnline(users) })() === 5, "The function <code>countOnline</code> returns the number of users with the <code>online</code> property set to <code>true</code>");'

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

function countOnline(obj) {
  // change code below this line

  // change code above this line
}

console.log(countOnline(users));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
