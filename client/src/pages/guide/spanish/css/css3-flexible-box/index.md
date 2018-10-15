---
title: CSS3 Flexible Box
localeTitle: Caja Flexible CSS3
---
## Caja Flexible CSS3

El modelo Flexbox proporciona una manera eficiente de diseñar, alinear y distribuir el espacio entre los elementos de su documento, incluso cuando la ventana gráfica y el tamaño de sus elementos son dinámicos o desconocidos.

La idea más importante detrás del modelo Flexbox es que el contenedor principal puede alterar el ancho / alto / orden de sus artículos para llenar mejor el espacio disponible. Un contenedor flexible expande los elementos para llenar el espacio libre disponible, o los reduce para evitar el desbordamiento. 1

#### Uso básico

Flexbox puede usarse para centrar cualquier cantidad de elementos dados dentro de un elemento. Un ejemplo básico de esto es el siguiente código:

`css .center-elements-inside { display: flex; flex-direction: row; justify-content: center; }`

Vamos a desglosar este ejemplo. Primero establecemos la propiedad de visualización en "flex" para poder aplicar nuestras propiedades de flexbox. A continuación declaramos la forma en que flexbox manejará nuestros elementos. Esto puede ser en una fila, o en una columna. Al configurarlo en fila alineará los elementos horizontales dentro del elemento. La columna los alineará verticalmente.

Ahora veamos brevemente "justificar el contenido". Esta propiedad declara cómo se distribuyen los elementos dentro del elemento padre. Elegimos el valor "centro". Esto significa que todos los elementos dentro de este elemento estarán centrados.

#### Más información:

Para obtener una comprensión completa de Flexbox, lea Cómo [entender Flexbox Todo lo que necesita saber](https://medium.freecodecamp.org/understanding-flexbox-everything-you-need-to-know-b4013d4dc9af) en la página de FreeCodeCamp Medium.

Para obtener una guía interactiva, consulte la [Guía definitiva de Flexbox: aprender a través de ejemplos](https://medium.freecodecamp.org/the-ultimate-guide-to-flexbox-learning-through-examples-8c90248d4676)

Ambos son grandes recursos de Ohans Emmanuel.

Otra gran guía visual en profundidad pero fácil de seguir se puede encontrar en [Guía para Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) mediante [trucos CSS](https://css-tricks.com)

### Fuentes

1.  [Coyier, Chris. "Una guía completa para Flexbox" CSS-Tricks. Última actualización el 28 de septiembre de 2017.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)