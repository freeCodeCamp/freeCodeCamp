---
id: 587d7fb4367417b2b2512bfe
title: Add a License to Your package.json
localeTitle: 向package.json添加许可证
challengeType: 2
---

## Description
<section id='description'> <code>0</code>许可证字段用于通知项目用户他们可以使用它做什么。 <code>0</code>开源项目的一些常见许可证包括MIT和BSD。如果您想了解更多适合您项目的许可证，http：//choosealicense.com是一个很好的资源。 <code>0</code>不需要许可证信息。大多数国家/地区的版权法都将授予您默认创建的所有权。但是，明确说明用户可以做什么和不做什么总是一个好习惯。 <code>0</code>示例
<code>"license": "MIT",</code> <code>0</code>说明<code>0</code>如果您认为合适，请填写Glitch项目的package.json中的license-field。 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: package.json应该有一个有效的“许可证”密钥
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert(packJson.license, ''"license" is missing''); }, xhr => { throw new Error(xhr.responseText); })'

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
