---
title: While Loop
localeTitle: While Loop
---# While Loop

O loop while executa um bloco de código até que uma condição especificada seja falsa. Como o teste da expressão while ocorre antes de cada execução do loop, um loop while executa zero ou mais vezes. Isso difere do loop do, que é executado uma ou mais vezes porque o teste da expressão ocorre após a execução do loop. 1

## Exemplo

```csharp
int i = 0; 
 while (i < 5) 
 { 
    Console.WriteLine("Number " + i); 
    i++; 
 } 
```

### Saída:
```
> Number 0 
 > Number 1 
 > Number 2 
 > Number 3 
 > Number 4 
```

## Outros usos

Os loops while são geralmente usados ​​para infinitas iterações usando (por exemplo) `while (true)` , apenas para serem finalizados por uma condição não relacionada à condição inicial do loop.

```csharp
int i = 0; 
 while (true) 
 { 
    if(i<50){ 
        Console.WriteLine("Number " + i); 
        i++; 
    } 
    else{ 
        Console.WriteLine("End of loop"); 
        break; 
    } 
 } 
```

## Diferenças para o loop `for`

As maiores diferenças entre o `for` e `while` voltas é que `while` é normalmente usado quando um desenvolvedor não é certeza de um número exato de iterações do loop, e `for` é usado quando está claro quantas vezes para percorrer código.

### Fontes

*   [Microsoft C # - enquanto](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/while)