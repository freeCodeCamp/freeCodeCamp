---
title: Binomial Distribution
---
## Binomial Distribution

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
The binomial distribution describes the probability of having exactly `k` successes in `n` independent Bernoulli trials with probability of a success `p`.

There are four conditions which must be satisfied before we can use binomail distribution.
1. The trials are independent.
2. The number of trials, `n`, is fixed.
3. Each trial outcome can be classified as a success or a failure.
4. The probability of a success, `p`, is the same for each trial.

### Example
Consider an experiment of tossing a fair coin 10 times. Let the outcome of a "Heads" be success and outcome of "Tails" a failure.

1. Tossing a coin is one trial of the experiment and each time we toss a coin, the outcome obtained is independent of outcome of any other trial.
2. We are tossing the coin 10 times (a fixed value of `n`).
3. We have decided to consider "Heads" as a success and "Tails" as a failure.
4. The probability of getting a heads with a fair coin is 0.5 and this is same in each trial.

All the four conditions are satisfied, hence, we can model this experiment using the Binomial distribution.

Let us find the probability of getting a Heads exacty once i.e., 1 success.

There are 10 tosses and any one could have resulted in an outcome of Heads, and each of these 10 scenarios has the same probability. Thus, the final probability can be written as:
`[# Number of Scenarios] x P(single scenario)`

The first component of the above equation is the number of ways to arrange `k = 1` successes among `n = 10` trials. The second component is the probability of any of the four (equally probable) scenarios.

Consider `P(Single Scenario)` under the general case of `k` successes and `n - k` failures in `n` trials. To find the value, use the Multiplication Rule for independent events:

<img src = "https://cdn-media-1.freecodecamp.org/imgr/YXzUPiB.png" height = 25px />

The number of ways to get `k` successes from `n` trials can be written as __n choose k__:

<img src = "https://cdn-media-1.freecodecamp.org/imgr/AQ3P4vi.png" height = 40px />

So, the general formula to get the probability of observing exactly `k` successes in `n` independent trials is given by:

<img src = "https://cdn-media-1.freecodecamp.org/imgr/ZErXKtQ.png" height = 40px />

Hence, the probability of getting exactly one Heads in trials is:

<img src = "https://cdn-media-1.freecodecamp.org/imgr/fN5wOH2.png" height = 40px />


### Mean and Variance
The mean of a binomial distribution with `n` trials where `p` is the probability of a success is given by:

<img src = "https://cdn-media-1.freecodecamp.org/imgr/4ji7JXx.png" height = 15px />

and variance:

<img src = "https://cdn-media-1.freecodecamp.org/imgr/1tPHKHj.png" height = 20px />

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
+ [OpenIntro Statistics 3rd Edition (Chapter 3 - page 145)](https://www.openintro.org/stat/textbook.php?stat_book=os)
+ [Deriving Mean and Variance of a Binomial Distribution](https://www.youtube.com/watch?v=8fqkQRjcR1M)

