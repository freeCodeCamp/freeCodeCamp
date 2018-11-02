---
title: Nested If Statement
localeTitle: Aninhado se declaração
---
# Aninhado se declaração

A instrução Nested If é usada quando, ao criar uma declaração if, você deseja um ponto secundário de validação ou se a instrução estiver dentro dela.
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

Portanto, uma vez que prefixamos Preço e Quantidade, a saída seria:
```
Price of an item is 200, and we have 20 in quantity. 

```