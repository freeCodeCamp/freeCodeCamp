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

How to create a new dataframe:
```python
df = pd.DataFrame([[y, x1_1, x2_1, ...], [y, x1_2, x2_2, ...], ... ])
df.columns = ['class', 'x1', 'x2', ...]
```

## Series
Series is the basic data-type in pandas. A Series is very similar to an array (NumPy array) (in fact it is built on top of the NumPy array object). A Series can have axis labels, as it can be indexed by a label with no number indexing for the location of data. It can hold any valid Python Object like List, Dictionary, etc.

```python
pd.Series([1,2,3])
```
output:
```output
0    1
1    2
2    3
dtype: int64
```
```python
np.array([1,2,3])
```
output:
```output
array([1, 2, 3])
```

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

Instead of passing only one column name inside the brackets, we can pass a List of column names. The return value is a DataFrame.
```python
person_info = df[["name","age","address"]]
```
The `person_info` variable is a reference to the original `df`. If you want to make a clone that does not reference the original, simply use the `copy` method:
```python
person_info = df[["name","age","address"]].copy()
```

### Basic Statistics
Descriptive statistics can be performed on each column of a pandas dataframe. 
- `df.mean()` - Returns the mean of all columns
- `df.corr()` - Returns the correlation between columns in a data frame
- `df.count()` - Returns the number of non-null values in each data frame column
- `df.max()` - Returns the highest value in each column
- `df.min()` - Returns the lowest value in each column
- `df.median()` - Returns the median of each column
- `df.std()` - Returns the standard deviation of each column

### Visualizing the Data in the Dataframe
To visualize the data in the dataframe, we can use matplotlib library. Here's how to use it:
The below code will setup matplotlib inline in your Jupyter notebook. set the style to be 'ggplot', one of the many styles available in matplotlib. and plot a histogram of a given ColumnName from the dataframe

```python
%matplotlib inline
import matplotlib
matplotlib.style.use('ggplot')
df['ColumnName'].plot.hist()
```
## Concatenation
Concatenation basically glues together DataFrames. Keep in mind that dimensions should match along the axis you are concatenating on. You can use **pd.concat** and pass in a list of DataFrames to concatenate together:

```python
pd.concat([df1,df2,df3])
```
## Merging

The **merge** function allows you to merge DataFrames together using a similar logic as merging SQL Tables together. For example:


```python
pd.merge(left,right,how='inner',on='key')
```
## Joining
Joining is a convenient method for combining the columns of two potentially differently-indexed DataFrames into a single result DataFrame.


```python
left = pd.DataFrame({'A': ['A0', 'A1', 'A2'],
                     'B': ['B0', 'B1', 'B2']},
                      index=['K0', 'K1', 'K2']) 

right = pd.DataFrame({'C': ['C0', 'C2', 'C3'],
                      'D': ['D0', 'D2', 'D3']},
                      index=['K0', 'K2', 'K3'])
```

```python
left.join(right)
```

# Pandas Functions
## Information on Unique Values
```python
df['col1'].unique()
```
```python
df['col1'].nunique()
```
```python
df['col1'].value_counts()
```
## Selecting Data
```python
newdf = df[(df['col1']>2) & (df['col2']==123)]
```
```python
newdf
```
## Applying Functions
```python
def times2(x):
    return x*2
```
```python
df['col1'].apply(times2)
```

```python
df['col1'].apply(len)
```
## Permanently removing a column
```python
del df['col1']
```
## Data Cleaning
Data cleaning is a very important step in data analysis. For example, we always check for missing values in the data by running `pd.isnull()` which checks for null Values, and returns a boolean array (an array of true for missing values and false for non-missing values). In order to get a sum of null/missing values, run `pd.isnull().sum()`. `pd.notnull()` is the opposite of `pd.isnull()`. After you get a list of missing values you can get rid of them, or drop them by using `df.dropna()` to drop the rows or `df.dropna(axis=1)` to drop the columns. A different approach would be to fill the missing values with other values by using df.fillna(x) which fills the missing values with x (you can put there whatever you want) or `s.fillna(s.mean())` to replace all null values with the mean (mean can be replaced with almost any function from the statistics section).

It is sometimes necessary to replace values with different values. For example, `s.replace(1,'one')` would replace all values equal to 1 with 'one'. It’s possible to do it for multiple values: `s.replace([1,3],['one','three'])` would replace all 1 with 'one' and 3 with 'three'. You can also rename specific columns by running: `df.rename(columns={'old_name': 'new_ name'})` or use `df.set_index('column_one')` to change the index of the data frame.


## Checking for missing values
 ```df.isnull()```
It wil return a Boolean value telling you whether it’s a missing value.

## Getting rid of missing data points
```pd.dropna()```
This will drop all rows that have any missing values.

#### More Information:
1. [pandas](http://pandas.pydata.org/)
2. [read_csv](http://pandas.pydata.org/pandas-docs/stable/generated/pandas.read_csv.html?highlight=read_csv#pandas.read_csv)
3. [head](http://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.head.html?highlight=head#pandas.DataFrame.head)
4. [Introduction to Pandas](https://youtu.be/lkLl_QKLgcA)
