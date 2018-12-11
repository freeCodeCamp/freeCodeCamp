---
title: Learning Equals Representation Evaluation Optimization
---
## Learning Equals Representation Evaluation Optimization

The field of machine learning has exploded in recent years and researchers have
developed an enormous number of algorithms to choose from. Despite this great
variety of models to choose from, they can all be distilled into three
components.

The three components that make a machine learning model are representation,
evaluation, and optimization. These three are most directly related to
supervised learning, but it can be related to unsupervised learning as well.

**Representation** - this describes how you want to look at your data.
Sometimes you may want to think of your data in terms of individuals (like in
k-nearest neighbors) or like in a graph (like in Bayesian networks).

**Evaluation** - for supervised learning purposes, you'll need to evaluate or
put a score on how well your learner is doing so it can improve. This
evaluation is done using an evaulation function (also known as an *objective
function* or *scoring function*). Examples include accuracy and squared error.

**Optimization** - using the evaluation function from above, you need to find
the learner with the best score from this evaluation function using a choice of
optimization technique. Examples are a greedy search and gradient descent.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

- <a href='https://homes.cs.washington.edu/~pedrod/papers/cacm12.pdf' target='_blank' rel='nofollow'>A Few Useful Things to Know about Machine Learning</a>
