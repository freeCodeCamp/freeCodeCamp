---
id: 587d7fb4367417b2b2512bfd
challengeType: 2
forumTopicId: 301526
title: 给 package.json 添加关键词
---

## Description
<section id='description'>
你可以在 keywords 字段中使用相关的关键字描述项目。

```json
"keywords": [ "descriptive", "related", "words" ],
```

正如你所见，这个字段的结构是一个由双引号字符串组成的数组。
</section>

## Instructions
<section id='instructions'>
在 Glitch 项目的 package.json 中，给 keywords 添加适当的字符串数组。
关键词之一应该是 freecodecamp。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "package.json 应该有一个有效的 'keywords' 键。"
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert(packJson.keywords, ''"keywords" is missing''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: "'keywords' 应该是一个数组。"
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert.isArray(packJson.keywords, ''"keywords" is not an array''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: "'keywords' 中应该包含关键词 'freecodecamp'。"
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data);     assert.include(packJson.keywords, ''freecodecamp'', ''"keywords" does not include "freecodecamp"''); },  xhr => { throw new Error(xhr.responseText); })'

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
