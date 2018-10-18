---
title: Data Structure Arrays
localeTitle: Массивы структуры данных
---
Внутренне `array` - это своего рода структура данных, которая может хранить последовательный набор фиксированного размера элементов того же типа. `array` используется для хранения коллекции данных, но часто бывает полезно придумать `array` как набор переменных того же типа.

`array` состоит из смежных областей памяти. Нижний адрес соответствует первому элементу и наивысшему адресу последнего элемента.

## Массивы в C ++

C ++ предоставляет структуру данных, `array` , в котором хранится последовательный набор фиксированного размера элементов одного и того же типа данных. `array` используется для хранения коллекции данных, но лучше подумать о `array` как о наборе переменных того же типа.

#### Объявление `array`
```
int intarray<a href='https://repl.it/CWZE/3' target='_blank' rel='nofollow'>10]; // Declares an array of integer type of size 10 with elements having random values. Index ranges from 0 to 9(ie size-1). 
 int intarray[10] = { 0 }; // Declares an array of integer of size 10 with all elements having value 0 
 
 // Choose one the two declarations and then move ahead. 
```

#### Вставка элементов в `array` :
```
intarray[0] = 1; // Inserts an integer value of 1 at index 0 
 intarray[1] = 0; // Inserts an integer value of 0 at index 1 
 intarray[2] = -1; // Inserts an integer value of -1 at index 2 
 intarray[3] = 1; // Inserts an integer value of 1 at index 3 
```

#### Печать `array` :
```
std::cout << intarray[0] << std::endl; // Returns 1 which is element at index of the array 
 std::cout << intarray[11] << std::endl; // Would give aa "Garbage" value as there is no element at index 11 of array. 
 // That memory location is beyond the range of the array. 
 
 // To print all the elements of the array 
 for(int i = 0; i < n; i++) 
    std::cout << intarray[i] << std::endl; 
```

#### Основные операции над `array` :
```
std::cout << sizeof(intarray)/sizeof(intarray[0]) << std::endl; // Returns the length of the array ie 10. 
 std::cout << sizeof(intarray[0]) << std::endl; // Returns length in bytes of one array item ie 4 as it is an integer 
```

: rocket: \[Run Code ## Массивы в Python Python не имеют собственной `array` данных `array` . `array` в Python не следует путать со `list` . Основное различие между `list` и `array` в Python состоит в том, что `list` может иметь разные типы значений, тогда как `array` должен иметь все значения одного и того же типа. #### Объявление `array`
```
from array import array 
 intarray = array('i') # Declares an array of integer type 
```

#### Вставка элементов в `array` :
```
intarray.append(1) # Inserts an integer value of 1 to the array 
 intarray.append(0) # Inserts an integer value of 0 to the array 
 intarray.append(-1) # Inserts an integer value of -1 to the array 
 intarray.append(1) # Inserts an integer value of 1 to the array 
 
 intarray.append('d') # Would give a TypeError as the array is of integer type. 
 
 #Resolve the above error and then move ahead. 
```

#### Печать `array` :
```
print(intarray) # Returns array('i', [1, 4, -1]) 
 print(intarray[0]) # Returns 1 which is the element at index 0 of the array 
 print(intarray[3]) # Would give IndexError as there is no element at index 3 of array. 
 
 #Resolve the above error and then move ahead. 
 
 # To print all the elements of the array 
 for i in intarray: 
    print(i) 
```

#### Основные операции над `array` :
```
len(intarray) # Returns the length of the array ie 3 
 intarray.itemsize # Returns length in bytes of one array item ie 4 as it is an integer 
 intarray.count(1) # Returns the number of occurrences of 1 in the array ie 2 
 intarray.insert(1, 3) # Insert a new item with value x in the array before position i 
 intarray.remove(1) # Remove the first occurrence of 1 from the array 
 intarray.reverse() # Reverse the order of the items in the array 
 intarray.pop(1) # Removes the item with the index 1 from the array and returns it 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/CWJB)

[Официальные документы](https://docs.python.org/3.5/library/array.html)