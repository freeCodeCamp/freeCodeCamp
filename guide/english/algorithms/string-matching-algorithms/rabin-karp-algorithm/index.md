---
title: Rabin Karp Algorithm
---

## Rabin-Karp Algorithm

* A string matching/searching algorithm developed by Michael O. Rabin and Richard M. Karp.
* Uses ***hashing*** technique and ***brute force*** for comparison.

#### Important terms
* ***pattern*** is the string to be searched. 
  Consider length of pattern as ***M*** characters.
* ***text*** is the whole text from which the pattern is to be searched. 
  Consider length of text as ***N*** characters.


#### What is brute force comparison?
In brute force comparison each character of pattern is compared with each character of text untill unmatching characters are found.

#### Working of Rabin-Karp Algorithm

1.	Calculate hash value of *pattern*
2.	Calculate hash value of first *M* characters of *text*
3.	Compare both hash values
4.	If they are unequal, calculate hash value for next *M* characters of *text* and compare again.
5.	If they are equal, perform a brute force comparison.

```
hash_p = hash value of pattern
hash_t = hash value of first M letters in body of text
do
	if (hash_p == hash_t) 
		brute force comparison of pattern and selected section of text
	hash_t= hash value of next section of text, one character over
while (end of text or brute force comparison == true)

```
#### Advantage over Naive String Matching Algorithm

  This technique results in only one comparison per text sub-sequence and brute force is only required when the hash values match.

#### Applications
* ***Plagiarism Detection***

#### More Information:
<a href='https://en.wikipedia.org/wiki/Rabin%E2%80%93Karp_algorithm' target='_blank' rel='nofollow'>Rabin-Karp on Wikipedia</a>


