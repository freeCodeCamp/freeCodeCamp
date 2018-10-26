---
title: Do while loop
localeTitle: Сделайте цикл while
---
# Делать while Loop

Цикл `do while` while выполняет блок кода один раз и до тех пор, пока условие не станет ложным. Они являются частным случаем [циклов `while`](https://guide.freecodecamp.org/csharp/while-loop) : они выполняют блок кода один раз, а затем до тех пор, пока условие не будет ложным. Обычное использование `do while` - это входные проверки.

## пример
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

## Вывод:
```
> Type A to continue: b 
 > Type A to continue: g 
 > Type A to continue: A 
 > Bye! 
```

#### Дополнительная информация:

*   [Microsoft C # - do](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/do)
*   [Dot Net Perls - do](https://www.dotnetperls.com/do)