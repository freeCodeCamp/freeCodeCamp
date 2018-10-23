---
title: Php Arrays
---

An array is a data structure that stores one or more similar type of values in a single value. For example, if you want to store 100 numbers then instead of defining 100 variables it's easier to define an array of length 100.

There are three different kind of arrays and each array value is accessed using an ID which is called array index.

Indexed array − An array with a numeric index. Values are stored and accessed in a linear fashion.

Associative array − An array with strings as the index. This stores element values in association with key values rather than in a strict linear index order.

Multidimensional array − An array containing one or more arrays and values are accessed using multiple indices.

NOTE: Built-in array functions are given in the function reference PHP Array Functions section.

### Indexed Arrays
These arrays can store numbers, strings and any object but their index will be represented by numbers. By default array index starts from zero.

#### Example
Following is the example showing how to create and access indexed arrays.

Here we have used the array() function to create an array. This function is explained in function reference.

```
<html>
   <body>
   
      <?php
         /* First method to create an array. */
         $numbers = array(1, 2, 3, 4, 5);
         
         foreach( $numbers as $value ) {
            echo "Value is $value <br />";
         }
         
         /* Second method to create an array. */
         $numbers[0] = "one";
         $numbers[1] = "two";
         $numbers[2] = "three";
         $numbers[3] = "four";
         $numbers[4] = "five";
         
         foreach( $numbers as $value ) {
            echo "Value is $value <br />";
         }
      ?>
      
   </body>
</html>
```

This will produce the following result −

```
Value is 1 
Value is 2 
Value is 3 
Value is 4 
Value is 5 
Value is one 
Value is two 
Value is three 
Value is four 
Value is five
```
 
### Associative Arrays
The associative arrays are very similar to Indexed arrays in term of functionality but they are different in terms of their index. The elements in an associative array have their indices as strings so that you can establish a strong association between the keys and values.

To store the salaries of employees in an array, a numerically indexed array would not be the best choice. Instead, we can use the employee's names as the keys in our associative array, and the value will be their respective salaries.

NOTE: Don't keep an associative array inside double quotes while printing otherwise it will not return any value.

#### Example

```
<html>
   <body>
      
      <?php
         /* First method to associate create an array. */
         $salaries = array("mohammad" => 2000, "qadir" => 1000, "zara" => 500);
         
         echo "Salary of Mohammad is ". $salaries['mohammad'] . "<br />";
         echo "Salary of Qadir is ".  $salaries['qadir']. "<br />";
         echo "Salary of Zara is ".  $salaries['zara']. "<br />";
         
         /* Second method to create an array. */
         $salaries['mohammad'] = "high";
         $salaries['qadir'] = "medium";
         $salaries['zara'] = "low";
         
         echo "Salary of Mohammad is ". $salaries['mohammad'] . "<br />";
         echo "Salary of Qadir is ".  $salaries['qadir']. "<br />";
         echo "Salary of Zara is ".  $salaries['zara']. "<br />";
      ?>
   
   </body>
</html>
```

This will produce the following result −

```
Salary of Mohammad is 2000
Salary of Qadir is 1000
Salary of Zara is 500
Salary of Mohammad is high
Salary of Qadir is medium
Salary of Zara is low
```

### Multidimensional Arrays
In a multi-dimensional array, each element in the main array can also be an array. And each element in the sub-array can be an array, and so on. Values in the multi-dimensional array are accessed using multiple indices.

#### Example
In this example, we will create a two-dimensional array to store marks of three students in three subjects −

This example is an associative array, you can create an indexed array in a similiar fashion.

```
<html>
   <body>
      
      <?php
         $marks = array( 
            "mohammad" => array (
               "physics" => 35,
               "maths" => 30,	
               "chemistry" => 39
            ),
            
            "qadir" => array (
               "physics" => 30,
               "maths" => 32,
               "chemistry" => 29
            ),
            
            "zara" => array (
               "physics" => 31,
               "maths" => 22,
               "chemistry" => 39
            )
         );
         
         /* Accessing multi-dimensional array values */
         echo "Marks for Mohammad in physics : " ;
         echo $marks['mohammad']['physics'] . "<br />"; 
         
         echo "Marks for Qadir in maths : ";
         echo $marks['qadir']['maths'] . "<br />"; 
         
         echo "Marks for Zara in chemistry : " ;
         echo $marks['zara']['chemistry'] . "<br />"; 
      ?>
   
   </body>
</html>
```

This will produce the following result −

```
Marks for Mohammad in physics : 35
Marks for Qadir in maths : 32
Marks for Zara in chemistry : 39
```
