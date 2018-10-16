---
title: Hash Tables and Hashing Functions
---
### Introduction to hashing

Hashing is designed to solve the problem of needing to efficiently find or store an item in a collection.  
For example, if we have a list of 10,000 words of English and we want to check if a given word is in the list, it would be inefficient to successively compare the word with all 10,000 items until we find a match. Even if the list of words are lexicographically sorted, like in a dictionary, you will still need some time to find the word you are looking for.  
Hashing is a technique to make things more efficient by effectively narrowing down the search at the outset.

## What is hashing?

Hashing means using some function or algorithm to map object data to some representative integer value.  
This so-called hash code (or simply hash) can then be used as a way to narrow down our search when looking for the item in the map.  
Generally, these hash codes are used to generate an index, at which the value is stored.

## How hashing works

In hash tables, you store data in forms of key and value pairs. The key, which is used to identify the data, is given as an input to the hashing function. The hash code, which is an integer, is then mapped to the fixed size we have.

Hash tables have to support 3 functions.

*   insert (key, value)
*   get (key)
*   delete (key)

Purely as an example to help us grasp the concept, let us suppose that we want to map a list of string keys to string values (for example, map a list of countries to their capital cities).  
So let’s say we want to store the data in Table in the map.

Key | Value  
----------------|-------------  
Cuba | Havana  
England | London  
France | Paris  
Spain | Madrid  
Switzerland | Bern

And let us suppose that our hash function is to simply take the length of the string.

For simplicity, we will have two arrays: one for our keys and one for the values.  
So to put an item in the hash table, we compute its hash code (in this case, simply count the number of characters), then put the key and value in the arrays at the corresponding index.  
For example, Cuba has a hash code (length) of 4.  
So we store Cuba in the 4th position in the keys array, and Havana in the 4th index of the values array etc. And we end up with the following:

Position | Keys array | Values array  
---------------------|------------------|---------------  
1 | |  
2 | |  
3 | |  
4 | Cuba | Havana  
5 | Spain | Madrid  
6 | France | Paris  
7 | England | London  
8 | |  
9 | |  
10 | |  
11 | Switzerland | Bern

Now, in this specific example things work quite well.  
Our array needs to be big enough to accommodate the longest string, but in this case that’s only 11 slots.  
We do waste a bit of space because, for example, there are no 1-letter keys in our data, nor keys between 8 and 10 letters. But in this case, the wasted space isn’t so bad either. Taking the length of a string is nice and fast, and so is the process of finding the value associated with a given key (certainly faster than doing up to five string comparisons).

But, what do we do if our dataset has a string which has more than 11 characters?  
What if we have one another word with 5 characters, "India", and try assigning it to an index using our hash function. Since the index 5 is already occupied, we have to make a call on what to do with it. This is called a collision.

If our dataset had a string with thousand characters, and you make an array of thousand indices to store the data, it would result in a wastage of space. If our keys were random words from English, where there are so many words with same length, using length as a hashing function would be fairly useless.

## Collision Handling

Two basic methods are used to handle collisions.

1.  Separate Chaining
2.  Open Addressing

#### Separate Chaining

Hash collision handling by separate chaining, uses an additional data structure, preferrably linked list for dynamic allocation, into buckets. In our example, when we add India to the dataset, it is appended to the linked list stored at the index 5, then our table would look like this.

Position | Linked List Heads |  
---------------------|------------------------------------|  
1 | |  
2 | |  
3 | |  
4 | <a href='https://en.wikipedia.org/wiki/Linear_probing' target='_blank' rel='nofollow'>Cuba-Havana] |  
5 | [Spain-Madrid] -> [India-Delhi] |  
6 | [France-Paris] |  
7 | [England-London] |  
8 | |  
9 | |  
10 | |  
11 | [Switzerland-Bern] |

To find an item we first go to the bucket and then compare keys. This is a popular method, and if a list of links is used the hash never fills up. The cost for `get(k)` is on average `O(n)` where n is the number of keys in the bucket, total number of keys be N.  
The problem with separate chaining is that the data structure can grow with out bounds.

#### Open Addressing

Open addressing does not introduce any new data structure. If a collision occurs then we look for availability in the next spot generated by an algorithm. Open Addressing is generally used where storage space is a restricted, i.e. embedded processors. Open addressing not necessarily faster then separate chaining.

Methods for Open Addressing

*   [Linear Probing</a>
*   <a href='https://en.wikipedia.org/wiki/Quadratic_probing' target='_blank' rel='nofollow'>Quadratic Probing</a>
*   <a href='https://en.wikipedia.org/wiki/Double_hashing' target='_blank' rel='nofollow'>Double Hashing</a>

## How to use hashing in your code.

#### Python

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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CVtK' target='_blank' rel='nofollow'>Run Code</a>

#### Java

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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CVt1' target='_blank' rel='nofollow'>Run Code</a>

## Resources

*   For further reading, you many want to try this <a href='http://geeksquiz.com/hashing-set-1-introduction/' target='_blank' rel='nofollow'>link</a>, which explains hashing using a different example.
*   <a href='https://www.youtube.com/watch?v=x05KubVlh_M' target='_blank' rel='nofollow'>Hashing in 60 seconds</a>.
*   <a href='https://www.youtube.com/watch?v=HRzg0SzFLQQ' target='_blank' rel='nofollow'>Cuckoo Hashing</a>
*   <a href='https://www.youtube.com/watch?v=jznJKL0CrxM' target='_blank' rel='nofollow'>Consisten Hashing</a>
*   <a href='https://www.youtube.com/watch?v=-SuTGoFYjZs' target='_blank' rel='nofollow'>Bloom Filters</a>
*   <a href='https://www.youtube.com/watch?v=D65JQ0qQwZk' target='_blank' rel='nofollow'>Hashing Strategies</a>
*   <a href='https://crackstation.net/hashing-security.htm' target='_blank' rel='nofollow'>Password Hashing</a>
*   <a href='http://stackoverflow.com/questions/326699/difference-between-hashing-a-password-and-encrypting-it' target='_blank' rel='nofollow'>Difference between Hashing and encrypting</a>