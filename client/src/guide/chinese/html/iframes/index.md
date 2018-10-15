---
title: Iframes
localeTitle: I帧
---
## I帧

HTML `<iframe>`元素表示内联框架，允许您在当前HTML文档中包含独立的HTML文档。 `<iframe>`通常用于嵌入第三方媒体，您自己的媒体，小部件，代码段或嵌入第三方小程序（如付款表单）。

### 属性

下面列出了一些`<iframe>`的属性：

|属性|说明| | --- | --- | | `allowfullscreen` |设置为true以允许将帧置于全屏模式| | `frameborder` |告诉浏览器在框架周围绘制边框（默认设置为1）| | `height` | CSS像素中帧的高度 | `name` |框架的名称| | `src` |要嵌入的网页的URL | `width` | CSS像素中帧的宽度|

### 例子

使用`<iframe>`嵌入YouTube视频：

```html

<iframe width="560" height="315" src="https://www.youtube.com/embed/v8kFT4I31es" 
 frameborder="0" allowfullscreen></iframe> 
```

使用`<iframe>`嵌入Google地图：

```html

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d774386.2436462595!2d-74.53874786161381!3d40.69718109704434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sau!4v1508405930424" 
 width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> 
```

### 替代文字

开始和结束`<iframe>`标记之间的内容用作替代文本，如果查看者的浏览器不支持iframe，则显示该文本。

```html

<iframe width="560" height="315" src="https://www.youtube.com/embed/v8kFT4I31es" frameborder="0"> 
  <p>Your browser does not support iframes.</p> 
 </iframe> 
```

### 定位链接中的iframe

任何`<a>`链接都可以定位`<iframe>`元素的内容。它不是将浏览器窗口重定向到链接的网页，而是重定向`<iframe>` 。为此， `<a>`元素的`target`属性必须与`<iframe>`的`name`属性匹配。

```html

<iframe width="560" height="315" src="about:blank" frameborder="0" name="iframe-redir"></iframe> 
 
 <p><a href="https://www.youtube.com/embed/v8kFT4I31es" target="iframe-redir">Redirect the Iframe</a></p> 
```

此示例最初会显示空白`<iframe>` ，但是当您点击上面的链接时，它会重定向`<iframe>`以显示YouTube视频。

### Javascript和iframe

嵌入在`<iframe>`中的文档可以像往常一样在自己的上下文中运行JavaScript（不会影响父网页）。

父网页与嵌入的`<iframe>`内容之间的任何脚本交互都受同源策略的约束。这意味着，如果您从其他域加载`<iframe>`的内容，浏览器将阻止使用JavaScript访问该内容的任何尝试。

### 更多信息：

请参阅[MDN Web文档](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) 。