---
title: Box Model
localeTitle: Modelo de caja
---
## Modelo de caja

Comprender el modelo de caja CSS es crucial para poder diseñar correctamente una página web.

Cuando un navegador presenta (dibuja) una página web, cada elemento, por ejemplo, un trozo de texto o una imagen, se dibuja como un cuadro rectangular siguiendo las reglas del modelo de caja CSS.

En el centro de la caja se encuentra el contenido, que ocupa una cierta altura y anchura. Esta región es conocida como el **Área de Contenido** . El tamaño del área de contenido se puede determinar automáticamente, o puede establecer explícitamente el tamaño de altura y anchura. (ver nota más abajo sobre `box-sizing` )

![Imagen del área de contenido](https://raw.githubusercontent.com/johnkennedy9147/Resources/master/CSS%20Box%20Model%20Images/content%20area.jpg)

Alrededor del área de contenido, esta es una región conocida como **área de relleno** . El tamaño del relleno puede ser el mismo en todas partes (configurado con el `padding` ), o se puede configurar individualmente para los rellenos superior, derecho, inferior e izquierdo (con el `padding-top` , `padding-right` `padding-bottom` `padding-left` y el `padding-right` `padding-bottom` ) .

![Imagen del área de relleno](https://raw.githubusercontent.com/johnkennedy9147/Resources/master/CSS%20Box%20Model%20Images/padding%20area.jpg)

A continuación, hay una **zona de frontera** . Esto crea un borde alrededor del elemento y su relleno. Puede configurar el grosor ( `border-width` ), el color ( `border-color` ) y el estilo ( `border-style` ) del borde. Las opciones de estilo incluyen `none` (sin borde), `solid` , `dashed` , `dotted` y varios otros. Además, puede establecer los bordes en los 4 lados individualmente; por ejemplo, el borde `border-top-width` `border-top-color` `border-top-style` por su grosor, color y estilo. (Vea la nota a continuación sobre `box-sizing` ).

![Imagen del área fronteriza](https://raw.githubusercontent.com/johnkennedy9147/Resources/master/CSS%20Box%20Model%20Images/border%20area.jpg)

Finalmente, está el **área de margen** . Esto crea un espacio libre alrededor del elemento, el relleno y el borde. De nuevo, puede configurar individualmente los márgenes superior, derecho, inferior e izquierdo (con `margin-top` , `margin-right` , `margin-bottom` y `margin-left` ). Bajo ciertas circunstancias, se produce el colapso del margen y se pueden compartir los márgenes entre elementos adyacentes.

![Imagen del área de margen](https://raw.githubusercontent.com/johnkennedy9147/Resources/master/CSS%20Box%20Model%20Images/margin%20area2.jpg)

**propiedad de `box-sizing`** El valor predeterminado para esta propiedad es `content-box` . Si utiliza el valor predeterminado, el modelo de cuadro permitirá al autor especificar el tamaño del área de contenido. Sin embargo, es posible usarlos para especificar el tamaño del área del borde. Esto se hace cambiando la propiedad de `box-sizing` `border-box` . Esto a veces puede hacer que los diseños sean más fáciles. Puede establecer la propiedad de `box-sizing` por elemento como desee.

#### Más información:

[MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model)