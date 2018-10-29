---
title: Where to Get Fonts
localeTitle: Dónde obtener fuentes
---
## Dónde obtener fuentes

Los servicios de fuentes en línea como Google Fonts o Font Squirrel proporcionan una manera fácil de usar diferentes fuentes en su sitio sin tener que preocuparse de si la persona que está viendo su sitio tendrá la fuente disponible en su sistema.

### Fuentes descargadas

Los sitios como Font Squirrel le permiten descargar los archivos de fuentes que ha elegido. Una vez hecho esto, debe cargarlos en el servidor que aloja su sitio web. Para usarlos, debe declararlos en su hoja de estilo CSS, lo que significa decirle a su CSS que solicite al navegador del usuario que lo muestre. Declare una fuente generalmente se hace usando `@font-face` en la parte superior de su hoja de estilos CSS.

```css
@font-face { 
  font-family: "My Super Awesome Open Sans Font"; /* name that you will use later to apply the font */ 
  src: url("/fontfolder/open-sans.woff"); /* path to the file */ 
 } 
 body { 
  font-family: "My Super Awesome Open Sans Font"; 
 } 
```

Tenga en cuenta que también puede especificar el formato de la fuente según la compatibilidad del navegador de la siguiente manera.

```css
@font-face { 
 font-family: "My Super Awesome Open Sans Font"; 
 src: url("/fontfolder/open-sans.woff"); format("woff"), 
 } 
```

### Fuentes de Google

Con Google Fonts, no es necesario que cargue los archivos de fuentes en su sitio, solo tiene que poner un enlace determinado en el `head` de su sitio.

Para usar Google Fonts, navegue por el [sitio](https://fonts.google.com/) para encontrar la fuente que funcione mejor para su proyecto. Una vez que haya elegido, haga clic en el signo más (+) junto a la fuente. Aparecerá una barra en la parte inferior de la pantalla. Haz click en eso. A continuación, se le dará varias líneas de código. Copie y pegue la línea de HTML en la cabecera de su archivo HTML sobre el existente  elemento. Luego tome el CSS y utilícelo cuando sea necesario en su hoja de estilo.

```html

<html> 
  <head> 
  <link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet"> 
  </head> 
  <body> 
  Some text. 
  </body> 
 </html> 
```

```css
body{ 
  font-family: "Inconsolata", monospace; 
 } 
```

Has terminado Tienes con éxito nuevas fuentes para tu sitio.

##### Recursos adicionales:

*   [Fuentes de Google](http://fonts.google.com)
*   [Espacio de letra](http://www.fontspace.com)
*   [Ardilla De Fuente](http://fontsquirrel.com)
*   [DaFont](http://www.dafont.com)
*   [1001 Fuentes Gratis](http://www.1001freefonts.com)

#### Más información:

*   [Resumen de fuentes web de Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Web_fonts)