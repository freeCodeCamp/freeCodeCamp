---
title: Dataset Splitting
---
## Dataset Splitting

Splitting up into Training, Cross Validation, and Test sets are common best practices.
This allows you to tune various parameters of the algorithm without making judgements that specifically conform to training data.

### Motivation

Dataset Splitting emerges as a necessity to eliminate bias to training data in ML algorithms.
Modifying parameters of a ML algorithm to best fit the training data commonly results in an overfit algorithm that performs poorly on actual test data.
For this reason, we split the dataset into multiple, discrete subsets on which we train different parameters.

#### The Training Set

The Training set is used to compute the actual model your algorithm will use when exposed to new data.
This dataset is typically 60%-80% of your entire available data (depending on whether or not you use a Cross Validation set).

#### The Cross Validation Set

Cross Validation sets are for model selection (typically ~20% of your data).
Use this dataset to try different parameters for the algorithm as trained on the Training set.
For example, you can evaluate differnt model parameters (polynomial degree or lambda, the regularization parameter) on the Cross Validation set to see which may be most accurate.

#### The Test Set

The Test set is the final dataset you touch (typically ~20% of your data).
It is the source of truth.
Your accuracy in predicting the test set is the accuracy of your ML algorithm.

#### More Information:
 - [AWS ML Doc](http://docs.aws.amazon.com/machine-learning/latest/dg/splitting-the-data-into-training-and-evaluation-data.html)
 - [A good stackoverflow post](https://stackoverflow.com/questions/13610074/is-there-a-rule-of-thumb-for-how-to-divide-a-dataset-into-training-and-validatio)
 - [Academic Paper](https://www.mff.cuni.cz/veda/konference/wds/proc/pdf10/WDS10_105_i1_Reitermanova.pdf)


