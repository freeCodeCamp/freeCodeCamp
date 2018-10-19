---
title: Before Selector
localeTitle: Antes del selector
---
## Antes del selector

El selector CSS **:: before** se puede usar para insertar cualquier cosa antes del contenido, un elemento o varios elementos. Permite al diseñador realizar cualquier diseño css antes del contenido en un elemento. Se utiliza adjuntando **:: before** al elemento en el que se va a utilizar.

Veamos algunos ejemplos:

```css
p::before { 
    content: ""; 
    border: solid 5px #ccc 
 } 
 
 span.comentario::before{ 
  content: "comentario: "; 
  color: blue; 
 } 
```

```html

<p> Al infinito y más allá</p> 
 <p> Soy Buzz Lightyear, vengo en paz.</p> 
 
 <span class="comentario"> Que la fuerza te acompañe</span> 
 <br/> 
 <span> Hazlo, o no lo hagas. Pero no lo intentes.</span> 
```

En el ejemplo anterior, estamos anteponiendo un borde gris a cada elemento de párrafo en una página y también estamos anteponiendo las palabras comentario en azul a cada elemento de tramo de la clase "comentario".

> Puede ver esta demostración aquí https://jsfiddle.net/398by400/

#### Definición y uso

`::before` es uno de los selectores de pseudo-elementos CSS que se utilizan para diseñar partes específicas de un elemento. En este caso, podemos insertar contenido antes de algún elemento HTML desde CSS. Aunque veremos el contenido en la página, no es parte del DOM, lo que significa que no podemos manipularlo desde Javascript. Un truco para resolver esta desventaja: pasar el contenido con un atributo de datos y usar jQuery para manipularlo. Aquí hay un ejemplo de uso:

```css
   p::before { 
     content: "Hello "; 
   } 
```

```html

<p>world!!</p> 
```

Esto te mostrará `Hello world!!` en la pagina

No solo las cadenas, también las imágenes, los contadores o incluso nada ("", útil para clearfix) se pueden insertar en el `content` , pero **no HTML** . Hay un buen número de cosas geniales que se pueden hacer usando `::before` y `after` de una manera creativa. Si tienes curiosidad, puedes echar un vistazo en el siguiente enlace: [Un montón de cosas increíbles que pueden hacer los pseudo elementos](https://www.w3schools.com/css/css_pseudo_elements.asp)

#### Colón simple vs. colón doble

Hay un poco de discusión sobre la forma correcta de usar los pseudo-elementos: el estilo antiguo de un solo punto ( `:before` ), usado en las especificaciones CSS 1 y 2, versus la recomendación de CSS3, dos puntos ( `::before` ), principalmente para _"establecer una discriminación entre pseudo-clases y pseudo-elementos "_ . Pero por razones de compatibilidad, todavía se acepta el punto y coma. Hablando de compatibilidad, IE8 solo admite la notación de un solo punto.

#### Más información:

[W3Schools CSS Pseudo-elementos](https://www.w3schools.com/css/css_pseudo_elements.asp)

[CSS-Tricks :: after / :: before](https://css-tricks.com/almanac/selectors/a/after-and-before/)

[Selección y manipulación de pseudo-elementos CSS, como :: before y :: after using jQuery](https://stackoverflow.com/questions/5041494/selecting-and-manipulating-css-pseudo-elements-such-as-before-and-after-usin)
