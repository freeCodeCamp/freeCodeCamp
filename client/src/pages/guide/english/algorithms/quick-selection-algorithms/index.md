---
title: Quick Selection
---

## Quick Selection

Quick Selection is algorithm to find Kth smallest element in List or Array that it's unsorted list.
It can find Kth smallest element do not sort list before

### Algorithms

In quick selection algorithm, there are two part. First part is 'partition' and Second part is 'selection'.

#### Partition

It's partition list into two part. The pivot is position that partition the list, by every left element of pivot is less than pivot and every right element is more than pivot.
There are two algorithm for find pivot of partition.
  - Lomuto partition
  - Hoare partition

## Time complexity
ike quicksort, the quickselect has good average performance, but is sensitive to the pivot that is chosen. If good pivots are chosen, meaning ones that consistently decrease the search set by a given fraction, then the search set decreases in size exponentially and by induction (or summing the geometric series) one sees that performance is linear, as each step is linear and the overall time is a constant times this (depending on how quickly the search set reduces). However, if bad pivots are consistently chosen, such as decreasing by only a single element each time, then worst-case performance is quadratic: O(n2). This occurs for example in searching for the maximum element of a set, using the first element as the pivot, and having sorted data.
