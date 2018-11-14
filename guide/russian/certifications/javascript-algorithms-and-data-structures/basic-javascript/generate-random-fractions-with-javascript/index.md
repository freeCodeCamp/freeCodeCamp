---
title: Generate Random Fractions with JavaScript
localeTitle: Генерировать случайные дроби с помощью JavaScript
---
# Генерировать случайные дроби с помощью JavaScript

Случайные числа полезны для создания случайного поведения.

JavaScript имеет функцию `Math.random()` которая генерирует случайное десятичное число между 0 (включительно) и не совсем до 1 (исключая). Таким образом, `Math.random()` может возвращать 0, но никогда не возвращает 1.

## Заметка

Подобно сохранению значений с помощью Equal Operator, все вызовы функций будут разрешены до выполнения возврата, поэтому мы можем вернуть значение функции `Math.random()` .

## инструкции

Измените randomFraction, чтобы вернуть случайное число вместо возврата 0.

## **Внимание !!!**

### **Осторожно, спойлеры !!**

Решение:
```
function randomFraction() { 
  // Only change code below this line. 
  var result = 0; 
  // Math.random() can generate 0. We don't want to     return a 0, 
  // so keep generating random numbers until we get one     that isn't 0 
  while (result === 0) { 
    result = Math.random(); 
  } 
 
  return result; 
  // Only change code above this line. 
 } 

```