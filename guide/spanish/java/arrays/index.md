---
title: Arrays
localeTitle: Arrays
---
# Formación

Un Array es una colección de valores (u objetos) de tipos de datos similares (se permiten las formas de tipos de datos primitivas y de referencia) mantenidas en direcciones de memoria secuenciales. Una matriz se utiliza para almacenar una colección de tipos de datos similares. Las matrices siempre comienzan con el índice de 0 y se crean instancias de un número determinado de índices. Todas las variables de la matriz deben ser del mismo tipo, declaradas en la instanciación.

**Sintaxis:**

```java
dataType[] arrayName;   // preferred way 
```

Aquí, el `java datatype[]` describe que todas las variables indicadas después de que se crearán una instancia como matrices del tipo de datos especificado. Por lo tanto, si queremos crear una instancia de más matrices del tipo de datos similar, solo tenemos que agregarlas después del nombre de `java arrayName` especificado (no olvide separarlas solo con comas). Un ejemplo se da a continuación en la siguiente sección para referencia.

```java
dataType arrayName[];  //  works but not preferred way 
```

Aquí, el `java datatype` solo describe que las variables indicadas después de que pertenecen a ese tipo de datos. Además, `java []` después del nombre de la variable describe que la variable es una matriz del tipo de datos especificado (no solo un valor u objeto de ese tipo de datos). Entonces, si queremos instanciar más matrices del tipo de datos similar, agregaremos los nombres de las variables justo después del ya especificado, separados por comas y cada vez tendremos que agregar `java []` después del nombre de la variable, de lo contrario la variable será instanciado como una variable de almacenamiento de valor ordinario (no una matriz). Para una mejor comprensión se da un ejemplo en la siguiente sección.

## Fragmentos de código de la sintaxis anterior:

```java
double[] list1, list2; // preferred way 
```

El fragmento de código anterior crea una instancia de 2 matrices de nombres de tipo doble list1 y list2.

```java
double list1[], list2; // works but not preferred way 
```

En el fragmento de código anterior, una matriz de tipo de datos con doble nombre list1 y una variable simple de tipo de datos con doble nombre list2 (No debe confundirse con el nombre **list2** . Los nombres de variables no tienen nada que ver con el tipo de variable).

Nota: la `double list[]` estilos `double list[]` no se prefiere, ya que proviene del lenguaje C / C ++ y se adoptó en Java para dar cabida a los programadores de C / C ++. Además, es más fácil de leer: puede leer que se trata de una "lista de doble matriz denominada" que no es "una lista de doble llamada que es una matriz"

## Creando Arrays:

```java
dataType[] arrayName = new dataType[arraySize]; 
```

## Fragmentos de código de la sintaxis anterior:

```java
double[] List = new double[10]; 
```

## Otra forma de crear un Array:

```java
dataType[] arrayName = {value_0, value_1, ..., value_k}; 
```

## Fragmentos de código de la sintaxis anterior:

```java
double[] list = {1, 2, 3, 4}; 
 
 El fragmento de código arriba es equivalente a: 
 double[] list = new double[4]; 
 *NOTA IMPORTANTE: Por favor notar la diferencia entre los
 tipos de paréntesis que son usandos para representar arrays
 de dos diferentes maneras. 
```

## Accediendo a Arrays:

```java
arrayName[index]; // gives you the value at the specified index 
```

## Fragmentos de código de la sintaxis anterior:

```java
System.out.println(list[1]); 
```

Salida:
```
2.0 
```

## Modificación de matrices:

```java
arrayName[index] = value; 
```

Nota: No puede cambiar el tamaño o el tipo de una matriz después de inicializarla. Nota: Sin embargo, puede restablecer la matriz como tal

```java
arrayName = new dataType[] {value1, value2, value3}; 
```

## Tamaño de las matrices:

Es posible encontrar el número de elementos en una matriz utilizando el "atributo de longitud". Debe notarse aquí que la `java length` es un **atributo** de cada matriz, es decir, un nombre de variable que almacena la longitud de la variable. No debe confundirse con un **método** de matriz, ya que el nombre es el mismo que el método de `java length()` correspondiente a las clases de cadena.

```java
int[] a = {4, 5, 6, 7, 8}; // declare array 
 System.out.println(a.length); //prints 5 
```

## Fragmentos de código de la sintaxis anterior:

```java
list[1] = 3; // now, if you access the array like above, it will output 3 rather than 2 
```

_Ejemplo de código:_

```java
int[] a = {4, 5, 6, 7, 8}; // declare array 
 for (int i = 0; i < a.length; i++){ // loop goes through each index 
    System.out.println(a[i]); // prints the array 
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

### Matrices multidimensionales

Las matrices bidimensionales (matrices 2D) se pueden considerar como una tabla con filas y columnas. Aunque esta representación es solo una forma de visualizar la matriz para una mejor resolución de problemas. Los valores se almacenan realmente en direcciones de memoria secuenciales solamente.

```java
int M = 5; 
 int N = 5; 
 double[][] a = new double [M][N]; //M = rows N = columns 
 for(int i = 0; i < M; i++) { 
    for (int j = 0; j < N; j++) { 
        //Do something here at index 
    } 
 } 
```

Este bucle ejecutará M ^ N veces y construirá esto:

\[0 | 1 | 2 | 3 | 4\]  
\[0 | 1 | 2 | 3 | 4\]  
\[0 | 1 | 2 | 3 | 4\]  
\[0 | 1 | 2 | 3 | 4\]  
\[0 | 1 | 2 | 3 | 4\]

Del mismo modo también se puede hacer una matriz 3D. Se puede visualizar como un cuboide en lugar de un rectángulo (como arriba), dividido en cubos más pequeños con cada cubo almacenando algún valor. Se puede inicializar a continuación:

```java
int a=2, b=3, c=4; 
 int[][][] a=new int[a][b][c]; 
```

De manera similar, uno puede tener una serie de tantas dimensiones como desee, pero visualizar una matriz de más de 3 dimensiones es difícil de visualizar de una manera particular.

### Matrices dentadas

Las matrices dentadas son matrices multidimensionales que tienen un número determinado de filas pero un número variable de columnas. Las matrices dentadas se utilizan para conservar el uso de memoria de la matriz. Aquí hay un ejemplo de código:

```java
int[][] array = new int[5][]; //initialize a 2D array with 5 rows 
 array[0] = new int[1]; //creates 1 column for first row 
 array[1] = new int[2]; //creates 2 columns for second row 
 array[2] = new int[5]; //creates 5 columns for third row 
 array[3] = new int[5]; //creates 5 columns for fourth row 
 array[4] = new int[5]; //creates 5 columns for fifth row 
```

Salida:

\[0\]  
\[0 | 1\]  
\[0 | 1 | 2 | 3 | 4\]  
\[0 | 1 | 2 | 3 | 4\]  
\[0 | 1 | 2 | 3 | 4\]

#### Más información:

*   Fuente: [Java Arrays](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html)
