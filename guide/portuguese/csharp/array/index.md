---
title: Arrays
localeTitle: Matrizes
---
# Matrizes

Uma matriz é usada para armazenar uma coleção de dados do mesmo tipo. Isso pode ser usado como uma única variável que contém vários valores ou uma coleção de variáveis.

# Regras de Matrizes

Matrizes começam do zero. O primeiro elemento de uma matriz é 0, o segundo elemento é 1, o terceiro elemento 2 e assim por diante.

Os arrays devem ser do mesmo tipo de dados. Você pode usar qualquer tipo de dados em uma matriz (por exemplo, int, double, float, string, enum)

Um novo Array deve primeiro ser declarado e inicializado antes de poder ser chamado e acessado.

# Declarando uma matriz

Use o seguinte formato para declarar matrizes: `dataType [] nameOfArray;`

# Inicializando uma matriz

Use o seguinte formato para inicializar uma matriz. Esse método também declara a matriz e informa quantos valores devem ser armazenados na matriz.

`dataType [] nameOfArray = new nameOfArray[numberOfElements];`

# Atribuindo valores a um array

Você pode atribuir um valor diretamente a um elemento usando o formato abaixo:

`nameOfArray[2] = 50;`

O vai atribuir o valor de 50 diretamente ao elemento \[2\]

Você pode atribuir vários valores de uma vez ao declarar o array usando o formato abaixo:

`dataType [] nameOfArray = {5,17,19,92};`

A vontade atribuirá o valor de 5 no elemento \[0\], 17 no elemento \[1\], 19 no elemento \[2\] e 92 no elemento \[3\].

Você pode declarar, iniciar e atribuir valores na matriz de uma só vez usando o formato abaixo:

`dataType [] nameOfArray = new nameOfArray[numberOfElements] {value1,value2,value3,value4};`

Você pode armazenar uma matriz diretamente em outra matriz usando o formato abaixo:

`int [] nameOfArray = new nameOfArray[4] {2,9,56,1280};` `int [] nameOfSecondArray = nameOfArray;`