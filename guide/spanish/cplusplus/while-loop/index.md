---
title: While-loop
localeTitle: undefined
---
Una instrucción de bucle while ejecuta repetidamente una instrucción de destino siempre que una condición dada sea verdadera.

Sintaxis: while (condición) { declaración (es); }

Un punto clave del bucle while es que tal vez el bucle no se ejecute nunca. Cuando se prueba la condición y el resultado es falso, se omitirá el cuerpo del bucle y se ejecutará la primera declaración después del bucle while.

Ejemplo:

```C++
#include <iostream>
 using namespace std;

 int main () {
   // Local variable declaration:
   int a = 10;

   // while loop execution
   while( a < 20 ) {
      cout << "value of a: " << a << endl;
      a++;
   }

   return 0;
 }
```

Salida:

valor de a: 10 valor de a: 11 valor de a: 12 valor de a: 13 valor de a: 14 valor de a: 15 valor de a: 16 valor de a: 17 valor de a: 18 valor de a: 19

### Fuentes

www.tutorialspoint.com