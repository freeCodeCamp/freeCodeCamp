---
id: 587d7fb3367417b2b2512bfc
title: Add a Description to Your package.json
localeTitle: 在package.json中添加一个描述
challengeType: 2
---

## Description
<section id='description'> <code>0</code>一个好的package.json的下一部分是description-field，其中有关于您的项目的简短但信息丰富的描述。 <code>0</code>如果您有一天计划将软件包发布到npm，请记住这是一个字符串，当他们决定是否安装您的软件包时，应该将该想法卖给用户。然而，这并不是描述的唯一用例：这是总结项目工作的一种很好的方式，对于正常的Node.js项目来说，这对于帮助其他开发人员，未来的维护人员甚至是您未来的自我来理解项目同样重要很快。 <code>0</code>无论您对项目的计划是什么，都建议您使用说明。让我们添加类似的东西： 
<code>"description": "A project that does something awesome",</code> <code>0</code>说明<code>0</code>在Glitch项目中向package.json添加一个描述。 <code>0</code>记住要使用双引号场名称（“）和逗号（，）分隔的字段。 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: package.json应该有一个有效的“描述”键
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert(packJson.description, ''"description" is missing''); }, xhr => { throw new Error(xhr.responseText); })'

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
