---
title: Point Size
localeTitle: Tamaño de punto
---
## Tamaño de punto

El tamaño en puntos es una forma de introducir la estandarización en la tipografía. El tamaño en puntos es la unidad de medida más pequeña.

En el tipo de metal, el tamaño de punto se refiere a la altura del cuerpo metálico sobre el que se moldea el carácter de una fuente. En los tipos de letra digitales, el cuerpo de metal se reemplaza por una caja invisible conocida como _em square_ . Cada personaje encaja dentro de esa casilla cuadrada o em. El **tamaño de em de una fuente es igual a su tamaño en puntos.**

```css
html{ 
  font-size:16px; 
 } 
 
 body{ 
  font-size:1em;  // 1em is equal to 16px 
 } 
```

El tamaño en puntos también se utiliza para medir el avance (altura de línea), la longitud de la línea y otros elementos, aparte del tamaño de fuente.  
En tipografías digitales, **un punto es igual a 1/72 de pulgada** . Doce puntos hacen una pica. Seis picas hacen una pulgada. Una forma común de representar picas y puntos es la siguiente:

*   1 pica = 1p
*   1 punto = 1 pts o p1
*   6 picas y 3 puntos = 6p3
*   Open Sans de 7 puntos con 9 puntos de ventaja = 7/9 Open Sans

El tamaño de punto óptimo para la impresión suele ser entre 10 y 12 puntos, mientras que para la web, el tamaño de punto óptimo es entre 15 y 25 puntos. En CSS, debe establecer el tamaño de fuente en ems o rems que los píxeles, ya que los primeros son de naturaleza escalable. Recientemente, se ha hablado mucho acerca de la tipografía de fluidos utilizando las unidades recién introducidas vw y vh. Aprenda más sobre esto aquí: [Tipografía fluida](https://www.smashingmagazine.com/2016/05/fluid-typography/)

Recuerde que las diferentes fuentes configuradas en el mismo tamaño de punto no parecerán ser del mismo tamaño debido a sus características individuales, a saber, altura x, modulación de trazo o contraste y ancho de caracteres.

#### Más información:

*   Tipografía práctica de [tamaño de punto](https://practicaltypography.com/point-size.html)
*   [Tamaño del punto](https://en.wikipedia.org/wiki/Point_(typography)) Wikipedia
*   [Pensando con el Tipo](http://amzn.to/2yDqGNR) Pensando con el Tipo