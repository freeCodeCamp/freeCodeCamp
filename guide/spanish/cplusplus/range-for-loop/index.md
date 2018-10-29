---
title: Range For Loop
localeTitle: Rango de bucle
---
## Rango basado en bucle

El bucle `for` basado en rangos permite un bucle fácil en una gama de elementos (elementos similares en un contenedor).

Con tradicional `for` bucle:

```cpp
std::vector<std::string> stringList {"one", "two", "three"}; 
 
 for (size_t il; il < stringList.size(); il++ 
 { 
  std::cout << stringList.at(il) << std::endl; 
 } 
```

Con rango basado `for` bucle:

```cpp
std::vector<std::string> stringList {"one", "two", "three"}; 
 
 for (auto& singleString : stringList) 
 { 
  std:cout << singleString << std::endl; 
 } 

```