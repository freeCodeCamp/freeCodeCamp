---
title: PHP Data Types
---

### Data Types

Each variable in a progarmming language has an associated data type.
Each data type requires different amounts of memory and has some specific operations which can be performed over it. 

 ### PHP Data Types
 
PHP supports the the following data types:
 1.`Integers` − are whole numbers, without a decimal point, like 515.
 
 2.`Doubles` − are floating-point numbers, like 3.159 or 149.1.
 
 3.`Booleans` − have only two possible values either true or false.
 
 4.`NULL` − is a special type that only has one value: NULL.
 
 5.`Strings` − are sequences of characters, like 'PHP supports string operations.'
 
 6.`Arrays` − are named and indexed collections of other values.
 
 7.`Objects` − are instances of programmer-defined classes, which can package up both other kinds of values and functions that are specific to the class.
 
 8.`Resources` − are special variables that hold references to resources external to PHP (such as database connections).
 
 The first five are simple types, and the next two (arrays and objects) are compound - the compound types can package up other arbitrary values of arbitrary type, whereas the simple types cannot.
 
 ### More Informaton
 For more resources visit: https://www.w3schools.com/php/php_datatypes.asp
PHP | Data Types
Data Types defines the type of data a variable can store. PHP allows eight different types of data types. All of them are discussed below. The first five are called simple data types and the last three are compound data types:

Integer : Integers hold only whole numbers including positive and negative numbers, i.e., numbers without fractional part or decimal point. They can be decimal (base 10), octal (base 8) or hexadecimal (base 16). The default base is decimal (base 10). The octal integers can be declared with leading 0 and the hexadecimal can be declared with leading 0x. The range of integers must lie between -2^31 to 2^31.
Example:
<?php 
  
// decimal base integers 
$deci1 = 50;  
$deci2 = 654;  
  
// octal base integers 
$octal1 = 07;  
  
// hexadecimal base integers 
$octal = 0x45;  
  
$sum = $deci1 + $deci2; 
echo $sum; 
  
?> 
Copy CodeRun on IDE

Output:

704
Double: Can hold numbers containing fractional or decimal part including positive and negative numbers. By default, the variables add a minimum number of decimal places.
Example:
<?php 
  
$val1 = 50.85;  
$val2 = 654.26;  
  
$sum = $val1 + $val2; 
  
echo $sum; 
  
?> 
Copy CodeRun on IDE

Output:



 

705.11
String : Hold letters or any alphabets, even numbers are included. These are written within double quotes during declaration. The strings can also be written within single quotes but it will be treated differently while printing variables. To clarify this look at the example below.
Example:
<?php 
  
$name = "Krishna"; 
echo "The name of the Geek is $name \n"; 
echo 'The name of the geek is $name'; 
  
?> 
Copy CodeRun on IDE

Output:

The name of the Geek is Krishna 
The name of the geek is $name
NULL: These are special types of variables that can hold only one value i.e., NULL. We follow the convention of writing it in capital form, but its case sensitive.
Example:
<?php 
  
$nm = NULL; 
echo $nm;    // This will give no output 
  
?> 
Copy CodeRun on IDE

Boolean: Hold only two values, either TRUE or FALSE. Successful events will return true and unsuccessful events return false. NULL type values are also treated as false in Boolean. Apart from NULL, 0 is also consider as false in boolean. If a string is empty then it is also considered as false in boolean data type.
Example:
<?php 
  
if(TRUE) 
    echo "This condition is TRUE"; 
if(FALSE) 
    echo "This condition is not TRUE"; 
?> 
Copy CodeRun on IDE

Output:

This condition is TRUE
Arrays: Array is a compound data-type which can store multiple values of same data type. Below is an example of array of integers.
<?php 
  
$intArray = array( 10, 20 , 30); 
  
echo "First Element: $intArray[0]\n"; 
echo "Second Element: $intArray[1]\n"; 
echo "Third Element: $intArray[2]\n"; 
      
?> 
