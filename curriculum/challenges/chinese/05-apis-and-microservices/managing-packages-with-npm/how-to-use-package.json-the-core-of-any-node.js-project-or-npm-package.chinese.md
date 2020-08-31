---
id: 587d7fb3367417b2b2512bfb
title: 'How to Use package.json, the Core of Any Node.js Project or npm Package'
localeTitle: '如何使用package.json，任何Node.js项目的核心或npm包'
challengeType: 2
---

## Description
<section id='description'> <code>0</code>文件package.json是任何Node.js项目或npm包的中心。它存储有关项目的信息，就像HTML文档中的&lt;head&gt; -section描述网页内容一样。 package.json由一个JSON对象组成，其中信息存储在“key”：value-pairs中。最小的package.json中只有两个必填字段 - 名称和版本 - 但提供有关您的项目的其他信息可能对未来的用户或维护者有用，这是一个很好的做法。 <code>0</code>作者字段<code>0</code>如果您转到之前设置的Glitch项目并在屏幕左侧查看，您将找到文件树，您可以在其中查看项目中各种文件的概述。在文件树的后端部分，你会找到package.json  - 我们将在接下来的几个挑战中改进的文件。 <code>0</code>此文件中最常见的信息之一是author-field，它指定了谁是项目的创建者。它可以是字符串，也可以是具有联系人详细信息的对象。对于较大的项目，建议使用该对象，但在我们的示例中，将使用类似以下示例的简单字符串。 
<code>"author": "Jane Doe",</code> <code>0</code>说明<code>0</code>将您的名字添加到Glitch项目的package.json中的author-field。 <code>0</code>记住你正在编写JSON。 <code>0</code>所有字段名称必须使用双引号（“），例如”author“ <code>0</code>所有字段必须用逗号分隔（，） 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: package.json应该有一个有效的“作者”密钥
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert(packJson.author, ''"author" is missing''); }, xhr => { throw new Error(xhr.responseText); })'

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
