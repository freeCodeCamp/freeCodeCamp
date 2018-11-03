---
title: Algorithm Performance
localeTitle: Rendimiento del algoritmo
---
En matemáticas, la notación de gran O es un simbolismo utilizado para describir y comparar el _comportamiento limitante_ de una función.  
El comportamiento limitante de una función es cómo la función actúa cuando tiende hacia un valor particular y, en notación de gran O, es generalmente como tiende hacia el infinito.  
En resumen, la notación de gran O se usa para describir el crecimiento o la disminución de una función, generalmente con respecto a otra función.

en el diseño de algoritmos usualmente usamos la notación de gran O porque podemos ver qué tan bueno o malo funcionará un algoritmo en el peor modo. pero tenga en cuenta que no siempre es así porque el peor de los casos puede ser súper raro y en esos casos calculamos el caso promedio. Por ahora, no sea la notación big O de disscus.

En matemáticas, la notación de gran O es un simbolismo utilizado para describir y comparar el _comportamiento limitante_ de una función.

El comportamiento limitante de una función es cómo actúa la función a medida que evoluciona hacia un valor particular y, en notación de gran O, es usualmente como tendencia hacia el infinito.

En resumen, la notación de gran O se usa para describir el crecimiento o la disminución de una función, generalmente con respecto a otra función.

NOTA: x ^ 2 es equivalente a x \* x o 'x cuadrado'\]

Por ejemplo, decimos que x = O (x ^ 2) para todo x> 1 o, en otras palabras, x ^ 2 es un límite superior en x y, por lo tanto, crece más rápido.  
El símbolo de una reclamación como x = O (x ^ 2) para todo x> _n_ se puede sustituir con x <= x ^ 2 para todo x> _n_ donde _n_ es el número mínimo que satisface la reclamación, en este caso 1.

Efectivamente, decimos que una función f (x) que es O (g (x)) crece más lentamente que g (x).

Comparativamente, en ciencias de la computación y desarrollo de software podemos usar la notación de gran O para describir la eficiencia de los algoritmos a través de su complejidad de tiempo y espacio.

**La complejidad espacial** de un algoritmo se refiere a su huella de memoria con respecto al tamaño de entrada.

Específicamente, cuando se usa la notación de gran O, estamos describiendo la eficiencia del algoritmo con respecto a una entrada: _n_ , generalmente cuando _n se_ acerca al infinito.  
Al examinar algoritmos, generalmente queremos una menor complejidad de tiempo y espacio. La complejidad del tiempo de o (1) es indicativa de tiempo constante.

Mediante la comparación y el análisis de algoritmos podemos crear aplicaciones más eficientes.

Para el rendimiento del algoritmo tenemos dos factores principales:

*   **Tiempo** : Necesitamos saber cuánto tiempo lleva la ejecución de un algoritmo para nuestros datos y cómo crecerá según el tamaño de los datos (o en algunos casos, otros factores como el número de dígitos, etc.).
    
*   **Espacio** : nuestra memoria está limitada, por lo que tenemos que saber cuánto espacio libre necesitamos para este algoritmo y, al igual que el tiempo, necesitamos poder rastrear su crecimiento.
    

Las siguientes 3 notaciones se utilizan principalmente para representar la complejidad del tiempo de los algoritmos:

1.  **Θ Notación** : la notación theta limita las funciones desde arriba y abajo, por lo que define el comportamiento exacto. podemos decir que tenemos una notación theta cuando el peor y el mejor caso son los mismos.
    
    > Θ (g (n)) = {f (n): existen constantes positivas c1, c2 y n0 tales que 0 <= c1 _g (n) <= f (n) <= c2_ g (n) para todo n> = n0}
    
2.  **Notación Big O** : la **notación** Big O define un límite superior de un algoritmo. Por ejemplo, la clasificación por inserción requiere tiempo lineal en el mejor de los casos y el tiempo cuadrático en el peor de los casos. Podemos decir con seguridad que la complejidad temporal de la ordenación de inserción es _O_ ( _n ^ 2_ ).
    
    > O (g (n)) = {f (n): existen constantes positivas c y n0 tales que 0 <= f (n) <= cg (n) para todos n> = n0}
    
3.  **Notación Ω** : la notación ation proporciona un límite inferior al algoritmo. Muestra la respuesta más rápida posible para ese algoritmo. > Ω (g (n)) = {f (n): existen constantes positivas c y n0 tales que 0 <= cg (n) <= f (n) para todos n> = n0}.
    

## Ejemplos

Como ejemplo, podemos examinar la complejidad del tiempo del algoritmo [\[de clasificación de burbuja\]](https://github.com/FreeCodeCamp/wiki/blob/master/Algorithms-Bubble-Sort.md#algorithm-bubble-sort) y expresarlo utilizando la notación O grande.

#### Ordenamiento de burbuja:

```javascript
    // Function to implement bubble sort 
    void bubble_sort(int array<a href='http://bigocheatsheet.com/' target='_blank' rel='nofollow'>], int n) 
    { 
        // Here n is the number of elements in array 
        int temp; 
        for(int i = 0; i < n-1; i++) 
        { 
            // Last i elements are already in place 
            for(int j = 0; j < ni-1; j++) 
            { 
                if (array[j] > array[j+1]) 
                { 
                    // swap elements at index j and j+1 
                    temp = array[j]; 
                    array[j] = array[j+1]; 
                    array[j+1] = temp; 
                } 
            } 
        } 
    } 
```

Al observar este código, podemos ver que en el mejor de los casos en que la matriz ya está ordenada, el programa solo realizará _n_ comparaciones ya que no se producirán intercambios.  
Por lo tanto, podemos decir que la mejor complejidad de tiempo de caso de la clasificación de burbuja es O ( _n_ ).

Al examinar el peor de los casos en que la matriz está en orden inverso, la primera iteración hará _n_ comparaciones, mientras que la siguiente tendrá que hacer _n_ - 1 comparaciones y así sucesivamente hasta que solo se haga 1 comparación.  
La notación big-O para este caso es, por lo tanto, _n_ \* \[( _n_ - 1) / 2\] que = 0.5 _n_ ^ 2 - 0.5 _n_ = O ( _n_ ^ 2) ya que el término _n_ ^ 2 domina la función que nos permite Ignora el otro término en la función.

Podemos confirmar este análisis utilizando \[esta útil hoja de trucos de gran O que presenta la complejidad del gran O de muchas de las estructuras de datos y algoritmos de uso común.

Es muy evidente que, si bien para casos de uso pequeños esta complejidad puede ser correcta, en una escala a gran escala, la clasificación no es una buena solución para la clasificación.  
Este es el poder de la notación de gran O: permite a los desarrolladores ver fácilmente los posibles cuellos de botella de su aplicación y tomar medidas para hacerlos más escalables.

Para obtener más información sobre por qué es importante el análisis de notación y algoritmo de gran O, visite este [desafío de video](https://www.freecodecamp.com/videos/big-o-notation-what-it-is-and-why-you-should-care) .