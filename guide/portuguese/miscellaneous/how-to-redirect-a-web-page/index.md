---
title: How to Redirect a Web Page
localeTitle: Como redirecionar uma página da Web
---
## Como redirecionar uma página da Web

Para redirecionar os visitantes do seu site para uma nova página, adicione uma linha na sua seção de cabeçalho da seguinte maneira: \`\` \`html
```
  <script type="text/javascript"> 
     <!-- 
        function Redirect() { 
           window.location="http://www.tutorialspoint.com"; 
        } 
     //--> 
  </script> 
```

Clique no botão a seguir, você será redirecionado para a página inicial.
```
  <form> 
     <input type="button" value="Redirect Me" onclick="Redirect();" /> 
  </form> 
```

```
There is another option if you just want to change the page as soon as they reach that page: 
```

javascript window.location.assign ("https: //www.yournewwebsite.fakewebsite"); \`\` \` Substituindo o site pelo seu site. Aquele deve ir dentro de um arquivo JavaScript.