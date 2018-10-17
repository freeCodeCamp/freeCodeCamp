---
title: Clean Code Guidelines
localeTitle: Diretrizes de código limpas
---
# Diretrizes de código limpas

Ao codificar, o estilo de codificação que você segue pode ser muito importante. Especialmente quando você está trabalhando com uma equipe ou planeja compartilhar código. A maioria dessas diretrizes é padrão e pode ser aplicada à maioria das linguagens de programação, no entanto, aqui você tem aplicativos e snippets com código c ++, para que você possa se familiarizar com isso mais facilmente. Lembre-se de que essas são apenas recomendações para obter clareza, o que pode ser uma preferência pessoal, portanto, siga estas dicas em conta, mas não os leve à letra. Às vezes, quebrar algumas dessas regras pode levar a um código mais limpo.

## Use bons nomes de variáveis ​​e faça comentários

Certifique-se de criar bons nomes de variáveis, por exemplo, se você estiver criando um jogo, evite usar a variável "a" use algo como "p1" referindo-se ao player 1. A [notação húngara](https://en.wikipedia.org/wiki/Hungarian_notation) é comumente distribuída e pode dar algumas orientações para declarar variáveis.

Além disso, por favor, use comentários, eu não estou nem brincando, apenas tente ler alguns projetos antigos que você fez sem comentários ... agora imagine ser outra pessoa que nem mesmo o codificou.

## Variáveis ​​globais

As variáveis ​​globais podem ser fáceis de usar e, com pouco código, podem parecer uma ótima solução. Mas, quando o código fica cada vez maior, fica mais difícil saber quando estão sendo usados.

Em vez de usar variáveis ​​globais, você poderia usar variáveis ​​declaradas em funções que podem ajudá-lo a informar quais valores estão sendo passados e identificar erros mais rapidamente.

```cpp
#include <iostream> 
 using namespace std; 
 
 // Global variables are declared outside functions 
 int cucumber; // global variable "cucumber" 
```

## Usando goto, continue, etc.

Esta é uma discussão usual entre os programadores, assim como as variáveis ​​globais, esses tipos de declarações são geralmente consideradas más práticas. Eles são considerados ruins porque levam ao ["código spaguetti"](https://en.wikipedia.org/wiki/Spaghetti_code) . Quando programamos, queremos um fluxo linear, ao usar essas instruções, o fluxo é modificado e leva a um fluxo "torcido e emaranhado".

Goto foi usado no passado quando, enquanto, por, se funciona, no entanto, com a introdução desses programas estruturados foi criado. Em geral, evite usar o goto, a menos que tenha certeza de que ele tornará seu código mais limpo e mais fácil de ler. Um exemplo pode ser usá-lo em loops aninhados.

O uso de break e continue é praticamente o mesmo. Use-os em switches e tente fazer funções com um único propósito, para que você tenha apenas um ponto de saída.

![img](https://imgs.xkcd.com/comics/goto.png)

## Evite alterar a variável de controle dentro de um loop for

Geralmente há trabalhos em torno disso que parecem mais claros e menos confusos, por exemplo. enquanto loops. Faz:

```cpp
int i=1; 
 while (i <= 5) 
 { 
    if (i == 2) 
        i = 4; 
 
    ++i; 
 } 
```

Ao invés de:

```cpp
for (int i = 1; i <= 5; i++) 
 { 
    if (i == 2) 
    { 
       i = 4; 
    } 
    // Do work 
 } 
```

## Declarar constantes e tipos no topo

Eles geralmente são declarados após as bibliotecas, o que os torna mais próximos e mais fáceis de ler. Para variáveis ​​locais, acontece o mesmo, declare-os no topo (outras pessoas preferem declará-los o mais tarde possível para economizar memória veja: [cplusplus.com](http://www.cplusplus.com/forum/general/33612/)

## Use apenas uma função de retorno no final

Assim como dissemos antes, tendemos a fazer apenas uma entrada e sair para deixar o fluxo mais claro.

## Use chaves até mesmo ao escrever uma linha

Fazê-lo sistematicamente irá ajudá-lo a fazê-lo mais rápido e no caso de você querer mudar o código no futuro, você será capaz de fazê-lo sem preocupações.

Ao invés de:

```cpp
for (int i = 1; i <= 5; i++) 
    //CODE 
```

Faz:

```cpp
for (int i = 1; i <= 5; i++) 
 { 
    //CODE 
 } 
```

## Outras recomendações

*   #### Use para quando você sabe o número de iterações, enquanto e quando você não sabe.
    
*   #### Use const, passe por valor / referência quando adequado. Isso ajudará a economizar memória.
    
*   \#### Escreve const em letras maiúsculas, tipos de dados que começam com T e variáveis ​​em letras minúsculas.
    

```cpp
const int MAX= 100;             //Constant 
 typedef int TVector[MAX];       //Data type 
 TVector vector;                 //Vector 

```