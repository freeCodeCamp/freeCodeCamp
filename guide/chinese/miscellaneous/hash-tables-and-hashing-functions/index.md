---
title: Hash Tables and Hashing Functions
localeTitle: 散列表和散列函数
---
### 哈希简介

散列旨在解决需要有效地查找或存储集合中的项目的问题。  
例如，如果我们有10,000个英语单词的列表，并且我们想要检查列表中是否有给定单词，那么在我们找到匹配项之前连续比较该单词与所有10,000个项目是低效的。即使单词列表按字典顺序排序，如字典中，您仍需要一些时间来查找您要查找的单词。  
哈希是一种通过在一开始就有效地缩小搜索范围来提高效率的技术。

## 什么是哈希？

散列意味着使用一些函数或算法将对象数据映射到某个代表性的整数值。  
这种所谓的哈希码（或简称哈希）可以用作在地图中查找项目时缩小搜索范围的方法。  
通常，这些哈希码用于生成索引，在该索引处存储该值。

## 哈希是如何工作的

在哈希表中，您以键和值对的形式存储数据。用于标识数据的密钥作为散列函数的输入给出。然后将哈希码（整数）映射到我们拥有的固定大小。

哈希表必须支持3个函数。

*   插入（键，值）
*   得到（关键）
*   删除（键）

纯粹作为帮助我们理解概念的一个例子，让我们假设我们想要将字符串键列表映射到字符串值（例如，将国家列表映射到其首都城市）。  
因此，假设我们希望将数据存储在地图中的表格中。

钥匙|值  
\---------------- | -------------  
古巴|哈瓦那  
英格兰|伦敦  
法国|巴黎  
西班牙|马德里  
瑞士|伯尔尼

让我们假设我们的哈希函数只是简单地取字符串的长度。

为简单起见，我们将有两个数组：一个用于键，一个用于值。  
因此，为了将一个项放入哈希表中，我们计算其哈希码（在这种情况下，只计算字符数），然后将键和值放在相应索引的数组中。  
例如，古巴的哈希码（长度）为4。  
因此，我们将古巴存储在keys数组中的第4个位置，将哈瓦那存储在values数组的第4个索引中。我们最终得到以下结果：

职位|键阵列|值数组  
\--------------------- | ------------------ | --------- ------  
1 | |  
2 | |  
3 | |  
4 |古巴|哈瓦那  
5 |西班牙|马德里  
6 |法国|巴黎  
7 |英格兰|伦敦  
8 | |  
9 | |  
10 | |  
11 |瑞士|伯尔尼

现在，在这个具体的例子中，事情很顺利。  
我们的阵列需要足够大以容纳最长的字符串，但在这种情况下，只有11个插槽。  
我们确实浪费了一些空间，例如，我们的数据中没有单字母键，也没有8到10个字母之间的键。但在这种情况下，浪费的空间也不是那么糟糕。获取字符串的长度既快又好，找到与给定键相关的值的过程也是如此（当然比最多进行五次字符串比较要快）。

但是，如果我们的数据集有一个超过11个字符的字符串，我们该怎么办？  
如果我们有另外一个包含5个字符的单词“India”，并尝试使用我们的哈希函数将其分配给索引，该怎么办？由于索引5已被占用，我们必须打电话询问如何处理它。这称为碰撞。

如果我们的数据集有一个包含数千个字符的字符串，并且您创建了一个包含数千个索引的数组来存储数据，则会导致空间浪费。如果我们的密钥是来自英语的随机单词，其中有如此多的单词具有相同的长度，则使用长度作为散列函数将是相当无用的。

## 碰撞处理

两种基本方法用于处理冲突。

1.  单独链接
2.  打开寻址

#### 单独链接

通过单独链接进行散列冲突处理，使用额外的数据结构，优选地将动态分配的链表放入存储桶中。在我们的示例中，当我们将India添加到数据集时，它将附加到存储在索引5处的链接列表，然后我们的表将如下所示。

职位|链表头|  
\--------------------- | ---------------------------- -------- |  
1 | |  
2 | |  
3 | |  
4 | [古巴 - 哈瓦那\] |  
5 | \[西班牙 - 马德里\] - > \[印度 - 德里\] |  
6 | \[法国 - 巴黎\] |  
7 | \[英格兰 - 伦敦\] |  
8 | |  
9 | |  
10 | |  
11 | \[瑞士 - 伯尔尼\] |](https://en.wikipedia.org/wiki/Linear_probing)

要查找项目，我们首先转到存储桶然后比较密钥。这是一种流行的方法，如果使用链接列表，则哈希值永远不会填满。 `get(k)`的成本平均为`O(n)` ，其中n是桶中的密钥数，密钥总数为N.  
单独链接的问题在于数据结构可以在不受限制的情况下增长。

#### 打开寻址

开放寻址不会引入任何新的数据结构。如果发生碰撞，那么我们在算法生成的下一个点中寻找可用性。开放寻址通常用于存储空间受限的情况，即嵌入式处理器。打开寻址不一定比单独链接更快。

开放寻址的方法

*   \[线性探测
*   [二次探测](https://en.wikipedia.org/wiki/Quadratic_probing)
*   [双重哈希](https://en.wikipedia.org/wiki/Double_hashing)

## 如何在代码中使用散列。

#### 蟒蛇
```
   # Few languages like Python, Ruby come with an in-built hashing support. 
   # Declaration 
    my_hash_table = {} 
    my_hash_table = dict() 
 
   # Insertion 
    my_hash_table[key] = value 
 
   # Look up 
    value = my_hash_table.get(key) # returns None if the key is not present || Deferred in python 3, available in python 2 
    value = my_hash_table[key] # throws a ValueError exception if the key is not present 
 
    # Deletion 
    del my_hash_table[key] # throws a ValueError exception if the key is not present 
 
    # Getting all keys and values stored in the dictionary 
    keys = my_hash_table.keys() 
    values = my_hash_table.values() 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CVtK)

#### Java的
```
    // Java doesn't include hashing by default, you have to import it from java.util library 
    // Importing hashmaps 
    import java.util.HashMap; 
 
   // Declaration 
    HashMap<Integer, Integer> myHashTable = new HashMap<Integer, Integer>(); // declares an empty map. 
 
   // Insertion 
    myHashTable.put(key, value); 
 
   // Deletion 
    myHashtable.remove(key); 
 
    // Look up 
    myHashTable.get(key); // returns null if the key K is not present 
    myHashTable.containsKey(key); // returns a boolean value, indicating the presence of a key 
 
    // Number of key, value pairs in the hash table 
    myHashTable.size(); 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CVt1)

## 资源

*   为了进一步阅读，您可以尝试使用此[链接](http://geeksquiz.com/hashing-set-1-introduction/) ，这可以使用不同的示例来解释哈希。
*   [在60秒内哈希](https://www.youtube.com/watch?v=x05KubVlh_M) 。
*   [杜鹃哈希](https://www.youtube.com/watch?v=HRzg0SzFLQQ)
*   [坚持哈希](https://www.youtube.com/watch?v=jznJKL0CrxM)
*   [布隆过滤器](https://www.youtube.com/watch?v=-SuTGoFYjZs)
*   [哈希策略](https://www.youtube.com/watch?v=D65JQ0qQwZk)
*   [密码哈希](https://crackstation.net/hashing-security.htm)
*   [散列和加密之间的区别](http://stackoverflow.com/questions/326699/difference-between-hashing-a-password-and-encrypting-it)