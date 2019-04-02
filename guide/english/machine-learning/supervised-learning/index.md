---
title: Supervised Learning
---
## Supervised Learning

In supervised learning, we know what the correct output should be. Supervised learning problems can be categorized into regression and classification. A regression problem is where you map input to a continuous output. A classification problem, in contrast, is where you map (group) inputs into discrete categories.

### Regression

Given data about used cars such as their mileage, you can predict their market prices. Since price is a continuous variable, this is a regression problem. In another example, Microsoft released a web app that predicts age based on picture. Again, as age is continuous rather than discrete or categorical, this is also a regression problem.  

### Classification

The regression problems above can be turned into classification problems. Suppose you want to look for a used car less than X dollars. Then the output would be if the used car fits the price that you set. Similarly, age prediction can be a classification problem if we are looking to predict if a submitted picture belongs to someone under 18, and therefore should not be allowed to buy cigarettes.

###  Discussion points:
  
- What is special about supervised learning?
- In what scenario would you use it in?
- Caveats or traps to think about?
- What are some example models?

#### Example 1:

Suppose you wanted someone to differentiate between an apple and a banana. With Supervised Learning, you need to teach him what is apple and what is banana. The more he learns, the more he understands, the smarter it becomes. Note that you need to know what kind of answer you want to get: apple or bananas (nothing else). [Inspired by: Thomas Abot](https://triskell.github.io/2016/11/13/Supervised-Learning-and-Unsupervised-Learning.html)

#### Example 2:

> Given data about the size of houses on the real estate market, try to predict their price. 

Price as a function of size is a continuous output, so this is a regression problem.

#### Example 3:

(a) Regression - For continuous-response values. For example given a picture of a person, we have to predict their age on the basis of the given picture

(b) Classification - for categorical response values, where the data can be separated into specific “classes”. For example given a patient with a tumor, we have to predict whether the tumor is malignant or benign.

#### Example 3:

(a) Regression - Predicting people's income based on years of higher education.

(b) Classification - Object classification in images. Given an image, the algorithm can determine which objects are present, such as "dog", "vase", or "car".

#### Suggested Reading:

- https://en.wikipedia.org/wiki/Supervised_learning
- https://stackoverflow.com/a/1854449/6873133
