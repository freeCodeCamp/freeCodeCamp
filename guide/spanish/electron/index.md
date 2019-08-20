---
title: Electron
localeTitle: Electrón
---
## Electron: cree aplicaciones de escritorio multiplataforma con JavaScript, HTML y CSS

Electron le permite crear aplicaciones de escritorio multiplataforma utilizando tecnología web. Tú puede crear aplicaciones de escritorio para Windows, Mac y las versiones más comunes de Linux.

### Que es Electrón exactamente?

Electron está en realidad construído sobre dos teconologñias: Node.js (o simplemente Node) y Chromium (la versión de código abierto de Google Chrome). Usa tecnologías web como HTML, JavaScript y CSS para crear aplicaciones de Electron. Esto significa que se pueden usar la mayoría de las tecnologías web que desees para crear una aplicación de escritorio nativa. Por ejemplo, podría usar [React](https://medium.freecodecamp.org/building-an-electron-application-with-create-react-app-97945861647c) o [Angular](https://scotch.io/tutorials/creating-desktop-applications-with-angularjs-and-github-electron) para crear su primera aplicación de escritorio.

Así, cualquier aplicación web que hayas creado puede correr sobre Electrón. Igualmente, cualquier aplicación creada en Node puede correr sobre Electrón.
Pero la potencia de Electron reside en que puedes usar ambas soluciones juntas. Esto además significa que cualquier código de Chrome puede correr sobre Electrón, lo cual reduce los problemas de  compatibilidad entre navegadores que mantienen a tantos desarrolladores con imsomnio despiertos en la noche.

Además, Electrón viene con soporte para actualización automática, informes de fallas, y menús nativos.

Las características principales se pueden explorar utilizando las [demostraciones de Electron API.](https://github.com/electron/electron-api-demos)

### Ventajas de Electrón
Las aplicaciones Electrón son similares a cualquier otra aplicación de escritorio que este instalada localmente en el disco duro del usuario.
Pueden ser lanzadas directamente desde el Doc de OSX o la barra de tareas de Windows, y no hay necesidad de lanzar el navegador y navegar a ninguna url para lanzar la aplicación. Cuando necesitas abrir un fichero guardado, los diálogos son nativos en apariencia e interacción. Una aplicación Electrón da soporte a interacciones drag-and-drop con el sistema de ficheros local, o incluso asociar con un tipo de fichero, de modo que cuando un usuario hace doble click, la aplicación lo abrirá.

Electrón además nos proporciona la habilidad de tener menús de aplicación personalizados que se ajusten a las pautas de interfaz de usuario de cada plataforma. Los menús contextuales están disponibles para permitir al usuario  hacer clic con el botón secundario/botón derecho para mostrar el menú personalizado. Si necesitamos activar una notificación de todo el sistema, podemos aprovechar la API de notificación de Chromium para hacerlo.
Electron irá incluso más lejos que las aplicaciones de escritorio de ventanas tradicionales y creará aplicaciones que solo viven en la barra de menú o en la bandeja del sistema. En resumen, Electron proporciona un marco sólido que le permitirá desarrollar aplicaciones de escritorio de primera clase.

### Desventajas de Electron
Esencialmente crea una instancia completa de Chrome, lo cual puede constituir un problema de memoria.

Algunas aplicaciones creadas usando Electron incluyen:

*   [Atom](https://atom.io/) (editor de texto de código abierto de GitHub)
*   [Código de Visual Studio](https://code.visualstudio.com) (editor de texto de código abierto de Microsoft)
*   [Skype](https://www.skype.com/) (la popular aplicación de video chat de Microsoft)
*   [Slack](https://slack.com/) (Una aplicación de mensajería para equipos)
*   [Discord](https://discordapp.com) (una popular aplicación de mensajería para jugadores)
*   [GitHub Desktop](https://desktop.github.com/) (Cliente de escritorio GitHub oficial)

### Código de referencia
- [Electron y React](https://github.com/electron-react-boilerplate/electron-react-boilerplate)

### Información adicional de referencias

*   [Sitio oficial](https://electronjs.org/)
*   [Video - ¿Que es Electron?](https://www.youtube.com/watch?v=8YP_nOCO-4Q&feature=youtu.be)
*   \[Electron and Vue\]: https://medium.com/@kswanie21/electron-vue-js-f6c40abeb625
*   \[Electron and React\]: https://medium.freecodecamp.org/building-an-electron-application-with-create-react-app-97945861647c
*   \[Electron y Angular\]: https://scotch.io/tutorials/creating-desktop-applications-with-angularjs-and-github-electron
