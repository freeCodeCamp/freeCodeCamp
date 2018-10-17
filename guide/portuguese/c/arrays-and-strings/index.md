---
title: Arrays and Strings
localeTitle: Arrays e Strings
---
# Matrizes em C

Matrizes permitem que um conjunto de variáveis ​​seja agrupado como uma variável. Isso é útil por si só, mas também porque as strings se enquadram nessa categoria. Strings, que são como representamos palavras e sentenças em linguagens de computador, são apenas coleções de variáveis ​​de caracteres. Portanto, nós representamos strings usando arrays em C.

## Fazendo uma matriz

Uma variável inteira normal seria declarada da seguinte forma:

```C
int my_variable; 
```

Para declarar isso como uma matriz e torná-lo uma matriz de 5 inteiros, pode ser declarado assim:

```C
int my_array[5]; 
```

Isso produzirá uma matriz chamada `my_array` que pode conter 5 inteiros. No entanto, nenhuma das posições na matriz foi definida (ainda). Você poderia declarar a matriz e ter os valores definidos no início:

```C
int my_array[] = {1, 5, 3, 6, 2}; 
```

Observe que neste exemplo, não nos preocupamos em especificar um número entre colchetes. Isso ocorre porque as chaves têm valores nelas que serão atribuídas a cada posição na matriz. Você pode colocar um número entre parênteses, desde que tenha certeza de criar locais de memória suficientes para armazenar os valores que você está passando.

Ao inicializar uma matriz, você pode fornecer menos valores que os elementos da matriz. Por exemplo, o A seguinte instrução inicializa apenas os dois primeiros elementos de my\_array:

float my\_array \[5\] = {5,0, 2,5};

Se você inicializar parcialmente uma matriz, o compilador define os elementos restantes para zero.

Agora que a matriz foi declarada com 5 valores, ela possui 5 locais de memória. Considere esta tabela para um exemplo visual disso:

| Posição | 0 | 1 | 2 | 3 | 4 | | ---------- | --- | --- | --- | --- | --- | | Valor | 1 | 5 | 3 | 6 | 2 |

Observe que, embora existam 5 locais de memória, as posições da matriz só vão até 4. Isso ocorre porque as matrizes em C (e na maioria das outras linguagens) começam em 0, porque as matrizes são implementadas usando ponteiros. Quando você chama uma posição em um array, você está realmente chamando esse local de memória mais um certo número. Para obter o começo da matriz, mova 0 lugares na memória, para obter a posição depois disso, mova um lugar na memória e assim por diante.

Aqui está um exemplo de configuração da matriz para 9 na posição 1:

```C
my_array[1] = 9; 
```

Portanto, é igual a qualquer outra variável, exceto que ela possui vários valores para acessar usando o número entre colchetes. Os valores podem ser retornados dessa maneira também:

```C
int variable = my_array[4]; 
```

Isso irá declarar a `variable` como um inteiro igual ao valor na posição 4 de `my_array` . No entanto, como `variable` é um único `int` e não um array, esse **não** é o código que terá o resultado correto:

```C
// This code will NOT work properly! 
 int variable = my_array; 
```

Qualquer número inteiro pode ser colocado entre colchetes para obter uma posição na matriz. Esses inteiros podem ser variáveis ​​também. Dê uma olhada neste exemplo, que imprime o conteúdo de uma matriz:

```C
#include <stdio.h> 
 
 int main(void) { 
    int my_array[] = {1, 1, 2, 3, 5, 7, 12}; 
 
    for(int count = 0; count < 7; count++) { 
        printf("%i, \n", my_array[count]); 
    } 
 
    return 0; 
 } 
```

## Cordas

Arrays são conjuntos de variáveis ​​e strings são conjuntos de caracteres. Como resultado, podemos representar strings com uma matriz. Você _pode_ declarar algo da mesma maneira que antes, mas você precisa colocar '\\ 0' como um dos seus valores (mais sobre isso em um minuto!):

```C
char hello_world[] = {'H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!', '\0'}; 
```

Yikes Isso não é realmente uma ótima solução. Felizmente, C fornece uma maneira melhor com strings em mente:

```C
char hello_world[] = "Hello world!"; 
```

Isso é muito melhor. Nem sequer exige que você coloque o '\\ 0' no final. Então, o que foi isso?

### Terminação nula

Seqüências de caracteres em C são terminadas em null, o que significa que elas terminam com o caractere nulo. Desta forma, o código do compilador (e de todos e de todos) saberá onde a string termina: uma vez que o caractere é null, a string é terminada.

Claro, não há nenhum botão 'nulo' no seu teclado, mas você ainda precisa digitá-lo de alguma forma. Isso é o que o \\ 0 faz. Sempre que o compilador C vir \\ 0, ele inserirá um caractere nulo. É exatamente como \\ n imprime uma nova linha.

### Imprimindo cordas

Outra coisa que C facilita para nós é a impressão de strings. Em vez de forçar você a imprimir cada caractere na matriz, basta usar o especificador de formato% s e tratar a string como se fosse um valor `int` ou `double` . Aqui está um exemplo do programa hello world, desde o começo, um pouco mais complicado com strings:

```C
#include <stdio.h> 
 
 int main(void) { 
    char hello_world[] = "Hello, World!\n"; 
    printf("%s", hello_world); 
 
    return 0; 
 } 
```

### Brincando com cordas

Imprimir strings é fácil, mas outras operações são um pouco mais complexas. Felizmente, a biblioteca `string.h` tem algumas funções úteis para usar em diversas situações.

#### Cópia: `strcpy`

`strcpy` (from 'string copy') copia uma string. Por exemplo, este snippet de código copia o conteúdo da string `second` para a string `first` :

```C
strpy(first, second); 
```

Aqui está um exemplo de como a implementação manual da função strcpy se parece:

void copy _string (char \[\] primeira_ string, char \[\] second\_string) { int i;
```
for(i = 0; first_string[i] != '\0'; i++) 
 { 
    first_string[i] = second_string[i]; 
 } 
```

}

#### Concatenar: `strcat`

`strcat` (from 'string concatenate') irá concatenar uma string, significando que irá pegar o conteúdo de uma string e colocá-la no final de outra string. Neste exemplo, o conteúdo do `second` será concatenado no `first` :

```C
strcat(first, second); 
```

Aqui está um exemplo de implementação manual de fuction strcat:

void string\_concatenate (char \[\] s1, char \[\] s2) { int i = strlen (s1), j; para (int j = 0; s2 \[j\]; j ++, i + = 1) { s1 \[i\] = s2 \[j\]; } }

#### Obter comprimento: `strlen`

`strlen` (from 'string length') retornará um valor inteiro correspondente ao comprimento da string. Neste exemplo, um inteiro chamado `string_length` será atribuído ao comprimento de `my_string` :

```C
string_length = strlen(my_string); 
```

Aqui está uma implementação manual de struction de operação:

int string\_length (char \[\] string) { int i;
```
for(int i = 0; string[i]; i++); 
 
 return i; 
```

}

#### Comparar: `strcmp`

`strcmp` (from 'string compare') compara duas strings. O valor inteiro que ele retorna é 0 se eles forem iguais, mas também retornará negativo se o valor do primeiro (somando caracteres) for menor que o valor do segundo, e positivo se o primeiro for maior que o segundo . Dê uma olhada em um exemplo de como isso pode ser usado:

```C
if(!strcmp(first, second)){ 
    printf("These strings are the same!\n"); 
 } else { 
    printf("These strings are not the same!\n"); 
 } 
```

Observe o `!` , o que é necessário porque esta função retorna 0 se eles forem iguais. Colocar o ponto de exclamação aqui fará essa comparação retornar true.

#### Dividir uma string: `strtok`

`strtok` (from 'string token') divide uma string em uma série de tokens usando um delimitador. Neste exemplo, strtok divide a string str em uma série de tokens usando o delimitador delimitador:

```C
char *strtok(char *str, const char *delim); 
```

# Antes de você ir ...

## Uma revisão

*   Matrizes são coleções de variáveis.
*   Os arrays têm posições separadas que podem ser declaradas com colchetes e acessadas com colchetes.
*   Strings são matrizes também, mas podemos tratá-las de forma um pouco diferente: elas podem ser declaradas usando aspas duplas e impressas usando% s.
*   Strings tem sua própria biblioteca, `string.h` , que tem algumas funções úteis para usar.