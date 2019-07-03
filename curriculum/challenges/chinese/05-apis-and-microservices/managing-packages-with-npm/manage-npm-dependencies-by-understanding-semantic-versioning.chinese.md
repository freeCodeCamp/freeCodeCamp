---
id: 587d7fb5367417b2b2512c01
title: Manage npm Dependencies By Understanding Semantic Versioning
challengeType: 2

videoUrl: ''
localeTitle: Manage npm Dependencies By Understanding Semantic Versioning
---

## Description
<section id='description'>
package.json 是任何 Node.js 项目或 npm 包的中心。它存储项目的相关信息，就像 HTML 文档中的<code><head></code>区域是用来描述网页的通用信息（元信息）一样。package.json 由单个 JSON 对象组成，它以键值对的形式存储项目的信息。一个最小的 package.json 文件至少包含两个必须字段：name 和 version——但是提供有关项目的附加信息是一个更好的做法，在以后它可能对你的用户或者维护者有所帮助。
author 字段：
如果你转到之前设置的 Glitch 项目并查看屏幕左侧，你会看到一个文件树，你可以在其中查看项目中各种文件的概述。在文件树的末尾部分，你会看到 package.json——我们将在接下来的几个挑战中改进这个文件。
这个文件中最常见的信息之一是 author 字段，它指定了谁是项目的创建者。它可以是字符串，也可以是带有联系人详细信息的对象。对于较大的项目，建议使用对象，但是在我们的例子中，一个简单的字符串就可以了，比如下面的例子。
<code>"author": "Jane Doe",</code>
说明：
将你的名字添加到 Glitch 项目中，package.json 的 author 字段。
请记住，你正在编写 JSON 文件。
所有的字段名必须使用双引号（"）包裹, 比如："author"
所有字段必须用逗号（,）分隔
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "'dependencies' 应该包含 'moment'。"
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/package.json").then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, "moment", ""dependencies" 未包含 "moment""); }, xhr => { throw new Error(xhr.responseText); })'
  - text: "'moment' 的版本号应该是 '2.10.2'。"
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/package.json").then(data => { var packJson = JSON.parse(data); assert.match(packJson.dependencies.moment, /^[\^\~]?2\.10\.2/, ""moment" 的版本号有误。它应该是 2.10.2"); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              