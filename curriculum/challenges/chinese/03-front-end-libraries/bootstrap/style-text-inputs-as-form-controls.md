---
id: bad87fee1348bd9aed908845
title: 给表单控件的输入框添加样式
challengeType: 0
forumTopicId: 18312
required:
  - link: >-
      https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.css
    raw: true
---

# --description--

你可以通过在 submit `button` 内加上 `<i class="fa fa-paper-plane"></i>` 来添加 Font Awesome 的 `fa-paper-plane` 图标。

为表单的文本输入框（text input）设置 `form-control` class。为表单的提交（submit）按钮设置 `btn btn-primary` class，并为它加上 Font Awesome 的 `fa-paper-plane` 图标。

所有文本输入类的元素如 `<input>`，`<textarea>` 和 `<select>` 只要设置 `.form-control` class 就会占满100%的宽度。

# --hints--

给你的 submit 按钮添加 `btn btn-primary` class。

```js
assert($('button[type="submit"]').hasClass('btn btn-primary'));
```

在你的 submit `button` 元素嵌入 `<i class='fa fa-paper-plane'></i>`。

```js
assert($('button[type="submit"]:has(i.fa.fa-paper-plane)').length > 0);
```

给表单中的 text `input` 元素添加 `form-control` class。

```js
assert($('input[type="text"]').hasClass('form-control'));
```

确保每一个 `i` 元素都有一个闭合标签。

```js
assert(code.match(/<\/i>/g) && code.match(/<\/i/g).length > 3);
```

# --solutions--

