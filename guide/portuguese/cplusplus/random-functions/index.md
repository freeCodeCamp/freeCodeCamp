---
title: Random Functions
localeTitle: Funções Aleatórias
---
*   Números aleatórios são uma maneira conveniente de introduzir randomização em seu programa. Por exemplo, se você quiser executar simulações ou jogar, excluir índices aleatórios de uma matriz, etc, então números aleatórios são o caminho a percorrer.
*   O arquivo de cabeçalho a ser incluído para usar números aleatórios em c ++ é `cstdlib` .
*   _Dica profissional: -_ Você pode usar `cpp #include<bits/stdc++.h>` para incluir todas as funções de todos os arquivos de cabeçalho.

Função: - rand ()  
\- Retorna um número pseudo-aleatório (inteiro) de 0 a RAND _MAX. Não aceita argumentos. - RAND_ MAX é o número inteiro máximo permitido. É compilador depedente e geralmente é 2147483647.

Abaixo está um exemplo:

```cpp
#include <cstdlib> 
 #include <iostream> 
 using namespace std; 
 
 int main() { 
  cout << rand() << endl; 
  cout << rand() << endl; 
  cout << rand() << endl; 
  return 0; 
 } 
 
 /* 
 Output:- (Note that the output is random and will differ from what is mentioned here) 
 1804289383 
 846930886 
 1681692777 
 */ 
```

Agora, execute o programa novamente. E de novo. E de novo. O que você vê? A mesma saída é impressa de novo e de novo.

Vamos voltar para a definição da função rand (): -

rand (): - _Retorna um número **pseudo-aleatório** (inteiro) de 0 a RAND\_MAX. Não aceita argumentos._

Então, o que é um número pseudo-aleatório?

*   Como o nome sugere, um número que não é verdadeiramente aleatório é pseudo-aleatório.
*   Os números psuorandomizados não são criptograficamente seguros e são vulneráveis ​​a ataques.
*   No contexto de C ++, o número parece aleatório, mas não verdadeiramente aleatório. A função assume que cada número de 0 a RAND\_MAX é igualmente provável e cospe um número. (Na realidade, este não é o caso, mas está próximo). Por exemplo, o número 5 é usado em quase todos os lugares. Se um número aleatório cospe 5, você pode não achar que o número é de fato aleatório.
*   A função aleatória rand () recebe um número muito grande, aplica módulo por um número primo grande e faz todos os tipos de operações em um número e retorna um valor. Por mais complicado que seja, ainda é possível quebrá-lo.

Como podemos obter um conjunto único de números aleatórios durante toda a execução do programa?

Usamos `void srand(int seed)` ;

*   "Semente" é o nome dado a um número que faz o gerador de seqüência aleatória começar em um ponto de partida diferente toda vez. Isso garante que a função aleatória não cuspa os mesmos valores durante a execução do programa.
*   **É importante invocar apenas o srand call ONCE no início do programa.**
*   Não há necessidade de chamadas repetidas para semear o gerador de números aleatórios (na verdade, isso fará com que seu número seja menos uniforme distribuído).
*   Uma técnica comumente usada é semear o gerador de números aleatórios usando o relógio, já que o relógio fornece uma saída diferente toda vez que você o analisa. Então, para a semente, você pode pegar a saída do tempo e conectá-la ao gerador de números aleatórios.
*   A função time () retornará a hora do computador. Isto é expresso em termos do número de segundos que se passaram desde 1 de janeiro de 1970 (a Época).
*   O tempo de função (NULL) retornará o número de segundos decorridos no tempo do computador.
*   O arquivo de cabeçalho que deve ser incluído para as funções de hora: \`ctime '.

Fragmento de código:

```cpp
#include <ctime> 
 
 srand(time(NULL)); 
 cout << rand(); 
 
 /* 
 Output: (Will differ from computer to computer, and because of the seed, will also differ from time to time, literally. :D) 
 1696269016 
 */ 
```

Isso produz valores diferentes toda vez que o programa é executado.

Bônus: Ajustando o rand () para sua conveniência.

*   Como rand () retorna um número aleatório de 0 a RAND\_MAX, se você quiser um número entre 0 e 8, por exemplo, então -rand ()% 9. Qualquer número módulo 9 retornará um valor de 0 a 8.
    
*   Mais formalmente, se você quiser um número entre L (inclusive) e U (inclusive), você deve fazer `int num = L + rand()%(U-L+1).` Explicação: - rand ()% (UL + 1) retorna um número aleatório (pseudo-aleatório, não esqueça) entre 0 e (UL). Portanto, adicionar L garante que obtemos um valor entre L e U.
    
    Resumo: -
    

1.  int rand (): Retorna um número aleatório entre 0 e RAND\_MAX.
    
2.  void srand (int seed): Usado para semear o gerador de números aleatórios. É suficiente chamar essa função apenas _uma vez_ .
    
    ### Fontes: - [Geração de Números Aleatórios](http://www.math.uaa.alaska.edu/~afkjm/csce211/handouts/RandomFunctions)