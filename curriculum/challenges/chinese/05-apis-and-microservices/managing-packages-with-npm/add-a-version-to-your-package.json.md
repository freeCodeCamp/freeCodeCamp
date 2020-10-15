---
id: 587d7fb4367417b2b2512bff
challengeType: 2
forumTopicId: 301525
title: 给 package.json 添加版本号
---

## Description
<section id='description'>
在 package.json 中 version 和 name 是所必填的字段之一。version 字段描述了当前项目的版本。

```json
"version": "1.2.0",
```

</section>

## Instructions
<section id='instructions'>
在 Glitch 项目中的 package.json 中添加一个版本号。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "package.json 应该包含一个有效的 'version' 键。"
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert(packJson.version, ''"version" is missing''); }, xhr => { throw new Error(xhr.responseText); })'

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
