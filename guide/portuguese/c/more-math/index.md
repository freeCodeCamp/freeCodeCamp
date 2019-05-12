---
title: More math
localeTitle: Mais matemática
---
# Mais matemática em C

Ok, então você viu o básico. Há muito mais lá fora em C, então aqui está uma olhada nisso.

## Ordem de operações

Dê uma olhada na seguinte equação:

> 1 + (3-2) \* 5

Se fôssemos simplesmente ler e computar da esquerda para a direita, teríamos 1, somar 3, subtrair 2 e multiplicar por 5, obtendo 10. No entanto, isso negligencia a ordem das operações. Devemos fazer (3-2) primeiro, obtendo 1, depois multiplicar por 5, depois adicionar 1. Isso dá uma resposta de 6.

Assim como em matemática regular, C tem uma ordem de operações. As operações têm precedência e, se uma operação tiver uma precedência maior que a outra, a precedência mais alta será computada primeiro. Usar parênteses pode aumentar essa precedência, assim como na matemática normal.

## Operações Unárias

Operações unárias são operações onde há apenas uma variável. Existem alguns em C.

### Operadores de pós-correção e pré-correção

Existem muitas situações em que você deseja obter um número e subir ou descer em 1. Para essas situações, temos operadores pós-correção e pré-correção:

```C
1: a++; 
 2: ++a; 
 
 3: a--; 
 4: --a; 
```

Ambos os exemplos em 1 e 2 aumentarão o valor de um por um. Ambos os exemplos em 3 e 4 diminuirão o valor de um por um. No entanto, 1 não faz exatamente o mesmo que 2, e 3 não faz exatamente o mesmo que 4. Operadores pré-fixados são chamados assim porque a operação é um prefixo (2 e 4 são nossos operadores de prefixo). Isso age de forma um pouco diferente de nossos operadores pós-correção em 1 e 3. Operadores pré-fixados executam a operação e retornam o valor. Os operadores pós-correção retornam o valor e, em seguida, executam a incremento.

### Unário mais e menos

Na matemática normal a que você está acostumado, você usa um '-' na frente de um número ou variável, e isso torna o número ou a variável negativos. Se o número ou variável já for negativo, torna-se positivo.

C faz a mesma coisa: coloque um `-` na frente de um número ou variável para ter esse efeito, da seguinte forma:

```C
int number = -3; 
 number = -number; 
```

Então o `number` começa como negativo 3, mas depois se torna positivo porque um negativo negativo é positivo.

## Operações bit a bit

Como C é um nível baixo como mencionado anteriormente, você tem acesso aos bits binários individuais (se você optar por aproveitar isso). Existem algumas operações binárias embutidas para nos permitir fazer isso. Para estes exemplos, usaremos `a` e `b` como nossas variáveis. Eles podem ser qualquer tipo de variável, porque todas as variáveis ​​serão representadas em bits, portanto, o tipo exato de dados não importa para eles.

### E

`c = a & b;` irá executar um AND bit a bit. Isto significa que, se o primeiro bit de `a` e o primeiro bit de `b` são ambos 1, o primeiro bit de c será 1, e 0 de outro modo. Se o segundo bit de `a` e `b` forem ambos 1, o segundo bit de c será 1 e 0, caso contrário. Isso continua até que todos os bits tenham sido eliminados.

### OU

`c = a | b;` irá executar um OR bit a bit. O primeiro bit de `c` é 1 se o primeiro bit em `a` ou `b` for 1, o segundo bit for 1 se o segundo bit em `a` ou `b` for 1 e assim por diante.

### NÃO

`b = ~a;` irá definir `b` para o complemento de `a` , significando que qualquer 1 se torna um 0 e qualquer 0 se torna um 1.

### XOR

`c = a ^ b;` irá executar um XOR bit a bit. Isto é um exclusivo ou, significando que o primeiro bit de `c` é 1 se `a` ou `b` é 1, mas não ambos. O segundo bit é 1 se ou é 1, mas não ambos, e assim por diante.

### Mudança

Uma mudança bit a bit levará os bits e os moverá para alguns lugares à esquerda ou à direita. Por exemplo, digamos que temos um conjunto de bits: `101110` . C executa uma mudança aritmética quando muda de bit. Vamos usar uma tabela para deixar isso mais claro:

| Bit | | 1 | 2 | 3 | 4 | 5 | 6 | | ------- | --- | --- | --- | --- | --- | --- | --- | | Antes | | 1 | 0 | 1 | 1 | 1 | 0 | | Durante | 1 | 0 | 1 | 1 | 1 | 0 | | | Depois | | 0 | 1 | 1 | 1 | 0 | 0 |

Esta é uma mudança bitwise aritmética indo para a esquerda. Observe que, no turno deixado, o 1 mais à esquerda, que começou na posição 1, acabou ficando fora do espaço que poderia caber, então foi removido. No turno, uma abertura apareceu à esquerda, então foi preenchida com um 0.

Agora vamos dar uma olhada em um desvio de aritmética certo por um:

| Bit | 1 | 2 | 3 | 4 | 5 | 6 | | | ------- | --- | --- | --- | --- | --- | --- | --- | | Antes | 1 | 0 | 1 | 1 | 1 | 0 | | | Durante | | 1 | 0 | 1 | 1 | 1 | 0 | | Depois | 1 | 1 | 0 | 1 | 1 | 1 | |

Observe que aqui um slot abriu na posição 1, mas em vez de ser preenchido por 0, foi preenchido pelo bit mais significativo. Neste caso, isto é um 1. Se o bit que começou na posição 1 fosse 0, as lacunas teriam sido preenchidas com 0s.

Isso ocorre porque os números no seu computador são representados usando Complemento de Dois, portanto, mudar dessa maneira não torna um número negativo positivo. O complemento de dois vale a pena ler mais se você estiver interessado em saber como os computadores usam o binário para fazer matemática e representar números.

Para executar um turno à esquerda, use o operador `<<` , assim:

```C
c = a << b; 
```

Isto irá deslocar `a` para a esquerda por `b` pedaços, e definir que resultado igual a `c` .

Este exemplo vai deslocar `a` para a direita por `b` pedaços, e definir que resultado igual a `c` .

```C
c = a >> b; 
```

## Operadores de Atribuição Composta

Às vezes você quer aumentar uma variável por um determinado valor. Você poderia fazer isso:

```C
a = a + b; 
```

No entanto, é para isso que servem os operadores de atribuição compostos. Em vez disso, você pode escrever isso, o que faz exatamente a mesma coisa:

```C
a += b; 
```

Isso existe para um monte de outros operadores também. Aqui está uma mesa acessível para você:

O caminho curto | O caminho longo : --------------: |: ------------: `a += b` | `a = a + b` `a -= b` | `a = a - b` `a *= b` | `a = a * b` `a /= b` | `a = a / b` `a %= b` | `a = a % b` `a &= b` | `a = a & b` `a ^= b` | `a = a ^ b` `a <<= b` | `a = a << b` `a >>= b` | `a = a >> b`

Há também `|=` , que não está na mesa porque o `|` personagem quebra a mesa. Ele age como todas essas outras operações, no entanto.

## Fundição

Às vezes você não quer que um número seja um número, ou você quer que um inteiro seja um float, ou algo assim. É para isso que o casting é.

Como você se lembra da discussão da divisão de números inteiros, o exemplo a seguir fornecerá um valor inteiro sem qualquer decimal, porque ambos os números que entram são inteiros:

```C
#include <stdio.h> 
 
 int main(void) { 
    int a = 12; 
    int b = 5; 
 
    printf("a divided by b is %i", a/b); 
 } 
```

No entanto, usando fundição, podemos transformá-los em carros alegóricos usando fundição. Isso permite que eles sejam divididos como flutuantes e a equação retornará um valor flutuante:

```C
#include <stdio.h> 
 
 int main(void) { 
    int a = 12; 
    int b = 5; 
 
    printf("a divided by b is %f", (float) a / b); 
 } 
```

Agora é um ponto flutuante 12 dividido por 5, portanto, isso retorna um número de ponto flutuante que não trunca após a casa decimal.

Para transformar um número em `int` , use `(int)` , para transformá-lo em `double` , use `(double)` e assim por diante.

## Math.h

Então, isso é todo o material built-in, mas apenas como como você pode `#include` stdio e stdbool, você pode incluir uma biblioteca chamada `math.h` . Esta biblioteca tem todos os tipos de funções úteis para todos os tipos de matemática. Vale a pena dar uma leitura à [página da Wikipedia,](https://en.wikipedia.org/wiki/C_mathematical_functions#Overview_of_functions) se você quiser a lista completa de funções. Aqui está um exemplo de como usar o `abs` , que é o primeiro da lista:

```C
a = abs(-1); 
```

`abs` calcula o valor absoluto do valor passado para ele. Neste caso, ele recebe -1, então ele irá transformar isso em 1, e `a` será igual a 1. Há muito mais para dar muito mais funcionalidade, e é assim que você será capaz de fazer expoentes, trigonometria, e muito mais.

# Antes de você ir ...

## Uma revisão

*   Há um monte de mais operadores matemáticos em C
*   Ordem de operações existe em C
*   Existem parênteses e funcionam como matemática regular para alterar a ordem das operações
*   Existem algumas operações unárias, que são operações onde há apenas uma variável:
*   Os operadores pós-correção e pré-correção são usados ​​para adicionar e subtrair 1
*   Adicionando um: `++a;` ou `a++;`
*   Subtraindo um: `--a` ou 'a--'
*   `-` pode ser colocado na frente de uma variável ou número e age como um negativo em matemática
*   Existem algumas operações bitwise, também
*   E é feito com &
*   OU é feito com |
*   NÃO é feito com ~
*   XOR é feito com ^ (XOR não funciona com número de tipo flutuante em C)
*   Operações de atribuição compostas existem para todas as operações não unárias
*   a + = b é o mesmo que a = a + b, e assim por diante
*   Casting permite que você troque entre tipos de dados
*   math.h tem mais coisas de matemática para brincar
