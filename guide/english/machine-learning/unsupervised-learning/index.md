---
title: Unsupervised Learning
---
#### Suggested Reading:
<!-- Please add any articles you think might be helpful to read before writing the article -->

- https://en.wikipedia.org/wiki/Unsupervised_learning
- https://stackoverflow.com/a/1854449/6873133
- http://mlg.eng.cam.ac.uk/zoubin/papers/ul.pdf

#### Draft of Article:
<!-- Please add your working draft below in GitHub-flavored Markdown -->

<!--
Discussion points:
- Unsupervised learning doesn't have a correct answer i.e. you can't be more or less accurate in the output
- Learn "hidden" structure in data
- Clustering is classical example
- Group like things together
- Example use case: movie database with people's preferences, you want to cluster and see different types of people
- Example use case: grouping documents or articles of similar content
-->
What is Unsupervised Learning?

Unsupervised learning allows us to approach problems with little or no idea what our results should look like. We can derive structure from data where we don't necessarily know the effect of the variables. The algorithm finds "hidden" structures in the data based on the attributes. This is especially useful if you have complex data sets. 

Unsupervised learning could be used in analytics to find patterns in the data. For instance, suppose you have data for an E-commerce site. You have a list of people and things they have ordered online this last week. You can now use unsupervised learning algorithms to find patterns in the data, predict the buying trend and formulate the business strategy as per the trend.

Types:

Clustering algorithms are frequently used for exploratory data analysis to find hidden patterns or grouping in data. Take a collection of 1,000,000 different genes, and find a way to automatically group these genes into groups that are somehow similar or related by different variables, such as lifespan, location, roles, and so on.

Neural networks are also often used to find structures in unlabeled data. Often, a self-organizing map (SOM) is trained that visualizes the data using a map. Similar data points are then placed closer together, creating clusters of data with similar properties.
