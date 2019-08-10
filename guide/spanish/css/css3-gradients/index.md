---
title: CSS3 Gradients
localeTitle: Gradientes CSS3
---
## Gradientes CSS3

Los gradientes CSS3 le permiten mostrar transiciones suaves entre dos o más colores especificados.

Antes, tenías que usar imágenes para estos efectos. Sin embargo, al usar gradientes de CSS3, puede reducir el tiempo de descarga y el uso del ancho de banda. Además, los elementos con degradados se ven mejor cuando se amplían, ya que el degradado es generado por el navegador.

CSS3 define dos tipos de gradientes:

*   Gradientes lineales (baja / arriba / izquierda / derecha / diagonalmente)
*   Gradientes radiales (definidos por su centro)

### Gradientes lineales CSS3

Para crear un degradado lineal, debe definir al menos dos paradas de color. Las paradas de color son los colores entre los que desea generar transiciones suaves. También puede establecer un punto de inicio y una dirección (o un ángulo) junto con el efecto de degradado.

#### Sintaxis
```
background: linear-gradient(direction, color-stop1, color-stop2, ...); 
```

##### Degradado lineal: de arriba a abajo (este es el valor predeterminado)

El siguiente ejemplo muestra un degradado lineal que comienza en la parte superior. Empieza en rojo, pasando a amarillo: ![gradiente lineal por defecto](https://cdn-media-1.freecodecamp.org/imgr/2uGfleD.jpg)

#### Ejemplo
```
<!DOCTYPE html> 
 <html> 
 <head> 
 <style> 
 #grad1 { 
    height: 200px; 
    background: red; /* For browsers that do not support gradients */ 
    background: -webkit-linear-gradient(red, green); /* For Safari 5.1 to 6.0 */ 
    background: -o-linear-gradient(red, green); /* For Opera 11.1 to 12.0 */ 
    background: -moz-linear-gradient(red, green); /* For Firefox 3.6 to 15 */ 
    background: linear-gradient(red, green); /* Standard syntax (must be last) */ 
 } 
 </style> 
 </head> 
 <body> 
 
 <h3>Linear Gradient - Top to Bottom</h3> 
 <p>This linear gradient starts at the top. It starts red, transitioning to yellow:</p> 
 
 <div id="grad1"></div> 
 
 <p><strong>Note:</strong> Internet Explorer 9 and earlier versions do not support gradients.</p> 
 
 </body> 
 </html> 
```

![gradiente lineal por defecto](https://cdn-media-1.freecodecamp.org/imgr/CvtXCMd.jpg)

##### Gradiente lineal - de izquierda a derecha

El siguiente ejemplo muestra un degradado lineal que comienza desde la izquierda. Empieza en rojo, pasando a amarillo: ![de izquierda a derecha](https://cdn-media-1.freecodecamp.org/imgr/e4dRvZR.jpg)

#### Ejemplo
```
<!DOCTYPE html> 
 <html> 
 <head> 
 <style> 
 #grad1 { 
    height: 200px; 
    background: red; /* For browsers that do not support gradients */ 
    background: -webkit-linear-gradient(left, red , green); /* For Safari 5.1 to 6.0 */ 
    background: -o-linear-gradient(right, red, green); /* For Opera 11.1 to 12.0 */ 
    background: -moz-linear-gradient(right, red, green); /* For Firefox 3.6 to 15 */ 
    background: linear-gradient(to right, red , green); /* Standard syntax (must be last) */ 
 } 
 </style> 
 </head> 
 <body> 
 
 <h3>Linear Gradient - Left to Right</h3> 
 <p>This linear gradient starts at the left. It starts red, transitioning to yellow:</p> 
 
 <div id="grad1"></div> 
 
 <p><strong>Note:</strong> Internet Explorer 9 and earlier versions do not support gradients.</p> 
 
 </body> 
 </html> 
```

![de izquierda a derecha](https://cdn-media-1.freecodecamp.org/imgr/k4FSyXz.jpg)

#### Degradado Lineal - Diagonal

Puede hacer un degradado en diagonal especificando las posiciones de inicio horizontales y verticales.

El siguiente ejemplo muestra un degradado lineal que comienza en la parte superior izquierda (y va hacia la parte inferior derecha). Empieza en rojo, pasando a amarillo:

![diagonal](https://cdn-media-1.freecodecamp.org/imgr/YvtbUBH.jpg)

#### Ejemplo
```
<!DOCTYPE html> 
 <html> 
 <head> 
 <style> 
 #grad1 { 
    height: 200px; 
    background: red; /* For browsers that do not support gradients */ 
    background: -webkit-linear-gradient(left top, red, green); /* For Safari 5.1 to 6.0 */ 
    background: -o-linear-gradient(bottom right, red, green); /* For Opera 11.1 to 12.0 */ 
    background: -moz-linear-gradient(bottom right, red, green); /* For Firefox 3.6 to 15 */ 
    background: linear-gradient(to bottom right, red, green); /* Standard syntax (must be last) */ 
 } 
 </style> 
 </head> 
 <body> 
 
 <h3>Linear Gradient - Diagonal</h3> 
 <p>This linear gradient starts at top left. It starts red, transitioning to yellow:</p> 
 
 <div id="grad1"></div> 
 
 <p><strong>Note:</strong> Internet Explorer 9 and earlier versions do not support gradients.</p> 
 
 </body> 
 </html> 
```

![diagonal-exp](https://cdn-media-1.freecodecamp.org/imgr/8gKRhAp.jpg)

#### Más información:

[Documentación de MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient) || [w3schools](https://www.w3schools.com/css/css3_gradients.asp)