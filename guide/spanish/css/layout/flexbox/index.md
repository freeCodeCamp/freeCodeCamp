---
title: Flexbox
localeTitle: Flexbox
---
## Flexbox

Flexbox es una nueva forma de estructurar contenido en CSS3. Proporciona una manera maravillosa de crear sitios web receptivos que funcionan bien en diferentes tamaños de pantalla y contenido de pedidos.

Hay 3 pasos simples para usar flexbox.

1.  Convierta el contenedor principal en un contenedor flexible utilizando _display: flex;_ en la sección css
2.  Ajustar la disposición de diferentes contenedores utilizando _la dirección flexible._
3.  Ajuste los elementos individuales utilizando propiedades como justify-content, align-items, etc.

Flexbox Layout tiene como objetivo proporcionar una manera más eficiente de diseñar, alinear y distribuir el espacio entre los elementos en un contenedor, incluso cuando su tamaño es desconocido y / o dinámico (por lo tanto, la palabra "flex"). La idea principal detrás de la disposición flex es darle al contenedor la capacidad de alterar el ancho / alto (y el orden) de sus artículos para llenar mejor el espacio disponible. ![uso flexible](https://cdn.css-tricks.com/wp-content/uploads/2011/08/flexbox.png)

*   **eje principal** : el eje principal de un contenedor flexible es el eje principal a lo largo del cual se disponen los elementos flexibles. Cuidado, no es necesariamente horizontal; depende de la propiedad de dirección de flexión (ver más abajo).
*   **inicio principal | main-end** Los elementos flexibles se colocan dentro del contenedor comenzando desde main-start hasta el main-end.
:*   **tamaño principal** : el ancho o la altura de un elemento flexible, lo que esté en la dimensión principal, es el tamaño principal del elemento. La propiedad de tamaño principal del elemento flexible es la propiedad 'ancho' o 'altura', lo que esté en la dimensión principal.
*   **eje transversal** : el eje perpendicular al eje principal se denomina eje transversal. Su dirección depende de la dirección del eje principal.
*   **inicio cruzado cruce** : las líneas flexibles se llenan con elementos y se colocan en el contenedor comenzando en el lado de inicio cruzado del contenedor flexible y dirigiéndose hacia el lado de cruce.
*   **tamaño de la cruz** : el ancho o la altura de un elemento flexible, cualquiera que esté en la dimensión transversal, es el tamaño de la cruz del elemento. La propiedad de tamaño de cruz es cualquiera de 'ancho' o 'altura' que se encuentra en la dimensión transversal.

#### Más información:

[Este es un gran artículo](https://medium.freecodecamp.org/an-animated-guide-to-flexbox-d280cf6afc35) para leer y entender más sobre flexbox. Esta es una guía práctica altamente recomendada que ilustra las diferentes propiedades de flexión aplicadas al contenedor de flexión y a los elementos de flexión: [https://css-tricks.com/snippets/css/a-guide-to-flexbox/](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)