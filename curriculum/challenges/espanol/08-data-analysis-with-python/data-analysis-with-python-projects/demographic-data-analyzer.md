---
id: 5e46f7e5ac417301a38fb929
title: Analizador de Datos Demográficos
challengeType: 10
forumTopicId: 462367
dashedName: demographic-data-analyzer
---

# --description--

Estarás <a href="https://replit.com/github/freeCodeCamp/boilerplate-demographic-data-analyzer" target="_blank" rel="noopener noreferrer nofollow">trabajando en este proyecto con nuestro código inicial en Replit</a>.

Todavía estamos desarrollando la parte interactiva del currículo de Python. Por el momento, aquí hay algunos videos en el canal de YouTube de freeCodeCamp.org que te enseñaran todo lo que necesitas saber para completar este proyecto:

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Curso de video de Python para todos< /a>(14 horas)</p></li> 
  
  <li>
    <p spaces-before="0">
      <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow">Cómo analizar datos con Python Pandas</a> (10 horas)
    </p>
  </li></ul>

<h1 spaces-before="0">
  --instructions--
</h1>

<p spaces-before="0">
  En este desafío debe analizar los datos demográficos usando Pandas. Se le da un conjunto de datos demográficos que fueron extraidos de la base de datos del censo de 1994. Aquí hay un ejemplo de cómo se debería ver:
</p>

<pre><code class="markdown">|    |   age | workclass        |   fnlwgt | education   |   education-num | marital-status     | occupation        | relationship   | race   | sex    |   capital-gain |   capital-loss |   hours-per-week | native-country   | salary   |
|---:|------:|:-----------------|---------:|:------------|----------------:|:-------------------|:------------------|:---------------|:-------|:-------|---------------:|---------------:|-----------------:|:-----------------|:---------|
|  0 |    39 | State-gov        |    77516 | Bachelors   |              13 | Never-married      | Adm-clerical      | Not-in-family  | White  | Male   |           2174 |              0 |               40 | United-States    | &lt;=50K    |
|  1 |    50 | Self-emp-not-inc |    83311 | Bachelors   |              13 | Married-civ-spouse | Exec-managerial   | Husband        | White  | Male   |              0 |              0 |               13 | United-States    | &lt;=50K    |
|  2 |    38 | Private          |   215646 | HS-grad     |               9 | Divorced           | Handlers-cleaners | Not-in-family  | White  | Male   |              0 |              0 |               40 | United-States    | &lt;=50K    |
|  3 |    53 | Private          |   234721 | 11th        |               7 | Married-civ-spouse | Handlers-cleaners | Husband        | Black  | Male   |              0 |              0 |               40 | United-States    | &lt;=50K    |
|  4 |    28 | Private          |   338409 | Bachelors   |              13 | Married-civ-spouse | Prof-specialty    | Wife           | Black  | Female |              0 |              0 |               40 | Cuba             | &lt;=50K    |
</code></pre>

<p spaces-before="0">
  Debes usar Pandas para responder a las siguientes preguntas:
</p>

<ul>
  <li>
    ¿Cuántas personas de cada raza están representadas en este dataset? Esta debería ser una Pandas series con nombres de raza como las etiquetas de índice. (columna <code>race</code>)
  </li>
  <li>
    ¿Cuál es la edad promedio de los hombres?
  </li>
  <li>
    ¿Cuál es el porcentaje de personas que tienen un grado de licenciatura?
  </li>
  <li>
    ¿Que porcentaje de personas con una educación avanzada (<code>Bachelors</code>, <code>Masters</code> o <code>Doctorate</code>) generan mas de 50k?
  </li>
  <li>
    ¿Que porcentaje de personas sin una educación avanzada generan mas de 50k?
  </li>
  <li>
    ¿Cuál es el mínimo número de horas que una persona trabaja por semana?
  </li>
  <li>
    ¿Qué porcentaje de personas que trabajan el minimo de horas por semana tienen un salario de mas de 50k?
  </li>
  <li>
    ¿Qué país tiene el mas alto porcentaje de personjas que ganan >50k y cual es ese porcentaje?
  </li>
  <li>
    Identifica la ocupacion mas popular de aquellos que ganan >50k en India.
  </li>
</ul>

<p spaces-before="0">
  Utilice el código de inicio en el archivo <code>demographic_data_analyzer</code>. Actualice el código para que todas las variables definidas como "None" se establezcan al cálculo o código apropiado. Redondea todos los decimales a la décima más cercana.
</p>

<p spaces-before="0">
  Las pruebas unitarias están escritas para ti en <code>test_module.py</code>.
</p>

<h2 spaces-before="0">
  Desarrollo
</h2>

<p spaces-before="0">
  Para el desarrollo, puedes utilizar <code>main.py</code> para probar tus funciones. Haz clic en el botón "run" y se ejecutará <code>main.py</code>.
</p>

<h2 spaces-before="0">
  Pruebas
</h2>

<p spaces-before="0">
  Importamos las pruebas de <code>test_module.py</code> a <code>main.py</code> para tu conveniencia. Las pruebas se ejecutarán automáticamente cada vez que presiones el botón "run".
</p>

<h2 spaces-before="0">
  Envío
</h2>

<p spaces-before="0">
  Copia el enlace de tu proyecto y envíalo a freeCodeCamp.
</p>

<h2 spaces-before="0">
  Fuente de datos
</h2>

<p spaces-before="0">
  Dua, D. y Graff, C. (2019). <a href="http://archive.ics.uci.edu/ml" target="_blank" rel="noopener noreferrer nofollow">UCI Machine Learning Repositorio</a>. Irvine, CA: University of California, School of Information and Computer Science.
</p>

<h1 spaces-before="0">
  --hints--
</h1>

<p spaces-before="0">
  Debería pasar todas las pruebas de Python.
</p>

<pre><code class="js">
</code></pre>

<h1 spaces-before="0">
  --solutions--
</h1>

<pre><code class="py">  # Python challenges don't need solutions,
  # because they would need to be tested against a full working project.
  # Please check our contributing guidelines to learn more.
</code></pre>
