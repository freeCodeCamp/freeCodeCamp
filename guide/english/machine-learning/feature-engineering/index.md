---
title: Feature Engineering
---
## Feature Engineering
Machine Learning works best with well formed data. Feature engineering describes certain techniques to make sure we're working with the best possible representation of the data we collected.

## Why is feature engineering useful?

* The quantity and quality of features impacts the predictive power of the model.  More high-quality features results in a better model.
* Build better models by taking the data you have and augmenting it with additional subject-relevant information obtained elsewhere.
* New features can lead to 'breakthroughs' in the model's ability to predict a robust outcome.  

## Caveats to feature engineering

* New feature creation based from known features can lead to multicollinearity, a situation where two features are linearly related.  This amounts to 'double dipping' in a model and can lead to over fitting.  
* More is not always better.  Adding features with poor predictive capabilities can increase computational time without adding benefits to the model.

## Examples of feature engineering:

* If you have a 'date' feature, try subsetting it to 'day of the week', 'week of the year', or 'month of the year'.  Similarly, create an AM/PM feature from 'time of day'.
* Perform a data reduction like PCA then add the vectors from the PCA to the data as new features.
* Produce new features by numerically transforming current features.  Examples would be log transforming data or encoding categorical features as numbers (convert low/medium/high to 1/2/3).  
* Use census data to create new features (such as average income), assuming your data set contains location information (city, state, county, etc.).

Following are two techniques of feature engineering: scaling and selection.

### Feature Scaling

Let's assume your data contains the weight and height of people. The raw numbers of these two features have a high difference (e.g. 80 kg and 180 cm, or 175 lbs vs 5.9 ft), which could influence the outcome of certain Machine Learning algorithm. This is especially the case for algorithms that use [distance functions](https://en.wikipedia.org/wiki/Euclidean_distance).

To fix this isse, we represent the raw numbers in a 0 to 1 range. We can achieve this using the formula: `(x - xMin) / (xMax - xMin)`.

Using this formula, we need to pay special attention to outliers, as these can affect the outcome drastically by pushing up xMax and pushing down xMin. That's why outliers are often eliminated prior to scaling. 

### Feature Selection

It's all about identifying the subset of features that are responsible for the trends we observe in our data.

Why should we care? [Curse of Dimensionality](https://en.wikipedia.org/wiki/Curse_of_dimensionality) is a big enemy in times of Big Data. We can't use all of our tens to hundreds of features. This would not only raise the dimensionality of our data through the roof (2^n, where n is the number of features), but also often don't make any sense in specific use cases. Imagine wanting to predict the weather of tomorrow: It will be more likely that the weather trend of last days is more important in this scenario than the babies born in the last days. So you could easily just eliminate the babies-feature.

But forget babies for now, let's dive into more detail.

#### Filtering & Wrapping

Here we describe two general approaches. Filtering methods act independently from your chosen learning algorithm & wrapping methods incorporate your learner.

Filter methods select the subset of features before injecting the data into your ML algorithm. They use e.g. the correleation with the to-be-predicted variable to identify which subset of features to choose. These methods are relatively fast to compute, but don't take advantage of the [bias of the learner](https://en.wikipedia.org/wiki/Inductive_bias) because filtering is happening independent of your chosen ML model.

Wrapping search algorithms do take advantage of the learning bias, as they incorporate your chosen ML model. These methods function by removing the feature that has the lowest change in score when removed and repeating this process until the score changes significantly. This means running your learning algorithm over and over again, which can lead to significant computation times. These methods also have the danger of overfitting, as you're basically optimizing the feature set based on your chosen ML model.

#### Relevance

Another way of selecting features is using the [BOC (Bayes Optimal Classifier)](https://scholar.google.de/scholar?q=Bayes+Optimal+Classifier&hl=en&as_sdt=0&as_vis=1&oi=scholart&sa=X&ved=0ahUKEwiO16X0tIbXAhXiKsAKHbGrBzoQgQMIJjAA). The rule of thumbs here are:
* a feature is strongly relevant if removing it degrades the BOC
* a feature is weakly relevant if it is not strongly relevant & adding it in combination with other features improves the BOC
* otherwise a feature is irrelevant

Well, not always. It depends on the amount of data you have and the strength of competing signals. You can help your algorithm "focus" on what's important by highlighting it beforehand.

* Indicator variable from thresholds: Let's say you're studying alcohol preferences by U.S. consumers and your dataset has an age feature. You can create an indicator variable for age >= 21 to distinguish subjects who were over the legal drinking age.
* Indicator variable from multiple features: You're predicting real-estate prices and you have the features n_bedrooms and n_bathrooms. If houses with 2 beds and 2 baths command a premium as rental properties, you can create an indicator variable to flag them.
* Indicator variable for special events: You're modeling weekly sales for an e-commerce site. You can create two indicator variables for the weeks of Black Friday and Christmas.
* Indicator variable for groups of classes: You're analyzing website conversions and your dataset has the categorical feature traffic_source. You could create an indicator variable for paid_traffic by flagging observations with traffic source values of  "Facebook Ads" or "Google Adwords".

## Interaction Features
The next type of feature engineering involves highlighting interactions between two or more features.

Have you ever heard the phrase, "the sum is greater than the parts?" Well, some features can be combined to provide more information than they would as individuals.

Specifically, look for opportunities to take the sum, difference, product, or quotient of multiple features.

*Note: We don't recommend using an automated loop to create interactions for all your features. This leads to "feature explosion."

* Sum of two features: Let's say you wish to predict revenue based on preliminary sales data. You have the features sales_blue_pens and sales_black_pens. You could sum those features if you only care about overall sales_pens.
* Difference between two features: You have the features house_built_date and house_purchase_date. You can take their difference to create the feature house_age_at_purchase.
* Product of two features: You're running a pricing test, and you have the feature price and an indicator variable conversion. You can take their product to create the feature earnings.
* Quotient of two features: You have a dataset of marketing campaigns with the features n_clicks and n_impressions. You can divide clicks by impressions to create  click_through_rate, allowing you to compare across campaigns of different volume.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
* [Paper exploring "Feature Engineering for Text Classification"](https://pdfs.semanticscholar.org/6e51/8946c59c8c5d005054af319783b3eba128a9.pdf)
* [Article "Discover Feature Engineering, How to Engineer Features and How to Get Good at It"](https://machinelearningmastery.com/discover-feature-engineering-how-to-engineer-features-and-how-to-get-good-at-it/)
* [A comprehensive guide to data analysis](https://www.analyticsvidhya.com/blog/2016/01/guide-data-exploration/)
* [Data transformations](https://onlinecourses.science.psu.edu/stat501/node/318)
* [Feature engineering in data science](https://docs.microsoft.com/en-us/azure/machine-learning/team-data-science-process/create-features)
