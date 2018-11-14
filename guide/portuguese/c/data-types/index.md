---
title: Data Types in C
localeTitle: Tipos de dados em C
---
# Tipos de dados em C

Existem várias maneiras diferentes de armazenar dados em C, e elas são exclusivas umas das outras. Os tipos de dados que as informações podem ser armazenadas, como são chamados tipos de dados. C é muito menos tolerante com relação aos tipos de dados do que outros idiomas. Como resultado, é importante ter certeza de que você entende os tipos de dados existentes, suas habilidades e suas limitações.

Uma peculiaridade dos tipos de dados de C é que eles dependem inteiramente do hardware em que você está executando seu código. Um `int` em seu laptop será menor do que um `int` em um supercomputador, portanto, conhecer as limitações do hardware em que você está trabalhando é importante. É também por isso que os tipos de dados são definidos como mínimos - um valor `int` , como você vai aprender, é no mínimo -32767 a 32767: em certas máquinas, ele poderá armazenar ainda mais valores que isso.

Existem duas categorias que podemos dividir em: inteiros e números de ponto flutuante. Inteiros são números inteiros. Eles podem ser positivos, negativos ou nulos. Números como -321, 497, 19345 e -976812 são números inteiros perfeitamente válidos, mas 4.5 não é porque 4.5 não é um número inteiro.

Números de ponto flutuante são números com um decimal. Como inteiros, -321, 497, 19345 e -976812 são todos válidos, mas agora 4,5, 0,0004, -324,984 e outros números não inteiros também são válidos.

C nos permite escolher entre várias opções diferentes com nossos tipos de dados, porque eles são armazenados de diferentes maneiras no computador. Como resultado, é importante estar ciente das habilidades e limitações de cada tipo de dados para escolher o mais adequado.

## Tipos de dados inteiros

#### Personagens: `char`

`char` possui caracteres - coisas como letras, pontuação e espaços. Em um computador, os caracteres são armazenados como números, portanto, o `char` mantém valores inteiros que representam caracteres. A tradução real é descrita pelo padrão ASCII. [Aqui está](http://www.asciitable.com/) uma tabela útil para procurar isso.

O tamanho real, como todos os outros tipos de dados em C, depende do hardware em que você está trabalhando. No mínimo, é pelo menos 8 bits, então você terá pelo menos 0 a 127. Alternativamente, você pode usar o `signed char` para obter pelo menos -128 a 127.

#### Inteiros padrão: `int`

A quantidade de memória que um único `int` leva depende do hardware. No entanto, você pode esperar que um `int` tenha pelo menos 16 bits de tamanho. Isso significa que ele pode armazenar valores de -32.768 a 32.767 ou mais, dependendo do hardware.

Como todos esses outros tipos de dados, há uma variante `unsigned` que pode ser usada. O `unsigned int` pode ser positivo e zero, mas não negativo, portanto, pode armazenar valores de 0 a 65.535 ou mais, dependendo do hardware.

#### Inteiros `short` : `short`

Isso não é usado com frequência, mas é bom saber que existe. Como int, ele pode armazenar -32768 a 32767. Ao contrário de int, no entanto, essa é a extensão de sua capacidade. Em qualquer lugar que você pode usar `short` , você pode usar `int` .

#### Números inteiros `long`

O tipo de dados `long` armazena inteiros como `int` , mas fornece um intervalo maior de valores ao custo de obter mais memória. Long armazena pelo menos 32 bits, dando-lhe um intervalo de -2.147.483.648 a 2.147.483.647. Como alternativa, use `unsigned long` para um intervalo de 0 a 4.294.967.295.

#### Números inteiros ainda maiores: `long long`

O tipo de dados `long long` é um exagero para praticamente todos os aplicativos, mas o C permite que você o use de qualquer maneira. É capaz de armazenar pelo menos 9.223.372.036.854.775.807 a 9.223.372.036.854.775.807. Alternativamente, consiga ainda mais overkill com `unsigned long long` , que lhe dará pelo menos 0 a 18.446.744.073.709.551.615.

## Tipos de dados do número de ponto flutuante

#### Números básicos de pontos flutuantes: `float`

`float` leva pelo menos 32 bits para armazenar, mas nos dá 6 casas decimais de 1.2E-38 a 3.4E + 38.

#### Duplos: `double`

`double` leva o dobro da memória de float (pelo menos 64 bits). Em troca, o dobro pode fornecer 15 casas decimais de 2.3E-308 a 1.7E + 308.

#### Obtendo uma ampla gama de duplas: `long double`

`long double` leva pelo menos 80 bits. Como resultado, podemos obter 19 casas decimais de 3.4E-4932 a 1.1E + 4932.

## Escolhendo o tipo de dados correto

C escolhe o tipo de dados e nos torna muito específicos e intencionais sobre a maneira como fazemos isso. Isso lhe dá muito poder sobre o seu código, mas é importante escolher o caminho certo.

Em geral, você deve escolher o mínimo para sua tarefa. Se você sabe que vai contar do número inteiro de 1 a 10, não precisa de um longo e não precisa de um duplo. Se você sabe que nunca terá valores negativos, procure usar as variantes `unsigned` dos tipos de dados. Ao fornecer essa funcionalidade, em vez de fazê-lo automaticamente, C é capaz de produzir código muito leve e eficiente. No entanto, depende de você, como programador, compreender as habilidades e limitações e escolher de acordo.

Podemos usar o operador sizeof () para verificar o tamanho de uma variável. Veja o seguinte programa em C para o uso dos vários tipos de dados:

```c
#include <stdio.h> 
 
 int main() 
 { 
    int a = 1; 
 
    char b ='G'; 
 
    double c = 3.14; 
 
    printf("Hello World!\n"); 
 
    //printing the variables defined above along with their sizes 
    printf("Hello! I am a character. My value is %c and " 
           "my size is %lu byte.\n", b,sizeof(char)); 
    //can use sizeof(b) above as well 
 
    printf("Hello! I am an integer. My value is %d and " 
           "my size is %lu  bytes.\n", a,sizeof(int)); 
    //can use sizeof(a) above as well 
 
    printf("Hello! I am a double floating point variable." 
           " My value is %lf and my size is %lu bytes.\n",c,sizeof(double)); 
    //can use sizeof(c) above as well 
 
    printf("Bye! See you soon. :)\n"); 
    return 0; 
 } 
```

## Saída:

Olá Mundo!  
Olá! Eu sou um personagem. Meu valor é G e meu tamanho é 1 byte.  
Olá! Eu sou um inteiro. Meu valor é 1 e meu tamanho é 4 bytes.  
Olá! Eu sou uma variável de ponto flutuante duplo. Meu valor é 3.140000 e meu tamanho é 8 bytes.  
Tchau! Te vejo em breve. :)

## O tipo de vazio

O tipo void especifica que nenhum valor está disponível. É usado em três tipos de situações:

#### 1\. Função retorna como vazia

Existem várias funções em C que não retornam nenhum valor ou você pode dizer que elas retornam nulas. Uma função sem valor de retorno tem o tipo de retorno como vazio. Por exemplo, `void exit (int status);`

#### 2\. Argumentos de função como nulos

Existem várias funções em C que não aceitam nenhum parâmetro. Uma função sem parâmetro pode aceitar um vazio. Por exemplo, `int rand(void);`

#### 3\. Ponteiros para anular

Um ponteiro do tipo void \* representa o endereço de um objeto, mas não o seu tipo. Por exemplo, uma função de alocação de memória `void *malloc( size_t size);` retorna um ponteiro para void que pode ser convertido para qualquer tipo de dados.

# Antes de você ir ...

## Uma revisão

*   As habilidades reais dos tipos de dados C dependem do hardware. Como resultado, os tamanhos mínimos são definidos para os tipos de dados.
*   Números de pontos flutuantes permitirão que você tenha decimais, enquanto números inteiros não terão.
*   Nós temos algumas opções para nossos valores inteiros:
*   char, que é projetado para caracteres, mas armazena números
*   int, que é o tipo de dados inteiro padrão
*   short, que é um tipo de dados inteiro menos comumente usado, mas ainda disponível
*   long, que dá uma ampla gama de valores inteiros
*   long long, que fornece um intervalo de overkill de valores inteiros, mas às vezes ainda é útil.
*   Também temos algumas opções para nossos valores de ponto flutuante:
*   float é o valor básico do ponto flutuante, armazenando 6 casas decimais
*   duplo leva o dobro da memória e dá 15 casas decimais
*   longa dupla leva ainda mais memória e dá 19 casas decimais
*   Escolher o tipo de dados correto é importante e dá ao programador muito controle sobre o programa em um nível baixo.