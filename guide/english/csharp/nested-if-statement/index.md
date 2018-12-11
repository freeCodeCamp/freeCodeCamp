---
title: Nested If Statement
---

# Nested If Statement

A Nested If Statement is used when a secondary point of validation or If statement is required inside the first If statement.

# Example
```csharp
int Price = 100;
int Quantity = 20;

if (Price == 100)
{
  if (Quantity == 20)
  {
    Console.WriteLine("The price of the item is 100, and we have 20 in quantity.");
  }
}
```

Therefore, since we've predetermined Price and Quantity, the output would be:

```
The price of the item is 100, and we have 20 in quantity.
```
