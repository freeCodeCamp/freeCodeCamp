---
title: Data Structure Trie
---
## Introduction to Trie

The word trie is an inflix of the word "re**trie**val", because the trie can find a single word in a dictionary with only a prefix of the word.  
Trie is an efficient data retrieval data structure, using trie, search complexities can be brought to an optimal limit, i.e. length of the string.  
It is a multi-way tree structure useful for storing strings over an alphabet, when we are storing them.  
It has been used to store large dictionaries of English, say, words in spell-checking programs.  
However, the penalty on tries is the storage requirement.

## What is a trie?

A trie is a tree like data structure which stores strings, and helps you find the data associated with that string using the prefix of the string.  
For example, say you plan on building a dictionary to store strings along with their meanings. You must be wondering why can't I simply use a hash table, to get the information.  
Yes, you obviously can get information using a hash table, but, the <a>hash tables</a> can only find data where the string exactly matches the one we've added. But trie will give us the capability to find strings with common prefixes, a missing character etc in lesser time, in comparison to a hash table.  
A trie typically, looks something like this,

![Trie](//discourse-user-assets.s3.amazonaws.com/original/2X/c/c43e222a6f9152512d73f97b8117db5c074bbc8e.png)

This is an image of a Trie, which stores the words {assoc, algo, all, also, tree, trie}.

## How to implement a trie?

Let's implement a trie in python, for storing words with their meanings from english dictionary.

    ALPHABET_SIZE = 26 # For English

    class TrieNode:
    	def __init__(self):
    		self.edges = [None]*(ALPHABET_SIZE) # Each index respective to each character.
    		self.meaning = None # Meaning of the word.
    		self.ends_here = False # Tells us if the word ends here.

As you can see, edges are 26 in length, each index referring to each character in the alphabet. 'A' corresponding to 0, 'B' to 1, 'C' to 2 ... 'Z' to 25th index. If the character you are looking for is pointing to `None`, that implies the word is not there in the trie.

A typical Trie should implement at least these two functions:

*   `add_word(word,meaning)`
*   `search_word(word)`
*   `delete_word(word)`

Additionally, one can also add something like

*   `get_all_words()`
*   `get_all_words_with_prefix(prefix)`

#### Adding Word to the trie

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

#### Retrieving data

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

The `search_word` function will tell us if the word exists in the Trie or not. Since ours is a dictionary, we need to fetch the meaning as well, now lets declare a function to do that.

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

#### Deleting data

By deleting data, you just need to change the variable `ends_here` to `False`. Doing that doesn't alter the prefixes, but stills deletes the meaning and the existence of the word from the trie.

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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CWbr' target='_blank' rel='nofollow'>Run Code</a>

## Resources

*   For further reading, you can try this <a href='https://www.topcoder.com/community/data-science/data-science-tutorials/using-tries/' target='_blank' rel='nofollow'>topcoder</a> tutorial.
*   Also, a tutorial from <a href='http://www.geeksforgeeks.org/trie-insert-and-search/' target='_blank' rel='nofollow'>geeksforgeeks</a>