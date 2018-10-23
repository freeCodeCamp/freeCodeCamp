---
title: C
---

# Hello World! - Votre premier programme en C

## Comment tirer le plus de ce cours
Soyiez certains d'être confortable avec tous les concepts de cette partie du guide avant d'avancer. Faire tourner son premier programme est important parce qu'il va vous permettre de suivre les examples au fur et à mesure, c'est en forgeant qu'on devient forgeron ! Les concepts qui peuvent paraître étranges seront annotés en lien dans les appendix. Si vous ne comprenez pas un concept, n'hésitez pas à le consulter.

## Objectifs
L'objectif de ce cours est d'enseigner le langage C à des débutants. Idéalement, quelqu'un qui n'a jamais programmé avant sera capable de comprendre le C en suivant ces guides. Cependant, ce guide pourra toujours servir de référence à un programmeur experimenté en trouvant l'information cherchée depuis le sommaire de chaque article. Bien que le but du guide ne soit pas ceci, il sera touours possible de transférer les exemples de ce guide sur des microcontrolleurs de type arduino par exemple.

## C'est quoi le C ?

Le langage C est un langage inventé par Dennis Ritchie entre 1969 et 1973 dans les laboratoires Bell. Depuis lors, il a été utilisé pour créer par exemple le noyau Linux, ce qui permet à des logiciels d'interagir avec du matériel sur les systèmes d'exploitation Linux. Il peut faire des opérations de bas niveau car il est designé pour être proch
C, comme tout langage de bas niveau, nécessite une compilation. La compilation est un processus qui va prendre le programme écrit en C et le transformer en code qui peut être exécuté par un ordinateur. La compilation, comme son nom l'indique, nécessite un compilateur, qui peut être soit utilisé depuis des lignes de commandes soit depuis un IDE.

Si vous préférez utiliser un outil en ligne de commande, vous pouvez utiliser `gcc`. Il peut être trouvé par défaut sur n'importe quel système GNU+Linux, et sur Mac, et il est facilement trouvable sur Windows. Pour les débutants cependant il est plus simple d'obtenir un IDE, par exemple CodeBlokcs ou XCode. 

Maintenant que vous avez le nécessaire, commençons par écrire le typique 'Hello, World'. C'est un programme traditionnel quand on commence avec un langage. Ce programme affiche juste une phrase et permet de vérifier que chaque étape fonctionne du début à la fin. On peut donc être sûr que tout l'environnement de développement est opérationnel.

## Hello world en C

```C
#include <stdio.h>

int main(void)
{
    printf("hello, world\n");
    return 0;
}
```

Observons ce programme ligne à ligne

D'abord nous avons `#include`:
```C
#include <stdio.h> // C'est ce que nous appelons les directives de pré-processing
```
Cette instruction permet de signaler au compileur que nous utilisons un fichier de header (ou fichier d'entête). Un fichier d'entête contient du code source additionnel que nous pouvons utiliser. Nous utilisons ici `<stdio.h>` qui contient des fonctions que nous appelerons "d'entrée/sortie" (input/output), et que celles ci sont standards (std). Nous y reviendrons plus tard. Pour l'instant gardons juste en tête que nous pouvons importer des collections de fonctions.

```C
int main(void)
{
}
```
Ce code déclare la fonction principale. La fonction "main" est spéciale, car c'est automatiquement la fonction qui sera appelée au démarrage du programme. S'il n'y a pas cette fonction dans votre programme, celui-ci ne peut pas s'exécuter et ne compilera pas.

Débuter cette déclaration par `int` indique que cette fonction une fois exécutée retournera une valeur entière (integer) une fois la fonction finie. C'est ce que nous appelerons la valeur de sortie. Par convention, nous retournerons 0.

Ensuite est le `main`. Il s'agit du nom de la fonction, et comme nous l'avons vu plus tôt, il est important d'avoir une fonction `main`. Ce `main` est suivi par `(void)`. Ceci indique au compilateur que cette fonction ne prend pas de paramètre, ce qui veut dire que nous n'avons pas de valeur d'entrée.

Ca peut sembler un peu étrange pour l'instant, mais nous en apprendrons plus sur les fonctions plus tard. Pour l'instant, souvenons nous juste que le `main` est requis pour votre programme, que celui ci ne prend pas d'entrée, et qu'il nous donne un entier en sortie.

Pour finir, nous avons les accolades : `{` et `}`. Dans un programme en C, elles signifient le début et la fin d'une fonction. Tout ce qui sera entre elles seront dans la fonction.

Voyons maintenant le coeur du programme (et de notre fonction) :

```C
    printf("Hello, World!\n");
```

`printf` est une fonction qui prend du texte et l'imprime à l'ecran. Les parenthèses indiquent quelle information nous voulons transmettre à la fonction `printf` pour qu'elle l'affiche. Nous indiquons que c'est une chaine de caractère en l'entourant de guillemets "comme ça".

Observons aussi le \n que nous voyons à la fin de cette chaine de caractères : on indique ici à la fonction `printf` de passer à la ligne. C'est ce que nous appelerons un "newline". C'est le caractère qui s'imprime de façon invisible lorsque nous appuyons sur "entrée" sur un clavier.

Finalement, l'appel à printf() termine par un point virgule (`;`). On indique ici au compilateur que la ligne de code est finie. Sans cet indicateur, le compilateur ne saurais pas ou s'arrête et ou commence une nouvelle ligne de code.
Le programme fini avec le mot clef `return`
```C
return 0;
```
Ici on indique que la fonction est finie et qu'il faut envoyer la valeur 0 en sortie, à celui qui l'a exécuté, peu importe de qui ou quoi il s'agit. Quand on fait tourner un programme sur un ordinateur la valeur de sortie est importante car elle permet d'indiquer si le programme s'est bien executé ou s'il a fini en erreur.

Comme précédemment, on termine la ligne avec un point virgule pour dire que la ligne de code est finie.

## Compilation et execution
Vous pouvez sauvegarder votre fichier hello world où vous voulez, mais il doit porter l'extension .c. Dans cette exemple le fichier a été nommé "helloworld.c", car c'est un nom clair avec une extension .c.
Il y a plusieurs façon de compiler et d'executer votre code, en voici quelques unes :

#### Compilation et execution en ligne de commande avec gcc
Si vous êtes sur Mac ou GNU+Linux, vous avez déjà GCC installé.

Pour executer votre programme, vous avez besoin de le compiler. Pour le compiler depuis la ligne de commande avec gcc, executez la ligne de commande suivante : 
```shell
gcc -o helloworld ./helloworld.c
```
`gcc` est le compilateur C Gnu. Il accepte les fichiers C en entrée.

`-o helloworld` indique qu'en sortie (output, donc -o) nous voulons un fichier qui s'appelle helloword (sans extension, car c'est un executable). Si vous n'êtes pas à l'aise avec la ligne de commande, passez par un IDE pour commencer plus simplement.

Une fois que vous l'avez compilé, vous pouvez l'executer simplement avec : 
```shell
./helloworld
```

Si tout s'est bien passé, vous devriez voir "Hello, World!" s'afficher à l'écran !

#### Compilation et execution en C avec CodeBlocks
<a href='http://www.codeblocks.org/downloads/26' target='_blank' rel='nofollow'>Codeblocks peut-être téléchargé ici.</a>
Créez un nouveau programme en faisant `file` -> `new` -> `file`, choisissez C/C++ source, et enfin C comme langage, copiez ensuite votre contenu du helloworld.c. Compilez et executez avec `Build` -> `Build and Run`.


#### Compilation et execution en C avec Xcode
[Xcode can be downloaded from here.](https://developer.apple.com/xcode/)

#### Comilation en C avec Dev-C++
<a href='https://sourceforge.net/projects/orwelldevcpp/' target='_blank' rel='nofollow'>Dev-C++ peut être téléchargé ici.</a>
Faites un nouveau programme en faisant `file` -> `new` -> `Source File`, copiez le contenu du helloworld.c que nous avons vu plus tôt et sauvez le fichier avec `file` -> `save As`  puis entrez hello.c, et enfin compilez et executez avec `Execute` -> `Compile & Run`.

# Avant d'aller plus loin

## En revue
* C est le BA-ba des languages de programmation.
* C a été utilisé pour implémenter le noyau linux
* C est utile car il est léger, rapide et a accès a des opérations de bas niveau. Grâce à cela, il est utilisé énormement en robotique, pour la programmation de système d'exploitation et dans l'electronique. Par contre il n'est plus très utilisé pour des choses comme des sites webs.
* Un programme en C possède quelques parties critiques :
 * Des inclusions, qui permettent d'obtenir des accès.
 * Une fonction main, qui est la première appelée et qui est nécessaire pour compiler.
 * Des instructions dans la fonction main qui vont être executée, et un return qui ferme le programme et renvoie une valeur à l'appelant.
* C a besoin d'être compilé pour être executé.
* C peut être utilisé pour accéder à des adresses materielles et importer des types qui correspondent à des interfaces imposées par du materiel externe, avec un coup d'execution faible.
#### More information:

* [C Programming Tutorials.](https://www.tutorialspoint.com/cprogramming/)

