---
id: 587d7fb5367417b2b2512c01
title: Manage npm Dependencies By Understanding Semantic Versioning
localeTitle: 通过了解语义版本控制来管理npm依赖项
challengeType: 2
---

## Description
<section id='description'> 
package.json的dependencies-section中的npm软件包的版本遵循所谓的语义版本控制（SemVer），这是软件版本控制的行业标准，旨在使管理依赖项更容易。在npm上发布的库，框架或其他工具应使用SemVer，以便清楚地传达依赖于程序包的项目在更新时可以期望的更改类型。 
SemVer在没有公共API的项目中没有意义 - 所以除非你的项目与上面的例子类似，否则使用另一种版本控制格式。 <code>0</code>那么为什么你需要了解SemVer？ <code>0</code>了解SemVer在开发使用外部依赖项的软件时非常有用（您几乎总是这样做）。有一天，您对这些数字的理解将使您免于意外地对项目进行重大更改而不理解为什么“昨天有效”的事情突然之间没有。 <code>0</code>这是语义版本控制根据官方网站的工作方式： <code>0</code>给定版本号MAJOR.MINOR.PATCH，当您进行不兼容的API更改时，增加： 
MAJOR版本，当以向后兼容的方式添加功能时，增加
MINOR版本，当您进行向后兼容的错误修复时，和
PATCH版本。 <code>0</code>这意味着PATCH是错误修复，MINOR添加了新功能，但它们都没有破坏之前的功能。最后，MAJOR添加了对早期版本无效的更改。 <code>0</code>示例<code>0</code>语义版本号：1.3.8 <code>0</code>说明<code>0</code>在package.json的dependencies-section中，更改时刻版本以匹配MAJOR版本2，MINOR版本10和PATCH版本2 
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
  - text: '“时刻”版应该是“2.10.2”'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert.equal(packJson.dependencies.moment,"2.10.2", ''Wrong version of "moment". It should be 2.10.2''); }, xhr => { throw new Error(xhr.responseText); })'

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
