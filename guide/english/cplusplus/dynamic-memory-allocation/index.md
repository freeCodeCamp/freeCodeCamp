---
title: Dynamic Memory Allocation
---
## Dynamic Memory Allocation in C++

### What is Dynamic Memory Allocation in C++?
* **Memory Allocation** in C++ refers to the memory alloted to the variables you use throughout your program.
* **Dynamic Memory Allocation** in C++ refers to the memory which is alloted to the variables at run-time, which is also when the amount of memory required is decided.
* This memory comes from the **heap**, whereas _non-static_ variables and _local_ variables get memory from the **stack**.
* In C++, the programmer can manually perform dynamic memory allocation as described below.
* It is possible in C to do dynamic memory allocation by using the _calloc_ and _malloc_ functions to allocate memory as needed, and then using the _free_ function to deallocate it.
* In C++, in addition to the above C functions, there are two operators, _new_ and _delete_, for respectively performing dynamic memory allocation and deallocation.

### NEW operator
* The `new` operator can grant the programmer memory from the heap (if available). If the memory which the programmer asks for is available, then the `new` operator initializes the memory and returns the address (reference) of the memory allocated (otherwise an exception of type `std::bad_alloc` is thrown).
* **Syntax**  
 `pointer-variable-type` = **new** `data-type;`  
 **Example 1:** `int *ptr` = **new** `int;`  
 **Example 2:** `int *ptr2` = **new** `int[10];`  
 Here, `pointer-variable-type` is a **pointer** of `data type`. The `data-type` can be either a primitive (int, char, etc.) or a user-defined data-type.
 * In C++, `new` is preferred over `malloc()` because `new` works for objects by calling their constructors. For example, if an object `Foo` has both a default constructor and a constructor that takes an `int` argument, Example 3 below will construct a `Foo` object using the former constructor, while (if `a` is of type `int`), Example 4 will construct a `Foo` object using the latter constructor instead.  
 **Example 3:** `Foo *ptr` = **new** `Foo;`  
 **Example 4:** `Foo *ptr` = **new** `Foo(a);`  

### DELETE operator
* In C++, it is programmer's responsibility to deallocate dynamically allocated memory, since otherwise the memory will not be available to be reused after the end of the program.
* To deallocate the memory, the `delete` operator is available and can be used by the programmer as follows.
* **Syntax**  
 **delete** `pointer-type-variable;`  
 For example, to free the memory allocated in Examples 1, 3, and 4 above, we type:  
 `delete ptr;`  
 In Example 2 above, however, memory for an array of integers was allocated. To free the memory alloted for an array, the `delete []` operator must be used:
 `delete [] ptr2`;

 
 ### Memory Leaks
 Memory leaks are caused when you fail to deallocate the dynamic memory you allocated via the `new` operator by the end of your program. If you do not deallocate this memory with the `delete` operator, it will accumulate in the heap every time the program runs. This causes your computer to slow down because memory is not deleted and your available memory decreases. Many poorly written computer programs exhibit memory leaks over time. However, when you reboot the machine, it will resolve the issue, as all memory in the heap will be released at that point.
 
 There are various ways to check for memory leaks in your program. Valgrind is a common tool for doing this from a bash linux shell. Once valgrind is downloaded and the program is compiled, valgrind can be run with certain flags for displaying different information about memory read and write errors and memory leaks. Here is an example of running valgrind with a compiled program 'a.out':
 `valgrind ./a.out`
 
 #### More Information
 [Wikipedia](https://en.wikipedia.org/wiki/New_and_delete_(C%2B%2B))
 
 
