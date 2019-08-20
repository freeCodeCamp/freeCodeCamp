---
title: Map
---

## Introduction of map

`map` is an associative container that store elements in key-value pair. Just like in `Java` we have collection, associative array in PHP and so on.

## Benefits of using map
* It stores only unique keys and that too in sorted order based on its assigned sorting criteria.
* As keys are in sorted order therefore searching element in map through key is very fast i.e. it takes logarithmic time.
* In `map` there will be only one value attached with the every key.
* `map` can be used as associative arrays.
* It might be implemented using balanced binary trees.

Here is an example:

```cpp
#include <iostream>
#include <map>

using namespace std;

int main (){
  map<char,int> first;
  
  //initializing
  first['a']=10;
  first['b']=20;
  first['c']=30;
  first['d']=40;
  
   map<char, int>::iterator it;
   for(it=first.begin(); it!=first.end(); ++it){
      cout << it->first << " => " << it->second << '\n';
   }
   
  return 0;
}
```

Output:
```
a => 10
b => 20
c => 30
d => 40
```

## Creating map object
` map<string, int> myMap; `

## Get Size 
Get size of map with size function
```
map<int, int > myMap;
myMap[100] = 3
count << "size of map is " << myMap.size() << '\n';
```

Output:
```
size of map is 1
```

## Insertion 
Inserting data with insert member function.

```cpp
myMap.insert(make_pair("earth", 1));
myMap.insert(make_pair("moon", 2));
```

We can also insert data in std::map using operator [] i.e.

`myMap["sun"] = 3;`

If "sun" is already mapped before, this action will override the value mapped to key.

## Erase
Erasing data with erase function

```
map<int, int > myMap;
myMap[10] = 1000;
cout << "before erase, size of map is " << myMap.size() << '\n';
myMap.erase(10);
cout << "after erase, size of map is " << myMap.size() << '\n';
```

Output:
```
before erase, size of map is 1
after erase, size of map is 0
```

## Accessing map value

To access map values, simply call Map[key]. For example:
```
map<string, int > M;
M["abc"] = 1;
M["def"] = 2;
cout << "value of abc is " << M["abc"] << '\n';
cout << "value of def is " << M["def"] << '\n';
```

Output:
```
value of abc is 1
value of def is 2
```

## Accessing map elements

To access map elements, you have to create iterator for it. Here is an example as stated before.
```cpp
map<char, int>::iterator it;
for(it=first.begin(); it!=first.end(); ++it){
  cout << it->first << " => " << it->second << '\n';
}
```

N.B: All code in example are in C++11 version. You can learn more about C++ version <a href="http://en.cppreference.com/w/cpp/compiler_support" target="_blank">Here</a>

## Unordered Map

There exists another associative container similar to `map`, named `unordered_map`, which is implemented using a Hash Table as opposed to a balanced binary tree as is the case with `map`. The key values of the `unordered_map` are hashed into indices of the hash table. Unlike `map` the elements of `unordered_map` are not stored in a sorted manner. All operations permissible on `map` are applicable to `unordered_map` as well.

## Benefits of Unordered Map
* Average Cost of insert, delete, search is O(1) if there are no hash collisions.
* Implemented using Hash Table

## Unordered Map vs Map
* Unordered Map is faster if you want single element access. 
* Use map when you want to traverse through key values in a sorted fashion or if you want some kind of ordering in the map.
* Unordered Map has more memory overhead, although it is typically negligible.

## References:
For more information about the differences between `map` and `unordered_map`: <a href="https://stackoverflow.com/questions/13799593/how-to-choose-between-map-and-unordered-map" target="_blank">Map vs Unordered Map</a>
