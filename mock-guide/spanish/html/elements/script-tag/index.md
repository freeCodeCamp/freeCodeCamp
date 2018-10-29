---
title: Script Tag
localeTitle: Etiqueta de Script
---
## Etiqueta de Script

La etiqueta HTML Script se usa para contener JavaScript del lado del cliente o hacer referencia a un archivo JavaScript externo usando el atributo "src" del script.

La etiqueta / elemento `<script>` se utiliza para incorporar Javascript del lado del cliente en su archivo HTML que se puede usar para agregar interactividad y lógica a su sitio web
```
<script> 
  //JavaScript code is written here 
 </script> 
 
 <script src="js/app.js"> 
```

La etiqueta se puede usar para abarcar el código Javascript real en el propio HTML como este
```
<script> 
  alert('hello this is my Javascript doing things!'); 
 </script> 
```

O puede usarlo como una forma de referenciar un archivo javascript externo como este
```
<script src="main.js" /> 
```

Aquí el atributo `src` del elemento toma una ruta a un archivo Javascript

Las etiquetas de secuencia de comandos se cargan en su HTML en orden y de forma sincronizada, por lo que generalmente es una buena práctica agregar sus secuencias de comandos justo antes del final de su etiqueta `<body>` en su HTML, por lo que
```
  <script src="main.js" /> 
  <script> 
    alert('hello this is my Javascript doing things!'); 
  </script> 
 </body> 
```

Puede ver la documentación oficial del elemento de script en los [documentos de MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)