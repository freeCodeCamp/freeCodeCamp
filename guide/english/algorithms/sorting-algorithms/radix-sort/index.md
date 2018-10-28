---
title: Radix Sort
---

## Radix Sort

Prerequisite: Counting Sort

QuickSort, MergeSort, HeapSort are comparison based sorting algorithms.
CountSort is not comparison based algorithm. It has the complexity of O(n+k), where k is the maximum element of the input array.
So, if k is O(n) ,CountSort becomes linear sorting, which is better than comparison based sorting algorithms that have O(nlogn) time complexity. 
The idea is to extend the CountSort algorithm to get a better time complexity when k goes O(n2). 
Here comes the idea of Radix Sort.

Algorithm:

For each digit i where i varies from the least significant digit to the most significant digit of a number
Sort input array using countsort algorithm according to ith digit.
We used count sort because it is a stable sort.

Example: Assume the input array is:

10, 21, 17, 34, 44, 11, 654, 123

Based on the algorithm, we will sort the input array according to the one's digit (least significant digit).

0: 10 </br>
1: 21 11</br>
2:</br>
3: 123</br>
4: 34 44 654</br>
5:</br>
6:</br>
7: 17</br>
8:</br>
9:</br>

So, the array becomes 10, 21, 11, 123, 24, 44, 654, 17
Now, we'll sort according to the ten's digit:

0:</br>
1: 10 11 17</br>
2: 21 123</br>
3: 34</br>
4: 44</br>
5: 654</br>
6:</br>
7:</br>
8:</br>
9:

Now, the array becomes : 10, 11, 17, 21, 123, 34, 44, 654
Finally , we sort according to the hundred's digit (most significant digit):

0: 010 011 017 021 034 044</br>
1: 123</br>
2:</br>
3:</br>
4:</br>
5:</br>
6: 654</br>
7:</br>
8:</br>
9:

The array becomes : 10, 11, 17, 21, 34, 44, 123, 654 which is sorted. This is how our algorithm works. 

An implementation in C:
```
void countsort(int arr[],int n,int place){

        int i,freq[range]={0};         //range for integers is 10 as digits range from 0-9
        int output[n];

        for(i=0;i<n;i++)
                freq[(arr[i]/place)%range]++;

        for(i=1;i<range;i++)
                freq[i]+=freq[i-1];
        
        for(i=n-1;i>=0;i--){
                output[freq[(arr[i]/place)%range]-1]=arr[i];
                freq[(arr[i]/place)%range]--;
        }
        
        for(i=0;i<n;i++)
                arr[i]=output[i];
}

void radixsort(ll arr[],int n,int maxx){            //maxx is the maximum element in the array

        int mul=1;
        while(maxx){
                countsort(arr,n,mul);
                mul*=10;
                maxx/=10;
        }
}
```


### More Information:

- [Wikipedia](https://en.wikipedia.org/wiki/Radix_sort)

- [GeeksForGeeks](http://www.geeksforgeeks.org/radix-sort/)
