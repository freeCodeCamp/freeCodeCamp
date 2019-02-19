---
title: DataFrame Operations and Methods
---

## DataFrame basic functionalities:

In the previous `DataFrame` section we had a brief look at the different ways to create a DataFrame and different manipulation operations associated with it. In this section we will go little further and perform some more operations with DataFrame.

DataFrame is a very powerful object, comes with so many pre built methods to help computation easier and we will check some of those method and get familier with them.

Lets creat a score sheet DataFrame. 


```python
import numpy as np
import pandas as pd

ran = np.random.randint
scores = {'Name': ['Mark','Tom','Lilly','Ben','Monika'],
          'Maths': ran(70,80,5),
          'Science': ran(70,90,5), 
          'English': ran(70,90,5),
          'Computer': ran(70,90,5),
          'History': ran(70,90,5)}
result = pd.DataFrame(scores)
print(result)
```

         Name  Maths  Science  English  Computer  History
    0    Mark     74       76       80        82       87
    1     Tom     72       73       75        82       81
    2   Lilly     75       81       77        76       82
    3     Ben     73       81       85        78       74
    4  Monika     79       81       85        82       74


Now our DataFrame `result` is ready. We will have a look at some of their attributes and the associated methods:

`head()`:  retruns the top 5 records. if argument is passed then it returns that many records from  the top.


```python
print(result.head(3))
```

        Name  Maths  Science  English  Computer  History
    0   Mark     74       76       80        82       87
    1    Tom     72       73       75        82       81
    2  Lilly     75       81       77        76       82


`tail()`:  retruns the bottom 5 records. if argument is passed then it returns that many records from  the bottom.


```python
print(result.tail(2))
```

         Name  Maths  Science  English  Computer  History
    3     Ben     73       81       85        78       74
    4  Monika     79       81       85        82       74


`columns`: As you might notice that we are not calling any method here because column is not a method and is a attribute of DataFrame. It stores all the column names as a index list 


```python
result.columns
```




    Index(['Name', 'Maths', 'Science', 'English', 'Computer', 'History'], dtype='object')



`index`: As like columns. DataFrames has an attribute index to store all the index label.


```python
result.index
```




    RangeIndex(start=0, stop=5, step=1)



`axes`: axes is an another attribute which stores both index and columns togeather. It depends on your need you can use any of those attributes. The returned object is a list.


```python
result.axes
```




    [RangeIndex(start=0, stop=5, step=1),
     Index(['Name', 'Maths', 'Science', 'English', 'Computer', 'History'], dtype='object')]



`dtypes`: An attribute which gives the detail of all the columns object type. 


```python
result.dtypes
```




    Name        object
    Maths        int64
    Science      int64
    English      int64
    Computer     int64
    History      int64
    dtype: object



`shape`: shape is a tuple with stores the shape of the DataFrame as (rows,columns)


```python
result.shape
```




    (5, 6)



`size`: size returns the total number of elements in a dataframe. In our `result` dataframe we have 5 rows and 6 columns i.e 5 * 6


```python
result.size
```




    30



`values`: values attribute is usefull when you want the DataFrame in a ndarray format for any computing. It returns the whole dataframe in a ndarray format.


```python
result.values
```




    array([['Mark', 74, 76, 80, 82, 87],
           ['Tom', 72, 73, 75, 82, 81],
           ['Lilly', 75, 81, 77, 76, 82],
           ['Ben', 73, 81, 85, 78, 74],
           ['Monika', 79, 81, 85, 82, 74]], dtype=object)



`empty`: empty have the value True if the DataFrame is empty else false. 


```python
result.empty
```




    False



In pandas DataFrame we have a special method `info` which provides almost all the details from the above attributs in single call. 

`info()`:  Retruns a detailes about the whole DataFrame. Including the types of the column and number of non-empty values etc. It is very handy to have a qucik glance about the DataFrame.


```python
result.info()
```

    <class 'pandas.core.frame.DataFrame'>
    RangeIndex: 5 entries, 0 to 4
    Data columns (total 6 columns):
    Name        5 non-null object
    Maths       5 non-null int64
    Science     5 non-null int64
    English     5 non-null int64
    Computer    5 non-null int64
    History     5 non-null int64
    dtypes: int64(5), object(1)
    memory usage: 320.0+ bytes


## Statistics method in pandas

Pandas is widely used in mathamatical computation. For that pandas has many bulit in methods. Now we have a breif look at some of the methods used in statistic computations. In pandas most of these methods are associated with both Series and DataFrame. Let look at them one by one.

`count()`: As the name sys count returns the total number of no-null values in a DataFrame or Series.


```python
result.count()
```




    Name        5
    Maths       5
    Science     5
    English     5
    Computer    5
    History     5
    dtype: int64



`sum()`: Sum adds all the values even the string values. As you can see in the below result, Name are concatenated it is the `operator overloading`property of python that the operator can be used with any type of operent.


```python
result.sum()
```




    Name        MarkTomLillyBenMonika
    Maths                         373
    Science                       392
    English                       402
    Computer                      400
    History                       398
    dtype: object



A logical question might arise here that what I want to know the sum of socres of each student. Yes, We can achieve that by using a argument in all the statistics method called `axis`. In `axis` we can specify in which axis(row or column) we want to sum the values. Example below:


```python
result.sum(axis=1)
```




    0    399
    1    383
    2    391
    3    391
    4    401
    dtype: int64



`mean()`: returns the mean of the values. As like sum() method we can perform both in column or row levels. It is only applied to numeric columns.  


```python
result.mean()
```




    Maths       74.6
    Science     78.4
    English     80.4
    Computer    80.0
    History     79.6
    dtype: float64



`median()`: Same as mean we have the other important statistical variale median. It retruns the medain of the values.


```python
result.median()
```




    Maths       74.0
    Science     81.0
    English     80.0
    Computer    82.0
    History     81.0
    dtype: float64



`mode()` Mode is the value which occured most of the time in a value set. 


```python
print(result['Maths'].mode())
```

    0    72
    1    73
    2    74
    3    75
    4    79
    dtype: int64


`std()`:  std or standard deviation tells us how much the values are spread across. As like mean or meidan it is applicable only to the numeric columns.


```python
result.std()
```




    Maths       2.701851
    Science     3.714835
    English     4.560702
    Computer    2.828427
    History     5.594640
    dtype: float64



`max()`: As the name says. returns the max value from a set of values. Lets find out the max score of each subjects.


```python
result.max()
```




    Name        Tom
    Maths        79
    Science      81
    English      85
    Computer     82
    History      87
    dtype: object



`min()`: Similar to max. returns the min value from a set of values. Now lets find out the least scores of each students. 


```python
result.min(axis=1)
```




    0    74
    1    72
    2    75
    3    73
    4    74
    dtype: int64



`describe()`: describe is a very handy method which gives a summary of the whole data set. It give all the above method results togeather. It is very useful to understand a the outline of the data we have.


```python
print(result.describe())
```

               Maths    Science    English   Computer   History
    count   5.000000   5.000000   5.000000   5.000000   5.00000
    mean   74.600000  78.400000  80.400000  80.000000  79.60000
    std     2.701851   3.714835   4.560702   2.828427   5.59464
    min    72.000000  73.000000  75.000000  76.000000  74.00000
    25%    73.000000  76.000000  77.000000  78.000000  74.00000
    50%    74.000000  81.000000  80.000000  82.000000  81.00000
    75%    75.000000  81.000000  85.000000  82.000000  82.00000
    max    79.000000  81.000000  85.000000  82.000000  87.00000


## Applying functions in Pandas

In this section we will see how can we apply a function to your DataFrame. This is very useful when yu have to do some modification to a column values or add some weight to whole DataFrame etc. There are two commonly used method availabel to apply a function to your dataset. They are differed as per how we can apply them. They are:

* **apply():** apply method is used to apply a function row or column wise. 
* **applymap():** applymap method applies the function element by element.

Lets check them in detail.

### apply() method:

Apply method is available in both DataFrame and Series objects. It differs based on the object. 

## apply() method in DataFrame:

When the DataFrame applied method is used it splits the DataFrame into series and passes them to the applied function. We can specify the axis to perform either row or column wise. Example below:


```python
result[['Maths','Science','English']].apply(np.mean)
```




    Maths      74.6
    Science    78.4
    English    80.4
    dtype: float64



## apply() method in Series:

When we use the `apply` method in the Series, each element is passed as a input to the function. So, you can perform only element wise operation. For instance take a scenario when you have give everyone 2 extra scores in Maths then we can use the apply method with the math score series. Example:


```python
print('Before giving the extra score: \n{}'.format(result['Maths']))

new_score = result['Maths'].apply(lambda x: x+2)
print('\nAfter giving the extra scores: \n{}'.format(new_score))

```

    Before giving the extra score: 
    0    74
    1    72
    2    75
    3    73
    4    79
    Name: Maths, dtype: int64
    
    After giving the extra scores: 
    0    76
    1    74
    2    77
    3    75
    4    81
    Name: Maths, dtype: int64


### applymap() method:

`applymap` is a DataFrame method. It is used when you have apply a fuction to all the elements in your DataFrame. It passes element by element to the applying function. Example: Lets add 2 extra scores to all the subjects.


```python
sub = result.iloc[:,1:]       #taking only the subject values not the Names

print('Before giving the extra score: \n{}'.format(sub))

new_score = sub.apply(lambda x: x+2)
print('\nAfter giving the extra scores: \n{}'.format(new_score))
```

    Before giving the extra score: 
       Maths  Science  English  Computer  History
    0     74       76       80        82       87
    1     72       73       75        82       81
    2     75       81       77        76       82
    3     73       81       85        78       74
    4     79       81       85        82       74
    
    After giving the extra scores: 
       Maths  Science  English  Computer  History
    0     76       78       82        84       89
    1     74       75       77        84       83
    2     77       83       79        78       84
    3     75       83       87        80       76
    4     81       83       87        84       76


#### More Information:

[DataFrame](http://pandas.pydata.org/pandas-docs/version/0.23.4/generated/pandas.DataFrame.html)
