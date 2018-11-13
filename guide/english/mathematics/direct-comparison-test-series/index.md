---
title: Direct Comparison Test Series
---
## Direct Comparison Test Series

The (direct) comparison test is a tool that can sometimes be used to determine if a [series](https://en.wikipedia.org/wiki/Series_(mathematics)) converges or diverges. Loosely speaking, if a series is 'smaller' than one that converges, it converges, or if it is 'bigger' than one that diverges, it diverges.

Let &Sigma; a<sub>n</sub> be a series with each a<sub>n</sub> a non-negative real number, and &Sigma; b<sub>n</sub> another series of real numbers. Then the comparison test is the following two statements:

- If &Sigma; b<sub>n</sub> converges and there exists some N such that and 0 &le; a<sub>n</sub> &le; b<sub>n</sub> for all n &ge; N, then &Sigma; a<sub>n</sub> converges.
- If &Sigma; b<sub>n</sub> diverges and there is some N such that 0 &le; b<sub>n</sub> &le; a<sub>n</sub> for all n &ge; N, then &Sigma; a<sub>n</sub> diverges.

### Examples

Suppose we have the series &Sigma; a<sub>n</sub> where a<sub>n</sub> = 1/n<sup>3</sup>. We want to find out if this series converges or not, so let's try to compare it to another series. For instance, the [famous sum](https://en.wikipedia.org/wiki/Basel_problem) &Sigma; 1/n<sup>2</sup>, which is known to converge. We have n<sup>3</sup> &ge; n<sup>2</sup> for all n &ge; 1, so

<p align='center'>1/n<sup>2</sup> &ge; 1/n<sup>3</sup>  for all n &ge; 1. </p>

Hence, by the comparison test, &Sigma; 1/n<sup>3</sup> converges. (Note that the comparison test doesn't give any clue as to what the series converges to. That is a different problem altogether, and is usually quite a lot more difficult than simply determining *if* a series converges.)

As another example, suppose we wish to determine if the series &Sigma; n/[n<sup>2</sup> - cos<sup>2</sup>(n)] converges or diverges. For this, note that

<p align='center'> n/[n<sup>2</sup> - cos<sup>2</sup>(n)] &gt; n/n<sup>2</sup> = 1/n </p>

as cos<sup>2</sup>(n) &ge; 0 for any n. But the [harmonic series](https://en.wikipedia.org/wiki/Harmonic_series_(mathematics)) is well-known to diverge, and so by the comparison test our series must diverge as well.

### More general series

The constraint of requiring our series to only have non-negative values is very strict, so what can be said if we allow negative numbers? We can get almost the exact same result if, instead of convergence, we only look for [absolute convergence](https://en.wikipedia.org/wiki/Absolute_convergence). Namely, if we have our two series &Sigma; a<sub>n</sub> and &Sigma; b<sub>n</sub> where the a<sub>n</sub> are *any* real numbers (or even complex numbers), then

- If &Sigma; b<sub>n</sub> converges and there exists some N such that and 0 &le; |a<sub>n</sub>| &le; |b<sub>n</sub>| for all n &ge; N, then &Sigma; a<sub>n</sub> absolutely converges.
- If &Sigma; b<sub>n</sub> is not absolutely convergent and there is some N such that 0 &le; |b<sub>n</sub>| &le; |a<sub>n</sub>| for all n &ge; N, then &Sigma; a<sub>n</sub> is not absolutely convergent.

Where |.| is the [real](https://en.wikipedia.org/wiki/Absolute_value#Real_numbers) or [complex](https://en.wikipedia.org/wiki/Absolute_value#Complex_numbers) aboslute value depending on whether the series is real or complex.

The only real difference between the two cases is that the divergent case is replaced with *not absolutely convergent*. The reason for this is because when working with series that can have negative or complex values, it is possible to [conditionally converge](https://en.wikipedia.org/wiki/Conditional_convergence) instead of merely diverge.

### Examples

Does the following series absolutely converge or not?

<p align='center'> &Sigma; (-1)<sup>n</sup> [sqrt(n + 3) - sqrt(n)] </p>

Here, we see that

<p align='center'> sqrt(n + 3) - sqrt(n) &ge; sqrt(n + 1) - sqrt(n), </p>

and the series &Sigma; sqrt(n + 1) - sqrt(n) [telescopes](https://en.wikipedia.org/wiki/Telescoping_series) in a way that we see does not converge absolutely. Hence, by the comparison test, our original series does not converge absolutely. (Note that it does, however, [converge](https://en.wikipedia.org/wiki/Alternating_series_test), so we can see precisely why the statement of the comparison test cannot simply be about the two series diverging but must instead about not absolutely converging.)
