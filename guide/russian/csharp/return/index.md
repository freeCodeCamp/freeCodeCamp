---
title: Return Statement
localeTitle: Операция возврата
---
# Операция возврата

Оператор `return` завершает выполнение метода, внутри которого он появляется, и возвращает управление вызывающему методу. Он может или не может вернуть значение.

Если оператор `return` находится внутри блока `try` и если есть блок `finally` , тогда элемент управления передается блоку `finally` , после чего он возвращается вызывающему методу.

## пример
```
class Calc 
 { 
  static int Sum(int i, int j) 
  { 
    return i + j; 
  } 
 
  static void Main() 
  { 
    int a = 4; 
    int b = 3; 
    int sum = Sum(a, b); 
    Console.WriteLine($"The sum of {a} and {b} is {result}"); 
 
    // To keep the console from closing 
    Console.ReadLine(); 
  } 
 } 
```

## Вывод:

\`\` \`

> Сумма 4 и 3 равна 7 \`\`