---
title: Loops of all kinds
localeTitle: Loops de todos os tipos
---
# Loops de todos os tipos em C

Loops são o que você usa quando você tem um código que você deseja fazer um loop, o que significa que, após a execução, você pode querer que ele faça um loop ao início e seja executado novamente. Existem alguns destes em C.

## Enquanto loops

O mais simples do grupo são loops while. Enquanto loops serão executados enquanto a condição dentro dos parênteses for verdadeira. Eles devem ser usados ​​quando você quer que algo aconteça até que uma determinada condição ocorra.

### Sintaxe
```
while(condition) { 
   statement(s); 
 } 
```

Aqui está um exemplo:

```C
#include <stdio.h> 
 
 int main(void) { 
    int my_number = 0; 
 
    while(my_number != 10){ 
        ++my_number; 
    } 
 
    printf("my_number = %i", my_number); 
 
    return 0; 
 } 
```

Enquanto a declaração dentro do loop while for verdadeira, o conteúdo dentro dos colchetes será executado. Quando o programa atinge o `while(my_number)` , ele verifica a instrução dentro do parêntese. Se essa afirmação for falsa, ela não executará o loop while. Em vez disso, ele ignorará o código entre os dois colchetes e continuará de onde parou.

Se a afirmação for verdadeira, o código dentro dos colchetes será executado. Depois que o código dentro dos colchetes for executado, a instrução dentro dos parênteses será verificada novamente. Assim como antes, se a afirmação for verdadeira, o código será executado, se for falso, o código será ignorado.

Algo em que você pode se deparar ao jogar com este ou qualquer outro loop é a idéia de um loop infinito - um loop que irá rodar uma quantidade infinita de vezes, porque não há nada para pará-lo. Às vezes isso pode acontecer de propósito:

```C
while(1) { 
    printf("This will get printed forever unless the program is stopped!"); 
 } 
```

Claro, isso também pode acontecer acidentalmente. Aqui está o mesmo código de antes, mas com uma diferença sutil que o transforma em um loop infinito:

```C
#include <stdio.h> 
 
 int main(void) { 
    int my_number = 11; 
 
    while(my_number != 10){ 
        ++my_number; 
    } 
 
    printf("my_number = %i", my_number); 
 
    return 0; 
 } 
```

Quando este loop while é avaliado, `my_number` será verificado para ver se não é 10. Não é, porque ele foi inicializado em 11, então o código dentro do loop while será executado e `my_number` será 12. 12 não igual a 10, de modo que o código dentro do loop while será executado e `my_number` será 13. Isso continuará funcionando para sempre porque essa condição nunca se tornará false - a única maneira de parar é que o programa seja forçado a parar de executar. Este é um exemplo de um loop infinito, porque se deixado sozinho, ele será executado uma quantidade infinita de vezes.

## Loops Do-while

Os loops Do-while são uma versão menos usada de um loop while. Embora os loops comecem com uma avaliação, se essa avaliação for falsa, o código dentro dos colchetes não será executado. Com um loop do-while, entretanto, o código dentro dos colchetes é executado uma vez, então a avaliação é executada para ver se deve ser executada novamente.

### Sintaxe
```
do { 
   statement(s); 
 } while( condition ); 
```

Aqui está uma olhada nisso:

```C
#include <stdio.h> 
 
 int main(void){ 
    int a = 0; 
 
    do { 
        a++ 
    } while(a == -123); 
 
    printf("%i\n", a); 
 
    return 0; 
 } 
```

Se este fosse um loop while, o código dentro dos colchetes nunca seria executado porque essa condição não é verdadeira quando a avaliação é executada. No entanto, como esse é um loop do-while, o código será executado uma vez e, em seguida, a avaliação será feita para ver se deve ser feito novamente. Os loops Do-while são úteis quando você sabe que quer que algo seja feito uma vez, mas pode ser necessário executá-lo mais vezes depois disso.

## Para loops

For loops são para quando queremos que algo rode um número definido de vezes.

### Sintaxe
```
for(initialisation; condition; changer) 
 { 
   statement(s); 
 } 
```

Aqui está um exemplo disso:

```C
#include <stdio.h> 
 
 int main(void) { 
    int a = 4; 
    int b = 2; 
    int result = 0; 
 
    for(int count = 0; count != b; count++) { 
        result = result + a; 
    } 
 
    printf("a times b is %i\n", result); 
 
    return 0; 
 } 
```

A multiplicação é apenas uma adição repetida, portanto, isso está sendo feito em `a` , `b` vezes. Vamos dar uma olhada no bit `for` em particular:

```C
for(int count = 0; count != b; count++) 
```

Ao contrário do loop for, há três coisas em nossos parênteses separadas por ponto e vírgula. A primeira seção é para inicialização e é chamada de 'inicialização': permite que você crie uma nova variável e defina um valor, ou defina uma variável existente como um valor diferente, ou você não pode definir nada e apenas colocar uma variável. ponto e vírgula para baixo.

A próxima seção é uma condição booleana que será verificada como verdadeira ou falsa, assim como o nosso loop while. É referido como uma 'condição', porque é a condição que será verificada antes de iniciar um loop.

A seção final é chamada de 'incremento / decremento'. Sua tarefa é executar alguma operação em cada loop - geralmente adicionando ou subtraindo a variável inicial - depois que o código dentro dos colchetes tiver sido executado. Neste caso, é apenas adicionar um à contagem. Esta é a maneira mais comum de usar o incremento, porque permite que você conte quantas vezes você executou um loop for.

### Comparação de sintaxe
```
main() 
 { 
  int i = 1; 
  while(i<=5) 
  { 
     printf(“While”); 
     i++; 
   } 
  getch(); 
 } 
 
 
 main() 
 { 
  int i = 1; 
  do 
  { 
     printf(“do-while”); 
     i++; 
   } while(i<=5); 
  getch(); 
 
 } 
 
 
 main() 
 { 
  int i 
  for(i=1;i<=5;i++) 
  { 
     printf(“for”); 
   } 
  getch(); 
 } 
```

# Declarações de controle de loop

As instruções de controle de loop mudam a execução de sua sequência normal. Quando a execução deixa um escopo, todos os objetos automáticos que foram criados nesse escopo são destruídos.

C suporta as seguintes instruções de controle:

#### 1\. Declaração de quebra

Encerra a instrução **loop** ou **switch** e transfere a execução para a instrução imediatamente após o loop ou comutador.

#### 2\. Declaração de continuação

Faz com que o loop pule o restante de seu corpo e repita imediatamente sua condição antes de reiterar.

#### 3\. declaração Goto

Transfere o controle para a instrução rotulada.

# Algumas curiosidades divertidas e úteis

## Loop infinito com laços

Reserve um momento para considerar o que este código fará:

```C
for(;;){ 
    printf("hello, world! \n"); 
 } 
 
 while("Free Code Camp"){ 
    printf("hello, world! \n"); 
 } 
```

Não há nada na seção de inicialização, então nada foi inicializado. Tudo bem, e isso é feito às vezes porque nem sempre você quer ou precisa inicializar nada.

Em seguida é a condição, que está em branco. Isso é um pouco estranho. Isso significa que nenhuma condição será testada, por isso nunca será falsa, portanto, ela será executada no loop, executará a reflexão tardia (que é não fazer nada) e, em seguida, verificará a condição novamente, o que fará com que seja executada novamente. Como você provavelmente percebeu, este é um loop infinito. Acontece que isso é realmente útil. Ao criar um loop infinito, o método de fazer `while(1)` é perfeitamente legítimo, mas realiza uma comparação a cada vez. `for(;;)` , por outro lado, não. Por esse motivo, `for(;;)` tem um uso legítimo em que é um cabelo mais eficiente do que outros métodos de loop infinito. Felizmente, muitos compiladores cuidarão disso para você.

O loop no segundo código enquanto ("Free Code Camp") também será executado infinitamente. O motivo é porque C considera qualquer valor diferente de zero como verdadeiro e, portanto, executará o loop infinitamente.

## Não usando parênteses

Ao longo desta página, você leu que o código "entre parênteses" é o que é executado, e isso é mais verdadeiro. No entanto, e se não houver colchetes?

```C
while(true) 
    printf("hello, world! \n"); 
```

Em casos como esse, C tratará a próxima linha como o único conteúdo que precisa ser colocado em loop. C ignora o espaço em branco, de modo que o recuo é apenas lá para maior clareza. Somente essa linha será tratada como se estivesse no loop, e essa é uma propriedade que, se declarações, loops e loops while compartilharem. Como o espaço em branco é ignorado, o posicionamento não importa: ele pode estar na mesma linha, na próxima linha ou em até 300 linhas e dois espaços, desde que não haja outras linhas de código entre elas. Esse recurso pode tornar seu código um pouco mais limpo quando você tem apenas uma linha de código para executar em uma instrução.

## Ponto e vírgula em vez de parênteses

Se não houver colchetes, o compilador examinará apenas a próxima linha e terá esse o conteúdo do loop. Os pontos-e-vírgulas dizem ao compilador que uma linha acabou. Com essas coisas combinadas, podemos ter C esperando até que algo se torne verdade. Digamos que temos um método chamado `is_button_pressed` que retorna false se um botão não for pressionado e true se um botão for pressionado:

```C
while(!is_button_pressed()); 
```

Nada acontece neste loop, porque a única linha que vai olhar é um ponto e vírgula. Como resultado, o método `is_button_pressed` será chamado e seu valor de retorno será avaliado. Se o botão não for pressionado e o valor de retorno for falso, o `!` irá invertê-lo para true para que a função seja executada novamente e avaliada novamente. Se o valor de retorno for verdadeiro, o `!` irá invertê-lo para false e o loop while será encerrado.

Isso tem o efeito de colocar uma pausa no seu código. Nesse caso, o código atingiu o loop while e não foi mais adiante. Em vez disso, ele continuou verificando o status do botão a ser alterado. Isso seria útil quando você não quer que nada aconteça até que uma determinada condição seja satisfeita.

# Antes de você ir ...

## Uma revisão

*   Os loops permitem que seu código seja executado mais de uma vez, quando certas condições são atendidas.
*   Há alguns loops disponíveis para nós em C:
*   While loops, o que nos permite executar o código enquanto uma condição é verdadeira
*   Loops Do-while, que executam código e continuam a executá-lo se uma condição for verdadeira
*   Para loops, que executam código enquanto uma condição é verdadeira e nos permitem executar uma operação em cada loop.

## Usando loops para projetar padrões.

#### Exemplo 1: Programa para imprimir meia pirâmide usando \*
```
* 
 * * 
 * * * 
 * * * * 
 * * * * * 
```

**Código fonte**

```c
#include <stdio.h> 
 
 int main() 
 { 
    int i, j, rows; 
 
    printf("Enter number of rows: "); 
    scanf("%d",&rows); 
 
    for(i=1; i<=rows; ++i) 
    { 
        for(j=1; j<=i; ++j) 
        { 
            printf("* "); 
        } 
        printf("\n"); 
    } 
    return 0; 
 } 
```

#### Exemplo 2: Programa para imprimir meia pirâmide usando números
```
1 
 1 2 
 1 2 3 
 1 2 3 4 
 1 2 3 4 5 
```

**Código fonte**

```c
#include <stdio.h> 
 
 int main() 
 { 
    int i, j, rows; 
 
    printf("Enter number of rows: "); 
    scanf("%d",&rows); 
 
    for(i=1; i<=rows; ++i) 
    { 
        for(j=1; j<=i; ++j) 
        { 
            printf("%d ",j); 
        } 
        printf("\n"); 
    } 
    return 0; 
 } 
```

#### Exemplo 3: Programa para imprimir meia pirâmide usando alfabetos
```
A 
 BB 
 CCC 
 DDDD 
 EEEEE 
```

**Código fonte**

```c
#include <stdio.h> 
 
 int main() 
 { 
    int i, j; 
    char input, alphabet = 'A'; 
 
    printf("Enter the uppercase character you want to print in last row: "); 
    scanf("%c",&input); 
 
    for(i=1; i <= (input-'A'+1); ++i) 
    { 
        for(j=1;j<=i;++j) 
        { 
            printf("%c", alphabet); 
        } 
        ++alphabet; 
 
        printf("\n"); 
    } 
    return 0; 
 } 
```

Programas para imprimir meia pirâmide invertida usando \* e números

#### Exemplo 4: meia pirâmide invertida usando \*
```
* * * * * 
 * * * * 
 * * * 
 * * 
 * 
```

**Código fonte**

```c
#include <stdio.h> 
 
 int main() 
 { 
    int i, j, rows; 
 
    printf("Enter number of rows: "); 
    scanf("%d",&rows); 
 
    for(i=rows; i>=1; --i) 
    { 
        for(j=1; j<=i; ++j) 
        { 
            printf("* "); 
        } 
        printf("\n"); 
    } 
 
    return 0; 
 } 
```

#### Exemplo 5: Meia pirâmide invertida usando números
```
1 2 3 4 5 
 1 2 3 4 
 1 2 3 
 1 2 
 1 
```

**Código fonte**

```c
#include <stdio.h> 
 
 int main() 
 { 
    int i, j, rows; 
 
    printf("Enter number of rows: "); 
    scanf("%d",&rows); 
 
    for(i=rows; i>=1; --i) 
    { 
        for(j=1; j<=i; ++j) 
        { 
            printf("%d ",j); 
        } 
        printf("\n"); 
    } 
 
    return 0; 
 } 
```

#### Exemplo 6: Programa para imprimir a pirâmide completa usando \*
```
        * 
      * * * 
    * * * * * 
  * * * * * * * 
 * * * * * * * * * 
```

**Código fonte**

```c
#include <stdio.h> 
 
 int main() 
 { 
    int i, space, rows, k=0; 
 
    printf("Enter number of rows: "); 
    scanf("%d",&rows); 
 
    for(i=1; i<=rows; ++i, k=0) 
    { 
        for(space=1; space<=rows-i; ++space) 
        { 
            printf("  "); 
        } 
 
        while(k != 2*i-1) 
        { 
            printf("* "); 
            ++k; 
        } 
 
        printf("\n"); 
    } 
 
    return 0; 
 } 
```

#### Exemplo 7: Programa para imprimir pirâmide usando números
```
        1 
      2 3 2 
    3 4 5 4 3 
  4 5 6 7 6 5 4 
 5 6 7 8 9 8 7 6 5 
```

**Código fonte**

```c
#include <stdio.h> 
 
 int main() 
 { 
    int i, space, rows, k=0, count = 0, count1 = 0; 
 
    printf("Enter number of rows: "); 
    scanf("%d",&rows); 
 
    for(i=1; i<=rows; ++i) 
    { 
        for(space=1; space <= rows-i; ++space) 
        { 
            printf("  "); 
            ++count; 
        } 
 
        while(k != 2*i-1) 
        { 
            if (count <= rows-1) 
            { 
                printf("%d ", i+k); 
                ++count; 
            } 
            else 
            { 
                ++count1; 
                printf("%d ", (i+k-2*count1)); 
            } 
            ++k; 
        } 
        count1 = count = k = 0; 
 
        printf("\n"); 
    } 
    return 0; 
 } 
```

#### Exemplo 8: Pirâmide completa invertida usando \*
```
* * * * * * * * * 
  * * * * * * * 
    * * * * * 
      * * * 
        * 
```

**Código fonte**

```c
#include<stdio.h> 
 
 int main() 
 { 
    int rows, i, j, space; 
 
    printf("Enter number of rows: "); 
    scanf("%d",&rows); 
 
    for(i=rows; i>=1; --i) 
    { 
        for(space=0; space < rows-i; ++space) 
            printf("  "); 
 
        for(j=i; j <= 2*i-1; ++j) 
            printf("* "); 
 
        for(j=0; j < i-1; ++j) 
            printf("* "); 
 
        printf("\n"); 
    } 
 
    return 0; 
 } 
```

#### Exemplo 9: Imprimir o triângulo de Pascal
```
           1 
         1   1 
       1   2   1 
     1   3   3    1 
   1  4    6   4   1 
 1  5   10   10  5   1 
```

**Código fonte**

```c
#include <stdio.h> 
 
 int main() 
 { 
    int rows, coef = 1, space, i, j; 
 
    printf("Enter number of rows: "); 
    scanf("%d",&rows); 
 
    for(i=0; i<rows; i++) 
    { 
        for(space=1; space <= rows-i; space++) 
            printf("  "); 
 
        for(j=0; j <= i; j++) 
        { 
            if (j==0 || i==0) 
                coef = 1; 
            else 
                coef = coef*(i-j+1)/j; 
 
            printf("%4d", coef); 
        } 
        printf("\n"); 
    } 
 
    return 0; 
 } 
```

#### Exemplo 10: Imprima o Triângulo do Floyd.
```
1 
 2 3 
 4 5 6 
 7 8 9 10 
```

**Código fonte**

```c
#include <stdio.h> 
 
 int main() 
 { 
    int rows, i, j, number= 1; 
 
    printf("Enter number of rows: "); 
    scanf("%d",&rows); 
 
    for(i=1; i <= rows; i++) 
    { 
        for(j=1; j <= i; ++j) 
        { 
            printf("%d ", number); 
            ++number; 
        } 
 
        printf("\n"); 
    } 
 
    return 0; 
 } 

```