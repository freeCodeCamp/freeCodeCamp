---
title: For Loop
localeTitle: Para loop
---
# Para loop

O loop `for` executa um bloco de código até que uma condição especificada seja falsa. Embora um `for` circuito parece um [`while` ciclo](https://guide.freecodecamp.org/csharp/while-loop) , os desenvolvedores devem usá-los **corretamente.** Use `while` laços quando o número de iterações são variáveis, de outro modo utilizar `for` lacetes. Um uso comum de loops `for` são iterações de array. 1

## Sintaxe

```csharp
for ((Initial variable); (condition); (step)) 
    { 
    (code) 
    } 
```

O loop C # for consiste em três expressões e algum código.

## Descrição

*   _Variável inicial_ : seu estado inicial, por exemplo, int i = 0;
*   _Condição_ : Enquanto esta condição for verdadeira, o código continuará a ser executado, por exemplo, i <= 5;
*   _Etapa_ : O incremento ou decremento da variável inicial, por exemplo, i ++ ou i- = 2.

## Exemplo

```csharp
int[] array = { 1, 2, 3, 4, 5 }; 
 for (int i = 0; i < array.Length; i++) 
 { 
    Console.WriteLine("Item on index {0} is {1}", i, array[i]); 
 } 
```

## Saída:
```
> Item on index 0 is 1 
 > Item on index 1 is 2 
 > Item on index 2 is 3 
 > Item on index 3 is 4 
 > Item on index 4 is 5 
```

### Fontes

1 https://docs.microsoft.com/pt-br/dotnet/csharp/language-reference/keywords/for