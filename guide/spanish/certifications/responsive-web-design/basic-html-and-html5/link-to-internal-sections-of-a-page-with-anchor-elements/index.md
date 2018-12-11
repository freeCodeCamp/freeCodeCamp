---
title: Link to Internal Sections of a Page with Anchor Elements
localeTitle: Enlace a las secciones internas de una página con elementos de anclaje
---
## Enlace a las secciones internas de una página con elementos de anclaje

Como se indica en las instrucciones el enlace interno se compone de dos elementos: la `a` etiqueta y el elemento de HTML con el `id` utilizado en el `href` atributo de la `a` etiqueta.

Todos estos son enlaces internos válidos:

Etiqueta de anclaje | TRAE A ----- | ------ `<a href="#destination">I am an internal link</a>` | `<p id="destination">I am the destination of the link</p>` `<a href="#inlinestuff">I am an internal link</a>` | `<span id="inlinestuff">I am the destination of the link</span>` `<a href="#title">I am an internal link</a>` | `<h1 id="title">I am the destination of the link</h1>` `<a href="#mainarticle">I am an internal link</a>` | `<article id="mainarticle">I am the destination of the link</article>`

Se le solicita que utilice el elemento de anclaje existente para crear su enlace interno, por lo que no escriba otra etiqueta de anclaje.

Sin embargo, transformar la etiqueta de anclaje real no es lo único que el desafío quiere que hagas, hay dos puntos más:

*   Para quitar el `target` atributo de la `a` etiqueta: usted no desea más que abrir una nueva pestaña en el navegador, que es la página real que va a 'moverse' hacia arriba / abajo.
    
*   Para modificar el contenido del texto de la `a` de la etiqueta: a partir de `cat photos` a `Jump to Bottom` (la capitalización de retención doble).
    
    ¡Buena suerte!