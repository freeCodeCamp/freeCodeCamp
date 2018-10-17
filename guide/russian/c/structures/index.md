---
title: Structures
localeTitle: сооружения
---
## Структуры в C

### Что такое структуры?

*   **Структура** - это определяемый пользователем тип в C. Он основан на идее, что в определенные моменты программист хочет управлять не только примитивными типами данных, но и определенными программистом типами данных.
*   **Структура** , как следует из названия, состоит из различных примитивных типов данных, таких как символ, целые числа, переменные с плавающей запятой, массивы и т. Д.
*   **Структура** также может содержать различные другие пользовательские типы данных. Затем вы узнаете о вложенных структурах.
*   **Структуры** составляют основу **_объектно-ориентированного программирования,_** поскольку понятие _класса_ происходит из структур.

### ключевое слово struct

*   `struct` ключевое слово может помочь нам в определении пользовательского типа данных.

```C
struct StudentRecord 
 { 
  char Name[20]; 
  int Class; 
  char Address[30]; 
  char Phone[10]; 
 }; 
```

*   Мы также можем определить **структуру,** используя **typedef,** что упрощает инициализацию структуры позже в нашей программе.

```C
typedef struct StudentRecord 
 { 
  char Name[20]; 
  int Class; 
  char Address[30]; 
  char Phone[10]; 
 }Record; 
```

В `main()` пользовательский тип **StudentRecord** типа **данных** определяется как:

```C
int main(void) 
 { 
  struct StudentRecord student1; 
 } 
```

И используя **typedef** , пользовательский тип данных выглядит так:

```C
int main(void) 
 { 
  Record student1; 
 } 
```

Чтобы получить доступ к данным, хранящимся в **student1** , мы используем оператор dot ( **.** ) Для доступа к содержимому переменной типа структуры.

```C
int main(void) 
 { 
  struct StudentRecord student1; 
  student1.Class = 10; 
  printf("Enter Name of Student\n"); 
  scanf("%s",&student1.Name); 
  printf("Enter Address of Student\n"); 
  scanf("%s",&student1.Address); 
  printf("Enter Phone Number of Student\n"); 
  scanf("%s",&student1.Phone); 
  // Printing the Data 
  printf("Name: %s \n, Class: %d \n, Address: %s \n, Phone: %s \n",student1.Name, student1.Class, student1.Address, student1.Phone); 
 } 
```

### Больше информации

https://www.tutorialspoint.com/cprogramming/c\_structures.htm