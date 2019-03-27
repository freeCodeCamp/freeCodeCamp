---
title: pandas Series
---

## Series

In this section we will go through one of the important pandas object Series. Series is a one dimensional ndarray. It is similar to a column in a table. It can have a custom axis label or by default pandas adds a range value as index. It is mainly used to represent the values of a single column. Example the scores of students in science subject from a marksheet.

### Basic syntax of Series


```python
pandas.Series(data=None, index=None, dtype=None, name=None, copy=False, fastpath=False)
```

`data`  : dcit,array or scaler value

`index` : array-like or range. Should be of same size as the data.Defaults to Rangearray(0,1,2..n)

`dtype` : numpy.dtype

`name`  : name for the series

### Creating Series in different ways:

Let's first import our `pandas` module:


```python
import pandas as pd
```

### Create an empty Series:


```python
pd.Series()
```




    Series([], dtype: float64)



### Create Using a dict:


```python
input_data = {'a':1,'b':2,'c':3,'d':4}
s = pd.Series(input_data)
print(s)
```

    a    1
    b    2
    c    3
    d    4
    dtype: int64
    

### Create using a ndarray:


```python
import numpy as np
input_data = np.array(['a','b','c','d'])
s = pd.Series(input_data)
print(s)
```

    0    a
    1    b
    2    c
    3    d
    dtype: object
    

Adding our own index:


```python
s1 = pd.Series(data = input_data,index = [5,6,7,8])
print(s1)
```

    5    a
    6    b
    7    c
    8    d
    dtype: object
    

### Create using a scalar value:


```python
s = pd.Series(data = 5,index = range(6),dtype= int)
print(s)
```

    0    5
    1    5
    2    5
    3    5
    4    5
    5    5
    dtype: int32
    


```python
s = pd.Series(data = 5,index = range(6),dtype= float)
print(s)
```

    0    5.0
    1    5.0
    2    5.0
    3    5.0
    4    5.0
    5    5.0
    dtype: float64
    

Now we know how to ceate a pandas series. Next we check how can we access or retrive a specific data from a series.

### Retriving a data from a Series:

Retriving data from a Series is similar to ndaray in numpy or the basic list in python. It supports all the similar python list retrival methods like position based, label based as well as slicing.

### Position based selection:


```python
s = pd.Series([1,2,3,4,5,6,7])
print('Selecting the first element: {}'.format(s[0]))
print('Slecting the first  3 element: \n{}'.format(s[:3]))
```

    Selecting the first element: 1
    Slecting the first  3 element: 
    0    1
    1    2
    2    3
    dtype: int64
    

### Label based selection(index):


```python
s = pd.Series([1,2,3,4,5], index = ['a','b','c','d','e'])
print('Select the value for c: {}'.format(s['c']))
print('Select the values for b,c,d: \n{}'.format(s[['b','c','d']]))
```

    Select the value for c: 3
    Select the values for b,c,d: 
    b    2
    c    3
    d    4
    dtype: int64
    

## Series Basic Functionalities:

Now we will see some of the basic functionalities or methods available with pandas Series. This methods come handy when performing some operations with the a Series.


```python
s = pd.Series(data = [84,78,88,93,91,84], 
              index= ['Mark','Lilly','Ben','Hari','Akbar','Monika'],    #Scores of students in Science
              name='Science')  
```


```python
s.head()       # retruns the top five elements
```




    Mark     84
    Lilly    78
    Ben      88
    Hari     93
    Akbar    91
    Name: Science, dtype: int64




```python
s.tail()      # retruns the bottom five elements
```




    Lilly     78
    Ben       88
    Hari      93
    Akbar     91
    Monika    84
    Name: Science, dtype: int64




```python
s.size         # returns the total number of elements in the series
```




    6




```python
s.sum()        # retruns the sum of all the elements
```




    518




```python
s.mean()       # retruns the mean of the elements.  
```




    86.33333333333333




```python
s.unique()     # retruns all the unique values in the Series.
```




    array([84, 78, 88, 93, 91], dtype=int64)




```python
s.nunique()     # retruns total no. of unique values in the series
```




    5




```python
s['Mark']       # get the score of Mark
```




    84




```python
s.axes         # returns all the index values
```




    [Index(['Mark', 'Lilly', 'Ben', 'Hari', 'Akbar', 'Monika'], dtype='object')]



Scalar arithimatic operations are supported in Series. It is generally called as brodacasting as it applies to all the elements in the series. Example as follow 


```python
s + 5          # adding extra 5 marks to all the students
```




    Mark      89
    Lilly     83
    Ben       93
    Hari      98
    Akbar     96
    Monika    89
    Name: Science, dtype: int64




```python
s[['Mark','Monika']] - 2         # Subtracting 2 marks to Mark and Monika
```




    Mark      82
    Monika    82
    Name: Science, dtype: int64




```python
s.drop(labels= 'Ben')           # drop deletes a row based on the index value.
```




    Mark      84
    Lilly     78
    Hari      93
    Akbar     91
    Monika    84
    Name: Science, dtype: int64



#### More Information:

[pandas.Series](https://pandas.pydata.org/pandas-docs/version/0.23.4/generated/pandas.Series.html)
