---
id: 587d7fb5367417b2b2512c04
challengeType: 2
forumTopicId: 301530
title: 从依赖项中删除包
---

## Description
<section id='description'>
在 package.json 中 dependencies 这一部分，目前尝试了一些管理依赖的方式。你已经添加了一些外部的依赖包到项目中，甚至通过一些特殊的字符比如波浪符号（~）或者插入符号（^）来告诉 npm 你想要的版本类型。
但是，如果想要删除不需要的依赖包，该怎么办呢？你可能已经猜到了——只需要删除 dependencies 中的键值对就行了。
同样的方法也适用于删除 package.json 中的其它字段
</section>

## Instructions
<section id='instructions'>
删除 moment 依赖包。
删除依赖包后，确保没有多余的逗号。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "'dependencies' 不包含 'moment'。"
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert.notProperty(packJson.dependencies, ''moment'', ''"dependencies" still includes "moment"''); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```

</section>
