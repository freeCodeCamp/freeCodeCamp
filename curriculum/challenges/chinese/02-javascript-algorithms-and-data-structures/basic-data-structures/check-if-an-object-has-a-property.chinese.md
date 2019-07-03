---
id: 587d7b7d367417b2b2512b1c
title: Check if an Object has a Property
challengeType: 1

videoUrl: ''
localeTitle: Check if an Object has a Property
---

## Description
<section id='description'>
现在我们可以新增、修改和移除对象中的属性。但如果我们想知道一个对象中是否含有某个属性呢？JavaScript 为我们提供了两种不同的方式来实现这个功能，一个是<code>hasOwnProperty()</code>方法，另一个是<code>in</code>关键字。如果我们有一个<code>users</code>对象，它有一个<code>Alan</code>属性，我们可以用以下两种方式之一来检查该属性在对象中是否存在：
<blockquote>users.hasOwnProperty('Alan');<br>'Alan' in users;<br>// 都返回 true</blockquote>
</section>

## Instructions
<section id='instructions'>
我们已经创建了一个含有一些用户的<code>users</code>对象和一个<code>isEveryoneHere</code>函数，该函数接受<code>users</code>对象作为参数。请完成该函数使其在<code>users</code>对象中包含以下 4 个键<code>Alan</code>、<code>Jeff</code>、<code>Sarah</code>和<code>Ryan</code>时才返回<code>true</code>，否则返回<code>false</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>users</code>对象应该只含有<code>Alan</code>、<code>Jeff</code>、<code>Sarah</code>和<code>Ryan</code>4 个键。
    testString: assert('Alan' in users && 'Jeff' in users && 'Sarah' in users && 'Ryan' in users && Object.keys(users).length === 4, '<code>users</code>对象应该只含有<code>Alan</code>、<code>Jeff</code>、<code>Sarah</code>和<code>Ryan</code>4 个键。');
  - text: <code>isEveryoneHere</code>函数在<code>users</code>对象包含<code>Alan</code>、<code>Jeff</code>、<code>Sarah</code>和<code>Ryan</code>4 个键时应该返回<code>true</code>。
    testString: assert(isEveryoneHere(users) === true, '<code>isEveryoneHere</code>函数在<code>users</code>对象包含<code>Alan</code>、<code>Jeff</code>、<code>Sarah</code>和<code>Ryan</code>4 个键时应该返回<code>true</code>。');
  - text: <code>isEveryoneHere</code>函数在<code>users</code>对象不包含<code>Alan</code>、<code>Jeff</code>、<code>Sarah</code>或<code>Ryan</code>4 个键时应该返回<code>false</code>。
    testString: assert((function() { delete users.Alan; delete users.Jeff; delete users.Sarah; delete users.Ryan; return isEveryoneHere(users) })() === false, '<code>isEveryoneHere</code>函数在<code>users</code>对象不包含<code>Alan</code>、<code>Jeff</code>、<code>Sarah</code>或<code>Ryan</code>4 个键时应该返回<code>false</code>。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              