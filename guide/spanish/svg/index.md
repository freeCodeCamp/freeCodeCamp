---
title: SVG
localeTitle: SVG
---
## SVG

SVG o gráficos vectoriales escalables es un estándar web para definir gráficos basados ​​en vectores en páginas web. Basado en XML, el estándar SVG proporciona un marcado para describir rutas, formas y texto dentro de una ventana gráfica. El marcado se puede incrustar directamente en HTML para mostrarlo o guardarlo en un archivo `.svg` e insertarlo como cualquier otra imagen. Puede escribir SVG a mano, pero los gráficos más complicados se pueden diseñar en editores de gráficos vectoriales como Illustrator o InkScape y exportarlos a archivos o códigos SVG.

## Fundamentos de SVG

Los desarrolladores inician un gráfico SVG con la etiqueta `<svg>` y el espacio de nombres XML, así:

```svg
<svg xmlns="http://www.w3.org/2000/svg" version="1.1"> 
 
 </svg> 
```

La muestra también incluye un atributo de `version` . El atributo de `version` es opcional, pero se recomienda para quejas con especificaciones XML.

Esta muestra no mostrará nada, simplemente estableció una ventana gráfica. Puede agregar atributos de `height` y `width` para establecer un tamaño de visualización para la ventana gráfica, lo que básicamente establece un lienzo para que trabaje.

Con una ventana gráfica en su lugar puede agregar gráficos básicos, texto y elementos de ruta.

```svg
<svg 
     version="1.1" 
     width="100%" 
     viewbox="0 0 600 300" 
     xmlns="http://www.w3.org/2000/svg"> 
  <rect x="10" y="10" width="100" height="100" fill="#f7b2c1" /> 
  <circle cx="240" cy="60" r="50" fill="#c1b2f7" stroke="#b2c1f7" stroke-width="15"/> 
  <text x="450" y="70" font-size="20" text-anchor="middle">SVG Text is browser readable!</text> 
  <g stroke="#b2c1f7"> <!-- g is for group --> 
    <path stroke-width="2" d="M10 170 l590 0" /> 
    <path stroke-width="4" d="M10 190 l590 0" /> 
    <path stroke-width="6" d="M10 210 l590 0" /> 
  </g> 
 </svg> 
```

Puedes ver la salida y jugar con el código en [este codepen](https://codepen.io/SgiobairOg/pen/OxbNpW) .

En la etiqueta `svg` apertura, agregamos un atributo de ancho para establecer el ancho de la ventana gráfica al 100% del ancho del contenedor, puede usar porcentajes o anchos de píxeles. La etiqueta de apertura svg también tiene el atributo `viewbox` que define una ventana a través de la cual se ven elementos de su svg, en este caso, el cuadro de visualización se extiende desde (0,0) a (600,300). En el espacio SVG, el eje X comienza con cero a la izquierda y aumenta a la derecha; el eje Y comienza con cero en la parte superior y aumenta hacia la parte inferior.

La primera etiqueta nueva es la etiqueta `<rect />` que define un rectángulo en la ventana gráfica SVG. En este caso definimos un cuadrado que es de 10 unidades desde la parte superior e izquierda y 100 unidades de alto y ancho. El atributo de `fill` establece el color de relleno para la forma.

A continuación definimos un círculo u óvalo con la etiqueta `<circle />` . La muestra define un círculo centrado en (240,60) con un radio de 50 unidades. Los `stroke` y `stroke-width` atributos establecer un color de accidente cerebrovascular y un tamaño para el accidente cerebrovascular.

Puede agregar texto al gráfico con la etiqueta de `text` . El texto de muestra está anclado desde la mitad del texto hasta un punto en (450, 70) y tiene un tamaño de fuente de 20 unidades. Lo bueno del texto en SVG es que se escalará con el resto de su gráfico, pero aún es legible por el navegador y los robots web.

Cuando desee aplicar los mismos atributos o estilos CSS a varios elementos SVG, puede agruparlos con la etiqueta `<g>` . Los atributos asignados a la etiqueta `<g>` , como el atributo de `stroke` en el ejemplo, se aplicarán a todos los elementos dentro del grupo. En este caso tres elementos `<path />` .

El elemento `<path />` define una ruta vectorial en la ventana gráfica. La ruta está definida por el atributo `d` . En el primer ejemplo, la definición lee 'mover a la coordenada absoluta (10, 170) _y_ dibujar una línea a las coordenadas relativas 590 en la dirección X y 0 en la dirección Y.

Los siguientes comandos se pueden utilizar para crear su ruta:

M = mover a L = línea a H = línea horizontal a V = línea vertical a Z = cerrar camino C = (curva cúbica) curva a S = curva suave a Q = curva bezier cuadrática a T = curva bezier cuadrática suave a A = arco

### El elemento lienzo

Los gráficos en lienzo se pueden dibujar en una

elemento. Puede asignar tales atributos de ancho y alto de un elemento para determinar su tamaño en píxeles. Un nuevo lienzo está vacío, lo que significa que es completamente transparente y se muestra como un espacio vacío en el documento. los

la etiqueta está diseñada para admitir diferentes estilos de dibujo. Para obtener acceso a una interfaz de dibujo real, primero debemos crear un contexto, que es un objeto cuyos métodos proporcionan la interfaz de dibujo. Actualmente hay dos estilos de dibujo ampliamente compatibles: "2d" para gráficos bidimensionales y "webgl" para gráficos tridimensionales a través de la interfaz OpenGL.

Se crea un contexto a través del método getContext en el

elemento.
```
<p > Before canvas . </p > 
 < canvas width ="120" height ="60" > </ canvas > 
 <p > After canvas . </p > 
 < script > 
 var canvas = document . querySelector (" canvas ") ; 
 var context = canvas . getContext ("2 d ") ; 
 context . fillStyle = " red "; 
 context . fillRect (10 , 10 , 100 , 50) ; 
 </ script > 
```

![](http://www.crwflags.com/fotw/images/s/sly@stt.gif)

Después de crear el objeto de contexto, el ejemplo dibuja un rectángulo rojo 100 píxeles de ancho y 50 píxeles de alto, con su esquina superior izquierda en las coordenadas (10,10).

### Dibujar un gráfico circular

La variable de resultados contiene una matriz de objetos que representan el respuestas de la encuesta.
```
var results = [ 
 { name : " Satisfied " , count : 1043 , color : " lightblue "} , 
 { name : " Neutral " , count : 563 , color : " lightgreen "} , 
 { name : " Unsatisfied " , count : 510 , color : " pink "} , 
 { name : " No comment " , count : 175 , color : " silver "} 
 ]; 
```

Para dibujar un gráfico circular, dibujamos una serie de sectores, cada uno compuesto por un arco y un par de líneas hacia el centro de ese arco. Podemos calcular el ángulo que toma cada arco dividiendo un círculo completo (2 π) por el número total de respuestas y luego multiplicando ese número (el ángulo por respuesta) por el número de personas que eligieron una opción determinada.
```
< canvas width ="200" height ="200" > </ canvas > 
 < script > 
 var cx = document . querySelector (" canvas ") . getContext ("2 d ") ; 
 var total = results . reduce ( function ( sum , choice ) { 
 return sum + choice . count ; 
 } , 0) ; 
 
 // Start at the top 
 
 var currentAngle = -0.5 * Math . PI ; 
 results . forEach ( function ( result ) { 
 var sliceAngle = ( result . count / total ) * 2 * Math . PI ; 
 cx . beginPath () ; 
 // center =100 ,100 , radius =100 
 // from current angle , clockwise by slice ' s angle 
 cx . arc (100 , 100 , 100 , 
 currentAngle , currentAngle + sliceAngle ); 
 currentAngle += sliceAngle ; 
 cx . lineTo (100 , 100) ; 
 cx . fillStyle = result . color ; 
 cx . fill () ; 
 }) ; 
 </ script > 
```

Esto dibuja el siguiente cuadro: ![](https://pbs.twimg.com/media/CTDvkA8UwAAdJg5.png)

### Soporte del navegador

[El soporte del navegador para SVG](https://caniuse.com/#feat=svg) está disponible en todos los navegadores modernos. Hay algunos problemas con la escala en IE 9 a IE 11, sin embargo, se pueden superar con el uso del `width` , la `height` , el `viewbox` y el CSS.

## Editores

*   [Vectr](https://vectr.com) : herramienta web y de escritorio para crear y editar gráficos SVG de forma gratuita

## Herramientas para crear SVG

Hay pocas herramientas disponibles para crear SVG en forma de programa de dibujo.

*   [Inkscape](https://www.inkscape.org/) : es una herramienta de código abierto para el dibujo vectorial de vanguardia con una interfaz gráfica fácil de usar.
*   [Adobe Illustrator](https://www.adobe.com/products/illustrator/) : Adobe Illustrator es una herramienta comercial para imágenes vectoriales.

Para obtener más herramientas, consulte la [lista de herramientas W3C que admite SVG](https://https://www.w3.org/Graphics/SVG/WG/wiki/Implementations)

## Por qué deberías usar SVGs

Como formato de imagen vectorial, le permite cambiar el tamaño de una imagen sin ninguna pérdida de calidad y un peso particularmente ligero. Como formato XML, le permite beneficiarse de la potencia total de JavaScript y especialmente de CSS.

## Recursos

*   [W3C, gráficos vectoriales escalables (SVG) 1.1 (Segunda edición)](https://www.w3.org/TR/SVG/)
*   [Red de desarrolladores de Mozilla, SVG](https://developer.mozilla.org/en-US/docs/Web/SVG)