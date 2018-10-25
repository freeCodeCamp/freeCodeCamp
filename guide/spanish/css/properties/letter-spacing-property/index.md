---
title: Letter Spacing Property
localeTitle: Propiedad de espacio entre letras
---
## Propiedad de espacio entre letras

La propiedad de espacio entre letras ajusta el espacio entre todas las letras en un bloque de texto. También se conoce como "seguimiento" en términos de tipografía y en software con opciones avanzadas de configuración de tipo. La propiedad acepta valores de longitud `px` y `em` , incluidos valores negativos.

```css
.first-example { 
  letter-spacing: 3px; 
 } 
 .second-example { 
  letter-spacing: -1px; 
 } 
 .third-example { 
  letter-spacing: 0.5em; 
 } 
```

![resultado de CSS](https://github.com/kaithrendyle/guide-photos/blob/master/letter-spacing.png)

En general, es una buena práctica usar unidades relativas ( `em` ) porque el espaciado siempre será relativo al tamaño de fuente que haya declarado.

Es importante tener en cuenta la legibilidad al ajustar el espacio entre letras. Si las letras están demasiado juntas, pueden aparecer pequeñas y difíciles de leer. Por otro lado, si las letras están demasiado separadas, es posible que no se lean como una palabra, sino como letras individuales. Esto también podría afectar la forma en que los lectores de pantalla leen el texto en voz alta a las personas con baja visión.

En general, las letras minúsculas no suelen necesitar que el espacio entre las letras esté ajustado. Es posible que necesite ajustes cuando utilice secciones en mayúsculas si el espacio parece demasiado estrecho.

#### Más información: