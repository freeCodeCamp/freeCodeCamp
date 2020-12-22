---
id: 5c6c06847491271903d37cfd
title: 使用单选框和复选框的 value 属性
challengeType: 0
forumTopicId: 301099
---

# --description--

当表单提交时，包括 options 已选值在内的数据会发送给服务端。`radio`和`checkbox`的`value`值决定了发送到服务端的实际内容。

例如：

```html
<label for="indoor"> 
  <input id="indoor" value="indoor" type="radio" name="indoor-outdoor">Indoor 
</label>
<label for="outdoor"> 
  <input id="outdoor" value="outdoor" type="radio" name="indoor-outdoor">Outdoor 
</label>
```

在这里，有两个 `radio` 单选框。如果当用户提交表单时 `indoor` 选项被选中，表单数据会包含：`indoor-outdoor=indoor`。也就是 "indoor" 单选框的 `name` 和 `value` 属性。

如果没写 `value` 属性，会使用默认值做为表单数据提交，也就是 `on`。在这种情况下，如果用户点击 "indoor" 选项然后提交表单，表单数据的值为 `indoor-outdoor=on`，这可能并没有什么意义。因此最好将 `value` 属性设置一些有意义的内容。

# --instructions--

给每一个`radio`和`checkbox`输入框添加`value`属性。请把每个`input`对应的`label`文本转换为小写（如 Outdoor 应转换为 outdoor），设置其为 value 的值（即 `value="outdoor"`）。

# --hints--

一个单选按钮应该包含 `indoor` 的 `value` 属性。

```js
assert(
  $('label:contains("Indoor") > input[type="radio"]').filter("[value='indoor']")
    .length > 0
);
```

一个单选按钮应该包含 `outdoor` 的 `value` 属性。

```js
assert(
  $('label:contains("Outdoor") > input[type="radio"]').filter(
    "[value='outdoor']"
  ).length > 0
);
```

一个复选框应该包含 `loving` 的 `value` 属性。

```js
assert(
  $('label:contains("Loving") > input[type="checkbox"]').filter(
    "[value='loving']"
  ).length > 0
);
```

一个复选框应该包含 `lazy` 的 `value` 属性。

```js
assert(
  $('label:contains("Lazy") > input[type="checkbox"]').filter("[value='lazy']")
    .length > 0
);
```

一个复选框应该包含 `lazy` 的 `energetic` 属性。

```js
assert(
  $('label:contains("Energetic") > input[type="checkbox"]').filter(
    "[value='energetic']"
  ).length > 0
);
```

# --solutions--

