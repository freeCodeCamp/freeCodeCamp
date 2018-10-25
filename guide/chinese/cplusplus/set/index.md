---
title: Set
localeTitle: 组
---
c ++中的集合数据结构的定义方式与在数学上下文中定义集合的方式相同。

更正式地说，集合是一种关联容器，其中每个元素必须是唯一的。

*   输入元素后，无法修改元素的值，但允许删除元素并插入新元素，就像我们在mathenatics中一样。
*   设置数据结构可用于建模，并设置自身。很容易找到交叉点，工会等。
*   与vector类似，但只允许使用唯一值。
*   当您将元素插入集合时，Set会按递增顺序排列元素。

使用set数据结构所需的头文件是'set'。即， `#include<set>`必须在您的代码中，以便您使用set数据结构。

**专业提示** ： - 使用`#include<bits/stdc++.h>`包含所有C ++数据结构和函数，而不是逐个添加它们。  
可以使用set执行的一些功能： -

1.  begin（） - 返回集合中第一个元素的迭代器
2.  end（） - 返回到集合中最后一个元素后面的理论元素的迭代器
3.  size（） - 返回集合中的元素数
4.  max\_size（） - 返回集合可容纳的最大元素数
5.  empty（） - 返回集合是否为空
6.  erase（const g） - 从集合中删除值“g”
7.  clear（） - 从集合中删除所有元素

让我们看一个例子： -

```cpp
#include <iostream> 
 #include <set> 
 #include <iterator> 
 
 using namespace std; 
 int main() 
 { 
    set <int> myset;   //an empty set container. Note that size of the set need not be declared, similar to vector. 
 
    // insert elements in random order 
    myset.insert(65); 
    myset.insert(30); 
    myset.insert(80); 
    myset.insert(20); 
    myset.insert(9); 
    myset.insert(9); // only one 9 will be added to the list. 
 
 
    // printing set myset 
    set <int> :: iterator itr; //an iterator is like a pointer. 
    cout << "\nThe contents of myset : "; 
    for (itr = myset.begin(); itr != myset.end(); ++itr) 
    { 
        cout << '\t' << *itr; 
    } 
    cout << endl; 
 
 
    // remove all elements up to 65 in myset from the beginning:- 
    cout << "\nContents of myset after removal of elements less than 30 : "; 
    myset.erase(myset.begin(), myset.find(30)); 
    for (itr = myset.begin(); itr != myset.end(); ++itr) 
    { 
        cout << '\t' << *itr; 
    } 
 
    // remove element with value 50 in myset 
 
    int num = myset.erase(80); //returns true (and deletes) if 80 is there in the list else returns 0. 
    cout<<"\n\n After doing myset.erase(80), "<<num<<" element is removed\n\n"; 
    cout<<"Contents of the modified set:\t"; 
    for (itr = myset.begin(); itr != myset.end(); ++itr) 
    { 
        cout << '\t' << *itr; 
    } 
 
    cout << endl; 
 
 
    return 0; 
 
 } 
```

\`\`\`CPP 输出： - myset的内容：9 20 30 65 80

移除少于30:30的元素后的myset内容65 80

做myset.erase（80）后，删除1个元素

修改集的内容：30 65 \`\`\`

###来源

1.  [极客的极客](https://www.geeksforgeeks.org/set-in-cpp-stl/)