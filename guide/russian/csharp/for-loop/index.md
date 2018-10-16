---
title: For Loop
localeTitle: Для цикла
---# Для цикла

Цикл for выполняет блок кода несколько раз, пока указанное условное выражение не примет значение false.

Анатомия цикла for:
```
for (initialization; condition; iterator) 
 { 
    body 
 } 
```

*   Инициализация. Оператор инициализации устанавливает начальное условие и запускается только один раз, прежде чем вводить тело цикла.
*   condition - логическое выражение, которое определяет, должно ли тело цикла выполняться снова или цикл должен выйти.
*   итератор - выполняется после каждой итерации тела цикла.

### Пример 1
```
for (int i = 0; i < 5; i++) 
 { 
    Console.WriteLine("Number " + i); 
 } 
```

### Вывод:
```
> Number 0 
 > Number 1 
 > Number 2 
 > Number 3 
 > Number 4 
```

### Пример 2.
```
int j = 0; 
 for (int i = 0; j < 5; i++) 
 { 
    Console.WriteLine("Numbers {0} {1}", i, j); 
    j++; 
 } 
```

### Вывод:
```
> Numbers 0 0 
 > Numbers 1 1 
 > Numbers 2 2 
 > Numbers 3 3 
 > Numbers 4 4 
```

### Пример 3 - упрощение примера 2
```
for (int i = 0, j = 0; i < 5 && j < 5; i++, j++) 
 { 
    Console.WriteLine("Numbers {0} {1}", i, j); 
 } 
```

### Вывод:
```
> Numbers 0 0 
 > Numbers 1 1 
 > Numbers 2 2 
 > Numbers 3 3 
 > Numbers 4 4 
```

### Пример 4.
```
for (int i = 5; i > 0; i--) 
 { 
    Console.WriteLine("Number " + i); 
 } 
```

### Вывод:
```
> Number 5 
 > Number 4 
 > Number 3 
 > Number 2 
 > Number 1 
```

### Пример 5.
```
// Infinite loop - The loop body is executed infinitely 
 for (; ;) 
 { 
    Console.WriteLine("The universe is infinite"); 
 } 
 
 // Anything after infinite loop is reported as "Unreachable code detected" in Visual Studio 
 Console.WriteLine("Never considered for execution"); 
```

### Вывод:
```
> The universe is infinite 
 > The universe is infinite 
 > The universe is infinite 
 > .... 
 > .... 
```

### Пример 6.
```
int i = 0; 
 for (; i < 5;) 
 { 
    Console.WriteLine("Number " + i); 
    i++; 
 } 
```

### Вывод:
```
> Number 0 
 > Number 1 
 > Number 2 
 > Number 3 
 > Number 4 
```

### Другие источники

*   [Документация Microsoft](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/for)

## Конец