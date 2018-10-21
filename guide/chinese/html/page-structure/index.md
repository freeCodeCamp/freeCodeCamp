---
title: Page Structure
localeTitle: 页面结构
---
## 页面结构

要用`HTML`创建页面，您需要知道如何用`HTML`构建页面，基本上，页面结构遵循以下顺序：

```HTML
<!DOCTYPE html> 
 <html> 
  <head> 
    <title>Title of the Page</title> 
  </head> 
  <body> 
    <!-- Content --> 
  </body> 
 </html> 
```

1º - `<!DOCTYPE html>`语句必须始终是第一个出现在`HTML`页面上并告诉浏览器使用该语言版本的语句。在这种情况下，我们正在使用`HTML5` 。

2º - `<html>`和`</html>`标记告诉Web浏览器`HTML`代码的开始和结束位置。

3º - `<head>`和`</head>`标签包含有关网站的信息，例如：样式，元标记，脚本等...

4º - `<title>`和`</title>`标签告诉浏览器页面标题是什么。通过识别Internet浏览器中的选项卡可以看到标题。在这些标记之间定义的文本也是搜索引擎在搜索结果中显示页面时用作标题的文本。

5º - 在`<body>`和`</ body>`标签之间放置页面内容，这是浏览器中显示的内容。

### HTML5的变化

#### 语义标签的介绍

而不是为每个其他容器使用`<div>`几个语义（这些标签帮助视觉使用的屏幕阅读器 受损的）标签，例如`<header>` `<footer>` 。因此建议使用这些标记而不是泛型`<div>` 。

#### 更多信息：

[HTML：简介](https://www.w3schools.com/html/html_intro.asp)