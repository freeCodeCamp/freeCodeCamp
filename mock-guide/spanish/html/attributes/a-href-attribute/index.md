---
title: A Href Attribute
localeTitle: Un atributo de Href
---
## Un atributo de Href

El atributo `<a href>` refiere a un destino proporcionado por un enlace. La `a` etiqueta (ancla) no funciona sin el `<href>` atributo. A veces, en su flujo de trabajo, no desea un enlace en vivo o aún no sabrá el destino del enlace. En este caso, es útil establecer el atributo `href` en `"#"` para crear un enlace muerto. El atributo `href` se puede usar para vincular archivos locales o archivos en Internet.

Por ejemplo:

```html

<html> 
  <head> 
    <title>Href Attribute Example</title> 
  </head> 
  <body> 
    <h1>Href Attribute Example</h1> 
      <p> 
        <a href="https://www.freecodecamp.org/contribute/">The freeCodeCamp Contribution Page</a> shows you how and where you can contribute to freeCodeCamp's community and growth. 
      </p> 
    </h1> 
  </body> 
 </html> 
```

El atributo `<a href>` es compatible con todos los navegadores.

#### Más atributos:

`hreflang` : especifica el idioma del recurso vinculado. `target` : especifica el contexto en el que se abrirá el recurso vinculado. `title` : define el título de un enlace, que aparece para el usuario como información sobre herramientas.

### Ejemplos

```html

<a href="#">This is a dead link</a> 
 <a href="https://www.freecodecamp.org">This is a live link to freeCodeCamp</a> 
 <a href="https://html.com/attributes/a-href/">more with a href attribute</a> 
```

### Anclajes en página

También es posible establecer un ancla a cierto lugar de la página. Para hacer esto, primero debe colocar una pestaña en la ubicación de la página con la etiqueta y el atributo necesario "nombre" con cualquier descripción de palabra clave, como esta:

```html

<a name="top"></a> 
```

No se requiere ninguna descripción entre etiquetas. Después de eso, puede colocar un enlace que conduce a este ancla en cualquier lugar de la misma página. Para hacer esto, debe usar la etiqueta con el atributo necesario "href" con el símbolo # (marcado) y la descripción de la palabra clave del ancla, como esto:

```html

<a href="#top">Go to Top</a> 
```

### Enlaces de imagen

El `<a href="#">` también puede aplicarse a imágenes y otros elementos HTML.

### Ejemplo

```html

<a href="#"><img itemprop="image" style="height: 90px;" src="http://www.chatbot.chat/assets/images/header-bg_y.jpg" alt="picture">  </a> 
```

### Ejemplo

[![imagen](http://www.chatbot.chat/assets/images/header-bg_y.jpg)](#)

### Algunos ejemplos más de href

```html

<base href="https://www.freecodecamp.org/a-href/">This gives a base url for all further urls on the page</a> 
 <link href="style.css">This is a live link to an external stylesheet</a> 

```
