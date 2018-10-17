---
title: Do while loop
localeTitle: Fazer loop while
---
# Do while loop

O `do while` ciclo executa um bloco de código de uma vez até que uma condição é falsa. Eles são um caso particular de [loops `while`](https://guide.freecodecamp.org/csharp/while-loop) : eles executam um bloco de código uma vez e depois até que a condição seja falsa. Um uso comum de loops `do while` é a verificação de entrada.

## Exemplo
```
do 
 { 
    //execute code block 
 
 
 } while(boolean expression); 
 
 
 string input = ""; 
 do 
 { 
    Console.WriteLine("Type A to continue: "); 
    input = Console.ReadLine(); 
 } while(input != "A"); 
 
 Console.WriteLine("Bye!"); 
```

## Saída:
```
> Type A to continue: b 
 > Type A to continue: g 
 > Type A to continue: A 
 > Bye! 
```

#### Mais Informações:

*   [Microsoft C # - fazer](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/do)
*   [Dot Net Perls - do](https://www.dotnetperls.com/do)