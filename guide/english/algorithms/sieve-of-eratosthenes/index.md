---
title: sieve of Eratosthenes
---

## sieve of Eratosthenes
Simple sieve algorithm for finding all prime numbers up to a designated limit.
The earliest known reference to the sieve attributes it to Eratosthenes of
Cyrene, a Greek mathematician.

### How it works

The algorithm operates on a set range of numbers starting at 1 through 'n'. It uses the following steps:

  1. Create a list of all numbers in your range.
  2. Remove 1 from the list, as it is not a prime number.
  3. Circle the next number on the list.
  4. Remove all multiples of the most recently circled number from the list.
  5. Repeat steps 3 & 4 until you no longer have any numbers left in the list.

  The first couple iterations look like this:
  1.  * Circle 2
      * Remove all multiples of 2 --- 4, 6, 8, ... 100
  2.  * Circle 3
      * Remove all multiples of 3 remaining on the list --- 9, 15, 21, ... 99

### Example implementation in C

C code: In this example our range is from 1 to n, where n == 100.

```c

#include <stdio.h>
#include <stdlib.h>

int main() {

    int i, j;           // array indices
    int *prime_array;   // array to mark if index is a prime number
    int max = 100;      // max number to be tested

    prime_array = malloc(sizeof(int) * max);

    // explicitly stating that 0 & 1 are not prime numbers
    // implicitly false otherwise
    prime_array[0] = 0;
    prime_array[1] = 0;

    // setting all other numbers from 2 through 100 to true until determined
    for (i = 2; i < max; i++) {
        prime_array[i] = 1;
    }

    // elimination pass for all multiples of prime numbers
    for (i = 2; i < max; i++) {
        if (prime_array[i] == 1) {
            for (j = i; j * i < max; j++) {
                prime_array[j * i] = 0;
            }
        }
    }

    // print all prime numbers from 1 to 100
    printf("\nPrinting all prime numbers from 1 to 100:\n");

    for (i = 2; i < max; i++) {
        if (prime_array[i] == 1){
            printf("%d  ", i);
        }
    }

    printf("\n");

    return 0;
}


```

### Resources
 * [Wikipedia](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes)
 * [Algolist.net](http://www.algolist.net/Algorithms/Number_theoretic/Sieve_of_Eratosthenes)
