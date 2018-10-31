---
title: Introduction to NLP
localeTitle: Introducción a la PNL
---
## contorno

*   Motivación
*   Casos de uso
*   Modelado de lenguaje
*   Lecturas adicionales

## Motivación

Siempre ha sido nuestro sueño hacer que las máquinas comprendan nuestro idioma. Desde que Chomsky creó las gramáticas libres de contexto, los lingüistas han querido encontrar soluciones para comprender las gramáticas dependientes del contexto. Por lo tanto, es natural que un discípulo académico haya evolucionado en torno a este tema.

## Casos de uso

La gente ha usado este concepto en muchas aplicaciones interesantes. Algunos de los más interesantes incluyen las sugerencias de respuesta automática Google Translate, Siri o Gmail. Sin embargo, las personas están trabajando en formas de mejorar estas predicciones, y se está realizando una investigación de vanguardia sobre cómo hacer que las máquinas respondan a las preguntas de manera más confiable.

## Cómo funciona el procesamiento del lenguaje natural

Anteriormente, la NLP empleaba un enfoque basado en reglas, es decir, todas las reglas estaban codificadas (p. Ej., Gramática de escritura). Sin embargo, esto no fue muy afectivo a las variaciones en los modelos de lenguaje. Actualmente, los procesos de PNL se llevan a cabo utilizando Inteligencia Artificial. Se basan principalmente en Aprendizaje profundo, una IA que determina patrones en los datos y los usa para entrenar el modelo. Este método es mejor que los métodos anteriores, ya que cuando se aprende a través de la gran cantidad de datos presentes, la máquina puede concentrarse en los casos más comunes, lo que no es fácil con las reglas escritas a mano, ya que no es tímido saber dónde se deben realizar los esfuerzos. . Además, estos modelos se vuelven más confiables con el aumento de los datos, pero en los enfoques anteriores solo se pueden hacer más precisos al aumentar la complejidad de las reglas, que es una tarea más difícil. El modelo aprende las reglas del lenguaje a través del análisis de grandes corpora de ejemplos típicos del mundo real. Este método requiere una enorme cantidad de datos etiquetados, lo que es un gran obstáculo para la PNL.

## Modelado de lenguaje

Para aquellos que buscan entrar en este campo, tengo la intención de comenzar con 2 conceptos.

#### Tokenización

Aquí la tarea suena simple. Dado un corpus (un conjunto de datos de oraciones), genere tokens individuales (palabras significativas). Necesitamos tokenizar palabras y oraciones. El primer enfoque que viene a la mente es dividir por período y espacio. Sin embargo, esto no funciona. Consideremos al Sr. John. ¿Son "Mr" y "John" 2 oraciones? Por supuesto no. Ahora considera las palabras separadas por guiones. ¿Te gustaría dividirlos como 2 palabras o como 1 palabra? Estas preguntas difíciles hacen que la tarea de la tokenización no sea tan sencilla. ¡Adelante, elige un corpus de nltk y crea tu propia expresión regular para tu propio tokeniser!

#### modelos n-gram

La siguiente tarea es construir un modelo de lenguaje. Aquí consideramos la suposición de que la palabra enésima depende solo de las palabras n-1 anteriores. Los modelos de 2 y 3 gramos son los más utilizados. Para construir un modelo de 3 gramos, solo agrupe 3 fichas y cuente su frecuencia en el corpus. ¡Ahora está listo para predecir la probabilidad de un grupo de 3 palabras!

## Lecturas adicionales

El campo de la PNL es enorme. Si has leído hasta aquí y has implementado lo anterior, ciertamente has amado esto. Continúa y lee el libro de Jurafsky para aprender más conceptos nuevos. Recuerda, es importante implementarlas también.