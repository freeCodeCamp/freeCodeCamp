---
title: Quality Assurance
localeTitle: Seguro de calidad
---
## Seguro de calidad

El control de calidad (comúnmente conocido como control de calidad) es el medio por el cual se verifica un producto en desarrollo para asegurarse de que funciona como se supone. Los métodos reales utilizados en los procesos de control de calidad varían enormemente según el tamaño y la naturaleza del producto.

Para un proyecto personal, es probable que solo realice la prueba a medida que avanza, y pida a otros que proporcionen comentarios en las etapas apropiadas. Por el contrario, una aplicación bancaria debe tener todos los aspectos de cada característica verificada y documentada exhaustivamente para garantizar que sea funcional y segura.

Independientemente de lo formal o detallado que sea un proceso de control de calidad, su objetivo es identificar los errores para que puedan resolverse antes de lanzar el producto.

### Metodologías

#### Ágil

En un enfoque ágil para el desarrollo, el objetivo es que cada ciclo de trabajo ('sprint') produzca un software de trabajo que se pueda agregar y mejorar iterativamente. Esto hace que los procesos de control de calidad sean una parte intrínseca del ciclo de desarrollo. Al probar los componentes de software en cada etapa de su producción, se reduce el riesgo de que se presenten errores en el lanzamiento.

### Terminología

#### Pruebas de automatización

Pruebas realizadas con scripts escritos previamente diseñados para controlar la ejecución de pruebas.

#### Caja negra

Estas pruebas no miran dentro del sistema bajo prueba, sino que lo tratan como "cerrado" de la misma manera que el usuario final lo experimentará.

#### Defecto

Cualquier desviación de las especificaciones de una aplicación; a menudo referido como un "error".

#### Prueba exploratoria

Un enfoque no programado para las pruebas, que se basa en la creatividad única del probador en un esfuerzo por encontrar errores desconocidos e identificar regresiones.

#### Pruebas de integración

Probando componentes / módulos individuales juntos para asegurar que se conecten e interactúen bien entre sí.

#### Prueba de trayectoria negativa

Un escenario de prueba diseñado para producir un estado de error en una característica / aplicación y verificar que el error se maneje correctamente. Un ejemplo de esto es ingresar una serie de números en el campo de correo electrónico en un formulario de registro de usuario y verificar que el registro no se acepte hasta que se proporcione una dirección de correo electrónico real.

#### Pruebas de regresión

Pruebas realizadas en una nueva compilación para garantizar que la nueva funcionalidad no haya roto involuntariamente la funcionalidad previamente probada.

#### Pruebas de humo

Un enfoque minimalista de las pruebas destinadas a garantizar que la funcionalidad básica esté funcionando antes de que se realicen pruebas más profundas. Normalmente ocurre al principio del proceso de prueba.

#### Caso de prueba

Las condiciones previas especificadas, los pasos y los resultados esperados a los que hace referencia un probador / ingeniero de control de calidad para determinar si una característica realiza su tarea como se espera o no.

#### Caja blanca

Se refiere a las pruebas realizadas a nivel estructural, dentro de la base de código. Los programadores que verifican que las entradas y salidas de funciones o componentes específicos serán pruebas de caja blanca.

También conocido como 'Glass Box', 'Clear Box', 'Transparent Box' porque el probador puede 'ver dentro' del sistema bajo prueba.

Las categorías principales son

*   **Pruebas unitarias** (unidades individuales de código hacen lo que deberían)
*   **Pruebas de integración** (unidades / componentes interactúan entre sí correctamente)
*   **Pruebas de regresión** (volver a aplicar las pruebas en etapas posteriores del desarrollo para garantizar que aún funcionan)

Hay tres técnicas principales:

*   **Partición de equivalencia** (los valores de entrada probados son representativos de conjuntos de datos de entrada más grandes)
*   **Análisis de valor de límite** (el sistema se prueba con entradas seleccionadas donde el comportamiento y, por lo tanto, la salida debería cambiar)
*   **Gráficos de causa y efecto** (las pruebas se diseñan a partir de una visualización de las relaciones de entrada-salida)

### Otros recursos

[Test Driven Development (Guía FreeCodeCamp)](https://guide.freecodecamp.org/agile/test-driven-development)

# [Pruebas unitarias (guía freeCodeCamp)](https://guide.freecodecamp.org/software-engineering/unit-tests/)

[Fundamentos de Pruebas de Software](http://softwaretestingfundamentals.com/)