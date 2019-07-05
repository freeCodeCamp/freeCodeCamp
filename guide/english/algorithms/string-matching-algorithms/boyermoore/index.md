---
title: Boyer-Moore
---

## Boyer-Moore

This algorithm has been shown to be more effective than the Knuth-Morris-Pratt algorithm and others for pattern matching in natural languages like English. It relies on the use of [two key heuristics][1], namely:
* The looking-glass heuristic: where the pattern P is compared to a substring of the text T starting from P’s last letter
* Character-jump heuristic: if there is a mismatch at T[i] = c then
    - If P contains c, shift P to line up the last instance of c in P with T[i]
    - Else move P to align P[0] with T[i+1]

Before applying these heuristics however, the algorithm analyses pattern P and alphabet Σ to create a last occurrence function. This function ties the letters of the alphabet to the letters in P according to where they occur in P.

So if the last occurence of the letter c in P is at index P[i] then at L(c) the index i of that letter will be stored. If the letter c does not occur in P, -1 will be stored there.

#### Example:

__Σ =__ {e, f, g, h}
__P =__ egef

|  	| 	|  	| 	| 	|
|---	|---	|---	|---	|---	|
|  __c__	| e 	| f 	| g 	| h 	|
| __L(c)__  |  2 | 3  | 1  | -1  |

The last occurrence function can be stored as an array indexed by the numeric codes of the characters. This function can be calculated in O(m+s) time where m is the length of the pattern and s the size of the alphabet.

### Code of Boyer-Moore Algorithm in C++
```cpp
#include<iostream>
#define MAXCHAR 256 //there are 256 ASCII characters
using namespace std;

int min(int num1, int num2) {
  if (num1 < num2) {
     return num1;
  }
  return num2;
}

void makeLOFunction(string pattern, int LOFunction[MAXCHAR]) {
    int n = pattern.size();
    for (int c = 0; c < MAXCHAR; c++)
        LOFunction[c] = -1;
    for (int c = 0; c < n; c++)
        LOFunction[(int)pattern[c]] = c;
}

int boyerMoore(string pattern, string text) {
    int m = pattern.size();
    int n = text.size();
    int LOFunction[MAXCHAR];
    makeLOFunction(pattern, LOFunction); //fill array of last occurrence function
    int i = m-1;
    int j = m-1;
    do {
       if (text[i] == pattern[j]) {
           if (j == 0) {
               cout << "Pattern starts at index " << i << "\n";
               return 1; //match found at i
           } else {
               i--;
               j--; //move backwards through pattern
           }
       } else {
           int leap = LOFunction[(int)text[i]]; //character jump
           i = i + m - min(j, leap+1);
           j = m - 1;
       }
    }
    while (i <= n-1); //while not reached end of text
    cout << "Match not found\n";
    return -1; //no match found
}

int main() {
    string pattern = "abacab";
    string text = "abacaabadcabacabaabb";
    boyerMoore(pattern, text);
}

```
#### References
[1]: https://www.cs.purdue.edu/homes/aliaga/cs251-16/lectures/22-PatternMatching.pdf
1. Aliaga, D (2016) *Strings and Pattern Matching*, lecture notes, Data Structures and Algorithms CS251, Purdue University, delivered 9 April 2016.
2. Christine, S (2018) Bad Character Heuristic [Source code]. https://www.tutorialspoint.com/Bad-Character-Heuristic
3. Buerger, H (2012) Boyer-Moore Algorithm [Source code].
https://gist.github.com/obstschale/3060059
