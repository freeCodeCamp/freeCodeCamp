---
title: Erase–remove idiom
---

## Desctiprion
How to remove elements from container is a common C++ interview question, so you can earn some brownie points, if you read this page carefully. The erase–remove idiom is a C++ technique to eliminate elements that fulfill a certain criterion from a container. Howerever, it is possible to eliminate elements with traditional hand-written loop, but the erase–remove idiom has several advantages.

### Comparison

```cpp
// Using a hand-written loop
std::vector<int> v = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
for (auto iter = v.cbegin(); iter < v.cend(); /*iter++*/)
{
    if (is_odd(*iter))
    {
        iter = v.erase(iter);
    }
    else
    {
        ++iter;
    }
}

// Using the erase–remove idiom
std::vector<int> v = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
v.erase(std::remove_if(v.begin(), v.end(), is_odd), v.end());
```

As you can see, the code with hand-written loop requires a bit more typing, but it also has a performance issue. Each `erase` call has to move forward all the elements after the deleted one, to avoid "gaps" in the collection. Calling `erase` multiple times on the same container generates lots of overhead of moving the elements.

On the other hand, the code with the erase–remove idiom is not only more expressive, but it also is more efficient. First, you use `remove_if/remove` to move all elements which don't fit the remove criteria to the front of the range, keeping the relative order of the elements. So after calling `remove_if/remove`, a single call of `erase` deletes all remaining elements at the end of the range.

### Example

```cpp
#include <vector> // the general-purpose vector container
#include <iostream> // cout
#include <algorithm> // remove and remove_if

bool is_odd(int i)
{
    return (i % 2) != 0;
}

void print(const std::vector<int> &vec)
{
    for (const auto& i : vec)
        std::cout << i << ' ';
    std::cout << std::endl;
}

int main()
{
    // initializes a vector that holds the numbers from 1-10.
    std::vector<int> v = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
    print(v);

    // removes all elements with the value 5
    v.erase(std::remove(v.begin(), v.end(), 5), v.end());
    print(v);

    // removes all odd numbers
    v.erase(std::remove_if(v.begin(), v.end(), is_odd), v.end());
    print(v);

    // removes multiples of 4 using lambda
    v.erase(std::remove_if(v.begin(), v.end(), [](int n) { return (n % 4) == 0; }), v.end());
    print(v);

    return 0;
}

/*
Output:
1 2 3 4 5 6 7 8 9 10
1 2 3 4 6 7 8 9 10
2 4 6 8 10
2 6 10
*/
```

### Sources
"Erase–remove idiom" Wikipedia: The Free Encyclopedia. Wikimedia Foundation, Inc. [en.wikipedia.org/wiki/Erase-remove_idiom](https://en.wikipedia.org/wiki/Erase%E2%80%93remove_idiom)

Meyers, Scott (2001). Effective STL: 50 Specific Ways to Improve Your Use of the Standard Template Library. Addison-Wesley.
