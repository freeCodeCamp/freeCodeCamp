---
id: 587d7fb4367417b2b2512bff
title: 给 package.json 添加版本号
challengeType: 2
forumTopicId: 301525
---

# --description--

在 package.json 中 version 和 name 是所必填的字段之一。version 字段描述了当前项目的版本。

```json
"version": "1.2.0",
```

# --instructions--

在 Glitch 项目中的 package.json 中添加一个版本号。

# --hints--

package.json 应该包含一个有效的 'version' 键。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert(packJson.version, '"version" is missing');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

# --solutions--

