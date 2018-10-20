---
title: Hash Tables
localeTitle: 哈希表
---
## 哈希表

散列表（或散列映射）是一种可以将键映射到值的数据结构。散列表使用散列函数来计算索引 进入一个桶阵列，从中可以找到所需的值。定义良好的Hash函数的时间复杂度可以是O（1）。

哈希表（哈希映射）是一种实现关联数组抽象数据类型的数据结构，这种结构可以将键映射到值。哈希表使用哈希函数来计算桶或槽阵列的索引，从中可以找到所需的值。

![哈希表的一个例子](https://github.com/TomerPacific/fccGuideImages/blob/master/315px-Hash_table_3_1_1_0_1_0_0_SP.svg.png?raw=true)

哈希表的一些重要属性 - 1）值不按排序顺序存储。 2）在哈希表中，还必须处理潜在的冲突。 这通常通过链接来完成，这意味着创建其键映射到特定索引的所有值的链接列表。

哈希表的实现

传统上，哈希表是使用链表列表实现的。 当我们想要插入一个键/值对时，我们使用哈希函数将键映射到数组中的索引。 然后将该值插入该位置的链接列表中。

散列的想法是在一系列桶中分配条目（键/值对）。 给定一个密钥，该算法计算一个索引，该索引建议可以找到条目的位置：
```
index = f(key, array_size) 
```

通常这分两步完成：
```
hash = hashfunc(key) 
 index = hash % array_size 
```

在此方法中，散列与数组大小无关，然后使用模运算符（％）将其缩减为索引（介于0和array\_size - 1之间的数字）。

让我们考虑字符串S.您需要计算此字符串中所有字符的频率。
```
string S = “ababcd” 
```

最简单的方法是迭代所有可能的字符并逐个计算它们的频率。 这种方法的时间复杂度为O（26 \* N），其中N是字符串的大小，有26个可能的字符。
```
void countFre(string S) 
    { 
        for(char c = 'a';c <= 'z';++c) 
        { 
            int frequency = 0; 
            for(int i = 0;i < S.length();++i) 
                if(S[i] == c) 
                    frequency++; 
            cout << c << ' ' << frequency << endl; 
        } 
    } 
```

产量
```
a 2 
 b 2 
 c 1 
 d 1 
 e 0 
 f 0 
 … 
 z 0 
```

让我们对这个问题应用哈希。采用大小为26的数组频率，并使用散列函数使用数组的索引散列26个字符。 然后，迭代字符串并增加每个字符的相应索引处的频率值。 这种方法的复杂性是O（N），其中N是字符串的大小。
```
int Frequency[26]; 
 
    int hashFunc(char c) 
    { 
        return (c - 'a'); 
    } 
 
    void countFre(string S) 
    { 
        for(int i = 0;i < S.length();++i) 
        { 
            int index = hashFunc(S[i]); 
            Frequency[index]++; 
        } 
        for(int i = 0;i < 26;++i) 
            cout << (char)(i+'a') << ' ' << Frequency[i] << endl; 
    } 
```

产量
```
a 2 
 b 2 
 c 1 
 d 1 
 e 0 
 f 0 
 … 
 z 0 
```

### 哈希碰撞

当您使用哈希映射时，您必须假设哈希冲突是不可避免的，因为您将使用的哈希映射的大小远小于您拥有的数据量。解决这些冲突的两种主要方法是链接和开放寻址。

#### 链接

解决哈希冲突的一种方法是使用链接。这意味着对于散列表中的每个键值映射，值字段将不仅包含一个数据单元，而是包含数据的链接列表。在下图所示的示例中，您可以看到Sandra Dee在John Smith之后被添加为键152的另一个元素。

![在哈希表中链接的示例](https://github.com/TomerPacific/fccGuideImages/blob/master/620px-Hash_table_5_0_1_1_1_1_0_LL.svg.png?raw=true)

关于链接的主要挫折是时间复杂性的增加。这意味着，代替常规哈希表的O（1）属性，每个操作现在将花费更多时间，因为我们需要遍历链表。

#### 打开寻址

解决哈希冲突的另一种方法是使用开放寻址。在此方法中，一旦将值映射到已占用的键，您将以预定的确定方式沿着哈希表的相邻键移动，直到找到具有空值的键。在下图所示的示例中，Sandra Dee被映射到键153，即使她的值应该映射到152。

![哈希表中的开放寻址的示例](https://github.com/TomerPacific/fccGuideImages/blob/master/380px-Hash_table_5_0_1_1_1_1_0_SP.svg.png?raw=true)

开放寻址的主要挫折在于，当需要查找值时，它们可能不在您期望的位置（键映射）。因此，您必须遍历散列表的某些部分才能找到您要查找的值，从而导致时间复杂度增加。

#### 时间复杂性

值得注意的是，哈希表具有分摊的常量复杂度，即在平均情况下，复杂度将为O（1）。 在最坏的情况下，如果将太多元素散列到相同的密钥中，则它可以具有O（n）的时间复杂度。

### 更多信息：

[有关哈希表的更多信息 - Wiki](https://en.wikipedia.org/wiki/Hash_table) [哈希表与STL-map的比较](http://www.geeksforgeeks.org/hash-table-vs-stl-map/)

#### 资源

[哈希表的基础知识 - HackerEarth](https://www.hackerearth.com/practice/data-structures/hash-tables/basics-of-hash-tables/tutorial/)