---
title: Rabin Karp Algorithm
localeTitle: 拉宾卡普算法
---
## Rabin-Karp算法

*   由Michael O. Rabin和Richard M. Karp开发的字符串匹配/搜索算法。
*   使用**_散列_**技术和**_蛮力_**进行比较。

#### 重要条款

*   **_pattern_**是要搜索的字符串。 将模式长度视为**_M个_**字符。
*   **_text_**是要从中搜索模式的整个文本。 将文本长度视为**_N个_**字符。

#### 什么是蛮力比较？

在强力比较中，将模式的每个字符与文本的每个字符进行比较，直到找到不匹配的字符。

#### Rabin-Karp算法的工作

1.  计算_模式的_哈希值
2.  计算_文本_前_M个_字符的哈希值
3.  比较两个哈希值
4.  如果它们不相等，则为下一个_M_字符的_文本_计算哈希值并再次进行比较。
5.  如果它们相等，则执行强力比较。
```
hash_p = hash value of pattern 
 hash_t = hash value of first M letters in body of text 
 do 
    if (hash_p == hash_t) 
        brute force comparison of pattern and selected section of text 
    hash_t= hash value of next section of text, one character over 
 while (end of text or brute force comparison == true) 
```

#### 优于天真串匹配算法

该技术仅导致每个文本子序列进行一次比较，并且仅在哈希值匹配时才需要强力。

#### 应用

*   **_抄袭检测_**

#### 更多信息：

[维基百科上的Rabin-Karp](https://en.wikipedia.org/wiki/Rabin%E2%80%93Karp_algorithm/)