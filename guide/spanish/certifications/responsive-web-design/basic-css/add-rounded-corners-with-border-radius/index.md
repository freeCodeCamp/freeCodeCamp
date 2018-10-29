---
title: Add Rounded Corners with border-radius
localeTitle: Añadir esquinas redondeadas con radio de borde
---
## Añadir esquinas redondeadas con radio de borde

A veces quieres tener esquinas redondeadas en lugar de cuadradas. En este caso, usamos la propiedad "border-radius" para determinar qué tan redondeados queremos que sean nuestros rincones.

Para ajustar la redondez de una esquina usa:

```css
.example { 
 border-radius: 5px; 
 } 
```

Cuanto mayor sea el número, más la vuelta de la esquina.

```css
.example { 
 border-radius: 20px; 
 } 
```

Usando la propiedad de radio de borde podemos redondear las esquinas de nuestro elemento, ya sea redondear un borde, una imagen de fondo o el color de relleno del propio elemento. ¡Solo notará las nuevas esquinas redondeadas si hay un cambio de color!

Si solo incluye un número, ese radio se aplicará a las cuatro esquinas. Si usa dos valores, el primero se aplica a las esquinas superior izquierda e inferior derecha, mientras que el segundo se aplica a la esquina superior derecha e inferior izquierda.

```css
.exampleTwoValues { 
 border-radius: 5px 10px; 
 } 
```

Si usa cuatro valores, los valores se aplican a la esquina superior izquierda, superior derecha, inferior derecha e inferior izquierda.

```css
.exampleFourValues { 
 border-radius: 5px 7px 10px 15px; 
 } 
```

Si usa tres valores, el primero se aplica a la parte superior izquierda, el segundo se aplica a la parte superior derecha Y la parte inferior izquierda, y el tercero se aplica a la parte inferior derecha.

```css
.exampleThreeValues { 
 border-radius: 5px 10px 15px; 
 } 

```