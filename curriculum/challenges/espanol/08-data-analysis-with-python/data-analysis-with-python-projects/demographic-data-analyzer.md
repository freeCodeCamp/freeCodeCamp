---
id: 5e46f7e5ac417301a38fb929
title: Analizador de Datos Demográficos
challengeType: 10
forumTopicId: 462367
dashedName: demographic-data-analyzer
---

# --description--

Estarás <a href="https://replit.com/github/freeCodeCamp/boilerplate-demographic-data-analyzer" target="_blank" rel="noopener noreferrer nofollow">trabajando en este proyecto con nuestro código inicial en Replit</a>.

-   Start by importing the project on Replit.
-   Next, you will see a `.replit` window.
-   Select `Use run command` and click the `Done` button.


Todavía estamos desarrollando la parte interactiva del currículo de Python. Por el momento, aquí hay algunos videos en el canal de YouTube de freeCodeCamp.org que te enseñaran todo lo que necesitas saber para completar este proyecto:

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Python for Everybody Video Course</a> (14 hours)

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow">How to Analyze Data with Python Pandas</a> (10 hours)

# --instructions--

En este desafío debe analizar los datos demográficos usando Pandas. Se le da un conjunto de datos demográficos que fueron extraidos de la base de datos del censo de 1994. Aquí hay un ejemplo de cómo se debería ver:

```markdown
|    |   age | workclass        |   fnlwgt | education   |   education-num | marital-status     | occupation        | relationship   | race   | sex    |   capital-gain |   capital-loss |   hours-per-week | native-country   | salary   |
|---:|------:|:-----------------|---------:|:------------|----------------:|:-------------------|:------------------|:---------------|:-------|:-------|---------------:|---------------:|-----------------:|:-----------------|:---------|
|  0 |    39 | State-gov        |    77516 | Bachelors   |              13 | Never-married      | Adm-clerical      | Not-in-family  | White  | Male   |           2174 |              0 |               40 | United-States    | <=50K    |
|  1 |    50 | Self-emp-not-inc |    83311 | Bachelors   |              13 | Married-civ-spouse | Exec-managerial   | Husband        | White  | Male   |              0 |              0 |               13 | United-States    | <=50K    |
|  2 |    38 | Private          |   215646 | HS-grad     |               9 | Divorced           | Handlers-cleaners | Not-in-family  | White  | Male   |              0 |              0 |               40 | United-States    | <=50K    |
|  3 |    53 | Private          |   234721 | 11th        |               7 | Married-civ-spouse | Handlers-cleaners | Husband        | Black  | Male   |              0 |              0 |               40 | United-States    | <=50K    |
|  4 |    28 | Private          |   338409 | Bachelors   |              13 | Married-civ-spouse | Prof-specialty    | Wife           | Black  | Female |              0 |              0 |               40 | Cuba             | <=50K    |
```

Debes usar Pandas para responder a las siguientes preguntas:

- How many people of each race are represented in this dataset? This should be a Pandas series with race names as the index labels. (`race` column)
- What is the average age of men?
- What is the percentage of people who have a Bachelor's degree?
- What percentage of people with advanced education (`Bachelors`, `Masters`, or `Doctorate`) make more than 50K?
- What percentage of people without advanced education make more than 50K?
- What is the minimum number of hours a person works per week?
- What percentage of the people who work the minimum number of hours per week have a salary of more than 50K?
- What country has the highest percentage of people that earn >50K and what is that percentage?
- Identify the most popular occupation for those who earn >50K in India.

Utilice el código de inicio en el archivo `demographic_data_analyzer`. Actualice el código para que todas las variables definidas como "None" se establezcan al cálculo o código apropiado. Redondea todos los decimales a la décima más cercana.

Las pruebas unitarias están escritas para ti en `test_module.py`.

## Desarrollo

Para el desarrollo, puedes utilizar `main.py` para probar tus funciones. Haz clic en el botón "run" y se ejecutará `main.py`.

## Pruebas

Importamos las pruebas de `test_module.py` a `main.py` para tu conveniencia. Las pruebas se ejecutarán automáticamente cada vez que presiones el botón "run".

## Envío

Copia el enlace de tu proyecto y envíalo a freeCodeCamp.

## Fuente de datos

Dua, D. y Graff, C. (2019). <a href="http://archive.ics.uci.edu/ml" target="_blank" rel="noopener noreferrer nofollow">UCI Machine Learning Repositorio</a>. Irvine, CA: University of California, School of Information and Computer Science.

# --hints--

Debería pasar todas las pruebas de Python.

```js

```

# --solutions--

```py
  # Python challenges don't need solutions,
  # because they would need to be tested against a full working project.
  # Please check our contributing guidelines to learn more.
```
