---
title: Bayes Classifier
---
## Bayes Classifier
### Classifier
A classifier is a machine learning model that is used to discriminate different objects based on certain features.

### Principle of Naive Bayes Classifier
A Naive Bayes classifier is a probabilistic machine learning model that’s used for classification task. The crux of the classifier is based on the Bayes theorem.(The naive Bayes classifier is an approximation to the Bayes classifier, in which we assume that the features are conditionally independent given the class instead of modeling their full conditional distribution given the class.)

### Bayes Theorem
Bayes Classifier is based on applying Bayes Theorem to update its belief on the probability of an event occurring. 

![Bayes Theorem](https://github.com/Cheungo/bayes_theorem_image/blob/master/CodeCogsEqn.gif?raw=true)

Bayes Theorem allows you to compute the probability of B given A, provided you have probabilities for A given B, A, and B.
(The assumption made here is that the predictors/features are independent. That is presence of one particular feature does not affect the other. Hence it is called naive.)

Bayes Classifier models uncertainty by keeping probabilities for each of the possible scenarios. As more information becomes available, the probabilities are updated to more accurately reflect what is now known about the given situation. Bayes classifier chooses the class that has the highest posterior probability.

### Types of Naive Bayes Classifier
* #### Multinomial Naive Bayes
  This is mostly used for document classification problem, i.e whether a document belongs to the category of sports,           politics,   technology etc. The features/predictors used by the classifier are the frequency of the words present in the     document.

* #### Bernoulli Naive Bayes:
  This is similar to the multinomial naive bayes but the predictors are boolean variables. The parameters that we use to       predict the class variable take up only values yes or no, for example if a word occurs in the text or not.
  
* #### Gaussian Naive Bayes:
  When the predictors take up a continuous value and are not discrete, we assume that these values are sampled from a           gaussian distribution.
 
### Summary
Bayes algorithms are mostly used in sentiment analysis, spam filtering, recommendation systems etc. They are fast and easy to implement but their biggest disadvantage is that the requirement of predictors to be independent. 

#### Suggested Reading:
<!-- Please add any articles you think might be helpful to read before writing the article -->

- [A practical explanation of a Naive Bayes classifier](https://monkeylearn.com/blog/practical-explanation-naive-bayes-classifier/)
- [Naive Bayes classifier](https://en.wikipedia.org/wiki/Naive_Bayes_classifier)
- [How Naive Bayes Classifier Works 1/2](https://youtu.be/XcwH9JGfZOU)
- [How Naive Bayes Classifier Works 2/2](https://youtu.be/k2diLn5Nqbs)
