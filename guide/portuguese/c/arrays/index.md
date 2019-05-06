---
title: Arrays
localeTitle: Matrizes
---
# Matrizes em C

## Problemas

Antes de tentar explicar quais são os arrays(vetores), vamos ver o código onde queremos imprimir 10 números dados pelo usuário na ordem inversa.

```C
#include <stdio.h> 
 int main(void) { 
    int a, b, c, d, e, f, g, i, j, k; 
    scanf("%d", &a); 
    scanf("%d", &b); 
    ... 
    printf("%d", k); 
    printf("%d", j); 
    printf("%d", i); 
    ... //and so on.. 
 
    return 0; 
 } 
```

Então, isso parece um pouco entediante. Até agora, todas as variáveis ​​criadas tinham algum papel especial. Mas agora, seria ótimo se pudéssemos armazenar vários valores em um único local e obter acesso aos valores com seu lugar na linha talvez (primeiro valor, segundo etc.). Outra maneira de ver isto é, suponha que você queira armazenar um conjunto de nomes, você não precisa criar variáveis ​​diferentes para cada nome, em vez disso você pode criar uma matriz de nomes onde cada nome tem sua identidade ou _índice_ único. Além disso, podemos usar loops neles, que são coisas que você aprenderá mais tarde, mas basicamente eles fazem a mesma coisa repetidas vezes. por exemplo. lendo do usuário ou imprimindo valores.

## Matrizes em C

Matrizes são contêineres com um determinado tamanho. Eles contêm variáveis ​​do **mesmo tipo** . Você pode acessar uma variável armazenada na matriz com seu _índice_ . Uma matriz pode ser considerada um array de arrays. Vamos ver um código:

```C
#include <stdio.h> 
 int main(void) { 
    int arr[4] = {1, 2, 3, 88}; 
    int brr[] = {78, 65}; 
    int crr[100] = {3}; 
 
    int var = arr[0]; 
 
    return 0; 
 } 
```

E agora vamos quebrar um pouco a sintaxe:

```C
int arr[4] = {1, 2, 3, 88}; 
```

Aqui você criou uma `array` de `ints` (Integers), chamada `arr` . Esta matriz tem 4 elementos: `1` , `2` , `3` , `88` . Observe a sintaxe!

```C
tipoDado nome[número de elementos]
Ex: Int cidades[20]
```

O primeiro elemento desta matriz é `1` , o segundo é `2` etc.

```C
int brr[] = {78, 65}; 
```

Você não precisa informar a dimensão antecipadamente. Aqui, uma matriz de dois será criada com os elementos entre as chaves.

```C
int crr[100] = {3}; 
```

Se você fizer isso, o primeiro elemento será `3` , mas o restante será `0` .

```C
int var = arr[0]; 
```

Aqui um int é criado chamado `var` , e é inicializado no 0º elemento de arr. **É muito importante notar** que, em C, os índices começam em zero em oposição a 1. Isso significa que para acessar o primeiro elemento, o índice (entre parênteses) é 0, para acessar o segundo elemento, o índice é 1 etc. Neste exemplo `var` vai armazenar o valor `1` .

## Visão geral

*   Um array unidimensional é como uma lista; Uma matriz bidimensional é como uma tabela; A linguagem C não coloca limites no número de dimensões em uma matriz, embora implementações específicas possam.
    
*   Alguns textos referem-se a matrizes unidimensionais como vetores, matrizes bidimensionais como matrizes e usam os conjuntos de termos gerais quando o número de dimensões não é especificado ou não é importante.
    

## Matrizes multidimensionais em C

C também suporta matrizes multidimensionais.

```C
tipoDado nome[tamanho1][tamanho2]...[tamanhoN] 
```

Matrizes bidimensionais são comuns e podem ser inicializadas usando a seguinte sintaxe. Pode-se pensar logicamente no primeiro índice como linhas e no segundo índice como colunas. Este exemplo tem 2 linhas e 5 colunas.

```C
int arr[2][5] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}; 
```

Pode ser difícil visualizar uma matriz bidimensional usando a sintaxe acima, para que os desenvolvedores usem frequentemente colchetes aninhados opcionais para esclarecer a estrutura da matriz. Esta é também uma maneira válida de inicializar um array bidimensional.

```C
int arr[2][5] = { 
    {0, 1, 2, 3, 4}, 
    {5, 6, 7, 8, 9} 
 }; 
```

Dois loops for aninhados podem ser usados ​​para imprimir o conteúdo de um array bidimensional em formato tabular.

```C
#include <stdio.h> 
 
 
 int main() { 
    const int linhas = 2, cols = 5; 
 
    int arr[linhas][cols] = { 
            {0, 1, 2, 3, 4}, 
            {5, 6, 7, 8, 9} 
    }; 
 
    for (int linha = 0; linha < linhas; linha++) { 
        for (int col = 0; col < cols; col++) { 
            printf("%5d", arr[linha][col]); 
        } 
        puts(""); 
    } 
 
    return 0; 
 } 
```

```C
    0    1    2    3    4 
    5    6    7    8    9 
```

## Cordas

Para armazenar strings / caracteres múltiplos, usamos `char arrays` em C, porque a linguagem não tem nenhum tipo especial embutido. Uma coisa a ter em conta, é que um nulo de terminação é automaticamente adicionado ao final, sinalizando que é o fim de a corda. No entanto, você também pode inicializar uma string com chaves `{}` também, mas é necessário adicionar manualmente o nulo final.

Igual a:

```C
char string[6] = "Hello"; //Aqui você tera Hello\0, que é o porque nós precisamos de um array de tamanho 6
```

Assim como com os arrays int no exemplo acima, existem várias maneiras de atribuir valores a matrizes de caracteres:

```C
char string[] = "Eu não quero contar os caracteres aqui."; 
 char string2[] = {'C','h','a','r',' ','b','y',' ','c','h','a','r','\0'}; 
 char string3[] = "Isso é uma String" 
                 "com duas linhas"; 
```

Equivalente à abordagem acima, você também pode criar um ponteiro para uma matriz char:

```C
char* string = "Eu não quero contar os caracteres aqui."; 
```

## Erros típicos, dicas

*   Quando você tem uma matriz preenchida com valores e deseja criar uma outra matriz que seja exatamente igual à primeira, nunca faça isso:

```C
double first[] = {2,3,7}; 
 double second[] = first; 
 //Or this: 
 double a[5], b[5] 
 a = b; 
```

Você **só** pode lidar com os valores em uma matriz, um por um. Você **não pode atribuir tudo de uma vez** , quando você aprender sobre os ponteiros mais tarde, as razões serão claras.

> (Basicamente, o primeiro elemento de uma matriz aponta para um endereço de memória, e os elementos depois disso são as "casas" ao lado da primeira. Então, tecnicamente uma matriz é apenas o endereço de memória do primeiro elemento. Quando você deseja atribuir a segunda array a primeira matriz, você corre em erro devido a diferentes tipos, ou você está tentando mudar o segundo endereço de memória do primeiro elemento na segunda matriz.)

*   Quando você deseja criar uma matriz, é necessário informar seu tamanho ou atribuir valores a ela. Não faça isso:

```C
int arr[]; 
```

O computador precisa saber o tamanho de um armazenamento a ser criado para o array. Mais tarde, você aprenderá sobre maneiras de criar contêineres cujo tamanho é definido posteriormente. (Novamente, ponteiros.)

*   Quando você indexa a matriz, o compilador nem sempre lhe dará um erro. Isso é chamado de comportamento indefinido, simplesmente não sabemos o que vai acontecer. Pode levar ao seu programa travando, simplesmente diminuindo a velocidade, qualquer coisa.

```C
int test[6]; 
 int a = test[-2]; 
 int b = test[89]; 
```

A razão para o C não verificar o limite de indexação é simples: C é uma linguagem eficiente. Foi feito, então o seu programa é o mais rápido: comunica-se bem com o hardware, etc. Um código C bem escrito não contém erros de indexação, então por que C iria querer verificar enquanto estava rodando?

*   Quando você tenta acessar o último elemento da matriz. Suponha que o comprimento da matriz A seja 4 e ao acessar o último elemento como Um \[4\] retornará um erro, pois a indexação começa em 0.
