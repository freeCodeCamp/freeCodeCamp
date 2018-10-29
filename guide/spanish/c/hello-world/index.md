---
title: Hello World C
localeTitle: Hola mundo c
---

## Hola Mundo

Para escribir en la consola, puede usar la función `printf()` contenida en la biblioteca `include <stdio.h>`

```C 
#include <stdio.h>

int main (void) {
    printf("Hola, mundo!\n");  // Las líneas que empiezan con // son comentarios
    return 0; 
}
```

## Explicación

* `#include` es un comando del preprocesador. Este comando le dice al compilador que incluya el contenido del archivo `stdio.h` (libreria de funciones estándar de entrada y salida) en el programa.
    
* El archivo `stdio.h` contiene funciones como `scanf()` y `printf()` para tomar la entrada de datos y mostrar la salida de datos respectivamente.
    
* Si se usa la función `printf()` sin escribir `#include`, el programa no será compilado y no podrá ser ejecutado.
    
* La ejecución de un programa en C comienza desde la función `main()`.
    
* `printf()` es una función de biblioteca para enviar resultados formateados a la pantalla. En este programa, `printf()` muestra el texto ¨Hola, mundo!¨ en la pantalla.
    
* La declaración `return 0;` es el "estado de salida" del programa. En términos simples, el programa termina con esta declaración.
    

## Salida:
    
```
> Hola Mundo 
```
