---
title: Font Variant
localeTitle: 字体变体
---
## 字体变体属性

font-variant属性最常用于将目标文本更改为小型大写字母。默认值是`normal` 。

```css
p { 
  font-variant: small-caps; 
 } 
```

该酒店还接受`all-small-caps` ， `petite-caps` `titling-caps` ， `unicase` `all-petite-caps` ， `titling-caps`和`unicase` ;然而，这些是CSS3中的新功能，但尚未得到很好的支持。

请注意，如果在HTML标记中使用大写，则会覆盖小大写字母值，从而产生常规大写字母。如果要将标记保持为大写，但使用CSS更改为小型大写，只需将`text-transform: lowercase`与小型大写声明一起设置`text-transform: lowercase` 。

虽然小型大写字母可以为您的排版增添额外的优雅，但设计师建议仅在它们实际内置于字体中时才使用它们。 “假”小型大写字母是由大写字母计算机生成的缩小版本。另一方面，“真正的”小型帽子由类型设计者单独绘制，并且看起来比“假”的更大和更胖。

#### 更多信息：

[黑客设计](https://designforhackers.com/blog/small-caps/)

[MDN上的字体变体](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant)