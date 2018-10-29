---
title: If
localeTitle: E se
---
# E se

A instrução if executa diferentes blocos de código com base nas condições.
```
if (condition) 
 { 
    // Do something when `condition` is true 
 } 
 else 
 { 
    // Do something when `condition` is false 
 } 
```

Quando a `condition` é verdadeira, o código dentro da seção `if` executado, caso `else` executado. Às vezes você precisaria adicionar uma segunda condição. Para facilitar a leitura, você deve usar `else if` vez de aninhar `if` statements. em vez de escrever:
```
if (condition) 
 { 
    // Do something if `condition` is true 
 } 
 else 
 { 
    if (anotherCondition) 
    { 
        // Do something if `anotherCondition` is true 
    } 
    else 
    { 
        // Do something if `condition` AND `anotherCondition` is false 
    } 
 } 
```

Você poderia usar a escrita muito mais concisa:
```
if (condition) 
 { 
    // Do something if `condition` is true 
 } 
 else if (anotherCondition) 
 { 
    // Do something if `anotherCondition` is ture 
 } 
 else 
 { 
    // Do something if `condition` AND `anotherCondition` is false 
 } 
```

Também é possível verificar se a condição é falsa e atuar nela sem que seja necessária uma instrução else.
```
if(!condition) 
 { 
 //do something if the condition is false 
 } 
```

```
int number = 3; 
 //!= implies that you wish to check if the object's value is not equal to the value next to it 
 if(number !=2) 
 { 
     Console.WriteLine("Number is not 2"); 
 } 
```

Observe que o `else` e `else if` seções não forem necessárias, enquanto `if` for obrigatório.

## Exemplo
```
    Console.WriteLine("Who are you? "); 
    string name = Console.ReadLine(); 
 
    if (name == "John") 
    { 
        Console.WriteLine("Hi John!"); 
    } 
    else if (name == "Fabio") 
    { 
        Console.WriteLine("Oh, it's you Fabio :)"); 
    } 
    else 
    { 
        Console.WriteLine("Oh! I thought you were John or Fabio. Anyway, nice to meet you {0}!", name); 
    } 
 
    /* Run and type some names: 
        -> If name is "John", then output is "Hi John!" 
        -> If name is "Fabio", then output is "Oh, it's you Fabio :)" 
        -> If name is neither "John" nor "Fabio", output is "Oh! I thought you were John or Fabio. Anyway, nice to meet you {0}!" where {0} contains the name. 
    */ 
```

A instrução if precisa de um resultado booleano, isto é, verdadeiro ou falso. Em algumas linguagens de programação, vários tipos de dados podem ser automaticamente convertidos em booleanos, mas em C #, é necessário tornar o resultado booleano especificamente. Por exemplo, você não pode usar se (número), mas você pode comparar o número para algo, para gerar um verdadeiro ou falso.