---
id: 587d7fb5367417b2b2512c04
title: Remove a Package from Your Dependencies
localeTitle: 从您的依赖项中删除一个包
challengeType: 2
---

## Description
<section id='description'> <code>0</code>现在，您已经通过使用package.json的dependencies-section测试了一些可以管理项目依赖关系的方法。您已将外部包添加到文件中，甚至通过使用特殊字符作为代字号（〜）或插入符号（^）告诉npm您需要哪些类型的版本。 <code>0</code>但是如果你想删除不再需要的外部包呢？您可能已经猜到了 - 只需从依赖项中删除相应的“key”：value对。 <code>0</code>同样的方法也适用于删除package.json中的其他字段<code>0</code>说明<code>0</code>从依赖项中删除包时刻。 <code>0</code>删除后确保您有相同数量的逗号。 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '“依赖”不应该包括“时刻”'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert.notProperty(packJson.dependencies, ''moment'', ''"dependencies" still includes "moment"''); }, xhr => { throw new Error(xhr.responseText); })'

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
