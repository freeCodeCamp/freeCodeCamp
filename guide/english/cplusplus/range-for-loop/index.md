---
title: Range For Loop
---

## Range-based for loop

The ranged-based `for` loop allows easy looping over a range of elements (like elements in a container).

With traditional `for` loop:

```cpp
std::vector<std::string> stringList {"one", "two", "three"};

for (size_t il; il < stringList.size(); il++
{
  std::cout << stringList.at(il) << std::endl;
}
```

With range-based `for` loop:

```cpp
std::vector<std::string> stringList {"one", "two", "three"};

for (auto& singleString : stringList)
{
  std:cout << singleString << std::endl;
}
```
