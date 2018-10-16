---
title: Foreach Loop
localeTitle: Foreach Loop
---
## Foreach Loop

O loop `foreach` executa um bloco de código para cada item em uma coleção. O benefício do loop `foreach` é que você não precisa saber quantos itens estão dentro da coleção para iterar por ele; você simplesmente diz ao seu loop `foreach` para percorrer a coleção, contanto que haja itens dentro dela. É útil para percorrer listas, matrizes, tabelas de dados, IEnumerables e outras estruturas de dados semelhantes a listas. Pode ser menos eficiente do que um muito bem desenhado `for` loop, mas a diferença é insignificante na maioria dos casos.

### Exemplo

```csharp
foreach (element in iterable-item) 
 { 
    // body of foreach loop 
 } 
 
 List<string> Names = new List<string>{ "Jim", "Jane", "Jack" } 
 
 foreach(string name in Names) 
 { 
    Console.WriteLine("We have " + name); 
 } 
```

### Saída:

```sh
> We have Jim 
 > We have Jane 
 > We have Jack 

```