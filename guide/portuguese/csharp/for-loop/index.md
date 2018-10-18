---
title: For Loop
localeTitle: Para loop
---# Para loop

O loop for executa um bloco de código repetidamente até que uma expressão condicional especificada seja avaliada como falsa.

Anatomia do loop for:
```
for (initialization; condition; iterator) 
 { 
    body 
 } 
```

*   initialization - A instrução de inicialização define a condição inicial e é executada apenas uma vez antes de você entrar no corpo do loop.
*   condição - Expressão booleana que determina se o corpo do loop deve ser executado novamente ou se o loop deve sair.
*   iterator - Executa após cada iteração do corpo do loop.

### Exemplo 1
```
for (int i = 0; i < 5; i++) 
 { 
    Console.WriteLine("Number " + i); 
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

### Exemplo 2
```
int j = 0; 
 for (int i = 0; j < 5; i++) 
 { 
    Console.WriteLine("Numbers {0} {1}", i, j); 
    j++; 
 } 
```

### Saída:
```
> Numbers 0 0 
 > Numbers 1 1 
 > Numbers 2 2 
 > Numbers 3 3 
 > Numbers 4 4 
```

### Exemplo 3 - Simplificação do Exemplo 2
```
for (int i = 0, j = 0; i < 5 && j < 5; i++, j++) 
 { 
    Console.WriteLine("Numbers {0} {1}", i, j); 
 } 
```

### Saída:
```
> Numbers 0 0 
 > Numbers 1 1 
 > Numbers 2 2 
 > Numbers 3 3 
 > Numbers 4 4 
```

### Exemplo 4
```
for (int i = 5; i > 0; i--) 
 { 
    Console.WriteLine("Number " + i); 
 } 
```

### Saída:
```
> Number 5 
 > Number 4 
 > Number 3 
 > Number 2 
 > Number 1 
```

### Exemplo 5
```
// Infinite loop - The loop body is executed infinitely 
 for (; ;) 
 { 
    Console.WriteLine("The universe is infinite"); 
 } 
 
 // Anything after infinite loop is reported as "Unreachable code detected" in Visual Studio 
 Console.WriteLine("Never considered for execution"); 
```

### Saída:
```
> The universe is infinite 
 > The universe is infinite 
 > The universe is infinite 
 > .... 
 > .... 
```

### Exemplo 6
```
int i = 0; 
 for (; i < 5;) 
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

### Outros recursos

*   [Documentação da Microsoft](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/for)

## Fim