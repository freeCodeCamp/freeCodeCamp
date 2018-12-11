---
title: Dynamic Memory Allocation
---
## Dynamic Memory Allocation in C++

### What is Dynamic Memory Allocation in C++?
* **Memory Allocation** in C++ refers to the memory alloted to the variables you use throughout your program.
* **Dynamic Memory Allocation** is the memory which is alloted to the variables at the run-time and the amount of memory required is also decided at the run-time.
* This memory comes from **heap**, whereas _non-static_ variables and _local_ variables get memory from **stack**.
* In C++, the programmer can perform memory allocations manually, and is called as **_dynamic memory allocation_**.
* It was possible in C to do dynamic memory allocation, by using _calloc_ and _malloc_ functions to allocate memory and using _free_ function to de-allocate the dynamic memory.
* In C++, in addition to above, there are two functions, _new_ and _delete_ for performing dynamic memory allocation and de-allocation.

### NEW operator
* `new` operator can grant the programmer memory from the heap (if available). If the memory which the programmer asks is available, then the `new` operator initializes the memory and then returns the address (reference) of the memory allocated.
* **Syntax**  
 `pointer-variable-type` = **new** `data-type;`  
 Example 1: `int *ptr` = **new** `int;`  
 Example 2: `int *ptr2` = **new** `int[10];`  
 Here, `pointer-variable-type` is a **pointer** of `data type`. The `data-type` can be int, char, etc. or user-defined data-type.
 * `new` is preferred over `malloc()` in C++ because new works for objects as well which is the main building block for OOPs.

### DELETE operator
* It is programmer's responsibility to de-allocate the dynamically allocated memory otherwise the memory would not be available to be re-allocated until the end of the program.
* To deallocate the memory, `delete` operator is available and can be used by the programmer.
* **Syntax**  
 **delete** `pointer-type-variable;`  
 For example to free the memory allocated in example 1 above, we type:  
 `delete ptr;`  
 In example 2, memory for an array of integers was allocated. To free this memory alloted for an array, the `delete []` operator is used:
 `delete [] ptr2`;
 
 ### Memory Leaks
 Leaks are caused when you fail to deallocate dynamic memory you allocated via `New` operator at the end of your program. If you do not deallocate it with the Delete operator, your computer will keep creating new memory in the heap every time the program runs. This causes your computer to slow down because memory is not deleted and your available memory decreases. Many computer programs cause memory leaks over time. However, when you reboot the machine, it will resolve the issue. This is because rebooting releases those spaces in heap memory that were causing memory leaks.
 
 There are many various ways to check for memory leaks in your program. Valgrind is a common tool for doing this from a bash linux shell. Once valgrind is downloaded and the program is compiled, valgrind can be ran with certain flags for displaying different information about memory read and write errors and memory leaks. Here is an example of running valgrind with a compiled program 'a.out':
 `valgrind ./a.out`
 
 
 
 
