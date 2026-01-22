---
id: 6895d06b5968736797c408e4
title: How Do Dynamic Arrays Differ From Static Arrays?
challengeType: 19
dashedName: how-do-dynamic-arrays-differ-from-static-arrays
---

# --description--

Arrays are a fundamental data structure in computer science. All arrays store ordered collections of data, but depending on their type, they may work differently behind the scenes.

Their underlying behavior can have an important effect in the program's efficiency, so let's learn about dynamic and static arrays and their differences, so you can choose the most efficient one for your program.

We'll start with static arrays.

**Static arrays** have a fixed size. They store elements in adjacent memory locations.

The size of a static array is determined when the array is initialized. Once that specific block of memory is allocated, it's fixed, and cannot be changed while the program is running. This is a key characteristic of static arrays.

Storing elements in adjacent memory locations makes the data retrieval process more efficient because the program can store the location of the first element and then use indices to make simple calculations and find the other elements in memory.

Thanks to this, accessing the values of a static array takes constant time `O(1)`, which is very efficient.

You can use a static array when you know the number of elements that will be stored in advance. It's also helpful when the values will be accessed very frequently, since the access operation is very efficient.

However, this data structure cannot grow or shrink, so if the number of elements that will be stored can vary, you should use a dynamic array instead.

Trying to increase the size of a static array would involve creating a new array and copying all the elements from the old array to a new one, which is inefficient. In that case, a dynamic array would be much better because it handles this process automatically.

Python does not include traditional static arrays as built-in data structures.

But other programming languages, like Java, do support them. This is an example of a static array in Java that can store three integers:

```java
int[] numbers = new int[3]; 
```

Arrays in Python are dynamic, so let's take a look at those.

**Dynamic arrays** are more flexible because they can grow or shrink automatically while the program is running.

They work through an automatic resizing mechanism that copies the elements into a new array when the original array is full. The process is done efficiently because the size of the new array is chosen in an efficient way that makes these computationally expensive operations less frequent.

Accessing the elements of a dynamic array takes constant time `O(1)`, so this operation is very efficient.

Inserting an element in the middle of the array takes linear time `O(n)` because the elements after it need to be relocated.

Inserting an element at the end of the array takes constant time `O(1)` if there is still space available in the dynamic array, but if the array is full and needs resizing, this operation has a `O(n)` complexity.

You should use dynamic arrays when you don't know in advance the number of values that you will need to store in the array. They are also helpful when you will be frequently inserting and deleting elements.

Python's built-in `list` data structure works as a dynamic array. You can create a list by writing the elements within square brackets, separated by commas.

```python
numbers = [3, 4, 5, 6]
```

You can access an element by writing the name of the variable that holds the list, followed by square brackets, and within the square brackets, the corresponding index.

Indices start from 0 for the first element and are incremented by 1 for each subsequent element:

```python
numbers[0]  # 3
numbers[1]  # 4
numbers[2]  # 5
numbers[3]  # 6
```

To update a value, you just need to reassign it:

```python
numbers[2] = 16
```

You can append elements to the list with the `.append()` method:

```python
numbers.append(7)
```

You can insert elements at a specific index with the `.insert()` method, passing the index as the first argument and the element itself as the second argument.

```python
numbers.insert(3, 15)
```

You can remove an element at a specific index with the `.pop()` method:

```python
numbers.pop(2)
```

If you don't specify the index, `.pop()` will remove the last element.

There are other built-in list methods that you can check in the documentation for adding and removing elements quite easily.

That's the power of dynamic arrays, or lists in this case.

In general, you should use static arrays when you know the number of elements in advance and you need to access them frequently, and use dynamic arrays when the number of elements is unknown or variable over time.

You should always consider the tradeoff between the simplicity of static arrays and the flexibility of dynamic arrays. They are both helpful for specific use cases and scenarios. Being able to choose the best one for a given problem is part of the problem-solving skills that you will gradually develop with practice.

# --questions--

## --text--

What is the main difference in size between a static array and a dynamic array?

## --answers--

Static arrays can change their size after being created, while dynamic arrays cannot.

### --feedback--

Think about how much space each type of array will require.

---

Static arrays have a fixed size, while dynamic arrays can change size during runtime.

---

There is no practical difference in how their sizes are handled.

### --feedback--

Think about how much space each type of array will require.

---

Dynamic arrays are always larger than static arrays.

### --feedback--

Think about how much space each type of array will require.

## --video-solution--

2

## --text--

If you need to add more elements to a static array that is already full, what is the typical process involved?

## --answers--

The static array automatically expands its memory to fit the new elements.

### --feedback--

Think about what is necessary when a container with a fixed capacity runs out of space.

---

You must create a new, larger array and copy all existing elements to it.

---

The array automatically converts itself into a dynamic array.

### --feedback--

Think about what is necessary when a container with a fixed capacity runs out of space.

---

New elements are simply discarded if the array is full.

### --feedback--

Think about what is necessary when a container with a fixed capacity runs out of space.

## --video-solution--

2

## --text--

In which scenario would a static array typically be a more suitable choice than a dynamic array?

## --answers--

When the exact number of elements is unknown and changes frequently.

### --feedback--

Think about the main advantage of a static array related to its size and resource usage.

---

When you need to store a very large dataset that might grow indefinitely.

### --feedback--

Think about the main advantage of a static array related to its size and resource usage.

---

When you require frequent insertions and deletions at arbitrary positions within the collection.

### --feedback--

Think about the main advantage of a static array related to its size and resource usage.

---

When the data size is fixed and known at the time the program is written.

## --video-solution--

4

