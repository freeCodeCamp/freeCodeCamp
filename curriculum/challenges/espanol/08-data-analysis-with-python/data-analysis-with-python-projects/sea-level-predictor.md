---
id: 5e4f5c4b570f7e3a4949899f
title: Pronosticador del nivel del mar
challengeType: 10
forumTopicId: 462370
dashedName: sea-level-predictor
---

# --description--

Estarás <a href="https://replit.com/github/freeCodeCamp/boilerplate-sea-level-predictor" target="_blank" rel="noopener noreferrer nofollow">trabajando en este proyecto con nuestro código de inicio Replit</a>.

Todavía estamos desarrollando la parte interactiva del currículo de Python. Por ahora, aquí hay algunos videos en el canal de YouTube de freeCodeCamp.org que te enseñaran todo lo que necesitas saber para completar este proyecto:

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
  Analizará un conjunto de datos sobre el cambio del nivel medio del mar a nivel mundial desde 1880. Utilizarás los datos para predecir el cambio del nivel del mar hasta el año 2050.
</p>

<p spaces-before="0">
  Utiliza los datos para completar las siguientes tareas:
</p>

<ul>
  <li>
    Utiliza Pandas para importar los datos de <code>epa-sea-level.csv</code>.
  </li>
  <li>
    Utilice matplotlib para crear un gráfico de dispersión utilizando la columna <code>Year</code> como eje x y la columna <code>CSIRO Adjusted Sea Level</code> como eje y.
  </li>
  <li>
    Usa la función <code>linregress</code> de <code>scipy.stats</code> para obtener la pendiente e intersección con el eje y de la línea de mejor encaje. Dibuja la línea de mejor encaje sobre el diagrama de dispersión. Haz que la línea pase por el año 2050 para predecir el aumento del nivel del mar en ese año.
  </li>
  <li>
    Traza una nueva línea de mejor encaje utilizando datos del año 2000 hasta el año más reciente del conjunto de datos. Haz que la línea pase también por el año 2050 para predecir la subida del nivel del mar en 2050 si el ritmo de subida continúa como desde el año 2000.
  </li>
  <li>
    La etiqueta x debe ser <code>Year</code>, la etiqueta y debe ser <code>Sea Level (pulgadas)</code> y el título debe ser <code>Rise in Sea Level</code>.
  </li>
</ul>

<p spaces-before="0">
  Las pruebas unitarias están escritas para en <code>test_module.py</code>.
</p>

<p spaces-before="0">
  El boilerplate también incluye los comandos para guardar y devolver la imagen.
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
  Importamos las pruebas de <code>test_module.py</code> a <code>main.py</code> para tu conveniencia. Las pruebas se ejecutarán automáticamente cada vez que pulses el botón "run".
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
  

<a href="https://datahub.io/core/sea-level-rise" target="_blank" rel="noopener noreferrer nofollow">Global Average Absolute Sea Level Change</a>, 1880-2014 de la Agencia de Protección Ambiental de los Estados Unidos utilizando datos de CSIRO, 2015; NOAA, 2015.
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
