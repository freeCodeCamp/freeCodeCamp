---
title: CSS Grid Layout
localeTitle: CSS Grid Layout
---
## CSS Grid Layout

CSS Grid Layout es el sistema de diseño más poderoso disponible en CSS. Es un sistema bidimensional, lo que significa que puede manejar columnas y filas, a diferencia de flexbox, que es en gran medida un sistema unidimensional. Si bien Grid Layout no es totalmente compatible con todos los navegadores, es la forma más avanzada y conveniente de hacer diseños de página.

## Sintáxis básica
CSS Grid Layout funciona convirtiendo un elemento HTML en un contenedor que permite "acomodar" elementos hijo en filas y columnas dentro de él.

Se puede convertir cualquier elemento HTML en un contenedor de CSS Grid, para ello se debe colocar el valor 'grid' en la propiedad display del elemento que se desea convertir en un contenedor de CSS Grid, esto permite utilizar todas las otras propiedades que están asociadas a css grid.

```css
#contenedor-css-grid {
   display: grid;
}
```

En Css Grid, el elemento padre es también llamado contenedor y uss elementos hijo son llamados items o elementos.


#### Más información:

Para más información, lea [Una guía completa para CSS Grid Layout](http://chris.house/blog/a-complete-guide-css-grid-layout/) por Chris House.

Se puede leer más información sobre el soporte del navegador en [https://caniuse.com](https://caniuse.com/#feat=css-grid) .
