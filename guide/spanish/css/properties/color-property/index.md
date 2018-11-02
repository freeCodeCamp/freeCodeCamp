---
title: Color Property
localeTitle: Propiedad de color
---
## Propiedad de color CSS

Puede utilizar la propiedad de `color` para establecer el color del texto en un elemento.

Puede utilizar varios métodos para declarar un color como:

*   Por nombre (Nota: esto solo funciona con ciertos colores)

```css
h1{ 
    color: blue; 
 } 
```

*   Hexadecimal (especificado como #rrggbb)

```css
h1{ 
    color:  #0000ff; 
 } 
```

*   RGB (especificado como rgb (r, g, b))

```css
h1{ 
    color: rgb(0, 0, 255); 
 } 
```

*   RGBA (especificado como rgba (r, g, b, alfa))

```css
h1{ 
    color: rgba(0, 0, 255, 0.5); 
 } 
```

*   HSL (Tono, luminosidad, saturación)

```css
h1{ 
    color: hsl(240, 100%, 50%); 
 } 
```

*   HSLA (Tono, luminosidad, saturación, alfa)

```css
h1{ 
    color: hsl(240, 100%, 50%, 0.5); 
 } 
```

## Propiedades de color CSS explicadas

*   Colores por nombre:
    
    *   Estos son bastante explicativos. Cada color está representado por su nombre.
*   Hexadecimal
    
    *   Estos colores están representados por tripletes hexagonales.
    *   Un triplete hexadecimal es un número hexadecimal de tres dígitos y tres bytes.
    *   Cada uno de tres bytes representa un color #RRGGBB (rojo, verde, azul).
    *   El color hexadecimal abreviado se representa mediante un número hexadecimal de tres dígitos #RGB (rojo, verde, azul).
*   Colores RGB y RGBA:
    
    *   Los colores RGB son colores de 24 bits (3 bytes) representados por 3 números en el rango de 0-255. (por ejemplo, rgb (255,255,128)).
    *   Los colores RGBA son colores de 32 bits (4 bytes) representados por 3 números en el rango de 0-255 y un valor alfa que controla la opacidad. (por ejemplo, rgb (255,255,128, 0,3)).
*   HSL & HSLA Colores:
    
    *   El color HSL se representa mediante tres valores (HUE, saturación, luminosidad).
    *   El color HSLA está representado por cuatro valores (HUE, Saturation, Lightness, Alpha). Alfa controla la opacidad.

#### Más información

*   W3 Schools sitio sobre cómo dar formato al [texto](https://www.w3schools.com/css/css_text.asp) .
*   W3 Escuelas sitio en [colores](https://www.w3schools.com/colors/default.asp) .
*   Propiedad de color en [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/color) .
*   Documentación en [w3.org](https://www.w3.org/wiki/CSS/Properties/color) .