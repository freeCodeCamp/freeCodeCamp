---
title: Fonts
localeTitle: Fuentes
---
## Fuentes

Las propiedades de fuente CSS definen la familia de fuentes, el peso, el tamaño, la variante, la altura de la línea y el estilo de un texto.

### Familia tipográfica

La familia de fuentes de un texto se establece simplemente mediante el uso de la propiedad de `font-family` .

Funciona con un sistema _alternativo_ , si su navegador no admite la primera fuente, intenta con la siguiente y así sucesivamente. Si el nombre de la fuente es más de una palabra, debe estar entre comillas.

```css
p { 
    font-family: "Times New Roman", Times, serif; 
 } 
```

En el ejemplo anterior, "Times New Roman" es el de la fuente, mientras que "serif" es el . Los nombres genéricos se utilizan como alternativa. mecanismo para preservar el estilo si el nombre de la familia no está disponible. Un nombre genérico siempre debe ser el último elemento en la lista de nombres de familias de fuentes. Genérico los nombres de familia son serif, sans-serif, monoespacio, cursiva, fantasía, sistema-ui.

### Estilo de fuente

La propiedad de `font-style` se puede utilizar para especificar texto en cursiva.

Esta propiedad tiene 3 valores:

*   normal - el texto se muestra normalmente
*   cursiva - texto mostrado en _cursiva_
*   oblicuo - texto mostrado inclinado

```css
.normal { 
    font-style: normal; 
 } 
 
 .italic { 
    font-style: italic; 
 } 
 
 .oblique { 
    font-style: oblique; 
 } 
```

### Tamaño de fuente

La propiedad de `font-size` establece el tamaño del texto.

Hay diferentes tipos de valores de tamaño de fuente:

*   `px` (píxeles): el tamaño predeterminado del texto es de `16px`
*   `em` - `1em` = el tamaño de fuente actual, por lo que `1em` = `16px` (recomendado por el W3C)
*   `small` , `medium` , `large` - conocido como valores de tamaño absolutos
*   `%` - porcentajes

```css
.with-pixels { 
    font-size: 14px; 
 } 
 
 .with-ems { 
    font-size: 0.875em; 
 } 
 
 .with-absolute { 
    font-size: large; 
 } 
 
 .with-percentage { 
    font-size: 80%; 
 } 
```

### Peso de la fuente

La propiedad `font-weight` especifica el peso (o la negrita) de la fuente. Acepta palabras clave ( `bold` , `normal` , `bolder` , `lighter` ) o palabras clave numéricas ( `100` , `200` , `300` , `400` , etc.) `400` es lo mismo que `normal` .

```css
p { 
   font-weight: bold 
 } 
```

### Capacidad de respuesta de la fuente

El tamaño del texto se puede configurar con una unidad vw (ancho de la ventana gráfica). De esa manera, el tamaño del texto seguirá el tamaño de la ventana del navegador.

```html

<h1 style="font-size:10vw">Hello World</h1> 
```

`Viewport is the browser window size. 1vw = 1% of viewport width. If the viewport is 50cm wide, 1vw is 0.5cm.`

### Variante de fuente

La propiedad `font-variant` especifica si un texto debe mostrarse en letra minúscula (donde todas las letras en minúsculas se convierten en letras mayúsculas mientras aparecen en un tamaño de fuente más pequeño que las letras mayúsculas originales en el texto).

```css
p.small { 
  font-variant: small-caps; 
 } 
```

#### Más información:

*   [Escuelas W3 - Fuente CSS](https://www.w3schools.com/css/css_font.asp)
*   [MND - Fuente CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/font)
*   [CSSFontStack](https://www.cssfontstack.com/)