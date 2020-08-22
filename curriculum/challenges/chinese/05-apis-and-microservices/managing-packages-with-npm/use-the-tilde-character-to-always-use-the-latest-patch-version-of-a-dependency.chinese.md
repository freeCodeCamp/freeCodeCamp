---
id: 587d7fb5367417b2b2512c02
title: Use the Tilde-Character to Always Use the Latest Patch Version of a Dependency
localeTitle: 使用Tilde-Character始终使用依赖项的最新修补程序版本
challengeType: 2
---

## Description
<section id='description'> <code>0</code>在上一次挑战中，我们告诉npm只包含特定版本的软件包。如果您需要确保项目的不同部分保持彼此兼容，那么这是一种冻结依赖关系的有用方法。但在大多数用例中，您不希望错过错误修复，因为它们通常包含重要的安全补丁，并且（希望）不会破坏这样做。 <code>0</code>要允许npm依赖项更新到最新的PATCH版本，可以使用波形符（〜）为依赖项的版本添加前缀。在package.json中，我们关于npm如何升级时刻的当前规则是仅使用特定版本（2.10.2），但我们希望允许最新的2.10.x版本。 <code>0</code>示例
<code>"some-package-name": "~1.3.8" allows updates to any 1.3.x version.</code> <code>0</code>指令<code>0</code>使用波形符（〜）为依赖项中的时刻版本添加前缀，并允许npm将其更新为任何新的PATCH版本。 <code>0</code>请注意，不应更改版本号本身。 
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
  - text: '“时刻”版本应匹配“~2.10.2”'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert.match(packJson.dependencies.moment, /^\~2\.10\.2/, ''Wrong version of "moment". It should be ~2.10.2''); }, xhr => { throw new Error(xhr.responseText); })'

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
