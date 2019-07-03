---
id: 587d7b7c367417b2b2512b19
title: Modify an Object Nested Within an Object
challengeType: 1

videoUrl: ''
localeTitle: Modify an Object Nested Within an Object
---

## Description
<section id='description'>
现在我们来看一个稍微复杂一点的对象。对象中也可以嵌套任意层的对象。对象的属性值可以是 JavaScript 支持的任意类型，包括数组和其他对象。请看以下例子：
<blockquote>let nestedObject = {<br>&nbsp;&nbsp;id: 28802695164,<br>&nbsp;&nbsp;date: 'December 31, 2016',<br>&nbsp;&nbsp;data: {<br>&nbsp;&nbsp;&nbsp;&nbsp;totalUsers: 99,<br>&nbsp;&nbsp;&nbsp;&nbsp;online: 80,<br>&nbsp;&nbsp;&nbsp;&nbsp;onlineStatus: {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;active: 67,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;away: 13<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;}<br>};</blockquote>
<code>nestedObject</code>有 3 个唯一的键：值为一个数字的<code>id</code>、值为一个字符串的<code>date</code>和值为一个嵌套了其他对象的对象的<code>data</code>。虽然对象中的数据可能很复杂，我们仍能使用上一个挑战中讲的符号来访问我们需要的信息。
</section>

## Instructions
<section id='instructions'>
我们已经定义了一个<code>userActivity</code>对象，它包含了另一个对象。你可以用上一个挑战中那样的方式来修改被嵌套的对象的属性。请将<code>online</code>属性设为<code>45</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>userActivity</code>应该含有<code>id</code>、<code>date</code>和<code>data</code>属性。
    testString: assert('id' in userActivity && 'date' in userActivity && 'data' in userActivity, '<code>userActivity</code>应该含有<code>id</code>、<code>date</code>和<code>data</code>属性。');
  - text: <code>userActivity</code>应该有一个<code>data</code>属性，该属性要是一个含有<code>totalUsers</code>和<code>online</code>属性的对象。
    testString: assert('totalUsers' in userActivity.data && 'online' in userActivity.data, '<code>userActivity</code>应该有一个<code>data</code>属性，该属性要是一个含有<code>totalUsers</code>和<code>online</code>属性的对象。');
  - text: <code>userActivity</code>的<code>data</code>属性值中的<code>online</code>属性应该被设为<code>45</code>。
    testString: assert(userActivity.data.online === 45, '<code>userActivity</code>的<code>data</code>属性值中的<code>online</code>属性应该被设为<code>45</code>。');
  - text: 你应该用点符号或者方括号符号来设置<code>online</code>属性。
    testString: 'assert.strictEqual(code.search(/online: 45/), -1, "你应该用点符号或者方括号符号来设置<code>online</code>属性。");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              