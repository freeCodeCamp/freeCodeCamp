---
title: Data Structure Trie
localeTitle: Структура данных Trie
---
## Введение в Trie

Слово trie - это нагнетание слова «re **trie** val», потому что trie может найти единственное слово в словаре только с префиксом слова.  
Trie - эффективная структура данных извлечения данных, используя trie, сложности поиска можно довести до оптимального предела, то есть длины строки.  
Это многоуровневая древовидная структура, полезная для хранения строк над алфавитом, когда мы их храним.  
Он использовался для хранения больших словарей английского языка, например, слов в программах проверки орфографии.  
Тем не менее, штраф за попытки - это требование хранения.

## Что такое trie?

Три - это дерево, подобное структуре данных, в которой хранятся строки, и вы можете найти данные, связанные с этой строкой, используя префикс строки.  
Например, скажем, вы планируете создавать словарь для хранения строк вместе со своими значениями. Вам должно быть интересно, почему я не могу просто использовать хеш-таблицу, чтобы получить информацию.  
Да, вы, очевидно, можете получить информацию, используя хеш-таблицу, но хэш-таблицы могут найти только данные, где строка точно совпадает с той, которую мы добавили. Но trie даст нам возможность находить строки с общими префиксами, отсутствующим персонажем и т. Д. В меньшем времени, по сравнению с хэш-таблицей.  
Обычно это трюк, выглядит примерно так:

![Trie](//discourse-user-assets.s3.amazonaws.com/original/2X/c/c43e222a6f9152512d73f97b8117db5c074bbc8e.png)

Это образ Trie, в котором хранятся слова {assoc, algo, all, also, tree, trie}.

## Как реализовать trie?

Давайте реализуем trie в python, для хранения слов с их значениями из английского словаря.
```
ALPHABET_SIZE = 26 # For English 
 
 class TrieNode: 
    def __init__(self): 
        self.edges = [None]*(ALPHABET_SIZE) # Each index respective to each character. 
        self.meaning = None # Meaning of the word. 
        self.ends_here = False # Tells us if the word ends here. 
```

Как вы можете видеть, ребра имеют длину 26, каждый индекс относится к каждому символу в алфавите. 'A', соответствующий 0, 'B', 1, C ', 2 ...' Z ', 25-й индекс. Если персонаж, которого вы ищете, указывает на `None` , это означает, что в trie слово отсутствует.

Типичный Trie должен реализовывать по крайней мере эти две функции:

*   `add_word(word,meaning)`
*   `search_word(word)`
*   `delete_word(word)`

Кроме того, можно добавить что-то вроде

*   `get_all_words()`
*   `get_all_words_with_prefix(prefix)`

#### Добавление слова в trie
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

#### Извлечение данных
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

Функция `search_word` скажет нам, существует ли слово в Trie или нет. Поскольку наш словарь - это словарь, нам нужно также получить значение, теперь давайте объявим функцию для этого.
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

#### Удаление данных

Удалив данные, вам просто нужно изменить переменную `ends_here` на `False` . Выполнение этого не изменяет префиксы, но все же удаляет смысл и существование слова из trie.
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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/CWbr)

## Ресурсы

*   Для дальнейшего чтения вы можете попробовать этот учебник [topcoder](https://www.topcoder.com/community/data-science/data-science-tutorials/using-tries/) .
*   Кроме того, учебник от [geeksforgeeks](http://www.geeksforgeeks.org/trie-insert-and-search/)