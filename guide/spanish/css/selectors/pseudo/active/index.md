---
title: Active
localeTitle: Activo
---
## Activo

El selector CSS: active cambia el estilo de un elemento HTML cuando un usuario activa el elemento. Este selector normalmente proporciona la confirmación del usuario de que han hecho clic en un elemento. El selector activo se usa más comúnmente en los elementos `<a>` y `<button>` pero se puede usar en todos los elementos.

Si se están utilizando múltiples pseudo selectores de CSS, el selector: activo debe aparecer después del: selector de desplazamiento.

En el siguiente ejemplo, cuando un usuario hace clic en un enlace, el color del texto cambiará de negro a rojo hasta que la acción de clic se detenga.

```css
a { 
  color: black; 
 } 
 
 a:active { 
  color: red; 
 } 
```

#### Más información:

*   [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/:active)
*   [Escuelas w3](https://www.w3schools.com/cssref/sel_active.asp)