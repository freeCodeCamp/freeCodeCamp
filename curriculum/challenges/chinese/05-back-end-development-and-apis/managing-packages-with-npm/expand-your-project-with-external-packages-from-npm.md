---
id: 587d7fb4367417b2b2512c00
title: 使用 npm 的外部包扩展项目
challengeType: 2
forumTopicId: 301527
dashedName: expand-your-project-with-external-packages-from-npm
---

# --description--

强大的依赖管理特性是使用包管理器的最大原因之一。 每当在新的计算机上开始一个项目时，无需手动，npm 会自动安装所有的依赖项。 但是 npm 如何准确地知道项目需要哪些依赖呢？ 来看看 package.json 文件中 `dependencies` 这一部分。

在这部分，你的项目需要按照下面这种格式来存储依赖包：

```json
"dependencies": {
  "package-name": "version",
  "express": "4.14.0"
}

```

# --instructions--

将 `@freecodecamp/example` 包的版本 `1.1.0` 添加到 `package.json` 文件的 `dependencies` 字段。

**注意：** `@freecodecamp/example` 是一个用作学习工具的仿包。

# --hints--

`"dependencies"` 应包括 `"@freecodecamp/example"`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        '@freecodecamp/example',
        '"dependencies" does not include "@freecodecamp/example"'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

`"@freecodecamp/example"` 版本应为 `"1.1.0"`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.match(
        packJson.dependencies["@freecodecamp/example"],
        /^[\^\~]?1\.1\.0/,
        'Wrong version of "@freecodecamp/example" installed. It should be 1.1.0'
      );
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
