---
title: pandas
---

![Everybody loves pandas!](https://pandas.pydata.org/_static/pandas_logo.png "pandas")

## pandas
[pandas](http://pandas.pydata.org/) is a Python library for data analysis using data frames. The name `pandas` comes from *panel data*, i.e. a multi-dimensional data measured over time. Data frames are tables of data, which may conceptually be compared to a spreadsheet. Data scientists familiar with R will feel at home here. pandas is often used along with numpy, scipy, pyplot, seaborn and scikit-learn.

### Installing pandas
#### Installing via Anaconda (__Recommended__):
Pandas and the other Data Science Stack (Scipy, Numpy, Scikit, etc) are included when installing Anaconda. For more information about installing Anaconda, please refer to this [site](http://docs.continuum.io/anaconda/install/).

#### Installing via pip:
If you want to install pandas using default python package manager (pip), here is the command:
```
pip install pandas
```

### Importing pandas
It is a widely used convention to import the pandas library using the alias `pd`:
```python
import pandas as pd
```

## Data frames
A data frame consists of a number of rows and columns. Each column represents a feature of the data set, and so has a name and a data type. Each row represents a data point through associated feature values. The pandas library allows you to manipulate the data in a data frame in various ways. pandas has a lot of possibilities, so the following is merely scratching the surface to give a feel for the library.

## Series
Series is the basic data-type in pandas. A Series is very similar to an array (NumPy array) (in fact it is built on top of the NumPy array object). A Series can have axis labels, as it can be indexed by a label with no number indexing for the location of data. It can hold any valid Python Object like List, Dictionary, etc.

## Loading Data from a CSV File
A `.csv` file is a *comma separated value* file. A very common way to store data. To load such data into a pandas data frame use the `read_csv` method:
```python
df = pd.read_csv(file_path)
```
Here, `file_path` can be a local path to a csv file on you computer, or an url pointing to one. The column names may be included in the csv file, or may be passed as an argument. For more on this, and much more, take a look at the [documentation](http://pandas.pydata.org/pandas-docs/stable/generated/pandas.read_csv.html?highlight=read_csv#pandas.read_csv).

The read_csv function can be adapted to the available data via various parameters. The parameter parse_dates can be used, for example, to read data formats correctly (also via own functions) or the decimal character can be adapted.

## Loading Data from Other Sources
Data can also be read from other sources into the pandas table format. For example, functions for reading JSON and HTML are available.
With read_html, the HTML code is searched for table elements and the corresponding table is interpreted and read into a DataFrame.

```python
url = '"https://www.census.gov/data/tables/time-series/econ/mhs/latest-data.html"'
pd.read_html(url)
```

## Getting an Overview of a Data Frame
To show the first few rows of a data frame, the `head` method is useful (once more this should sound familiar to R programmers):
```python
df.head()
```
This will show the first 5 rows of the data frame.

To show more than the first 5 rows simply put the number of rows you want to print out inside the `head` method.
```python
df.head(10)
```
This will show the first 10 rows of the data frame.

To show the last few rows of a data frame, the `tail` method is useful (once more this should sound familiar to R programmers):
```python
df.tail()
```
This will show the last 5 rows of the data frame.

To see the data types of each column in your dataframe, use the 'dtypes' method:
```python
df.dtypes()
```

To show descriptive statistics, such as the shape and central tendency of the dataset, the `describe` method can be used:
```python
df.describe()
```
This will show the `count`, `mean`, `std`, `min`, `max` among others for numeric data.

### Subsetting
A data frame can be subset in many ways. One of the simplest is getting a single column. For instance, if the data frame `df` contains a column named `age`, we can extract it as follows:
```python
ages = df["age"]
```
This will return what's called a pandas series. 

We can also extract a list of columns from the data frame. For instance, if the data frame contains columns `name`, `age` and `address`, we can get the `name` and `age` as follows:
```python
details = df[["name", "age"]]
```
This will return a data frame only, and not a series.

Another option for subsetting a dataframe is using the loc and iloc methods. The difference between loc and iloc is that loc searches based on a label and iloc searches based on the integer value of a row or column. To perform the same indexing as the above example using loc:
```python
ages = df.loc["age"]
```

### Basic Statistics
Descriptive statistics can be performed on each column of a pandas dataframe. 

Get the mean of the values for the requested axis
```python
mean = df.mean()
```

### Visualizing the Data in the Dataframe
To visualize the data in the dataframe, we can use matplotlib library. Here's how to use it:
The below code will setup matplotlib inline in your Jupyter notebook. set the style to be 'ggplot', one of the many styles available in matplotlib. and plot a histogram of a given ColumnName from the dataframe

```python
%matplotlib inline
import matplotlib
matplotlib.style.use('ggplot')
df['ColumnName'].plot.hist()
```

#### More Information:
1. [pandas](http://pandas.pydata.org/)
2. [read_csv](http://pandas.pydata.org/pandas-docs/stable/generated/pandas.read_csv.html?highlight=read_csv#pandas.read_csv)
3. [head](http://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.head.html?highlight=head#pandas.DataFrame.head)
4. [Introduction to Pandas](https://youtu.be/lkLl_QKLgcA)
