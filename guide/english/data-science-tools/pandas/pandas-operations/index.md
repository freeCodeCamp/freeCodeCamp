---
title: pandas Operations
---

## Pandas Operations

In the previous sections we have looked at what are the main objects in pandas and their relative basic operations. In this section we will have a look at how can we do more advanced operation with the pandas objects. In the real life secnarios we might have a data set of thousands of records with many columns. It is important to know how can we maipulate them to get some insight about the dataset.

## Handling missing data

One of the main challenge in machine learning or computation is the quality of the data. It is often common that in a survey people doesn't answer all the question and it creates missing data. It is important to have a quality data for EDA or to use for prediction. Pandas provides bulit-in methods to handle missing data. We will have a look at some of them.  

Lets create a example data set with some missing data.


```python
import numpy as np
import pandas as pd

scores = pd.DataFrame(data=np.random.randint(75,95,(5,5)), 
                      index= ['Mark','Tom','Ben','Monika','Lilly'],
                      columns= ['Maths','Science','English','Computer','History'])

scores = scores.reindex(index = ['Mark','Tom','Sam','Ben','Monika','Isman','Lilly'])    # We added 2 more students and they have no information.
print(scores)
```

            Maths  Science  English  Computer  History
    Mark     90.0     84.0     77.0      91.0     82.0
    Tom      79.0     90.0     89.0      87.0     78.0
    Sam       NaN      NaN      NaN       NaN      NaN
    Ben      80.0     87.0     86.0      75.0     76.0
    Monika   83.0     91.0     92.0      82.0     78.0
    Isman     NaN      NaN      NaN       NaN      NaN
    Lilly    75.0     93.0     80.0      83.0     85.0
    

To detect the missing values easier across different dtype, Pandas provide two functions:

`isnull()`

`notnull()`


`isnull()`:  retruns true when the element is null else false.


```python
scores['Maths'].isnull()
```




    Mark      False
    Tom       False
    Sam        True
    Ben       False
    Monika    False
    Isman      True
    Lilly     False
    Name: Maths, dtype: bool



`notnull()`:  retruns true when the element is not null else false.


```python
scores['Maths'].notnull()
```




    Mark       True
    Tom        True
    Sam       False
    Ben        True
    Monika     True
    Isman     False
    Lilly      True
    Name: Maths, dtype: bool




```python
scores['Maths'].sum()       #NaN is treated as 0 in numeric type columns.
```




    407.0



## Filling Missing Data

Pandas provides various function to fill the missing data. As per our requirement we can use any of the method.

`fillna()` :  fillna can be used to update any scalar value to the NaN columns. In the below example we can see that the null values are updated with a scalar value 85.


```python
scores['Computer'].fillna(85)
```




    Mark      91.0
    Tom       87.0
    Sam       85.0
    Ben       75.0
    Monika    82.0
    Isman     85.0
    Lilly     83.0
    Name: Computer, dtype: float64



There are two fill methods availabels which can be used to fill the previous or the next value. Let see some example.

`pad`: fill method will fill the previous value. In the below example we can see that the previous Tom's score is updated to Sam. Same for Isman.


```python
scores['Maths'].fillna(method = 'pad')
```




    Mark      90.0
    Tom       79.0
    Sam       79.0
    Ben       80.0
    Monika    83.0
    Isman     83.0
    Lilly     75.0
    Name: Maths, dtype: float64



`backfill` : Similar to pad method but now the next value is used to fill the previous null element. In the below example now Ben's score is updated to Sam.


```python
scores['Maths'].fillna(method = 'bfill')
```




    Mark      90.0
    Tom       79.0
    Sam       80.0
    Ben       80.0
    Monika    83.0
    Isman     75.0
    Lilly     75.0
    Name: Maths, dtype: float64



This both methods might not make sence in the above score sheet example. This is very useful in case of time series data sets. If you consider a stock data you may have to fill some days value with the previous day or next day values.

`dropna()` : dropna is another handy function which we can use when you want to exclude the whole row or column. It drops the whole column or row as per the axis argument by default axis=0(row). 


```python
No_null_score = scores.dropna()
print(No_null_score)
```

            Maths  Science  English  Computer  History
    Mark     90.0     84.0     77.0      91.0     82.0
    Tom      79.0     90.0     89.0      87.0     78.0
    Ben      80.0     87.0     86.0      75.0     76.0
    Monika   83.0     91.0     92.0      82.0     78.0
    Lilly    75.0     93.0     80.0      83.0     85.0
    

## Pandas Groupby

Now we know how we can handle the missing data in our dataset next we move on to group them. Pandas provides a groupby function which we can use to group based on any column value. It is very useful when you have large dataset and you want to group them based on some categorical vaule and process them in small chunks. We usually perform 3 main operation using groupby Aggregation, Transformation and Filtration.

To understand groupby this time we are not going to create a dataset instead we are going to load a dataset from the famous seaborn library. Seaborn is a library used for data visualization. Seaborn have few bult-in datasets in their library we will one of them called tips. `tips` is a dataset which represent tips detail in a restaurant. 


```python
import seaborn as sns
dataframe = sns.load_dataset(name = 'tips')
print(dataframe.head())
```

       total_bill   tip     sex smoker  day    time  size
    0       16.99  1.01  Female     No  Sun  Dinner     2
    1       10.34  1.66    Male     No  Sun  Dinner     3
    2       21.01  3.50    Male     No  Sun  Dinner     3
    3       23.68  3.31    Male     No  Sun  Dinner     2
    4       24.59  3.61  Female     No  Sun  Dinner     4
    

Lets split them into groups based on sex. groupby is a dataframe method. It has a by argument which takes the column names based on which the grouping is done. Grouping can be done based on single column or more than one column. The grouping method returns a instance of groupby that instance can be used to further analyze the group 


```python
grouped = dataframe.groupby(by='sex')
print(grouped)
```

    <pandas.core.groupby.groupby.DataFrameGroupBy object at 0x7f1a175980f0>
    


```python
multi_group = dataframe.groupby(by=['sex','smoker'])        # grouping based on multiple columns
print(multi_group)
```

    <pandas.core.groupby.groupby.DataFrameGroupBy object at 0x7f1a0ec2ca58>
    

`groups` : Using groups you can check the group details. It returns a dictionary with name as the value and it's associated indexs. In the below example we can two groups Male and Female. The values are the index of the records.


```python
grouped.groups
```




    {'Male': Int64Index([  1,   2,   3,   5,   6,   7,   8,   9,  10,  12,
                 ...
                 231, 232, 233, 234, 235, 236, 237, 239, 241, 242],
                dtype='int64', length=157),
     'Female': Int64Index([  0,   4,  11,  14,  16,  18,  21,  22,  29,  32,  33,  37,  51,
                  52,  57,  66,  67,  71,  72,  73,  74,  82,  85,  92,  93,  94,
                 100, 101, 102, 103, 104, 109, 111, 114, 115, 117, 118, 119, 121,
                 124, 125, 127, 128, 131, 132, 133, 134, 135, 136, 137, 139, 140,
                 143, 144, 145, 146, 147, 155, 157, 158, 162, 164, 168, 169, 178,
                 186, 188, 191, 197, 198, 201, 202, 203, 205, 209, 213, 214, 215,
                 219, 221, 223, 225, 226, 229, 238, 240, 243],
                dtype='int64')}



`get_group` : Using get_group you can get a specific group based on the name. It retruns as a dataframe.


```python
print(grouped.get_group('Male').sample(5))
```

         total_bill   tip   sex smoker   day    time  size
    181       23.33  5.65  Male    Yes   Sun  Dinner     2
    6          8.77  2.00  Male     No   Sun  Dinner     2
    87        18.28  4.00  Male     No  Thur   Lunch     2
    64        17.59  2.64  Male     No   Sat  Dinner     3
    76        17.92  3.08  Male    Yes   Sat  Dinner     2
    

Iterating a grouped instance. As grouped instance retruns a dict. We can use for loop to iterate them. Example:


```python
for name,DF in grouped:
    print('Group Name: {}'.format(name))
    print(DF.sample(2))
    print('\n')
```

    Group Name: Male
         total_bill  tip   sex smoker  day    time  size
    216       28.15  3.0  Male    Yes  Sat  Dinner     5
    189       23.10  4.0  Male    Yes  Sun  Dinner     3
    
    
    Group Name: Female
         total_bill   tip     sex smoker  day    time  size
    238       35.83  4.67  Female     No  Sat  Dinner     3
    21        20.29  2.75  Female     No  Sat  Dinner     2
    
    
    

### Applying Aggregate functions

One of the use of grouping is to apply aggregate function to the groups. Example: here we are applying sum function to our groups and it retruns group level sum. We can see the total bill paid both Male and Female. We can apply different aggregation functions ex: np.mean,np.sum or custom functions.


```python
print(grouped.agg(np.sum))
```

            total_bill     tip  size
    sex                             
    Male       3256.82  485.07   413
    Female     1570.95  246.51   214
    


```python
grouped['tip'].agg(np.mean)              #average tips given by male and female.
```




    sex
    Male      3.089618
    Female    2.833448
    Name: tip, dtype: float64



`filter`:  filter is a function used to filter the records from the group as per some criteria. Example below:


```python
res = grouped.filter(lambda x: len(x) > 100)
print(res.head())
```

       day  size smoker    time   tip  total_bill
    1  Sun     3     No  Dinner  1.66       10.34
    2  Sun     3     No  Dinner  3.50       21.01
    3  Sun     2     No  Dinner  3.31       23.68
    5  Sun     4     No  Dinner  4.71       25.29
    6  Sun     2     No  Dinner  2.00        8.77
    

## Joins in Pandas

Pandas provides a powerfull, in memory merging or join function. It is used to join or merge dataframes based on columns. It is very similar to releational database join operation.

All the merge/join operation can be done from a singe function called pd.merge(). It has many arguments to perform as per our requirement. Syntax below:


```python
pd.merge(left, right, how='inner', on=None, 
         left_on=None, right_on=None, 
         left_index=False, right_index=False, 
         sort=False, suffixes=('_x', '_y'), 
         copy=True, indicator=False, validate=None)
```

`left` : a DataFrame

`right` : another DataFrame

`on` : column names to join on. Must be present on both DataFrames

`how` : this is to give the traditional join options like left.right,outer,inner

Lets create two dataframes namely left, right for easy understanding:


```python
right = pd.DataFrame({'Name': ['Mark','Tom','Clair','Blair'],
                      'Id' : [11,22,33,44],
                     'Math' : [69,78,88,79]
                     })
left = pd.DataFrame({'Name': ['Mark','Spencer','Blair','Tom'],
                     'Id'  : [11,55,44,22],
                     'Science' : [88,89,77,69]
                    })
print(left)
print('\n',right)
```

          Name  Id  Science
    0     Mark  11       88
    1  Spencer  55       89
    2    Blair  44       77
    3      Tom  22       69
    
         Name  Id  Math
    0   Mark  11    69
    1    Tom  22    78
    2  Clair  33    88
    3  Blair  44    79
    

Now we can use the merge mthod to join both the DataFrame based on Id. You can see that by default it is a inner join and the Id which matched are joined into a new DataFrame.


```python
mark_sheet = pd.merge(left,right,on = 'Id') 
print(mark_sheet)
```

      Name_x  Id  Science Name_y  Math
    0   Mark  11       88   Mark    69
    1  Blair  44       77  Blair    79
    2    Tom  22       69    Tom    78
    


```python
mark_sheet = pd.merge(left,right,on = ['Id','Name'])        # Merged based on multiple columns.
print(mark_sheet)
```

        Name  Id  Science  Math
    0   Mark  11       88    69
    1  Blair  44       77    79
    2    Tom  22       69    78
    

You can join based on the index as well. Example below: You can see that we merged based on the index and all the column from both the dataframes are  added.


```python
mark_sheet = pd.merge(left,right,left_index= True,right_index= True)
print(mark_sheet)
```

        Name_x  Id_x  Science Name_y  Id_y  Math
    0     Mark    11       88   Mark    11    69
    1  Spencer    55       89    Tom    22    78
    2    Blair    44       77  Clair    33    88
    3      Tom    22       69  Blair    44    79
    

`outer` : outer value on how argument perfroms the same as in sql. If key matches then merges the records and it adds the extra records from the right dataframe.


```python
mark_sheet = pd.merge(left,right,on = 'Id', how = 'outer')
print(mark_sheet)
```

        Name_x  Id  Science Name_y  Math
    0     Mark  11     88.0   Mark  69.0
    1  Spencer  55     89.0    NaN   NaN
    2    Blair  44     77.0  Blair  79.0
    3      Tom  22     69.0    Tom  78.0
    4      NaN  33      NaN  Clair  88.0
    

#### More Information:

[DataFrame.fillna](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.fillna.html)

[DataFrame.groupby](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.groupby.html)

[DataFrame.merge](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.merge.html)
