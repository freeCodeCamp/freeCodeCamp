---
title: Behavior Driven Development
localeTitle: Desarrollo guiado por el comportamiento
---
## Desarrollo guiado por el comportamiento

Behavior Driven Development (BDD) es un proceso de desarrollo de software que surgió de ![Test Driven Development (TDD)](../test-driven-development/index.md) . Behavior Driven Development combina las técnicas y principios generales de TDD con ideas de diseño impulsado por dominios y análisis y diseño orientados a objetos para proporcionar equipos de gestión y desarrollo de software con herramientas compartidas y un proceso compartido para colaborar en el desarrollo de software. Es una metodología de desarrollo de software en la que se especifica y se diseña una aplicación al describir cómo debe aparecer su comportamiento ante un observador externo.

Aunque BDD es principalmente una idea acerca de cómo el desarrollo de software debe gestionarse tanto por intereses comerciales como por conocimientos técnicos, la práctica de BDD asume el uso de herramientas de software especializadas para respaldar el proceso de desarrollo.

Si bien estas herramientas a menudo se desarrollan específicamente para su uso en proyectos BDD, pueden verse como formas especializadas de las herramientas que soportan el desarrollo guiado por pruebas. Las herramientas sirven para agregar automatización al lenguaje ubicuo que es un tema central de BDD.

BDD se centra en:

*   Por dónde empezar en el proceso
*   Qué probar y qué no probar
*   Cuánto probar en una sola vez
*   Como llamar a las pruebas
*   Cómo entender por qué falla una prueba

En el corazón de la BDD se encuentra un replanteamiento del enfoque de las pruebas unitarias y las pruebas de aceptación que surgen naturalmente con estos problemas. Por ejemplo, BDD sugiere que los nombres de las pruebas unitarias sean oraciones completas que comiencen con un verbo condicional ("debería" en inglés, por ejemplo) y que se escriban en orden de valor comercial. Las pruebas de aceptación se deben escribir utilizando el marco ágil estándar de una historia de usuario: "Como _función_ , quiero una _característica_ para que se _beneficie_ ". Los criterios de aceptación deben escribirse en términos de escenarios e implementarse como clases: dado _el contexto inicial_ , cuando _ocurre un evento_ , luego se _aseguran algunos resultados_ .

Ejemplo
```
Story: Returns go to stock 
 
 As a store owner 
 In order to keep track of stock 
 I want to add items back to stock when they're returned. 
 
 Scenario 1: Refunded items should be returned to stock 
 Given that a customer previously bought a black sweater from me 
 And I have three black sweaters in stock. 
 When he returns the black sweater for a refund 
 Then I should have four black sweaters in stock. 
 
 Scenario 2: Replaced items should be returned to stock 
 Given that a customer previously bought a blue garment from me 
 And I have two blue garments in stock 
 And three black garments in stock. 
 When he returns the blue garment for a replacement in black 
 Then I should have three blue garments in stock 
 And two black garments in stock. 
```

Junto con ello se encuentran algunos beneficios:

1.  Todo el trabajo de desarrollo se puede remontar directamente a los objetivos del negocio.
2.  El desarrollo de software satisface las necesidades del usuario. Usuarios satisfechos = buen negocio.
3.  Priorización eficiente: las características críticas para el negocio se entregan primero.
4.  Todas las partes tienen un entendimiento compartido del proyecto y pueden participar en la comunicación.
5.  Un lenguaje compartido garantiza que todos (técnicos o no) tengan una visibilidad completa de la progresión del proyecto.
6.  Diseño de software resultante que se adapta a las necesidades comerciales futuras y compatibles.
7.  Código de calidad mejorado que reduce los costos de mantenimiento y minimiza el riesgo del proyecto.

## Más información

*   Wiki en [BDD](https://en.wikipedia.org/wiki/Behavior-driven_development)
*   Un marco bien conocido de Behavior Driven Development (BDD) es [Cucumber](https://cucumber.io/) . Cucumber soporta muchos lenguajes de programación y puede integrarse con una serie de marcos; por ejemplo, [Ruby on Rails](http://rubyonrails.org/) , [Spring Framework](http://spring.io/) y [Selenium](http://www.seleniumhq.org/)
*   https://inviqa.com/blog/bdd-guide