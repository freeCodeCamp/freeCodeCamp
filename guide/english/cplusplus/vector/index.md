---
title: Vectors
---

## Vectors

The C++ `vector` is one of the most used containers in C++. A container is a data structure that stores a collection of objects that can vary from being ordered(like `vector`!) to unordered(like `set`). All C++ containers have a different set of functions that allow you to access an object(s) in that collection, modify and loop over the elements in that data structure.

Vectors are similar to ArrayLists in Java since you don't have to specify the length of the container. Compared to an array where you have to define how large it is, its size depends on its contents.

`std::vector` is part of the C++ standard library (hence the prefix `std::`) and allows you to store contiguous data of the same data type. NOTE: **All objects within a vector must be of the same data type**

The data type you store within a vector goes within angle brackets next to the vector keyword. For example, if you would like to store a collection of strings the vector would be `std::vector<std::string> vector_name`

*NOTE*: You must include the vector library whenever using vectors!

`#include <vector>`

### Vector Construction
There are many convinent ways to construct a vector.

Using an intializer list - where objects are listed inside a set of braces: `{ }`
```cpp
std::vector<int> a{1, 2, 3, 4, 5}; // a is a vector of 5 ints: 1, 2, 3, 4 and 5
std::vector<std::string> b{"hello", "world"}; // b is a vector of 2 strings: "hello" and "world"
std::vector<bool> v; // v is an empty vector 
```

Constructing it from another vector (this is known as a copy construction)
```cpp
std::vector<double> a{1.0, 2.0, 3.0};
std::vector<double> b(a); // b is a vector of 3 doubles: 1.0, 2.0 and 3.0
```

Initializing it with the same element:
```cpp
std::vector<int> a(100, -1); // a is a vector of 100 elements all set to -1
```

### Vector Iterators

Iterators can be thought of as pointers specifically used for navigating containers 
(such as vectors). The most important iterators are `begin()` and `end()`.
`begin()` returns a pointer to the first item in a vector whereas `end()` points
to one position after the last item in a vector. As such looping through a 
vector can be done as :

```cpp
std::vector<int> vec{1, 2, 3};

for(auto vec_it = vec.begin(); vec_it != vec.end(); it++){
    // since vec_it is a pointer and points to the memory address of the item
    // inside the vector, vec_it must be dereferenced using '*'
    std::cout << *it << '\n';
}
/*  Output
    1
    2
    3
*/
```

### Modifying a Vector

Pushing items to a vector:
```cpp
std::vector<int> vec; // constructs an empty vector

for (int i = 0; i < 10; i = i + 2){
    vec.push_back(i);
}
// vec now holds [0, 2, 4, 6, 8]
```

Inserting an item in a particular position is slightly different. The C++ vector insert 
function works on iterators. It will insert the given item one position before the given
iterator.

```cpp
std::vector<unsigned int> vec{3, 400, 12, 45};

auto iter = vec.begin() + 2; // iter now points to '12'
vec.insert(iter, 38); // inserts '38' before '12'

// vec: [3, 400, 38, 12, 45]
```

### Element Access
The standard library provides different functions for accessing particular elements in your vector. 

```cpp
std::vector<std::string> a{"test", "element", "access"};

std::string first_item = a.front(); // gets the first item of the vector ("test")
std::string last_item = a.back(); // gets the last item in the vector ("access")

// To get an element at a specific index (remember: vector indices start at 0)
std::string second_item = a.at(2); // gets "element"
// OR
std::string second_item = a[2]; // gets "element"
```

### Looping over elements in a `vector`

Looping over elements in a C++ `std::vector` is pretty different from looping over elements in a vector in JavaScript or Ruby. Due to C++ being a thin abstraction of C, you can only loop over elements using these nifty little variables called iterators to access each element.
Iterators often come in the form of pointers which are variables that store the memory address of another variable. You can learn more about pointers [here](https://www.tutorialspoint.com/cplusplus/cpp_pointers.htm).
However, because iterators act as pointers (or vice-versa), in order to see what they point to, you need to dereference it into a variable of the appropirate type. 
How do we do this?
HERE. WE. GO!
```cpp
std::vector<std::string> a{"test", "element", "access"};
for(auto it = v.begin(); it != v.end(); it++) { //notice use of auto keyword
    cout<<*it<<endl; //Will print out string that the iterator is currently ppointing to
}
```
From here, you can do all sorts of cool stuff, like manipulating the vector or mess around with its order as you please!

### Some useful member functions
The standard template library (STL) also provide different *methods* for you:

```cpp
std::vector.size(); // returns the size of the vector (the number of positions in the vector)
std::vector.begin(); // returns an iterator which is a pointer to the beginning of the vector
std::vector.end(); // returns an iterator which is a pointer to the end of the vector
std::vector.empty(); // returns true if the vector is empty, otherwise returns false.
std::vector.front(); // returns the first element of the vector.
std::vector.back(); // returns the last element of the vector.
std::vector.push_back(n); // inserts the element "n" to the end of the vector.
std::vector.pop_back(n); // removes the last element of the vector
```

### Vector Iterator
The iterators provide another method for accessing elements in your vector.

Iterator declaration.
```cpp
std::vector<int> v;
//Iterator delcaration for the above vector will correspond to
std::vector<int>::iterator it;
```
Using the iterator to print elements of the vector using for loop
```cpp
for(it=v.begin(); it!=v.end(); ++it) 
//std::vector::begin and std::vector::end return iterator pointing to first and last element of the vector respectively.
  cout<<*it;
```

### Iterating Through a Vector
There are different ways to iterate through a vector and access its contents. The following forms are equivalent, the first one involves using a range-based expression (since C++11), the second one uses iterators, and the last one is a index-based iteration

``` cpp
#include <iostream>
#include <vector>

// First declare the vector
std::vector<int> myVector{1, 2, 3, 4, 5}; // a is a vector of 5 ints: 1, 2, 3, 4 and 5

// Using a range based loop (since C++11)
for(int element : myVector ){  // Reads like "for every element in myVector"
  std::cout << "The element is " << element << std::endl;
}

// Using an iterator
std::vector<int>::iterator it; // Declare the iterator
for(it = myVector.begin(); it != myVector.end(); ++it){
  std::cout << "The element is " << *it << std::endl;  // Dereference the iterator to access its data
}

// Using indices
for(std::vector<int>::size_type i = 0; i != myVector.size(); i++){
  std::cout << "The element is " << myVector[i] << std::endl;  // Dereference the iterator to access its data
}

```
### Sorting A Vector In Ascending Order
Sorting a vector based on ascending order can be done with the help of Sort() in C++.
``` cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main(){
 
 vector<int> v{ 10, 5, 82, 69, 64, 70, 3, 42, 28, 0 };
 sort(v.begin(), v.end());
 
 cout << "Vector Contents Sorted In Ascending Order:\n";
 for(int e : v){
 cout << e << " ";
 }
 
 return 0;
}
```
In C++11, you can also sort with lambda function, which can be useful.
```cpp11
#include<bits/stdc++.h>
using namespace std;

int main()
{
    vector<int > v {3, 1, 2};
    sort(v.begin(), v.end(), [] (int i, int j) -> bool {
        return i < j;
    } );
    cout << "Vector Contents Sorted In Ascending Order:\n";
    for (int e : v)
    cout << e << " ";
    return 0;
}
```
### Sorting Vector In Descending Order
Sorting Vector in descending order can be done with the help of third argument namely greater<int>() in Sort() in C++.
``` cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main(){
 
 vector<int> v{ 10, 5, 82, 69, 64, 70, 3, 42, 28, 0 };
 sort(v.begin(), v.end(), greater<int>());
 
 cout << "Vector Contents Sorted In Ascending Order:\n";
 for(int e : v){
 cout << e << " ";
 }
 
 return 0;
}
```

You can also sort in descending using lamda like the one above.
