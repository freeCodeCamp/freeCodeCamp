---
id: 5c6c06847491271903d37cfd
title: 使用单选框和复选框的 value 属性
challengeType: 0
forumTopicId: 301099
---

# --description--

提交表单时，所选项的值会发送给服务端。`radio` 和 `checkbox` 的 `value` 属性值决定了发送到服务端的实际内容。

例如：

```html
<label for="indoor"> 
  <input id="indoor" value="indoor" type="radio" name="indoor-outdoor">Indoor 
</label>
<label for="outdoor"> 
  <input id="outdoor" value="outdoor" type="radio" name="indoor-outdoor">Outdoor 
</label>
```

这里有两个 `radio` 单选框。当用户提交表单时，如果 `indoor` 选项被选中，表单数据会包含：`indoor-outdoor=indoor`。也就是所选项的 `name` 和 `value` 属性值。

如果没有指明 `value` 属性值，则会使用默认值做为表单数据提交，也就是 `on`。在这种情况下，如果用户选中 "indoor" 选项然后提交表单，表单数据则会包含 `indoor-outdoor=on`。这样的表单数据看起来不够直观，因此最好将 `value` 属性值设置为一些有意义的内容。

# --instructions--

给每一个 `radio` 和 `checkbox` 输入框添加 `value` 属性，属性值为 `input` 对应 `label` 中文本的小写形式。如 Outdoor 的 `value` 应设置为 `"outdoor"`，即 `value="outdoor"`。

# --hints--

应有一个单选按钮的 `value` 属性值为 `indoor`。

```js
assert(
  $('label:contains("Indoor") > input[type="radio"]').filter("[value='indoor']")
    .length > 0
);
```

应有一个单选按钮的 `value` 属性值为 `outdoor`。

```js
assert(
  $('label:contains("Outdoor") > input[type="radio"]').filter(
    "[value='outdoor']"
  ).length > 0
);
```

应有一个复选框的 `value` 属性值为 `loving`。

```js
assert(
  $('label:contains("Loving") > input[type="checkbox"]').filter(
    "[value='loving']"
  ).length > 0
);
```

应有一个复选框的 `value` 属性值为 `lazy`。

```js
assert(
  $('label:contains("Lazy") > input[type="checkbox"]').filter("[value='lazy']")
    .length > 0
);
```

应有一个复选框的 `value` 属性值为 `energetic`。

```js
assert(
  $('label:contains("Energetic") > input[type="checkbox"]').filter(
    "[value='energetic']"
  ).length > 0
);
```

# --solutions--

