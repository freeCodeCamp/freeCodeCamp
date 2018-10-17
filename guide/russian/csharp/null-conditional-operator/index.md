---
title: Null-conditional Operator
localeTitle: Нуль-условный оператор
---
# Нуль-условный оператор

Операторы с нулевым условием допускают нулевую проверку с минимальным количеством кода. Например, если бы у вас было переменная сотрудника типа Employee с свойством типа Address, вы можете выполнить нулевую проверку следующим образом:

```csharp
Address address = null; 
 if (employee != null) 
 { 
    address = employee.Address; 
 } 
```

Вы можете использовать стандартный условный оператор, чтобы сделать эту проверку более кратким:

```csharp
Address address = employee != null ? employee.Address : null; 
```

Однако в C # 6.0 были введены нуль-условные операторы, так что теперь приведенная выше строка может просто представляться следующим образом:

```csharp
Address address = student?.Address; 
```

Если employee равен null, адрес просто будет присвоен null, и не будет NullReferenceExeception. Это становится более полезным с более глубокими графами объектов, так как вы можете обрабатывать цепочку условного доступа членов.

Например:

```csharp
string city = student?.Address?.City; 
```

Операторы с нулевым условием являются короткозамкнутыми, поэтому, как только одна проверка доступа к условному члену возвращает null, остальные не имеют места.

# Оператор Null-coalescing

Другой полезной опцией нулевой проверки является оператор с нулевым коалесцированием. Он возвращает левый операнд, если операнд не равен нулю; в противном случае он возвращает правый операнд.

Например:

```csharp
public string GetStringValue() 
 { 
    return null; 
 } 
 
 // Display the value of s if s is NOT null. If x IS null, display the string "It was null." 
 
 string x = GetStringValue(); 
 
 Console.WriteLine(x ?? "It was null."); 
 
 // Result: 
 
 "It was null." 

```