---
title: Bar Graph Project
localeTitle: Proyecto de gráfico de barras
---
## Nuestro objetivo es aprender los fundamentos de los datos.

Visualización utilizando D3 a través de este proyecto.

![captura de pantalla 2016-05-17 a las 5 02 41 pm](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d46c5c1c76bd03b9e85d450da02695d3f07c75c.png)

## ¿Qué es D3.js?

Para aquellos que no están familiarizados con D3, D3.js es una biblioteca de JavaScript para manipular documentos basados ​​en datos. D3 le ayuda a dar vida a los datos utilizando HTML, SVG y CSS.

D3.js lo ayuda a adjuntar sus datos a elementos DOM (Modelo de Objeto de Documento). Luego puedes usar CSS3, HTML y / o SVG para mostrar estos datos. Finalmente, puede hacer que los datos sean interactivos mediante el uso de transformaciones y transiciones basadas en datos de D3.js.

## Explicación del proyecto:

### Guión:

Hay una clase de estudiantes en línea que interactúan con diferentes temas de la materia y dan una prueba sobre esos temas.

Hay 15 temas y en cada tema, tenemos un número de estudiantes que han realizado el cuestionario y han obtenido puntajes en tres categorías: Bajo, Medio y Alto

### Por ejemplo (Datos dados):

Tema: "1", bajo: 4, medio: 13, alto: 18

Tema: "2", bajo: 11, medio: 12, alto: 6

Tema: "3", bajo: 12, medio: 24, alto: 6 y así sucesivamente.

Tenga en cuenta que el Tema 1 tiene `4 + 13 + 8 = 35` estudiantes tomaron el cuestionario y el Tema 2 tiene `11+12+6 = 29` estudiantes y el Tema 3 tiene 42 estudiantes, y así sucesivamente.

Queremos hacer gráficos de barras y circulares interactivos. Por ejemplo, un puntero del mouse en una de las barras cambiará el gráfico circular en consecuencia y viceversa.

Con la combinación interactiva de gráfico de barras y gráfico circular, donde el gráfico de barras muestra la cantidad de estudiantes que han interactuado con un tema en particular (contestó el cuestionario) y un gráfico circular que muestra la clasificación del desempeño de los estudiantes en categorías de "bajo, medio, alto", podemos Visualice nuestros datos y obtenga más análisis de los mismos.

## Consejos y recursos:

### Instrucciones paso a paso:

[**Introducción a D3:**](https://d3js.org) donde puede obtener información sobre selecciones, propiedades dinámicas y transiciones en D3.js.

*   En la función javascript principal, escriba una función para manejar el histograma (gráfico de barras). El histograma mostrará el número total de estudiantes que han respondido la prueba (interactuado con ese tema) en 15 temas.
    
    *   (Aquí está el [**tutorial**](https://bost.ocks.org/mike/bar/) donde puede aprender cómo hacer un gráfico de barras utilizando la biblioteca de JavaScript D3. El primer tutorial enseña cómo hacer una versión básica en HTML, luego un gráfico más completo en Gráficos de vectores escalables (SVG), y por último transiciones animadas entre vistas.)
*   [Crear SVG para histograma](http://codepen.io/SundeepB/pen/CxveH)
    
*   Cree una función para el mapeo del eje xy agregue el eje x al histograma SVG
    
*   Cree una función para el mapeo del eje y, y cree barras para que el histograma contenga rectángulos y etiquetas de temas.
    
*   Crea los rectángulos y etiquetas de temas.
    
*   Crear una función para actualizar las barras. Esto será utilizado por el gráfico circular
    
*   Escribe una función para manejar pieChart. - El gráfico circular tendrá tres secciones: Baja, Media y Alta para representar los puntajes.
    
    *   [**Tutorial**](http://zeroviscosity.com/d3-js-step-by-step/step-1-a-basic-pie-chart) donde puede aprender cómo hacer un gráfico circular, luego transiciones entre vistas y cómo crear una leyenda.
*   Crear svg para el gráfico circular.
    
*   Crear una función para dibujar los arcos de las porciones de la tarta: las porciones de la tarta serán Baja, Media y Alta
    
*   Crea una función para calcular los ángulos de la porción circular.
    
*   Dibuja las rebanadas de pastel.
    
*   Crear una función para actualizar el gráfico circular. Esto será utilizado por histograma.
    
*   Calcular la frecuencia total por segmento para todos los temas.
    
*   Calcule la frecuencia total por estado para todos los segmentos.
    

## Resultado del análisis de datos y lo que podemos inferir de la visualización:

*   El gráfico circular inicial muestra la clasificación agregada de todos los puntajes de los estudiantes en todos los temas combinados en tres categorías "bajo, medio, alto"
    
*   Gráfico de barras inicial que muestra el número de estudiantes que han interactuado en ese tema en particular
    
*   Cualquier categoría seleccionada del gráfico circular actualizará el gráfico de barras, mostrando el número de estudiantes que han interactuado en diversos temas con puntaje perteneciente a esa categoría en particular.
    
*   Las capturas de pantalla a continuación muestran el movimiento del mouse en la sección "Media" y la sección "Alta" del gráfico circular, respectivamente, y para esa sección en particular, los gráficos de barras temáticos y el número de estudiantes.
    

![captura de pantalla 2016-05-17 a las 5 13 53 pm](//discourse-user-assets.s3.amazonaws.com/original/2X/1/106f06d412df6db5b4a421dc4769d22695cbec72.png)

![captura de pantalla 2016-05-17 a las 5 14 05 pm](//discourse-user-assets.s3.amazonaws.com/original/2X/7/7b23ebe89f74f11090984dbc4dc68212e3beceb3.png)

*   Cualquier barra de gráfico de barras seleccionada actualizará el gráfico circular que muestra la clasificación de todos los estudiantes con puntaje en ese tema en particular en tres categorías: Bajo, Medio y Alto. La captura de pantalla a continuación muestra el cursor del mouse sobre el Tema 2 y, para ese tema en particular, cuántos estudiantes están categorías baja, media y alta

![captura de pantalla 2016-05-17 a las 5 13 26 h.](//discourse-user-assets.s3.amazonaws.com/original/2X/7/7bd7c613bdb882f2b7c1f76f9778a1bda3e886dd.png)

Referencias: [1\] Ejemplos de \[https://d3js.org](https://d3js.org) [2\] D3.js Introducción - \[https://www.dashingd3js.com/why-build-with-d3js](https://www.dashingd3js.com/why-build-with-d3js)