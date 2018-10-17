---
title: Redirect from an HTML Page
localeTitle: Redirigir desde una página HTML
---
## Redirigir desde una página HTML

Si ha cambiado la URL de su página HTML y desea redirigir automáticamente a sus visitantes a la nueva ubicación de la página, puede usar una etiqueta meta dentro del área `<head>` de su antigua página HTML.

`html <head> <meta http-equiv="refresh" content="0; url=http://freecodecamp.org/" /> </head>` En el ejemplo anterior, los visitantes a la página serán redirigidos desde su antigua página html a [http://freecodecamp.org/](http://freecodecamp.org/) . El atributo de `content="0` significa que el navegador redireccionará a la nueva página después de 0 segundos. Cambiar el valor a `content="2` redirigirá después de 2 segundos.

#### Más información:

*   [MDN - Redirecciones en HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Redirections)