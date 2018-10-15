---
title: do while loop
localeTitle: hacer mientras bucle
---
## Hacer mientras bucle

El `do while loop` es casi el mismo que el bucle while. El `do while loop` tiene la siguiente forma:

```cpp
do 
 { 
  // do something; 
 } while(expression); 
```

Nota: recuerde utilizar un punto y coma ';' Al final de la condición.

## Detalles sobre el bucle do-while

El bucle do-while se utiliza siempre que esté seguro de que un proceso particular (dentro del bucle) debe realizarse al menos una vez. Tiene muchas ventajas, como no inicializar la variable de comprobación (por ejemplo, char addmore = 'Y'), etc. El punto y coma al final de while es obligatorio.

Haz algo primero y luego prueba si tenemos que continuar. El resultado es que el bloque do se ejecuta al menos una vez. (Porque la prueba de expresión viene después). Echa un vistazo a un ejemplo:

```cpp
#include <iostream> 
    using namespace std; 
 
    int main() 
    { 
        int counter, howmuch; 
 
        cin >> howmuch; 
        counter = 0; 
        do 
        { 
            counter++; 
            cout << counter << '\n'; 
        } 
        while ( counter < howmuch); 
        return 0; 
    } 

```