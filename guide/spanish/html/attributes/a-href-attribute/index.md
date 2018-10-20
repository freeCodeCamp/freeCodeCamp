---
title: A Href Attribute
localeTitle: Un atributo de Href
---
## Un atributo de Href

El atributo `<a href>` refiere a un destino proporcionado por un enlace. La `a` etiqueta (ancla) está muerto sin el `<href>` atributo. A veces, en su flujo de trabajo, no desea un enlace en vivo o aún no sabrá el destino del enlace. En este caso, es útil establecer el atributo `href` en `"#"` para crear un enlace muerto. El atributo `href` se puede usar para vincular archivos locales o archivos en Internet.

Por ejemplo:

```html

<html> 
  <head> 
    <title>Ejemplo del Atributo Href</title> 
  </head> 
  <body> 
    <h1>Ejemplo del Atributo Href</h1> 
      <p> 
        <a href="https://www.freecodecamp.org/contribute/">Pagina de Contribucion de freeCodeCamp</a> Te muestra como y donde puedes contribuir a la comunidad y al crecimiento de freeCodeCamp. 
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

<a href="#">Este es un enlace muerto</a> 
 <a href="https://www.freecodecamp.org">Este es un enlace activo a freeCodeCamp</a> 
 <a href="https://html.com/attributes/a-href/">otro mas con el atributo href</a> 
```

### Anclajes en página

También es posible establecer un ancla a cierto lugar de la página. Para hacer esto, primero debe colocar una pestaña en la ubicación de la página con la etiqueta y el atributo necesario "nombre" con cualquier descripción de palabra clave, como esta:

```html

<a name="top"></a> 
```

No se requiere ninguna descripción entre etiquetas. Después de eso, puede colocar un enlace que conduce a este ancla en cualquier lugar de la misma página. Para hacer esto, debe usar la etiqueta con el atributo necesario "href" con el símbolo # (marcado) y la descripción de la palabra clave del ancla, como esto:

```html

<a href="#top">Ir al Inicio</a> 
```

### Enlaces de imagen

El `<a href="#">` también puede aplicarse a imágenes y otros elementos HTML.

### Ejemplo

```html

<a href="#"><img itemprop="image" style="height: 90px;" src="http://www.chatbot.chat/assets/images/header-bg_y.jpg" alt="imagen">  </a> 
```

### Ejemplo

[![imagen](http://www.chatbot.chat/assets/images/header-bg_y.jpg)](#)

### Algunos ejemplos más de href

```html

<base href="https://www.freecodecamp.org/a-href/">Este te da una url base para todas las url subsecuentes en esta página</a> 
 <link href="style.css">Este es un enlace activo a una hoja de estilos externa (external stylesheet)</a> 

```
