---
title: Continuous Integration
localeTitle: Integración continua
---
## Integración continua

En su forma más básica, la integración continua (CI) es una metodología de desarrollo ágil en la que los desarrolladores combinan regularmente su código directamente con la fuente principal, generalmente una rama `master` remota. Con el fin de garantizar que no se introduzcan cambios de ruptura, se ejecuta un conjunto de pruebas completo en cada compilación potencial para realizar una prueba de regresión del nuevo código, es decir, probar que el nuevo código no rompe las funciones existentes.

Este enfoque requiere una buena cobertura de prueba del código base, lo que significa que la mayoría, si no todo, del código tiene pruebas que garantizan que sus funciones sean completamente funcionales. Idealmente, la integración continua se practicaría junto con el desarrollo completo [impulsado por pruebas](https://guide.freecodecamp.org/agile/test-driven-development) .

### Pasos principales

Los siguientes pasos básicos son necesarios para realizar el enfoque actual más estándar para la integración continua.

1.  Mantener un repositorio central y una rama `master` activa.

Tiene que haber un repositorio de código para que todos puedan unirse y extraer los cambios. Esto puede ser en Github o en cualquier número de servicios de almacenamiento de código.

2.  Automatiza la construcción.

Usando scripts NPM o herramientas de compilación más complejas como Yarn, Grunt, Webpack o [Gulp](https://guide.freecodecamp.org/developer-tools/gulp) , automatice la compilación para que un solo comando pueda construir una versión completamente funcional del producto, lista para ser implementada en un entorno de producción. Mejor aún, ¡incluye la implementación como parte de la compilación automatizada!

3.  Haz que la compilación ejecute todas las pruebas.

Para verificar que nada en el nuevo código rompa la funcionalidad existente, se debe ejecutar el conjunto completo de pruebas y la compilación debe fallar si falla alguna de las pruebas dentro de ella.

4.  Todo el mundo tiene que fusionar cambios para `master` todos los días.
    
5.  Cada fusión en el `master` tiene que ser construida y completamente probada.
    

### Prácticas recomendadas

Existen algunas prácticas recomendadas que hacen el mejor uso de lo que CI tiene para ofrecer y los desafíos que presenta, tales como:

1.  Mantenga la compilación rápida, para que no se desperdicie mucho tiempo de desarrollador esperando una compilación.
    
2.  Probar la construcción en un clon completo del entorno de producción.
    

Si, por ejemplo, tiene una aplicación implementada en algo como Heroku o Digital Ocean, tiene una implementación de prueba por separado en la que puede implementar compilaciones de prueba para asegurarse de que no solo funcionan en pruebas sino en un entorno de producción real. Este entorno de prueba debe ser funcionalmente idéntico al entorno de producción real, para garantizar que la prueba sea precisa.

3.  Que sea fácil mantenerse al día.

Los codificadores deben extraer regularmente de la rama `master` para seguir integrando su código con los cambios de su equipo. El repositorio también debe estar disponible para las partes interesadas, como gerentes de producto, ejecutivos de la compañía o, a veces, clientes clave, para que todos puedan ver fácilmente el progreso.

4.  Mantenga registros de las compilaciones, de modo que todos puedan ver los resultados de cualquier compilación dada, si tuvo éxito o no, y quién o qué introdujo nuevos cambios.
    
5.  Automatizar el despliegue.
    

Mantenga su aplicación completamente actualizada con cualquier cambio nuevo al automatizar la implementación en el entorno de producción como la etapa final del proceso de compilación, una vez que todas las pruebas hayan pasado y la implementación de la prueba en el clon del entorno de producción haya tenido éxito.

### Servicios de CI

Existen muchos servicios para manejar el proceso de integración continua para usted, lo que puede hacer que sea mucho más fácil establecer un canal de CI sólido o un proceso de construcción. Al evaluar esto, tenga en cuenta factores como el presupuesto, la velocidad de construcción y el tipo de proyecto en el que está trabajando. Algunos servicios, como [Travis CI,](https://travis-ci.org) ofrecen servicios gratuitos para proyectos de código abierto, lo que puede hacer que sean una opción fácil para proyectos como ese, pero pueden tener versiones más lentas que otros servicios, como [Circle CI](https://circleci.com/) o [Codeship](https://codeship.com/) , por nombrar solo algunos.

#### Más información:

La entrada de Wikipedia sobre la [integración continua](https://en.wikipedia.org/wiki/Continuous_integration) .
