---
title: Pigeonhole Principle
---
## Pigeonhole Principle

The Pigeonhole Principle is a mathematical formalization of a logical and intuitive observation. This observation is best understood with an example.

### Example

There are five boxes and six balls. Each of the six balls is placed into one of the five boxes. There _must_ be at least one box with at least two balls in it. If five balls are placed into five boxes such that no box has two balls in it, then no matter what box the sixth ball is placed in, that box will have more than one ball.

### Generalization
This observation can be generalized for N boxes and M balls. If there are N boxes and M balls, and M > N, then at least one box must contain multiple balls.

Note that the Pigeonhole Principle does not tell us anything about which box has more than one ball, or how many balls any of the boxes have. The Pigeonhole Principle only states the existence of a box with multiple balls.

### Use in Computer Science
The Pigeonhole Principle often shows up in computer science. For example, the SHA256 hashing algorithm takes input of any size (like a string) and outputs a 256 bit value. Because the output of the SHA256 hashing algorithm is always 256 bits, there are 2^256 possible hashes. While this is a very large number, there are an infinite number of possible inputs. Using the generalization above, we can say that our N = 2^256 and our M = infinity. Because infinity is larger than 2^256 (M > N), then by the Pigeonhole Principle at least one of these hashes must have two different inputs that hash to the same value. Computer scientists call two different inputs that share a common hash a collision.

### Use in general counting problems
We can use the Pigeonhole Principle to prove some more esoteric things as well. A common example is the hair counting problem. The human head has anywhere from 0 to about 150,000 hairs. To stay safe, let's say that a human can have up to one million hairs on their head. Paris, France has a population of about 2.2 million people. If we sort everyone in Paris into boxes based on how many hairs they have on their head, then we can use our generalization above to say N = 1000000 (the number of boxes, one box for every possible hair count) and M = 2200000 (the population of Paris, France). Since M > N, by the Pigeonhole Principle we can state with certainty that at least two people in Paris must have the same number of hairs on their head.

#### More Information:
* [Wikipedia - Pigeonhole Principle](https://en.wikipedia.org/wiki/Pigeonhole_principle)
* [More fun examples of the Pigeonhole Principle](https://mindyourdecisions.com/blog/2008/11/25/16-fun-applications-of-the-pigeonhole-principle/)
