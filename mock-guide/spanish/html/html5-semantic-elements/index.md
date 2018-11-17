---
title: HTML5 Semantic Elements
localeTitle: Elementos semánticos HTML5
---
## Elementos semánticos HTML5

Los elementos HTML semánticos describen claramente su significado de una manera humana y legible por máquina. Los elementos como `<header>` , `<footer>` y `<article>` se consideran semánticos porque describen con precisión el propósito del elemento y el tipo de contenido que está dentro de ellos.

### Una historia rápida

HTML fue creado originalmente como un lenguaje de marcado para describir documentos en la Internet temprana. A medida que internet creció y fue adoptado por más personas, sus necesidades cambiaron. Donde originalmente se invirtió Internet para compartir documentos científicos, ahora la gente quería compartir otras cosas también. Muy rápidamente, la gente comenzó a querer hacer que la web se vea mejor. Debido a que la web no fue diseñada inicialmente para ser diseñada, los programadores utilizaron diferentes hacks para organizar las cosas de diferentes maneras. En lugar de usar la `<table></table>` para describir información usando una tabla, los programadores los usarían para colocar otros elementos en una página. A medida que avanzaba el uso de diseños diseñados visualmente, los programadores comenzaron a usar una etiqueta genérica "no semántica" como `<div>` . A menudo, les darían a estos elementos un atributo de `class` o `id` para describir su propósito. Por ejemplo, en lugar de `<header>` esto se escribía a menudo como `<div class="header">` . Como HTML5 aún es relativamente nuevo, este uso de elementos no semánticos todavía es muy común en los sitios web de hoy.

#### Lista de nuevos elementos semánticos.

Los elementos semánticos agregados en HTML5 son:

*   `<article>`
*   `<aside>`
*   `<details>`
*   `<figcaption>`
*   `<figure>`
*   `<footer>`
*   `<header>`
*   `<main>`
*   `<mark>`
*   `<nav>`
*   `<section>`
*   `<summary>`
*   `<time>`

Los elementos como `<header>` , `<nav>` , `<section>` , `<article>` , `<aside>` y `<footer>` actúan más o menos como elementos de `<div>` . Agrupan otros elementos en secciones de página. Sin embargo, cuando una etiqueta `<div>` podría contener cualquier tipo de información, es fácil identificar qué tipo de información iría en una región `<header>` semántica.

**Un ejemplo de diseño de elementos semánticos por w3schools**

![Elementos semánticos que conforman una página por w3schools.](https://www.w3schools.com/html/img_sem_elements.gif)

### Beneficios de los elementos semánticos.

Para ver los beneficios de los elementos semánticos, aquí hay dos piezas de código HTML. Este primer bloque de código utiliza elementos semánticos:
```
<header></header> 
 <section> 
    <article> 
        <figure> 
            <img> 
            <figcaption></figcaption> 
        </figure> 
    </article> 
 </section> 
 <footer></footer> 
```

Mientras que este segundo bloque de código utiliza elementos no semánticos:
```
<div id="header"></div> 
 <div class="section"> 
    <div class="article"> 
        <div class="figure"> 
            <img> 
            <div class="figcaption"></div> 
        </div> 
    </div> 
 </div> 
 <div id="footer"></div> 
```

En primer lugar, es mucho **más fácil de leer** . Esta es probablemente la primera cosa que notará al mirar el primer bloque de código usando elementos semánticos. Este es un pequeño ejemplo, pero como programador puedes estar leyendo cientos o miles de líneas de código. Cuanto más fácil sea leer y entender ese código, más fácil será hacer su trabajo.

Tiene **mayor accesibilidad** . No eres el único que encuentra elementos semánticos más fáciles de entender. Los motores de búsqueda y las tecnologías de asistencia (como los lectores de pantalla para usuarios con problemas de visión) también pueden comprender mejor el contexto y el contenido de su sitio web, lo que significa una mejor experiencia para sus usuarios.

En general, los elementos semánticos también conducen a **un código** más **consistente** . Al crear un encabezado utilizando elementos no semánticos, diferentes programadores pueden escribir esto como `<div class="header">` , `<div id="header">` , `<div class="head">` , o simplemente `<div>` . Hay tantas formas de crear un elemento de encabezado y todas dependen de las preferencias personales del programador. Al crear un elemento semántico estándar, lo hace más fácil para todos.

Desde octubre de 2014, HTML4 se actualizó a HTML5, junto con algunos nuevos elementos "semánticos". Hasta el día de hoy, algunos de nosotros todavía podríamos estar confundidos en cuanto a por qué tantos elementos diferentes que no parecen mostrar ningún cambio importante.

#### `&#60;section&#62;` y `&#60;article&#62;`

“¿Cuál es la diferencia?”, Puedes preguntar. Ambos elementos se usan para seccionar un contenido, y sí, definitivamente se pueden usar indistintamente. Es una cuestión de en qué situación. HTML4 ofreció solo un tipo de elemento contenedor, que es `&#60;div&#62;` . Si bien esto todavía se usa en HTML5, HTML5 nos proporcionó la `&#60;section&#62;` y `&#60;article&#62;` de una manera de reemplazar `&#60;div&#62;` .

La `&#60;section&#62;` y `&#60;article&#62;` Los elementos son conceptualmente similares e intercambiables. Para decidir cuál de estos debe elegir, tome nota de lo siguiente:

1.  Un artículo está destinado a ser independientemente distribuible o reutilizable.
2.  Una sección es una agrupación temática de contenido.

```html

<section> 
  <p>Top Stories</p> 
  <section> 
    <p>News</p> 
    <article>Story 1</article> 
    <article>Story 2</article> 
    <article>Story 3</article> 
  </section> 
  <section> 
    <p>Sport</p> 
    <article>Story 1</article> 
    <article>Story 2</article> 
    <article>Story 3</article> 
  </section> 
 </section> 
```

#### `&#60;header&#62;` y `&#60;hgroup&#62;`

El `&#60;header&#62;` El elemento generalmente se encuentra en la parte superior de un documento, una sección o un artículo y generalmente contiene el encabezado principal y algunas herramientas de navegación y búsqueda.

```html

<header> 
  <h1>Company A</h1> 
  <ul> 
    <li><a href="/home">Home</a></li> 
    <li><a href="/about">About</a></li> 
    <li><a href="/contact">Contact us</a></li> 
  </ul> 
  <form target="/search"> 
    <input name="q" type="search" /> 
    <input type="submit" /> 
  </form> 
 </header> 
```

El `&#60;hgroup&#62;` El elemento debe usarse donde desee un encabezado principal con uno o más subtítulos.

```html

<hgroup> 
  <h1>Heading 1</h1> 
  <h2>Subheading 1</h2> 
  <h2>Subheading 2</h2> 
 </hgroup> 
```

RECUERDE, que el `&#60;header&#62;` el elemento puede contener cualquier contenido, pero el `&#60;hgroup&#62;` el elemento solo puede contener otros encabezados, es decir `&#60;h1&#62;` a `&#60;h6&#62;` e incluyendo `&#60;hgroup&#62;` .

#### `&#60;aside&#62;`

El `&#60;aside&#62;` el elemento está destinado a contenido que no forma parte del flujo del texto en el que aparece, sin embargo, todavía está relacionado de alguna manera. Esto de `&#60;aside&#62;` como una barra lateral a su contenido principal.

```html

<aside> 
  <p>This is a sidebar, for example a terminology definition or a short background to a historical figure.</p> 
 </aside> 
```

Antes de HTML5, nuestros menús se crearon con `&#60;ul&#62;` y `&#60;li&#62;` 's. Ahora, junto con estos, podemos separar los elementos de nuestro menú con un `&#60;nav&#62;` , para la navegación entre tus páginas. Puede tener cualquier número de `&#60;nav&#62;` los elementos en una página, por ejemplo, es común tener navegación global en la parte superior (en el `&#60;header&#62;` ) y navegación local en una barra lateral (en un elemento `&#60;aside&#62;` ).

```html

<nav> 
  <ul> 
    <li><a href="/home">Home</a></li> 
    <li><a href="/about">About</a></li> 
    <li><a href="/contact">Contact us</a></li> 
  </ul> 
 </nav> 
```

#### `&#60;footer&#62;`

Si hay un `&#60;header&#62;` debe haber un `&#60;footer&#62;` . A `&#60;footer&#62;` generalmente se encuentra en la parte inferior de un documento, una sección o un artículo. Al igual que el `&#60;header&#62;` El contenido es generalmente información de metadatos, como detalles del autor, información legal y / o enlaces a información relacionada. También es válido incluir `&#60;section&#62;` Elementos dentro de un pie de página.

```html

<footer>&copy;Company A</footer> 
```

#### `&#60;small&#62;`

El `&#60;small&#62;` el elemento aparece a menudo dentro de un `&#60;footer&#62;` o `&#60;aside&#62;` elemento que usualmente contendría información de derechos de autor o renuncias legales, y otra letra pequeña. Sin embargo, esto no pretende reducir el tamaño del texto. Simplemente está describiendo su contenido, no prescribiendo la presentación.

```html

<footer><small>&copy;Company A</small> Date</footer> 
```

#### `&#60;time&#62;`

El `&#60;time&#62;` element permite que una fecha ISO 8601 no ambigua se adjunte a una versión legible por humanos de esa fecha.

```html

<time datetime="2017-10-31T11:21:00+02:00">Tuesday, 31 October 2017</time> 
```

¿Por qué molestarse con `&#60;time&#62;` ? Mientras que los seres humanos pueden leer el tiempo que se puede desconcertar a través del contexto de la manera normal, las computadoras pueden leer la fecha ISO 8601 y ver la fecha, la hora y la zona horaria.

#### `&#60;figure&#62;` y `&#60;figcaption&#62;`

`&#60;figure&#62;` es para envolver el contenido de la imagen a su alrededor, y `&#60;figcaption&#62;` Es para subtitular tu imagen.

```html

<figure> 
  <img src="https://en.wikipedia.org/wiki/File:Shadow_of_Mordor_cover_art.jpg" alt="Shadow of Mordor" /> 
  <figcaption>Cover art for Middle-earth: Shadow of Mordor</figcaption> 
 </figure> 
```

### Aprenda más sobre los nuevos elementos HTML5:

*   [w3schools](https://www.w3schools.com/html/html5_semantic_elements.asp) proporciona descripciones simples y claras de muchos de los elementos de noticias y cómo / dónde deben usarse.
*   [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) también proporciona una gran referencia para todos los elementos HTML y profundiza en cada uno de ellos.