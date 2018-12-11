---
title: PHP functions
localeTitle: Funções PHP
---
Funções PHP são semelhantes a outras linguagens de programação. Uma função é um pedaço de código que recebe mais uma entrada na forma de parâmetro e faz algum processamento e retorna um valor.

Você já viu muitas funções como fopen () e fread (), etc. Elas são funções internas, mas o PHP também oferece a opção de criar suas próprias funções.

Há duas partes que devem estar claras para você -

### Criando uma Função PHP

Chamando uma Função PHP Na verdade, você dificilmente precisa criar sua própria função PHP porque já existem mais de 1.000 funções de biblioteca internas criadas para diferentes áreas e você só precisa chamá-las de acordo com sua necessidade.

Por favor, consulte a Referência da Função PHP para um conjunto completo de funções úteis.

Criando Função PHP É muito fácil criar sua própria função PHP. Suponha que você queira criar uma função PHP que simplesmente escreva uma mensagem simples no seu navegador quando você o chamar. O exemplo a seguir cria uma função chamada writeMessage () e depois a chama logo após criá-la.

Note que ao criar uma função, seu nome deve começar com a função keyword e todo o código PHP deve ser colocado dentro de {e} chaves, como mostrado no exemplo a seguir abaixo -
```
<html> 
 
   <head> 
      <title>Writing PHP Function</title> 
   </head> 
 
   <body> 
 
      <?php 
         /* Defining a PHP Function */ 
         function writeMessage() { 
            echo "You are really a nice person, Have a nice time!"; 
         } 
 
         /* Calling a PHP Function */ 
         writeMessage(); 
      ?> 
 
   </body> 
 </html> 
```

Isto irá mostrar o resultado seguinte -
```
You are really a nice person, Have a nice time! 
```

### Funções PHP com Parâmetros

O PHP lhe dá a opção de passar seus parâmetros dentro de uma função. Você pode passar quantos parâmetros quiser. Esses parâmetros funcionam como variáveis ​​dentro da sua função. O exemplo a seguir usa dois parâmetros inteiros e os adiciona juntos e depois os imprime.
```
<html> 
 
   <head> 
      <title>Writing PHP Function with Parameters</title> 
   </head> 
 
   <body> 
 
      <?php 
         function addFunction($num1, $num2) { 
            $sum = $num1 + $num2; 
            echo "Sum of the two numbers is : $sum"; 
         } 
 
         addFunction(10, 20); 
      ?> 
 
   </body> 
 </html> 
```

Isto irá mostrar o resultado seguinte -
```
Sum of the two numbers is : 30 
```

### Passando Argumentos por Referência

É possível passar argumentos para funções por referência. Isso significa que uma referência à variável é manipulada pela função em vez de uma cópia do valor da variável.

Quaisquer alterações feitas em um argumento nesses casos alterarão o valor da variável original. Você pode passar um argumento por referência, adicionando um e comercial ao nome da variável na chamada de função ou na definição da função.

O exemplo a seguir descreve os dois casos.
```
<html> 
 
   <head> 
      <title>Passing Argument by Reference</title> 
   </head> 
 
   <body> 
 
      <?php 
         function addFive($num) { 
            $num += 5; 
         } 
 
         function addSix(&$num) { 
            $num += 6; 
         } 
 
         $orignum = 10; 
         addFive( $orignum ); 
 
         echo "Original Value is $orignum<br />"; 
 
         addSix( $orignum ); 
         echo "Original Value is $orignum<br />"; 
      ?> 
 
   </body> 
 </html> 
```

Isto irá mostrar o resultado seguinte -
```
Original Value is 10 
 Original Value is 16 
```

### Funções PHP retornando valor

Uma função pode retornar um valor usando a instrução de retorno em conjunto com um valor ou objeto. return interrompe a execução da função e envia o valor de volta ao código de chamada.

Você pode retornar mais de um valor de uma função usando a matriz de retorno (1,2,3,4).

O exemplo a seguir usa dois parâmetros inteiros e os adiciona juntos e, em seguida, retorna sua soma ao programa de chamada. Observe que a palavra-chave return é usada para retornar um valor de uma função.
```
<html> 
 
   <head> 
      <title>Writing PHP Function which returns value</title> 
   </head> 
 
   <body> 
 
      <?php 
         function addFunction($num1, $num2) { 
            $sum = $num1 + $num2; 
            return $sum; 
         } 
         $return_value = addFunction(10, 20); 
 
         echo "Returned value from the function : $return_value"; 
      ?> 
 
   </body> 
 </html> 
```

Isto irá mostrar o resultado seguinte -
```
Returned value from the function : 30 
```

### Configurando Valores Padrão para Parâmetros de Função

Você pode definir um parâmetro para ter um valor padrão se o chamador da função não o passar.

A seguinte função imprime NULL no caso de uso não passa nenhum valor para esta função.
```
<html> 
 
   <head> 
      <title>Writing PHP Function which returns value</title> 
   </head> 
 
   <body> 
 
      <?php 
         function printMe($param = NULL) { 
            print $param; 
         } 
 
         printMe("This is test"); 
         printMe(); 
      ?> 
 
   </body> 
 </html> 
```

Isto irá produzir resultado seguinte -
```
This is test 
```

### Chamadas dinâmicas da função

É possível atribuir nomes de função como strings a variáveis ​​e, em seguida, tratar essas variáveis ​​exatamente como o nome da função em si. O exemplo a seguir descreve esse comportamento.
```
<html> 
 
   <head> 
      <title>Dynamic Function Calls</title> 
   </head> 
 
   <body> 
 
      <?php 
         function sayHello() { 
            echo "Hello<br />"; 
         } 
 
         $function_holder = "sayHello"; 
         $function_holder(); 
      ?> 
 
   </body> 
 </html> 
```

Isto irá mostrar o resultado seguinte -
```
Hello 

```