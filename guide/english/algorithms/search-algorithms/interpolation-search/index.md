---
title: Interpolation Search
---

## Interpolation Search

   Interpolation search is an algorithm for searching for a key in an array that has been ordered by numerical values assigned to the keys (key values). Interpolation search resembles the method by which people search a telephone directory for a name (the key value by which the book's entries are ordered): in each step the algorithm calculates where in the remaining search space the sought item might be, based on the key values at the bounds of the search space and the value of the sought key, usually via a linear interpolation. 

The key value actually found at this estimated position is then compared to the key value being sought. If it is not equal, then depending on the comparison, the remaining search space is reduced to the part before or after the estimated position. This method will only work if calculations on the size of differences between key values are sensible.

In Simple words,iInterpolation search may go to different locations according to the value of the key being searched. 
For example, 
if the value of the key is closer to the last element, interpolation search is likely to start search toward the end side.

```
// The idea of formula is to return higher value of pos
// when element to be searched is closer to arr[hi]. And
// smaller value when closer to arr[lo]
pos = lo + [ (x-arr[lo])*(hi-lo) / (arr[hi]-arr[Lo]) ]
 
arr[] ==> Array where elements need to be searched
x     ==> Element to be searched
lo    ==> Starting index in arr[]
hi    ==> Ending index in arr[]
```



The code for Interpolation search is shown below:
### c implementation

```C
int interpolationSearch(int arr[], int n, int x) 
{     
    int lo = 0, hi = (n - 1);    
    while (lo <= hi && x >= arr[lo] && x <= arr[hi]) 
    { 
        int pos = lo + (((double)(hi-lo) / 
              (arr[hi]-arr[lo]))*(x - arr[lo])); 
      
        if (arr[pos] == x) 
            return pos; 
		
        if (arr[pos] < x) 
            lo = pos + 1;         
        else
            hi = pos - 1; 
    } 
    return -1; 
} 
```

### Java implementation

```Java
 static int interpolationSearch(int x) 
    {   
        int lo = 0, hi = (arr.length - 1); 
       
        while (lo <= hi && x >= arr[lo] && x <= arr[hi]) 
        { 
            int pos = lo + (((hi-lo) / 
                  (arr[hi]-arr[lo]))*(x - arr[lo]));        
            if (arr[pos] == x) 
                return pos; 
       
            if (arr[pos] < x) 
                lo = pos + 1;                 
            else
                hi = pos - 1; 
        } 
        return -1; 
    } 

```


### C# implementation

```C#
 static int interpolationSearch(int x) 
    { 
        int lo = 0, hi = (arr.Length - 1); 
      
        while (lo <= hi &&  
                x >= arr[lo] &&  
                x <= arr[hi]) 
        { 
            int pos = lo + (((hi - lo) /  
                             (arr[hi] - arr[lo])) *  
                                   (x - arr[lo])); 
            if (arr[pos] == x) 
                return pos; 

            if (arr[pos] < x) 
                lo = pos + 1; 

            else
                hi = pos - 1; 
        } 
        return -1; 
    } 

```


### Python implementation

``` Python

def interpolationSearch(arr, n, x): 
    lo = 0
    hi = (n - 1) 
   
    while lo <= hi and x >= arr[lo] and x <= arr[hi]: 
        pos  = lo + int(((float(hi - lo) / 
            ( arr[hi] - arr[lo])) * ( x - arr[lo]))) 
         
        if arr[pos] == x: 
            return pos 
   
        if arr[pos] < x: 
            lo = pos + 1; 
   
        else: 
            hi = pos - 1; 
      
    return -1
```


### More Information
* [Interpolation search (YouTube video)](https://www.youtube.com/watch?v=3p7s-OXcLY8)
* [Interpolation search (Youtube video)](https://www.youtube.com/watch?v=l1ed_bTv7Hw)
