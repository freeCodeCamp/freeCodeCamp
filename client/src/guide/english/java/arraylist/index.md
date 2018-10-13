---
title: ArrayList
---
# ArrayList
  ArrayList is a part of something called the *Collection framework*.
  
  The *Collection framework* consists of all interfaces and classes that can hold a set of values (similar to [arrays](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html)). **ArrayList** is a class that is in this hierarchy and known as a _**Collection object**_. It implements the *List* interface which in turn implements the *Collection* interface. This *Collection* interface can be found in the `java.util` package. You will need to import this package.
  
  ArrayList is a class that is used to create dynamic arrays. It is slower than regular arrays but allows for a lot of manipulation. It can be initialized to have a specific size or it will have a default size of 10 units. 
  
  ```java
  ArrayList<String> names = new ArrayList<>();
  ArrayList<Integer> ages = new ArrayList<>(5);
  ```
  
  In the above snippet, the angle breackets `<>` take a generic data type as argument specifying data type of the elements in the ArrayList. The first ArrayList `names` is specified as containing *String* elements. Thus, it will only be allowed to contain String elements. Its size is not specified so it will have a default size of 10. The second ArrayList `ages` has specified that it will only hold integers. But ArrayList cannot hold primitives, it only holds objects. Thus to make it store integers, floats, etc., we can use wrapper classes. `names` will have a specified size of 5.
  
Since ArrayList implements *List*, an ArrayList can be created using the following syntax:
  ```java
  List<Integer> students = new ArrayList<>();
  ```
  
  An ArrayList is dynamic, meaning it will grow in size if required and similarly shrink in size if elements are deleted from it. This is what makes it better to use than normal arrays. 
  
  An ArrayList allows us to randomly access elements. ArrayList is similar to *Vector* in a lot of ways. But it is faster than Vectors. The main thing to note is that - Vectors are faster than arrays but ArrayLists are not. 
  
  So when it comes down to choosing between the two - if speed is critical then Vectors should be considered, otherwise ArrayLists are better when it comes to storing large number of elements and accessing them efficiently.
  
  ### Examples
  
  Adding items to an ArrayList:
  
   ```java
  List<Integer> listOfNumbers = new ArrayList<>();
  listOfNumbers.add(1);
  listOfNumbers.add(2);

  ```   
  Output: 
    ```
    [1, 2]
     ```
     
  Removing items to an ArrayList:

  ```java
  List<Integer> listOfNumbers = new ArrayList<>();
  listOfNumbers.add(1);
  listOfNumbers.add(2);
  System.out.println(listOfNumbers);
  listOfNumbers.remove(1); //put the index of the object not the value of the object
  System.out.println(listOfNumbers);

  ```
Output: 
    ```
    [1, 2]
    [1]
    ```
    
    
Iterating through an ArrayList 

 ```java
  ArrayList<Integer> listOfNumbers = new ArrayList<>();
  listOfNumbers.add(1);
  listOfNumbers.add(2);
  listOfNumbers.add(3);
  listOfNumbers.add(2);

 for (int i: listOfNumbers) {
  System.out.println(i);
 }

  ``` 
  
 Output: 
  
```
    1
    2
    3
    2  
   ```
