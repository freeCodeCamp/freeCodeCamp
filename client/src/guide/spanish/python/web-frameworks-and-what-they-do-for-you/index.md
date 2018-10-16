---
title: Python Web Frameworks and What They Do 
localeTitle: Python Web Frameworks y lo que hacen
---
Hemos usado la palabra `framework` bastante liberal en los artículos anteriores. Puede o no estar familiarizado con lo que es eso. No obstante, discutiremos qué es lo que Python Web Frameworks hace por usted, listo para usar.

Web Frameworks, para decirlo de manera informal, hace por usted lo que estaría haciendo _repetidamente_ si construyera muchos sitios web con diferentes funcionalidades.

Tomemos un ejemplo extremadamente crudo e intentemos hacer una analogía simple. Oye, vas a cenar, y es un restaurante elegante. Podría ser cualquier tipo de restaurante: italiano, mexicano, indio, coreano, panasiático.

Trate de pensar en las cosas comunes que suceden en un restaurante cuando entra un cliente. Un valet puede tomar su automóvil y validar el estacionamiento. Es posible que se le pregunte en la recepción si tenía reserva; y cuantos de tus amigos estan contigo Probablemente te mostrarán a tu mesa o te pedirán que esperes, dependiendo de la multitud que hay dentro.

Una vez sentado, se le preguntará si desea agua regular o embotellada. Entonces alguien te preguntaría si prefieres las bebidas. Puede ordenar algunos entrantes, seguido de un plato principal; y por fin, un poco de postre. Tienes que pagar la factura.

Entiendo que si desea tomarse un momento para hacer un viaje por el camino de los recuerdos, disfrute de un delicioso baño de dientes. Una vez que haya terminado, debe ponerse en la posición de la persona que dirige el negocio.

Si se da cuenta, hay algunas actividades que está realizando repetidamente para cada cliente. Y según el tipo de restaurante y la hora del día, hay algunas cosas que serían diferentes. Por ejemplo, el menú y los precios de los alimentos.

Diga, usted está dirigiendo el negocio; También necesitaría manejar otros aspectos de este negocio que un cliente no tendría en cuenta. Por ejemplo; El salario del personal, la administración de libros, el pago de alquileres e impuestos sobre la propiedad, la impresión de nuevas tarjetas de menú, etc.

Te estás preguntando hacia dónde se dirige esta conversación. ¡Cálmese! Estamos volviendo a Python Web Development ASAP.

Un Web Framework realiza estas actividades repetitivas por usted, lo que haría cuando construye una aplicación web utilizando solo un lenguaje de programación y algunas bibliotecas de red. Manejo de solicitudes, enrutamiento de URL, compilación de plantillas, configuración de contexto, protección CSRF, registro, interacción de base de datos a través de ORM, autenticación, procesamiento de respuestas, etc.

Probablemente se esté preguntando qué debe hacer el desarrollador para el desarrollador. En función de la aplicación, debe utilizar las API del marco y escribir la lógica específica de su aplicación.

Su código llenará los espacios vacíos que se dejaron _intencionalmente_ en el código del marco y combinará su código con el marco; ¡Tu aplicación web habría tenido vida en ella!

Dos de los frameworks web más populares en Python son Django y Flask. Django es probablemente el framework Python más usado que existe. Django lo ayuda a crear sitios web en los que interactúa con su cliente (usuario) y su base de datos, a menudo simultáneamente. Flask es un micro-marco, que también puede hacer gran parte de las tareas que realiza Django, pero mediante el uso de extensiones creadas por la comunidad. Otros marcos que vale la pena mencionar son los pilones y tornados.

### Django

Django (/ ˈdʒæŋɡoʊ / JANG-goh) es un marco web gratuito y de código abierto, escrito en Python, que sigue el patrón arquitectónico modelo-vista-plantilla (MVT). Es mantenido por la Django Software Foundation (DSF), una organización independiente establecida como una organización sin fines de lucro 501 (c) (3).

El objetivo principal de Django es facilitar la creación de sitios web complejos basados ​​en bases de datos. Django hace hincapié en la reutilización y la "conectividad" de los componentes, el rápido desarrollo y el principio de no repetirse. Python se utiliza en todo, incluso para los archivos de configuración y los modelos de datos. Django también proporciona una interfaz administrativa opcional de creación, lectura, actualización y eliminación que se genera dinámicamente a través de la introspección y se configura a través de modelos de administración.

Algunos sitios conocidos que usan Django incluyen el Servicio de transmisión pública, Instagram, Mozilla, The Washington Times, Disqus, Bitbucket y Nextdoor. Se usó en Pinterest, pero más tarde el sitio se trasladó a un marco construido sobre Flask.

### Matraz

Flask es una aplicación web WSGI liviana y un micro marco que se clasifica como un microframo porque no requiere herramientas o bibliotecas particulares. Está diseñado para que el inicio sea rápido y fácil, con la capacidad de escalar a aplicaciones complejas. Sin embargo, Flask admite extensiones que pueden agregar características de la aplicación como si estuvieran implementadas en el mismo Flask. Existen extensiones para mapeadores objeto-relacionales, validación de formularios, manejo de carga, varias tecnologías de autenticación abierta y varias herramientas relacionadas con el marco común. Las extensiones se actualizan mucho más regularmente que el programa Flask principal. Flask se usa comúnmente con MongoDB (NOSQL DataBase) que le permite tener más control sobre las bases de datos y el historial.

Comenzó como un envoltorio simple alrededor de Werkzeug y Jinja y se ha convertido en uno de los marcos de aplicaciones web de Python más populares.

Flask ofrece sugerencias, pero no impone ninguna dependencia ni diseño del proyecto. Es responsabilidad del desarrollador elegir las herramientas y bibliotecas que desea utilizar. La comunidad proporciona muchas extensiones que facilitan la adición de nuevas funciones.

Flask fue creado en 2004 por un grupo internacional de pitones llamado "Pocoo", como una broma de April Fools que luego se convirtió en algo "real". Según Wikpedia, fue el framework web Python más utilizado en Github. Es un micro-marco gratuito y de código abierto escrito en Python ( [ver en GitHub](https://github.com/freeCodeCamp/guide/tree/master/src/pages/javascript) ). Como dice la Wikipedia,

Flask está clasificado como microframework porque no requiere herramientas o bibliotecas particulares. No tiene una capa de abstracción de base de datos, validación de formularios ni ningún otro componente en el que las bibliotecas de terceros preexistentes proporcionen funciones comunes.

Flask es en gran medida un marco de "baterías no incluidas", en comparación con algo como Django. Esto significa que necesita instalar módulos como la autenticación de usuario, formularios y otras cosas por su cuenta. No quiere decir que Flask no esté hecho para esas cosas, simplemente que no están incluidos y esos módulos están hechos por la comunidad. Flask también tiene documentación extensa y detallada disponible en http://flask.pocoo.org/docs/. Proporciona simplicidad y más control sobre cosas más pequeñas. No tendrá una funcionalidad que no se esté utilizando, ya que puede elegir qué agregar y qué no.

Los sitios que utilizan Flask incluyen Pinterest! (que pasó de Django), las API privadas de Twilio (incluso hicieron una extensión llamada Flask-RESTful para las API) y Netflix (que usa ScriptFlask, una herramienta basada en Flask)

### Botella

Bottle es un micro marco de Python que permite a los usuarios ponerse en marcha rápidamente con una aplicación web de Python. Es mucho más ligero que algo más completo como Django, y no tiene dependencias de terceros que dependan solo de la biblioteca estándar de Python.

Esto lo hace perfecto para aplicaciones web pequeñas donde no se requerirían algunas de las funciones más avanzadas de Django, como la autenticación o el acceso a la base de datos.