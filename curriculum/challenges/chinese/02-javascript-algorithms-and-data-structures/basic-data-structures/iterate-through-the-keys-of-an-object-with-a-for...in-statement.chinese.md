---
id: 587d7b7d367417b2b2512b1d
title:  Iterate Through the Keys of an Object with a for...in Statement
challengeType: 1

videoUrl: ''
localeTitle:  Iterate Through the Keys of an Object with a for...in Statement
---

## Description
<section id='description'>
有时候你需要遍历一个对象中的所有键。这需要 JavaScript 中的一个特殊语法：<dfn>for...in</dfn> 语句。以遍历 <code>users</code> 对象的键为例：
<blockquote>for (let user in users) {<br>&nbsp;&nbsp;console.log(user);<br>};<br><br>// 输出：<br>Alan<br>Jeff<br>Sarah<br>Ryan</blockquote>
在这个语句中，我们定义了一个<code>user</code>变量，你可以看到，这个变量在 for...in 语句对对象的每一个键的遍历中都会被重置。
<strong>注意：</strong><br>跟数组不同，对象中的键是无序的，因此一个对象中某个键的位置，或者说它出现的相对顺序，在引用或访问该键时是不确定的。
</section>

## Instructions
<section id='instructions'>
我们已经定义了一个<code>countOnline</code>函数，请在其中使用一个 <dfn>for...in</dfn> 语句来遍历<code>users</code>对象中的用户，并返回<code>online</code>属性为<code>true</code>的用户的数量。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>users</code>对象中应该包含<code>online</code>为<code>true</code>的用户对象<code>Jeff</code>和<code>Ryan</code>以及<code>online</code>为<code>false</code>的用户对象<code>Alan</code>和<code>Sarah</code>。
    testString: assert(users.Alan.online === false && users.Jeff.online === true &&  users.Sarah.online === false &&  users.Ryan.online === true, '<code>users</code>对象中应该包含<code>online</code>为<code>true</code>的用户对象<code>Jeff</code>和<code>Ryan</code>以及<code>online</code>为<code>false</code>的用户对象<code>Alan</code>和<code>Sarah</code>。');
  - text: <code>countOnline</code>函数应该返回<code>online</code>属性为<code>true</code>的用户的数量。
    testString: 'assert((function() { users.Harry = {online: true}; users.Sam = {online: true}; users.Carl = {online: true}; return countOnline(users) })() === 5, "<code>countOnline</code>函数应该返回<code>online</code>属性为<code>true</code>的用户的数量。");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              