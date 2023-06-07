---
id: 587d7fb3367417b2b2512bfc
title: 给 package.json 添加描述
challengeType: 2
forumTopicId: 301522
dashedName: add-a-description-to-your-package-json
---

# --description--

一个好的 package.json 文件的下一部分就是 `description` 字段——简短精悍的的项目描述。

如果有一天你打算向 npm 发布一个软件包，当用户决定是否安装你的软件包时，这个字符串就能向用户表明你的想法。 然而，这并不是使用描述的唯一场景：它也是一种很好的总结项目的方式， 可以帮助其它开发者、维护者甚至自己在未来快速地了解项目，对于任何一个 Node.js 项目来说都非常重要。

无论项目计划是什么，都建议使用描述。 类似这样：

```json
"description": "A project that does something awesome",
```

# --instructions--

给项目的 package.json 文件添加描述（`description`）。

**注意：** 请记住使用双引号（"）包裹字段名并且使用逗号（,）分隔字段。

# --hints--

package.json 应该包含一个有效的“description”键

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert(packJson.description, '"description" is missing');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
