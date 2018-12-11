---
title: Set Up D3
localeTitle: Configurar D3
---
## Configuración de HTML

Por ahora, solo usarás un archivo de texto y el navegador web. Comenzarás con una página estática de HTML. Luego agregará d3.js. Crea una carpeta llamada _proyectos_ d3js _. Cree un archivo HTML en la carpeta llamada proyecto_ 1.html.

Comience con una página web HTML básica:

```html

<!DOCTYPE html> 
 <html> 
  <head> 
  </head> 
  <body> 
    <p>Hello!</p> 
  </body> 
 </html> 
```

Lo que aparece en el navegador:

![](https://d1gg5jm9r4jrt6.cloudfront.net/project_1_browser_snapshot_600x198.png)

### Configuración de D3.js

Para obtener el archivo principal de D3.js JavaScript, vaya al sitio web de D3.js. Después del primer párrafo de la página, verá una sección con enlaces a la última versión. Descarga la última versión d3.v2.min.js. Guarde este archivo en la carpeta d3js\_projects.

El archivo d3.v2.min.js se guarda en la misma carpeta que el archivo HTML para que pueda ser referenciado fácilmente. Hacemos referencia al archivo JavaScript desde la cabecera del archivo HTML. Nuestro archivo HTML actualizado ahora se ve así:

`html <!DOCTYPE html> <html> <head> <script type="text/javascript" src="d3.v2.min.js"></script> </head> <body> <p>Hello!</p> </body> </html>`

Prueba de configuración del archivo fuente

Para probar nuestra configuración D3.js, abrimos el kit de herramientas de elementos de inspección. En la pestaña Elemento del Webkit Inspector, abrimos todos los elementos para que podamos ver toda la estructura HTML. Luego nos desplazamos sobre el d3.vs.min.js src.

![](https://d1gg5jm9r4jrt6.cloudfront.net/d3.js.installation.check.png)

Cuando hacemos clic en el enlace, nos lleva a la pestaña de fuentes. Esto mostrará el código minified D3.js.

![](https://d1gg5jm9r4jrt6.cloudfront.net/d3.js.source.check.png)

\### Prueba de configuración de la consola de JavaScript

La última prueba tendrá lugar en la Consola de JavaScript. Esta prueba nos dice si D3.js está cargado correctamente para nuestro uso en la Consola de JavaScript. En esta instantánea, busque la pestaña "Consola" en el Inspector de Webkit:

![](https://d1gg5jm9r4jrt6.cloudfront.net/d3.js.installation.check.png)

Cuando haga clic en la pestaña, le mostrará una pantalla en blanco donde puede escribir y evaluar JavaScript.

![](https://d1gg5jm9r4jrt6.cloudfront.net/JavaScript_Console_600x170.png)

En la consola de JavaScript, escriba lo siguiente:

`javascript alert("hello");`

Esto hará que aparezca una alerta emergente y diga "¡Hola!". Esto es lo que parece:

![](https://d1gg5jm9r4jrt6.cloudfront.net/JavaScript_Consoler_Alert_600x335.png)

Ahora para probar si D3.js está cargado correctamente. Escriba una "d3" minúscula en la Consola seguida de un punto:

`javascript d3`

Si tenemos D3.js instalado correctamente, debería aparecer lo siguiente:

![](https://d1gg5jm9r4jrt6.cloudfront.net/d3.js.javascript.console_300x420.png)

Si todas las pruebas pasaron y pudo cargar D3.js correctamente, está listo para comenzar.

\#### Más información