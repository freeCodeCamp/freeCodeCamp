---
title: Greedy Algorithms
localeTitle: Algoritmos codiciosos
---
## ¿Qué es un algoritmo codicioso?

Debe haber escuchado acerca de muchas técnicas de diseño algorítmico mientras analiza algunos de los artículos aquí. Algunos de ellos son :

*   Fuerza bruta
*   Divide y conquistaras
*   Programación codiciosa
*   Programación dinámica para nombrar unos pocos. En este artículo, aprenderá acerca de qué es un algoritmo codicioso y cómo puede usar esta técnica para resolver muchos problemas de programación que de otra manera no parecen ser triviales.

Imagina que vas de excursión y tu objetivo es alcanzar el pico más alto posible. Ya tiene el mapa antes de comenzar, pero hay miles de rutas posibles que se muestran en el mapa. Eres demasiado perezoso y simplemente no tienes tiempo para evaluar cada uno de ellos. ¡Atornille el mapa! Comenzaste a escalar con una estrategia simple: ser codicioso y miope. Simplemente toma los caminos que más se inclinan hacia arriba. Esto parece una buena estrategia para el senderismo. ¿Pero es siempre lo mejor?

Después de que el viaje terminó y todo tu cuerpo está adolorido y cansado, miras el mapa de senderismo por primera vez. ¡Oh Dios mío! Hay un río embarrado que debería haber cruzado, en lugar de seguir caminando hacia arriba. Esto significa que un algoritmo codicioso elige la mejor elección inmediata y nunca reconsidera sus elecciones. En términos de optimización de una solución, esto simplemente significa que la solución codiciosa intentará encontrar soluciones óptimas locales, que pueden ser muchas, y podría perderse una solución óptima global.

## Definicion formal

Suponga que tiene una función objetivo que necesita ser optimizada (maximizada o minimizada) en un punto dado. Un algoritmo codicioso realiza elecciones codiciosas en cada paso para garantizar que la función objetivo esté optimizada. El algoritmo Greedy solo tiene un disparo para calcular la solución óptima para que nunca retroceda e invierta la decisión.

### Los algoritmos codiciosos tienen algunas ventajas y desventajas:

*   Es bastante fácil crear un algoritmo codicioso (o incluso algoritmos codiciosos múltiples) para un problema. El análisis del tiempo de ejecución de los algoritmos codiciosos generalmente será mucho más fácil que para otras técnicas (como dividir y conquistar). Para la técnica Dividir y vencer, no está claro si la técnica es rápida o lenta. Esto se debe a que, en cada nivel de recursión, el tamaño de se vuelve más pequeño y el número de subproblemas aumenta.
    
*   La parte difícil es que para los algoritmos codiciosos tienes que trabajar mucho más para comprender los problemas de corrección. Incluso con el algoritmo correcto, es difícil demostrar por qué es correcto. Probar que un algoritmo codicioso es correcto es más un arte que una ciencia. Implica mucha creatividad. Por lo general, crear un algoritmo puede parecer trivial, pero probar que en realidad es correcto, es un problema completamente diferente.
    

## Problema de programación de intervalos

Vamos a sumergirnos en un problema interesante que puede encontrar en casi cualquier industria o cualquier tipo de vida. Algunas instancias del problema son las siguientes:

*   Te dan un conjunto de N horarios de conferencias para un solo día en una universidad. El horario para una conferencia específica es de la forma (s _tiempo, f_ tiempo) donde s _tiempo representa el tiempo de inicio para esa clase y de manera similar, el_ tiempo _f_ representa el tiempo de finalización. Dada una lista de N horarios de conferencias, debemos seleccionar el conjunto máximo de conferencias que se impartirán durante el día, de modo que **ninguna de las clases se superponga una con la otra, es decir, si la clase Li y Lj se incluyen en nuestra selección, la hora de inicio de j > = tiempo de finalización de i o viceversa** .
    
*   Su amigo está trabajando como consejero de campamento, y él está a cargo de organizar actividades para un grupo de campistas. Uno de sus planes es el siguiente ejercicio de mini triatlón: cada participante debe nadar 20 vueltas de una piscina, luego andar en bicicleta 10 millas y luego correr 3 millas.
    
*   El plan es enviar a los participantes de forma escalonada, a través de la siguiente regla: los participantes deben usar el grupo uno por uno. En otras palabras, el primer participante nada las 20 vueltas, sale y comienza a andar en bicicleta.
    
*   Tan pronto como esta primera persona sale de la piscina, un segundo participante comienza a nadar las 20 vueltas; tan pronto como él o ella sale y comienza a andar en bicicleta, un tercer participante comienza a nadar, y así sucesivamente.
    
*   Cada participante tiene un tiempo de natación proyectado, un tiempo de ciclismo proyectado y un tiempo de ejecución proyectado. Tu amigo quiere decidir un horario para el triatlón: un orden para secuenciar los inicios de los participantes.
    
*   Digamos que el tiempo de finalización de un programa es la hora más temprana en que todos los participantes terminarán con las tres patas del triatlón, asumiendo que las proyecciones de tiempo son precisas. ¿Cuál es la mejor orden para enviar gente, si uno quiere que toda la competencia termine lo antes posible? Más precisamente, proporcione un algoritmo eficiente que produzca un programa cuyo tiempo de finalización sea lo más pequeño posible
    

### El problema de la programación de conferencias

Echemos un vistazo a los diversos enfoques para resolver este problema.

1.  **Tiempo de inicio más temprano primero,** es decir, seleccione el intervalo que tenga el tiempo de inicio más temprano. Eche un vistazo al siguiente ejemplo que rompe esta solución. Esta solución falló porque podría haber un intervalo que se inicia muy temprano pero que es muy largo. Esto significa que la próxima estrategia que podríamos probar sería donde miremos a intervalos más pequeños primero. ![El tiempo de partida más temprano primero](https://algorithmsandme.files.wordpress.com/2015/03/f268b-jobs.png?w=840)
    
2.  **Intervalo más pequeño Primero,** es decir, terminas seleccionando las clases por orden de su intervalo general, que no es más que su `finish time - start time` . Una vez más, esta solución no es correcta. Mira el siguiente caso. ![Intervalo más corto primero](https://cdn-media-1.freecodecamp.org/imgr/4bz2N.png)
    

Puede ver claramente que la clase de intervalo más corto es la que está en el medio, pero esa no es la solución óptima aquí. Veamos otra solución para este problema, derivando perspectivas de esta solución.

3.  **Intervalo menos conflictivo Primero,** es decir, debe observar los intervalos que causan el menor número de conflictos. Una vez más, tenemos un ejemplo donde este enfoque no logra encontrar una solución óptima. ![Intervalo menos conflictivo primero](https://cdn-media-1.freecodecamp.org/imgr/5LZ9V.png)

El diagrama nos muestra que el intervalo menos conflictivo es el que está en el medio con solo 2 conflictos. Después de eso solo podemos elegir los dos intervalos al final con conflictos 3 cada uno. Pero la solución óptima es elegir los 4 intervalos en el nivel superior.

4.  **El tiempo de acabado más temprano primero** . Este es el enfoque que siempre nos da la solución más óptima para este problema. Derivamos muchas ideas de enfoques anteriores y finalmente encontramos este enfoque. Clasificamos los intervalos según el orden creciente de sus tiempos de finalización y luego comenzamos a seleccionar intervalos desde el principio. Mira el siguiente pseudo código para mayor claridad.
```
function interval_scheduling_problem(requests) 
    schedule \gets \{\} 
    while requests is not yet empty 
        choose a request i_r \in requests that has the lowest finishing time 
        schedule \gets schedule \cup \{i_r\} 
        delete all requests in requests that are not compatible with i_r 
    end 
    return schedule 
 end 
```

## ¿Cuándo utilizamos los algoritmos codiciosos?

Greedy Algorithms puede ayudarlo a encontrar soluciones a muchos problemas aparentemente difíciles. El único problema con ellos es que puede encontrar la solución correcta, pero es posible que no pueda verificar si es la correcta. Todos los problemas codiciosos comparten una propiedad común de que un óptimo local puede eventualmente llevar a un mínimo global sin reconsiderar el conjunto de opciones ya consideradas.

Los algoritmos codiciosos nos ayudan a resolver muchos tipos diferentes de problemas. Manténgase atento a los próximos tutoriales sobre cada uno de estos.

1.  Problema de camino más corto.
2.  Problema de árbol de expansión mínima en un gráfico.
3.  Problema de codificación Huffman.
4.  Problema de los centros k

#### Más información:

 [![Problemas codiciosos](http://img.youtube.com/vi/HzeK7g8cD0Y/0.jpg)](https://www.youtube.com/watch?v=HzeK7g8cD0Y) 

 [![Problemas codiciosos](http://img.youtube.com/vi/poWB2UCuozA/0.jpg)](https://www.youtube.com/watch?v=poWB2UCuozA)