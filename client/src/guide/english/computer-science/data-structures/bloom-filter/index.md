---
title: Bloom Filter
---

## Description

A Bloom filter is a data structure which is similar to a set. The Bloom filter allows for the question _Is this item a member of the set?_ to be answered quickly. The filter will never return _No_ if the item is in the set; but, it may return _Yes_ if the item is not in the set. This is one downside to using a Bloom filter, there is a chance for false positive results when checking if an item is in the set. An upside to using a Bloom filter is that adding an item to the set and checking if the item is in the set is a constant time [O(n)](https://guide.freecodecamp.org/algorithms/algorithm-performance) operation.

## Example

The following example uses a Bloom filter to create a friend list. The example implementation uses three [hashing functions](https://guide.freecodecamp.org/miscellaneous/hash-tables-and-hashing-functions). The hashing functions ingest a string (a friend name) and calculate a single value for the string based on the number of spots in the Bloom filter.

Create filter as an array of 10 indices. A `0` indicates no item is at that index.

`[0,0,0,0,0,0,0,0,0,0]`

A user adds David to the friend list. The string (`'David'`) is put through several hashing functions which return `0`, `4`, and `8`, respectively. The values from the hashing functions are used to update the filter array at those indices.

The filter indices are updated using those hashed values. A `1` indicates an item has been added at that index.

`[1,0,0,0,1,0,0,0,1,0]`

A user adds Rosie to the friend list. The hashing functions return `3`, `4`, and `6` for `'Rosie'`. The filter indices are updated using the hashed values.

`[1,0,0,1,1,0,1,0,1,0]`

There is a check if Chuck is a member of the friend list. The string `'Chuck'` is put through the hashing functions returning `1`, `3`, and `6`. When the filter array is checked at those indices, it returns `0`, `1`, and `1`. Because one index has a `0` value, Chuck is _definitely_ not a member of the list.

There is a check if Maja is a member of the friend list. The string `'Maja'` is put through the hashing functions, returning `0`, `6`, and `8`. When the filter array is checked at those indices, it returns `1`, `1`, and `1`. Because all three indices have a value of `1`, Maja _may_ already be a member of the list. This is a false positive result.

## Considerations

Bloom filters allow for quick look up to determine if a value is _possibly_ a member of the set or _definitely_ not a member of the set. The more items added to the Bloom filter the rate of false positive results when checking if an item is a member of the set will increase. One way to decrease the rate of false positive results is to increase the size of the array. Although this is a compromise because the larger the array, the greater memory it will occupy. It is necessary to determine an acceptable rate of false positive results for a given array size.

## Further Reading

[Medium's Post Recommendation Algorithm](https://blog.medium.com/what-are-bloom-filters-1ec2a50c68ff)

[Wikipedia on Bloom filters](https://en.wikipedia.org/wiki/Bloom_filter)
