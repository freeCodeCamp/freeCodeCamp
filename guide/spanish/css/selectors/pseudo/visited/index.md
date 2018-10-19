---
title: Visited
localeTitle: Visitó
---
## Visitó

El selector CSS: visitado cambia el estilo de un enlace que ha sido visitado por un usuario. Este selector se usa para ayudar a los usuarios a distinguir entre los enlaces que tienen y que no han visitado.

Si se utilizan múltiples pseudo selectores de CSS, el selector: visitado debe aparecer después del: selector de enlace.

En el siguiente ejemplo, después de que un usuario haga clic en un enlace, el color del texto cambiará de negro a verde.

```css
 a { 
   color: black; 
 } 
 
 a:visited { 
   color: green; 
 } 
```

Debido a razones de privacidad del usuario, el selector: visit se limita a modificar los estilos de las siguientes propiedades CSS:

*   color
*   color de fondo
*   color de borde (incluido el color de borde para lados separados)
*   columna-regla-color
*   color del contorno
*   Relleno y trazo (para imágenes SVG)

#### Más información:

*   [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/:visited)
*   [Escuelas w3](https://www.w3schools.com/cssref/sel_visited.asp)
*   [Guía de trucos CSS para pseudo clases y elementos](https://www.smashingmagazine.com/2016/05/an-ultimate-guide-to-css-pseudo-classes-and-pseudo-elements/#visited)