---
title: Map, Reduce, Filter
---
#Map,Reduce & Filter

Most engineers work with lists to process list of orders/users etc. Analyzing lists can get complex and cluttered quickly if using multiple for-loops and nested loops. Hence these above methods can streamline usage of list operations.
## Map

If your task is to apply a specific method to each element of a list, map will come in handy. Say, you have a list of degree values and you'd like to convert all these values into list of values in Fahrenheit units. 
 

#### Example Usage

```py

inputs = [10,32,5,40,25]

def degreesToFahren(deg):
    fahrenheit = (9.0/5)*deg +32
    return fahrenheit

# The most common way of doing this    
result=[]
for i in inputs:
	iTofahren = degreesToFahren(i)
	result.append(iTofahren)
print(result)   # [50.0, 89.6, 41.0, 104.0, 77.0]
```
```py
# Using Map
result = list(map(degreesToFahren,inputs))
print(result) # [50.0, 89.6, 41.0, 104.0, 77.0]	
 
```
 As you might have noticed, using map is simply a one liner operation. Generally,  if you have data = ``` [a1,a2,...,an] ``` and a function ``` f()```, then ``` map(f,data): ```returns an iterator over ```f(a1),f(a2)...f(an). ``` use ```list()``` to convert the iterator object into a python list.
				

## Filter

Filter function removes data in a list that you need/don't need , hence the name.  Say, you want to filter a list based on values that you don't need, eg values above 2.

#### Example Usage

```py
data = [1.2,2.5,5.8,0.4,4.7,9.9]
result = list(filter(lambda x:x > 2,data))  
print(result) 
```
#### Output
```
[2.5, 5.8, 4.7, 9.9]
```
 This is also a simple 1 liner similar to the map() function above. Refer to tutorial on lambda functions if you find this term unfamiliar.
 
## Reduce

 From creator of Python, Guido van Rossum 
 ```"Use functools.reduce if you really need it; however, 99% of the time an explicit for loop is more readable"```

What it generally does is apply a function ```f()``` to elements of data in a list and use that result for the next value in the list. 
Visually,
 
Data = [a<sub>1</sub>,a<sub>2</sub>,...,a<sub>n</sub>]
function = f(x,y)

reduce(f,data):
Step 1: val<sub>1</sub> = f(a<sub>1</sub>,a<sub>2</sub>)
Step 2: val<sub>2</sub> = f(val<sub>1</sub>,a<sub>3</sub>)
Step 3: val<sub>3</sub> = f(val<sub>2</sub> ,a<sub>4</sub>)
.
.
.
Step n-1: val<sub>n-1</sub> = f(val<sub>n-2</sub>,a<sub>n</sub>)

For example, you want to multiply all numbers in a list.  
 
#### Example Usage

```py
from functools import reduce

input = [1,2,3,4,5,6]
multiplier = lambda x,y:x*y
answer = reduce(multiplier,input) 
print(answer)
```
#### Output
```
720
```
 However, the above could be computed using a simple for loop and usage of these methods are subject to preference. 



#### More Information:

The official documentation for the above methods can be found  at http://book.pythontips.com/en/latest/map_filter.html


