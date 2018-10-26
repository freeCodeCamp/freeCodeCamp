---
title: Learn About Functional Programming
localeTitle: Узнайте о функциональном программировании
---
## Узнайте о функциональном программировании

Функция имеет вход или параметр `const myFunc = (input) => { ...code to execute... }` . В этом случае ввод - сколько чашек чая должно быть создано.  

### метод

Чтобы передать этот вызов, необходимо изменить только одну строку кода. Функция `getTea()` должна вызываться и храниться в переменной `tea4TeamFCC` . Обязательно прочитайте `getTea()` и точно поймите, что она делает. Функция принимает одну переменную - `numOfCups` . `teaCups[]` массив `teaCups[]` и цикл for настроен на подсчет количества чашек, переданных в функцию. Новая чашка чая затем подталкивается к массиву через каждую итерацию цикла for.

Таким образом, получается массив, полный количества чашек, первоначально переданных в `getTea()` .

### Решение

```javascript
/** 
 * A long process to prepare tea. 
 * @return {string} A cup of tea. 
 **/ 
 const prepareTea = () => 'greenTea'; 
 
 /** 
 * Get given number of cups of tea. 
 * @param {number} numOfCups Number of required cups of tea. 
 * @return {Array<string>} Given amount of tea cups. 
 **/ 
 const getTea = (numOfCups) => { 
  const teaCups = []; 
 
  for(let cups = 1; cups <= numOfCups; cups += 1) { 
    const teaCup = prepareTea(); 
    teaCups.push(teaCup); 
  } 
 
  return teaCups; 
 }; 
 
 // Add your code below this line 
 
 const tea4TeamFCC = getTea(40); // :( 
 
 // Add your code above this line 
 
 console.log(tea4TeamFCC); 

```