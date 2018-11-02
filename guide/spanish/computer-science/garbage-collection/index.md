---
title: Garbage Collection
localeTitle: Recolección de basura
---
## Recolección de basura

#### ¿Qué es la recolección de basura?

En términos generales, la recolección de basura (GC) no es más que recopilar o recuperar la memoria asignada a los objetos, que no está en uso en ningún momento en ninguna parte de nuestro programa. Una breve descripción de la siguiente manera.

La recolección de elementos no utilizados es el proceso en el que los programas intentan liberar espacio de memoria que ya no utilizan los objetos. La recolección de basura se implementa de manera diferente para cada idioma. La mayoría de los lenguajes de programación de alto nivel tienen algún tipo de recolección de basura creada. Los lenguajes de programación de bajo nivel pueden agregar recolección de basura a través de las bibliotecas.

Como se dijo anteriormente, cada lenguaje de programación tiene su propia forma de GC. En la programación en C, los desarrolladores deben ocuparse de la asignación de memoria y la desasignación utilizando las funciones malloc () y dealloc (). Pero, en el caso de los desarrolladores de C #, no hay necesidad de cuidar de GC y tampoco se recomienda.

\#### ¿Cómo está sucediendo la asignación de memoria? En C #, la asignación de memoria de objetos se realiza en el montón administrado. que cuida por CLR (Common Language Runtime). La asignación de memoria para el montón se realiza a través de win32 dll en el sistema operativo como en la C. Pero, los objetos In C se colocan en la memoria donde el espacio libre se adapta al tamaño del objeto. Y, el mapeo de memoria está basado en conceptos de listas enlazadas. En C #, la asignación de memoria para el almacenamiento dinámico se realiza de manera lineal. como uno tras otro.

Cada vez que se crea un nuevo objeto. Se asigna una memoria en el montón y el puntero se mueve a la siguiente dirección de memoria. La asignación de memoria en C # es más rápida que la C. Ya que, en C, la memoria necesita buscar y asignar el objeto. así que tomará un poco más de tiempo que C #.

\#### Generaciones en C # GC? En la programación .net, heap tiene tres generaciones llamadas generación 0, 1, 2. La generación 0 se llena primero cada vez que se crea un nuevo objeto. El recolector de basura se ejecuta cuando la Generación 0 se llena. los objetos recién creados se colocan en la Generación 0. Al realizar la recolección de basura, todos los objetos no deseados se destruyen, la memoria se libera y se compacta. GC se encarga de señalar los punteros de la memoria liberada una vez que sucede GC.

Las generaciones 1 y 2 tienen un objeto que tiene la vida útil más larga. GC en las generaciones 1 y 2 no ocurrirá hasta que las generaciones 0 tengan memoria suficiente para asignar.

No es aconsejable invocar el GC programáticamente. Es bueno dejar que suceda por sí solo. GC get call siempre que la generación 0 se llene. GC no afectará el rendimiento de su programa.

La recolección de basura es el proceso en el que los programas intentan liberar espacio de memoria que ya no son utilizados por variables, objetos y demás. La recolección de basura se implementa de manera diferente para cada idioma. La mayoría de los lenguajes de programación de alto nivel tienen algún tipo de recolección de basura incorporada. Los lenguajes de programación de bajo nivel pueden agregar la recolección de basura a través de las bibliotecas.

La recolección de basura es una herramienta que le ahorra tiempo al programador, por ejemplo, reemplaza la necesidad de funciones como malloc () y free () que se encuentran en C. También puede ayudar a prevenir las fugas de memoria.

La desventaja de la recolección de basura es que tiene un impacto negativo en el rendimiento. El programa debe ejecutarse regularmente a través del programa, verificando las referencias de los objetos y limpiando la memoria; esto requiere recursos y, a menudo, requiere que el programa se detenga.

Si un objeto no tiene referencias (ya no es accesible), entonces es elegible para la recolección de basura. Por ejemplo, en el código de Java a continuación, el objeto Thing al que originalmente hace referencia 'thing1' tiene su única referencia redirigida a otro objeto en el montón - es inalcanzable y el recolector de basura no podrá acceder a su memoria.

```java
class Useless { 
  public static void main (String[] args) { 
  Thing thing1 = new Thing(); 
  Thing thing2 = new Thing(); 
  thing2 = thing1; // direct thing2's reference towards thing1 
                   // no references access thing2 
 } } 
```

Un ejemplo de recolección de basura es ARC, abreviatura de conteo automático de referencias. Esto se usa en Swift, por ejemplo. ARC se reduce a hacer un seguimiento de las referencias a todos los objetos que se crean. Si la cantidad de referencias cae a 0, el objeto se marcará para la desasignación.

#### Más información:

*   https://docs.microsoft.com/en-us/dotnet/standard/garbage-collection/fundamentals - Para saber más sobre la recolección de basura