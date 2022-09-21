---
id: 5e46f7f8ac417301a38fb92a
title: Visualizador de datos médicos
challengeType: 10
forumTopicId: 462368
dashedName: medical-data-visualizer
---

# --description--

Estarás <a href="https://replit.com/github/freeCodeCamp/boilerplate-medical-data-visualizer" target="_blank" rel="noopener noreferrer nofollow">trabajando en este proyecto con nuestro código de inicio Replit</a>.

Todavía estamos desarrollando la parte interactiva del currículo de Python. Por ahora, aquí hay algunos vídeos en nuestro canal de YouTube freeCodeCamp.org que te enseñará todo lo que necesitas saber para completer este proyecto:

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
  En este proyecto, visualizarás y harás algunos cálculos a partir de datos de exámenes médicos utilizando matplotlib, seabron y pandas. Los valores del conjunto de datos (dataset) se recogieron durante los exámenes médicos.
</p>

<h2 spaces-before="0">
  Descripción de datos
</h2>

<p spaces-before="0">
  Las filas del conjunto de datos representan a los pacientes y las columnas representan información como medidas corporales, resultados de varios análisis de sangre y opciones de estilo de vida. Utilizarás el conjunto de datos para explorar la relación entre enfermedades cardiacas, medidas del cuerpo, indicadores sanguíneos y opciones de estilo de vida.
</p>

<p spaces-before="0">
  Nombre del archivo: medical_examination.csv
</p>

<table spaces-before="0">
  <tr>
    <th align="center">
      Característica
    </th>
    
    <th align="center">
      Tipo de variable
    </th>
    
    <th align="center">
      Variable
    </th>
    
    <th align="center">
      Tipo de unidad
    </th>
  </tr>
  
  <tr>
    <td align="center">
      Edad
    </td>
    
    <td align="center">
      Característica objetivo
    </td>
    
    <td align="center">
      edad
    </td>
    
    <td align="center">
      int (días)
    </td>
  </tr>
  
  <tr>
    <td align="center">
      Altura
    </td>
    
    <td align="center">
      Característica objetivo
    </td>
    
    <td align="center">
      altura
    </td>
    
    <td align="center">
      int (cm)
    </td>
  </tr>
  
  <tr>
    <td align="center">
      Peso
    </td>
    
    <td align="center">
      Característica objetivo
    </td>
    
    <td align="center">
      peso
    </td>
    
    <td align="center">
      float (kg)
    </td>
  </tr>
  
  <tr>
    <td align="center">
      Sexo
    </td>
    
    <td align="center">
      Característica objetivo
    </td>
    
    <td align="center">
      género
    </td>
    
    <td align="center">
      código de categoría
    </td>
  </tr>
  
  <tr>
    <td align="center">
      Presión arterial sistólica
    </td>
    
    <td align="center">
      Características del examen
    </td>
    
    <td align="center">
      ap_hi
    </td>
    
    <td align="center">
      int
    </td>
  </tr>
  
  <tr>
    <td align="center">
      Presión arterial diastólica
    </td>
    
    <td align="center">
      Característica del examen
    </td>
    
    <td align="center">
      ap_lo
    </td>
    
    <td align="center">
      int
    </td>
  </tr>
  
  <tr>
    <td align="center">
      Colesterol
    </td>
    
    <td align="center">
      Característica del examen
    </td>
    
    <td align="center">
      colesterol
    </td>
    
    <td align="center">
      1: normal, 2: por encima de lo normal, 3: muy por encima de lo normal
    </td>
  </tr>
  
  <tr>
    <td align="center">
      Glucosa
    </td>
    
    <td align="center">
      Característica del examen
    </td>
    
    <td align="center">
      glúcido
    </td>
    
    <td align="center">
      1: normal, 2: por encima de lo normal, 3: muy por encima de lo normal
    </td>
  </tr>
  
  <tr>
    <td align="center">
      Fumador
    </td>
    
    <td align="center">
      Característica subjetiva
    </td>
    
    <td align="center">
      humo
    </td>
    
    <td align="center">
      binario
    </td>
  </tr>
  
  <tr>
    <td align="center">
      Consumo de alcohol
    </td>
    
    <td align="center">
      Característica subjetiva
    </td>
    
    <td align="center">
      alco
    </td>
    
    <td align="center">
      binario
    </td>
  </tr>
  
  <tr>
    <td align="center">
      Actividad física
    </td>
    
    <td align="center">
      Característica subjetiva
    </td>
    
    <td align="center">
      activo
    </td>
    
    <td align="center">
      binario
    </td>
  </tr>
  
  <tr>
    <td align="center">
      Presencia o ausencia de enfermedades cardiovasculares
    </td>
    
    <td align="center">
      Variable objetivo
    </td>
    
    <td align="center">
      cardiaco
    </td>
    
    <td align="center">
      binario
    </td>
  </tr>
</table>

<h2 spaces-before="0">
  Tareas
</h2>

<p spaces-before="0">
  Crear un gráfico similar a <code>ejemplos/Figure_1. ng</code>, donde mostramos las cifras de resultados buenos y malos para las variables <code>colesterol</code>, <code>gluc</code>, <code>alco</code>, <code>activo</code> y <code>humo</code> en los pacientes con cardio=1 y cardio=0 en diferentes paneles.
</p>

<p spaces-before="0">
  Utiliza los datos para completar las siguientes tareas en <code>medical_data_visualizer.py</code>:
</p>

<ul>
  <li>
    Agrega una columna de <code>sobrepeso</code> a los datos. Para determinar si una persona tiene sobrepeso, primero calcule su IMC dividiendo su peso en kilogramos por el cuadrado de su altura en metros. Si ese valor es > 25 entonces la persona tiene sobrepeso. Utilice el valor 0 para NO sobrepeso y el valor 1 para el sobrepeso.
  </li>
  <li>
    Normaliza los datos haciendo 0 siempre bueno y 1 siempre malo. Si el valor de <code>cholesterol</code> o <code>gluc</code> es 1, haga que el valor 0. Si el valor es mayor que 1, haga el valor 1.
  </li>
  <li>
    Convierte los datos en formato largo y crea un gráfico que muestre el recuento de valores de las características categóricas usando <code>catplot()</code> de seaborn. El conjunto de datos debe dividirse por 'Cardio', así que hay un gráfico por cada valor de <code>cardio</code>. El gráfico debería verse como <code>examples/Figure_1.png</code>.
  </li>
  <li>
    Limpia los datos. Filtrar los siguientes segmentos de pacientes que representan datos incorrectos: <ul>
      <li>
        la presión diastólica es más alta que la máxima (Mantén los datos correctos con <code>(df['ap_lo'] &lt;= df['ap_hi'])</code>)
      </li>
      <li>
        la altura es menor que el 2.5º percentil (Mantén los datos correctos con <code>(df['height'] &gt;= df['height'].quantile(0.025))</code>)
      </li>
      <li>
        la altura es superior al 97,5º percentil
      </li>
      <li>
        el peso es menor que el 2,5º percentil
      </li>
      <li>
        el peso es superior al 97,5º percentil
      </li>
    </ul>
  </li>
  <li>
    Crear una matriz de correlación usando el conjunto de datos. Grafica la matriz de correlación usando la función <code>heatmap()</code> de seaborn. Enmascarar el triángulo superior de la matriz. El gráfico debería verse como <code>examples/Figure_2.png</code>.
  </li>
</ul>

<p spaces-before="0">
  Cada vez que una variable está establecida en <code>Ninguno</code>, asegúrese de establecerla en el código correcto.
</p>

<p spaces-before="0">
  Las pruebas unitarias están escritas en <code>test_module.py</code>.
</p>

<h2 spaces-before="0">
  Desarrollo
</h2>

<p spaces-before="0">
  Para el desarrollo, puedes usar <code>main.py</code> para probar tus funciones. Haz clic en el botón "run" y se ejecutará <code>main.py</code>.
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
