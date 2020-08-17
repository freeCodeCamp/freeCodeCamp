---
id: 587d7fb5367417b2b2512c03
title: Use the Caret-Character to Use the Latest Minor Version of a Dependency
localeTitle: 使用插入符号来使用最新的次要版本的依赖项
challengeType: 2
---

## Description
<section id='description'> <code>0</code>类似于我们在上一次挑战中学到的波形符（〜）允许npm为依赖项安装最新的PATCH，插入符号（^）允许npm也安装将来的更新。不同之处在于插入符号将允许MINOR更新和PATCH。 <code>0</code>目前，您当前版本的时刻应为~2.10.2，允许npm安装到最新的2.10.x版本。如果我们改为使用插入符号（^）作为我们的版本前缀，则允许npm更新为任何2.xx版本。 <code>0</code>示例
<code>"some-package-name": "^1.3.8" allows updates to any 1.xx version.</code> <code>0</code>使用说明<code>0</code>使用插入符（^）为依赖项中的时刻版本添加前缀，并允许npm将其更新为任何新的MINOR版本。 <code>0</code>请注意，不应更改版本号本身。 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '“依赖”应该包括“时刻”'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, ''moment'', ''"dependencies" does not include "moment"''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: '“moment”版本应匹配“^ 2.x.x”'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert.match(packJson.dependencies.moment, /^\^2\./, ''Wrong version of "moment". It should be ^2.10.2''); }, xhr => { throw new Error(xhr.responseText); })'

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
