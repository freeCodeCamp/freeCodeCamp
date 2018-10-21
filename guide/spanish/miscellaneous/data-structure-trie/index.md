---
title: Data Structure Trie
localeTitle: Estructura de datos Trie
---
## Introducción a Trie

La palabra trie es un infijo de la palabra " **trie** val val", porque el trie puede encontrar una sola palabra en un diccionario con solo un prefijo de la palabra.  
Trie es una estructura de datos de recuperación de datos eficiente, utilizando trie, las complejidades de búsqueda se pueden llevar a un límite óptimo, es decir, la longitud de la cadena.  
Es una estructura de árbol de múltiples vías útil para almacenar cadenas sobre un alfabeto, cuando las estamos almacenando.  
Se ha utilizado para almacenar grandes diccionarios de inglés, por ejemplo, palabras en programas de corrección ortográfica.  
Sin embargo, la penalización en los intentos es el requisito de almacenamiento.

## ¿Qué es un trie?

Un trie es una estructura de datos similar a un árbol que almacena cadenas y le ayuda a encontrar los datos asociados con esa cadena utilizando el prefijo de la cadena.  
Por ejemplo, supongamos que planea construir un diccionario para almacenar cadenas junto con sus significados. Debe preguntarse por qué no puedo simplemente usar una tabla hash para obtener la información.  
Sí, obviamente puede obtener información usando una tabla hash, pero las tablas hash solo pueden encontrar datos donde la cadena coincide exactamente con la que hemos agregado. Pero trie nos dará la capacidad de encontrar cadenas con prefijos comunes, un carácter faltante, etc. en menos tiempo, en comparación con una tabla hash.  
Un trie típicamente, se ve algo como esto,

![Trie](//discourse-user-assets.s3.amazonaws.com/original/2X/c/c43e222a6f9152512d73f97b8117db5c074bbc8e.png)

Esta es una imagen de un Trie, que almacena las palabras {assoc, algo, all, también, tree, trie}.

## ¿Cómo implementar un trie?

Implementemos un trie en python, para almacenar palabras con sus significados del diccionario de inglés.
```
ALPHABET_SIZE = 26 # For English 
 
 class TrieNode: 
    def __init__(self): 
        self.edges = [None]*(ALPHABET_SIZE) # Each index respective to each character. 
        self.meaning = None # Meaning of the word. 
        self.ends_here = False # Tells us if the word ends here. 
```

Como puede ver, los bordes tienen una longitud de 26, y cada índice se refiere a cada carácter del alfabeto. 'A' correspondiente a 0, 'B' a 1, 'C' a 2 ... 'Z' al índice 25. Si el carácter que está buscando está apuntando a `None` , eso implica que la palabra no está allí en el trie.

Un Trie típico debería implementar al menos estas dos funciones:

*   `add_word(word,meaning)`
*   `search_word(word)`
*   `delete_word(word)`

Además, también se puede agregar algo como

*   `get_all_words()`
*   `get_all_words_with_prefix(prefix)`

#### Añadiendo Word a la Trie
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

#### Recuperando datos
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

La función `search_word` nos dirá si la palabra existe en el Trie o no. Dado que el nuestro es un diccionario, también debemos buscar el significado, ahora vamos a declarar una función para hacerlo.
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

#### Borrando datos

Al eliminar datos, solo necesita cambiar la variable `ends_here` a `False` . Hacer eso no altera los prefijos, pero aún así elimina el significado y la existencia de la palabra desde el trie.
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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CWbr)

## Recursos

*   Para leer más, puede probar este tutorial de [codificador superior](https://www.topcoder.com/community/data-science/data-science-tutorials/using-tries/) .
*   Además, un tutorial de [geeksforgeeks.](http://www.geeksforgeeks.org/trie-insert-and-search/)