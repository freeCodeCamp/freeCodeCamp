---
title: C++ Arrays
localeTitle: Массивы C ++
---
## Что такое массивы?

Массив представляет собой ряд элементов одного типа данных, которые хранятся в смежных ячейках памяти и к которым можно обращаться индивидуально.

Например, массив, содержащий 5 целых чисел (int), объявляется так:

```C++
int numbers [5]; 
```

Начальное заполнение значений при объявлении массива (initializiation):

```C++
//Initialization with entries: 
 int numbers [5] = {1, 2, 3, 4, 5}; 
 
 //Initialization with no values: 
 int numbers [5] = {}; 
 
 //Initialization with declaration: 
 int numbers [] = {1, 2, 3, 4, 5}; 
 //Note that here the number of values defines the size of the array. 
 //In the examples above, the size was fixed beforehand 
```

**Обратите внимание,** что массивы на C ++ не могут изменять размер. Т.е. после объявления массива размером 5 он не может быть увеличен или уменьшен. Если вам нужен большой массив с однотипных элементов, то вам придется скопировать все его элементы в новый массив большего размера.

### Доступ:

Элементы из массива можно получить через ссылку на их позицию в массиве. (Отсчет начинается с 0).  
Пример:

```C++
x = numbers[0]; // = 1. [0] == first position 
 numbers[2] = 55; // Sets the third position (3) to the new number 55 
 //numbers[] is now: {1, 2, 55, 4, 5} 

```
