---
title: Get Started
localeTitle: Empezar
---
## Empezar

Bootstrap es un marco de código abierto y gratuito desarrollado por Twitter, que proporciona una variedad de plantillas para usar con el desarrollo web frontend. El uso de Bootstrap facilita el diseño de un sitio web totalmente sensible y es un marco que vale la pena aprender.

#### ¿Qué es un sitio web responsivo?

Un sitio web receptivo es un sitio web que redimensiona y reorganiza los elementos de la página según el tamaño de su navegador. Con un sitio web receptivo, si cambia el tamaño de su navegador, puede ver los cambios que se producen en tiempo real. Bootstrap hace que tu sitio web sea receptivo para ti.

#### ¿Cómo agrego Bootstrap a mi página?

Agregar bootstrap a su página es un proceso rápido, solo agregue lo siguiente a las etiquetas `<head>` en su código.

```html

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"> 
```

También deberá agregar lo siguiente entre las etiquetas del `body` en su código. Con bootstrap, utilizará etiquetas `<div>` cuando use muchas de las funciones de Bootstrap, cada etiqueta tendrá su propio conjunto único de clases aplicadas que permiten que la etiqueta realice su tarea. Otras secciones de esta guía de Bootstrap mostrarán más ejemplos de cómo Bootstrap usa las etiquetas `<div>` . (Las etiquetas `<div>` no son exclusivas de Bootstrap, sin embargo Bootstrap las utiliza). A continuación se muestra el código que se agregaría a las etiquetas del `body` en su código para terminar de comenzar. Tenga en cuenta que mientras esto crea el contenedor, la página seguirá en blanco hasta que agregue contenido al contenedor.

```html

<div class="alert alert-success" role="alert"> 
    <strong>Congratulations!</strong> 
    <p>Bootstrap is now working on this page</p> 
 </div> 
```

**¡Felicidades!**

Bootstrap ahora está trabajando en esta página

#### Más información

*   [El sitio web oficial de Bootstrap](http://getbootstrap.com/getting-started/)