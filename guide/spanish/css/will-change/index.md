---
title: Will Change
localeTitle: Cambiará
---
## Cambiará

La propiedad will-change le permite decirle al navegador qué manipulaciones ocurrirán con el elemento para optimizarlo.

```css
.container { 
 will-change: transform; 
 } 
```

La propiedad anterior will-change se usa para la clase `.container` , en este caso, la transformación en el elemento puede ocurrir o no.

Sin embargo, usando esta propiedad hay un efecto secundario interesante.

Si aplicamos al elemento transform: `translateZ (0)` , el elemento creará un nuevo contexto de superposición, y en algunos navegadores también agregará una capa a su propio flujo de representación, lo que nos dará un aumento de rendimiento, que estamos logrando .

En consecuencia, al utilizar `will-change: transform` , el navegador creará un nuevo contexto de superposición, independientemente de si aplicamos la transformación al elemento o no.

La clave a tener en cuenta es que will-change creará un nuevo contexto de superposición solo si la propiedad también crea un nuevo contexto de superposición. Debido a que la propiedad de transformación crea un nuevo contexto de superposición, `will-change: transform` también creará un nuevo contexto de superposición.

Si usó `will-change: display` , entonces no se creará un nuevo contexto de superposición, ya que ningún valor de la propiedad de visualización creará un nuevo contexto de superposición.

Veamos otro ejemplo: la `opacity` . La opacidad con un valor de 1 no crea un nuevo contexto de superposición, pero se creará un valor más bajo (por ejemplo, 0.9). Mientras que will-change: la opacidad creará en cualquier caso un nuevo contexto de superposición.

#### Más información:

*   [cambio en los documentos web de MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/will-change)
*   [CSS cambiará el nivel de módulo 1 (borrador de trabajo)](https://drafts.csswg.org/css-will-change/#will-change)
*   [¿Puedo usar: propiedad de cambio de CSS?](https://caniuse.com/#feat=will-change)