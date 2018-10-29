---
title: HTML and CSS Cheat Sheet
localeTitle: HTML y CSS Cheat Sheet
---
Esta es una página que (con suerte) crecerá para cubrir las soluciones básicas y simples de HTML y CSS.

Por favor agregue a sus soluciones alternativas si conoce una forma diferente.

## Haciendo una regla horizontal `<hr>` más pequeña

```css
    hr { 
      width: 75%; 
      margin-left: auto; 
      margin-right: auto; 
    } 
```

## Dando un fondo `<div>` sin desplazamiento

```css
    #divName { 
      padding-top: 50px; 
      height: 500px; 
      color: #fff; 
      background-image: url("your_url.jpg"); 
      background-repeat: no-repeat; 
      background-attachment: fixed; 
      background-size: 100%; 
    } 
```

Prueba diferentes valores para ver cómo afecta el div y más en el html

```html

<div id="divName" class="container-fluid"> 
```

## Alineación vertical (para una línea de texto)

Esto puede ser de uso en un menú de navegación CSS. La clave es hacer que la altura del menú y la altura de la línea del texto sean iguales. `css .nav li{ line-height:50px; height:50px; }` Más trucos aseados [se pueden encontrar aquí](https://www.webdesignerdepot.com/2016/10/20-essential-css-tricks-every-designer-should-know/)

## Centrar una lista horizontal

[http://csswizardry.com/2011/01/create-a-centred-horizontal-navigation/](http://csswizardry.com/2011/01/create-a-centred-horizontal-navigation/)

## Secciones y esquemas de un documento HTML

[https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Sections _y_ esquemas _de_ un documento _HTML5_](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document)