---
title: While-loop
localeTitle: undefined
---
Uma instrução while loop executa repetidamente uma instrução de destino, desde que uma determinada condição seja verdadeira.

Sintaxe: while (condição) { afirmações); }

Um ponto-chave do loop while é que o loop pode não ser executado. Quando a condição é testada e o resultado é falso, o corpo do loop será ignorado e a primeira instrução após o loop while será executada.

Exemplo:

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

Saída:

valor de: 10 valor de um: 11 valor de: 12 valor de: 13 valor de a: 14 valor de: 15 valor de um: 16 valor de: 17 valor de um: 18 valor de um: 19

### Fontes

www.tutorialspoint.com