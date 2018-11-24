---
title: Functions in C++
localeTitle: Funções em C ++
---
## Definição:

Uma função é um grupo de instruções que juntas executam uma tarefa. Todo programa C ++ tem pelo menos uma função, que é main ().

Uma declaração de função informa ao compilador sobre o nome de uma função, tipo de retorno e parâmetros. Uma definição de função fornece o corpo real da função.

## A forma geral de uma definição de função C ++:

```cpp
return_type function_name( parameter list ) 
 { 
   body of the function 
 } 
```

### Tipo de retorno:

Uma função pode retornar um valor. O _tipo de_ retorno _é o tipo de dados do valor que a função retorna. Algumas funções executam as operações desejadas sem retornar um valor. Nesse caso, o_ tipo de _retorno_ é a palavra-chave void.

### Nome da função:

Este é o nome real da função. O nome da função e a lista de parâmetros juntos constituem a assinatura da função.

### Parâmetros:

Um parâmetro é como um marcador de posição. Quando uma função é chamada, você passa um valor para o parâmetro. Este valor é referido como parâmetro ou argumento real. A lista de parâmetros refere-se ao tipo, ordem e número dos parâmetros de uma função. Parâmetros são opcionais; isto é, uma função pode não conter parâmetros.

### Corpo da função:

O corpo da função contém uma coleção de instruções que definem o que a função faz.

## Exemplo:

```cpp
int max(int num1, int num2) 
 { 
   // local variable declaration 
   int result; 
 
   if (num1 > num2) 
      result = num1; 
   else 
      result = num2; 
 
   return result; 
 } 
```

## Por que as funções são importantes?

As funções suportam a modularidade (decomposição do trabalho em partes menores chamadas módulos), que é uma característica essencial da OOP que separa principalmente C ++ de C. Ter funções específicas para executar tarefas específicas elimina a confusão e reduz o tamanho da função principal. A função também executa a capacidade de reutilização do código. Então, da próxima vez que você tiver que calcular o máximo de dois números diferentes antes e novamente no mesmo programa, você não precisa copiar e colar seu código. Você só tem que chamar a função e faz o resto do trabalho.

## Mais Informações

*   [TutorialsPoint](https://www.tutorialspoint.com/cplusplus/cpp_functions.htm)