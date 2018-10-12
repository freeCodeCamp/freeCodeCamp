---
title: Arrays
localeTitle: Arrays
---
# Arrays

Una matriz se utiliza para almacenar una colección de datos del mismo tipo. Esto se puede usar como una sola variable que contiene múltiples valores, o una colección de variables.

# Reglas de matrices

Las matrices comienzan desde cero. El primer elemento de una matriz es 0, el segundo elemento es 1, el tercer elemento 2 y así sucesivamente.

Las matrices deben ser del mismo tipo de datos. Puede usar cualquier tipo de datos en una matriz (por ejemplo, int, double, float, string, enum)

Primero se debe declarar e inicializar una nueva matriz antes de poder llamarla y acceder a ella.

# Declarando una matriz

Utilice el siguiente formato para declarar matrices: `dataType [] nameOfArray;`

# Inicializando una matriz

Utilice el siguiente formato para inicializar una matriz. Este método también declara la matriz e indica cuántos valores se almacenarán en la matriz.

`dataType [] nameOfArray = new nameOfArray[numberOfElements];`

# Asignar valores a una matriz

Puede asignar un valor a un elemento directamente usando el formato a continuación:

`nameOfArray[2] = 50;`

Asignará el valor de 50 directamente al elemento \[2\]

Puede asignar varios valores a la vez mientras declara la matriz con el siguiente formato:

`dataType [] nameOfArray = {5,17,19,92};`

Asignará el valor de 5 al elemento \[0\], 17 al elemento \[1\], 19 al elemento \[2\] y 92 al elemento \[3\].

Puede declarar, iniciar y asignar valores en la matriz de una vez utilizando el formato siguiente:

`dataType [] nameOfArray = new nameOfArray[numberOfElements] {value1,value2,value3,value4};`

Puede almacenar una matriz directamente en otra matriz utilizando el formato a continuación:

`int [] nameOfArray = new nameOfArray[4] {2,9,56,1280};` `int [] nameOfSecondArray = nameOfArray;`