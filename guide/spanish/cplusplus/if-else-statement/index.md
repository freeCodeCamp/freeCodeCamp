---
title: If-Else Statement
localeTitle: Declaración If-Else
---
## ¿Qué hace una declaración If-Else?

*   La instrucción If-Else es una extensión de la instrucción simple If.
*   En la declaración simple If, ​​si el valor de la expresión de prueba es falso, omitimos el código de bloqueo y continuamos con nuestra siguiente declaración.
*   Pero muchas veces, queremos ejecutar ciertos pasos si el valor de la expresión de prueba es falso.
*   En tales casos, usamos la sentencia if-else.

### Forma general de la declaración de If-Else

```cpp
if (condición) 
 { 
  //Este segmento de código se ejecuta si se da la condición establecida en el if
 } 
 else 
 { 
    //Este segmento de código se ejecuta si NO se da la condición establecida en el if
 } 
```

### Ejemplo de declaración If-Else

Si la expresión de prueba es verdadera:

```cpp
int a = 10; 
 if (a < 20) // Si esta condición es verdadera entonces ...
 { 
  //...Este bloque de código se ejecuta y...
 } 
 else 
 { 
  //...Este bloque de código se omite
 } 
 //El programa continúa
```

Si la expresión de prueba es falsa:

```cpp
int  a = 10; 
 if (a > 20) // Esta expresión es falsa, por eso esta vez ...
 { 
  //...este bloque de código se omite... 
 } 
 else 
 { 
  //...y este bloque de código se ejecuta
 } 
 //el programa continúa
```

### Ejemplo en C ++:

```cpp
//Programa para verificar si el número introducido es positivo o negativo
 #include <iostream> 
 using namespace std; 
 int main() 
 { 
  int no; 
  cout << "Introduzca un número: " << endl; 
 
  cin >> no; 
 
  // condición para verificar si el número es positivo o no
  if (no >= 0) // positivo 
  { 
    // bloque si la condición es verdadera
    cout << "Ha introducido un número positivo: " << no << endl; 
  } 
  else         // negativo
  { 
    // Bloque de código si la condición es falsa
    cout << "Usted ha introducido un número negativo: " << no << endl; 
  } 
 
  // El programa continúa
  cout << "Este mensaje siempre se muestra al ejecutarse el programa" << endl; 
  return 0; 
 } 
```

#### Salida

*   Cuando se ingresa un número positivo:
```
Introduzca un número: 
 4 
 Usted ha introducido un número positivo: 4 
 Este mensaje siempre se muestra al ejecutarse el programa.
```

*   Cuando se ingresa un número negativo:
```
Introduzca un número: 
 -200 
 Usted ha introducido un número negativo: -200 
 Este mensaje siempre se muestra al ejecutarse el programa.
```

[Prueba el código tu mismo](https://repl.it/MzBq)

# **No dude en preguntar cualquier duda en la página de GitHub de [FreeCodeCamp](https://forum.freecodecamp.org/) o en [el foro de FreeCodeCamp.](https://forum.freecodecamp.org/)**

[Prueba el código tu mismo](https://repl.it/MzBq)

### Uso de if ... else if ... else ladder

Si tenemos que tomar decisiones basadas en más de una condición utilizando, en caso contrario. Usamos otra cosa si la condición es la siguiente:

```cpp
#include<iostream> 
 int main() 
 { 
    int score; 
    std::cout<<"Enter your score: \n"; 
    std::cin>>score; 
    if(score>=90) 
        std::cout<<"Top performance."; 
    else if(score<90 && score>=70) 
        std::cout<<"Good performance"; 
    else if(score<70 && score>=45) 
        std::cout<<"Average performance"; 
    else if(score<45 && score>=30) 
        std::cout<<"You can improve it."; 
   return 0; 
 } 
```

#### Salida
```
Enter your score: 
 85 
 Good performance 
```

### Otro ejemplo de si ... else if ... else ladder

Supongamos que el usuario ingresa dos números y los vamos a mostrar si alguno de los números es mayor que el otro. Y si ninguno es mayor que el otro, imprimimos la declaración "Ambos son iguales".

En este scinerio necesitaremos una sentencia de escalera si ... o si ... y si no. El programa se verá así:
```
#include<iostream> 
 using namespace std; 
 int main() 
 { 
    int number1,number2; 
    cout << "Enter first number: \n"; 
    cin >> number1; 
    cout << "Enter second number: \n"; 
    cin >> number2; 
 
    if(number1 > number2)     // Checks if the first number is greater than the second number 
    { 
        cout << "Number 1 is greater."; 
    } 
    else if(number2 > number1)    // Checks if the second number is greater than the first number 
    { 
        cout << "Number 2 is greater."; 
    } 
    else    // If both of the above cases return false, then both numbers are equal 
    { 
        cout << "Both the numbers are equal."; 
    } 
 
    return 0; 
 } 
```

#### Salida
```
Enter first number: 
 85 
 Enter second number: 
 86 
 Number 2 is greater. 
```

*   Tenga en cuenta que el programa solo verificará la condición 'else if' cuando la condición inicial 'if' no se cumpla. Y si no se cumple ninguna de estas condiciones, se ejecuta el último bloque 'else' que imprime la declaración: "Ambos números son iguales".
    
*   El tamaño de la escalera if ... else if ... else puede variar según el problema que el programa esté tratando de resolver y la cantidad de condiciones que deben verificarse.
    

**Buena suerte a todos ustedes**

**¡Feliz codificación! :)**

**No dude en hacer cualquier consulta en la página de GitHub de freeCodeCamp.org o en [el foro de freeCodeCamp.org](https://forum.freecodecamp.org/)** .
