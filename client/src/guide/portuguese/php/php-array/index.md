---
title: Php Arrays
localeTitle: Matrizes Php
---
Uma matriz é uma estrutura de dados que armazena um ou mais tipos semelhantes de valores em um único valor. Por exemplo, se você deseja armazenar 100 números, em vez de definir 100 variáveis, é fácil definir uma matriz de 100 comprimentos.

Existem três tipos diferentes de matrizes e cada valor de matriz é acessado usando um ID c chamado de índice de matriz.

Matriz numérica - Uma matriz com um índice numérico. Os valores são armazenados e acessados ​​de forma linear.

Matriz associativa - Uma matriz com strings como índice. Isso armazena valores de elemento em associação com valores de chave em vez de em uma ordem de índice linear estrita.

Matriz multidimensional - Um array contendo um ou mais arrays e valores é acessado usando múltiplos índices

OBSERVAÇÃO - Funções de matriz incorporadas são fornecidas na referência de função PHP Array Functions

### Matriz Numérica

Essas matrizes podem armazenar números, seqüências de caracteres e qualquer objeto, mas seu índice será representado por números. Por padrão, o índice de array começa em zero.

#### Exemplo

A seguir, o exemplo mostrando como criar e acessar matrizes numéricas.

Aqui nós usamos a função array () para criar um array. Esta função é explicada na referência de função.
```
<html> 
   <body> 
 
      <?php 
         /* First method to create array. */ 
         $numbers = array( 1, 2, 3, 4, 5); 
 
         foreach( $numbers as $value ) { 
            echo "Value is $value <br />"; 
         } 
 
         /* Second method to create array. */ 
         $numbers[0] = "one"; 
         $numbers[1] = "two"; 
         $numbers[2] = "three"; 
         $numbers[3] = "four"; 
         $numbers[4] = "five"; 
 
         foreach( $numbers as $value ) { 
            echo "Value is $value <br />"; 
         } 
      ?> 
 
   </body> 
 </html> 
```

Isso produzirá o seguinte resultado -
```
Value is 1 
 Value is 2 
 Value is 3 
 Value is 4 
 Value is 5 
 Value is one 
 Value is two 
 Value is three 
 Value is four 
 Value is five 
```

### Matrizes Associativas

Os arrays associativos são muito semelhantes aos arrays numéricos em termos de funcionalidade, mas são diferentes em termos de seu índice. O array associativo terá seu índice como string para que você possa estabelecer uma forte associação entre chave e valores.

Para armazenar os salários dos funcionários em uma matriz, uma matriz numericamente indexada não seria a melhor escolha. Em vez disso, poderíamos usar os nomes dos funcionários como chaves em nossa matriz associativa, e o valor seria seu respectivo salário.

OBSERVAÇÃO - Não mantenha o array associativo entre aspas duplas durante a impressão, caso contrário, ele não retornará nenhum valor.
```
Example 
 <html> 
   <body> 
 
      <?php 
         /* First method to associate create array. */ 
         $salaries = array("mohammad" => 2000, "qadir" => 1000, "zara" => 500); 
 
         echo "Salary of mohammad is ". $salaries['mohammad'] . "<br />"; 
         echo "Salary of qadir is ".  $salaries['qadir']. "<br />"; 
         echo "Salary of zara is ".  $salaries['zara']. "<br />"; 
 
         /* Second method to create array. */ 
         $salaries['mohammad'] = "high"; 
         $salaries['qadir'] = "medium"; 
         $salaries['zara'] = "low"; 
 
         echo "Salary of mohammad is ". $salaries['mohammad'] . "<br />"; 
         echo "Salary of qadir is ".  $salaries['qadir']. "<br />"; 
         echo "Salary of zara is ".  $salaries['zara']. "<br />"; 
      ?> 
 
   </body> 
 </html> 
```

Isso produzirá o seguinte resultado -
```
Salary of mohammad is 2000 
 Salary of qadir is 1000 
 Salary of zara is 500 
 Salary of mohammad is high 
 Salary of qadir is medium 
 Salary of zara is low 
```

### Matrizes Multidimensionais

Uma matriz multidimensional de cada elemento na matriz principal também pode ser uma matriz. E cada elemento na sub-matriz pode ser uma matriz e assim por diante. Valores no array multidimensional são acessados ​​usando vários índices.

Exemplo Neste exemplo, criamos uma matriz bidimensional para armazenar marcas de três alunos em três disciplinas -

Este exemplo é um array associativo, você pode criar um array numérico da mesma maneira.
```
<html> 
   <body> 
 
      <?php 
         $marks = array( 
            "mohammad" => array ( 
               "physics" => 35, 
               "maths" => 30, 
               "chemistry" => 39 
            ), 
 
            "qadir" => array ( 
               "physics" => 30, 
               "maths" => 32, 
               "chemistry" => 29 
            ), 
 
            "zara" => array ( 
               "physics" => 31, 
               "maths" => 22, 
               "chemistry" => 39 
            ) 
         ); 
 
         /* Accessing multi-dimensional array values */ 
         echo "Marks for mohammad in physics : " ; 
         echo $marks['mohammad']['physics'] . "<br />"; 
 
         echo "Marks for qadir in maths : "; 
         echo $marks['qadir']['maths'] . "<br />"; 
 
         echo "Marks for zara in chemistry : " ; 
         echo $marks['zara']['chemistry'] . "<br />"; 
      ?> 
 
   </body> 
 </html> 
```

Isso produzirá o seguinte resultado -
```
Marks for mohammad in physics : 35 
 Marks for qadir in maths : 32 
 Marks for zara in chemistry : 39 

```