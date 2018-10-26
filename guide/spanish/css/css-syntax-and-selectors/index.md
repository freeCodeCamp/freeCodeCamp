---
title: CSS Syntax and Selectors
localeTitle: Sintaxis CSS y selectores
---
## Sintaxis CSS y selectores

Cuando hablamos de la sintaxis de CSS, hablamos de cómo se presentan las cosas. Hay reglas acerca de lo que va a dónde, tanto para que pueda escribir CSS de manera consistente y un programa (como un navegador) puede interpretarlo y aplicarlo a la página correctamente.

Hay dos formas principales de escribir CSS.

### CSS en línea

Específicos sobre la especificidad de CSS: [trucos CSS](https://css-tricks.com/specifics-on-css-specificity/)

El CSS en línea aplica el estilo a un solo elemento y sus elementos secundarios, hasta que se encuentra otro estilo que reemplaza al primero.

Para aplicar CSS en línea, agregue el atributo "estilo" a un elemento HTML que le gustaría modificar. Entre comillas, incluya una lista delimitada por punto y coma de pares clave / valor (cada uno a su vez separados por dos puntos) que indican los estilos que se deben establecer.

Aquí hay un ejemplo de CSS en línea. Las palabras "Uno" y "Dos" tendrán un color de fondo de color amarillo y un color de texto de color rojo. La palabra "Tres" tiene un nuevo estilo que reemplaza al primero, y tendrá un color de fondo de verde y un color de texto de cian. En el ejemplo, estamos aplicando estilos a las etiquetas `<div>` , pero puede aplicar un estilo a cualquier elemento HTML.

```html

<div style="color:red; background:yellow"> 
  One 
  <div> 
    Two 
  </div> 
  <div style="color:cyan; background:green"> 
    Three 
  </div> 
 </div> 
```

### CSS interno

Si bien escribir un estilo en línea es una forma rápida de cambiar un solo elemento, hay una manera más eficiente de aplicar el mismo estilo a muchos elementos de la página a la vez.

El CSS interno tiene sus estilos especificados en la etiqueta `<style>` , y está incrustado en la etiqueta `<head>` .

Aquí hay un ejemplo que tiene un efecto similar al del ejemplo "en línea" anterior, excepto que el CSS se ha extraído a su propia área. Las palabras "Uno" y "Dos" coincidirán con el selector `div` y serán texto rojo sobre un fondo amarillo. Las palabras "Tres" y "Cuatro" también coincidirán con el selector `div` , pero también coincidirán con el selector `.nested_div` que se aplica a cualquier elemento HTML que haga referencia a esa clase. Este selector más específico anula el primero, y terminan apareciendo como texto cian sobre un fondo verde.

```html

<style type="text/css"> 
  div { color: red; background: yellow; } 
  .nested_div { color: cyan; background: green; } 
 </style> 
 
 <div> 
  One 
  <div> 
    Two 
  </div> 
  <div class="nested_div"> 
    Three 
  </div> 
  <div class="nested_div"> 
    Four 
  </div> 
 </div> 
```

Los selectores que se muestran arriba son extremadamente simples, pero pueden ser bastante complejos. Por ejemplo, es posible aplicar estilos solo a elementos anidados; es decir, un elemento que es hijo de otro elemento.

Este es un ejemplo en el que especificamos un estilo que solo debe aplicarse a elementos `div` que son hijos directos de otros elementos `div` . El resultado es que "Dos" y "Tres" aparecerán como texto rojo sobre un fondo amarillo, pero "Uno" y "Cuatro" no se verán afectados (y el texto negro probablemente sobre un fondo blanco).

```html

<style type="text/css"> 
  div > div { color: red; background: yellow; } 
 </style> 
 
 <div> 
  One 
  <div> 
    Two 
  </div> 
  <div> 
    Three 
  </div> 
 </div> 
 <div> 
  Four 
 </div> 
```

### CSS externo

Todo el estilo tiene su propio documento que está vinculado en la etiqueta `<head>` . La extensión del archivo vinculado es `.css`

#### Más información:

*   [Sintaxis CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax) @ MDN
*   [Selectores CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) @ MDN
*   [Referencia de selectores de CSS](https://www.w3schools.com/cssref/css_selectors.asp)
*   [Especificidad de los selectores de CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)