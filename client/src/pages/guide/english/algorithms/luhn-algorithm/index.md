---
title: Luhn Algorithm
---

## Luhn Algorithm

The Luhn algorithm or Luhn formula, also known as the "modulus 10" or "mod 10" algorithm, is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers, IMEI numbers, National Provider Identifier numbers in the United States, Canadian Social Insurance Numbers, Israel ID Numbers and Greek Social Security Numbers (ΑΜΚΑ). It was created by IBM scientist Hans Peter Luhn and described in U.S. Patent No. 2,950,048, filed on January 6, 1954, and granted on August 23, 1960.

### How it works

These are the simple steps of the algorithm:
  
  1. Start from the rightmost digit and double the value of every second digit.
  2. If doubling results in two digits(greater than 9), then sum the digits of the product, to get a single digit number.
  3. Take the sum of all the digits which comes from second step and remaining digits from step 1(non-doubled digits).
  4. If the total modulo 10 is equal to 0 (if the total ends in zero) then the number is valid according to the Luhn formula; else it is not valid.
  
#### More Information:
* [Wikipedia](https://en.wikipedia.org/wiki/Luhn_algorithm)
