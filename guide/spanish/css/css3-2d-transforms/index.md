---
title: CSS3 2d Transforms
localeTitle: CSS3 2d Transforms
---
## CSS3 2d Transforms

Las transformaciones de CSS3 le permiten traducir, rotar, escalar y sesgar elementos.

Una transformación es un efecto que permite que un elemento cambie de forma, tamaño y posición.

CSS3 soporta transformaciones 2D y 3D.

## Soporte del navegador para transformaciones 2D

Los números en la tabla especifican la primera versión del navegador que es totalmente compatible la propiedad.

Los números seguidos de -ms-, -webkit-, -moz-, o -o- especifican la primera versión que Trabajó con un prefijo.

| Propiedad | Cromo | IE | Firefox | Safari Ópera | --------------------------------------- | ---------------------- | ------------------ | ------------------- | -------------------- | -------------------------------------------- | | transformar 36.0 4.0 -webkit- | 10.0 9.0 -ms- | 16.0 3.5 -moz- | 9.0 3.2 -webkit- | 23.0 15.0 -webkit- 12.1 10.5 -o- | | origen transformado (sintaxis de dos valores) | 36.0 4.0 -webkit- | 10.0 9.0 -ms- | 16.0 3.5 -moz- | 9.0 3.2 -webkit- | 23.0 15.0 -webkit- 12.1 10.5 -o- |

## CSS3 transformadas 2D

Métodos:

*   `translate()`
*   `rotate()`
*   `scale()`
*   `skewX()`
*   `skewY()`
*   `matrix()`

## El método traducir ()

El método `translate()` mueve un elemento desde su posición actual (según a los parámetros dados para el eje X y el eje Y).

El siguiente ejemplo mueve el elemento `<div>` 50 píxeles a la derecha y 100 píxeles hacia abajo desde su posición actual:

### Ejemplo:

```css
div { 
  -ms-transform: translate(50px, 100px); /* IE 9 */ 
  -webkit-transform: translate(50px, 100px); /* Safari */ 
  transform: translate(50px, 100px); 
 } 
```

## El método rotate ()

El método rotate `rotate()` gira un elemento en sentido horario o antihorario de acuerdo a un grado dado.

El siguiente ejemplo rota el elemento `<div>` derecha con 20 grados:

### Ejemplo:

```css
div { 
  -ms-transform: rotate(20deg); /* IE 9 */ 
  -webkit-transform: rotate(20deg); /* Safari */ 
  transform: rotate(20deg); 
 } 
```

El uso de valores negativos girará el elemento en sentido contrario a las agujas del reloj.

El siguiente ejemplo rota el elemento `<div>` en sentido antihorario con 20 grados:

### Ejemplo:

```css
div { 
  -ms-transform: rotate(-20deg); /* IE 9 */ 
  -webkit-transform: rotate(-20deg); /* Safari */ 
  transform: rotate(-20deg); 
 } 
```

## El método de la escala ()

El método `scale()` aumenta o disminuye el tamaño de un elemento (de acuerdo con Los parámetros dados para el ancho y alto).

El siguiente ejemplo aumenta el elemento `<div>` para que sea dos veces su Ancho original, y tres veces su altura original:

### Ejemplo:

```css
div { 
  -ms-transform: scale(2, 3); /* IE 9 */ 
  -webkit-transform: scale(2, 3); /* Safari */ 
  transform: scale(2, 3); 
 } 
```

El siguiente ejemplo reduce el elemento `<div>` a ser la mitad de su original anchura y altura:

### Ejemplo:

```css
div { 
  -ms-transform: scale(0.5, 0.5); /* IE 9 */ 
  -webkit-transform: scale(0.5, 0.5); /* Safari */ 
  transform: scale(0.5, 0.5); 
 } 
```

## El método skewX ()

El método `skewX()` desvía un elemento a lo largo del eje X según el ángulo dado.

El siguiente ejemplo muestra el elemento `<div>` 20 grados a lo largo del eje X:

### Ejemplo:

```css
div { 
  -ms-transform: skewX(20deg); /* IE 9 */ 
  -webkit-transform: skewX(20deg); /* Safari */ 
  transform: skewX(20deg); 
 } 
```

## El método skewY ()

El método `skewY()` un elemento a lo largo del eje Y según el ángulo dado.

El siguiente ejemplo muestra el elemento `<div>` 20 grados a lo largo del eje Y:

### Ejemplo:

```css
div { 
  -ms-transform: skewY(20deg); /* IE 9 */ 
  -webkit-transform: skewY(20deg); /* Safari */ 
  transform: skewY(20deg); 
 } 
```

## El método de sesgo ()

El método `skew()` sesga un elemento a lo largo de los ejes X e Y según los ángulos dados.

El siguiente ejemplo muestra el elemento `<div>` 20 grados a lo largo del eje X, y 10 grados a lo largo del eje Y:

### Ejemplo:

```css
div { 
  -ms-transform: skew(20deg, 10deg); /* IE 9 */ 
  -webkit-transform: skew(20deg, 10deg); /* Safari */ 
  transform: skew(20deg, 10deg); 
 } 
```

Si no se especifica el segundo parámetro, tiene un valor cero. Así, los siguientes el ejemplo desvía el elemento `<div>` 20 grados a lo largo del eje X:

### Ejemplo:

```css
div { 
  -ms-transform: skew(20deg); /* IE 9 */ 
  -webkit-transform: skew(20deg); /* Safari */ 
  transform: skew(20deg); 
 } 
```

## El método de la matriz ()

El método `matrix()` combina todos los métodos de transformación 2D en uno.

El método matrix () toma seis parámetros, que contienen funciones matemáticas, que le permite rotar, escalar, mover (traducir) y sesgar elementos.

Los parámetros son los siguientes: matriz (scaleX (), skewY (), skewX (), scaleY (), translateX (), translateY ())

### Ejemplo:

```css
div { 
  -ms-transform: matrix(1, -0.3, 0, 1, 0, 0); /* IE 9 */ 
  -webkit-transform: matrix(1, -0.3, 0, 1, 0, 0); /* Safari */ 
  transform: matrix(1, -0.3, 0, 1, 0, 0); 
 } 
```

## Propiedades de la transformación CSS3

La siguiente tabla enumera todas las propiedades de transformación 2D:

| Propiedad | Descripción | | ---------------- | -------------------------------------------------- ------- | | transformar Aplica una transformación 2D o 3D a un elemento | | origen transformado | Le permite cambiar la posición de los elementos transformados |

## Métodos de transformación 2D

| Función | Descripción | | --------------------- | -------------------------------------------------- ----------------------- | | matriz (n, n, n, n, n, n) | Define una transformación 2D, utilizando una matriz de seis valores | | traducir (x, y) | Define una traducción 2D, moviendo el elemento a lo largo del eje X y el eje Y | | traducirX (n) | Define una traducción 2D, moviendo el elemento a lo largo del eje X | | traducirY (n) | Define una traducción 2D, moviendo el elemento a lo largo del eje Y | | escala (x, y) | Define una transformación de escala 2D, cambiando los elementos ancho y alto | | escalaX (n) | Define una transformación de escala 2D, cambiando el ancho del elemento | | escalaY (n) | Define una transformación de escala 2D, cambiando la altura del elemento | | girar (ángulo) | Define una rotación 2D, el ángulo se especifica en el parámetro | | sesgo (ángulo x, ángulo y) | Define una transformación de sesgo 2D a lo largo del eje X y el eje Y | | skewX (ángulo) | Define una transformación de sesgo 2D a lo largo del eje X | | skewY (ángulo) | Define una transformación de sesgo 2D a lo largo del eje Y |

## Más información:

*   https://css-tricks.com/almanac/properties/t/transform/
*   https://www.w3schools.com/css/css3\_2dtransforms.asp
*   https://developer.mozilla.org/en-US/docs/Web/CSS/transform