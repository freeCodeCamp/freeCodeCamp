---
id: 587d7fb5367417b2b2512c03
challengeType: 2
forumTopicId: 301531
title: 用插入字符可以使用依赖项的最新次要版本
---

## Description
<section id='description'>
和上一个挑战中我们学到的波浪符号（~）来安装最新的修订版依赖一样，使用插入符号（^）允许 npm 来安装功能更新。它们的不同之处在于：插入符号（^）允许次版本和修订版更新。
此刻，你项目中的 moment 依赖包的版本应该是 ~2.10.2，这意味着 npm 可以安装 2.10.x 版的 moment，如果使用插入符号（^）来替换版本号的前缀，那么 npm 可以安装的版本则是 2.x.x。

```json
"package": "^1.3.8"
```

这会更新 package 到任意的 1.x.x 版本。 
</section>

## Instructions
<section id='instructions'>
使用插入符号（^）为依赖项中的 moment 版本添加前缀，允许 npm 更新依赖包到任意向下兼容的新功能版。
请注意，原本的版本号不用更改。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "'dependencies' 应包含 'moment'。"
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, ''moment'', ''"dependencies" does not include "moment"''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: "'moment' 的版本应匹配 '^2.x.x'。"
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert.match(packJson.dependencies.moment, /^\^2\./, ''Wrong version of "moment". It should be ^2.10.2''); }, xhr => { throw new Error(xhr.responseText); })'

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

