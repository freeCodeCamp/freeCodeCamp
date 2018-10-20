---
title: Knuth–Morris–Pratt Algorithm for Pattern Searching
---

## Knuth–Morris–Pratt Algorithm for Pattern Searching
Pattern searching is an important problem in computer science. When we do search for a string in notepad/word file or browser or database, pattern searching algorithms are used to show the search results.

**Problem :**
Given a text _txt[0..n-1]_ and a pattern _pat[0..m-1]_, write a function _search(char pat[], char txt[])_ that prints all occurrences of _pat[]_ in _txt[]_. You may assume that _n > m_.

**Example :**
```
Input:  txt[] =  "AABAACAADAABAABA"
        pat[] =  "AABA"
Output: Pattern found at index 0
        Pattern found at index 9
        Pattern found at index 12
```

**Idea :**
The basic idea behind KMP’s algorithm is: whenever we detect a mismatch (after some matches), we already know some of the characters in the text of the next window. We take advantage of this information to avoid matching the characters that we know will anyway match. Let us consider below example to understand this.

**Preprocessing Pattern String :**
-   KMP algorithm preprocesses pat[] and constructs an auxiliary  **lps[]**  of size m (same as size of pattern) which is used to skip characters while matching.
-   Name lps indicates **longest proper prefix** which is also suffix. A proper prefix is prefix with whole string  **not**  allowed. For example, prefixes of “ABC” are “”, “A”, “AB” and “ABC”. Proper prefixes are “”, “A” and “AB”. Suffixes of the string are “”, “C”, “BC” and “ABC”.
-   We search for lps in sub-patterns. More clearly we focus on sub-strings of patterns that are either prefix and suffix.
-   For each sub-pattern pat[0..i] where i = 0 to m-1, lps[i] stores length of the maximum matching proper prefix which is also a suffix of the sub-pattern pat[0..i].

       `lps[i] = the longest proper prefix of pat[0..i]  which is also a suffix of pat[0..i]. `


**Note :**  lps[i] could also be defined as longest prefix which is also proper suffix. We need to use properly at one place to make sure that the whole substring is not considered.

**Examples of lps[] construction :**
```
For the pattern “ABCDE”,
lps[] is [0, 0, 0, 0, 0]

For the pattern “AABAACAABAA”,
lps[] is [0, 1, 0, 1, 2, 0, 1, 2, 3, 4, 5]
```

### Searching Algorithm :
In this algorithm, we use a value from lps[] to decide the next characters to be matched. The idea is to not match a character that we know will anyway match.

How to use lps[] to decide next positions (or to know a number of characters to be skipped)?

-   We start comparison of pat[j] with j = 0 with characters of current window of text.
-   We keep matching characters txt[i] and pat[j] and keep incrementing i and j while pat[j] and txt[i] keep  **matching**.
-   When we see a  **mismatch**
    -   We know that characters pat[0..j-1] match with txt[i-j+1…i-1] (Note that j starts with 0 and increment it only when there is a match).
    -   We also know (from above definition) that lps[j-1] is count of characters of pat[0…j-1] that are both proper prefix and suffix.
    -   From above two points, we can conclude that we do not need to match these lps[j-1] characters with txt[i-j…i-1] because we know that these characters will anyway match. Let us consider above example to understand this.
<br>

**More Infromation :**
- [kmp algorithm for pattern searching](https://www.geeksforgeeks.org/kmp-algorithm-for-pattern-searching/)
- [Knuth–Morris–Pratt algorithm](https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm)