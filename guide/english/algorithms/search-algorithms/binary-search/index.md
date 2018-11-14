---
title: Binary Search
---

## Binary Search

A binary search locates an item in a sorted array by repeatedly dividing the search interval in half.

How do you search a name in a telephone directory?

One way would be to start from the first page and look at each name in the phonebook till we find what we are looking for. But that would be an extremely laborious and inefficient way to search.

Because we know that names in the phonebook are sorted alphabetically, we could probably work along the following steps:

1. Open the middle page of the phonebook
2. If it has the name we are looking for, we are done!
3. Otherwise, throw away the half of the phonebook that does not contain the name
4. Repeat until you find the name or there are no more pages left in the phonebook

Time complexity: As we dispose off one part of the search case during every step of binary search, and perform the search operation on the other half, this results in a worst case time complexity of *O*(*log<sub>2</sub>N*).

Space complexity: Binary search takes constant or *O*(*1*) space meaning that we don't do any input size related  variable defining.

for small sets linear search is better but in larger ones it is way more efficient to use binary search.

In detail, how many times can you divide N by 2 until you have 1? This is essentially saying, do a binary search (half the elements) until you found it. In a formula this would be this:

```
1 = N / 2^x
```

Multiply by 2<sup>x</sup>:

```
2^x = N
```

Now do the log2:

```
log2(2^x)   = log2 N
x * log2(2) = log2 N
x * 1       = log2 N
```

This means you can divide log N times until you have everything divided. Which means you have to divide log N ("do the binary search step") until you found your element.

*O*(*log<sub>2</sub>N*) is such so because at every step half of the elements in the data set are gone which is justified by the base of the logarithmic function.

This is the binary search algorithm. It is elegant and efficient but for it to work correctly, the array must be **sorted**.

---

Find 5 in the given array of numbers using binary search.

![Binary Search 1](https://i.imgur.com/QAuugOL.jpg)

Mark low, high and mid positions in the array.

![Binary Search 2](https://i.imgur.com/1710fEx.jpg)

Compare the item you are looking for with the middle element.

![Binary Search 3](https://i.imgur.com/jr4icze.jpg)

Throw away the left half and look in the right half.

![Binary Search 4](https://i.imgur.com/W57lGsk.jpg)

Again compare with the middle element.

![Binary Search 5](https://i.imgur.com/5Twm8NE.jpg)

Now, move to the left half.

![Binary Search 6](https://i.imgur.com/01xetay.jpg)

The middle element is the item we were looking for!

The binary search algorithm takes a divide-and-conquer approach where the array is continuously divided until the item is found or until there are no more elements left for checking. Hence, this algorithm can be defined recursively to generate an elegant solution.

The two base cases for recursion would be:

* No more elements left in the array
* Item is found

The Power of Binary Search in Data Systems (B+ trees):
Binary Search Trees are very powerful because of their O(log n) search times, second to the hashmap data structure which uses a hashing key to search for data in O(1). It is important to understand how the log n run time comes from the height of a binary search tree. If each node splits into two nodes, (binary), then the depth of the tree is log n (base 2).. In order to improve this speed in Data System, we use B+ trees because they have a larger branching factor, and therefore more height. I hope this short article helps expand your mind about how binary search is used in practical systems.

The code for recursive binary search is shown below:

### Javascript implementation

```javascript
function binarySearch(arr, item, low, high) {
    if (low > high) { // No more elements in the array.
        return null;
    }

    // Find the middle of the array.
    var mid = Math.ceil((low + high) / 2);

    if (arr[mid] === item) { // Found the item!
        return mid;
    }

    if (item < arr[mid]) { // Item is in the half from low to mid-1.
        return binarySearch(arr, item, low, mid-1);
    }

    else { // Item is in the half from mid+1 to high.
        return binarySearch(arr, item, mid+1, high);
    }
}

var numbers = [1,2,3,4,5,6,7];
print(binarySearch(numbers, 5, 0, numbers.length-1));
```

Here is another implementation in Javascript:

```Javascript
function binary_search(a, v) {
    function search(low, high) {
        if (low === high) {
            return a[low] === v;
        } else {
            var mid = math_floor((low + high) / 2);
            return (v === a[mid])
                   ||
                   (v < a[mid])
                   ? search(low, mid - 1)
                   : search(mid + 1, high);
        }
    }
    return search(0, array_length(a) - 1);
}
```

### Ruby implementation

```ruby
def binary_search(target, array)
  sorted_array = array.sort
  low = 0
  high = (sorted_array.length) - 1

  while high >= low
    middle = (low + high) / 2

    if target > sorted_array[middle]
      low = middle + 1
    elsif target < sorted_array[middle]
      high = middle - 1
    else
      return middle
    end
  end
  return nil
end
```

### Example in C

```C
int binarySearch(int a[], int l, int r, int x) {
   if (r >= l){
        int mid = (l + (r - l))/2;
        if (a[mid] == x)
            return mid;
        if (arr[mid] > x)
            return binarySearch(arr, l, mid-1, x);
        return binarySearch(arr, mid+1, r, x);
   }
   return -1;
}
```

### Python implementation

```Python
def binary_search(arr, l, r, target):
    if r >= l:
        mid = (l + (r - l))/2
        if arr[mid] == target:
            return mid
        elif arr[mid] > target:
            return binary_search(arr, l, mid-1, target)
        else:
            return binary_search(arr, mid+1, r, target)
    else:
        return -1
```


### Example in C++

Recursive approach!

```C++ -
// Recursive approach in C++
int binarySearch(int arr[], int start, int end, int x)
{
   if (end >= start)
   {
        int mid = (start + (end - start))/2;
        if (arr[mid] == x)
            return mid;

        if (arr[mid] > x)
            return binarySearch(arr, start, mid-1, x);

        return binarySearch(arr, mid+1, end, x);
   }
   return -1;
}
```

Iterative approach!

```C++
int binarySearch(int arr[], int start, int end, int x)
{
    while (start <= end)
    {
        int mid = (start + (end - start))/2;
        if (arr[mid] == x)
            return mid;
        if (arr[mid] < x)
            start = mid + 1;
        else
            end = mid - 1;
    }
    return -1;
}
```

### Example in Swift
```Swift
func binarySearch(for number: Int, in numbers: [Int]) -> Int? {
    var lowerBound = 0
    var upperBound = numbers.count
    while lowerBound < upperBound {
        let index = lowerBound + (upperBound - lowerBound) / 2
        if numbers[index] == number {
            return index // we found the given number at this index
        } else if numbers[index] < number {
            lowerBound = index + 1
        } else {
            upperBound = index
        }
    }
    return nil // the given number was not found
}
```
### Example in Java
```Java
// Iterative Approach in Java
int binarySearch(int[] arr, int start, int end, int element)
{
    while(start <= end)
    {
        int mid = ( start + end ) / 2;
        if(arr[mid] == element)
            return mid;
        if(arr[mid] < element)
            start = mid+1;
        else
            end = mid-1;
    }
   return -1;
}
```
```Java
// Recursive Approach in Java
int binarySearch(int[] arr, int start,int end , int element)
{
    if(start <= end)
    {
        int mid = ( start + end ) / 2;
        if(arr[mid] ==  element)
                return mid;
        if(arr[mid] < element)
                return binarySearch( arr , mid + 1 , end , element );
        else
                return binarySearch( arr, start, mid - 1 , element);
     }
     return -1;
 }

```

### More Information
* [Binary search (YouTube video)](https://youtu.be/P3YID7liBug)
* [Binary Search - CS50](https://www.youtube.com/watch?v=5xlIPT1FRcA)
* [Binary Search - MyCodeSchool](https://www.youtube.com/watch?v=j5uXyPJ0Pew&list=PL2_aWCzGMAwL3ldWlrii6YeLszojgH77j)
