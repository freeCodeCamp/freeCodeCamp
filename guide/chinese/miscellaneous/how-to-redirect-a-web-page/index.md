---
title: How to Redirect a Web Page
localeTitle: 如何重定向网页
---
## 如何重定向网页

要将您的网站访问者重定向到新页面，请在头部添加一行，如下所示： \`\`\`HTML
```
  <script type="text/javascript"> 
     <!-- 
        function Redirect() { 
           window.location="http://www.tutorialspoint.com"; 
        } 
     //--> 
  </script> 
```

单击以下按钮，您将被重定向到主页。
```
  <form> 
     <input type="button" value="Redirect Me" onclick="Redirect();" /> 
  </form> 
```

```
There is another option if you just want to change the page as soon as they reach that page: 
```

JavaScript的 window.location.assign（ “HTTPS：//www.yournewwebsite.fakewebsite”）; \`\`\` 用您的网站替换网站。一个应该进入JavaScript文件。