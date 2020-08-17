---
id: 587d7fb4367417b2b2512bfd
title: Add Keywords to Your package.json
localeTitle: 将关键字添加到package.json
challengeType: 2
---

## Description
<section id='description'> 
keywords-field是您可以使用相关关键字描述项目的地方。 <code>0</code>示例
<code>"keywords": [ "descriptive", "related", "words" ],</code> <code>0</code>如您所见，此字段的结构为双引号字符串数组。 <code>0</code>说明<code>0</code>将一组合适的字符串添加到Glitch项目的package.json中的keywords-field。 <code>0</code>其中一个关键字应该是freecodecamp。 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: package.json应该有一个有效的“关键字”键
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert(packJson.keywords, ''"keywords" is missing''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: '“keywords”字段应为Array'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert.isArray(packJson.keywords, ''"keywords" is not an array''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: '“关键字”应包含“freecodecamp”'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data);     assert.include(packJson.keywords, ''freecodecamp'', ''"keywords" does not include "freecodecamp"''); },  xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
