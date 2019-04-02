---
title: Semantic UI
localeTitle: IU semántica
---
## IU semántica

#### Introducción

La interfaz de usuario semántica es un marco de desarrollo de aplicaciones para usuario similar al bootstrap diseñado para la tematización. Contiene componentes semánticos pre-construidos que ayudan a crear diseños hermosos y sensibles utilizando HTML amigable para los humanos.

De acuerdo con el sitio web de la interfaz de usuario semántica, el marco utiliza HTML conciso, JavaScript intuitivo y depuración simplificada para hacer que un desarrollo de aplicaciones para usuario sea una experiencia divertida y agradable. Y se integra con React, Angular, Meteor, Ember y muchos otros marcos para ayudar a organizar la capa de UI junto con la lógica de la aplicación.

#### Historial de versiones

El primer prelanzamiento aparece en github en septiembre de 2013, creado por [Jack Lukic](https://github.com/jlukic) .

Semantic UI `1.x` se lanzó por primera vez en noviembre de 2014 con los últimos cambios en los lanzamientos anteriores.

Semantic UI `2.x` se lanzó por primera vez en junio de 2015 e introdujo una nueva interfaz de usuario, varias correcciones de errores, mejoras y mejoras de temas predeterminadas.

#### Soporte del navegador

La versión actual `2.2.x` soporta los siguientes navegadores

*   Últimas 2 versiones FF, Chrome, Safari Mac
*   IE 11+
*   Android 4.4+, Chrome para Android 44+
*   iOS Safari 7+
*   Microsoft Edge 12+

#### Instalación

Hay varias formas de instalar la interfaz de usuario semántica, algunas de las formas más simples son las siguientes:

1.  **A través de la red de entrega de contenido (CDN)**

Es, con mucho, la más fácil para los principiantes. Crea un archivo HTML como abajo

```html

<!DOCTYPE html> 
 <html> 
  <head> 
    <title>Semantic UI</title> 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.css"> 
    <!-- Add custom stylesheet here --> 
  </head> 
  <body> 
 
    <!-- Write your html code here --> 
 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.js"></script> 
  </body> 
 </html> 
```

`NOTE:` El enlace CDN anterior en la línea 5 incluirá todos los componentes disponibles en la interfaz de usuario semántica. Si desea instalar un componente específico, [haga clic aquí](https://cdnjs.com/libraries/semantic-ui) para ver su enlace CDN respectivo.

2.  **Usando herramientas de construcción**

Esto supondrá que está utilizando el sistema operativo Ubuntu Linux con `node` y `npm` instalados, para otros sistemas operativos, [haga clic aquí](https://semantic-ui.com/introduction/getting-started.html)

En el directorio de su proyecto, instale Gulp globalmente usando npm
```
npm install -g gulp 
```

Instalar la interfaz de usuario semántica
```
npm install semantic-ui --save 
 cd semantic/ 
 gulp build 
```

Incluir en HTML

```html

<link rel="stylesheet" type="text/css" href="semantic/dist/semantic.min.css"> 
 <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script> 
 <script src="semantic/dist/semantic.min.js"></script> 
```

Actualizar Via npm
```
npm update 
```

3.  **Integración con otros frameworks**

Puede integrar la interfaz de usuario semántica con otros marcos de desarrollo de front-end como React, Angular, Ember o Meteor. [Haga clic aquí](https://semantic-ui.com/introduction/integrations.html) para obtener más información e instrucciones de integración.

#### Más información

La interfaz de usuario semántica tiene una documentación completa y muy bien organizada, que lo pondrá en funcionamiento en muy poco tiempo. Los siguientes enlaces serán útiles en su viaje de IU semántica.

*   [Sitio web de UI semántico](https://semantic-ui.com/)
*   [Comenzando con la interfaz de usuario semántica](https://semantic-ui.com/introduction/getting-started.html)
*   [Plantillas de interfaz de usuario semánticas de muestra](https://semantic-ui.com/usage/layout.html#pages)
*   [Personalización y creación de temas de la interfaz de usuario semántica](http://learnsemantic.com/)