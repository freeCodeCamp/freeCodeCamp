---
title: Script Src Attribute
localeTitle: Atributo Src Script
---
## Atributo Src Script

El atributo 'src' en un etiqueta es la ruta a un archivo o recurso externo que desea vincular a su documento HTML.

Por ejemplo, si tuviera su propio archivo JavaScript personalizado llamado 'script.js' y quisiera agregar su funcionalidad a su página HTML, lo agregaría así:

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

Esto apuntaría a un archivo llamado 'script.js' que está en el mismo directorio que el archivo .html. También puede enlazar a otros directorios utilizando '..' en la ruta del archivo.

```html

<script src="../public/js/script.js"></script> 
```

Esto salta a un nivel de directorio y luego a un directorio 'público', luego a un directorio 'js' y luego al archivo 'script.js'.

También puede usar el atributo 'src' para vincular a archivos .js externos alojados por un tercero. Se utiliza si no desea descargar una copia local del archivo. Solo tenga en cuenta que si el enlace cambia o si el acceso a la red está inactivo, entonces el archivo externo al que se está vinculando no funcionará.

Este ejemplo se enlaza a un archivo jQuery.

```html

<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script> 
```

#### Más información:

[Artículo de MDN sobre el HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-src) tag</a></p></x-turndown>