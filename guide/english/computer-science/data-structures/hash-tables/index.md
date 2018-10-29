---
title: Hash Tables
---

## Hash Tables
Hash table (or Hash Map) is a data structure that can map keys to values.A hash table uses a hash function to compute an index 
into an array of buckets, from which the desired values can be found.Time complexity of a well defined Hash function can be O(1).

A hash table (hash map) is a data structure which implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

![an example of a hash table](https://github.com/TomerPacific/fccGuideImages/blob/master/315px-Hash_table_3_1_1_0_1_0_0_SP.svg.png?raw=true)

Some Important properties of Hash Table -
1) Values are not stored in sorted order. 
2) In a hash table, one must also handle potential collisions. 
   This is often done by chaining, which means to create a linked list of all the values whose keys map to a particular index.

Implementation of Hash Table

A hash table is traditionally implemented with an array of linked lists. 
When we want to insert a key/Value pair, we map the key to an index in the array using the hash function.
The value is then inserted into the linked list at that position.

The idea of hashing is to distribute the entries (key/value pairs) across an array of buckets. 
Given a key, the algorithm computes an index that suggests where the entry can be found:
```
index = f(key, array_size)
```
Often this is done in two steps:
```
hash = hashfunc(key)
index = hash % array_size
```
In this method, the hash is independent of the array size, and it is then reduced to an index (a number between 0 and array_size − 1) using the modulo operator (%).

Let us consider string S. You are required to count the frequency of all the characters in this string.
```
string S = “ababcd”
```
The simplest way to do this is to iterate over all the possible characters and count their frequency one by one. 
The time complexity of this approach is O(26*N) where N is the size of the string and there are 26 possible characters.
```
void countFre(string S)
    {
        for(char c = ‘a’;c <= ‘z’;++c)
        {
            int frequency = 0;
            for(int i = 0;i < S.length();++i)
                if(S[i] == c)
                    frequency++;
            cout << c << ‘ ‘ << frequency << endl;
        }
    }
```
Output
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

Let us apply hashing to this problem. Take an array frequency of size 26 and hash the 26 characters with indices of the array by using the hash function. 
Then, iterate over the string and increase the value in the frequency at the corresponding index for each character.
The complexity of this approach is O(N) where N is the size of the string.
```
int Frequency[26];

    int hashFunc(char c)
    {
        return (c - ‘a’);
    }

    void countFre(string S)
    {
        for(int i = 0;i < S.length();++i)
        {
            int index = hashFunc(S[i]);
            Frequency[index]++;
        }
        for(int i = 0;i < 26;++i)
            cout << (char)(i+’a’) << ‘ ‘ << Frequency[i] << endl;
    }
``` 
Output

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

### Hash Collisions
When you are using a hash map you have to assume that hash collisions are unavoidable, since you will be using a hash map which is significantly smaller in size than the amount of data you have. The two main approaches to solving these collisions are Chaining and Open Addressing.

#### Chaining
One way you can resolve hash collisions is using chaining. What this means is for each key-value mapping in the hash table, the value field will not hold only one cell of data, but rather a linked list of data. In the example shown in the image below, you can see that Sandra Dee is added as another element to key 152 after John Smith.

![an example of chaining in a hash table](https://github.com/TomerPacific/fccGuideImages/blob/master/620px-Hash_table_5_0_1_1_1_1_0_LL.svg.png?raw=true)

The major setback regarding chaining is the increase in time complexity. This means, that instead of the O(1) properties of a regular hash table, each action will now take greater time as we need to traverse the linked list.

#### Open Addressing
Another way you can resolve hash collisions is using open addressing. In this method once a value is mapped to a key that is already occupied, you move along the adjacent keys of the hash table in a preordained determined fashion, until you find a key with an empty value. In the example shown in the image below, Sandra Dee is mapped to key 153, even though her value is supposed to be mapped to 152.

![an example of open addressing in a hash table](https://github.com/TomerPacific/fccGuideImages/blob/master/380px-Hash_table_5_0_1_1_1_1_0_SP.svg.png?raw=true)

The major setback of open addressing lies in the fact that when needing to look for values, they might not be in the place you expect them to be (the key mapping). Therefore you have to traverse parts of the hash table in order to find the value you are looking for, thus resulting in increased time complexity.

#### Time Complexity
It is very important to note that hash tables have amortised constant complexity i.e. on an average case the complexity will be O(1). 
In worst case, If too many elements were hashed into the same key, it can have a time complexity of O(n).

### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

[More Info on Hash Tables - Wiki](https://en.wikipedia.org/wiki/Hash_table)<br>
[Comparison Between Hash Table and STL-map](http://www.geeksforgeeks.org/hash-table-vs-stl-map/)

#### Source 

[Basics of Hash Tables - HackerEarth](https://www.hackerearth.com/practice/data-structures/hash-tables/basics-of-hash-tables/tutorial/)
