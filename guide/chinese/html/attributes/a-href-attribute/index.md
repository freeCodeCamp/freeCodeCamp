---
title: A Href Attribute
localeTitle: Href属性
---
## Href属性

`<a href>`属性是指链接提供的目标。没有`<href>`属性的`a` （锚）标签已经死了。有时在您的工作流程中，您不想要实时链接，或者您还不知道链接目的地。在这种情况下，将`href`属性设置为`"#"`以创建死链接很有用。 `href`属性可用于链接到Internet上的本地文件或文件。

例如：

```html

<html> 
  <head> 
    <title>Href Attribute Example</title> 
  </head> 
  <body> 
    <h1>Href Attribute Example</h1> 
      <p> 
        <a href="https://www.freecodecamp.org/contribute/">The freeCodeCamp Contribution Page</a> shows you how and where you can contribute to freeCodeCamp's community and growth. 
      </p> 
    </h1> 
  </body> 
 </html> 
```

所有浏览器都支持`<a href>`属性。

#### 更多属性：

`hreflang` ：指定链接资源的语言。 `target` ：指定链接资源将在其中打开的上下文。 `title` ：定义链接的标题，该链接在用户看来是工具提示。

### 例子

```html

<a href="#">This is a dead link</a> 
 <a href="https://www.freecodecamp.org">This is a live link to freeCodeCamp</a> 
 <a href="https://html.com/attributes/a-href/">more with a href attribute</a> 
```

### 页内锚点

也可以将锚点设置到页面的某个位置。要执行此操作，您应首先在页面上的位置放置一个标签，其中包含标记和必要属性“name”，其中包含任何关键字说明，如下所示：

```html

<a name="top"></a> 
```

不需要标签之间的任何描述。之后，您可以在同一页面的任何位置放置一个指向此锚点的链接。要做到这一点，你应该使用带有符号＃（sharp）的必要属性“href”的标签和锚点的关键字描述，如下所示：

```html

<a href="#top">Go to Top</a> 
```

### 图片链接

`<a href="#">`也可以应用于图像和其他HTML元素。

### 例

```html

<a href="#"><img itemprop="image" style="height: 90px;" src="http://www.chatbot.chat/assets/images/header-bg_y.jpg" alt="picture">  </a> 
```

### 例

[![图片](http://www.chatbot.chat/assets/images/header-bg_y.jpg)](#)

### 更多href的例子

```html

<base href="https://www.freecodecamp.org/a-href/">This gives a base url for all further urls on the page</a> 
 <link href="style.css">This is a live link to an external stylesheet</a> 

```