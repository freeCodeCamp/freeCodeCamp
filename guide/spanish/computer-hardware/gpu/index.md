---
title: GPU
localeTitle: GPU
---
## GPU

GPU significa Unidad de Procesamiento de Gráficos. La mayoría de las computadoras las usan para renderizar videos o jugar videojuegos.

Una GPU es como una CPU pero tiene diferentes fortalezas y debilidades. Las CPU son muy buenas para ejecutar un par de tareas muy rápidamente. Las GPU son mucho mejores para ejecutar muchas tareas al mismo tiempo, pero más lentas. Una GPU típica puede tener más de 10,000 tareas en ejecución, pero para ejecutar tantas tareas al mismo tiempo, deben compartir la memoria y otros recursos. Las GPU suelen ejecutar tareas muy repetitivas una y otra vez para evitar que la CPU pierda tiempo. Algunas CPU tienen GPU incorporadas, pero tener una GPU separada casi siempre es más potente.

Las GPU se pueden utilizar para el cálculo, así como la representación de video. Las formas comunes de hacer esto incluyen OpenACC, CUDA, OpenCL y OpenGL. Algunas aplicaciones incluyen implementaciones de GPU para reducir la cantidad de tiempo que la aplicación tarda en ejecutarse.

Originalmente, la GPU se usó principalmente para renderizar juegos en 3D para mejorar la resolución y la tasa de cuadros. Pero ahora estas capacidades se están aprovechando más ampliamente para mejorar las cargas de trabajo computacionales en muchas áreas; por ejemplo, modelos financieros, investigación científica de vanguardia y exploración de petróleo y gas. Las GPU también se utilizan como un recurso para la minería de bitcoins, ya que pueden ejecutar tareas repetitivas fácilmente sin agotar los recursos de la CPU, lo que le permite ejecutar un sistema operativo en la computadora con una CPU de bajo nivel y aún así ser capaz de minar bitcoin usando la GPU

Hay dos marcas principales que producen GPU: NVidia y AMD. A menudo se los denomina "equipo verde" y "equipo rojo", que indican el color principal de su logotipo.

Los fabricantes notables de GPU incluyen: Nvidia y AMD / ATI.

## Origen de la GPU

El fondo más primitivo de GPU se puede asignar a la era de los controladores VGA (Virtual Graphics Array). Pero estas no eran en realidad una unidad de procesamiento completa, sino que actuaban como unidades de soporte para funciones de visualización. Un controlador VGA es un controlador de memoria simple conectado a Dynamic RAM y un generador de pantalla. La función principal de un VGA es recibir datos de imágenes, organizarlos correctamente y enviarlos a un dispositivo de video, que era principalmente un monitor de computadora o una pantalla de TV conectada a una consola de juegos para su visualización.

La primera unidad de procesamiento completa para aceleración gráfica fue desarrollada y comercializada por NVIDIA en 1999, "GeForce 256". Los aceleradores 3D más antiguos tenían que depender de la CPU para ejecutar cálculos gráficos. Con la nueva "GeForce 256" como un coprocesador para la CPU, mejoró la velocidad de cuadros en más del 50% y redujo el costo total, expandiéndose así en el mercado de consumo.

## GPU vs CPU

Una CPU está optimizada para una latencia mínima, es decir, "para poder ejecutar tantas instrucciones como sea posible pertenecientes a un único hilo serie, en una ventana de tiempo determinada". El procesador debe poder cambiar rápidamente entre las operaciones. Para obtener una gran cantidad de latencia en la CPU, hay una gran cantidad de infraestructura en la CPU, como grandes cachés para que los datos estén disponibles para su ejecución, muchas Unidades de control para ejecuciones fuera de orden y algunos núcleos de ALU. El ISA de la CPU está diseñado de una manera más general y puede realizar una amplia gama de operaciones. Si bien la CPU fue diseñada para cálculos e instrucciones de propósito general, la GPU evolucionó para cálculos gráficos. El mismo cálculo debe realizarse en cientos y miles de píxeles para la representación 2D / 3D de gráficos. Por lo tanto, las GPU se optimizaron principalmente para un rendimiento máximo. Esto se implementa utilizando toneladas de ALU en una sola arquitectura. La memoria caché L2 se reduce porque hasta que los datos se recuperan de la DRAM, los núcleos de la GPU tienen muchos cálculos que realizar, superponiendo así el tiempo de bloqueo de la CPU con un paralelismo masivo. Esto se conoce como ocultación de latencia.

## Evolución de la arquitectura GPU

Las GPU se modelaron originalmente en el concepto de canalización de gráficos. La canalización de gráficos es un modelo teórico, que comprende los niveles en los que se enviarán y ejecutarán los datos gráficos utilizando GPU y software (como OpenGL, DirectX). La canalización básicamente convierte las coordenadas espaciales 3D en datos pixelados en 2D para que el dispositivo los muestre. La siguiente es una ilustración de "Pipeline de gráficos de función fija tradicional", pipeline comúnmente aceptada hasta hoy.

### 0ª generación

La placa "Reality Engine" de Silicon Graphics Inc. (SGI) marcó el inicio del hardware de GPU y la tubería de gráficos. Pero la tecnología aún dependía de la CPU para la primera mitad. Además, la velocidad estaba limitada a una ejecución de un píxel por ciclo de reloj. El motor utiliza OpenGL, una programación de aplicaciones 2D / 3D ampliamente utilizada.

### 1ª Generación

El "3dfx Voodoo" (1996) evolucionó como uno de los primeros verdaderos aceleradores 3D para juegos. Manejaba el mapeado de texturas, la rasterización y el búfer z, pero la CPU todavía tenía que hacer transformaciones de vértice.

### 2ndGeneration

Este es el punto en el que se lanzó al mercado común la primera GPU verdadera, la "GeForce 256" de NVIDIA. Las GPU del puerto de gráficos acelerados (AGP) de esta generación ofrecían nuevas funciones como la multitimpresión, la transformación de la geometría del hardware, los mapas de luz y la iluminación. Las tuberías tradicionales se conocían como una tubería de "función fija", porque una vez que el desarrollador envió datos gráficos a la tubería de la GPU, los datos no se podían cambiar.

### 3ra generacion

Con esta generación de CPU, surgió la canalización programable. Ahora las partes previamente no programables podrían ser programadas por los programadores. En 2001, NVIDIA lanzó la GeForce3.

### 4ª generación

Con el comienzo del siglo XXI, las primeras "tarjetas gráficas totalmente programables" llegaron a los consumidores. NVIDIA GeForce FX, ATI Radeon 9700 estuvieron entre los primeros. Estas GPU podrían realizar operaciones por píxel junto con sombreadores de píxeles y vértices programables. Pero, se necesitaron hardware dedicados separados para el sombreado de vértices y el procesamiento de sombreadores de píxeles.

### 5ª generación

Las GPU evolucionaron y avanzaron a su velocidad máxima y las GPU de esta generación fueron las primeras en utilizar el bus PCI-express. Se introdujeron múltiples buffers de renderizado, soporte de 64 bits, acceso a texturas, etc., junto con un aumento en la memoria de la GPU.

### 6ª generación

En 2006, el lanzamiento de la GPU de la serie GeForce 8 de NVIDIA revolucionó el alcance y la industria de la GPU, al introducir la GPU como procesadores masivamente paralelos. Fue el primero en tener sombreadores "unificados" y "programables" o, en otras palabras, un procesador unificado programable. Unificado significa que todos los procesos de canalización de gráficos se ejecutaron en un solo procesador y no se requiere una unidad externa para ninguna etapa. Los componentes básicos de la arquitectura de GPU unificada se describen a continuación.

Desde el lanzamiento de las GPU NVidia de la serie 9XX, el aumento del rendimiento entre generaciones solo mejoró. Desde el 980Ti al 1080Ti y al recién lanzado 208Tis, el rendimiento se ha más que duplicado. AMD también comenzó a producir mejores GPU como el RX 580 y el Vega 64, aunque esto todavía no está cerca del nivel de Nvidia. Recientemente, Nvidia lanzó una nueva línea de GPU llamada RTX que incluye las tarjetas de gama alta como 2080Ti, 2080 y 2070. RTX significa "Trazado de rayos", que es una técnica de renderización utilizada para generar imágenes a través del trazado de la trayectoria de la luz. en una escena

## Componentes básicos de la arquitectura GPU unificada

Las arquitecturas unificadas de GPU se basan en una matriz paralela de muchos procesadores programables, en donde todas las etapas de procesamiento de gráficos, a saber, vértice, geometría, rasterización y procesamiento de sombreado de píxeles y cálculos paralelos en el mismo núcleo, en contraste con las GPU anteriores. La matriz de procesadores está altamente integrada con los procesadores de función fija para compresión y descompresión, rasterización, operaciones de trama, filtrado de texturas, suavizado, decodificación de video y procesamiento de video HD.

La siguiente arquitectura discutida se enfoca en ejecutar muchos subprocesos paralelos de manera eficiente en muchos núcleos de procesador.

### Matriz de procesador

Una matriz de procesadores consta de muchos núcleos de procesamiento. Una matriz de procesadores GPU unificada tiene una estructura organizada típica de multiprocesadores multiproceso. Para la ejecución de cada subproceso, está involucrado un multiprocesador, y en cada GPU, el multiprocesador, también conocido como Multiprocesadores de transmisión (SM), hay numerosos procesadores de transmisión, dispuestos en una cola. Todos los procesadores se conectan a las particiones DRAM a través de la red de interconexión.

### Multihilo

Como se mencionó anteriormente, la GPU está optimizada para un alto rendimiento y ocultación de latencia. El subprocesamiento múltiple a gran escala reduce la latencia de las cargas de memoria de la DRAM. Mientras que un subproceso está detenido debido a una instrucción de carga o recuperación para completar, el procesador puede ejecutar otro subproceso. Además, debido a los subprocesos múltiples a gran escala, la GPU admite modelos de programación de sombreadores de gráficos paralelos de grano fino y modelos de programación de computadoras paralelas de grano fino.

### Arquitectura multiprocesador

Además de los núcleos de múltiples procesadores en un SM, hay unidades funcionales especiales, una unidad de instrucciones multiproceso, instrucciones y cachés constantes y una memoria compartida. Además, cada núcleo consta de un gran archivo de registro de múltiples subprocesos (RF). Cada núcleo de procesador de transmisión consta de unidades aritméticas de punto flotante y entero, que juntas pueden manejar la mayoría de las operaciones.

### SIMT

El multiprocesador de transmisión utiliza una arquitectura de "subproceso múltiple de instrucción única (SIMT)". Las instrucciones se ejecutan en un grupo de hilos paralelos conocidos como deformaciones. Cada hilo paralelo es del mismo tipo y comienzan juntos en la misma dirección de programa. La arquitectura del procesador SIMT es bastante similar a la arquitectura SIMD. En SIMT, una instrucción particular se ejecuta en múltiples hilos paralelos de forma independiente, mientras que en SIMD, la misma instrucción se ejecuta en múltiples líneas de datos en grupos síncronos.

### Procesador de streaming

Ejecuta todas las operaciones fundamentales de FP, así como las instrucciones aritméticas, de comparación, de conversión y lógicas de PTX. Unidad funcional especial Algunas de las instrucciones de subprocesos se ejecutan en SFU simultáneamente con otras instrucciones de subprocesos que se ejecutan en los SP.

#### Más información:

*   [Wikipedia](https://en.wikipedia.org/wiki/Graphics_processing_unit)
*   [OpenACC](https://www.openacc.org/)
*   [CUDA](https://developer.nvidia.com/cuda-zone)
*   [OpenCL](https://www.khronos.org/opencl/)
*   [OpenGL](https://www.opengl.org/)
*   [nVidia Blog](https://blogs.nvidia.com/blog/2009/12/16/whats-the-difference-between-a-cpu-and-a-gpu/)
*   [NVidia](https://www.nvidia.com/)
*   [AMD](http://www.amd.com/en-us/products/graphics)