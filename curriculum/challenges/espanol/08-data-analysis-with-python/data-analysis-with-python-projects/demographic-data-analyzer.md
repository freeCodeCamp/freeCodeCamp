---
id: 5e46f7e5ac417301a38fb929
title: Analizador de Datos Demográficos
challengeType: 10
forumTopicId: 462367
dashedName: demographic-data-analyzer
---

# --description--

Trabajarás [este proyecto utilizando nuestro código inicial Replit](https://replit.com/github/freeCodeCamp/boilerplate-demographic-data-analyzer).

Todavía estamos desarrollando la parte interactiva del currículo de Python. Por el momento, aquí hay algunos videos en el canal de YouTube de freeCodeCamp.org que te enseñaran todo lo que necesitas saber para completar este proyecto:

- [Curso de vídeo de Python para todos](https://www.freecodecamp.org/news/python-for-everybody/) (14 horas)
- [Curso de vídeo para aprender Python](https://www.freecodecamp.org/news/learn-python-video-course/) (10 horas)

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

- ¿Cuántas personas de cada raza están representadas en este dataset? Esta debería ser una Pandas series con nombres de raza como las etiquetas de índice. (columna `race`)
- ¿Cuál es la edad promedio de los hombres?
- ¿Cuál es el porcentaje de personas que tienen un grado de licenciatura?
- ¿Que porcentaje de personas con una educación avanzada (`Bachelors`, `Masters` o `Doctorate`) generan mas de 50k?
- ¿Que porcentaje de personas sin una educación avanzada generan mas de 50k?
- ¿Cuál es el mínimo número de horas que una persona trabaja por semana?
- ¿Qué porcentaje de personas que trabajan el minimo de horas por semana tienen un salario de mas de 50k?
- ¿Qué país tiene el mas alto porcentaje de personjas que ganan >50k y cual es ese porcentaje?
- Identifica la ocupacion mas popular de aquellos que ganan >50k en India.

Utilice el código de inicio en el archivo `demographic_data_analyzer`. Actualice el código para que todas las variables definidas como "None" se establezcan al cálculo o código apropiado. Redondea todos los decimales a la décima más cercana.

Las pruebas unitarias están escritas para ti en `test_module.py`.

## Desarrollo

Para el desarrollo, puedes utilizar `main.py` para probar tus funciones. Haz clic en el botón "run" y se ejecutará `main.py`.

## Pruebas

Importamos las pruebas de `test_module.py` a `main.py` para tu conveniencia. Las pruebas se ejecutarán automáticamente cada vez que presiones el botón "run".

## Envío

Copia el enlace de tu proyecto y envíalo a freeCodeCamp.

## Fuente de datos

Dua, D. y Graff, C. (2019). [UCI Machine Learning Repository](http://archive.ics.uci.edu/ml). Irvine, CA: University of California, School of Information and Computer Science.

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
