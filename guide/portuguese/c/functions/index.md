---
title: Functions
localeTitle: Funções
---
# Funções em C

Às vezes, você tem um pedaço de código que precisa ser usado várias vezes, mas em horários e locais diferentes em seu código. Você pode copiá-lo e colá-lo várias vezes, mas essa não é uma ótima solução: seu tamanho de arquivo acaba sendo maior, seu código é mais difícil de depurar e seu código é mais difícil de ler. Em vez disso, use uma função: funções são como mini-programas que existem dentro do seu código. Você pode passar variáveis ​​para usar, e eles podem retornar dados.

## Um exemplo

Aqui está um exemplo simples de uma função que divide dois números. Não é muito útil porque temos `/` , mas mostra as diferentes partes de uma função.

```C
#include <stdio.h> 
 
 int divides(int a, int b) { 
    return a / b; 
 } 
 
 int main(void) { 
    int first = 5; 
    int second = 10; //MUST NOT BE ZERO; 
 
    int result = divides(first, second); 
 
    printf("first divided by second is %i\n", result); 
 
    return 0; 
 } 
```

Observe que, como `main` , as `divides` têm um formato similar. Isso é porque `main` também é uma função - é apenas especial porque C procura primeiro. `divides` também vem antes do `main` . Isso é importante porque as chamadas `main` `divides` . Chamar uma função significa que seu código está sendo usado. O código deve ser compilado antes de ser usado, e C compila linha por linha a partir do topo, então para que uma função seja chamada, ela deve ser escrita antes de ser chamada como neste exemplo. Se `divides` vieram depois de `main` , ele falharia porque o compilador não sabe que as `divides` ainda existem. Você também pode usar um protótipo de função antes de main para permitir que você coloque `divides` após main. Um protótipo de função é idêntico à função com as mesmas variáveis ​​e tipo de retorno, exceto que os colchetes são omitidos e substituídos por um ponto-e-vírgula da seguinte forma:

```C
int divides(int a, int b); 
```

Observe também que as `divides` e `main` não estão compartilhando colchetes e não estão nos colchetes um do outro. Eles devem ser separados, mesmo que um chame o outro.

Com isso em mente, vamos examinar a primeira linha de uma função em nossa próxima seção, intitulada:

## Quebrando a declaração da função

```C
int divides(int a, int b) 
```

A declaração da função começa com um tipo de dados, que neste caso é `int` . Seja qual for o tipo de dados que você deseja que a função retorne, você deve colocar aqui. Você pode ter o retorno como qualquer tipo de dados, ou pode não haver nenhum tipo de dado colocando aqui `void` .

Em seguida é o nome da função. Sempre que você quiser chamar a função, este é o nome que você usará. Tente fazer com que seja algo descritivo, para que você possa identificar facilmente o que faz.

Depois do nome vem um par de parênteses. Nesses parênteses, vão os parâmetros da nossa função, que são as variáveis ​​que essa função tomará e usará quando o código for executado. Nesse caso, existem dois. Ambos são o tipo de dados `int` e serão denominados `a` e `b` . Idealmente, haveria nomes melhores para usar aqui, mas você descobrirá que, para métodos simples e rápidos, nomes de variáveis ​​temporários são usados ​​com frequência.

Agora vamos dar uma olhada no que está dentro dos colchetes:

```C
return a / b; 
```

Isto é bastante simples, porque esta é uma função tão simples. `a` é dividido por `b` e esse valor é retornado. Você viu `return` antes na função `main` , mas agora, em vez de encerrar nosso programa, ele finaliza o método e fornece o valor para qualquer nome que tenha sido chamado.

Então, para recapitular o que essa função faz, obtém dois inteiros, os divide e os devolve ao que quer que seja chamado.

### Parâmetros de uma função

Parâmetros são usados ​​para passar argumentos para a função. Seus são dois tipos de parâmetros: O parâmetro escrito na definição de função é chamado de "Parâmetro formal". O parâmetro escrito na chamada de função é chamado de “parâmetro real”. Eles também são conhecidos como argumentos. Eles são passados ​​para a definição da função e uma cópia é criada na forma de parâmetros formais.

## Um exemplo mais complexo

Aquela era uma função de linha única. Você os verá quando houver uma operação bem simples que precise ser executada repetidamente, ou uma operação que acabe sendo uma linha longa. Ao tornar isso uma função, o código acaba sendo mais legível e gerenciável.

Dito isto, a maioria das funções não será uma única linha de código. Vamos dar uma olhada em outro exemplo, um pouco mais complexo, que escolhe o maior dos dois números.

```C
int choose_bigger_int(int a, int b) { 
    if(a > b) 
        return a; 
 
    if(b > a) 
        return b; 
 
    return a; 
 } 
```

Assim como antes, a função vai retornar um inteiro e recebe dois inteiros. Nada de novo para ver lá.

Este código começa com uma instrução if que verifica se `a` é maior que `b` . Caso isso aconteça, ele retornará `a` . Se isso for feito, a função termina aqui - o restante do código não é avaliado. Se esta declaração de retorno não for atingida, no entanto, a próxima instrução if será avaliada. Se for verdade, `b` será retornado e a função termina aqui.

Com isso, as condições para um ser maior que b, e b sendo maior que um, foram contabilizadas. No entanto, se a for igual a b, a função ainda não terá retornado nada. Por essa razão, retornamos a (a é igual a b, então poderíamos retornar também).

## Uma palavra sobre 'escopo'

O escopo é uma coisa para estar ciente. Refere-se às áreas em seu código onde uma variável é acessível. Quando você passa uma variável para uma função, a função obtém sua própria cópia para usar. Isso significa que o ajuste da variável na função não a ajustará em nenhum outro lugar. Da mesma forma, se você não tiver passado uma variável para uma função, ela não terá e não poderá usá-la.

Você pode ter observado um problema semelhante com coisas como instruções if e qualquer um dos loops. Se você declarar uma variável entre colchetes, ela não estará acessível fora desses colchetes. Isto é verdade para as funções da mesma maneira, mas existem algumas maneiras de contornar isso:

*   Faça uma variável global declarando-a fora de qualquer função
*   Isso torna seu código mais confuso e geralmente não é recomendado. Deve ser evitado sempre que possível
*   Use ponteiros, sobre os quais você lerá a seguir
*   Isso pode tornar seu código mais difícil de ler e depurar
*   Passe em suas funções como você deveria
*   Esta é a melhor maneira de fazer isso, se isso for uma opção

Idealmente, você sempre passará para as suas funções como parâmetros, mas nem sempre poderá fazê-lo. Escolher a melhor solução é o seu trabalho como programador.

Recursão em C Quando a função é chamada dentro da mesma função, ela é conhecida como recursão em C. A função que chama a mesma função é conhecida como função recursiva.
```
int factorial (int n) 
 { 
    if ( n < 0) 
        return -1; /*Wrong value*/ 
    if (n == 0) 
        return 1; /*Terminating condition*/ 
    return (n * factorial (n -1)); 
 } 
```

# Antes de você ir ...

## Uma revisão

*   As funções são boas de usar porque tornam seu código mais limpo e mais fácil de depurar.
*   Funções precisam ser declaradas antes de serem chamadas.
*   Funções precisam ter um tipo de dados para retornar - se nada for retornado, use `void` .
*   Funções levam parâmetros para trabalhar - se eles não estão tomando nada, use `void` .
*   `return` termina a função e retorna um valor. Você pode ter vários em uma função, mas assim que você acerta, a função termina aí.
*   Quando você passa uma variável para uma função, ela tem sua própria cópia para usar - mudar alguma coisa em uma função não a altera fora da função.
*   Variáveis ​​declaradas dentro de uma função só são visíveis dentro dessa função, a menos que sejam declaradas estáticas.