---
title: Textarea Tag
localeTitle: Textarea标签
---
## Textarea标签

HTML textarea标签允许您输入一个包含用于用户反馈或交互的文本的框。在大多数情况下，通常会将textarea用作表单的一部分。

程序员使用textarea标签为用户输入创建多行字段（特别是在用户应该能够在表单上放置更长的文本时）。程序员可以为textarea标签指定不同的属性。

示例代码：

```html

    <form> 
      <textarea name="comment" rows="8" cols="80" maxlength="500" placeholder="Enter your comment here..." required></textarea> 
    </form> 
```

最常见的属性： `row`和`cols`属性确定textarea的高度和宽度 `placeholder`属性指定用户可见的文本，它有助于用户了解应键入的数据 `maxlength`属性确定可以在textarea中键入的文本的最大长度，用户无法提交更多字符 `required`属性表示必须在表单提交之前填写此字段

有关textarea标签及其属性的更多信息，请访问MDN或w3schools 。