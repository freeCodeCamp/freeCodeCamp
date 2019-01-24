---
title: For Each Loop
---
# For Each Loop

Also called the enhanced `for` loop, it is an extremely useful and simple way to iterate over each item in a collection, array or any object that implements the `Iterable` interface.

```java
for (object : iterable)
{
    // Statements
}
```

The loop is read as, "for each element in the `iterable` (could be an array, collectable etc.)". The `object` type must match the element type of the `iterable`.

```java
int[] number_list = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};

for (int numbers : number_list)
{
    System.out.print(numbers + " ");
    // Iterated 10 times, numbers 0,1,2...9
}
```

Output:
```
    0 1 2 3 4 5 6 7 8 9
```
:rocket:<a href='https://repl.it/CJYs/0' target='_blank' rel='nofollow'>Run Code</a>


Comparing this with the traditional `for` loops :

```java

int[] number_list = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};

for(int i=0;i < number_list.length;i++)
{
  System.out.print(number_list[i]+" ");
      // Iterated 10 times, numbers 0,1,2...9

}

```
Output:
```
    0 1 2 3 4 5 6 7 8 9
```
:rocket:<a href='https://repl.it/NJfG/0' target='_blank' rel='nofollow'>Run Code</a>

Both the above pieces of code snippets do the same work , however , clearly, the for each loops offer advantages in making iteration through and accessing of elements of a collection(array,in our case) easier.

With the enhanced for loops we no longer need to mention starting and ending points for the loop,thus reducing OutofBounds errors.
The need for loop counters and manual indexing are removed, and readability of the code is improved. 

If we do want a loop counter for a for each loop, all we have to do is create a variable outside the loop and iterate within it.

It is important to note that making changes to the iterating variable for enhanced for loops within the loop causes no changes to the original collection elements.


Enhanced for loops can also be used with multidimensional arrays or other Java collections.
An example of its usage with multidimenisonal arrays are shown below:

```java
int number_list_new[][]={  {  0,  1, 2},
                  {  3, 4, 5},
                  { 6, 7, 8} };
                  
// Because 2d arrays are implemented as "arrays of arrays",the first iteration variable iterates 
// through 3 such arrays(that is, the 3 rows of testarr[][]) 
for(int i[] : number_list_new)  
{
  for(int j : i){
    System.out.print(j+" ");
  }
}
```
Output:
```
0 1 2 3 4 5 6 7 8  
```
:rocket: <a href='https://repl.it/NJhP/0' target='_blank' rel='nofollow'>Run Code</a>



In the above code snippets, `number_list` is an array. If you don't know what this is, don't worry about it. An array is a container object that holds a fixed number of values of a single type, but more on this later.
