---
title: Page Structure
localeTitle: Estructura de la página
---
## Estructura de la página

Para crear sus páginas en `HTML` , necesita saber cómo estructurar una página en `HTML` , básicamente, la estructuración de una página sigue el siguiente orden:

```HTML
<!DOCTYPE html> 
 <html> 
  <head> 
    <title>Title of the Page</title> 
  </head> 
  <body> 
    <!-- Content --> 
  </body> 
 </html> 
```

1º - La declaración `<!DOCTYPE html>` siempre debe ser la primera en aparecer en una página `HTML` e indicar al navegador qué versión del idioma se está utilizando. En este caso, estamos trabajando con `HTML5` .

2º - Las etiquetas `<html>` y `</html>` indican al navegador web dónde comienza y termina el código `HTML` .

3º - Las etiquetas `<head>` y `</head>` contienen información sobre el sitio web, ejemplo: estilo, meta-tags, scripts, etc.

4º - Las etiquetas `<title>` y `</title>` dicen al navegador cuál es el título de la página. El título se puede ver identificando la pestaña en su navegador de Internet. El texto que se define entre estas etiquetas es también el texto que los motores de búsqueda utilizan como título cuando presentan las páginas en los resultados de una búsqueda.

5º - Entre las etiquetas `<body>` y `</ body>` se coloca el contenido de la página, que es lo que se muestra en el navegador.

### Cambios en HTML5

#### Introducción de etiquetas semánticas.

En lugar de usar `<div>` para cada otro contenedor, varios semánticos (estas etiquetas ayudan a los lectores de pantalla que usan visualmente etiquetas dañadas como `<header>` `<footer>` . Por lo tanto, es aconsejable utilizar estas etiquetas en lugar de `<div>` genérico.

#### Más información:

[HTML: Introducción](https://www.w3schools.com/html/html_intro.asp)