---
title: Range For Loop
localeTitle: Faixa para Loop
---
## Baseado em intervalo para loop

O loop `for` baseado `for` ranged permite um loop fácil em um intervalo de elementos (como elementos em um contêiner).

Com tradicional `for` loop:

```cpp
std::vector<std::string> stringList {"one", "two", "three"}; 
 
 for (size_t il; il < stringList.size(); il++ 
 { 
  std::cout << stringList.at(il) << std::endl; 
 } 
```

Com base `for` intervalo `for` loop:

```cpp
std::vector<std::string> stringList {"one", "two", "three"}; 
 
 for (auto& singleString : stringList) 
 { 
  std:cout << singleString << std::endl; 
 } 

```