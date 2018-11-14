---
title: Set
---

A set data structure in c++ is defined the same way a set is defined in the context of mathematics. 

More formally speaking, Sets are a type of associative containers in which each element has to be unique.
* The value of the element cannot be modified once it is entered, although deleting an element and inserting a new element is allowed, the same way we do in mathenatics.
* Set data sructure can be used to model, well, sets itself. It becomes easy to find intersections, unions etc.
* Similar to vector, but only unique values are allowed.
* Set arranges the elements in increasing order as and when you insert elements into the set. 

The header file required for using the set data structure is 'set'. i.e, `#include<set>` must be there in your code for you to use the set data structure.    
    
__Pro tip__:- Use `#include<bits/stdc++.h>` to include all C++ data structures and functions, instead of adding them one by one.    
<br>
Some of the functions that can be performed with a set:- 

1. begin() – Returns an iterator to the first element in the set
1. end() – Returns an iterator to the theoretical element that follows last element in the set
1. size() – Returns the number of elements in the set
1. max_size() – Returns the maximum number of elements that the set can hold
1. empty() – Returns whether the set is empty
1. erase(const g)- Removes the value ‘g’ from the set
1. clear() – Removes all the elements from the set


Let us look at an example :- 
```cpp
#include <iostream> 
#include <set> 
#include <iterator> 
  
using namespace std; 
int main() 
{ 
    set <int> myset;   //an empty set container. Note that size of the set need not be declared, similar to vector.       
  
    // insert elements in random order 
    myset.insert(65); 
    myset.insert(30); 
    myset.insert(80); 
    myset.insert(20); 
    myset.insert(9); 
    myset.insert(9); // only one 9 will be added to the list. 
 
  
    // printing set myset 
    set <int> :: iterator itr; //an iterator is like a pointer.
    cout << "\nThe contents of myset : "; 
    for (itr = myset.begin(); itr != myset.end(); ++itr) 
    { 
        cout << '\t' << *itr; 
    } 
    cout << endl; 
  
  
    // remove all elements up to 65 in myset from the beginning:-
    cout << "\nContents of myset after removal of elements less than 30 : "; 
    myset.erase(myset.begin(), myset.find(30)); 
    for (itr = myset.begin(); itr != myset.end(); ++itr) 
    { 
        cout << '\t' << *itr; 
    } 
  
    // remove element with value 50 in myset
   
    int num = myset.erase(80); //returns true (and deletes) if 80 is there in the list else returns 0.
    cout<<"\n\n After doing myset.erase(80), "<<num<<" element is removed\n\n";
    cout<<"Contents of the modified set:\t";
    for (itr = myset.begin(); itr != myset.end(); ++itr) 
    { 
        cout << '\t' << *itr; 
    } 
  
    cout << endl; 
 
  
    return 0; 
  
}
```
```cpp
Output:- 
The contents of myset : 	9	20	30	65	80

Contents of myset after removal of elements less than 30 : 	30	65	80

 After doing myset.erase(80), 1 element is removed

Contents of the modified set:		30	65
  ```
  
  ### Sources
 1. [Geeks for Geeks](https://www.geeksforgeeks.org/set-in-cpp-stl/) 
