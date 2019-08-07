---
title: Dynamic Programming
localeTitle: Динамическое программирование
---
## Динамическое программирование

Динамическое программирование (DP) - это метод программирования для решения задач, где вычисления его подзадач перекрываются: вы пишете свою программу таким образом, чтобы избежать перекомпоновки уже разрешенных проблем. Этот метод обычно применяется в сочетании с memoization, который является методом оптимизации, в котором вы кэшируете ранее вычисленные результаты и возвращаете кешированный результат, когда снова требуется такое же вычисление.

Пример с серией Фибоначчи, который определяется как:

`F(N) = F(N-1) + F(N-2)`

Это дерево, чтобы найти F (5):

![Дерево Фибоначчи](https://cdn-media-1.freecodecamp.org/imgr/59Rpw.png)

Для вычисления F (5) потребуется вычислить много раз одно и то же F (i). Использование рекурсии:

```python
def fib(n) 
 { 
    if n <= 1: 
        return n 
    return fib(n-1) + fib(n-2); 
 } 
```

И ниже - оптимизированное решение (с использованием DP)

Для F (5) это решение будет генерировать вызовы, изображенные на изображении выше, работающие в O (2 ^ N).

Вот оптимизированное решение, которое использует DP и memoization:

```python
lookup = {1 : 1, 2 : 1} # Create a lookup-table (a map) inizialized with the first 2 Fibonacci's numbers 
 
 def fib(n) 
 { 
    if n in lookup: # If n is already computed 
        return n # Return the previous computed solution 
    else 
        lookup[n] = fib(n-1) + fib(n-2) # Else, do the recursion. 
    return lookup[n] 
 } 
```

Кэширование вычисляемых решений в таблице поиска и запрос перед переходом рекурсии позволит программе иметь время работы O (N).

#### Дополнительная информация:

[Что такое динамическое программирование на StackOverflow](https://stackoverflow.com/questions/1065433/what-is-dynamic-programming) [Разница между memoization и DP на StackOverflow](https://stackoverflow.com/questions/6184869/what-is-the-difference-between-memoization-and-dynamic-programming)