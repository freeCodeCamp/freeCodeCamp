---
title: pandas
localeTitle: pandas
---
![Everybody loves pandas!](https://pandas.pydata.org/_static/pandas_logo.png "pandas")

## pandas

[pandas](http://pandas.pydata.org/) es una biblioteca de Python para el análisis de datos utilizando marcos de datos. Los marcos de datos son tablas de datos, que pueden compararse conceptualmente con una hoja de cálculo. Los científicos de datos familiarizados con R se sentirán como en casa aquí. Los pandas se usan a menudo junto con adormecimiento, pirplot, y scikit-learn.

### Importando pandas

Es una convención muy utilizada para importar la biblioteca de pandas usando el alias `pd` :

```python
import pandas as pd 
```

## Marcos de datos

Un marco de datos consta de un número de filas y columnas. Cada columna representa una característica del conjunto de datos, por lo que tiene un nombre y un tipo de datos. Cada fila representa un punto de datos a través de valores de características asociados. La biblioteca de pandas le permite manipular los datos en un marco de datos de varias maneras. Los pandas tienen muchas posibilidades, por lo que lo siguiente es simplemente rascar la superficie para dar una idea de la biblioteca.

## Serie

Series es el tipo de datos básico en pandas. Una serie es muy similar a una matriz (matriz NumPy) (de hecho, se construye sobre el objeto de matriz NumPy). Una serie puede tener etiquetas de eje, ya que puede ser indexada por una etiqueta sin indización numérica para la ubicación de los datos. Puede contener cualquier objeto Python válido como Lista, Diccionario, etc.

## Cargando datos de un archivo csv

Un archivo `.csv` es un archivo de _valores separados por comas_ . Una forma muy común de almacenar datos. Para cargar dichos datos en un marco de datos de pandas, use el método `read_csv` :

```python
df = pd.read_csv(file_path) 
```

Aquí, `file_path` puede ser una ruta local a un archivo csv en su computadora, o una URL que apunta a una. Los nombres de las columnas pueden incluirse en el archivo csv, o pueden pasarse como un argumento. Para más información sobre esto y mucho más, eche un vistazo a la [documentación](http://pandas.pydata.org/pandas-docs/stable/generated/pandas.read_csv.html?highlight=read_csv#pandas.read_csv) .

## Obtener una visión general de un marco de datos

Para mostrar las primeras filas de un marco de datos, el método `head` es útil (una vez más, esto debería sonar familiar para los programadores R):

```python
df.head() 
```

Esto mostrará las primeras 5 filas del marco de datos.

Para mostrar más de las primeras 5 filas, simplemente ingrese el número de filas que desea imprimir dentro del método de `head` .

```python
df.head(10) 
```

Esto mostrará las primeras 10 filas del marco de datos.

Para mostrar las últimas filas de un marco de datos, el método de `tail` es útil (una vez más, esto debería sonar familiar para los programadores de R):

```python
df.tail() 
```

Esto mostrará las últimas 5 filas del marco de datos.

## Subsetting: Obtención de una columna por nombre

Un marco de datos puede ser subconjunto de muchas maneras. Uno de los más sencillos es conseguir una sola columna. Por ejemplo, si el marco de datos `df` contiene una columna llamada `age` , podemos extraerla de la siguiente manera:

```python
ages=df["age"] 
```

#### Más información:

1.  [pandas](http://pandas.pydata.org/)
2.  [read\_csv](http://pandas.pydata.org/pandas-docs/stable/generated/pandas.read_csv.html?highlight=read_csv#pandas.read_csv)
3.  [cabeza](http://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.head.html?highlight=head#pandas.DataFrame.head)