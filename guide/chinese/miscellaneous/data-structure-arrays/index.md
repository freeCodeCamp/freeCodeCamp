---
title: Data Structure Arrays
localeTitle: 数据结构数组
---
在内部， `array`是一种数据结构，可以存储相同类型的固定大小的顺序元素集合。 `array`用于存储数据集合，但将`array`视为相同类型的变量集合通常更有用。

`array`由连续的内存位置组成。最低地址对应于第一个元素，最高地址对应于最后一个元素。

## C ++中的数组

C ++提供了一个数据结构`array` ，它存储了相同数据类型的固定大小的顺序元素集合。 `array`用于存储数据集合，但最好将`array`视为相同类型的变量集合。

#### `array`声明
```
int intarray<a href='https://repl.it/CWZE/3' target='_blank' rel='nofollow'>10]; // Declares an array of integer type of size 10 with elements having random values. Index ranges from 0 to 9(ie size-1). 
 int intarray[10] = { 0 }; // Declares an array of integer of size 10 with all elements having value 0 
 
 // Choose one the two declarations and then move ahead. 
```

#### 将元素插入`array` ：
```
intarray[0] = 1; // Inserts an integer value of 1 at index 0 
 intarray[1] = 0; // Inserts an integer value of 0 at index 1 
 intarray[2] = -1; // Inserts an integer value of -1 at index 2 
 intarray[3] = 1; // Inserts an integer value of 1 at index 3 
```

#### 打印`array` ：
```
std::cout << intarray[0] << std::endl; // Returns 1 which is element at index of the array 
 std::cout << intarray[11] << std::endl; // Would give aa "Garbage" value as there is no element at index 11 of array. 
 // That memory location is beyond the range of the array. 
 
 // To print all the elements of the array 
 for(int i = 0; i < n; i++) 
    std::cout << intarray[i] << std::endl; 
```

#### `array`基本操作：
```
std::cout << sizeof(intarray)/sizeof(intarray[0]) << std::endl; // Returns the length of the array ie 10. 
 std::cout << sizeof(intarray[0]) << std::endl; // Returns length in bytes of one array item ie 4 as it is an integer 
```

：rocket：\[在Python中运行代码## Arrays Python没有本机`array`数据结构。 Python中的`array`不应与`list`混淆。 Python中`list`和`array`之间的主要区别在于`list`可以具有不同类型的值，而`array`应该具有相同类型的所有值。 #### `array`声明
```
from array import array 
 intarray = array('i') # Declares an array of integer type 
```

#### 将元素插入`array` ：
```
intarray.append(1) # Inserts an integer value of 1 to the array 
 intarray.append(0) # Inserts an integer value of 0 to the array 
 intarray.append(-1) # Inserts an integer value of -1 to the array 
 intarray.append(1) # Inserts an integer value of 1 to the array 
 
 intarray.append('d') # Would give a TypeError as the array is of integer type. 
 
 #Resolve the above error and then move ahead. 
```

#### 打印`array` ：
```
print(intarray) # Returns array('i', [1, 4, -1]) 
 print(intarray[0]) # Returns 1 which is the element at index 0 of the array 
 print(intarray[3]) # Would give IndexError as there is no element at index 3 of array. 
 
 #Resolve the above error and then move ahead. 
 
 # To print all the elements of the array 
 for i in intarray: 
    print(i) 
```

#### `array`基本操作：
```
len(intarray) # Returns the length of the array ie 3 
 intarray.itemsize # Returns length in bytes of one array item ie 4 as it is an integer 
 intarray.count(1) # Returns the number of occurrences of 1 in the array ie 2 
 intarray.insert(1, 3) # Insert a new item with value x in the array before position i 
 intarray.remove(1) # Remove the first occurrence of 1 from the array 
 intarray.reverse() # Reverse the order of the items in the array 
 intarray.pop(1) # Removes the item with the index 1 from the array and returns it 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CWJB)

[官方文件](https://docs.python.org/3.5/library/array.html)