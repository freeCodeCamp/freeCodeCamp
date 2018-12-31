---
title: Data Structure Arrays
localeTitle: Matrizes de estrutura de dados
---
Internamente, `array` é um tipo de estrutura de dados que pode armazenar uma coleção sequencial de tamanho fixo de elementos do mesmo tipo. Uma `array` é usada para armazenar uma coleção de dados, mas geralmente é mais útil pensar em uma `array` como uma coleção de variáveis ​​do mesmo tipo.

`array` consiste em localizações de memória contíguas. O endereço mais baixo corresponde ao primeiro elemento e o endereço mais alto ao último elemento.

## Matrizes em C ++

C ++ fornece uma estrutura de dados, `array` , que armazena uma coleção seqüencial de tamanho fixo de elementos do mesmo tipo de dados. Uma `array` é usada para armazenar uma coleção de dados, mas é melhor pensar em uma `array` como uma coleção de variáveis ​​do mesmo tipo.

#### Declaração de `array`
```
int intarray<a href='https://repl.it/CWZE/3' target='_blank' rel='nofollow'>10]; // Declares an array of integer type of size 10 with elements having random values. Index ranges from 0 to 9(ie size-1). 
 int intarray[10] = { 0 }; // Declares an array of integer of size 10 with all elements having value 0 
 
 // Choose one the two declarations and then move ahead. 
```

#### Inserindo elementos no `array` :
```
intarray[0] = 1; // Inserts an integer value of 1 at index 0 
 intarray[1] = 0; // Inserts an integer value of 0 at index 1 
 intarray[2] = -1; // Inserts an integer value of -1 at index 2 
 intarray[3] = 1; // Inserts an integer value of 1 at index 3 
```

#### Imprimindo uma `array` :
```
std::cout << intarray[0] << std::endl; // Returns 1 which is element at index of the array 
 std::cout << intarray[11] << std::endl; // Would give aa "Garbage" value as there is no element at index 11 of array. 
 // That memory location is beyond the range of the array. 
 
 // To print all the elements of the array 
 for(int i = 0; i < n; i++) 
    std::cout << intarray[i] << std::endl; 
```

#### Operações básicas no `array` :
```
std::cout << sizeof(intarray)/sizeof(intarray[0]) << std::endl; // Returns the length of the array ie 10. 
 std::cout << sizeof(intarray[0]) << std::endl; // Returns length in bytes of one array item ie 4 as it is an integer 
```

: rocket: \[Run Code ## Matrizes em Python Python não possui uma estrutura de dados de `array` nativa. Uma `array` no Python não deve ser confundida com a `list` . A principal diferença entre uma `list` e uma `array` no Python é que uma `list` pode ter diferentes tipos de valores, enquanto uma `array` deve ter todos os valores do mesmo tipo. #### Declaração de `array`
```
from array import array 
 intarray = array('i') # Declares an array of integer type 
```

#### Inserindo elementos no `array` :
```
intarray.append(1) # Inserts an integer value of 1 to the array 
 intarray.append(0) # Inserts an integer value of 0 to the array 
 intarray.append(-1) # Inserts an integer value of -1 to the array 
 intarray.append(1) # Inserts an integer value of 1 to the array 
 
 intarray.append('d') # Would give a TypeError as the array is of integer type. 
 
 #Resolve the above error and then move ahead. 
```

#### Imprimindo uma `array` :
```
print(intarray) # Returns array('i', [1, 4, -1]) 
 print(intarray[0]) # Returns 1 which is the element at index 0 of the array 
 print(intarray[3]) # Would give IndexError as there is no element at index 3 of array. 
 
 #Resolve the above error and then move ahead. 
 
 # To print all the elements of the array 
 for i in intarray: 
    print(i) 
```

#### Operações básicas no `array` :
```
len(intarray) # Returns the length of the array ie 3 
 intarray.itemsize # Returns length in bytes of one array item ie 4 as it is an integer 
 intarray.count(1) # Returns the number of occurrences of 1 in the array ie 2 
 intarray.insert(1, 3) # Insert a new item with value x in the array before position i 
 intarray.remove(1) # Remove the first occurrence of 1 from the array 
 intarray.reverse() # Reverse the order of the items in the array 
 intarray.pop(1) # Removes the item with the index 1 from the array and returns it 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/CWJB)

[Documentos oficiais](https://docs.python.org/3.5/library/array.html)