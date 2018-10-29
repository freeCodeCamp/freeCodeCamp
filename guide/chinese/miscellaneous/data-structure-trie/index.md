---
title: Data Structure Trie
localeTitle: 数据结构Trie
---
## 特里简介

单词trie是单词“re **trie** val”的缩写，因为trie可以在字典中找到只有单词前缀的单个单词。  
Trie是一种高效的数据检索数据结构，使用trie，搜索复杂度可以达到最佳极限，即字符串的长度。  
当我们存储字符串时，它是一种用于在字母表上存储字符串的多路树结构。  
它已被用来存储大型英语词典，比如拼写检查程序中的单词。  
但是，尝试的惩罚是存储要求。

## 什么是特里？

trie是一种树状数据结构，它存储字符串，并帮助您使用字符串的前缀查找与该字符串关联的数据。  
例如，假设您计划构建字典以存储字符串及其含义。您一定想知道为什么我不能简单地使用哈希表来获取信息。  
是的，您显然可以使用哈希表获取信息，但是， 哈希表只能找到字符串与我们添加的字符串完全匹配的数据。但是，与哈希表相比，trie将使我们能够在更短的时间内找到具有公共前缀，缺少字符等的字符串。  
通常，特里看起来像这样，

![特里](//discourse-user-assets.s3.amazonaws.com/original/2X/c/c43e222a6f9152512d73f97b8117db5c074bbc8e.png)

这是一个Trie的图像，它存储了单词{assoc，algo，all，also，tree，trie}。

## 如何实现trie？

让我们在python中实现一个trie，用于存储带有英语词典含义的单词。
```
ALPHABET_SIZE = 26 # For English 
 
 class TrieNode: 
    def __init__(self): 
        self.edges = [None]*(ALPHABET_SIZE) # Each index respective to each character. 
        self.meaning = None # Meaning of the word. 
        self.ends_here = False # Tells us if the word ends here. 
```

如您所见，边长为26，每个索引指的是字母表中的每个字符。 'A'对应0，'B'对应1，'C'对2 ......'Z'对应第25个索引。如果您要查找的字符指向`None` ，则表示该字符不在trie中。

典型的Trie应该至少实现这两个功能：

*   `add_word(word,meaning)`
*   `search_word(word)`
*   `delete_word(word)`

此外，还可以添加类似的东西

*   `get_all_words()`
*   `get_all_words_with_prefix(prefix)`

#### 将Word添加到trie
```
    def add_word(self,word,meaning): 
        if len(word)==0: 
            self.ends_here = True # Because we have reached the end of the word 
            self.meaning = meaning # Adding the meaning to that node 
            return 
        ch = word[0] # First character 
        # ASCII value of the first character (minus) the ASCII value of 'a'-> the first character of our ALPHABET gives us the index of the edge we have to look up. 
        index = ord(ch) - ord('a') 
        if self.edges[index] == None: 
            # This implies that there's no prefix with this character yet. 
            new_node = TrieNode() 
            self.edges[index] = new_node 
 
        self.edges[index].add(word[1:],meaning) #Adding the remaining word 
```

#### 检索数据
```
    def search_word(self,word): 
        if len(word)==0: 
            if self.ends_here: 
                return True 
            else: 
                return "Word doesn't exist in the Trie" 
        ch = word[0] 
        index = ord(ch)-ord('a') 
        if self.edge[index]== None: 
            return False 
        else: 
            return self.edge[index].search_word(word[1:]) 
```

`search_word`函数将告诉我们Trie中是否存在该单词。由于我们的是字典，我们也需要获取含义，现在让我们声明一个函数来做到这一点。
```
    def get_meaning(self,word): 
        if len(word)==0 : 
            if self.ends_here: 
                return self.meaning 
            else: 
                return "Word doesn't exist in the Trie" 
        ch = word[0] 
        index = ord(ch) - ord('a') 
        if self.edges[index] == None: 
            return "Word doesn't exist in the Trie" 
        else: 
            return self.edges[index].get_meaning(word[1:]) 
```

#### 删除数据

通过删除数据，您只需将变量`ends_here`更改为`False` 。这样做不会改变前缀，但是仍然会删除trie中单词的含义和存在。
```
    def delete_word(self,word): 
        if len(word)==0: 
            if self.ends_here: 
                self.ends_here = False 
                self.meaning = None 
                return "Deleted" 
            else: 
                return "Word doesn't exist in the Trie" 
        ch = word[0] 
        index = ord(ch) - ord('a') 
        if self.edges[index] == None: 
            return "Word doesn't exist in the Trie" 
        else: 
            return self.edges[index].delete_word(word[1:]) 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CWbr)

## 资源

*   如需进一步阅读，您可以试试这个[topcoder](https://www.topcoder.com/community/data-science/data-science-tutorials/using-tries/)教程。
*   另外， [geeksforgeeks](http://www.geeksforgeeks.org/trie-insert-and-search/)的教程