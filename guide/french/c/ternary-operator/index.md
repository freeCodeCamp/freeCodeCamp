---
title: Operateur Ternaire
---

## Opérateur ternaire

Les programmeurs utilisent des opérateurs ternaires en C pour effectuer des décisions en remplacement des **if** et **else**.
L'opérateur ternaire est un opérateur qui prend 3 arguments. Le premier argument est la comparaison, le second est le résultat en cas d'évaluation positive (true), et le troisième le résultat en cas d'évaluation négative (false). Vous pouvez penser l'opérateur ternaire comme une syntaxe plus courte d'un if-else.

Voici une simple prise de décision qui utilise un **if** et un **else** :

```c
int a = 10, b = 20, c;

if (a < b) {
    c = a;
}
else {
    c = b;
}

printf("%d", c);
```

Cet exemple montre qu'il faut plus de 10 lignes, mais ce n'est pas nécessaire. Vous pouvez écrire le programme ci-dessus en seulement 3 lignes de code en utilisant un **opérateur ternaire**.

### Syntaxe

`condition ? valeur_si_true : valeur_si_false`

L'expression évalue pour la valeur\_1 si la condition est vraie, et la valeur\_2 autrement.

Voici l'exemple au dessus réécris avec un opérateur ternaire : 

```c
int a = 10, b = 20, c;

c = (a < b) ? a : b;

printf("%d", c);
```

La sortie de l'exemple sera :

```c
10
```

`c` est égal à `a`, parce que la condition `a<b` est vraie.

Ca a l'air simple, non ? Notons que "valeur_si_vrai" et "valeur_si_faux" doivent avoir le même type, et ça ne peut qu'être de simple expressions.

L'opérateur ternaire peut être imbriqué de la même façon qu'un if-else. Voyons ça ensemble :
```c
int a = 1, b = 2, ans;
if (a == 1) {
    if (b == 2) {
        ans = 3;
    } else {
        ans = 5;
    }
} else {
    ans = 0;
}
printf ("%d\n", ans);
```

Voici le code ré-écrit avec des opérateurs ternaires imbriqués :

```c
int a = 1, b = 2, ans;
ans = (a == 1 ? (b == 2 ? 3 : 5) : 0);
printf ("%d\n", ans);
```

La sortie des deux programmes sera:

```c
3
```
