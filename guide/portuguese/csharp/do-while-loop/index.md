---
title: Do while loop
localeTitle: Fazer loop while
---
# Do while loop

O ciclo `do while` executa um bloco de código até que a condição booleana seja falsa.

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
