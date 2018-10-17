---
title: Penetration Testing
localeTitle: Pruebas de penetración
---
La prueba de penetración es un método que muchas compañías siguen para minimizar sus brechas de seguridad. Esta es una forma controlada de contratar a un profesional que intentará piratear su sistema y mostrarle las lagunas que debe solucionar. En ocasiones, las pruebas de penetración pueden reducir los sistemas y hacer que la empresa pierda el tiempo de actividad, es una buena práctica realizar pruebas de penetración en una versión de preproducción del entorno de producción.

Antes de realizar una prueba de penetración, es obligatorio tener un acuerdo que mencione explícitamente los siguientes parámetros:

*   ¿Cuál será el tiempo de prueba de penetración,
*   ¿Dónde estará la fuente de IP del ataque, y
*   Cuáles serán los campos de penetración del sistema.

Las pruebas de penetración son realizadas por hackers éticos profesionales que utilizan principalmente herramientas comerciales de código abierto, automatizan herramientas y verificaciones manuales. No hay restricciones; El objetivo más importante aquí es descubrir tantas fallas de seguridad como sea posible. Muchas compañías grandes ofrecen recompensas a cualquiera que pueda señalar las vulnerabilidades de seguridad en sus sistemas, a través de lo que se llama [programas de recompensas de errores](https://en.wikipedia.org/wiki/Bug_bounty_program) . Google, por ejemplo, ofrecerá decenas de miles de dólares a través de su Programa de recompensas de vulnerabilidad.

## Fases de la prueba de penetración

Hay cinco fases principales de las pruebas de penetración. Son:

1.  **Reconocimiento**
    *   Aquí es donde un probador de penetración recopila tanta información sobre sus posibles objetivos. Algunos métodos utilizados en esta etapa son búsquedas de Google / Bing, búsquedas de whois, escaneos de Netcraft e ingeniería social.
2.  **Exploración**
    *   Una vez que el probador de penetración ha recopilado toda la información y ha decidido a qué objetivo (s) desea atacar, debe asegurarse de que el (los) objetivo (s) esté vivo (s) y buscar elementos como puertos abiertos, servicios activos y cualquier vulnerabilidad actual. que el sistema de destino tiene abierto.
3.  **Explotación**
    *   Una vez que se completa el escaneo y se han evaluado las vulnerabilidades, el probador de penetración puede usar esa información para descubrir su vector de ataque. En esta fase, el probador de penetración busca un exploit que utiliza una de las vulnerabilidades que se encontraron en la etapa anterior para obtener acceso al sistema objetivo.
4.  **Manteniendo el acceso**
    *   Esta fase es donde el probador de penetración garantiza que tendrán suficiente tiempo para probar el sistema objetivo. Pueden intentar evitar cualquier medida de prevención / detección de intrusos para terminar sus pruebas.
5.  **Cubriendo pistas**
    *   Una vez que se completa el ataque, el evaluador de concentración puede tomar medidas para ocultar su intrusión y posiblemente dejar atrás los medios de acceso persistente para permitir una prueba de concepto a su cliente.

## Tipos de Pruebas de Penetración

Tenemos cinco tipos de pruebas de penetración -

1.  **Caja negra** : aquí, el hacker ético no tiene ninguna información sobre la infraestructura o la red de la organización en la que está tratando de penetrar. En las pruebas de penetración de la caja negra, el hacker intenta encontrar la información por sus propios medios.
    
2.  **Gray Box** : es un tipo de prueba de penetración donde el hacker ético tiene un conocimiento parcial de la infraestructura, como su servidor de nombres de dominio.
    
3.  **Caja blanca** : en las pruebas de penetración de caja blanca, el pirata informático ético recibe toda la información necesaria sobre la infraestructura y la red de la organización en la que debe penetrar.
    
4.  **Pruebas de penetración externa** : este tipo de pruebas de penetración se centra principalmente en la infraestructura de red o los servidores y su software que opera bajo la infraestructura. En este caso, el hacker ético intenta el ataque utilizando redes públicas a través de Internet. El pirata informático intenta piratear la infraestructura de la empresa atacando sus páginas web, servidores web, servidores DNS públicos, etc.
    
5.  **Pruebas de penetración internas** : en este tipo de pruebas de penetración, el hacker ético está dentro de la red de la empresa y realiza sus pruebas desde allí.
    

Las pruebas de penetración también pueden causar problemas, como un mal funcionamiento del sistema, un fallo del sistema o la pérdida de datos. Por lo tanto, una empresa debe tomar riesgos calculados antes de seguir adelante con las pruebas de penetración. El riesgo se calcula de la siguiente manera y es un riesgo de gestión.

**RIESGO = Amenaza × Vulnerabilidad**

## Ejemplo

Usted tiene un sitio web de comercio electrónico en línea que está en producción. Quieres hacer una prueba de penetración antes de hacerlo en vivo. Aquí, tienes que sopesar los pros y los contras primero. Si sigue adelante con las pruebas de penetración, podría causar la interrupción del servicio. Por el contrario, si no desea realizar una prueba de penetración, puede correr el riesgo de tener una vulnerabilidad sin parches que permanecerá como una amenaza todo el tiempo. Antes de realizar una prueba de penetración, se recomienda que escriba el alcance del proyecto por escrito. Debes tener claro lo que se va a probar. Por ejemplo

*   Su empresa tiene una VPN o cualquier otra técnica de acceso remoto y desea probar ese punto en particular.
*   Su aplicación tiene servidores web con bases de datos, por lo que es posible que desee hacer una prueba de ataques de inyección de SQL, que es una de las pruebas más importantes en un servidor web. Además, puede verificar si su servidor web es inmune a los ataques DoS.

## Consejos rápidos

Antes de continuar con una prueba de penetración, debe tener en cuenta los siguientes puntos: Primero entienda sus requerimientos y evalúe todos los riesgos.

*   Contrate a una persona certificada para realizar la prueba de penetración porque están capacitados para aplicar todos los métodos y técnicas posibles para descubrir posibles lagunas en una red o aplicación web.
*   Siempre firme un acuerdo antes de hacer una prueba de penetración.

## Recursos

[Pruebas de penetración](https://en.wikipedia.org/wiki/Penetration_test)