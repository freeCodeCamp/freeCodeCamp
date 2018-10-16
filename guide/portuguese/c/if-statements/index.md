---
title: Logical Operators and If Statements
localeTitle: Operadores lógicos e se declarações
---
# Se as declarações em C

A capacidade de alterar o comportamento de uma parte do código baseada em determinadas informações no ambiente é conhecida como fluxo de código condicional. Às vezes, você deseja que seu código seja executado de acordo com determinadas condições. Em tal situação, podemos usar instruções If. Também é conhecida como declaração de tomada de decisão, uma vez que toma a decisão com base em determinada expressão (ou em determinada condição). Se a expressão for avaliada como verdadeira, o bloco de código dentro da instrução 'if' será executado. Se a expressão for avaliada como false, o primeiro conjunto de códigos após o término da instrução 'if' (após a chave de fechamento) será executado.Uma expressão é uma expressão que possui operadores relacionais e / ou lógicos operando em variáveis ​​booleanas. . Uma expressão é avaliada como verdadeira ou falsa.

## Sintaxe da _instrução if_
```
if (testExpression) { 
   // statements 
 } 
```

## Um exemplo simples

Vamos ver um exemplo disso em ação:

```C
#include <stdio.h> 
 #include <stdbool.h> 
 
 int main(void) { 
    if(true) { 
        printf("Statement is True!\n"); 
    } 
 
    return 0; 
 } 
```

```
output: 
 Statement is True! 
```

Assim como helloworld.c, stdio.h foi incluído. Novo neste programa é stdbool.h, que é a biblioteca booleana padrão - contém código que nos dá acesso a 'true' e 'false'.

Outra novidade no exemplo acima é a declaração 'if'. Se a declaração dentro dos parênteses for verdadeira, o código dentro dos colchetes da instrução if será executado. No caso deste exemplo, true é true, então o código executará a função `printf` .

## If-else

Na instrução 'If-else', Se a instrução dentro do parêntese for verdadeira, o código dentro dos colchetes da declaração 'if' será executado e se a instrução dentro do parêntese for falsa, o código dentro dos colchetes do ' else 'declaração será executada.

Claro, esse exemplo não foi muito útil, porque a verdade é sempre verdadeira. Aqui está outro que é um pouco mais prático:

```C
#include <stdio.h> 
 
 int main(void) { 
    int n = 2; 
 
    if(n == 3) { // comparing n with 3 
        printf("Statement is True!\n"); 
    } 
    else { // if first condition is not true, then comes to this block of code. 
        printf("Statement is False!\n"); 
    } 
 
    return 0; 
 } 
```

```
output: 
 Statement is False! 
```

Existem algumas coisas importantes que são diferentes aqui. Primeiro, o `stdbool.h` não foi incluído. Tudo bem, porque `true` e `false` não estão sendo usadas. Em C, temos declarações que são tratadas como verdadeiras e falsas, embora as palavras verdadeiro ou falso não estejam envolvidas na operação.

Dentro do parêntese da instrução if é algo novo também: `n == 3` . Esta é uma comparação entre `n` e o número 3. `==` é o operador de comparação e é uma das várias operações de comparação em C.

## Aninhado if-else

A instrução if-else permite que uma escolha seja feita entre duas alternativas possíveis. Às vezes, uma escolha deve ser feita entre mais de duas possibilidades. Por exemplo, a função de sinal em matemática retorna -1 se o argumento for menor que zero, retorna +1 se o argumento for maior que zero e retorna zero se o argumento for zero. A seguinte instrução C ++ implementa essa função:

```C
if (x < 0) 
   sign = -1; 
 else 
   if (x == 0) 
      sign = 0; 
   else 
      sign = 1; 
```

Esta é uma declaração if-else em que a instrução seguinte a else é ela própria uma instrução if-else. Se x for menor que zero, o sinal será definido como -1, no entanto, se não for menor que zero, a instrução após o else será executada. Nesse caso, se x for igual a zero, o sinal será definido como zero e, caso contrário, será definido como 1. Os programadores novatos geralmente usam uma sequência de instruções if em vez de usar uma instrução if-else aninhada. Ou seja, eles escrevem o acima na forma logicamente equivalente:

```C
if (x < 0) 
   sign = -1; 
 if (x == 0) 
   sign = 0; 
 if (x > 0) 
   sign = 1; 
```

Esta versão não é recomendada, pois não deixa claro que apenas uma das instruções de atribuição será executada para um determinado valor de x. Também é ineficiente, pois todas as três condições são sempre testadas.

## Operadores de Comparação

Nome do Operador | Uso | Resultado do Operador ---------------------------- |: ---------: | --------- -------- Igual a | a == b | Verdadeiro se a é igual a b, falso caso contrário Não é igual a | a! = b | Verdadeiro se a não é igual a b, falso caso contrário Maior que | a> b | Verdadeiro se a for maior que b, falso de outra forma Maior que ou igual a | a> = b | Verdadeiro se a for maior que ou igual a b, falso caso contrário Menos que | a <b | Verdadeiro se a for menor que b, falso de outra forma Menor ou igual a | a <= b | Verdadeiro se a for menor ou igual a b, falso de outra forma

Esse exemplo também tem uma nova palavra: `else` . O código dentro do bloco `else` é executado apenas se o código dentro do `if` não for executado.

Há muito o que podemos fazer com todos esses operadores! Considere o seguinte, onde usaremos uma instrução if-else:

```C
#include <stdio.h> 
 
 int main(void) { 
    int n = 5; 
 
    if(n == 5) { 
        printf("n is equal to 5!\n"); 
    } 
    else if (n > 5) { 
        printf("n is greater than 5!\n"); 
    } 
 
    return 0; 
 } 
```

```
output: 
 n is equal to 5! 
```

A instrução if-else possui um 'else if' anexado a ela. Esse código é executado se a condição dentro do if anterior era falsa, mas adiciona uma condição dentro de seus próprios parênteses que deve ser verdadeira antes que o código seja executado.

## Operadores lógicos

Claro, podemos querer que algo aconteça se não for verdade, ou se isso e alguma outra coisa forem verdade. Para isso, temos operadores lógicos:! para não, && para e, e || para ou. Vamos dar uma olhada nisso em ação:

```C
#include <stfio.h> 
 
 int main(void) { 
    int n = 5; 
    int m = 10; 
 
    if(n > m || n == 15) { 
        printf("Either n is greater than m, or n is equal to 15\n"); 
    } 
    else if( n == 5 && m == 10 ) { 
        printf("n is equal to 5 and m is equal to 10!\n"); 
    } 
    else if ( !(n == 6)) { 
        printf("It is not true that n is equal to 6!\n"); 
    } 
    else if (n > 5) { 
        printf("n is greater than 5!\n"); 
    } 
 
    return 0; 
 } 
```

```
output: 
 n is equal to 5 and m is equal to 10! 
```

Aqui está o primeiro conjunto de parênteses: `n > m || n == 5` . Isso será verdadeiro se n for maior que m, ou se n for igual a 5. n não for maior que m, mas n for igual a 5. Porque uma dessas coisas é verdadeira, e elas são unidas por um ou, isso declaração será verdadeira e o código dentro será impresso.

Como o código anterior foi executado, ele não verificará as outras declarações, que só serão verificadas se as anteriores não forem verificadas. Apenas para o exercício, no entanto, considere o que o resto do código estaria verificando. `n == 5 && m == 10` será verdadeiro se n for igual a 5 e m for igual a 10. Isto é verdade, mas se n for 6 não será mais verdadeiro e o código dentro disso não será executado .

`!(n == 6)` usa parênteses para tornar a operação mais óbvia. Assim como em matemática, parênteses podem ser usados ​​para ordem de operações: coisas dentro dos parênteses serão executadas antes de coisas que não estão entre parênteses. Portanto, neste caso, `n == 6` será avaliado e é falso. O `!` , 'not', inverte isto de false para true, então esta operação retorna true. Como antes, no entanto, ele não será executado apenas porque uma das instruções anteriores era verdadeira e que isso é anexado já teria sido executado.

Finalmente, `n > 5` avaliado como verdadeiro? A resposta é não, porque n _é_ 5 e, portanto, não é maior que 5. Como resultado, esse código não será avaliado como verdadeiro. Para que essa avaliação seja verdadeira, o operador `>=` deve ser usado.

## Um detalhe sobre comparações C

Anteriormente você leu que as comparações estão verificando se algo é verdadeiro ou falso, mas isso é realmente apenas a metade da verdade. Lembre-se que C é sobre ser leve e próximo ao hardware, é fácil verificar se algo é 0, e qualquer outra coisa requer mais trabalho. Por causa disso, o que as comparações estão realmente fazendo é verificar se algo é falso, que é atribuído o valor 0, ou verificar se não é falso (qualquer outro valor).

Como resultado, esta declaração if é verdadeira e válida:

```C
if(12452) { 
    printf("This is true!\n") 
 } 
```

Por design, 0 é falso e, por convenção, 1 é verdadeiro. De fato, aqui está uma olhada na biblioteca `stdbool.h` descrita anteriormente:

```C
#define false   0 
 #define true    1 
```

Na verdade, há um pouco mais nisso, mas essa é a parte que faz todo o trabalho.

Essas duas linhas de código informam ao compilador que a palavra 'false' deve ser substituída por '0', e a palavra 'true' deve ser substituída por '1'. `stdbool.h` também tem algumas instruções de documentação e compilador que serão discutidas mais tarde, mas essas duas linhas são tudo o que realmente existe.

# Dicas e truques

Considere o código abaixo:

```C
#include <stdio.h> 
 
 int main() { 
    int i=3; 
 
    if(i=4) { 
      printf("This block is executed"); 
    } 
    else { 
      printf("NO! I am boss"); 
    } 
 } 
```

Qual será o resultado? "NÃO! Eu sou chefe"? Se você está adivinhando esta saída, então você está errado. Por quê isso aconteceu? porque na instrução if você usou "=" em vez de "==". "==" é comparador.

Ele irá comparar entre duas variáveis, mas "=" é um operador de atribuição quando dissemos i = 4, simplesmente atribuímos o valor 4 ao inteiro i e, como em "C", todo valor NON-ZERO é verdadeiro if (i = 4) é uma declaração verdadeira e instruções sob isso serão executadas

# Antes de você ir ...

## Uma revisão

*   Se as instruções 'if' verificam se a expressão é verdadeira, então ele executa o código dentro das chaves.
*   'else' pode ser adicionado ao final de um 'if' e será executado somente se a instrução if (s) anterior for falsa.
*   'else if' também pode ser adicionado ao final de um 'if' e será executado somente se a instrução if (s) anterior for falsa.
*   Tudo em um computador é representado por números, portanto, toda comparação em C pode ser feita tratando valores como números - até mesmo verdadeiros, falsos e caracteres.
*   Há um monte de operadores de comparação:
*   \== é igual a
*   ! = não é igual a
*   \> é maior que
*   <é menor que
*   \> = é menor ou igual a
*   <= é menor ou igual a
*   Também temos alguns operadores lógicos, que nos permitem encadear operações lógicas:
*   ! chama-se NOT operator-Inverte o estado do operando
*   && é chamado AND operator-Retorna true quando ambas as condições são verdadeiras
*   || é chamado OU operador-Retorna verdadeiro quando pelo menos uma das condições é verdadeira