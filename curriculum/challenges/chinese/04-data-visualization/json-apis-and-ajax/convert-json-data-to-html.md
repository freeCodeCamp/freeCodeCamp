---
id: 587d7fae367417b2b2512be5
title: 将 JSON 数据转换为 HTML
challengeType: 6
forumTopicId: 16807
---

# --description--

现在你从 JSON API 获取了数据，可以在 HTML 中显示它们了。

既然 cat photo 对象都保存在数组里，你可以使用 `forEach` 方法来遍历它们。当你拿到每个对象时，你就可以修改 HTML 元素了。

首先，通过 `let html = "";` 声明一个 html 变量。

接着，遍历 JSON，将用 `strong` 标签包裹的键名和后面跟着值的 html 元素添加给变量。当循环结束后渲染它。

这是执行此操作的代码：

```js
let html = "";
json.forEach(function(val) {
  const keys = Object.keys(val);
  html += "<div class = 'cat'>";
  keys.forEach(function(key) {
    html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
  });
  html += "</div><br>";
});
```

**注意：** 在本挑战中，你需要给页面添加新的 HTML 元素，不能依赖 `textContent` 方法，这个方法容易遭受跨站脚本攻击，可以用 `innerHTML` 来完成挑战。

# --instructions--

添加一个 `forEach` 循环来遍历 JSON 数据，并创建 HTML 元素以显示它。

以下是一个 JSON 示例：

```json
[
  {
    "id":0,
      "imageLink":"https://s3.amazonaws.com/freecodecamp/funny-cat.jpg",
      "altText":"A white cat wearing a green helmet shaped melon on its head. ",
      "codeNames":[ "Juggernaut", "Mrs. Wallace", "Buttercup"
    ]
  }
]
```

# --hints--

你的代码应该将数据保存在 `html` 变量中。

```js
assert(code.match(/html\s+?(\+=|=\shtml\s\+)/g));
```

你的代码应该使用 `forEach` 方法来遍历 API 中的 JSON 数据。

```js
assert(code.match(/json\.forEach/g));
```

你的代码应该用 `strong` 标签包裹键名。

```js
assert(code.match(/<strong>.+<\/strong>/g));
```

# --solutions--

