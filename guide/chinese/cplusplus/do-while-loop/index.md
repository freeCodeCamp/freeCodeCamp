---
title: do while loop
localeTitle: do while 循环
---
## do while 循环

`do while loop`几乎与while循环相同。 `do while loop`具有以下形式：

```cpp
do 
 { 
  // do something; 
 } while(expression); 
```

注意：请记住在条件判断结束后使用分号';'。

## 有关 do-while 循环的详细信息

只要您确定必须至少执行一次特定进程（在循环内），就会使用do-while循环。它具有许多优点，例如不初始化检查变量（例如，char addmore ='Y'）等。在结束时分号是必须的。

先做一些事情，然后测试我们是否必须继续。结果是do块至少运行一次。 （因为表达测试后来）。看一个例子：

```cpp
#include <iostream> 
    using namespace std; 
 
    int main() 
    { 
        int counter, howmuch; 
 
        cin >> howmuch; 
        counter = 0; 
        do 
        { 
            counter++; 
            cout << counter << '\n'; 
        } 
        while ( counter < howmuch); 
        return 0; 
    } 

```
