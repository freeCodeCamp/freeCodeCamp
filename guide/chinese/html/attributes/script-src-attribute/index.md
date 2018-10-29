---
title: Script Src Attribute
localeTitle: 脚本Src属性
---
## 脚本Src属性

一个'src'属性 tag是要链接到HTML文档的外部文件或资源的路径。

例如，如果您有自己的名为“script.js”的自定义JavaScript文件，并希望将其功能添加到HTML页面，则可以像这样添加：

```html

<!DOCTYPE html> 
 <html lang="en"> 
  <head> 
    <title>Script Src Attribute Example</title> 
  </head> 
  <body> 
 
  <script src="./script.js"></script> 
  </body> 
 </html> 
```

这将指向名为“script.js”的文件，该文件与.html文件位于同一目录中。您还可以使用文件路径中的“..”链接到其他目录。

```html

<script src="../public/js/script.js"></script> 
```

这会将一个目录级别跳转到“公共”目录，然后跳转到“js”目录，然后跳转到“script.js”文件。

您还可以使用'src'属性链接到第三方托管的外部.js文件。如果您不想下载文件的本地副本，则使用此选项。请注意，如果链接更改或网络访问已关闭，则您链接到的外部文件将不起作用。

此示例链接到jQuery文件。

```html

<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script> 
```

#### 更多信息：

[关于HTML的MDN文章](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-src) tag</a></p></x-turndown>