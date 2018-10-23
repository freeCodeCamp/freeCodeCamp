---
title: Continuous Delivery
localeTitle: Entrega continua
---
## Entrega continua

La entrega continua (CD) es un enfoque de ingeniería de software en el que los equipos producen software en ciclos cortos, asegurando que el software pueda ser lanzado de manera confiable en cualquier momento. [1](https://en.wikipedia.org/wiki/Extreme_programming)

Su objetivo es construir, probar y lanzar software de forma más rápida y frecuente. El enfoque ayuda a reducir el costo, el tiempo y el riesgo de entregar cambios al permitir más actualizaciones incrementales para las aplicaciones en producción. Un proceso de implementación sencillo y repetible es importante para la entrega continua. La entrega continua significa que el equipo garantiza que cada cambio pueda implementarse en la producción, pero puede optar por no hacerlo, generalmente debido a razones comerciales.

### El mito

A menudo se asume que si queremos implementar nuevos parches en el software con mayor frecuencia, _debemos aceptar niveles de estabilidad y confiabilidad más bajos en nuestros sistemas._

De hecho, varias investigaciones muestran que este **no es el caso:** los equipos de alto rendimiento brindan servicios de manera más rápida y confiable que la competencia de bajo rendimiento. Esta capacidad proporciona una ventaja competitiva increíble para las organizaciones y, en última instancia, un menor costo en cuanto a esfuerzos realizados por el equipo.

### Los beneficios

Las prácticas en el corazón de **entrega continua** nos ayudan a lograr algunos beneficios muy importantes:

* **Lanzamientos de bajo riesgo.** El objetivo principal de la entrega continua es hacer que los lanzamientos/implementaciones para producción sean eventos sin dolor y de bajo riesgo, que puedan realizarse en cualquier momento y bajo demanda. Al aplicar ciertos patrones, es relativamente sencillo lograr implementaciones de tiempo de inactividad cero, es decir, que son indetectables para los usuarios.

* **Tiempo de comercialización más rápido.** Cuando los equipos trabajan juntos para automatizar la compilación y la implementación, el aprovisionamiento de entornos y los procesos de prueba de regresión, los desarrolladores pueden incorporar las pruebas de integración y regresión en su trabajo diario y eliminar por completo estas fases. Por lo tanto, se pueden evitar grandes cantidades de trabajos que afectan al enfoque gradual.

* **Mayor calidad.** Cuando los desarrolladores tienen herramientas automatizadas que descubren regresiones en cuestión de minutos, los equipos se liberan para centrar sus esfuerzos en la investigación de los usuarios y en actividades de pruebas de nivel superior, como pruebas exploratorias, pruebas de usabilidad y pruebas de rendimiento y seguridad. Estas actividades se pueden realizar de forma continua durante todo el proceso de entrega, lo que garantiza la calidad de los productos y servicios desde el principio.

* **Costes más bajos.** Cualquier producto o servicio de software exitoso evolucionará significativamente a lo largo de su vida útil. Al invertir en la compilación, la prueba, la implementación y la automatización del entorno, el costo de hacer y entregar cambios incrementales al software se reduce sustancialmente, ya que se eliminan los costos fijos asociados con el proceso de lanzamiento.

* **Mejores productos.** La entrega continua hace que sea económico trabajar en lotes pequeños. Esto se debe a que el producto recibe comentarios de los usuarios durante todo el ciclo de vida de la entrega en función del software que funciona. Los usuarios pueden probar las ideas para el software antes de crear las funcionalidades enteras, gracias a ciertas técnicas como _A/B Testing_. De esta manera, podemos obtener características que no aportan ningún valor negativo o nulo a la organización o al producto final.

* **Equipos más felices.** Como se mencionó anteriormente, la entrega continua hace que los lanzamientos sean menos dolorosos y, por lo tanto, reduce el agotamiento del equipo. Además, cuando el equipo publica con más frecuencia, los equipos de entrega de software pueden participar más activamente con los usuarios, aprender qué ideas funcionan y cuáles no (ver el punto anterior) y ven de primera mano los resultados del trabajo que han realizado. Al eliminar las actividades dolorosas de bajo valor asociadas con la entrega de software, el equipo puede concentrarse en lo que más nos importa: ***deleitar continuamente a los usuarios.***

Si bien **la entrega continua** puede no ser adecuada para todas las empresas, es un requisito absoluto de **las prácticas de DevOps**. Solo cuando entregue continuamente su código podrá tener la verdadera confianza de que sus cambios serán valiosos para sus clientes a los pocos minutos de presionar el botón de "Iniciar", y de que realmente puede presionar ese botón en cualquier momento y la organización estará lista para ello.

Si esto suena demasiado bueno para ser verdad, tenga en cuenta: ***La entrega continua no es mágica***. Se trata de una mejora diaria y continua: la disciplina constante de lograr un mayor rendimiento siguiendo el método heurístico

> **Si duele, hazlo más a menudo y haz que el dolor avance.**
