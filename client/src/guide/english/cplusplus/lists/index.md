---
title: C++ Lists
---

# What is a STL List?

Lists in C++ are a powerful tool similar to its more well known cousin, C++ Vectors. While Vectors are a sequential container 
where elements are indexed in a continuous chain, Lists are also a sequential container but they are organized differently. 
List elements point to its next element so all elements are ordered in sequence but they don't use indexing. 
How? You may ask. They do this not by indexing but using a special tool called iterators. Iterators are like special pointers
whose job is to maintain the order of the list elements kind of like the link between two train cars. Here is a nice visual 
of how Lists are organized compared to Vectors and Arrays. 
![img](https://imgur.com/SiU8uTe.png)


## How to declare a List
If you want to declare a List of Numbers you write:

'''std::list<int> Numbers;''' 
