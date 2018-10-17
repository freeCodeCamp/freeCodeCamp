---
title: Basic Math
localeTitle: Matemática básica
---
# Matemática em C

C fornece muitas opções para fazer matemática. Vamos começar com alguns dos mais comuns primeiro.

## O material básico

Esses exemplos a seguir não são um código completo, são apenas exemplos de como um código parece. Lembre-se de que, em C, precisaremos ter tudo declarado antes de usá-lo - `result` , `a` e `b` precisarão já ter sido inicializados e definidos como um valor. Quer sejam `int` , `double` ou o que quer que seja importante para evitar erros e perda de informações - vamos abordar isso mais tarde.

#### Adição: `+`

A adição é realizada com um `+` , assim:

```C
result = a + b; 
```

No exemplo acima, o `result` da variável será igual a + b.

#### Subtração: `-`

A adição é executada com um `-` assim:

```C
result = a - b; 
```

No exemplo acima, o `result` da variável será igual a - b.

#### Multiplicação: `*`

A multiplicação é realizada com um `*` , assim:

```C
result = a * b; 
```

No exemplo acima, o `result` da variável será igual a um multiplicado por b.

#### Divisão: `/`

Divisão é realizada com um `/` , assim:

```C
result = a / b; 
```

No exemplo acima, o `result` da variável será igual a a dividido por b. Isso nem sempre é uma fração de over-b, no entanto. Ao lidar com inteiros, as coisas ficam um pouco diferentes - mais sobre isso depois.

# O material não tão básico

## Módulo: '%'

Ok, agora as coisas começam a ficar um pouco estranhas.

Módulo permite que você encontre o restante na divisão. Lembre-se que com números inteiros, não podemos ter um decimal. A divisão trata de descobrir quantas vezes um número caberá em outro, o módulo é descobrir o que sobrou. Tome 27 dividido por 4: 4 se encaixa em 27 6 vezes. 6 vezes 4 é 24, o que significa que sobraram 3. Como resultado, 27% 4 é 3. 10 dividido por 5 é 2, 2 vezes 5 é 10, então resta 0 sobrando. Como resultado, 10% 5 é 0.

O operador de módulo é mais importante do que você imagina, especialmente em C, onde a diferença entre o número de pontos flutuantes e números inteiros é aplicada. Vale a pena ser confortável. Aqui está um exemplo:

```C
result = a % b; 
```

No exemplo acima, o `result` será igual a um módulo b.

## Inteiros e matemática

Os inteiros não podem ter decimais. Como resultado, quando você executa divisão com inteiros, qualquer tipo de decimal será truncado. Por exemplo, 17 dividido por 10 é 1.7. No entanto, se estamos lidando apenas com números inteiros, esse resultado será 1, não 1.7. 10 se encaixa em 17 1 vez, então a resposta é 1.

Ao lidar com números de ponto flutuante, isso não é um problema. Os números de pontos flutuantes podem ter casas decimais, portanto, não precisamos nos preocupar com o fato de as coisas ficarem truncadas.

### Por que C faz isso?

C, como discutido anteriormente, é uma linguagem de baixo nível. Existem grandes diferenças entre números de ponto flutuante e números inteiros no hardware de um computador, e eles exigem que certos tipos de dados tenham certas propriedades (como não aceitar decimais, por exemplo). C não faz suposições sobre o que você quer, e obriga você a pensar sobre isso sozinho.

### Por que não usamos números de ponto flutuante o tempo todo?

Isso também se resume a C sendo uma linguagem de baixo nível. O C é muito, muito mais rápido e muito, muito mais leve do que muitas outras linguagens, e uma das razões é o fato de o programador ser capaz de tomar decisões inteligentes sobre tipos de dados. Lembre-se de que números de ponto flutuante ocupam muito mais memória do que números inteiros. Como resultado, é importante usar o tipo de dados apropriado e lidar com inteiros para conversões de ponto flutuante sempre que necessário.

### Como podemos contornar isso?

Fundição (descrita posteriormente) é uma solução. O outro está usando números de ponto flutuante. Se um ou ambos os números que estão sendo operados forem um número de ponto flutuante, o resultado será um número de ponto flutuante. Isso se torna mais complexo quando começamos a lidar com a ordem das operações, mas, por enquanto, saiba que isso funciona:

```C
double result = 23.0 / 2; 
```

# Um exemplo completo

```C
#include <stdio.h> 
 
 // This is a comment. It gets ignored by the compiler, so we can write notes after the double slashes. 
 
 int main(void) { 
    int a = 3; 
    int b = 5; 
    int result = 0; 
 
    // Doing things with variables: 
    result = a + b; 
    printf("a plus b = %i \n", result); 
 
    // You can also do the operation inside the printf. 
    // Here's an example of that with subtraction: 
    printf("a minus b = %i \n", ab); 
 
    // You don't need to do this with variables at all. 
    // Here's an example of that with multiplication: 
    printf("10 times 5 = %i \n", 10*5); 
 
    // Here's a look at division. 
    // Notice that the decimals are truncated because we're dealing with integers. 
    printf("12 divided by 5 = %i \n", 12/5); 
 
    // Now let's force floating point numbers by including a decimal. 
    // Notice that even though these are integers, the decimal forces them to be 
    // treated as floating point numbers, so they aren't truncated. 
    // Note that I'm printing a double with %d, not an int with %i. 
    printf("12.0 divided by 5 = %d \n", 12.0/5); 
 
    return 0; 
 } 
```

Dê uma corrida para ver o que acontece e não se esqueça de jogar com os operadores e os valores para ver o que e como as coisas mudam.

# Biblioteca de matemática

C fornece uma biblioteca de matemática ( `math.h` ) que fornece várias funções matemáticas úteis. Por exemplo, o poder de um número pode ser calculado como:

```#include<math.h>
int result = pow(2,3) // will result in 2*2*2 or 8 
```

Algumas outras funções da biblioteca ( `math.h` ) que podem ser úteis são:

`#include <math.h> double angle = cos(90.00); // Givs us 0.00 int result = sqrt(16); // Gives us 4 double result = log(10.00) // Gives us 2.30 (note this is ln(10), not log base 10)`

// código C para ilustrar // o uso da função ceil.

# incluir

# incluir

int main () { float val1, val2, val3, val4;

val1 = 1,6; val2 = 1,2; val3 = -2,8; val4 = -2,3;

printf ("valor1 =% .1lf \\ n", ceil (val1)); printf ("valor2 =% .1lf \\ n", ceil (val2)); printf ("value3 =% .1lf \\ n", ceil (val3)); printf ("value4 =% .1lf \\ n", ceil (val4));

retorno (0); }

# Antes de você ir ...

## Uma revisão

*   Existem vários operadores básicos:
*   `+` para adição
*   `-` para subtração
*   `*` para multiplicação
*   `/` para divisão
*   `%` para modulo
*   Há também mais operadores, mas entraremos em detalhes com eles mais tarde.
*   Matemática inteira é uma coisa que C é bastante rigorosa.
*   C é muito rigoroso quanto aos tipos de dados
*   Se apenas inteiros estiverem envolvidos, um inteiro será retornado
*   Se um número de ponto flutuante estiver envolvido em uma operação, essa parte da operação se tornará ponto flutuante
*   C fornece uma biblioteca `math.h` com múltiplas funções como `pow` para calcular a potência de um número.