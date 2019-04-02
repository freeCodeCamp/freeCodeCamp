---
title: Definition of Real Number
---
## Definition of Real Number
> Real numbers can be thought of as points on an infinitely long line.

Real numbers include all rational numbers, such as <em>1/2</em>, <em>0</em>, <em>103.644</em>, and <em>271/272</em>, as well as all of the irrational numbers, such as <em>pi</em>, the square root of 2, and <em>e</em>. Note that the "Complex Numbers", numbers who include non-zero imaginary magnitude, are not included. 

So, any number with decimal representation, even if that representation is infinite, is real, <em>e.g. 1.234567891...</em> We note that the square root of a negative number does not have decimal representation, so the square root of any negative number is not real. It just so happens that the square root of <em>-1</em> just so happens to be the definition of "<em>i</em>", the unit length in the system of imaginary numbers. Below is something of an outline for how one could derive and define the real numbers, but it is certainly not a formal proof.

Consider the notion of <em>1</em>, a single entity, a unit. Let the set of natural numbers, <strong><em>N</em></strong> be described by the rules:

* <em>1</em> is a natural number
* Every natural number has exactly one successor (a number greater than itself).
* <em>1</em> has no successor.

These define the notion of counting, and with a few more rules beyond the scope of this article, rules such as addition and closure can be defined within this new set of numbers, <strong><em>N</em></strong>. This set, along with the notion of <em>0</em>, creates the set of whole numbers. When the notion of a "negative number" is added to this set of "whole numbers", the integers are formed. A negative number is a number b such that <em>a + b = 0</em>, where <em>a</em> is in <strong><em>N</em></strong> (so <em>a</em> is neither 0 nor negative itself). We call this union of <em>0</em>, <strong><em>N</em></strong>, and the negative numbers <strong><em>Z</em></strong>, or <em>the integers</em>.

We define multiplication under the operation "<em>*</em>" to be such that if <em>a</em> and <em>b</em> are in <strong><em>Z</em></strong>, then <em>a * b = c</em> if <em>c = a + ... + a</em>, <em>b</em> times. So multiplication in the integers is really just a sum. Note, by this definition, addition can be done a negative number of times. We now use multiplication to define division, which will allow us to define the rational numbers.

We define division under the operation "<em>/</em>", to be such that if <em>a</em> and <em>b</em> are in <strong><em>Z</em></strong>, then <em>c = a / b</em> if and only if there exists <em>a = b * c + r</em>, where <em>r = 0</em>, and <em>c</em> is in <strong><em>Z</em></strong>. But what if <em>a = b * c + r</em>, where <em>0 &lt; r &lt; b</em>? Then <em>b</em> does not evenly divide <em>a</em>, and this equation is unsolvable within our number system <strong><em>Z</em></strong>. But what if this equation were solvable, and <em>c</em> could be expressed as a <em>ratio</em>, such that <em>c = a / b</em> despite <em>b</em> not evenly dividing <em>a</em>? This hints at a set of numbers known as the <em>rational numbers</em>, <strong><em>Q</em></strong>, whose members can be expressed as <em>a / b</em>, where <em>a</em> and <em>b</em> are in <strong><em>Z</em></strong>. We note that all decimal representations of numbers in <strong><em>Q</em></strong> are either finite or repeating. 

Some numbers are not able to be described as a ratio of integers, however, such as the square root of 2, <em>pi</em>, and <em>e</em>. All non-repeating non-finite length decimal numbers are irrational. This property holds for all rational bases of numbers, in fact. By "filling in the gaps" between the rational numbers with these irrational numbers, the real numbers <strong><em>R</em></strong> can be constructed.

Please note that computers do not actually work on real numbers, rather, computers work on binary integers that can be used to represent either "floating point" numbers, or integers.

#### More Information:

* [Wikipedia on Real numbers](https://en.wikipedia.org/wiki/Real_number)
* [Floating point numbers, IEE-754](https://en.wikipedia.org/wiki/IEEE_754)
