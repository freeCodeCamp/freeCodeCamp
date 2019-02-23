---
title: Z Algorithm 
---

**Z algorithm** is used to find all occurrence of a **pattern P** in a **string T** similar to KMP algorithm but this is easier to understand than others.
This is a linear time string matching algorithm which runs in **O(m+n)~O(n)** complexity, where m and n are lengths of the string T and 
the pattern stirng P respectively.
 
 **Algorithm** :
 
 Before learning the main algorithm, we have to know about Z array and how we can build it in a efficient way.
 
 Z array: For every string S of length l, there is a Z array with length l, with Z[i] { i=0 to l-1 } Z[i] = the length of the longest 
 substring starting from S[i] which is also a prefix of S i.e substring starting from S[0].
 
 For example, for the text  S = "**abbcabbxaagh**" , Z array will be Z = **[X,0,0,0,3,0,0,0,1,1,0,0]**.
 
 **Note** : Z[0] is not necessary to be calculated,as the whole string is always a substring of it.

 **How this Z array can help us in string matching?**
 
 We can achieve this by prefixing the pattern P to be matched to the text string T in which we have to search. 
 We create the P$T string, then build the Z array of this P$T string. [ $ -> the character which is not present in the text and patttern]
 In the Z array, if Z[i] value at any index i is equal to pattern length, then pattern is present at that index.
 
 **Note** : The $ separiting between pattern and the text is necessary to do not make the **useless comparisions**.As we just need the maximum 
 matching substring of the pattern only, once the pattern is deducted, this $ character will stop the comparisions.
 
Example:
 
Pattern P = "aaba",  String Text T = "abaabaa"

The concatenated string is = "aaba$abaabaab"

Z array for above concatenated string is {x, 1, 0, 0, 0, 1, 0, **4**, 1, 0, 3, 1, 0}.
Length of pattern is 4, the value 4 is in the Z array, we can say that patter P is present in text T at index **i-l-1** where i is the index 
at which Z[i]=l->length of the patttern. In the example, i=7,l=4, therefore pattern is oresent at index 7-4-1=2.

**How can we claculate the Z array in a efficient way?**

General, brute force idea can be implemented in O(n^2) time complexity.

Efficient way is as follows:

We have to maintain an interval [L, R] which is the interval with max R such that [L,R] is prefix substring (substring which is also prefix). 

Steps for maintaining this interval are as follows – 

1) If i > R then there is no prefix substring that starts before i and ends after i, so we reset L and R and compute new [L,R] by comparing 
   S[0] to str[i] and get Z[i] (= R-L+1).

2) If i <= R then let K = i-L,  now Z[i] >= min(Z[K], R-i+1)  because S[i..] matches with S[K..] for atleast R-i+1 characters (they are in
   [L,R] interval which we know is a prefix substring).     
   Now two sub cases arise – 
      a) If Z[K] < R-i+1  then there is no prefix substring starting at  S[i] (otherwise Z[K] would be larger)  so  Z[i] = Z[K]  and 
         interval [L,R] remains same.
      b) If Z[K] >= R-i+1 then it is possible to extend the [L,R] interval
         thus we will set L as i and start matching from S[R]  onwards  and
         get new R then we will update interval [L,R] and calculate Z[i] (=R-L+1).
         
 **Most of you might not understand this at first time**.
 
Following link is of a video which will make you clear of everything. It's worth to watch this video and read this once for better 
understanding.

 [Tushar-Roy Z algorithm - Easily Understandable](https://www.youtube.com/watch?v=CpZh4eF8QBw)
    
    
 Following is the **C++ implementation** of the Z algorithm finding the number of occurrences of patter P in string S
 
```cpp
#include<bits/stdc++.h>
using namespace std;

vector<int> calculateZ(string s){

    int l=0,r=0,k=0,n=s.size();
    vector<int> z(n);
    for(int i=1;i<n;i++){
        
        if(i>r){
            l=r=i;
            while(r<n && s[r]==s[r-l])
              r++;
             z[i]=r-l;
            r--;  
        }
        else{
            
            k=i-l;
            
            if(i+z[k]<=r)
              z[i]=z[k];
            
            else{
                
              l=i;
              while(r<n && s[r]==s[r-l])
                 r++;
                 
              z[k]=r-l;
               r--;
                
            } 
            
        }
    }
    
    return z;
}



int main(){
    
    string p,s;
    
    cin >> p >> s;
    
    string t = p + "$" + s;
    int count=0;;
    vector<int> z = calculateZ(t);
    
    for(int i=0;i<z.size();i++){
        if(z[i]==p.size())
        count++;
    }
    cout << count;
    
    return 0;
}
    
 ```  
   
 **References** :
 
 [hackerearth](https://www.hackerearth.com/practice/algorithms/string-algorithm/z-algorithm/tutorial/)
 
 [Geeksforgeeks](https://www.geeksforgeeks.org/z-algorithm-linear-time-pattern-searching-algorithm)
 
 [Tushar-Roy Z algorithm - Easily Understandable](https://www.youtube.com/watch?v=CpZh4eF8QBw)
 
 
 
