---
id: 5e46f7e5ac417301a38fb929
title: Analizador de Datos Demográficos
challengeType: 10
forumTopicId: 462367
dashedName: demographic-data-analyzer
---

# --description--

Estarás <a href="https://replit.com/github/freeCodeCamp/boilerplate-demographic-data-analyzer" target="_blank" rel="noopener noreferrer nofollow">trabajando en este proyecto con nuestro código inicial en Replit</a>.

-   Comienza importando el proyecto en Replit.
-   Después verás una ventana `.replit`.
-   Selecciona `Use run command` y presiona el botón `Done`.


Todavía estamos desarrollando la parte interactiva del currículo de Python. Por el momento, aquí hay algunos videos en el canal de YouTube de freeCodeCamp.org que te enseñaran todo lo que necesitas saber para completar este proyecto:

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Curso en video Python para todos</a> (14 horas)

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow">Como analizar datos con Python y Pandas</a> (10 horas)

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

- ¿Cuántas personas de cada raza están representadas en este set de datos? This should be a Pandas series with race names as the index labels. (columna `race`)
- ¿Cuál es la edad promedio de los hombres?
- ¿Cuál es el porcentaje de personas que tienen un grado de licenciatura (Bachelor's degree)?
- ¿Qué porcentaje de personas con una educación avanzada (`Bachelors`, `Masters` o `Doctorate`) ganan más de 50k?
- ¿Qué porcentaje de personas sin una educación avanzada generan más de 50k?
- ¿Cuál es el mínimo número de horas que una persona trabaja por semana?
- ¿Qué porcentaje de personas que trabajan el mínimo de horas por semana tiene un salario de más de 50k?
- ¿Qué país tiene el porcentaje más alto de personas que ganan >50k y cuál es ese porcentaje?
- Identifica la ocupación más popular de aquellos que ganan >50k en India.

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
