---
title: Cloud Storage
localeTitle: Almacenamiento en la nube
---
## ALMACENAMIENTO COMO SERVICIO (STAS)

Cuando usamos el almacenamiento de la nube, ese es el StAAS. En esto, el sistema en la nube tiene almacenamiento y el usuario usa ese almacenamiento en su sistema y puede usarlo para almacenar datos. El sistema en la nube debe tener la capacidad de almacenamiento de escala. Podemos integrar todo el almacenamiento. Por ejemplo, si tenemos varias unidades de lápiz, entonces podemos integrar todos los almacenamientos de la unidad de disco en uno solo.

Hay principalmente dos tipos de almacenamiento

1.  Objeto
2.  Bloquear

### Almacenamiento de objetos

*   No podemos hacer una partición en el almacenamiento en la nube. Solo podemos almacenar archivos y carpetas allí. Esto se llama almacenamiento de objetos. No podemos instalar el sistema operativo allí ya que no hay particiones.
*   **Ejemplo**
    *   Unidad de Google (motor de cálculo de Google, GCE), OneDrive, buzón, Microsoft Azure.
    *   Amazon tiene su propio servicio de nube AWS. S3 (Simple Storage Service, SSS) es el producto de amazon que proporciona StAAS. Es una nube pública. Cualquiera puede usar sus servicios.
    *   OpenStack es la mayor nube privada. OpenStack tiene producto swift (Object Storage).

### Almacenamiento de bloques

*   Si somos capaces de hacer particiones en el almacenamiento proporcionado, entonces podemos instalar el sistema operativo. Tenemos un disco duro y podemos hacer particiones en ellos, este tipo de almacenamiento se conoce como almacenamiento de bloques.
*   **Ejemplo**
    *   Servicio de almacenamiento de bloques de AWS - EBS (Elastic Block Storage)
    *   La nube proporciona facilidad de almacenamiento de escala que es la propiedad elástica de la nube.
    *   Bloqueo de almacenamiento de OpenStack - Cinder