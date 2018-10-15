---
title: Optional Tags
localeTitle: 可选标签
---
## HTML5可选标签

在HTML5中，您可以在特定条件下省略某些开始和结束标记。例如，以下HTML代码......

```html

<!DOCTYPE html> 
 <p>Hello World. 
```

将自动评估为......

```html

<!DOCTYPE html> 
 <html> 
  <head></head> 
  <body> 
    <p>Hello world. 
    </p> 
  </body> 
 </html> 
```

最常见的HTML5标记的可选标记规范如下：

*   一个`html`如果里面的第一件事元素的开始标记可以省略`html`元素不是评论。
*   如果`html`元素后面没有注释，则可以省略`html`元素的结束标记。
*   如果元素为空，或者`head`元素中的第一个元素是元素，则可以省略`head`元素的开始标记。
*   如果`head`元素没有紧跟空格字符或注释，则可以省略`head`元素的结束标记。
*   如果元素为空，或者`body`元素中的第一个元素不是空格字符或注释，则可以省略`body`元素的开始标记，除非`body`元素内的第一个元素是`meta` ， `link` ， `script` ， `style`或`template`元素。
*   如果body元素没有紧跟注释，则可以省略`body`元素的结束标记。

### 更多信息

要了解有关HTML5可选标记的更多信息，请访问![万维网联盟的建议](https://www.w3.org/TR/html5/syntax.html#optional-tags) 。