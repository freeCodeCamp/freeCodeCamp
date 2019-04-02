---
title: Erase–remove idiom
localeTitle: 删除成语
---
## Desctiprion

如何从容器中删除元素是一个常见的C ++面试问题，如果您仔细阅读本页，您可以获得一些布朗尼点数。擦除 - 移除习语是一种C ++技术，用于从容器中消除满足特定标准的元素。但是，有可能用传统的手写循环来消除元素，但擦除 - 删除习语有几个优点。

### 对照

```cpp
// Using a hand-written loop 
 std::vector<int> v = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }; 
 for (auto iter = v.cbegin(); iter < v.cend(); /*iter++*/) 
 { 
    if (is_odd(*iter)) 
    { 
        iter = v.erase(iter); 
    } 
    else 
    { 
        ++iter; 
    } 
 } 
 
 // Using the erase–remove idiom 
 std::vector<int> v = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }; 
 v.erase(std::remove_if(v.begin(), v.end(), is_odd), v.end()); 
```

正如您所看到的，带有手写循环的代码需要更多的输入，但它也存在性能问题。每个`erase`调用必须在删除后删除所有元素，以避免集合中的“间隙”。在同一容器上多次调用`erase`产生大量移动元素的开销。

另一方面，具有擦除 - 删除习语的代码不仅更具表现力，而且更有效。首先，使用`remove_if/remove`将所有不符合删除条件的元素移动到范围的前面，保持元素的相对顺序。因此，在调用`remove_if/remove` ，单次调用`erase`会删除范围末尾的所有剩余元素。

### 例

```cpp
#include <vector> // the general-purpose vector container 
 #include <iostream> // cout 
 #include <algorithm> // remove and remove_if 
 
 bool is_odd(int i) 
 { 
    return (i % 2) != 0; 
 } 
 
 void print(const std::vector<int> &vec) 
 { 
    for (const auto& i : vec) 
        std::cout << i << ' '; 
    std::cout << std::endl; 
 } 
 
 int main() 
 { 
    // initializes a vector that holds the numbers from 1-10. 
    std::vector<int> v = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }; 
    print(v); 
 
    // removes all elements with the value 5 
    v.erase(std::remove(v.begin(), v.end(), 5), v.end()); 
    print(v); 
 
    // removes all odd numbers 
    v.erase(std::remove_if(v.begin(), v.end(), is_odd), v.end()); 
    print(v); 
 
    // removes multiples of 4 using lambda 
    v.erase(std::remove_if(v.begin(), v.end(), [](int n) { return (n % 4) == 0; }), v.end()); 
    print(v); 
 
    return 0; 
 } 
 
 /* 
 Output: 
 1 2 3 4 5 6 7 8 9 10 
 1 2 3 4 6 7 8 9 10 
 2 4 6 8 10 
 2 6 10 
 */ 
```

### 来源

“删除成语”维基百科：自由百科全书。 Wikimedia Foundation， [Inc。en.wikipedia.org/wiki/Erase-remove\_idiom](https://en.wikipedia.org/wiki/Erase%E2%80%93remove_idiom)

迈耶斯，斯科特（2001年）。有效的STL：50种改进标准模板库使用的具体方法。 Addison-Wesley出版社。