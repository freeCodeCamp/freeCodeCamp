---
title: C++ If Statement
localeTitle: C ++ If Declaración
---# La declaración IF.

**¿Qué hace una sentencia if?**

*   La instrucción `if` evalúa la expresión de prueba presente dentro del paréntesis.
*   La instrucción `if` usa operadores relacionales y lógicos para hacer expresiones lógicas.

* * *

La forma general de la declaración `if` :

```cpp
  if (Test Expression / Condition) 
  { 
    // Block of statements if test expression is True 
  } 
```

Si el valor de la expresión de prueba es **verdadero** , entonces el bloque de Código dentro de la sentencia if se ejecuta.

Si el valor de la expresión de prueba es **falso** , entonces el bloque de el código dentro de la sentencia if se omite y su código continúa.

Ejemplo `if` declaración:

```cpp
  int a = 10; 
 
  // true statement 
  if (a < 20) 
  { 
    // execute this block of code 
  } 
 
  // false statement 
  if (a < 0) 
  { 
    // Skip this block of code. 
  } 
```

Ejemplo en C ++:

```cpp
  // Program to check if number entered by the user is positive 
  // If negative, the block of code is skipped 
 
  #include <iostream> 
  using namespace std; 
 
  int main() 
  { 
    int no ; 
    cout << "Enter a number: "; 
    cin >> no; 
 
    // if statement to check if the number is positive 
    if ( no > 0) 
    { 
      cout << "You have entered a positive number: " << no << endl; 
    } 
 
    // If number is not positive, then if statement is skipped a program continues 
    cout << "This step is always printed" << endl; 
 
    return 0; 
  } 
```

**Salida:**

SALIDA 1:
```
Enter a number: 5 
 You have entered a positive number: 5 
 This step is always printed 
 ``` 
 This is the output when the number entered is positive. 
 
 OUTPUT 2: 
```

Introduce un número: -1 Este paso siempre se imprime. \`\` \` Esta es la salida cuando el número introducido es negativo.

[Pruebe el código usted mismo! :)](https://repl.it/Mg9X)

_FELICIDADES . Este es el final del artículo sobre la declaración IF._

**Buena suerte a todos ustedes**

**¡Feliz codificación! :)**

**No dude en preguntar cualquier duda en la página de GitHub de [FreeCodeCamp](https://forum.freecodecamp.org/) o en [el foro de FreeCodeCamp.](https://forum.freecodecamp.org/)**