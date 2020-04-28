---
id: 587d7b7c367417b2b2512b19
title: Modify an Object Nested Within an Object
challengeType: 1
videoUrl: ''
localeTitle: 修改嵌套在对象中的对象
---

## Description
<section id="description">现在让我们来看一个稍微复杂的对象。对象属性可以嵌套到任意深度，它们的值可以是JavaScript支持的任何类型的数据，包括数组甚至其他对象。考虑以下： <blockquote>让nestedObject = { <br> id：28802695164， <br>日期：&#39;2016年12月31日&#39;， <br>数据：{ <br>总用户：99， <br>在线：80， <br> onlineStatus：{ <br>活跃：67， <br>离开：13 <br> } <br> } <br> }; </blockquote> <code>nestedObject</code>有三个唯一的键： <code>id</code> ，其值为数字， <code>date</code>为字符串的<code>data</code> ， <code>data</code> ，其值为另一个嵌套在其中的对象。虽然结构很快就会变得复杂，但我们仍然可以使用相同的符号来访问我们需要的信息。 </section>

## Instructions
<section id="instructions">在这里，我们定义了一个对象<code>userActivity</code> ，其中包含嵌套在其中的另一个对象。您可以像修改上一个挑战中的属性一样修改此嵌套对象的属性。将<code>online</code>密钥的值设置为<code>45</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>userActivity</code>具有<code>id</code> ， <code>date</code>和<code>data</code>属性
    testString: assert('id' in userActivity && 'date' in userActivity && 'data' in userActivity);
  - text: <code>userActivity</code>具有设置为具有密钥<code>totalUsers</code>和<code>online</code>的对象的<code>data</code>密钥
    testString: assert('totalUsers' in userActivity.data && 'online' in userActivity.data);
  - text: 嵌套在<code>userActivity</code> <code>data</code>键中的<code>online</code>属性应设置为<code>45</code>
    testString: assert(userActivity.data.online === 45);
  - text: <code>online</code>属性使用点或括号表示法设置
    testString: 'assert.strictEqual(code.search(/online: 45/), -1);'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// change code below this line

// change code above this line

console.log(userActivity);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
