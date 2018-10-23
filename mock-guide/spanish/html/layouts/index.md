---
title: Layouts
localeTitle: Diseños
---
## Diseños

Los diseños organizan diferentes áreas de la página web.

Casi todas las páginas web que vemos pueden dividirse en cuadros, que se pueden organizar en un orden específico para crear esa página web. La imagen de abajo es uno de esos ejemplos.

![Muestra de Diseño de Sitio Web - www.codementor.io](http://i.imgur.com/Z1DSMYC.png)

> Los sitios web a menudo muestran el contenido en varias columnas (como una revista o un periódico).

Y las técnicas de diseño HTML nos ayudan a colocar la información necesaria en el orden o diseño necesario.

### Técnicas para Implementar Diseños

#### Tablas HTML

Una de las herramientas más básicas para implementar diseños en una página web, estas son proporcionadas por HTML. Pero a medida que el diseño se complica, las tablas HTML pierden rápidamente su facilidad debido al aumento en el texto de marcado.

#### Flotador CSS

Si va a diseñar una página basada en 2 columnas con el panel de navegación izquierdo y el área central de visualización de contenido, es fácil hacerlo con flotadores CSS. Simplemente configure la página de navegación izquierda en un `<div>` con propiedades de estilo `float: left;` . Y listo obtendrás ese diseño. Pero qué pasa si tuvieras 4 columnas en una sola sección. Claro, uno puede hacerlo con flotadores, pero la sintaxis de HTML que estaría escribiendo sería fácil de comprender.

#### CSS Frameworks

Aquí es donde entran los marcos de CSS como [Bootstrap](http://getbootstrap.com/) y [Materialise](http://materializecss.com/) . Estos marcos proporcionan una funcionalidad de cuadrícula que permite dividir cada sección de su página web en 12 columnas, que puede ordenar para diseñar.

![Ejemplo de cuadrícula](http://blog.gridbox.io/wp-content/uploads/2018/01/download-1-1024x271.png)

> Ejemplo de rejilla Bootstrap

### Elementos semánticos HTML

Los sitios web a menudo muestran el contenido en varias columnas (como una revista o un periódico).

HTML5 ofrece nuevos elementos semánticos que definen las diferentes partes de una página web:
```
<header> - Defines a header for a document or a section 
 <nav> - Defines a container for navigation links 
 <section> - Defines a section in a document 
 <article> - Defines an independent self-contained article 
 <aside> - Defines content aside from the content (like a sidebar) 
 <footer> - Defines a footer for a document or a section 
 <details> - Defines additional details 
 <summary> - Defines a heading for the <details> element 
```

#### Más información:

*   [Escuelas W3 - Diseño](https://www.w3schools.com/html/html_layout.asp)
*   [CodeMentorTeam](https://www.codementor.io/codementorteam/4-different-html-css-layout-techniques-to-create-a-site-85i9t1x34) - Técnicas de diseño para crear un sitio