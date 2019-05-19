---
title: Input and Output
localeTitle: Entrada y salida
---
## Entrada y salida con flujos

Para imprimir cosas en la consola, o leerlas, utiliza `cout` y `cin` , que se denominan `streams` . Esta metáfora se usa porque usa flujos como si usara un sumidero, o un toque: puede vaciar los datos en un sumidero ( `cout` ), u obtener datos de un toque ( `cin` ).

### Salida con cout

El programa "Hello World" usa `cout` para imprimir "Hello World!" a la consola:

```cpp
#include<iostream> 
 using namespace std; 
 
 int main() 
 { 
  cout << "Hello world!" << endl; 
 } 
```

Las primeras dos líneas en la parte superior son necesarias para que uses `cout` y otras transmisiones. `#include<iostream>` hace que los objetos de la corriente sean imposibles de `using namespace std;` , y `using namespace std;` le permite escribir `cout` directamente en lugar de tener que escribir `std::cout` , es decir, tener que especificar que queremos usar `cout` desde el `std` nombres `std` .

`cout` significa "Salida de consola" y es el llamado _flujo de salida_ que representa la consola. Cuando quiera imprimir algo en la consola, puede ponerlo en `cout` ; Imagínalo como un agujero que conduce a la terminal. Para colocar cosas en este orificio, una a la vez, use el operador `<<` , también conocido como el _operador de inserción_ 1 . El operador puede estar encadenado, es decir, puede poner varias cosas una tras otra. Lo siguiente imprimirá "El pastel es una mentira".

`cout << "The cake " << "is " << "a " << "lie." << endl;`

`endl` significa "End Line" y es otro elemento que proviene de `<iostream>` . Cuando coloque `endl` en `cout` , imprimirá un carácter de nueva línea ("\\ n") en la consola, y también _borrará_ `cout` , lo que significa que forzará a `cout` a imprimir todo lo que haya puesto en él _ahora_ . Si no pone `endl` en `cout` , `cout` puede conservar los datos que ha `endl` pero esperar más datos antes de imprimirlos todos. Esto se denomina _almacenamiento en búfer_ y es muy bueno para el rendimiento, pero si ya le ha dado todo lo que se supone que debe imprimir, desea que `cout` imprima de inmediato. Por lo tanto, es una buena práctica terminar con el `endl` en lugares donde tenga sentido.

Casi todo se puede poner en una secuencia: cadenas, números, variables, expresiones, etc. Aquí se muestran algunos ejemplos de inserciones de secuencias válidas:

```cpp
// Notice we can use the number 42 and not the string "42". 
 cout << "The meaning of life is " << 42 << endl;` // Output: The meaning of life is 42 
```

```cpp
string name = "Tim"; 
 cout << "Except for you, " << name << endl;`// Output: Except for you, Tim 
```

```cpp
string name = "Tim"; 
 cout << name; 
 cout << " is a great guy!" << endl;` 
 // Output: Tim is a great guy! 
```

```cpp
int a = 3; 
 cout << a*2 + 18/a << endl;`// Output: 12 
```

### Una nota sobre los espacios en blanco.

C ++ siempre _te_ pone en control, y solo hace exactamente lo que le dices que haga. Esto a veces puede ser sorprendente, como en el siguiente ejemplo:

```cpp
string name = "Sarah"; 
 cout << "Good morning" << name << "how are you today? << endl; 
```

Podría esperar que se imprima "Buenos días, Sarah, ¿cómo estás hoy?", Pero en realidad, la salida sería "Buenos días, Sarah, ¿cómo estás hoy?". El motivo de este error es que no escribió espacios en las cadenas que rodean el `name` , por lo que, como no especificó ningún espacio, `cout` no imprimió ninguno. La versión correcta sería: `cout << "Good morning " << name << " how are you today? << endl;`

Los saltos de línea no ocurren por sí mismos, tampoco. Podría pensar que esto imprimiría una receta en cuatro líneas:

```cpp
cout << "To make bread, you need:"; 
 cout << "* One egg"; 
 cout << "* One water"; 
 cout << "* Two wheat"; 
```

pero la salida es en realidad todo en una línea: "Para hacer pan, necesitas: \* Un huevo \* Un agua \* Dos trigo". Esto se debe a que no hay caracteres de nueva línea al final de las líneas, por lo que, naturalmente, C ++ asume que no queremos que se impriman caracteres de nueva línea.

Podría arreglar esto agregando `endl` s después de cada línea, porque como se `endl` anteriormente, `endl` inserta un carácter de nueva línea en la secuencia de salida. Sin embargo, también obliga a vaciar el búfer, lo que nos hace perder un poco de rendimiento, ya que podríamos haber impreso todas las líneas de una sola vez. Por lo tanto, lo mejor sería agregar caracteres de nueva línea al final de las líneas, y solo usar `endl` al final:

```cpp
cout << "To make bread, you need:\n"; 
 cout << "* One egg\n"; 
 cout << "* One water\n"; 
 cout << "* Two wheat" << endl; 
```

Si solo imprime una receta pequeña, el tiempo que guarda es minúsculo y no vale la pena, pero si imprime millones de artículos, la diferencia podría ser muy notable.

### Entrada con cin

Para leer desde la consola, utiliza el _flujo de entrada_ `cin` de la misma manera que lo haría con `cout` , pero en lugar de poner las cosas en `cin` , las "saca". El siguiente programa lee dos números del usuario y los suma:

```cpp
#include<iostream> 
 using namespace std; 
 
 int main() 
 { 
  int a, b; // Variables to hold the two numbers. 
 
  cout << "Please enter the first number:" << endl; 
  cin >> a; 
  cout << "Please enter the second number:" << endl; 
  cin >> b; 
 
  cout << "The sum of your numbers is: " << a + b << endl; 
 } 
```

`cin` significa "entrada de consola" y es un _flujo de entrada_ que representa la entrada desde la consola. En la expresión `cin >> a;` , los datos se leen desde `cin` y se guardan en la variable `a` , utilizando el operador `>>` , el _operador de extracción_ 2 . El operador de extracción lee exactamente la cantidad de datos necesarios para escribir en la variable que especificamos y omite los espacios en blanco, por lo que si el usuario escribe "6", se leerá como el valor `6` .

Vale la pena señalar que `cin` detendrá todo el programa para esperar a que el usuario ingrese su valor. El programa no continuará hasta que el usuario haya presionado Intro, y hay algunos datos que se escribirán en la variable. Si el usuario solo presiona Intro sin escribir nada, `cin` seguirá esperando un valor.

El operador de extracción `<<` se puede encadenar. Este es el mismo programa que la última vez, pero escrito de una manera más concisa:

```cpp
#include<iostream> 
 using namespace std; 
 
 int main() 
 { 
  int a, b; // Variables to hold the two numbers. 
 
  cout << "Please enter two numbers:" << endl; 
  cin >> a >> b; 
  cout << "The sum of your numbers is: " << a + b << endl; 
 } 
```

Cuando está encadenado, el operador de extracción primero leerá los datos de `cin` para rellenar `a` , y luego leerá los datos para rellenar `b` .

Las declaraciones estándar printf y scanf de C también se pueden usar con c ++ importando ' ' archivo de cabecera.

## Fuentes

1.  http://www.cplusplus.com/reference/ostream/ostream/operator%3C%3C/
2.  http://www.cplusplus.com/reference/istream/istream/operator%3E%3E/