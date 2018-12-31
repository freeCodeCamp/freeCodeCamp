---
title: Data Structure Trie
localeTitle: Estrutura de Dados Trie
---
## Introdução ao Trie

A palavra trie é um inflix da palavra "re **trie** val", porque o trie pode encontrar uma única palavra em um dicionário com apenas um prefixo da palavra.  
Trie é uma estrutura de dados de recuperação de dados eficiente, usando trie, complexidades de busca podem ser trazidas para um limite ideal, ou seja, o comprimento da string.  
É uma estrutura de árvore multi-way útil para armazenar strings ao longo de um alfabeto, quando os armazenamos.  
Ele tem sido usado para armazenar grandes dicionários de inglês, digamos palavras, em programas de verificação ortográfica.  
No entanto, a penalidade nas tentativas é o requisito de armazenamento.

## O que é um trie?

A trie é uma árvore como estrutura de dados que armazena strings e ajuda a encontrar os dados associados a essa string usando o prefixo da string.  
Por exemplo, digamos que você planeje criar um dicionário para armazenar cadeias de caracteres junto com seus significados. Você deve estar se perguntando por que não posso simplesmente usar uma tabela de hash para obter as informações.  
Sim, você obviamente pode obter informações usando uma tabela de hash, mas as tabelas de hash só podem encontrar dados em que a string corresponda exatamente àquela que adicionamos. Mas trie nos dará a capacidade de encontrar seqüências com prefixos comuns, um caractere ausente etc em menor tempo, em comparação com uma tabela de hash.  
A trie tipicamente se parece com isso,

![Trie](//discourse-user-assets.s3.amazonaws.com/original/2X/c/c43e222a6f9152512d73f97b8117db5c074bbc8e.png)

Esta é uma imagem de um Trie, que armazena as palavras {assoc, algo, all, also, tree, trie}.

## Como implementar um trie?

Vamos implementar um trie em python, para armazenar palavras com seus significados do dicionário inglês.
```
ALPHABET_SIZE = 26 # For English 
 
 class TrieNode: 
    def __init__(self): 
        self.edges = [None]*(ALPHABET_SIZE) # Each index respective to each character. 
        self.meaning = None # Meaning of the word. 
        self.ends_here = False # Tells us if the word ends here. 
```

Como você pode ver, as bordas têm 26 de comprimento, cada índice se referindo a cada caractere no alfabeto. 'A' corresponde a 0, 'B' a 1, 'C' a 2… 'Z' a 25º índice. Se o personagem que você está procurando está apontando para `None` , isso significa que a palavra não está lá no trie.

Um típico Trie deve implementar pelo menos estas duas funções:

*   `add_word(word,meaning)`
*   `search_word(word)`
*   `delete_word(word)`

Além disso, pode-se acrescentar algo como

*   `get_all_words()`
*   `get_all_words_with_prefix(prefix)`

#### Adicionando o Word ao trie
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

#### Recuperando dados
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

A função `search_word` nos dirá se a palavra existe no Trie ou não. Como o nosso é um dicionário, precisamos buscar o significado também, agora vamos declarar uma função para fazer isso.
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

#### Excluindo dados

Ao excluir dados, você só precisa alterar a variável `ends_here` para `False` . Fazer isso não altera os prefixos, mas elimina o significado e a existência da palavra do trie.
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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/CWbr)

## Recursos

*   Para ler mais, você pode tentar este tutorial [topcoder](https://www.topcoder.com/community/data-science/data-science-tutorials/using-tries/) .
*   Além disso, um tutorial de [geeksforgeeks](http://www.geeksforgeeks.org/trie-insert-and-search/)