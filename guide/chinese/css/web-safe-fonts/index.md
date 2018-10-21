---
title: Web Safe Fonts
localeTitle: Web安全字体
---
## Web安全字体

Web安全字体是大多数操作系统都包含的字体，这种高可用性的含义是设计人员可以期望涉及Web安全字体的排版与大多数用户完全一致。以下是在撰写本文时被视为Web安全的某些字体的非详尽列表，按CSS通用字体系列分类。

Web安全衬线字体：

*   格鲁吉亚
*   英语字体格式一种

Web安全sans-serif字体：

*   宋体
*   宋体
*   投石机MS
*   宋体

Web安全等宽字体：

*   快递新

值得注意的是，即使您的设计仅使用Web安全字体，仍应使用包含回退选项（包括通用字体系列）的字体堆栈。例如：

```css
p { 
  font-family: Tahoma, Arial, sans-serif; 
 } 
```

#### 关于Web字体的注释

仅仅因为某些字体比其他字体更安全并不意味着您应该将您的设计限制为仅使用Web安全字体。使用CSS的现代设计还可以利用Web字体来确保跨操作系统的一致排版。

#### 更多信息：

*   [MDN文档：基本文本和字体样式](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals#Web_safe_fonts)
*   [MDN文档：Web字体](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Web_fonts)
*   [Web安全字体](https://www.cssfontstack.com)