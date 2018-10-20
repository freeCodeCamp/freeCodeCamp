---
title: CSS3 Opacity Property
localeTitle: Propiedad de opacidad CSS3
---
## Propiedad de opacidad CSS3

`opacity` permite controlar la transparencia de un elemento en una escala de `0` a `1` .

Si establece la propiedad de un elemento en `0` , será transparente. Si lo establece en `1` será opaco.

Configurando un elemento a `opacity: 0;` No lo elimina de la página. El elemento seguirá siendo accesible y afectará el flujo del contenido de la página.

```css
.transparent { 
    opacity: 0; 
 } 
 
 .verySeeThrough { 
    opacity: 0.3; 
 } 
 
 .slightlySeeThrough { 
    opacity: 0.7; 
 } 
 
 .opaque { 
    opacity: 1; 
 } 
```

[Este sencillo ejemplo](https://jsfiddle.net/1ogmxaf8/1/) muestra cómo podría usar la opacidad con un efecto de desplazamiento.

#### Más información:

*   [Documentos web de MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)
*   [CSS trucos almanaque](https://css-tricks.com/almanac/properties/o/opacity/)