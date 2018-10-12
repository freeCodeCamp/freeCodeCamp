---
title: Array.prototype.every
localeTitle: Array.prototype.every
---
Метод `every()` проверяет, прошли ли все элементы массива тест, реализованный предоставленной функцией.

**Синтаксис**

```javascript
  arr.every(callback[, thisArg]) 
```

## параметры

*   **callback** Функция для проверки для каждого элемента, принимая три аргумента:
    
    *   **currentValue** (обязательно)
        
        Текущий элемент обрабатывается в массиве.
        
    *   **индекс** (необязательно)
        
        Индекс текущего элемента обрабатывается в массиве.
        
    *   **массив** (необязательно)
        
        Каждый массив был вызван.
        
*   **thisArg** Необязательно. Значение, которое необходимо использовать при выполнении обратного вызова.
    

[Ссылка MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) | [Ссылка MSDN](https://msdn.microsoft.com/en-us/LIBRary/ff679981%28v=vs.94%29.aspx)

## Описание

`every` метод вызывает функцию `callback` один раз для каждого элемента массива в порядке возрастания индекса, пока функция `callback` вернет значение false. Если элемент, вызывающий `callback` для возврата false, найден, каждый метод немедленно возвращает `false` . В противном случае каждый метод возвращает `true` .

Функция обратного вызова не вызывается для отсутствующих элементов массива.

В дополнение к объектам массива, каждый метод может использоваться любым объектом, обладающим свойством length и имеющим численные индексированные имена свойств. `every` не мутирует массив, на который он вызывается.

## Примеры

```javascript
  function isBigEnough(element, index, array) { 
    return element >= 10; 
  } 
  [12, 5, 8, 130, 44].every(isBigEnough);   // false 
  [12, 54, 18, 130, 44].every(isBigEnough); // true 
 
  // Define the callback function. 
  function CheckIfEven(value, index, ar) { 
      document.write(value + " "); 
 
      if (value % 2 == 0) 
          return true; 
      else 
          return false; 
  } 
 
  // Create an array. 
  var numbers = [2, 4, 5, 6, 8]; 
 
  // Check whether the callback function returns true for all of the 
  // array values. 
  if (numbers.every(CheckIfEven)) 
      document.write("All are even."); 
  else 
      document.write("Some are not even."); 
 
  // Output: 
  // 2 4 5 Some are not even. 

```