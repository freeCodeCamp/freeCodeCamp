---
title: Hello World C
localeTitle: Hola mundo c
---
\## Hola Mundo

Para escribir en la consola, puede usar la función `printf()` contenida en la biblioteca `include <stdio.h>`

\`\` \`C #include

int main (void) {
```
 printf("hello, world\n");  //Las lineas que empiezan con las dobles barras con comentarios...
 
 return 0; 
```

} \`\` \` ## Explicación

*   El #include es un comando preprocesador. Este comando le dice al compilador que incluya el contenido del archivo stdio.h (entrada y salida estándar) en el programa.
    
*   El archivo stdio.h contiene funciones como scanf () e print () para tomar entrada y mostrar la salida respectivamente.
    
*   Si usa la función printf () sin escribir #include , el programa no será compilado.
    
*   La ejecución de un programa en C comienza desde la función main ().
    
*   El printf () es una función de biblioteca para enviar resultados formateados a la pantalla. En este programa, el printf () muestra Hello, World! Texto en la pantalla.
    
*   El return 0; declaración es el "estado de salida" del programa. En términos simples, el programa termina con esta declaración.
    
    ## Salida:
    
    \`\` \`
    

> Hola Mundo \`\` \`
