---
title: Nested If Statement
localeTitle: Anidado si declaración
---
# Anidado si declaración

La instrucción anidada If se utiliza cuando, al crear una instrucción if, desea un punto de validación secundario o una declaración dentro de ella.
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

Por lo tanto, dado que hemos predeterminado Precio y Cantidad, la salida sería:
```
Price of an item is 200, and we have 20 in quantity. 

```