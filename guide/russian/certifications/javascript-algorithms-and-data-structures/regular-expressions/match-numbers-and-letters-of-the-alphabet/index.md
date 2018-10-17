---
title: Match Numbers and Letters of the Alphabet
localeTitle: Спичечные номера и буквы алфавита
---
## Спичечные номера и буквы алфавита

В этой задаче вам предлагается вернуть коллекцию обоих чисел и букв, извлеченных из строки. Наша цель - создать одно регулярное выражение, которое отображает диапазон букв между h и s, а числа от 2 до 6.

### Подсказка 1:

Вы используете метод match ()? Если да, то вызываете ли вы метод из соответствующей переменной? т.е.

```javascript
  let input_string = "The string you are testing on" 
  let yourRegExp = /[hs]/; 
  let correct_result = input_string.match(yourRegExp); // passes - returns characters H to S 
 
  let incorrect_result = yourRegExp.match(input_string); // fails - .match() is not a function 
```

### Подсказка 2:

Вы не забыли включить флагов регулярного выражения, например «i», для игнорирования случая и «g» для получения нескольких значений? Если да, то включаете ли вы как совпадение символов для чисел И букв?

```javascript
let regexp = /[a-z1-100]/ig 
 // above code returns all characters from A to Z, along with all numbers from 1 to 100 
 // this includes the letter A and Z and the numbers 1 and 100 
```

### Предупреждение о спойлере - решение впереди

## Решение

```javascript
let quoteSample = "Blueberry 3.141592653s are delicious."; 
 let myRegex = /[h-s2-6]/ig; // Change this line 
 let result = quoteSample.match(myRegex); // Change this line 

```