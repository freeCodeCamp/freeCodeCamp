---
title: Converting Different Data Types to Required Types
---
## Type Convertions in Python for different data types

Python defines type conversion functions to directly convert one data type to another which is useful in day to day programming. 
#### 1. int(a,base) : 
The above function converts any data type to integer. ‘Base’ specifies the base in which string is if data type is string.

#### 2. float() : 
The above function is used to convert any data type to a floating point number. Python does not implicitly typecast integers (or floats) to strings when concatenating with strings. Thus, Python has a handy built-in function `str()` which will convert the argument passed in to a string format.

#### Example

```py
string = "1110"
  
# printing string converting to int base 2 
convert = int(string,2) 
print ("After converting to integer base 2 : ", end="") 
print (convert) 
```
The Result that will show up is
```
After converting to integer base 2 : 14
```
#### 3. hex() : This function is to convert integer to hexadecimal string.

#### 4. oct() : This function is to convert integer to octal string.

#### Example

```py

# printing integer converting to hexadecimal string 
c = hex(56) 
print ("After converting 56 to hexadecimal string : ",end="") 
print (c) 
  
# printing integer converting to octal string 
c = oct(60) 
print ("After converting 56 to octal string : ",end="") 
print (c) 
```
The Result that will show up is
```
After converting 56 to hexadecimal string : 0x38
After converting 56 to octal string : 0o74
```
5. tuple() : This function is used to convert input data type to a tuple.

6. set() : This function returns the type after converting to set.

7. list() : This function is used to convert any data type to a list type.

```py
# initializing string 
s = 'Siingh'
  
# printing string converting to tuple 
c = tuple(s) 
print ("After converting string to tuple : ",end="") 
print (c) 
  
# printing string converting to set 
c = set(s) 
print ("After converting string to set : ",end="") 
print (c) 
  
# printing string converting to list 
c = list(s) 
print ("After converting string to list : ",end="") 
print (c) 

# Output
# After converting string to tuple : ('s', 'i', 'i', 'n', 'g', 'h')
# After converting string to set : {'n', 'h', 'g', 'i', 's'}
# After converting string to list : ['s', 'i', 'i', 'n', 'g', 'h']
```

