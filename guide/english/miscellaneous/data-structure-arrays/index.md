---
title: Data Structure Arrays
---
Internally, `array` is a kind of data structure that can store a fixed-size sequential collection of elements of the same type. An `array` is used to store a collection of data, but it is often more useful to think of an `array` as a collection of variables of the same type.

`array` consists of contiguous memory locations. The lowest address corresponds to the first element and the highest address to the last element.

## Arrays in C++

C++ provides a data structure, `array`, which stores a fixed-size sequential collection of elements of the same data-type. An `array` is used to store a collection of data, but it is better to think of an `array` as a collection of variables of the same type.

#### Declaration of `array`

    int intarray<a href='https://repl.it/CWZE/3' target='_blank' rel='nofollow'>10]; // Declares an array of integer type of size 10 with elements having random values. Index ranges from 0 to 9(i.e. size-1).
    int intarray[10] = { 0 }; // Declares an array of integer of size 10 with all elements having value 0

    // Choose one the two declarations and then move ahead.

#### Inserting elements to `array`:  

    intarray[0] = 1; // Inserts an integer value of 1 at index 0
    intarray[1] = 0; // Inserts an integer value of 0 at index 1
    intarray[2] = -1; // Inserts an integer value of -1 at index 2
    intarray[3] = 1; // Inserts an integer value of 1 at index 3

#### Printing an `array`:  

    std::cout << intarray[0] << std::endl; // Returns 1 which is element at index of the array
    std::cout << intarray[11] << std::endl; // Would give a a "Garbage" value as there is no element at index 11 of array.
    // That memory location is beyond the range of the array.

    // To print all the elements of the array
    for(int i = 0; i < n; i++)
    	std::cout << intarray[i] << std::endl;

#### Basic operations on `array`:  

    std::cout << sizeof(intarray)/sizeof(intarray[0]) << std::endl; // Returns the length of the array i.e. 10.
    std::cout << sizeof(intarray[0]) << std::endl; // Returns length in bytes of one array item i.e. 4 as it is an integer

:rocket: [Run Code</a> ## Arrays in Python Python doesn't have a native `array` data structure. An `array` in Python should not be confused with `list`. The major difference between a `list` and an `array` in Python is that a `list` can have different types of values whereas an `array` should have all the values of same type. #### Declaration of `array`  

    from array import array
    intarray = array('i') # Declares an array of integer type

#### Inserting elements to `array`:  

    intarray.append(1) # Inserts an integer value of 1 to the array
    intarray.append(0) # Inserts an integer value of 0 to the array
    intarray.append(-1) # Inserts an integer value of -1 to the array
    intarray.append(1) # Inserts an integer value of 1 to the array

    intarray.append('d') # Would give a TypeError as the array is of integer type.

    #Resolve the above error and then move ahead.

#### Printing an `array`:  

    print(intarray) # Returns array('i', [1, 4, -1])
    print(intarray[0]) # Returns 1 which is the element at index 0 of the array
    print(intarray[3]) # Would give IndexError as there is no element at index 3 of array.

    #Resolve the above error and then move ahead.

    # To print all the elements of the array
    for i in intarray:
    	print(i)

#### Basic operations on `array`:  

    len(intarray) # Returns the length of the array i.e. 3
    intarray.itemsize # Returns length in bytes of one array item i.e. 4 as it is an integer
    intarray.count(1) # Returns the number of occurrences of 1 in the array i.e. 2
    intarray.insert(1, 3) # Insert a new item with value x in the array before position i
    intarray.remove(1) # Remove the first occurrence of 1 from the array
    intarray.reverse() # Reverse the order of the items in the array
    intarray.pop(1) # Removes the item with the index 1 from the array and returns it

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CWJB' target='_blank' rel='nofollow'>Run Code</a>

<a href='https://docs.python.org/3.5/library/array.html' target='_blank' rel='nofollow'>Official Docs</a>