---
title: List Extend Method
---
## List Extend Method

There are many methods for lists, you can explore all of them by typing `help(list)` in your python console.
One of them is the extend function which, as the name says extends the list by adding all items of a list (passed as an argument) to the end.


#### Example Usage

```py
cities = ["San Francisco", "Los Angeles", "New York"]
cities_in_texas = ["San Antonio", "Austin", "Dallas"]
cities.extend(cities_in_texas)
print(cities)
```
#### Output
```
["San Francisco", "Los Angeles", "New York", "San Antonio", "Austin", "Dallas"]
```

#### More Information:

The official documentation for `extend()` can be found <a href='https://docs.python.org/3.6/tutorial/datastructures.html' target='_blank' rel='nofollow'>here</a>
