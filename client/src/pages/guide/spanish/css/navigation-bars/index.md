---
title: Navigation Bars
localeTitle: Barras de navegación
---
## Barras de navegación

Las barras de navegación son un elemento muy importante para cualquier sitio web. Proporcionan el método principal de navegación al proporcionar una lista principal de enlaces a un usuario. Hay muchos métodos para crear una barra de navegación. La forma más fácil de crear una barra de navegación es usar una lista desordenada y diseñarla con CSS.

Las barras de navegación se componen principalmente de listas `<ul>` que están dispuestas horizontalmente y con estilo.

Al diseñar los estilos de las barras de navegación, es común eliminar el espacio adicional creado por las etiquetas `<ul>` y `<li>` , así como los puntos de inserción que se insertan automáticamente:

```css
   list-style-type: none; 
   margin: 0px; 
   padding: 0px; 
```

**Ejemplo:**

Hay dos partes en cualquier navegación: el HTML y el CSS. Este es solo un ejemplo rápido.

```html

<nav class="myNav">                                 <!-- Any element can be used here --> 
    <ul> 
        <li><a href="index.html">Home</a></li> 
        <li><a href="about.html">About</a></li> 
        <li><a href="contact.html">Contact</a></li> 
    </ul> 
 </nav> 
```

```css
/* Define the main Navigation block */ 
 .myNav { 
    display: block; 
    height: 50px; 
    line-height: 50px; 
    background-color: #333; 
 } 
 /* Remove bullets, margin and padding */ 
 .myNav ul { 
    list-style: none; 
    padding: 0; 
    margin: 0; 
 } 
 .myNav li { 
    float: left; 
    /* Or you can use display: inline; */ 
 } 
 /* Define the block styling for the links */ 
 .myNav li a { 
    display: inline-block; 
    text-align: center; 
    padding: 14px 16px; 
 } 
 /* This is optional, however if you want to display the active link differently apply a background to it */ 
 .myNav li a.active { 
    background-color: #3786E1; 
 } 
```

#### Más información:

Más ejemplos de navegación: [W3Schools](https://www.w3schools.com/css/css_navbar.asp)