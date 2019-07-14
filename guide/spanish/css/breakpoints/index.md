---
title: Breakpoints
localeTitle: Puntos de interrupción
---
## Visión de conjunto

Un punto de interrupción de CSS es un punto específico en el que cambia el diseño de un sitio web, basado en una [consulta de medios](https://guide.freecodecamp.org/css/css3-media-queries) volverse activo.

En general, usted especifica un punto de interrupción cuando desea volver a adaptar el diseño del sitio web al tamaño de la ventana gráfica del navegador; Sobre todo, al ancho de la ventana.

Por ejemplo, si el contenido de su sitio web se ve bien en una ventana gráfica estrecha (como en un navegador de teléfonos inteligentes), pero comienza a verse mal en pantallas más grandes (por ejemplo, tal vez el tamaño de las fuentes es demasiado pequeño y difícil de leer), entonces podría querer introducir un nuevo punto de interrupción para pantallas más grandes que hace que las fuentes sean más grandes:

Los puntos de interrupción de CSS se pueden considerar como el corazón del diseño web sensible porque definen cómo se comporta o se organiza el contenido en un ancho / escala de dispositivo diferente que le permite mostrar el mejor diseño posible al usuario.

![Ejemplo](https://getflywheel.com/wp-content/uploads/2018/02/css-breakpoints-layouts-01.jpg)

## Establecer puntos de ruptura

Los puntos de interrupción se establecen en general de acuerdo con cualquiera de los siguientes.

*   Puntos de interrupción basados ​​en el ancho del dispositivo.
*   Puntos de interrupción basados ​​en el contenido.

### Puntos de interrupción basados ​​en el ancho del dispositivo

Es bastante evidente que todos nuestros dispositivos no tienen los mismos anchos / tamaños de pantalla. Ahora es una decisión de diseño incluir un conjunto de dispositivos particulares y codificar las reglas de css en consecuencia. Ya tenemos suficientes dispositivos de los que preocuparnos, y cuando uno nuevo sale con un ancho diferente, volver a tu CSS y agregar un nuevo punto de interrupción nuevamente requiere mucho tiempo.

Aquí un ejemplo
```
/* ----------- iPhone 6, 6S, 7 and 8 ----------- */ 
 
 /* Portrait */ 
 
 @media only screen 
 
 and (min-device-width: 375px) 
 
 and (max-device-width: 667px) 
 
 and (-webkit-min-device-pixel-ratio: 2) 
 
 and (orientation: portrait) { 
 
 } 
 
 /* Landscape */ 
 
 @media only screen 
 
 and (min-device-width: 375px) 
 
 and (max-device-width: 667px) 
 
 and (-webkit-min-device-pixel-ratio: 2) 
 
 and (orientation: landscape) { 
 
 } 
 
 /* ----------- Google Pixel ----------- */ 
 
 /* Portrait */ 
 
 @media screen 
 
 and (device-width: 360px) 
 
 and (device-height: 640px) 
 
 and (-webkit-device-pixel-ratio: 3) 
 
 and (orientation: portrait) { 
 
 } 
 
 /* Landscape */ 
 
 @media screen 
 
 and (device-width: 360px) 
 
 and (device-height: 640px) 
 
 and (-webkit-device-pixel-ratio: 3) 
 
 and (orientation: landscape) { 
 
 } 
```

> Con este enfoque, terminará teniendo una gran lista de consultas de medios.

### Puntos de interrupción basados ​​en contenido

Esta es la opción preferida al hacer o escribir las reglas de punto de interrupción. Porque es más fácil ajustar su contenido según un diseño particular solo cuando se requiere un cambio.
```
@media only screen (min-width: 768px){ 
 ... 
 } 
```

> Este punto de interrupción significa que el CSS se aplicará cuando el ancho del dispositivo sea 768px y superior.

#### También puede establecer un rango con puntos de interrupción, por lo que el CSS solo se aplicará dentro de esos límites.
```
@media only screen and (min-width: 768px) and (max-width: 959px){ 
 
 ... 
 
 } 
```

**Nota** Siempre intente crear puntos de interrupción basados ​​en su propio contenido, no en dispositivos. Divídalos en un ancho lógico en lugar de un ancho aleatorio y manténgalos en un número manejable, para que la modificación sea simple y clara.

**Los puntos de interrupción de CSS** son útiles cuando desea actualizar estilos en función del tamaño de la pantalla. Por ejemplo, desde un dispositivo que mida 1200 px de ancho y más, use el `font-size: 20px;` , o bien use el `font-size: 16px;` .

Lo que hemos comenzado es desde más de 1200px, el ancho de una pantalla de laptop común. Es posible que también hayas notado que mencionamos 'mayor que', lo que significa que de alguna manera estamos usando algo como una afirmación ' **si-entonces** '.

Vamos a convertirlo en código CSS:

```css
.text1 { 
    font-size: 16px; 
 } 
 @media (min-width: 1200px) { 
    .text1 { 
        font-size: 20px; 
    } 
 } 
```

**Para nuestra conveniencia** , primero `.text1` el estilo básico `.text1` ... luego, especificaremos las reglas de `@media` .

**Consejo** : puede ver en un Marco de CSS común llamado 'Bootstrap', que han adoptado **'min-width' y arriba** en su Bootstrap v4.0, en comparación con su antiguo Bootstrap v3.0 usando **'max-width' y hacia abajo** . Esto es solo una **preferencia** , y no hay nada de malo en decir " _este_ tamaño y menos que" en comparación con " _este_ tamaño y más que".

Es perfectamente `@media (max-width) {}` usar `@media (max-width) {}` . Aquí hay un ejemplo:

```css
.text1 { 
    font-size: 20px; 
 } 
 @media (max-width: 1199px) { 
    font-size: 16px; 
 } 
```

```css
// Normal, basic styles 
 // that look great on small screens 
 // but not on bigger screens 
 body { 
  font-size: 16px; 
 } 
 
 // Define a new breakpoint, with a media query. 
 // In this case, for when the viewport's width 
 // is at least 512px wide. 
 @media (min-width: 512px) { 
    body { 
        font-size: 20px; 
    } 
 } 
```

Los puntos de interrupción que se basan en el contenido en lugar de en el dispositivo son menos complicados. Aquí hay un fragmento simple que se activa cuando el ancho del dispositivo es `code 700px` aproximadamente del tamaño de la pantalla de un teléfono inteligente

```css
@media only screen and (min-width: 700px) { 
  something { 
    something: something; 
  } 
 } 
```

También puede establecer un ancho mínimo y máximo, que le permita experimentar con diferentes rangos. Este dispara aproximadamente entre teléfonos inteligentes y tamaños de monitores y de escritorio más grandes

```css
@media only screen and (min-width: 700px) and (max-width: 1500px) { 
  something { 
    something: something; 
  } 
 } 
```

#### Más información:

*   [Puntos de ruptura de respuesta](https://getbootstrap.com/docs/4.1/layout/overview/#responsive-breakpoints)
*   [Artículo de freecodecamp.org sobre el uso de puntos de interrupción de CSS](https://medium.freecodecamp.org/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862)
*   [Consultas de medios CSS3](https://guide.freecodecamp.org/css/css3-media-queries)
*   [Definiendo Puntos de Interrupción](https://responsivedesign.is/strategy/page-layout/defining-breakpoints/)
*   [CSS-Tricks: consultas de media](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)
*   [w3schools: Puntos de interrupción de dispositivos típicos](https://www.w3schools.com/howto/howto_css_media_query_breakpoints.asp)