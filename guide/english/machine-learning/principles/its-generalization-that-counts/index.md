---
title: Its Generalization That Counts
---
## Its Generalization That Counts

The power of machine learning comes from not having to hard code or explicitly
define the parameters that describe your training data and unseen data. This is
the essential goal of machine learning: to generalize a learner's findings.

To test a learner's generalizability, you'll want to have a separate test data
set that is not used in any way in training the learner. This can be created by
either splitting your entire training data set into a training and test set, or
to just collect more data. If the learner were to use data found in the test
data set, this would create a sort of bias in your learner to do better than in
reality.

One method to get a sense on how your learner will do on a test data set is to
perform what is called **cross-validation**. This randomly splits up your
training data into a given number of subsets (for example, ten subsets) and
leaves one subset out while the learner trains on the rest. And then once the
learner has been trained, the left out data set is used for testing. This
training, leaving one subset out, and testing is repeated as you rotate through
the subsets.

#### More Information:

- <a href='https://homes.cs.washington.edu/~pedrod/papers/cacm12.pdf' target='_blank' rel='nofollow'>A Few Useful Things to Know about Machine Learning</a>
- <a href='https://stats.stackexchange.com/a/153058/132399' target='_blank' rel='nofollow'>"How do you use test data set after Cross-validation"</a>
