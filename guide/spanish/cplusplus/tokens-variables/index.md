---
title: Tokens Part 1
localeTitle: Tokens parte 1
---
### ¿Qué son los tokens?

Los tokens son las unidades más pequeñas de un programa que son importantes para el compilador. Hay diferentes tipos de fichas:

*   Palabras clave
    
*   Los operadores
    
*   Puntuadores
    
*   Literales
    
*   Identificadores
    
*   **Combinación de fichas forman una expresión.**
    

### ¿Qué son las variables?

*   Definición de libro de texto: las variables se denominan ubicaciones de memoria cuyos datos pueden modificarse.
    
*   Pero me gustaría que pensaras en una variable como algo así como una caja, algo como esto: ![Img](https://media-1.freecodecamp.org/imgr/YdbgWHL.png)
    

Así por ejemplo : Me estoy mudando a un nuevo lugar y necesito arreglar mis cosas en cajas. Por lo tanto, se me ocurren 2 cosas: **¿Qué tipo de cosas se almacenarán en la caja, de modo que se conozca el tamaño de la caja (el tipo de datos)** y **cómo se identifica la caja? (Nombrar la variable)**  
Por lo tanto, sabemos que una variable en C ++ necesita un _nombre_ y un _tipo de datos_ y que el valor almacenado en ellos puede cambiarse.

### Tipos de datos en C ++:

Al declarar variables en c ++, deben tener un nombre al que se referirá más adelante, un valor (constante o no) y un tipo. El tipo le dirá al compilador los valores que la variable puede usar, las posibles operaciones y guardará un cierto espacio en la memoria. En c ++ hay dos tipos de datos:

*   Tipo simple
*   Tipo de struct

### Tipos de datos simples

*   Booleano - bool Funciona como un interruptor, puede estar encendido o apagado.
*   Personaje - char Almacena un solo personaje.
*   Entero - int Almacena un [entero](https://en.wikipedia.org/wiki/Integer) .
*   Punto flotante - flotador Pueden usar decimales.
*   Doble punto flotante - doble Doble precisión del tipo flotador.

Aquí puedes ver algunos ejemplos:

```cpp
bool GameRunning = true; 
 char a; 
 int x = 2; 
```

#### Estos tipos también pueden modificarse con modificadores tales como:

firmado no firmado corto largo

### Tipo de datos Struct

#### Identificadores

*   Los identificadores son los nombres dados a una variable o una clase o una función o cualquier función definida por el usuario.

## Reglas para nombrar una variable:

*   Comience a nombrar con una letra de AZ o az.
*   Los números pueden seguirte a la primera letra, pero no podemos comenzar a nombrar con números.
*   NO se permite el uso de espacios o caracteres especiales, en su lugar, use UNDERSCORE \_.

#### Declarando un variabe:

La sintaxis es la siguiente < _tipo de datos_ > < _nombre de variable_ >; o < _tipo de datos_ > < _nombre de variable_ > = < _valor_ >; Si también queremos inicializar la variable.

Por ejemplo : `cpp int a ; //declaring a variable named 'a' of type integer. a=4; //initializing a variable int b = 5 ; //declaring and initializing a variable 'b' of type integer.`

**Ejemplos de declarar una variable:**

```cpp
int a9; 
 char A; 
 double area_circle; 
 long l; 
```

**Maneras equivocadas de declarar variables** -

```cpp
int 9a; 
 char -a; 
 double area of circle; 
 long l!!; 
```

*   Los nombres de variables no pueden comenzar con un número
*   Caracteres especiales no están permitidos
*   No se permiten espacios.

Puedes imaginar diferentes cajas de diferentes tamaños y almacenar diferentes cosas como diferentes variables.

**NOTAS:**

1.  **El compilador de C ++ ignora los espacios en blanco y generalmente se usan para embellecer el código de modo que sea fácil para cualquier programador depurar o entender el código.**
2.  **Si una variable no está inicializada, contiene un valor de basura. Déjame dar un ejemplo:**

### Alcance de las variables

Todas las variables tienen su área de funcionamiento, y fuera de ese límite no tienen su valor, este límite se denomina alcance de la variable. Para la mayoría de los casos es entre llaves, en la cual se declara que una variable existe, no fuera de ella. Estudiaremos las clases de almacenamiento más adelante, pero a partir de ahora, podemos dividir las variables en dos tipos principales,

\*Variables globales.

\* Variables locales.

#### Variables globales

Las variables globales son aquellas que se declaran una vez y pueden ser utilizadas durante toda la vida útil del programa por cualquier clase o función. Deben ser declarados fuera de la función main (). Si solo se declaran, se les pueden asignar diferentes valores en diferentes momentos de la vida del programa. Pero incluso si se declaran y se inicializan al mismo tiempo fuera de la función main (), también se les puede asignar cualquier valor en cualquier punto del programa.

Ejemplo: Solo declarado, no inicializado.

```cpp
#include <iostream> 
 using namespace std; 
 int x;                // Global variable declared 
 int main() 
 { 
 x=10;                 // Initialized once 
 cout <<"first value of x = "<< x; 
 x=20;                 // Initialized again 
 cout <<"Initialized again with value = "<< x; 
 } 
```

#### Variables locales

Las variables locales son las variables que existen solo entre las llaves, en las que se declara. Fuera de eso no están disponibles y conduce a un error de tiempo de compilación.

Ejemplo:

```cpp
#include <iostream> 
 using namespace std; 
 int main() 
 { 
 int i=10; 
 if(i<20)        // if condition scope starts 
  { 
    int n=100;   // Local variable declared and initialized 
  }              // if condition scope ends 
 cout << n;      // Compile time error, n not available here 
 } 
```

### Variables constantes

Variable constante son las variables que no pueden ser cambiadas. Por ejemplo, si necesita "pi" en su código, no querrá cambiarlo después de la inicialización.

Ejemplo:

```cpp
#include <iostream> 
 using namespace std; 
 const double PI = 3.14159253; 
 int main() 
 { 
 //Calculating the area of a circle, using user provided radius 
 double radius; 
 //input and output explained in other guide 
 cin>>radius; 
 //pi*r^2 
 double area = PI*radius*radius; 
 cout<<area<<endl; 
 } 
```

### Valores de basura en una variable

Si una variable no está inicializada, contiene un valor de basura. Por ejemplo:

Así que en términos de cajas, puedes imaginar esto como ...

![Img](https://media-1.freecodecamp.org/imgr/YdbgWHL.png)

\`\` \`cpp #incluir utilizando namespace std; int main () { int a cout << "Valor de basura en a:" << a << endl; // declarando la variable llamada 'a' de tipo entero a = 5; // inicializando variable. cout << "Nuevo valor en a" << a << endl;

} \`\` \`

### La salida es:
```
Garbage value in a : 0 
 New value in a :  5 
```

Como puede ver, ya hay un valor almacenado en 'a' antes de que le demos un valor (aquí, es 0). Esto debería permanecer en la mente de cada programador para que cuando se utilicen las variables no creen un error lógico e impriman valores de basura.

[Pruebe el código usted mismo! :)](https://repl.it/Mg7j)

#### Palabras clave:

_Las palabras clave son palabras reservadas que transmiten un significado especial al compilador. **NO se** pueden usar para nombrar en c ++._ Ejemplos de palabras clave: en línea, operador, int privado, doble, vacío, char, plantilla, uso, virtual, ruptura, mayúscula, interruptor, amigo, etc.

**Cada una de estas palabras clave se usa para una función especial en C ++.**

_Tokens parte 1 ha terminado. Nos vemos campistas en la [Parte 2](https://guide.freecodecamp.org/cplusplus/tokens-part-II) de Tokens :)_

**Buena suerte a todos ustedes**

**¡Feliz codificación! :)**

**No dude en preguntar cualquier duda en la página de GitHub de [FreeCodeCamp](https://forum.freecodecamp.org/) o en [el foro de FreeCodeCamp.](https://forum.freecodecamp.org/)**