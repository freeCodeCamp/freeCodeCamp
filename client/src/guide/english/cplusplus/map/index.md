---
title: Map
---

## Introduction of map

`map` is an associative container that store elements in key-value pair. Just like in `Java` have collection, associative array in PHP and so on.

## Benefits of using map
* It stores only unique keys and that too in sorted order based on its assigned sorting criteria.
* As keys are in sorted order therefore searching element in map through key is very fast i.e. it takes logarithmic time.
* In `map` there will be only one value attached with the every key.
* `map` can be used as associative arrays.
* It might be implemented using balanced binary trees.

Here is an example:

```c++
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

## Insertion 
Inserting data with insert member function.

```c++
myMap.insert(make_pair("earth", 1));
myMap.insert(make_pair("moon", 2));
```

We can also insert data in std::map using operator [] i.e.

`myMap["sun"] = 3;`

## Accessing map elements

To access map elements, you have to create iterator for it. Here is an example as stated before.
```c++
map<char, int>::iterator it;
for(it=first.begin(); it!=first.end(); ++it){
  cout << it->first << " => " << it->second << '\n';
}
```

Here you can learn more about map: <a href="http://www.cplusplus.com/reference/map/map/map/" target="_blank">cpluspluc_map</a>

N.B: All code in example are in C++11 version. You can learn more about C++ version <a href="http://en.cppreference.com/w/cpp/compiler_support" target="_blank">Here</a>


