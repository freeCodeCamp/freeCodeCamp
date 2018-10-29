---
title: New String Functions
localeTitle: Новые строковые функции
---## Новые строковые функции

Следующие четыре функции добавляются к строкам в ES6.

*   начинается с
*   EndsWith
*   включает
*   повторение

## начинается с:

Это чувствительная к регистру функция, которая помогает нам определить, начинается ли конкретная строка с некоторой подстроки.

startsWith принимает второй необязательный аргумент, называемый положением, который мы можем использовать в случае, когда мы хотим пропустить определенное число символов из начала строки перед поиском.

```javascript
const str ='Rachna'; 
 str.startsWith('Rad') //false 
 str.startsWith('ra') //false as it is case sensitive 
 str.startsWith('Ra') //true 
 str.startsWith('ch',2) //true as we are searching from the second position 
 str.startsWith('ch',3) //false 
```

## EndsWith

Это чувствительная к регистру функция, которая помогает нам определить, заканчивается ли конкретная строка некоторой подстрокой.

endsWith принимает второй необязательный аргумент endPosition, который мы можем использовать для включения количества символов перед поиском.

```javascript
const city= 'Delhi'; 
 city.endsWith('Hi'); //false as it is case sensitive 
 city.endsWith('hi');//true 
 city.endsWith('l',3);//true - include only first three characters before searching 
 city.endsWith('l',4);//false 
```

## включает

функция включает также функцию, чувствительную к регистру, которая проверяет, присутствует ли searchString в любом месте строки.

```javascript
const name='John Doe'; 
 name.includes('do'); //false 
 name.includes('D'); //true 
 name.includes('Do'); //true 
```

## повторение

repeat позволяет нам взять строку и повторить ее несколько раз.

```javascript
const str = 'This is repeated'; 
 str.repeat(3); //"This is repeatedThis is repeatedThis is repeated" 
```

Функция повтора может использоваться для ввода строки из левой части с несколькими пробелами.