---
title: Hello World C
---

 ## Hello World

To write on console you can use the function `printf()` contained in the library `include <stdio.h>`
Pour écrire dans la console vous pouvez utiliser la fonction `printf()`, contenue dans la librairie `stdio.h`

 ```C
 #include <stdio.h>

 int main(void)
 {

     printf("hello, world\n");  //lines starting with this are called comments..

     return 0;
 }
 ```
  ## Explications 
 * #include <stdio.h> est une commande de pré-processeur. Elle dit au compilateur qu'il faut inclure le contenu de stdio.h (standard input and output) dans le programme.
 * Le fichier stdio.h contient des fonctions comme par exemple scanf(), qui prend une entrée, et printf() qui affiche une sortie.
 * Si vous utilisez la fonction printf() sans inclure stdio.h, le programme ne sera pas compilé.
 * L'execution d'un programme C débute à la fonction main().
 * printf() est une fonction de la librairie standard qui envoie un contenu formatté à l'ecran. Dans ce programme, printf() affiche Hello, World! à l'ecran.
 * Le return 0; est une expression qui est le status de sortie du programme. En terme simple, le programme s'arrête avec cette expression.

 ## Sortie:
 ```
 >hello, world
 ```
