---
title: Legal Color Values
localeTitle: Valores legales de color
---
## Valores legales de color

Los colores en CSS se pueden especificar en los siguientes formatos:

*   [Hexadecimal](#hexadecimal-colors)
*   [RGB](#rgb-colors)
*   [RGBA](#rgba-colors)
*   [HSL](#hsl-colors)
*   [HSLA](#hsla-colors)
*   [Nombres de colores predefinidos](#predefined-color-names)

### Colores hexadecimales

#### Soporte del navegador

Todos los principales navegadores admiten valores hexadecimalcolor.

#### Formato

Un valor hexadecimal se especifica como **#RRGGBB** , donde los enteros hexadecimales RR (rojo), GG (verde) y BB (azul) especifican los componentes del color. Todos los valores deben estar entre 00 y FF. Como su nombre indica, la codificación está en la base 16.

#### Ejemplo

Aquí hay diferentes colores hexagonales. Encuentre el ejemplo en vivo en https://jsfiddle.net/qg9revp4/2/.

```css
#divRed{ 
  color: #ff0000; /* red */ 
 } 
 
 #divGreen{ 
  color: #00ff00; /* green */ 
 } 
 
 #divBlue{ 
  color: #0000ff; /* blue */ 
 } 
 
 #divWhite{ 
  color: #ffffff; /* white */ 
  background: #000000; /* black background, so that the text is visible */ 
 } 
```

### Colores RGB

#### Soporte del navegador

Todos los principales navegadores soportan valores RGB.

#### Formato

Un valor RGB se especifica como **rgb (rojo, verde, azul)** . Cada parámetro (rojo, verde y azul) define la intensidad del color y puede ser un número entero entre 0 y 255.

#### Ejemplo

Aquí hay diferentes colores RGB. Encuentre el ejemplo en vivo en https://jsfiddle.net/vspepeth/1/.

```css
#divRed{ 
  color: rgb(255, 0, 0); /* red */ 
 } 
 
 #divGreen{ 
  color: rgb(0, 255, 0); /* green */ 
 } 
 
 #divBlue{ 
  color: rgb(0, 0, 255); /* blue */ 
 } 
 
 #divWhite{ 
  color: rgb(255, 255, 255); /* white */ 
  background: rgb(0, 0, 0); /* black background, so that the text is visible */ 
 } 
```

### Colores RGBA

#### Soporte del navegador

Los valores de color RGBA se admiten en IE9 +, Firefox 3+, Chrome, Safari y en Opera 10+.

#### Formato

Un valor RGBA se especifica como **rgb (rojo, verde, azul, alfa)** . Piense en ello como una extensión del formato RGB, con un canal alfa. El parámetro alfa es un número entre 0.0 (totalmente transparente) y 1.0 (totalmente opaco). Los otros parámetros (rojo, verde y azul) definen la intensidad de los colores y pueden ser un número entero entre 0 y 255.

#### Ejemplo

Aquí hay diferentes colores RGBA. Encuentre el ejemplo en vivo en https://jsfiddle.net/hq0ngwg2/1/.

```css
#divRed{ 
  color: rgba(255, 0, 0, 0.3); /* red with opacity */ 
 } 
 
 #divGreen{ 
  color: rgba(0, 255, 0, 0.7); /* green with opacity */ 
 } 
 
 #divBlue{ 
  color: rgba(0, 0, 255, 0.5); /* blue with opacity */ 
 } 
 
 #divWhite{ 
  color: rgba(255, 255, 255, 0.6); /* white with opacity */ 
  background: rgba(0, 0, 0, 0.8); /* black background with opacity */ 
 } 
```

### Colores HSL

#### Soporte del navegador

Los valores de color HSL se admiten en IE9 +, Firefox, Chrome, Safari y en Opera 10+.

#### Formato

HSL significa matiz, saturación y luminosidad. Se especifica como **hsl (tono, saturación, luminosidad)** .

*   **Tono** : Es un grado en la rueda de color (de 0 a 360). _0_ (o _360_ ) es rojo, _120_ es verde y _240_ es azul.
    
*   **Saturación** : es un valor porcentual. _0%_ significa un tono de gris y _100%_ es el color completo.
    
*   **Luminosidad** : También es un valor porcentual. _0%_ es negro y _100%_ es blanco.
    

#### Ejemplo

A continuación se muestran las tablas de [W3.org](https://www.w3.org/TR/css3-color/#hsl-color) . Cada tabla representa un tono. Se han elegido doce colores equidistantes (es decir, a intervalos de 30 °) del círculo de color. El eje X de cada tabla representa la saturación (100%, 75%, 50%, 25%, 0%). El eje Y representa la luminosidad. 50% es "normal".

![Tabla HSL](https://image.ibb.co/ngq686/hsl.png)

Encuentre el ejemplo en vivo en https://jsfiddle.net/g10zpL28/1/.

```css
#div1 { 
  background-color: hsl(240, 100%, 50%); /* blue */ 
 } 
 #div2 { 
  background-color: hsl(195, 53%, 79%); /* light blue */ 
 } 
 #div3 { 
  background-color: hsl(240, 100%, 25%); /* dark blue */ 
 } 
 #div4 { 
  background-color: hsl(187, 75%, 86%); /* pastel blue */ 
 } 
```

### Colores HSLA

#### Soporte del navegador

Los valores de color HSLA son compatibles con IE9 +, Firefox 3+, Chrome, Safari y en Opera 10+.

#### Formato

HSLA es sinónimo de tono, saturación, luminosidad y canal alfa. Se especifica como **hsla (matiz, saturación, luminosidad, alfa)** . El canal alfa especifica la opacidad del color.

*   **Tono** : Es un grado en la rueda de color (de 0 a 360). _0_ (o _360_ ) es rojo, _120_ es verde y _240_ es azul.
    
*   **Saturación** : es un valor porcentual. _0%_ significa un tono de gris y _100%_ es el color completo.
    
*   **Luminosidad** : También es un valor porcentual. _0%_ es negro y _100%_ es blanco.
    
*   **Canal alfa** : es un número entre 0.0 (totalmente transparente) y 1.0 (totalmente opaco).
    

#### Ejemplo

A continuación se muestran ejemplos de colores HSLA. Véalos en vivo en https://jsfiddle.net/2Lxscgfy/1/.

```css
#div1 { 
  background-color: hsla(240, 100%, 50%, 0.5); /* blue with transparency */ 
 } 
 #div2 { 
  background-color: hsla(195, 53%, 79%, 0.8); /* light blue with transparency */ 
 } 
 #div3 { 
  background-color: hsla(240, 100%, 25%, 0.3); /* dark blue with transparency */ 
 } 
 #div4 { 
  background-color: hsla(187, 75%, 86%, 1.0); /* pastel blue with transparency */ 
 } 
```

### Nombres de colores predefinidos

#### Soporte del navegador

147 nombres de colores están predefinidos en la especificación de colores CSS. Todos los navegadores modernos los soportan.

#### Ejemplo

A continuación se muestran algunos nombres de colores en uso. Vea el ejemplo en vivo en https://jsfiddle.net/rqygumpy/. Encuentra la lista completa en los [documentos de MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#Color_keywords) .

```css
#div1{ 
  color: BlueViolet; 
 } 
 
 #div2{ 
  color: RebeccaPurple; 
 } 
 
 #div3{ 
  color: RoyalBlue; 
 } 
 
 #div4{ 
  color: Salmon; 
 } 
```

#### Más información:

[MDN Web Docs en colores CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/color)