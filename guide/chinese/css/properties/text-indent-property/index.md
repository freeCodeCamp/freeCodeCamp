---
title: Text Indent Property
localeTitle: 文本缩进属性
---
## 文本缩进属性

`text-indent` css属性指定在块中的文本行之前放置的缩进量（空白空间）。默认情况下，它仅控制块的第一个格式化行的缩进，但`hanging`和`each-line`关键字可用于更改此行为。

**关键词**

`hanging` - 压缩会影响块容器的第一行以及强制换行后的每一行，但不会影响软换行后的行。

`each-line` - 反转哪些行缩进。除第一行之外的所有行都将缩进。

**句法**

```css
  /* <length> values */ 
  text-indent: 40px; 
 
  /* <percentage> value relative to the containing block width */ 
  text-indent: 10%; 
 
  /* Keyword values */ 
  text-indent: 2em each-line; 
  text-indent: 2em hanging; 
  text-indent: 2em hanging each-line; 
```

_注意：目前对关键字`hanging`和`each-line`的支持仅在实验Web平台功能标志后面提供_

### 更多信息：

*   [MDN Doc on `text-indent`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent)
*   [浏览器支持`text-indent`](http://caniuse.com/#feat=css-text-indent)