---
title: Feature Engineering
localeTitle: Ingeniería de características
---
## Ingeniería de características

El aprendizaje automático funciona mejor con datos bien formados. La ingeniería de características describe ciertas técnicas para asegurarnos de que estamos trabajando con la mejor representación posible de los datos que recopilamos.

## ¿Por qué es útil la ingeniería de características?

*   La cantidad y calidad de las características afecta el poder predictivo del modelo. Más características de alta calidad resultan en un mejor modelo.
*   Cree mejores modelos tomando los datos que tiene y amplíelos con información adicional relevante para el tema obtenida en otro lugar.
*   Las nuevas características pueden llevar a "avances" en la capacidad del modelo para predecir un resultado sólido.

## Advertencias a la ingeniería de características

*   La creación de nuevas características basada en características conocidas puede llevar a una multicolinealidad, una situación en la que dos características están relacionadas linealmente. Esto equivale a "doble inmersión" en un modelo y puede llevar a un ajuste excesivo.
*   Más no siempre es mejor. Agregar características con capacidades predictivas deficientes puede aumentar el tiempo de cómputo sin agregar beneficios al modelo.

## Ejemplos de ingeniería de características:

*   Si tiene la función 'fecha', intente subordinarla a 'día de la semana', 'semana del año' o 'mes del año'. Del mismo modo, cree una función AM / PM a partir de la "hora del día".
*   Realice una reducción de datos como PCA y luego agregue los vectores de PCA a los datos como nuevas características.
*   Produce nuevas características mediante la transformación numérica de las características actuales. Algunos ejemplos serían el registro de datos de transformación o la codificación de características categóricas como números (convertir bajo / medio / alto a 1/2/3).
*   Use los datos del censo para crear nuevas funciones (como el ingreso promedio), asumiendo que su conjunto de datos contiene información de ubicación (ciudad, estado, condado, etc.).

A continuación se presentan dos técnicas de ingeniería de características: escalado y selección.

### Característica de escalado

Supongamos que sus datos contienen el peso y la altura de las personas. Los números en bruto de estas dos características tienen una gran diferencia (por ejemplo, 80 kg y 180 cm, o 175 lbs versus 5.9 pies), lo que podría influir en el resultado de cierto algoritmo de aprendizaje automático. Este es especialmente el caso de los algoritmos que utilizan [funciones de distancia](https://en.wikipedia.org/wiki/Euclidean_distance) .

Para solucionar este problema, representamos los números sin procesar en un rango de 0 a 1. Podemos lograr esto utilizando la fórmula: `(x - xMin) / (xMax - xMin)` .

Usando esta fórmula, debemos prestar especial atención a los valores atípicos, ya que pueden afectar drásticamente el resultado al empujar hacia arriba xMax y empujar hacia abajo a xMin. Es por eso que los valores atípicos a menudo se eliminan antes de escalar.

### Selección de características

Se trata de identificar el subconjunto de funciones responsables de las tendencias que observamos en nuestros datos.

¿Por qué nos debe importar? [Curse of Dimensionality](https://en.wikipedia.org/wiki/Curse_of_dimensionality) es un gran enemigo en tiempos de Big Data. No podemos usar todas nuestras decenas a cientos de funciones. Esto no solo elevaría la dimensionalidad de nuestros datos a través del techo (2 ^ n, donde n es el número de funciones), sino que a menudo no tiene ningún sentido en casos de uso específicos. Imagínese con ganas de predecir el clima del mañana: será más probable que la tendencia del clima de los últimos días sea más importante en este escenario que los bebés nacidos en los últimos días. Así que podrías simplemente eliminar la característica de los bebés.

Pero olvídate de los bebés por ahora, vamos a profundizar en más detalles.

#### Filtrado y envoltura

Aquí describimos dos enfoques generales. Los métodos de filtrado actúan independientemente de su algoritmo de aprendizaje elegido y los métodos de ajuste incorporan a su aprendiz.

Los métodos de filtro seleccionan el subconjunto de funciones antes de inyectar los datos en su algoritmo ML. Usan, por ejemplo, la correlación con la variable a predecir para identificar qué subconjunto de características elegir. Estos métodos son relativamente rápidos de calcular, pero no aprovechan el [sesgo del aprendiz](https://en.wikipedia.org/wiki/Inductive_bias) porque el filtrado se realiza independientemente del modelo de ML elegido.

Los algoritmos de búsqueda de envoltura aprovechan el sesgo de aprendizaje, ya que incorporan el modelo de ML elegido. Estos métodos funcionan al eliminar la función que tiene el cambio más bajo en la puntuación cuando se elimina y repetir este proceso hasta que la puntuación cambie significativamente. Esto significa ejecutar su algoritmo de aprendizaje una y otra vez, lo que puede llevar a importantes tiempos de cómputo. Estos métodos también tienen el peligro de que se adapte en exceso, ya que básicamente está optimizando el conjunto de funciones en función del modelo ML elegido.

#### Pertinencia

Otra forma de seleccionar características es usar el [BOC (Bayes Optimal Classifier)](https://scholar.google.de/scholar?q=Bayes+Optimal+Classifier&hl=en&as_sdt=0&as_vis=1&oi=scholart&sa=X&ved=0ahUKEwiO16X0tIbXAhXiKsAKHbGrBzoQgQMIJjAA) . La regla de los pulgares aquí son:

*   una característica es muy relevante si eliminarlo degrada el BOC
*   una característica es débilmente relevante si no es muy relevante y agregarla en combinación con otras características mejora el BOC
*   de lo contrario una característica es irrelevante

Bueno, no siempre. Depende de la cantidad de datos que tenga y la fuerza de las señales de la competencia. Puede ayudar a su algoritmo a "enfocarse" en lo que es importante resaltándolo de antemano.

*   Variable indicadora de los umbrales: digamos que está estudiando las preferencias de alcohol por los consumidores de EE. UU. Y que su conjunto de datos tiene una característica de edad. Puede crear una variable indicadora para la edad> = 21 para distinguir los sujetos que tenían más de la edad legal para beber.
*   Variable indicadora de múltiples características: está pronosticando precios de bienes raíces y tiene las características n _dormitorios y n_ baños. Si las casas con 2 camas y 2 baños tienen una prima como propiedades de alquiler, puede crear una variable indicadora para marcarlas.
*   Variable indicadora para eventos especiales: está modelando ventas semanales para un sitio de comercio electrónico. Puedes crear dos variables indicadoras para las semanas del Viernes Negro y Navidad.
*   Variable indicadora para grupos de clases: está analizando las conversiones de sitios web y su conjunto de datos tiene la _fuente de_ tráfico de características categóricas _. Puede crear una variable indicadora para el_ tráfico _pagado_ marcando las observaciones con los valores de fuente de tráfico de "Anuncios de Facebook" o "Adwords de Google".

## Características de interacción

El siguiente tipo de ingeniería de características implica resaltar las interacciones entre dos o más características.

¿Alguna vez has escuchado la frase, "la suma es mayor que las partes?" Bueno, algunas características se pueden combinar para proporcionar más información de lo que lo harían como individuos.

Específicamente, busque oportunidades para tomar la suma, la diferencia, el producto o el cociente de múltiples características.

\* Nota: No recomendamos el uso de un ciclo automático para crear interacciones para todas sus funciones. Esto lleva a "explosión de características".

*   Suma de dos características: supongamos que desea predecir los ingresos en función de los datos de ventas preliminares. Tienes las características de venta de bolígrafos _azules_ y bolígrafos _negros de_ venta. Podrías sumar esas características si solo te interesan las ventas en general.
*   Diferencia entre dos características: tiene las características fecha de _construcción de la_ casa y fecha de _compra de la_ casa. Puedes tomar su diferencia para crear la _antigüedad de la_ casa de características en\_compra.
*   Producto de dos características: está ejecutando una prueba de precios, y tiene el precio de la característica y una conversión de indicador variable. Puede tomar su producto para crear las ganancias de la característica.
*   Cociente de dos funciones: tiene un conjunto de datos de campañas de marketing con las funciones n _clics y n_ impresiones. Se puede dividir por clics para crear impresiones tasa _de clics,_ lo que permite comparar las distintas campañas de diferente volumen.

#### Más información:

*   [Documento explorando "Ingeniería de características para la clasificación de texto"](https://pdfs.semanticscholar.org/6e51/8946c59c8c5d005054af319783b3eba128a9.pdf)
*   [Artículo "Descubra la ingeniería de características, cómo diseñar funciones y cómo mejorar en ello"](https://machinelearningmastery.com/discover-feature-engineering-how-to-engineer-features-and-how-to-get-good-at-it/)
*   [Una guía completa para el análisis de datos.](https://www.analyticsvidhya.com/blog/2016/01/guide-data-exploration/)
*   [Transformaciones de datos](https://onlinecourses.science.psu.edu/stat501/node/318)
*   [Ingeniería de características en ciencia de datos](https://docs.microsoft.com/en-us/azure/machine-learning/team-data-science-process/create-features)