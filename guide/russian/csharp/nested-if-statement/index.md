---
title: Nested If Statement
localeTitle: Вложенное утверждение If
---
# Вложенное утверждение If

Заявление Nested If используется, когда при создании оператора if вы хотите получить вторичную точку проверки или внутри нее.
```
int Price = 100; 
 int Quantity = 20; 
 
 if (Price == 100) 
 { 
  if (Quantity == 20) 
  { 
    Console.WriteLine("Price of an item is 200, and we have 20 in quantity."); 
  } 
 } 
```

Поэтому, поскольку мы предопределили цену и количество, выход будет:
```
Price of an item is 200, and we have 20 in quantity. 

```