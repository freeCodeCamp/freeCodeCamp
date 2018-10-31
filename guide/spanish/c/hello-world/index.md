---
title: Hello World C
localeTitle: Hola mundo C
---
\## Hola Mundo

Para escribir por la consola, puede usar la función `printf()` que se encuentra dentro de la libreria `include <stdio.h>`

\`\` \`C #include

int main (void) {
```
 printf("hola, mundo!\n");  //las linias que empiezan con estos caractere se llaman comentarios.. 
 
 return 0; 
```

} \`\` \` ## Explicación

*   El #include es un comando preprocesador. Este comando le dice al compilador que incluya el contenido del archivo stdio.h (entrada y salida estándar) en el programa.
    
*   La librería stdio.h contiene funciones como scanf () e print () para entrada y salida respectivamente.
    
*   Si usa la función printf () sin escribir #include , el programa no será compilado.
    
*   La ejecución de un programa en C comienza desde la función main ().
    
*   El printf () es una función de librería para enviar resultados formateados a la pantalla. En este programa, el printf () muestra el texto hola, mundo! en la pantalla.
    
*   El retorno 0; declaración es el "estado de salida" del programa. En términos simples, el programa termina con esta declaración.
    
    ## Salida:
    
    \`\` \`
    

> Hola Mundo \`\` \`
