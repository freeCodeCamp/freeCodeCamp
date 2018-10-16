---
title: Variables
localeTitle: Variables
---
Vamos a discutir algo conocido como variables. Las variables son como un cubo. Puedes poner algo en él y luego cambiarlo. después cuando sea necesario. En C ++, hay muchos tipos de variables como enteros, cadenas, booleanos y muchos otros. Veamos un programa simple usando variables enteras. Los enteros almacenan números enteros que son positivos, negativos o cero. Los números enteros no son números fraccionarios, por ejemplo, 1/2, 1/4 y 1/5. Veamos un programa simple que usa un entero variable.

```cpp
#include <iostream> 
 using namespace std ; 
 int main() 
 { 
    int a;          // Declare an integer variable a 
    a = 5;          // Assign value of 5 to variable a 
    cout << a;      // Display the value of variable a which contains 5 
    return 0; 
 } 
```

Cuando ejecute este programa, verá 5 en la pantalla

*   Tenga en cuenta que en el programa anterior // se coloca después de las líneas. El símbolo "//" es para comentar nuestro código. Código después del símbolo. "//" no se ejecuta en la línea donde está ubicado.
    
*   En la línea 5 n se declara una variable entera simple.
    
*   En la línea 6 se asigna el valor 5 a la variable a. Ahora cada vez que usamos la variable a en nuestro programa su valor será 5 A menos que lo cambiemos.
    
*   En la línea 7 mostramos el valor de la variable a y 5 se imprime en la pantalla.
    

### Alcance de las variables

Todas las variables tienen su área de funcionamiento, y fuera de ese límite no tienen su valor, este límite se denomina alcance de la variable. Para la mayoría de los casos es entre llaves, en la cual se declara que una variable existe, no fuera de ella. Estudiaremos las clases de almacenamiento más adelante, pero a partir de ahora, podemos dividir las variables en dos tipos principales,

\*Variables globales.

\* Variables locales.

#### Variables globales

Las variables globales son aquellas que se declaran una vez y pueden ser utilizadas durante toda la vida útil del programa por cualquier clase o función. Deben ser declarados fuera de la función main (). Si solo se declaran, se les pueden asignar diferentes valores en diferentes momentos de la vida del programa. Pero incluso si se declaran y se inicializan al mismo tiempo fuera de la función main (), también se les puede asignar cualquier valor en cualquier punto del programa.

Ejemplo: Solo declarado, no inicializado.

```cpp
include <iostream> 
 using namespace std; 
 int x;                // Global variable declared 
 int main() 
 { 
 x=10;                 // Initialized once 
 cout <<"first value of x = "<< x; 
 x=20;                 // Initialized again 
 cout <<"Initialized again with value = "<< x;` 
 } 
```

#### Variables locales

Las variables locales son las variables que existen solo entre las llaves, en las que se declara. Fuera de eso no están disponibles y conduce a un error de tiempo de compilación.

Ejemplo:

```cpp
include <iostream> 
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

Ahora vamos a leer acerca de un nuevo tipo de variable

#### Variable estática

Variables estáticas: cuando una variable se declara como estática, el espacio para ella se asigna durante la vida útil del programa. Incluso si la función se llama varias veces, el espacio para la variable estática se asigna solo una vez y el valor de la variable en la llamada anterior se transmite a través de la siguiente llamada a la función. Esto es útil para implementar coroutines en C / C ++ o en cualquier otra aplicación donde se deba almacenar el estado de función anterior. En términos simples, significa que una variable normal cuando se sale del ámbito pierde su identidad (valor), pero una variable estática tiene un alcance global y conserva su valor hasta el final del programa, pero a diferencia de la variable global no es necesario declararla Al inicio del programa.

#### EXTRA-

Static es una palabra clave en C ++ utilizada para dar características especiales a un elemento. A los elementos estáticos se les asigna almacenamiento solo una vez en la vida útil del programa en el área de almacenamiento estático. Y tienen un alcance hasta la vida del programa.

#### CÓDIGO-
```
#include <iostream> 
 #include <string> 
 using namespace std; 
 
 void howstaticworks() 
 { 
    static int count = 0;  // static variable 
    cout << count << " "; 
 
    /* value is updated and 
     will be carried to next 
     function calls*/ 
    count++; 
 } 
 
 int main() 
 { 
    for (int i=0; i<5; i++) 
        howstaticworks(); 
    return 0; 
 } 
```

#### Pruébate

simplemente copia el código y pégalo en el enlace dado. Ejecutar en IDE- https://ideone.com/

Salida: 0 1 2 3 4

Puede ver en el programa anterior que el conteo de variables está declarado como estático. Por lo tanto, su valor se lleva a través de las llamadas de función. La cuenta variable no se está inicializando cada vez que se llama a la función.

Probemos el mismo código eliminando la palabra clave "estática", adivinemos la salida y comparémosla con una del IDE. La estática ahora se convierte en variable normal