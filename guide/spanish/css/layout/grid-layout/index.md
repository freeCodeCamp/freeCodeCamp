---
title: Grid Layout
localeTitle: Diseño de cuadrícula
---
## Diseño de cuadrícula

CSS Grid Layout, conocido simplemente como Grid, es un esquema de diseño que es el más nuevo y más poderoso en CSS. Es [compatible con todos los navegadores principales](https://caniuse.com/#feat=css-grid) y proporciona una forma de colocar elementos en la página y moverlos.

Puede asignar automáticamente elementos a _áreas_ , ajustar su tamaño y cambiar su tamaño, encargarse de crear columnas y filas según el patrón que usted defina y realizar todos los cálculos utilizando la unidad `fr` recién introducida.

### ¿Por qué Grid?

*   Puede tener fácilmente una cuadrícula de 12 columnas con una línea de CSS. `grid-template-columns: repeat(12, 1fr)`
*   Grid te permite mover las cosas en cualquier dirección. A diferencia de Flex, donde puede mover elementos horizontalmente ( `flex-direction: row` ) o verticalmente ( `flex-direction: column` ), no ambos al mismo tiempo, Grid le permite mover cualquier _elemento de la cuadrícula_ a cualquier _área de cuadrícula_ predefinida en la página. Los elementos que muevas no tienen que ser adyacentes.
*   Con CSS Grid, puede **cambiar el orden de los elementos HTML utilizando solo CSS** . Mueva algo de arriba a derecha, mueva los elementos que estaban en el pie de página a la barra lateral, etc. En lugar de mover `<div>` de `<footer>` a `<aside>` en el HTML, puede cambiar su ubicación con `grid-area` de la `grid-area` en el Hoja de estilo CSS.

### Grid vs. Flex

*   Flex es unidimensional, ya sea horizontal o vertical, mientras que Grid es bidimensional, lo que significa que puede mover elementos tanto en planos horizontales como verticales
*   En Grid, aplicamos estilos de diseño al contenedor principal y no a los elementos. Por otro lado, Flex se dirige al elemento flex para establecer propiedades como `flex-basis` , `flex-grow` y `flex-shrink`
*   Grid y Flex no son mutuamente excluyentes. Puedes usar ambos en el mismo proyecto.

### Verificando la compatibilidad del navegador con `@supports`

Lo ideal es que cuando construyas un sitio, lo diseñes con Grid y utilices Flex como alternativa. Puede averiguar si su navegador admite cuadrícula con la regla `@support` CSS (consulta de características). Aquí hay un ejemplo:

```css
.container { 
  display: grid; /* display grid by default */ 
 } 
 
 @supports not (display: grid) { /* if grid is not supported by the browser */ 
  .container { 
    display: flex; /* display flex instead of grid */ 
  } 
 } 
```

### Empezando

Para convertir cualquier elemento en una cuadrícula, debe asignar su propiedad de `display` a la `grid` , así:

```css
.conatiner { 
  display: grid; 
 } 
```

Y eso es. Acabas de hacer de tu `.container` una grilla. Cada elemento dentro del `.container` se convierte automáticamente en un elemento de cuadrícula.

### Definiendo plantillas

Filas y columnas

```css
grid-template-columns: 1fr 1fr 1fr 1fr; 
 grid-template-rows: auto 300px; 
```

Áreas

```css
grid-template-areas: 
  "aaaa" 
  "bcde" 
  "bcde" 
  "ffff"; 
```

o

```css
grid-template-areas: 
  "header header header header" 
  "nav main main sidebar"; 
```

### Áreas de cuadrícula

Aquí hay un código de ejemplo sobre cómo definir y asignar áreas de cuadrícula

```css
.site { 
  display: grid; 
  grid-template-areas: /* applied to grid container */ 
    "head head" /* you're assigning cells to areas by giving the cells an area name */ 
    "nav  main" /* how many values kind of depends on how many cells you have in the grid */ 
    "nav  foot"; 
 } 
 
 .site > header { 
  grid-area: head; 
 } 
 
 .site > nav { 
  grid-area: nav; 
 } 
 
 .site > main { 
    grid-area: main; 
 } 
 
 .site > footer { 
    grid-area: foot; 
 } 
```

### La unidad de `fr`

Grid introduce una nueva unidad `fr` , que significa _fracción_ . Lo bueno de usar la unidad `fr` es que se encarga de los cálculos por ti. El uso de `fr` evita los problemas de margen y relleno. Con `%` y `em` etc. se convierte en una ecuación matemática cuando se calcula `grid-gap` . Si usó la unidad de `fr` , calculará automáticamente el tamaño de la columna y el de la canaleta y ajustará el tamaño de las columnas en consecuencia, además, tampoco habrá huecos de sangrado al final.

### Ejemplos

#### Cambio del orden de los elementos en función del tamaño de la pantalla.

Digamos que desea mover el pie de página al final en pantallas pequeñas y a la derecha en pantallas más grandes, y hay un montón de otros elementos HTML entre los dos.

La solución simple es cambiar las `grid-template-areas` la `grid-template-areas` según el tamaño de la pantalla. También puede **cambiar el número de columnas y filas según el tamaño de la pantalla** . Esta es una alternativa mucho más limpia y simple al sistema Grid de Bootstrap ( `col-xs-8 col-sm-6 col-md-4 col-lg-3` ).

```css
.site { 
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  grid-template-areas: 
    "title title" 
    "main header" 
    "main sidebar" 
 } 
 
 @media screen and (min-width: 34em) { /* If the screen is big enough, use a different template for grid areas */ 
  .site { 
    grid-template-columns: 2fr 1fr 1fr; 
    grid-template-areas: 
      "title title title" 
      "main header header" 
      "main sidebar footer" 
  } 
 } 
```

Vea la [Cuadrícula de](https://codepen.io/aamnah/pen/RLVVoE/) la pluma [CSS por ejemplo - 2 (áreas de cuadrícula + separación de cuadrícula)](https://codepen.io/aamnah/pen/RLVVoE/) por Aamnah Akram ( [@aamnah](https://codepen.io/aamnah) ) en [CodePen](https://codepen.io) .

#### Más información:

*   [CSS Grid Palyground por Mozilla](https://mozilladevelopers.github.io/playground/) Gran punto de partida si eres nuevo en CSS Grids. Tiene elementos visuales para ayudarte a entender la terminología fácilmente.
*   [YouTube: Morten Rand-Hendriksen: CSS Grid lo cambia todo (Acerca de los diseños web)](https://www.youtube.com/watch?v=txZq7Laz7_4) Esta presentación lo convencerá en menos de una hora por qué CSS Grids es genial y por qué / cómo debe usarlos
*   [Videos: Serie de videos Learn Grid Layout por Rachel Andrew](https://gridbyexample.com/video/) Rachel Andrew es considerada una experta en el tema. Los títulos de los videos pueden parecer extraños y abrumadores, pero el contenido es corto y al punto
*   [Libro: Prepárese para el diseño de cuadrícula de CSS por Rachel Andrew](https://abookapart.com/products/get-ready-for-css-grid-layout)