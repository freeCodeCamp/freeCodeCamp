---
title: Script Tag
localeTitle: 脚本标记
---
## 脚本标记

HTML脚本标记用于包含客户端JavaScript或使用脚本“src”属性引用外部JavaScript文件。

`<script>`标签/元素用于将客户端Javascript合并到您的HTML文件中，该文件可用于为您的网站添加交互性和逻辑
```
<script> 
  //JavaScript code is written here 
 </script> 
 
 <script src="js/app.js"> 
```

标签可以用来包含HTML本身的实际Javascript代码
```
<script> 
  alert('hello this is my Javascript doing things!'); 
 </script> 
```

或者您可以使用它作为引用这样的外部JavaScript文件的方式
```
<script src="main.js" /> 
```

这里元素的`src`属性接受Javascript文件的路径

脚本标记按顺序同步加载到HTML中，因此通常最好在HTML中`<body>`标记结束之前添加脚本，如此
```
  <script src="main.js" /> 
  <script> 
    alert('hello this is my Javascript doing things!'); 
  </script> 
 </body> 
```

您可以在[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)上查看脚本元素的官方[文档](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)