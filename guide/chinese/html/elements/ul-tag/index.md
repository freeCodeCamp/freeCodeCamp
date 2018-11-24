---
title: Ul Tag
localeTitle: Ul Tag
---
## Ul Tag

无序列表`<ul>`是用于创建项目符号列表的标记。要在`<ul>`创建列表，请使用`<li>`标记。要设置列表样式，请转到CSS样式列表并进行更改。

`<ul>`可以嵌套在其他列表中，并与其他标记兼容，例如`<a>` ， `<p>` ， `<button>` ，html样式标记（ `<strong>` ， `<em>`等）。

### 例

要创建以下内容：

```html

 <ul> 
    <li>This is the bulleted list #1</li> 
    <li>This is the bulleted list #2</li> 
    <li>This is the bulleted list #3</li> 
      <li> 
        <ul> 
          <li>This is the bulleted nested list #1</li> 
        </ul> 
      </li> 
  </ul> 
```

您将使用此HTML代码： `html <html> <head> <title></title> </head> <body> <ul> <li>This is the bulleted list #1</li> <li>This is the bulleted list #2</li> <li>This is the bulleted list #3</li> <li> <ul> <li>This is the bulleted nested list #1</li> </ul> </li> </ul> </body> </html>`

## 其他资源

*   [有序列表`<ol>`](https://github.com/freeCodeCamp/guides/blob/master/src/pages/html/elements/ol-tag/index.md)