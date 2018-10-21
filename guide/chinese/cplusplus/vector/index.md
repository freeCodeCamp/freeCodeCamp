---
title: Vectors
localeTitle: 矢量
---
## 矢量

C ++ `vector`是C ++中最常用的容器之一。容器是一种数据结构，它存储一组对象，这些对象可以从有序（如`vector` ！）到无序（如`set` ）变化。所有C ++容器都有一组不同的函数，允许您访问该集合中的对象，修改和循环该数据结构中的元素。

向量类似于Java中的ArrayLists，因为您不必指定容器的长度。与必须定义大小的数组相比，它的大小取决于其内容。

`std::vector`是C ++标准库的一部分（因此前缀为`std::` ，允许您存储相同数据类型的连续数据。注意： **向量中的所有对象必须具有相同的数据类型**

存储在矢量中的数据类型位于vector关键字旁边的尖括号内。例如，如果要存储字符串集合，则向量将为`std::vector<std::string> vector_name`

_注意_ ：每当使用向量时，您必须包含向量库！

`#include <vector>`

### 矢量建筑

有许多方法可以构建一个向量。

使用初始化列表 - 对象列在一组大括号中： `{ }`

```cpp
std::vector<int> a{1, 2, 3, 4, 5}; // a is a vector of 5 ints: 1, 2, 3, 4 and 5 
 std::vector<std::string> b{"hello", "world"}; // b is a vector of 2 strings: "hello" and "world" 
 std::vector<bool> v; // v is an empty vector 
```

从另一个向量构造它（这被称为复制构造）

```cpp
std::vector<double> a{1.0, 2.0, 3.0}; 
 std::vector<double> b(a); // b is a vector of 3 doubles: 1.0, 2.0 and 3.0 
```

使用相同的元素初始化它：

```cpp
std::vector<int> a(100, -1); // a is a vector of 100 elements all set to -1 
```

### 矢量迭代器

迭代器可以被认为是专门用于导航容器的指针 （如矢量）。最重要的迭代器是`begin()`和`end()` 。 `begin()`返回指向向量中第一个项的指针，而`end()`指向 到向量中最后一项之后的一个位置。因此循环通过 矢量可以做到：

```cpp
std::vector<int> vec{1, 2, 3}; 
 
 for(auto vec_it = vec.begin(); vec_it != vec.end(); it++){ 
    // since vec_it is a pointer and points to the memory address of the item 
    // inside the vector, vec_it must be dereferenced using '*' 
    std::cout << *it << '\n'; 
 } 
 /*  Output 
    1 
    2 
    3 
 */ 
```

### 修改矢量

将项目推送到矢量：

```cpp
std::vector<int> vec; // constructs an empty vector 
 
 for (int i = 0; i < 10; i = i + 2){ 
    vec.push_back(i); 
 } 
 // vec now holds [0, 2, 4, 6, 8] 
```

将项目插入特定位置略有不同。 C ++向量插入 函数适用于迭代器。它会在给定项之前将给定项插入一个位置 迭代器。

```cpp
std::vector<unsigned int> vec{3, 400, 12, 45}; 
 
 auto iter = vec.begin() + 2; // iter now points to '12' 
 vec.insert(iter, 38); // inserts '38' before '12' 
 
 // vec: [3, 400, 38, 12, 45] 
```

### 元素访问

标准库提供了用于访问向量中特定元素的不同函数。

```cpp
std::vector<std::string> a{"test", "element", "access"}; 
 
 std::string first_item = a.front(); // gets the first item of the vector ("test") 
 std::string last_item = a.back(); // gets the last item in the vector ("access") 
 
 // To get an element at a specific index (remember: vector indices start at 0) 
 std::string second_item = a.at(2); // gets "element" 
 // OR 
 std::string second_item = a[2]; // gets "element" 
```

### 循环在`vector`元素

循环使用C ++ `std::vector`中的元素与在JavaScript或Ruby中的向量中循环元素完全不同。由于C ++是C的精简抽象，因此您只能使用称为迭代器的这些漂亮的小变量来遍历元素以访问每个元素。 迭代器通常以指针的形式出现，指针是存储另一个变量的内存地址的变量。您可以[在此处](https://www.tutorialspoint.com/cplusplus/cpp_pointers.htm)了解有关指针的更多信息。 但是，因为迭代器充当指针（反之亦然），为了查看它们指向的内容，您需要将其取消引用为适当类型的变量。 我们如何做到这一点？ 这里。我们。走！

```cpp
std::vector<std::string> a{"test", "element", "access"}; 
 for(auto it = v.begin(); it != v.end(); it++) { //notice use of auto keyword 
    cout<<*it<<endl; //Will print out string that the iterator is currently ppointing to 
 } 
```

从这里开始，你可以做各种很酷的事情，比如操纵矢量或者随便点一下它的顺序！

### 一些有用的成员函数

标准模板库（STL）还为您提供了不同的_方法_ ：

```cpp
std::vector.size(); // returns the size of the vector (the number of positions in the vector) 
 std::vector.begin(); // returns an iterator which is a pointer to the beginning of the vector 
 std::vector.end(); // returns an iterator which is a pointer to the end of the vector 
 std::vector.empty(); // returns true if the vector is empty, otherwise returns false. 
 std::vector.front(); // returns the first element of the vector. 
 std::vector.back(); // returns the last element of the vector. 
 std::vector.push_back(n); // inserts the element "n" to the end of the vector. 
 std::vector.pop_back(n); // removes the last element of the vector 
```

### 矢量迭代器

迭代器提供了另一种访问向量中元素的方法。

迭代器声明。

```cpp
std::vector<int> v; 
 //Iterator delcaration for the above vector will correspond to 
 std::vector<int>::iterator it; 
```

使用迭代器使用for循环打印向量的元素

```cpp
for(it=v.begin(); it!=v.end(); ++it) 
 //std::vector::begin and std::vector::end return iterator pointing to first and last element of the vector respectively. 
  cout<<*it; 
```

### 通过向量迭代

有不同的方法来迭代向量并访问其内容。以下形式是等效的，第一个涉及使用基于范围的表达式（自C ++ 11以来），第二个使用迭代器，最后一个是基于索引的迭代

\`\`\`cpp

# 包括

# 包括

//首先声明向量 的std ::矢量 myVector {1,2,3,4,5}; // a是5个整数的向量：1,2,3,4和5

//使用基于范围的循环（自C ++ 11起） for（int element：myVector）{//读取类似于“myVector中的每个元素” std :: cout <<“元素是”<< element << std :: endl; }

//使用迭代器 的std ::矢量 :: iterator它; //声明迭代器 for（it = myVector.begin（）; it！= myVector.end（）; ++ it）{ std :: cout <<“元素是”<< \* it << std :: endl; //取消引用迭代器以访问其数据 }

//使用索引 用于（标准::矢量 :: size\_type i = 0; i！= myVector.size（）;我++）{ std :: cout <<“元素是”<< myVector \[i\] << std :: endl; //取消引用迭代器以访问其数据 }
```
### Sorting A Vector In Ascending Order 
 Sorting a vector based on ascending order can be done with the help of Sort() in C++. 
```

CPP

# 包括

# 包括

# 包括

使用命名空间std;

int main（）{

向量 v {10,5,82,69,64,70,3,42,28,0}; sort（v.begin（），v.end（））;

cout <<“向量内容按升序排序：\\ n”; for（int e：v）{ cout << e <<“”; }

返回0; }
```
### Sorting Vector In Descending Order 
 Sorting Vector in descending order can be done with the help of third argument namely greater<int>() in Sort() in C++. 
```

CPP

# 包括

# 包括

# 包括

使用命名空间std;

int main（）{

向量 v {10,5,82,69,64,70,3,42,28,0}; sort（v.begin（），v.end（），更大 （））;

cout <<“向量内容按升序排序：\\ n”; for（int e：v）{ cout << e <<“”; }

返回0; } \`\`\`