---
title: Arrays
localeTitle: Arrays
---
# Formación

Un Arreglo (array) es una colección de valores (u objetos) de tipos de datos similares (se permiten las formas de tipos de datos primitivas y de referencia) mantenidas en direcciones de memoria secuenciales. Un arreglo se utiliza para almacenar una colección de tipos de datos similares. Los arreglos siempre comienzan con el índice de 0 y se crean instancias de un número determinado de índices. Todas las variables de la matriz deben ser del mismo tipo, declaradas en la instanciación.

**Sintaxis:**

```java
tipoDeDato[] nombreArreglo;   // forma preferible 
```

Aquí, `tipoDeDato[]` describe que todas las variables indicadas después de que se crearán una instancia como arreglo de tipo de dato especificado. Por lo tanto, si queremos crear más instancias de arreglos del tipo de dato similar, solo tenemos que agregarlas después del nombre de `nombreArreglo` especificado (no olvides separarlas solo con comas). Un ejemplo se da a continuación en la siguiente sección para referencia.

```java
tipoDeDato nombreArreglo[];  //  funciona, pero no está escrito en la forma preferible 
```

Aquí, el `tipoDeDato` solo describe que las variables indicadas después, pertenecen a ese tipo de dato. Además, `[]` después del nombre de la variable describe que la variable es un arreglo del tipo de dato especificado (no solo un valor u objeto de ese tipo de dato). Entonces, si queremos instanciar más arreglos del tipo de dato similar, agregaremos los nombres de las variables justo después del ya especificado, separados por comas y cada vez tendremos que agregar `[]` después del nombre de la variable, de lo contrario la variable será instanciada como una variable de almacenamiento de valor ordinario (no un arreglo). Para una mejor comprensión se da un ejemplo en la siguiente sección.

## Fragmentos de código de la sintaxis anterior:

```java
double[] lista1, lista2; // forma de escritura recomendada 
```

El fragmento de código anterior crea una instancia de 2 arreglos de nombres de tipo doble list1 y list2.

```java
double lista1[], lista2; // funciona, pero no es la forma recomendada 
```

En el fragmento de código anterior, un arreglo de tipo de tipo de datos doble, con nombre `lista1` y una variable simple de tipo de dato  doble, con nombre `list2` (No debe confundirse con el nombre **lista2** . Los nombres de variables no tienen nada que ver con el tipo de variable).

Nota: La forma de escribir `double lista[]` no se prefiere, ya que proviene del lenguaje C/C++ y se adoptó en Java para dar cabida a los programadores de C/C++. Además, es más fácil de leer: puedes leer que se trata de un "arreglo doble llamado lista" y no "un doble llamado lista que es un arreglo"

## Creando Arrays:

```java
tipoDeDato[] nombreArreglo = new dataType[tamanioArreglo]; //Donde: 'tamanioArreglo' es cualquier entero positivo mayor o igual a cero que representa el tamaño de dicho arreglo
```

## Fragmentos de código de la sintaxis anterior:

```java
double[] Lista = new double[10]; //Arreglo tipo doble llamado Lista de tamaño 10 (con 10 elementos)
```

## Otra forma de crear un Array:

```java
dataType[] arrayName = {value_0, value_1, ..., value_k}; 
```

## Fragmentos de código de la sintaxis anterior:

```java
double[] list = {1, 2, 3, 4}; 
```
El código de arriba es equivalente a: 
```java
 double[] list = new double[4]; 
 ```
**NOTA IMPORTANTE**: Por favor nota la diferencia entre los tipos de corchetes y llaves que son usados para representar arreglos en dos formas diferentes 

## Accediendo a los valores en Arreglos:

```java
nombreArreglo[indice]; // devuelve el valor en el 'indice' especificado 
```

## Fragmentos de código de la sintaxis anterior:

```java
System.out.println(lista[1]); 
```

Salida:
```
2.0 
```

## Modificación de Arreglos:

```java
nombreArreglo[indice] = valor; 
```

**Nota:** No puedes cambiar el tamaño o el tipo de detos en un arreglo después de inicializarla. Sin embargo, puedes restablecer el arreglo como:

```java
nombreArreglo = new tipoDeDatos[] {valor1, valor2, valor3}; 
```

## Tamaño de los Arreglos:

Es posible encontrar el número de elementos en una matriz utilizando el "atributo length". Debe notarse aquí que `length` es un **atributo** de cada arreglo, es decir, un nombre de variable que almacena la longitud del mismo arreglo. No debe confundirse con un **método** de arreglo, ya que el nombre es el mismo que el método `length()` correspondiente a la clase `String`.

```java
int[] a = {4, 5, 6, 7, 8}; // Declaración de un arreglo
 System.out.println(a.length); //imprime 5 
```

## Fragmentos de código de la sintaxis anterior:

```java
lista[1] = 3; // ahora, si accesas al arreglo como está arriba, devolverá 3 en lugar de 2
```

_Ejemplo de código:_

```java
int[] a = {4, 5, 6, 7, 8}; // Declaración de un arreglo de tipo enteros llamado 'a' 
 for (int i = 0; i < a.length; i++){ // ciclo que recorre cada índice 
    System.out.println(a[i]); // imprime el arreglo 
 } 
```

Salida:

```java
    4 
    5 
    6 
    7 
    8 
```

### Arreglos multidimensionales

Las matrices bidimensionales (o arreglos 2D) se pueden considerar como una tabla con filas y columnas. Aunque esta representación es solo una forma de visualizar la matriz para una mejor resolución de problemas. Los valores se almacenan realmente en direcciones de memoria secuenciales solamente.

```java
int M = 5; 
 int N = 5; 
 double[][] a = new double [M][N]; //M = filas N = columnas 
 for(int i = 0; i < M; i++) { 
    for (int j = 0; j < N; j++) { 
        //Haz algo aquí, en este índice 
    } 
 } 
```

Este bucle ejecutará M ^ N veces y construirá esto:

\[0 | 1 | 2 | 3 | 4\]  
\[0 | 1 | 2 | 3 | 4\]  
\[0 | 1 | 2 | 3 | 4\]  
\[0 | 1 | 2 | 3 | 4\]  
\[0 | 1 | 2 | 3 | 4\]

Del mismo modo también se puede hacer una matriz o arreglo 3D. Se puede visualizar como un cuboide en lugar de un rectángulo (como arriba), dividido en cubos más pequeños con cada cubo almacenando algún valor. Se puede inicializar como a continuación:

```java
int a=2, b=3, c=4; 
 int[][][] a=new int[a][b][c];  //Cubo de 2x3x4
```

De manera similar, uno puede tener un arreglo de tantas dimensiones como desee, pero visualizar una matriz de más de 3 dimensiones es difícil de visualizar de una forma particular.

### Matrices dentadas

Las matrices dentadas son matrices multidimensionales que tienen un número determinado de filas pero un número variable de columnas. Las matrices dentadas se utilizan para conservar el uso de memoria de la matriz. Aquí hay un ejemplo de código:

```java
int[][] array = new int[5][]; //inicializa un arreglo 2D con 5 filas
 array[0] = new int[1]; //creates 1 columna para la primer fila 
 array[1] = new int[2]; //creates 2 columnas para la segunda fila 
 array[2] = new int[5]; //creates 5 columnas para la tercer fila 
 array[3] = new int[5]; //creates 5 columnas para la cuarta fila 
 array[4] = new int[5]; //creates 5 columnas para la quinta fila 
```

Salida:

\[0\]  
\[0 | 1\]  
\[0 | 1 | 2 | 3 | 4\]  
\[0 | 1 | 2 | 3 | 4\]  
\[0 | 1 | 2 | 3 | 4\]

#### Más información:

*   Fuente: [Java Arrays](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html)
