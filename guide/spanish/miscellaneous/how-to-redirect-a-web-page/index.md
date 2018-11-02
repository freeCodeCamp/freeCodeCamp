---
title: How to Redirect a Web Page
localeTitle: Cómo redirigir una página web
---
## Cómo redirigir una página web

Para redirigir a los visitantes de su sitio a una nueva página, agregue una línea en la sección principal de la siguiente manera: \`\` \`html
```
  <script type="text/javascript"> 
     <!-- 
        function Redirect() { 
           window.location="http://www.tutorialspoint.com"; 
        } 
     //--> 
  </script> 
```

Haga clic en el siguiente botón, será redirigido a la página de inicio.
```
  <form> 
     <input type="button" value="Redirect Me" onclick="Redirect();" /> 
  </form> 
```

```
There is another option if you just want to change the page as soon as they reach that page: 
```

javascript window.location.assign ("https: //www.yournewwebsite.fakewebsite"); \`\` \` Reemplazo del sitio web con su sitio web. El uno debe ir dentro de un archivo JavaScript.