---
title: STL Algorithms - Sorting
---

## std::sort 

This is an algorithm with O(n\*logn) time complexity that you can use to order the elements of a container from begin to end.

The default ordering for numeric values is ascending and for string values it is lexicographical. The ordering of equal elements is not guaranteed to be preserved.

It is a hybrid of Quick Sort and Heap Sort.

Example:

```
vector<int> v = {10,4,45,1}; //creates a vector 
sort(v.begin(),v.end());  //Sorts the vector into{1,4,10,45}
```

```
vector<int> v = {10,4,45,1}; //creates a vector 
sort(v.begin(),v.begin()+2);  //Sorts only the first two elements {4,10,45,1}
```

### More Information:
1. [WikiPedia - Introsort](https://en.wikipedia.org/wiki/Introsort)
2. [CPP Reference](http://www.cplusplus.com/reference/algorithm/sort/)
3. [Youtube - CodeReport](https://www.youtube.com/watch?v=_dC6Pvk0awA)
