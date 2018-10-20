---
title: How to Run Google App Engine in Fedora Using Python
localeTitle: Cómo ejecutar Google App Engine en Fedora usando Python
---
Este artículo cubre la guía paso a paso para instalar Google App Engine en su sistema operativo Fedora usando python.

*   Sigue los pasos en esta documentación de [Google.](https://cloud.google.com/appengine/docs/python/#uploading_the_application)

Probar la aplicación como se indica en el documento anterior puede no funcionar para muchos.

Por lo tanto, intente [esto](http://stackoverflow.com/a/16970921) como lo dio Brice Lin.

Además, siga la estrategia de implementación proporcionada por Brice Lin. Para ello abre otra terminal (si lo deseas).

*   Antes de realizar la implementación, debe crear el proyecto en Google Cloud Platform. Sigue los pasos de [Carga de la aplicación.](https://cloud.google.com/appengine/docs/python/#uploading_the_application)
    
*   Pero seguir la estrategia de implementación anterior puede no funcionar para muchos. Y un error como este puede seguir:
    
    `ERROR appcfg.py:2396 An error occurred processing file '': HTTP Error 400: Bad Request Unexpected HTTP status 400\. Aborting. Error 400: --- begin server output --- A version or backend parameter is required. --- end server output ---`
    

Este error se produce debido a la falta de la declaración de la versión en el archivo **app.yaml** . Entonces agregue la `version: 1` en el archivo **app.yaml** en el repositorio de la aplicación. Aquí, `helloworld` es el repositorio. Ahora funcionará. Feliz Codificación y Aplicación.

No olvide consultar este enlace: [Desarrollar e implementar una aplicación en Google App Engine en Youtube.](https://www.youtube.com/watch?v=bfgO-LXGpTM)