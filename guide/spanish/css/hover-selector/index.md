---
title: Hover Selector
localeTitle: Selector de desplazamiento
---
## Selector de desplazamiento

El selector CSS `:hover` es una de las muchas pseudo-clases que se utilizan para diseñar elementos.

El selector hover se usa para seleccionar elementos cuando pasas el mouse sobre ellos.

El selector hover se puede usar en todos los elementos, no solo en los enlaces.

Utilice el selector de enlaces: para vincular los enlaces a las páginas no visitadas, el selector de visitados para diseñar los enlaces de las páginas visitadas y el selector activo para diseñar el enlace activo.

Nota:: para poder ser efectivo, Hover DEBE aparecer después de: enlace y: visitado (si están presentes) en la definición de CSS.

Sintaxis CSS : flotar { declaraciones css; }

El selector de desplazamiento solo aplica los estilos proporcionados en la regla cuando el elemento entra en el estado de desplazamiento. Es cuando el usuario se desplaza sobre el elemento con su ratón.

```css
button { 
  color: white; 
  background-color: green; 
 } 
 
 button:hover { 
  background-color: white; 
  border: 2px solid green; 
  color: green; 
 } 
```

En el ejemplo anterior, el estilo normal del botón es texto blanco sobre un botón verde. Cuando un usuario se desplaza sobre el botón con su mouse, la regla con el selector de `:hover` activará y el estilo del botón cambiará.

#### Más información:

[MDN `:hover` Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)

Puede encontrar muchas más pseudo-clases en este artículo en los Docs de [pseudo-clases MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) de Mozillia.