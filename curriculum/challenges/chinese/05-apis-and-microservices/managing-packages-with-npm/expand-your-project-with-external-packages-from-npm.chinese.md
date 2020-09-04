---
id: 587d7fb4367417b2b2512c00
title: Expand Your Project with External Packages from npm
localeTitle: 从npm扩展您的项目与外部包
challengeType: 2
---

## Description
<section id='description'> <code>0</code>使用包管理器的一个最大原因是它们强大的依赖关系管理。 npm无需手动确保在新计算机上设置项目时获得所有依赖项，npm会自动为您安装所有内容。但是，npm怎么能确切地知道你的项目需要什么呢？遇到package.json的依赖项部分。 <code>0</code>在dependencies-section中，使用以下格式存储项目所需的包： 
<code>"dependencies": {</code> 
<code>"package-name": "version",</code> 
<code>"express": "4.14.0"</code> 
<code>}</code> <code>0</code>指令<code>0</code>将软件包时刻的2.14.0版本添加到package.json的依赖项字段中
Moment是一个方便的库，用于处理时间和日期。 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '“依赖”应该包括“时刻”'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data);  assert.property(packJson.dependencies, ''moment'', ''"dependencies" does not include "moment"''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: '“时刻”版本应为“2.14.0”'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data);  assert.match(packJson.dependencies.moment, /^[\^\~]?2\.14\.0/, ''Wrong version of "moment" installed. It should be 2.14.0''); }, xhr => { throw new Error(xhr.responseText); })'

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
