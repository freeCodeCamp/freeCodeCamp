---
title: Monte Carlo
---

## Monte Carlo

The Monte Carlo is a class of simulation techniques that allow you to explore the solution space of a problem that has inputs that can take on multiple values. By running simulations with randomized inputs and model parameters, you can observe outcomes that result from inputs that may have other not been tested. The method is useful for solving problems that may be too difficult to solve analytically. It is not an exact method, but a heuristical one, typically using randomness and statistics to get a result. The algorithm terminates with an answer that is correct with probability.

It is a computation process that uses random numbers to produce an outcome(s). Instead of having fixed inputs, probability distributions are assigned to some or all of the inputs. This will generate a probability distribution for the output after the simulation is run.

For example, a Monte Carlo algorithm can be used to estimate the value of π. The amount of area within a quarter-circle of radius 1 depends on the value of π. The probability that a randomly-chosen point will lie in that quarter-circle depends on the area of the circle. If points are placed randomly in a square with sides of length 1, the percentage of points that fall within a quarter-circle of radius 1 will depend on the value of π. A Monte Carlo algorithm would randomly place points in the square and use the percentage of points falling inside of the circle to estimate the value of π.This is an effective way for making approximations.

In modern communication systems, the quality of information exchange is determined by the presence of noise in the channel. The major source of noise - Additive White Gaussian Noise (AWGN) being random in nature can be characterized using the Monte Carlo algorithm in simulating a Communications System.

## Relation to Sampling

One non-intuive use case for a Monte Carlo simulation is to determine probabilities where the space of possibilities is intractably large. In practice, state spaces can explode in size, even for seemingly simple situations. If you consider a game of solitaire using a standard 52 card deck, one reasonable question you could ask is: how many orderings of the deck result in winnable games of solitaire? In this question, there are 52 factorial different orderings of a deck ... or 8e+67 combinations! Rather than work through each deck ordering to determine the exact probability of winnable games, you could instead use a Monte Carlo simulation that plays through randomly ordered decks. After a sufficiently large number of games, you'll converge onto a probability of winnable orderings. By using Monte Carlo simulations to sample from large event spaces, you can build robust intuition around intractably large state spaces.  

### More Information:

- [Wikipedia](https://en.wikipedia.org/wiki/Monte_Carlo_method)
- [Wolfram MathWorld](http://mathworld.wolfram.com/MonteCarloMethod.html)
- [Minitab article - Monte Carlo is not as difficult as you think](http://blog.minitab.com/blog/understanding-statistics/monte-carlo-is-not-as-difficult-as-you-think)
- [Monte Carlo Algorithm (4:41)](https://www.youtube.com/watch?v=Q2-FH36LuT0)
