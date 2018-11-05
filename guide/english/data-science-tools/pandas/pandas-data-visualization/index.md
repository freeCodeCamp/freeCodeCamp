---
title: pandas Data Visualization
---

## Data Visualization in pandas

Data visualization is one of the technique which provides an option to understand the data and also gives important insight about any data. Previous sections explained on  how you can work with data in pandas. In this section you will look at some of the method which helps you to visualize those data. Even though there are specific libraries available for visualization like `matplotlib`, `seaborn` etc. pandas visualization is a quick way of glancing the data. In fact pandas visualization is built on top of `matplotlib` as well.

Typically pandas visualization is used for basic plotting like line,histogram,scatter. It is recommended to use the other specialized tools for more detailed and customized visualizations. The advantage with pandas visualization is that we can plot straight away from the DataFrame or the series. It is syntactically very easy.

As like in the previous `pandas-operation` tutorial you are not going to create your own data set. You are going to use the very famous [iris data-set](https://en.wikipedia.org/wiki/Iris_flower_data_set). The reason to use this data set is that it is real data set and you can see how visualization helps to understand any data-set. You are going to load it from seaborn(internet required).


```python
#loading the data set from seaborn
import seaborn as sns
iris = sns.load_dataset('iris')
```

This data set is about 3 flowers. The features you have are the length and width of both the petal and sepal of the flowers. Lets look at some records.


```python
print(iris.head())
```

Now, You can use the info() method which you have used in the previous section to get some understanding about the data set. 


```python
iris.info()
```

It says that you have 150 records, 5 columns in that 4 of them are floats and 1 as object and it does not have any null values.


```python
import pandas as pd 
import matplotlib.pyplot as plt                 # using pandas DV with matplotlib provides extra grapical effects.  
```

`plot`: In pandas all the different plots can be accessed from a single method called plot. In the below example we will plot a line using the `line()` function in `plot`. 


```python
iris.plot.line()
```

<img src="https://github.com/harikrishnand/freecodecamp_images/blob/master/DF_line_plot.png" width="400" height="300" />

As mentioned above using pandas for visualization is syntactical very handy. `DataFrame/series.plot.<type of the plot>`


```python
#plotting based on series:

iris['sepal_length'].plot.line()
```

<img src="https://github.com/harikrishnand/freecodecamp_images/blob/master/Ser_line_plot.png" width="400" height="300" />

Pandas take all the matplotlib argument as part of keyword arguments. You can change the size of the figure using the `figsize` argument in matplotlib.


```python
iris.plot.line(figsize = (12,4))
```

<img src="https://github.com/harikrishnand/freecodecamp_images/blob/master/DF_fig_size.png" width="800" height="300" />

`hist()` : To plot a histograms you can use the hist function. It takes the regular argument bin size as well.


```python
iris.plot.hist()
```

<img src="https://github.com/harikrishnand/freecodecamp_images/blob/master/DF_hist.png" width="400" height="300" />


```python
iris.plot.hist(bins=20,figsize=(8,4),alpha = .7)     #alpha argument is used for transparency
```

<img src="https://github.com/harikrishnand/freecodecamp_images/blob/master/hist_alpha.png" width="400" height="300" />

`scatter`: scatter is another type of plot which can provides relation between different features. It takes 2 important argument x,y as column names.


```python
iris.plot.scatter(x='sepal_length',y='petal_length')
```

<img src="https://github.com/harikrishnand/freecodecamp_images/blob/master/DF_scatter.png" width="400" height="300" />

`scatter` takes a 3rd variable in c argument and plots the color ratio as per the value. 


```python
iris.plot.scatter(x='sepal_length',y='sepal_width',c='petal_length')
```

<img src="https://github.com/harikrishnand/freecodecamp_images/blob/master/DF_scatter_c.png" width="400" height="300" />

`scatter` can take the 3rd variable in the form of size as well but it must be a series not a column name. Example below:


```python
iris.plot.scatter(x='sepal_length',y='sepal_width',s=iris['petal_length']*15)
```

<img src="https://github.com/harikrishnand/freecodecamp_images/blob/master/DF_scatter_s.png" width="400" height="300" />

`plot()` : plot is a pandas method which allows all the above plots to be plot from a single place. It has a argument `kind` which takes the type of the plot like line/hist/scatter etc.


```python
iris.plot(kind='line',figsize=(12,4))
```

<img src="https://github.com/harikrishnand/freecodecamp_images/blob/master/plot_method.png" width="400" height="300" />

#### More Information:

[plot.line](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.plot.line.html)

[plot.hist](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.plot.hist.html)

[plot.scatter](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.plot.scatter.html)

[pandas plot](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.plot.html)
