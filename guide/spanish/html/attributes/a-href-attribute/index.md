---
title: A Href Attribute
localeTitle: Un atributo de Href
---
## Un atributo de Href

El atributo `<a href>` refiere a un destino proporcionado por un enlace. La etiqueta `a` (ancla) está muerta sin el atributo `<href>`. En tu flujo de trabajo, en algún momento no deseas un enlace vivo o no sabes todavía el destino del enlace. En este caso, es útil establecer el atributo `href` en `"#"` para crear un enlace muerto. El atributo `href` se puede usar para vincular archivos locales o archivos en Internet.

Por ejemplo:

```html

<html> 
  <head> 
    <title>Ejemplo de atributo href</title> 
  </head> 
  <body> 
    <h1>Ejemplo de atributo href</h1> 
      <p> 
        <a href="https://www.freecodecamp.org/contribute/">La página de contribución freeCodeCamp</a> te muestra cómo y dónde puedes contribuir a la comunidad y al crecimiento de freeCodeCamp. 
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

<a href="#">Esto es un enlace muerto</a> 
<a href="https://www.freecodecamp.org">Esto es un enlace vivo a freeCodeCamp</a> 
<a href="https://html.com/attributes/a-href/">Otro ejemplo con un atributo href</a> 
```

### Anclajes en la página

También es posible establecer un ancla a un lugar determinado de la página. Para hacerlo, primero debes colocar una pestaña en la ubicación de la página con la etiqueta y el atributo necesario `name` con cualquier descripción de palabra clave, así:

```html

<a name="arriba"></a> 
```

No se requiere ninguna descripción entre etiquetas. Después de eso, puedes colocar un enlace que conduzca a este ancla en cualquier lugar de la misma página. Para hacer esto, debe usar la etiqueta con el atributo necesario `rhref` con el símbolo `#` (sostenido) y una pequeña descripción, en palabras clave, del ancla, así:

```html

<a href="#arriba">Ir arriba</a> 
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

<base href="https://www.freecodecamp.org/a-href/">Esto otorga una url base para todas las próximas urls en la página</a> 
<link href="style.css">Esto es un enlace vivo a una hoja de estilos externa</a> 

```
