---
title: Hover Selector
localeTitle: 悬停选择器
---
## 悬停选择器

CSS `:hover`选择器是用于设置元素样式的许多伪类之一。

：鼠标悬停选择器用于在鼠标悬停时选择元素。

：hover选择器可用于所有元素，而不仅仅用于链接。

使用：link选择器设置指向未访问页面的链接的样式，使用：visited选择器设置指向已访问页面的链接的样式，使用：active选择器设置活动链接的样式。

注意：hover必须在CSS定义中跟随：link和：visited（如果它们存在），以便有效！

CSS语法 ：悬停{ css声明; }

悬停选择器仅在元素进入悬停状态时应用规则中提供的样式。 那是用户用鼠标悬停在元素上的时候。

```css
button { 
  color: white; 
  background-color: green; 
 } 
 
 button:hover { 
  background-color: white; 
  border: 2px solid green; 
  color: green; 
 } 
```

在上面的示例中，按钮的正常样式是绿色按钮上的白色文本。 当用户用鼠标悬停在按钮上时，带有`:hover`选择器的规则将变为活动状态，按钮的样式将更改。

#### 更多信息：

[MDN `:hover`文档](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)

您可以在Mozillia的[MDN Pseudo-classes Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)文章中找到更多伪[类](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) 。