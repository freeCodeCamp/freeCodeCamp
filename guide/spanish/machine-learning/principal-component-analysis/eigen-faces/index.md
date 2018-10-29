---
title: Eigen Faces
localeTitle: Caras propias
---
## Caras propias

### contorno

*   Problema
*   Enfoque de la solución
*   Conjunto de datos
*   Análisis matemático
*   Reconstrucción de la imagen

### Problema

Normalmente utilizamos los valores propios y los vectores propios de la matriz de covarianza de los datos para calcular nuestros componentes principales. ¿Qué sucede si no puede calcular la matriz de covarianza debido a problemas de memoria?

### Enfoque de la solución

Ahora usamos un truco. En lugar de usar las dimensiones de la imagen para la matriz de covarianza, usamos varias imágenes. Esto abre otra ventaja. Ahora que tenemos los vectores de características de todas nuestras imágenes, todo lo que necesitamos son estas m imágenes para poder reconstruir cualquier imagen del mundo.

### Definiendo el conjunto de datos

Considere que tenemos m imágenes en escala de grises de tamaño nx n. m es del orden de 100 y n es del orden de 10000. Nuestro objetivo es seleccionar k componentes que representen correctamente todas las características de la imagen. Ahora creamos una matriz X, donde almacenamos las imágenes aplanadas (n ^ 2 x 1) en forma de fila. Por lo tanto, X es de dimensión n ^ 2 x m.

### Análisis matemático

Calcular la covarianza de esta matriz es donde las cosas se ponen interesantes. La covarianza de una matriz X se define como un punto (X, XT), cuya dimensión es n ^ 2 xn ^ 2. Esto obviamente saldrá de la memoria para un conjunto de datos tan grande. Ahora considera el siguiente conjunto de ecuaciones. punto (XT, X) V = λ V donde V es el vector propio y λ son los valores propios correspondientes. Pre-multiplicación con X, punto (punto (X, XT), punto (X, V)) = λ punto (X. V) Así, encontramos que el Eigenvector de la matriz de covarianza es simplemente el producto puntual de la matriz de la imagen y el Eigenvector de punto (XT, X).

Por lo tanto, calculamos el punto (XT, X), cuya dimensión es solo mxm, y usamos el Eigenvector de esta matriz para construir el Eigenvector de La matriz original. Los m valores propios del punto (XT, X) (junto con sus vectores propios correspondientes) corresponden a los m valores propios más grandes del punto (X, XT) (junto con sus vectores propios correspondientes). Nuestro requerido los eigenvectores son solo los primeros eigenvectores k y sus valores propios correspondientes. Ahora calculamos una matriz de eigenfaces, que no es más que las imágenes comparadas con sus vectores propios. Los pesos para cada imagen k ahora serán puntos (XT, interfaces propias (primeros valores k)).

### Reconstrucción de la imagen

Este método nos ayuda a representar cualquier imagen utilizando solo k características de m imágenes. Cualquier imagen puede ser reconstruida utilizando estos pesos. Para obtener cualquier imagen i, Imagen (i) = punto (superficie propia (k), peso \[i,:\]. T)