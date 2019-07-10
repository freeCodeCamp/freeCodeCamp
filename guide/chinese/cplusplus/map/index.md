---
title: Map
localeTitle: 地图
---
## 地图介绍

`map`是一个关联容器，用于存储键值对中的元素。就像在`Java`有集合，PHP中的关联数组等。

## 使用地图的好处

*   它仅存储唯一键，并且也基于其指定的排序标准按排序顺序存储。
*   由于键是按排序顺序的，因此通过键在地图中搜索元素非常快，即它需要对数时间。
*   在`map` ，每个键只附加一个值。
*   `map`可以用作关联数组。
*   它可以使用平衡二叉树实现。

这是一个例子：

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

输出：
```
a => 10 
 b => 20 
 c => 30 
 d => 40 
```

## 创建地图对象

`map<string, int> myMap;`

## 插入

使用插入成员函数插入数据。

```cpp
myMap.insert(make_pair("earth", 1)); 
 myMap.insert(make_pair("moon", 2)); 
```

我们还可以使用operator \[\] ie在std :: map中插入数据

`myMap["sun"] = 3;`

## 访问地图元素

要访问地图元素，您必须为它创建迭代器。这是前面提到的一个例子。

```cpp
map<char, int>::iterator it; 
 for(it=first.begin(); it!=first.end(); ++it){ 
  cout << it->first << " => " << it->second << '\n'; 
 } 
```

在这里，您可以了解有关地图的更多信息： [cpluspluc\_map](http://www.cplusplus.com/reference/map/map/map/)

注意：示例中的所有代码都是C ++ 11版本。您可以[在此处](http://en.cppreference.com/w/cpp/compiler_support)了解有关C ++版本的更多信息