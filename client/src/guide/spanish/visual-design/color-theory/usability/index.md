---
title: Color and Usability
localeTitle: Color y Usabilidad
---
## Color y Usabilidad

Al igual que las variaciones en la [representación del color mediante presentaciones visuales](/visual-design/color-theory/index.md) , los ojos humanos y el cerebro interpretan los colores de diversas maneras.

Aproximadamente una de cada veinte personas tiene ceguera al color. \[2\] ¡Eso es casi mil millones de personas! La ceguera al color se produce cuando una gama de colores diferentes se interpreta como tonos de un color. A veces una persona no sabe que experimenta ceguera al color, porque los colores "se ven normales" para ellos. Esto tiene serias implicaciones para contrastar los colores entre las letras y sus fondos, y para las alertas, donde el color encierra un contexto de importancia, por ejemplo. Incluso algo tan simple como transmitir 'detener' y 'ir' es problemático, ya que la forma más común de ceguera al color es donde rojo y verde aparecen iguales.

Más del uno por ciento de la población tiene [otros tipos de pérdida visual significativa (Wikipedia.org)](https://en.wikipedia.org/wiki/Visual_impairment) . Las pérdidas pueden incluir sensibilidad a demasiado o muy poco contraste, distorsiones y límites en el rango de claridad de visión (miopía o hipermetropía).

Las pantallas de computadora son capaces de mostrar contrastes que son aproximadamente el doble de contrastes disponibles en papel.

Aquí hay pautas para ayudar a enfrentar los desafíos de diseño de acomodar estas variaciones sin afectar la experiencia de los demás. Estas pautas también ayudan a que la [tecnología adaptativa (Wikipedia.org)](https://en.wikipedia.org/wiki/Assistive_technology#Visual_impairments) funcione de manera más efectiva.

### Definiciones

**brillo** Para determinar el brillo de las pautas, sume los valores de color RGB. Si una fuente tiene un color RGB (255,0,0), esto significa que tiene un 100% de rojo y un 0% de luz verde y azul. Su brillo es de 255 + 0 + 0 = 255. El brillo máximo es blanco con 255 + 255 + 255 = 765.

**contraste** Para determinar el contraste de las pautas, reste el _brillo_ entre dos colores.

### Pautas

1.  Evite exceder los contrastes de nivel de papel en el texto. Diferencie el brillo entre el texto y el fondo del texto al menos 300 si no 400 - un poco más para fuentes pequeñas, menos para fuentes más grandes. Si el color de la fuente es rojo, el valor RGB podría ser (255,0,0) es un brillo de 255 de 765. Si el fondo es amarillo, el valor RGB podría ser (255,255,0) = 510. La diferencia entre 510 y 255 es 255. El contraste de este ejemplo es demasiado bajo y nos lleva a la siguiente guía.
    
2.  Para los fines de verificar el contraste y adaptar la ceguera del color, suponga que los colores primarios rojo y verde son del mismo color. La forma más común de ceguera al color ve el rojo y el verde de manera similar. Esto significa que para la efectividad con una comunicación importante, considere que los colores Rojo RGB (255,0,0), Verde RGB (0,255,0) y "Oliva" \[1\] RGB (127,127,0) son esencialmente del mismo color con el mismo color. contraste. Para calcular el contraste, el RGB amarillo (255,255,0) tiene el doble de brillo que cualquier color primario. Los dos colores primarios todavía producen el doble del brillo de uno.
    

### Resumen

La buena noticia es que todavía hay mucha flexibilidad disponible para elegir una paleta de colores efectiva que sea aceptable para los lectores.

[Esta guía rápida de estilo ayudará a asegurar que su solicitud de extracción sea aceptada](https://github.com/freecodecamp/guides/blob/master/README.md) .

#### Más información:

1.  [Colores web (Wikipedia.org)](https://en.wikipedia.org/wiki/Web_colors#Web-safe_colors)
    
2.  [Ceguera al color (Wikipedia.org)](https://en.wikipedia.org/wiki/Color_blindness)