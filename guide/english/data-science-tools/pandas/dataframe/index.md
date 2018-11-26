---
title: pandas DataFrame
---

## DataFrame

In this section you will have a detailed look on the other important data-type of pandas "DataFrame". In pandas, DataFrame is used as an object to represent multi-dimensional data. They are mainly used to represent 2 dimensional or tabular data with rows and columns. They can also be called as collection of `Series`.  

DataFrame also supports 3 dimensional data using the multi index properties. It will be the replacement for the old and now existing `panel` object. A 3-dimensional DataFrame can consist of multiple 2-D DataFrame.

### Basic syntax of DataFrame


```python
pandas.DataFrame(data=None, index=None, columns=None, dtype=None, copy=False)
```

`Data`  : ndarray, dict,Series, another dataframe

`index`  : array-like or index. default to RangeIndex(1,2,3 . . n). Represents the index label.

`columns`  : array-like or index. default to RangeIndex(1,2,3 . . n). Represents the column label.

`dtype`  : dtype, default None. Data type of the DataFrame 

### Creating DataFrame in different ways:

As a first step import our pandas module:


```python
import pandas as pd
```

### Create an empty DataFrame:


```python
df = pd.DataFrame()
print(df)
```

    Empty DataFrame
    Columns: []
    Index: []


### Create using a list:


```python
input_data = [['Mark',87],['Tom',78],['Monika',97]]
df = pd.DataFrame(data = input_data)
print(df)
```

            0   1
    0    Mark  87
    1     Tom  78
    2  Monika  97



```python
print('DataFrame with column and row index labels:')
roll_no = [223,224,225]
df = pd.DataFrame(data= input_data,index= roll_no,
             columns=['Name','Score'])
print(df)
```

    DataFrame with column and row index labels:
           Name  Score
    223    Mark     87
    224     Tom     78
    225  Monika     97


### Create using a dict:


```python
input_data = {'Name': ['Mark','Tom','Monika'],
              'Score': [87,78,97]}
df =pd.DataFrame(data=input_data,dtype= float)         # Notice that the score is change to float.
print(df)
```

         Name  Score
    0    Mark   87.0
    1     Tom   78.0
    2  Monika   97.0


### Create using a list of dict:


```python
input_data = [{'Name': 'Mark','Score': 87},
              {'Name': 'Tom','Score': 78},
              {'Name': 'Monika', 'Score': 97}]
df = pd.DataFrame(data= input_data, index=roll_no)
print(df)
```

           Name  Score
    223    Mark     87
    224     Tom     78
    225  Monika     97


### Create using a dict of Series:


```python
input_data = {'Name': pd.Series(['Mark','Tom','Monika','John']),
              'Score': pd.Series([87,78,97])}
df = pd.DataFrame(input_data)
print(df)
```

         Name  Score
    0    Mark   87.0
    1     Tom   78.0
    2  Monika   97.0
    3    John    NaN


You can notice the above output, For John the score is NaN(not a number). In pandas empty values are defaulted with numpy.nan.

### DataFrame Manipulations:

Now that you have a comprehensive idea on how to create a DataFrame and different kind of inputs you can use to create it. Next on to different manipulation operations we can do with a DataFrame.

### Column Manipulation:

Below are the operations on the column level discussed here:
* Column selection
* Column addition
* Column deletion


```python
score_sheet = {'Name': pd.Series(['Mark','Tom','Monika','Lilly','Sam']),
               'Maths': pd.Series([89,87,83,78,77]),
               'Science': pd.Series([78,88,66,0,88])}
DF = pd.DataFrame(score_sheet)
print(DF)
```

         Name  Maths  Science
    0    Mark     89       78
    1     Tom     87       88
    2  Monika     83       66
    3   Lilly     78        0
    4     Sam     77       88


### Column selection:


```python
DF['Name']             # Selcting a particular column
```




    0      Mark
    1       Tom
    2    Monika
    3     Lilly
    4       Sam
    Name: Name, dtype: object




```python
type(DF['Maths'])
```




    pandas.core.series.Series



You can notice that each column in a DataFrame is considered as a Series and it supports all the Series type operations.  Example:`


```python
DF['Maths'].max()      # Finding the max score in maths
```




    89




```python
math = DF[['Name','Maths']]    # Selcting multiple column
print(math)
```

         Name  Maths
    0    Mark     89
    1     Tom     87
    2  Monika     83
    3   Lilly     78
    4     Sam     77


### Column addition:


```python
DF['English'] = pd.Series([88,89,98,88,0])   # Adding a new subject English.
print(DF)
```

         Name  Maths  Science  English
    0    Mark     89       78       88
    1     Tom     87       88       89
    2  Monika     83       66       98
    3   Lilly     78        0       88
    4     Sam     77       88        0



```python
DF['Total Score'] = DF['Maths'] + DF['Science'] + DF['English']
print(DF)
```

         Name  Maths  Science  English  Total Score
    0    Mark     89       78       88          255
    1     Tom     87       88       89          264
    2  Monika     83       66       98          247
    3   Lilly     78        0       88          166
    4     Sam     77       88        0          165


### Column deletion:


```python
#Using the del function:
del DF['English']
print(DF)
```

         Name  Maths  Science  Total Score
    0    Mark     89       78          255
    1     Tom     87       88          264
    2  Monika     83       66          247
    3   Lilly     78        0          166
    4     Sam     77       88          165



```python
#Using the pop method:
DF.pop('Total Score')
print(DF)
```

         Name  Maths  Science
    0    Mark     89       78
    1     Tom     87       88
    2  Monika     83       66
    3   Lilly     78        0
    4     Sam     77       88


### Row Manipulation:

As like column, `DataFrame` have the similar operations for rows as well. Now you will see about those operations in row level in detail. You will use the same `DataFrame` DF we have created before.

### Row selection:

There are two method availabel in DataFrame for selection. They are .iloc() and .loc().

* .iloc() method is used to select based on position.
* loc() method is used to select based on the label value.

Now we will see about the .iloc() method.


```python
DF.iloc[2]              #retruns the 2nd row.
```




    Name       Monika
    Maths          83
    Science        66
    Name: 2, dtype: object




```python
type(DF.iloc[3])
```




    pandas.core.series.Series



The important thing to notice here is that it returns a series again. Not just the column is retruned as a Series , rows as well.


```python
print(DF[2:4])           # Sliceing the rows 
```

         Name  Maths  Science
    2  Monika     83       66
    3   Lilly     78        0


### Row addition:


```python
new_student = pd.DataFrame(data = [['Ben',79,89]], 
                           columns=['Name','Maths','Science'], 
                           index=[5])

DF = DF.append(new_student)             # Using the append method added a new column.
print(DF)
```

         Name  Maths  Science
    0    Mark     89       78
    1     Tom     87       88
    2  Monika     83       66
    3   Lilly     78        0
    4     Sam     77       88
    5     Ben     79       89


### Row deletion:


```python
# We delete using the drop method and we use index label for deleting:
DF.drop(3)
print(DF)
```

         Name  Maths  Science
    0    Mark     89       78
    1     Tom     87       88
    2  Monika     83       66
    3   Lilly     78        0
    4     Sam     77       88
    5     Ben     79       89


#### More Information:

[DataFrame](http://pandas.pydata.org/pandas-docs/version/0.23.4/generated/pandas.DataFrame.html)
