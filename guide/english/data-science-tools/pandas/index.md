---
title: pandas
---

![Everybody loves pandas!](https://pandas.pydata.org/_static/pandas_logo.png "pandas")

## pandas
[pandas](http://pandas.pydata.org/) is a Python library for data analysis using data frames. Data frames are tables of data, which may conceptually be compared to a spreadsheet. Data scientists familiar with R will feel at home here. pandas is often used along with numpy, pyplot, and scikit-learn.

### Importing pandas
It is a widely used convention to import the pandas library using the alias `pd`:
```python
import pandas as pd
```

## Data frames
A data frame consists of a number of rows and columns. Each column represents a feature of the data set, and so, has a name and a data type. Each row represents a data point through associated feature values. The pandas library allows you to manipulate the data in a data frame in various ways. pandas has a lot of possibilities, so the following is merely scratching the surface to give you a feel for the library.

## Series
Series is the basic data-type in pandas. A Series is very similar to an array (NumPy array, in fact it is built on top of the NumPy array object). A Series can have axis labels, as it can be indexed by a label with no number indexing for the location of data. It can hold any valid Python Object like List, Dictionary etc.

## Loading data from a csv file
A `.csv` file is a *comma separated value* file. A very common way to store data. To load such data into a pandas data frame use the `read_csv` method:
```python
df = pd.read_csv(file_path)
```
Here, `file_path` can be a local path to a csv file on you computer, or a url pointing to one. The column names may be included in the csv file, or the may be passed as an argument. For more on this, and much more, take a look at the [documentation](http://pandas.pydata.org/pandas-docs/stable/generated/pandas.read_csv.html?highlight=read_csv#pandas.read_csv).

## Getting an overview of a data frame
To show the first few rows of a data frame, the `head` method is useful (once more this should sound familiar to R programmers):
```python
df.head()
```
This will show the first 5 rows of the data frame.

To show more than first 5 rows simply put the number of rows you want to print out inside the `head` method.
```python
df.head(10)
```
This will show the first 10 rows of the data frame.

To show the last few rows of a data frame, the `tail` method is useful (once more this should sound familiar to R programmers):
```python
df.tail()
```
This will show the last 5 rows of the data frame.

## Subsetting: Getting a column by name
A data frame can be subset in many ways. One of the simplest is getting a single column. For instance, if the data frame `df` contains a column named `age`, we can extract it as follows:
```python
ages=df["age"]
```

#### More Information:
1. [pandas](http://pandas.pydata.org/)
2. [read_csv](http://pandas.pydata.org/pandas-docs/stable/generated/pandas.read_csv.html?highlight=read_csv#pandas.read_csv)
3. [head](http://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.head.html?highlight=head#pandas.DataFrame.head)
