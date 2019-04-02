---
title: Range For Loop
localeTitle: 循环范围
---
## 基于范围的循环

基于范围的`for`循环允许在一系列元素（如容器中的元素）上轻松循环。

使用传统的`for`循环：

```cpp
std::vector<std::string> stringList {"one", "two", "three"}; 
 
 for (size_t il; il < stringList.size(); il++ 
 { 
  std::cout << stringList.at(il) << std::endl; 
 } 
```

使用基于范围的`for`循环：

```cpp
std::vector<std::string> stringList {"one", "two", "three"}; 
 
 for (auto& singleString : stringList) 
 { 
  std:cout << singleString << std::endl; 
 } 

```