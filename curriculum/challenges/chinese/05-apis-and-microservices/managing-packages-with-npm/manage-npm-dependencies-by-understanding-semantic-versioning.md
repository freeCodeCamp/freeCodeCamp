---
id: 587d7fb5367417b2b2512c01
challengeType: 2
forumTopicId: 301529
title: 通过理解语义版本化来管理 npm 依赖关系
---

## Description
<section id='description'>
在 package.json 中，dependencies 这部分的 npm 包的版本号遵循所谓的语义化版本（SemVer），它是一种软件版本控制的行业标准，旨在使管理依赖项更加容易。在 npm 上发布的库、框架或其它工具都应该使用语义化版本（SemVer），以便让使用该依赖包的用户能够在依赖包需要升级时，提前规划自己的项目需要为之做出的改动。
在开发使用外部依赖项的软件（大多数情况都是这样）时，了解语义化版本（SemVer）会很有用。有一天你会明白这些数字的含义，在项目中它可以避免你意外地引入一些非向下兼容的更改，同时也能避免“昨天还能好好的运行，今天就不行了”这种情况发生。

```json
"package": "MAJOR.MINOR.PATCH"
```

主版本号 MAJOR：当你做了不向下兼容的公共 API 修改，
次版本号 MINOR：当你添加了向下兼容的新功能，
修订号 PATCH：当你做了向下兼容的问题修正。
这意味着修订号是用来修复错误的，次版本号则是添加了新功能，但它们都没有破坏之前的功能。最后，主版本号的变更则是添加了对早期版本不兼容的更改。
</section>

## Instructions
<section id='instructions'>
在 package.json 中，修改 dependencies 里的 moment 的版本号，让它的主版本是 2，次版本号是 10，修订号是 2。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "'dependencies' 应该包含 'moment'。"
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, ''moment'', ''"dependencies" does not include "moment"''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: "'moment' 的版本号应该是 '2.10.2'。"
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert.equal(packJson.dependencies.moment,"2.10.2", ''Wrong version of "moment". It should be 2.10.2''); }, xhr => { throw new Error(xhr.responseText); })'

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
