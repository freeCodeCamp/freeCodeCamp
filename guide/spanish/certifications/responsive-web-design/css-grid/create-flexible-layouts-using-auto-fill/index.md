---
title: Create Flexible Layouts Using auto-fill
localeTitle: Crear diseños flexibles con autocompletar
---
## Crear diseños flexibles con autocompletar

Este desafío explicará el desafío anterior al agregar el valor de **autocompletar** a la función de _repetición_ . Esto hará que la cantidad de divs se expanda según el tamaño de la ventana gráfica en lugar del valor de columna especificado previamente. En la sección **Antes de** abajo, se especifica el valor de **cuadrícula-template-columna** "3".

_Tenga en cuenta que los siguientes fragmentos de código son solo ejemplos y no el desafío exacto del currículo de freeCodeCamp._

### antes de

```css
    grid-template-columns: repeat(3, minmax(50px, 2fr)); 
```

### Después

```css
    grid-template-columns: repeat(auto-fill, minmax(50px, 2fr)); 
```

* * *

### Recursos

Puede consultar la sección de **Sintaxis** de la página siguiente para ver el valor de **llenado automático** : [Red de desarrolladores de Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/repeat)