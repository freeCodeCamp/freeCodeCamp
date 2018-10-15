---
title: How to Redirect a Web Page
localeTitle: Как перенаправить веб-страницу
---
## Как перенаправить веб-страницу

Чтобы перенаправить посетителей вашего сайта на новую страницу, добавьте строку в свой раздел: \`\` \`\` HTML
```
  <script type="text/javascript"> 
     <!-- 
        function Redirect() { 
           window.location="http://www.tutorialspoint.com"; 
        } 
     //--> 
  </script> 
```

Нажмите следующую кнопку, вы будете перенаправлены на домашнюю страницу.
```
  <form> 
     <input type="button" value="Redirect Me" onclick="Redirect();" /> 
  </form> 
```

```
There is another option if you just want to change the page as soon as they reach that page: 
```

Javascript window.location.assign ( "https: //www.yournewwebsite.fakewebsite"); \`\` \` Замена веб-сайта на ваш сайт. Он должен войти в файл JavaScript.