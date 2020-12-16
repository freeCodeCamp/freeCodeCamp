---
id: bad87fee1348bd9aec908845
title: 使用 Bootstrap 响应式排列表单元素
challengeType: 0
forumTopicId: 18225
required:
  - link: >-
      https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.css
    raw: true
---

# --description--

现在让我们把你表单里的 `input` 元素和 submit `button` （提交按钮）放在同一行。跟着之前的做法来就行：准备好一个具有 `row` class 的 `div` 元素还有几个具有 `col-xs-*` class 的 `div` 元素。

先把你表单的 text `input` （文本输入框）和 submit `button` （提交按钮）放进具有 `row` class 的 `div` 中。再用 `col-xs-7` class 的 div 包裹表单的 text `input` （文本输入框），`col-xs-5` class 的 div 包裹表单的 submit `button` （提交按钮）。

这是我们到目前为止 Cat Photo App 的最后一个挑战了。我希望你能喜欢 Font Awesome， Bootstrap，和响应式设计！

# --hints--

确保提交按钮和文本输入框都在同一个具有 class 属性 `row` 的 div 元素中。

```js
assert(
  $('div.row:has(input[type="text"])').length > 0 &&
    $('div.row:has(button[type="submit"])').length > 0
);
```

表单的文本输入框应该嵌入到具有 class 属性 `col-xs-7` 的 div 内。

```js
assert($('div.col-xs-7:has(input[type="text"])').length > 0);
```

表单的提交按钮应该嵌入到具有  class 属性 `col-xs-5` 的 div 内。

```js
assert($('div.col-xs-5:has(button[type="submit"])').length > 0);
```

确保每一个 `div` 元素都有一个闭合标签。

```js
assert(
  code.match(/<\/div>/g) &&
    code.match(/<div/g) &&
    code.match(/<\/div>/g).length === code.match(/<div/g).length
);
```

# --solutions--

