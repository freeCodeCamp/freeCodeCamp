---
id: 5e46f7e5ac417301a38fb928
title: Calculadora de varianza, desviación media, y estándar
challengeType: 10
forumTopicId: 462366
dashedName: mean-variance-standard-deviation-calculator
---

# --description--

Estarás <a href="https://replit.com/github/freeCodeCamp/boilerplate-mean-variance-standard-deviation-calculator" target="_blank" rel="noopener noreferrer nofollow" mark="crwd-mark ">trabajando en este proyecto con nuestro código de inicio Replit</a>.

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
  Crea una función llamada <code>calculate()</code> en <code>mean_var_std.py</code> que usa Numpy para producir la media, varianza, desviación estándar, max, min, y suma de las filas, columnas y elementos en una matriz de 3 x 3.
</p>

<p spaces-before="0">
  La entrada de la función debe ser una lista que contenga 9 dígitos. La función debe convertir la lista en una matriz numérica de 3 x 3, y luego devolver un diccionario que contenga la media, varianza, desviación estándar, max, min, y suma a lo largo de ambos ejes y para la matriz aplanada.
</p>

<p spaces-before="0">
  El diccionario retornado debería seguir este formato:
</p>

<pre><code class="py">{
  'mean': [axis1, axis2, flattened],
  'variance': [axis1, axis2, flattened],
  'standard deviation': [axis1, axis2, flattened],
  'max': [axis1, axis2, flattened],
  'min': [axis1, axis2, flattened],
  'sum': [axis1, axis2, flattened]
}
</code></pre>

<p spaces-before="0">
  Si una lista que contiene menos de 9 elementos es pasada a la función, debería levantar una excepción de <code>ValueError</code> con el mensaje: "La lista debe contener nueve números". Los valores en el diccionario devuelto deben ser listas y no matrices Numpy.
</p>

<p spaces-before="0">
  Por ejemplo, <code>calculate([0,1,2,3,4,5,6,7,8])</code> debe regresar:
</p>

<pre><code class="py">{
  'mean': [[3.0, 4.0, 5.0], [1.0, 4.0, 7.0], 4.0],
  'variance': [[6.0, 6.0, 6.0], [0.6666666666666666, 0.6666666666666666, 0.6666666666666666], 6.666666666666667],
  'standard deviation': [[2.449489742783178, 2.449489742783178, 2.449489742783178], [0.816496580927726, 0.816496580927726, 0.816496580927726], 2.581988897471611],
  'max': [[6, 7, 8], [2, 5, 8], 8],
  'min': [[0, 1, 2], [0, 3, 6], 0],
  'sum': [[9, 12, 15], [3, 12, 21], 36]
}
</code></pre>

<p spaces-before="0">
  Las pruebas unitarias para este proyecto están en <code>test_module.py</code>.
</p>

<h2 spaces-before="0">
  Desarrollo
</h2>

<p spaces-before="0">
  Durante el desarrollo, puede usar <code>main.py</code> para probar su función <code>calculate()</code>. Haz clic en el botón "run" y se ejecutará <code>main.py</code>.
</p>

<h2 spaces-before="0">
  Pruebas
</h2>

<p spaces-before="0">
  Hemos importado las pruebas de <code>test_module.py</code> a <code>main.py</code> para tu conveniencia. Las pruebas se ejecutarán automáticamente cada vez que pulses el botón "run".
</p>

<h2 spaces-before="0">
  Envío
</h2>

<p spaces-before="0">
  Copia el enlace de tu proyecto y envíalo a freeCodeCamp.
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
