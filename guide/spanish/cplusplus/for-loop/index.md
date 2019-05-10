---
title: For Loop
localeTitle: En bucle
---
Un For Loop es una declaración repetitiva que se usa para verificar alguna condición y luego, según la condición, un bloque de código se ejecuta repetidamente hasta que se cumple la condición especificada.

El bucle for se distingue de otras declaraciones de bucle a través de un contador de bucle explícito o variable de bucle que permite al cuerpo del bucle conocer la secuencia exacta de cada iteración.

Por lo tanto, un bucle for es una estructura de control de repetición que le permite escribir de manera eficiente un bucle que necesita ejecutarse un número específico de veces.

## Sintaxis
```cpp
for ( init; condition; increment ) { 
   statement(s); 
 } 
```

Se permite colocar el incremento en el bucle for como en un bucle while. Significar una sintaxis como esta también puede funcionar.
```cpp
for ( init; condition;) { 
   statement(s); 
   increment; 
 } 
```

### en eso

Este paso le permite declarar e inicializar cualquier variable de control de bucle. Este paso se realiza primero y solo una vez.

### condición

A continuación se evalúa la condición. Si se mantiene verdadero, se ejecuta el cuerpo del bucle. Si es falso, el cuerpo del bucle no se ejecuta y el flujo de control salta a la siguiente iteración (repetición de un proceso).

### actualizar

La instrucción de actualización se usa para alterar la variable del bucle mediante operaciones simples como la suma, resta, multiplicación o división. La instrucción de actualización se ejecuta después de la ejecución del cuerpo del bucle.

## IMPLEMENTACIÓN:

```cpp
#include <iostream> 
 using namespace std; // Here we use the scope resolution operator to define the scope of the standar functions as std:: 
 
 int main () { 
   // for loop execution 
   for( int a = 10; a < 20; a = a + 1 ) { // The loop will run till the value of a is less than 20 
      cout << "value of a: " << a << endl; 
   } 
 
   return 0; 
 } 
 ``` 
 
  ```
 Output: 
 value of a: 10 
 value of a: 11 
 value of a: 12 
 value of a: 13 
 value of a: 14 
 value of a: 15 
 value of a: 16 
 value of a: 17 
 value of a: 18 
 value of a: 19 
  ```
 
 ##Bucle for en una sola linea
 Al igual que if y while, si después de una instrucción for no hay un bloque formado por { ... } se iterará sobre la siguiente instrucción.
 ##Ejemplo 
```cpp
#include <iostream>
#using namespace std;

int main () { 
   // Línea única para bucle para 
   for(int a = 10; a <20; a = a + 1) 
      cout << "valor de a:" << a << endl;
} 
```

Esto generaría la misma salida que el programa anterior. es decir Salida: valor de a: 10 valor de a: 11 valor de a: 12 valor de a: 13 valor de a: 14 valor de a: 15 valor de a: 16 valor de a: 17 valor de a: 18 valor de a: 19

 # Bucle for basado en rangos
 C++ también permite iterar sobre un contenedor usando rangos. En el bucle se especifican el contenedor a recorrer (un std::vector por ejemplo) y una variable con el valor del elemento del contenedor. También permite usar referencias. 
 
 ## Sintaxis 
```cpp

para (elemento: contenedor) declaración (es); 

int array[] = {1, 2, 3, 4, 5} para (int i: array) cout << i << endl; }

Salida: 1 2 3 4 5
```

Si se desea usar la referencia del elemento del contenedor, por ejemplo para asignarlo simplemente sería:
```cpp
 int array[] = {1, 2, 3, 4, 5};
 for(int& i : array) {
     i += 1;
 }
```
Al usar & se obtiene la referencia y se puede asignar los valores, por lo que con el ejemplo anterior el contenedor tendría
```
{2, 3, 4, 5, 6};
```
