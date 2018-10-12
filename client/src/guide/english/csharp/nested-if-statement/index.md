---
title: Nested If Statement
---

# Nested If Statement

The Nested If Statement is used when upon creating an if statement you want a secondary point of validation or if statement inside of it.

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

Therefore since we've predetermined Price and Quantity the output would be:

```
Price of an item is 200, and we have 20 in quantity.
```
