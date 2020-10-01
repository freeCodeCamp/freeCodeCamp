---
id: 587d7fb4367417b2b2512c00
challengeType: 2
forumTopicId: 301527
title: 使用 npm 的外部软件包扩展您的项目
---

## Description
<section id='description'>
使用包管理器的最大原因之一是它们强大的依赖管理特性。在新的计算机上开始一个项目时，不用手动确认你已安装所有的依赖，npm 会自动为你安装它们。但是 npm 如何准确的知道你项目需要哪些依赖呢？我们来看看 package.json 中 dependencies 这一部分。
在 dependencies 这一部分，你的项目需要按照下面这种格式来存储这些依赖包：

```json
"dependencies": {
  "package-name": "version",
  "express": "4.14.0"
}

```

</section>

## Instructions
<section id='instructions'>
在 package.json 的 dependencies 字段中添加一个版本号为 2.14.0 的 moment 包。
Moment 是一个非常方便的库，它用来处理时间和日期。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "'dependencies' 应该包含 'moment'。"
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data);  assert.property(packJson.dependencies, ''moment'', ''"dependencies" does not include "moment"''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: "'moment' 的版本应该是 '2.14.0'。"
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data);  assert.match(packJson.dependencies.moment, /^[\^\~]?2\.14\.0/, ''Wrong version of "moment" installed. It should be 2.14.0''); }, xhr => { throw new Error(xhr.responseText); })'

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
