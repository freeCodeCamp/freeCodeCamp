---
id: 587d7fb4367417b2b2512bff
title: Add a Version to Your package.json
localeTitle: 在package.json中添加一个版本
challengeType: 2
---

## Description
<section id='description'> <code>0</code>该版本与package.json中必填字段之一一起。该字段描述了项目的当前版本。 <code>0</code>示例
<code>"version": "1.2",</code> <code>0</code>说明<code>0</code>在Glitch项目中向package.json添加版本。 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: package.json应该有一个有效的“版本”密钥
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert(packJson.version, ''"version" is missing''); }, xhr => { throw new Error(xhr.responseText); })'

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
