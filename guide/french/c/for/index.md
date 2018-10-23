---
title: Boucle For
---

# Boucle For

La boucle `for` execute un bloc de code jusqu'à ce qu'une condition soit fausse. Vous pouvez utiliser `while` quand le nombre d'execution est variable, sinon utilisez `for`. Un usage commun d'utilisation d'une boucle `for` est l'itération sur des array.
C'est egalement connu comme 'la boucle controllée par l'entrée', puisque la condition de la boucle est verifiée à chaque itération. Un autre exemple de boucle controllée par l'entrée est la boucle while.

## Syntaxe de la boucle For

```c
for ( init; condition; increment ) {
   expression(s);
}
```

La boucle `for` consiste en 3 sections : la section d'initialisation, une condition specifique et l'incrément ou décrément. Ce sont les trois sections de controle de la boucle for.
L'initialisation est executée seulement la première fois. Ensuite, la condition est évaluée. Si la condition est fausse (false), la boucle s'arrête et passe à la suite du programme. Si la condition est vraie (true), le code à l'interieur de la boucle est executée, et les variables mises à jour. Ce processus se repete jusqu'a ce que la condition soit fausse.

The for loop is commonly used when the number of iterations is known.
La boucle for est typiquement utilisée quand le nombre d'itération est connu.

## Exemple
```c
#include <stdio.h>

int main () {

    int array[] = {1, 2, 3, 4, 5};

    for (int i = 0; i < 5; i++) {
    	printf("Item on index %d is %d\n", i, array[i]);
    }
}
```

## Sortie:
```shell
> Item on index 0 is 1
> Item on index 1 is 2
> Item on index 2 is 3
> Item on index 3 is 4
```
