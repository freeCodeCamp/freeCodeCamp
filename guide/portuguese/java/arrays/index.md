---
title: Arrays
localeTitle: Matrizes
---
# Matriz

Uma Matriz é uma coleção de valores (ou objetos) de tipos de dados semelhantes (primitiva e de referência que ambas as formas de tipos de dados são permitidas) mantidas em endereços de memória sequencial. Um Array é usado para armazenar uma coleção de tipos de dados semelhantes. Matrizes sempre começam com o índice de 0 e são instanciados para um número definido de índices. Todas as variáveis ​​na matriz devem ser do mesmo tipo, declaradas na instanciação.

**Sintaxe:**

```java
dataType[] arrayName;   // preferred way 
```

Aqui, o `java datatype[]` descreve que todas as variáveis ​​declaradas depois serão instanciadas como matrizes do tipo de dados especificado. Então, se quisermos instanciar mais matrizes do tipo de dados similar, nós apenas temos que adicioná-los após o `java arrayName` especificado de `java arrayName` (não se esqueça de separá-los somente através de vírgulas). Um exemplo é dado abaixo na próxima seção para referência.

```java
dataType arrayName[];  //  works but not preferred way 
```

Aqui, o `java datatype` descreve apenas as variáveis ​​declaradas após pertencerem a esse tipo de dados. Além disso, `java []` após o nome da variável descreve que a variável é uma matriz do tipo de dados especificado (não apenas um valor ou objeto desse tipo de dados). Então, se quisermos instanciar mais matrizes do tipo de dados similar, vamos adicionar os nomes das variáveis ​​logo após o que já foi especificado, separados por vírgulas e cada vez teremos que adicionar `java []` após o nome da variável, caso contrário a variável será instanciado como uma variável ordinária de armazenamento de valor (não uma matriz). Para um melhor entendimento, um exemplo é dado na próxima seção.

## Snippets de código da sintaxe acima:

```java
double[] list1, list2; // preferred way 
```

O snippet de código acima instancia duas matrizes de nomes de tipo duplo list1 e list2.

```java
double list1[], list2; // works but not preferred way 
```

Trecho de código acima, uma matriz de tipo de dados double list1 nomeada e uma variável simples de tipo de dados double list2 nomeada (Não confunda com o nome **list2** . Nomes de variáveis ​​não têm nada a ver com o tipo de variável).

Nota: A `double list[]` estilos `double list[]` não é preferida, pois vem da linguagem C / C ++ e foi adotada em Java para acomodar os programadores C / C ++. Além disso, é mais legível: você pode ler que é uma "lista com nome de matriz dupla" diferente de "uma lista chamada dupla que é uma matriz"

## Criando matrizes:

```java
dataType[] arrayName = new dataType[arraySize]; 
```

## Snippets de código da sintaxe acima:

```java
double[] List = new double[10]; 
```

## Outra maneira de criar uma matriz:

```java
dataType[] arrayName = {value_0, value_1, ..., value_k}; 
```

## Snippets de código da sintaxe acima:

```java
double[] list = {1, 2, 3, 4}; 
 
 The code above is equivalent to: 
 double[] list = new double[4]; 
 *IMPORTANT NOTE: Please note the difference between the types of brackets 
 that are used to represent arrays in two different ways. 
```

## Acessando Arrays:

```java
arrayName[index]; // gives you the value at the specified index 
```

## Snippets de código da sintaxe acima:

```java
System.out.println(list[1]); 
```

Saída:
```
2.0 
```

## Modificando Arrays:

```java
arrayName[index] = value; 
```

Nota: Você não pode alterar o tamanho ou o tipo de um array após inicializá-lo. Nota: Você pode, no entanto, redefinir a matriz assim

```java
arrayName = new dataType[] {value1, value2, value3}; 
```

## Tamanho das matrizes:

É possível encontrar o número de elementos em uma matriz usando o "atributo length". Deve ser notado aqui que o `java length` é um **atributo** de cada array, isto é, um nome de variável que armazena o tamanho da variável. Não deve ser confundido com um **método** de array, uma vez que o nome é o mesmo que o método `java length()` correspondente às classes String.

```java
int[] a = {4, 5, 6, 7, 8}; // declare array 
 System.out.println(a.length); //prints 5 
```

## Snippets de código da sintaxe acima:

```java
list[1] = 3; // now, if you access the array like above, it will output 3 rather than 2 
```

_Exemplo de código:_

```java
int[] a = {4, 5, 6, 7, 8}; // declare array 
 for (int i = 0; i < a.length; i++){ // loop goes through each index 
    System.out.println(a[i]); // prints the array 
 } 
```

Saída:

```java
    4 
    5 
    6 
    7 
    8 
```

### Matrizes multidimensionais

Arrays bidimensionais (arrays 2D) podem ser considerados como uma tabela com linhas e colunas. Embora essa representação seja apenas uma maneira de visualizar a matriz para uma melhor solução de problemas. Os valores são realmente armazenados apenas em endereços de memória sequencial.

```java
int M = 5; 
 int N = 5; 
 double[][] a = new double [M][N]; //M = rows N = columns 
 for(int i = 0; i < M; i++) { 
    for (int j = 0; j < N; j++) { 
        //Do something here at index 
    } 
 } 
```

Este loop irá executar M ^ N vezes e irá construir isso:

\[0 | 1 | 2 | 3 | 4\]  
\[0 | 1 | 2 | 3 | 4\]  
\[0 | 1 | 2 | 3 | 4\]  
\[0 | 1 | 2 | 3 | 4\]  
\[0 | 1 | 2 | 3 | 4\]

Da mesma forma, um array 3D também pode ser feito. Ele pode ser visualizado como um cuboide em vez de um retângulo (como acima), dividido em cubos menores, com cada cubo armazenando algum valor. Pode ser inicializado a seguir:

```java
int a=2, b=3, c=4; 
 int[][][] a=new int[a][b][c]; 
```

De um modo semelhante, pode-se dispor de um conjunto de dimensões que ele deseja, mas visualizar uma matriz de mais de três dimensões é difícil de visualizar de uma maneira particular.

### Matrizes irregulares

Matrizes irregulares são matrizes multidimensionais que possuem um número definido de linhas, mas um número variável de colunas. Matrizes irregulares são usadas para conservar o uso da memória da matriz. Aqui está um exemplo de código:

```java
int[][] array = new int[5][]; //initialize a 2D array with 5 rows 
 array[0] = new int[1]; //creates 1 column for first row 
 array[1] = new int[2]; //creates 2 columns for second row 
 array[2] = new int[5]; //creates 5 columns for third row 
 array[3] = new int[5]; //creates 5 columns for fourth row 
 array[4] = new int[5]; //creates 5 columns for fifth row 
```

Saída:

\[0\]  
\[0 | 1\]  
\[0 | 1 | 2 | 3 | 4\]  
\[0 | 1 | 2 | 3 | 4\]  
\[0 | 1 | 2 | 3 | 4\]

#### Mais Informações:

*   Fonte: [Matrizes Java](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html)