---
title: Data Alone Is not Enough
---
## Data Alone Is not Enough

Without accounting for changing machine learning algorithms or other aspects of
training the model, data alone is not enough to help your learner do better.

> Every learner must embody some knowledge or assumptions beyond the data it's
> given in order to generalize beyond it (Domingos, 2012).

What this statement is essentially saying is that if you blindly choose a
learner just because you've heard it does well, collecting more data won't
necessarily help you in your machine learning goals.

For example, say you have data which depends on time (e.g. time series data)
and you want to use a binary classifier (e.g. logistic regression). Collecting
more time series data might not be the best to help your learner. This is
because a binary classifier isn't designed for time series.

This is not to say that once you've chosen the best machine learning algorithm
based on your problem that adding more data does you no good. In this case, it
will help you.

> Machine learning is not magic; it can't get something from nothing. What it
> does is get more from less...Learners combine knowledge with data to grow
> programs (Domingos, 2012).

#### More Information:

- <a href='https://homes.cs.washington.edu/~pedrod/papers/cacm12.pdf' target='_blank' rel='nofollow'>A Few Useful Things to Know about Machine Learning</a>
- <a href='http://www.kdnuggets.com/2015/06/machine-learning-more-data-better-algorithms.html' target='_blank' rel='nofollow'>In Machine Learning, What is Better: More Data or better Algorithms?</a>
- <a href='https://www.quora.com/In-machine-learning-is-more-data-always-better-than-better-algorithms/answer/Xavier-Amatriain?srid=Tds3' target='_blank' rel='nofollow'>In machine learning, is more data always better than better algorithms?</a>
