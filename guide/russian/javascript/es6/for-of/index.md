---
title: for-of loop
localeTitle: for-of loop
---## for-of Loop

for-of loop может использоваться для итерации по вещам, которые не являются массивами, но являются итерабельными, как коллекция DOM, строка, множество, аргументы или карта.

```javascript
const fruits = ['Orange','Apple','Grapes','Banana']; 
 for (const fruit of fruits) 
 { 
    console.log(fruit); 
 } 
```

Вышеприведенный фрагмент вернет нам элементы в массиве выше.

## for-of loop в знании индекса

Что делать, если мы хотим знать индекс каждого элемента тоже. В этом случае мы можем перебирать fruit.entries (), который дает нам ArrayIterator.

```javascript
for (const fruit of fruits.entries()) 
 { 
    console.log(fruit); 
 } 
```

В приведенном выше фрагменте фрукты будут массивом с двумя предметами. 0-й элемент будет содержать индекс, а первый элемент будет содержать фактическое имя фрукта. Выход будет выглядеть так:
```
[0, "Orange"] 
 
 [1, "Apple"] 
 
 [2, "Grapes"] 
 
 [3, "Banana"] 
```

Мы можем еще больше разрушить плоды, как показано ниже:

```javascript
for (const [index,fruit] of fruits.entries()) 
 { 
    console.log(index,fruit); 
 } 
```

## for-of loop в итерации по неизвестному числу аргументов

for-of loop очень полезен при итерации по неизвестному числу аргументов функции.

Предположим, мы хотим добавить числа, которые передаются функции, а количество аргументов не фиксировано.

«arguments» - это специальное ключевое слово в javascript, которое дает нам массив Array-ish (not array) и дает нам все аргументы.

```javascript
function addNumbers() 
 { 
    let sum = 0; 
    for (const num of arguments) 
       sum+=num; 
    return sum; 
 } 
 addNumbers(1, 2, 3, 4, 5); // 15 
```

Здесь аргументы не являются истинным массивом, но мы можем перебирать его с помощью цикла for-of.

## for-of loop для итерации по строке

Мы можем использовать for-of loop для итерации по строке, чтобы дать нам символ по характеру строки.

```javascript
const name = 'John Doe'; 
 for (const char of name) 
    console.log(char); 
```

что приводит к следующему результату: символы 'J', 'o', 'h', 'n', '', 'D', 'o', 'e'

## for-of loop для итерации по набору DOM

Коллекции DOM не являются истинным типом массива. Они обычно являются NodeList для большинства браузеров. Если мы создадим несколько абзацев и хотим перебрать их, чтобы назначить какое-либо событие на каждом из абзацев, мы можем использовать цикл for-of.

```javascript
const paragraphs = document.querySelectorAll('p'); 
```

Здесь абзацы - это NodeList, который может быть повторен с использованием цикла for-of.

```javascript
for (const para of paragraphs) 
 { 
    console.log(para); 
    // We can add event listeners to each para here 
 } 

```