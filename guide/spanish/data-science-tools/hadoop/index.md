---
title: Hadoop
localeTitle: Hadoop
---
## ![Hadoop](http://2s7gjr373w3x22jf92z99mgm5w-wpengine.netdna-ssl.com/wp-content/uploads/2014/08/Hadoop_logo_2.png)

### ¿Sabías?

Hadoop lleva el nombre de un elefante de juguete perteneciente al hijo de Doug Cutting. Doug eligió el nombre para su proyecto de código abierto ya que era fácil de deletrear, pronunciar y encontrar en los resultados de búsqueda. El original elefante de peluche amarillo que inspiró el nombre aparece en el logotipo de Hadoop.

### ¿Qué es Hadoop?

Hadoop es un marco que permite el procesamiento distribuido de grandes conjuntos de datos en un grupo de computadoras, utilizando modelos de programación simples. Permite la ampliación de servidores individuales a miles de máquinas, cada una de las cuales ofrece su propio cómputo y almacenamiento local. En lugar de confiar en el hardware para ofrecer alta disponibilidad, el propio Hadoop está diseñado para detectar y manejar fallas en la capa de aplicación. Si falla una máquina en un clúster, Hadoop puede compensar la falla sin perder datos. Esto permite la entrega de un servicio de alta disponibilidad sobre un grupo de equipos, cada uno de los cuales puede ser propenso a fallas.

En 2003, Google lanzó su documento sobre el Sistema de archivos de Google (GFS). Detalló un sistema de archivos distribuido propietario destinado a proporcionar un acceso eficiente a grandes cantidades de datos utilizando hardware de productos básicos. Un año más tarde, Google lanzó otro artículo titulado "MapReduce: Procesamiento de datos simplificado en grandes grupos". En ese momento, Doug estaba trabajando en Yahoo. Estos papeles fueron la inspiración para su proyecto de código abierto Apache Nutch. En 2006, los componentes del proyecto ahora conocidos como Hadoop se mudaron de Apache Nutch y se lanzaron.

### ¿Por qué es útil Hadoop?

Según IBM: "Todos los días, se crean 2.500 millones de gigabytes de datos de alta velocidad en una variedad de formas, como publicaciones en redes sociales, información recopilada en sensores y dispositivos médicos, videos y registros de transacciones".

Algunos ejemplos de datos creados frecuentemente son:

*   Metadatos del uso del teléfono.
*   Registros del sitio web
*   Transacciones de compra con tarjeta de crédito

"Big data" se refiere a conjuntos de datos que son demasiado grandes o complejos para procesar usando aplicaciones de software tradicionales. Los factores que contribuyen a la complejidad de los datos son el tamaño del conjunto de datos, la velocidad de los procesadores disponibles y el formato de los datos.

En el momento de su lanzamiento, Hadoop era capaz de procesar datos a mayor escala que el software tradicional.

### Core Hadoop

Los datos se almacenan en el Sistema de archivos distribuidos de Hadoop (HDFS). Al usar map reduce, Hadoop procesa los datos en trozos paralelos (procesando varias partes al mismo tiempo) en lugar de en una sola cola. Esto reduce el tiempo necesario para procesar grandes conjuntos de datos.

HDFS funciona almacenando archivos grandes divididos en trozos y replicándolos en muchos servidores. Tener múltiples copias de archivos crea redundancia, lo que protege contra la pérdida de datos.

### Ecosistema Hadoop

Existen muchos otros paquetes de software para complementar Hadoop. Estos programas comprenden el ecosistema de Hadoop. Algunos programas facilitan la carga de datos en el clúster de Hadoop, mientras que otros facilitan el uso de Hadoop.

El ecosistema de Hadoop incluye:

*   Apache Hive
*   Cerdo apache
*   Apache HBase
*   Apache Phoenix
*   Chispa de apache
*   Apache ZooKeeper
*   Cloudera Impala
*   Flujo de apache
*   Apache Sqoop
*   Apache oozie

#### Más información:

1.  [Curso de Udacity en hadoop.](https://www.udacity.com/course/intro-to-hadoop-and-mapreduce--ud617)
2.  [Apache Hadoop](http://hadoop.apache.org/)
3.  [Big Data Hadoop Tutorial Videos por edureka!](https://www.youtube.com/playlist?list=PL9ooVrP1hQOFrYxqxb0NJCdCABPZNo0pD)