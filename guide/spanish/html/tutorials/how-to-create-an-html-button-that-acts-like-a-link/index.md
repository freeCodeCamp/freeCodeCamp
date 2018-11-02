---
title: How to Create an HTML Button That Acts Like a Link
localeTitle: Cómo crear un botón HTML que funciona como un enlace
---
## Cómo crear un botón HTML que funciona como un enlace

En ocasiones, es posible que desee utilizar un botón para vincular a otra página o sitio web en lugar de enviar un formulario o algo así. Esto es bastante simple de hacer y se puede lograr de varias maneras.

Una forma es simplemente envolver su etiqueta `<button>` en una etiqueta `<a>` :

```html

<a href='https://www.freecodecamp.org/'><button>Link To freeCodeCamp</button></a> 
```

Esto transforma todo su botón en un enlace.

Una segunda opción es crear su enlace como lo haría normalmente con su etiqueta `<a>` y luego diseñarlo a través de CSS:

```html

<a href='https://www.freecodecamp.org/'>Link To freeCodeCamp</a> 
```

Una vez que haya creado su enlace, puede usar CSS para que se vea como un botón. Por ejemplo, podría agregar un borde, un color de fondo, algunos estilos para cuando el usuario esté moviendo el enlace ...

Otra forma de agregar un botón es envolver una `input` dentro de las etiquetas de `form` . Especifique la URL de destino deseada en el atributo de acción de formulario.

```html

<form action="http://google.com"> 
    <input type="submit" value="Go to Google" /> 
 </form> 
```

#### Más información:

*   [Guía FreeCodeCamp - botones de estilo](https://guide.freecodecamp.org/css/css-buttons/)
*   [¿Cómo crear un botón HTML que actúe como un enlace?](https://stackoverflow.com/questions/2906582/how-to-create-an-html-button-that-acts-like-a-link)