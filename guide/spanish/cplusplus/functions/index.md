---
title: Functions in C++
localeTitle: Funciones en C ++
---
## Definición:

Una función es un grupo de sentencias que juntas realizan una tarea. Cada programa C ++ tiene al menos una función, que es main ().

Una declaración de función le dice al compilador sobre el nombre de una función, el tipo de retorno y los parámetros. Una definición de función proporciona el cuerpo real de la función.

## La forma general de una definición de función de C ++:

```cpp
return_type function_name( parameter list ) 
 { 
   body of the function 
 } 
```

### Tipo de devolución:

Una función puede devolver un valor. El _tipo de_ retorno _es el tipo de datos del valor que devuelve la función. Algunas funciones realizan las operaciones deseadas sin devolver un valor. En este caso, el_ tipo de _retorno_ es la palabra clave void.

### Nombre de la función:

Este es el nombre real de la función. El nombre de la función y la lista de parámetros constituyen la firma de la función.

### Parámetros:

Un parámetro es como un marcador de posición. Cuando se invoca una función, se pasa un valor al parámetro. Este valor se conoce como parámetro o argumento real. La lista de parámetros se refiere al tipo, orden y número de los parámetros de una función. Los parámetros son opcionales; es decir, una función puede no contener parámetros.

### Cuerpo de la función:

El cuerpo de la función contiene una colección de sentencias que definen lo que hace la función.

## Ejemplo:

```cpp
int max(int num1, int num2) 
 { 
   // local variable declaration 
   int result; 
 
   if (num1 > num2) 
      result = num1; 
   else 
      result = num2; 
 
   return result; 
 } 
```

## ¿Por qué son importantes las funciones?

Las funciones admiten la modularidad (dividir el trabajo en piezas más pequeñas llamadas módulos), que es una característica esencial de la POO que separa principalmente a C ++ de C. Tener funciones específicas para realizar tareas específicas elimina la confusión y acorta la duración de la función principal. La función también realiza reutilización de código. Por lo tanto, la próxima vez que tenga que calcular el máximo de dos números diferentes una y otra vez en el mismo programa, no necesita copiar y pegar su código. Solo tienes que llamar a la función y se hace el resto del trabajo.

## Más información

*   [TutorialsPoint](https://www.tutorialspoint.com/cplusplus/cpp_functions.htm)