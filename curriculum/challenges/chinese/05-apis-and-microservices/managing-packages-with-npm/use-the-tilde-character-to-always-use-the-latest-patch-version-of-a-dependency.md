---
id: 587d7fb5367417b2b2512c02
challengeType: 2
forumTopicId: 301532
title: 用波浪字符始终使用依赖项的最新补丁版本
---

## Description
<section id='description'>
在最后一个挑战中，我们告诉 npm 只包含特定版本的依赖包。如果想让项目各个部分保持相互兼容，锁定依赖包版本是一个有效的办法。但是大多数情况下，我们并不希望错过依赖项的问题修复，因为它们通常包含重要的安全补丁，而且它们理论上也会兼容我们既有的代码。
为了让 npm 依赖项更新到最新的修订版，你可以在依赖包的版本号前加一个波浪符号（~）。在 package.json 中，我们当前的 moment 依赖包更新规则是：仅使用特定版本（2.10.2），但我们想用它最新的 2.10.x 版本。

```json
"package": "~1.3.8"
```

</section>

## Instructions
<section id='instructions'>
在 package.json 文件中，当前有关 npm 如何升级的规则是使用特定版本（2.10.2）。 但是现在，要允许使用最新的2.10.x版本。
在 dependencies 中，给 moment 的版本号添加波浪符号（~）前缀，允许 npm 将其更新为最新的修订版。
请注意，原本的版本号不用更改。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "'dependencies' 应该包含 'moment'。"
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, ''moment'', ''"dependencies" does not include "moment"''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: "'moment' 的版本号应该是 '~2.10.2'。"
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert.match(packJson.dependencies.moment, /^\~2\.10\.2/, ''Wrong version of "moment". It should be ~2.10.2''); }, xhr => { throw new Error(xhr.responseText); })'

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
