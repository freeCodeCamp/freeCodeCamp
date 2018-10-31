---
title: Range For Loop
localeTitle: Диапазон для цикла
---
## Диапазон для цикла

Цикл, основанный `for` диапазоне, позволяет легко выполнять цикл по целому ряду элементов (например, элементов в контейнере).

С традиционным `for` цикла:

```cpp
std::vector<std::string> stringList {"one", "two", "three"}; 
 
 for (size_t il; il < stringList.size(); il++ 
 { 
  std::cout << stringList.at(il) << std::endl; 
 } 
```

С диапазоном `for` цикла:

```cpp
std::vector<std::string> stringList {"one", "two", "three"}; 
 
 for (auto& singleString : stringList) 
 { 
  std:cout << singleString << std::endl; 
 } 

```