---
title: Python Len Function
---
`len()` is a built-in function in Python 3\. This method returns the length (the number of items) of an object. It takes one argument `x`.

## Arguments

It takes one argument, `x`. This argument may be a sequence (such as a string, bytes, tuple, list, or range) or a collection (such as a dictionary, set, or frozen set).

## Return Value

This function returns the number of elements in the argument which is passed to the `len()` function.

## Code Sample

    list1 = [123, 'xyz', 'zara'] # list
    print(len(list1)) # prints 3 as there are 3 elements in the list1

    str1 = 'basketball' # string
    print(len(str1)) # prints 10 as the str1 is made of 10 characters

    tuple1 = (2, 3, 4, 5) # tuple 
    print(len(tuple1)) # prints 4 as there are 4 elements in the tuple1

    dict1 = {'name': 'John', 'age': 4, 'score': 45} # dictionary
    print(len(dict1)) # prints 3 as there are 3 key and value pairs in the dict1
    
    
 It is also possible to do the function of len() without using it.
 
 ## Length of a string without using len()
  
    str=raw_input("Enter the string: ")
    count=0
    for i in str:
        count+=1
    print (count)
    
So  here comes the significance of len(). The entire code above can be executed just with the use of len().
    
<a href='https://www.programiz.com/python-programming/methods/built-in/len' >Programiz</a>
