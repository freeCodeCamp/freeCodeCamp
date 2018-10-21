---
title: Command-line Interface
localeTitle: Interfaz de línea de comandos
---
## Interfaz de línea de comandos

#### Motivación

Angular está estrechamente asociado con su interfaz de línea de comandos (CLI). El CLI agiliza la generación del sistema de archivos Angular. Se ocupa de la mayoría de las configuraciones detrás de la escena para que los desarrolladores puedan comenzar a codificar. El CLI también tiene una curva de aprendizaje baja recomendada para cualquier recién llegado que quiera saltar. ¡Caramba, incluso los desarrolladores de Angular más experimentados confían en el CLI!

#### Instalación

La CLI angular requiere [Node.js y Node Packet Manager (NPM)](https://nodejs.org/en/) . Puede verificar estos programas con el comando de terminal: `node -v; npm -v` . Una vez instalado, abra un terminal e instale la CLI angular con este comando: `npm install -g @angular/cli` . Esto puede ejecutarse desde cualquier lugar en su sistema. La CLI está configurada para uso global con el indicador `-g` .

Verifique que la CLI esté allí con el comando: `ng -v` . Esto da como resultado varias líneas de información. Una de estas líneas indica la versión del CLI instalado.

Reconozca que `ng` es el componente básico de la CLI. Todos tus comandos comenzarán con `ng` . Es hora de echar un vistazo a cuatro de los comandos más comunes con el prefijo `ng` .

#### Comandos clave

*   ng nuevo
    
*   ng servir
    
*   ng generar
    
*   ng construir
    
*   ng actualización
    

Los términos clave para cada uno de estos son bastante reveladores. Juntos, comprenden lo que necesitarás para comenzar a correr con Angular. Por supuesto, hay muchos más. Todos los comandos se describen en la [documentación 1 de GitHub de](https://github.com/angular/angular-cli/wiki#additional-commands) la [CLI](https://github.com/angular/angular-cli/wiki#additional-commands) . Es probable que encuentre que los comandos enumerados anteriormente cubrirán las bases necesarias.

#### ng nuevo

`ng new` crea un _nuevo_ sistema de archivos angular. Este es un proceso surrealista. Por favor, navegue a una ubicación de archivo deseable para la _nueva_ generación de aplicaciones. Escriba este comando de la siguiente manera, reemplazando `[name-of-app]` con lo que desee: `ng new [name-of-app]` .

Debería aparecer un sistema de archivos en la carpeta `[name-of-app]` . Siéntete libre de explorar lo que hay dentro. Trate de no hacer ningún cambio todavía. Todo lo que necesita para ejecutar su primera aplicación Angular viene empaquetado en este sistema de archivos generado.

#### ng servir

Para que la aplicación se ejecute, el comando `ng serve` debe ejecutarse dentro de la carpeta `[name-of-app]` . Cualquier lugar dentro de la carpeta hará. La CLI angular debe reconocer que está dentro de un entorno generado con `ng new` . Se ejecutará siempre que esta condición. Anímate y pruébalo: `ng serve` .

La aplicación se ejecuta en el puerto 4200 por defecto. Puede ver la aplicación Angular navegando a `localhost:4200` en cualquier navegador web. Trabajos angulares en todos los navegadores. A menos que esté utilizando una versión anterior de Internet Explorer, la aplicación se abrirá. Muestra el logotipo oficial de Angular junto con una lista de enlaces útiles.

Ok, la aplicación se ejecuta. Esperemos que funcione, pero necesita saber qué está pasando debajo del capó. Consulte el sistema de archivos `[name-of-app]` . Navegue `[name-of-app] -> src -> app` . Ahí están los archivos responsables de lo que viste en `localhost:4200` .

#### ng generar

Los archivos `.component` definen un componente angular que incluye su lógica ( `.ts` ), estilo ( `.css` ), diseño ( `.html` ) y pruebas ( `.spec.ts` ). La `app.module.ts` destaca especialmente. Juntos, estos dos grupos de archivos trabajan juntos como `component` y `module` . Tanto el `component` como el `module` son dos ejemplos separados de esquemas angulares. Los esquemas clasifican los diferentes bloques de código _orientados_ a un _propósito generable_ con `ng generate` .

Por el bien de este artículo, entienda que un `module` exporta e importa activos hacia y desde un árbol de componentes subyacente. Un `component` ocupa de una sección de la interfaz de usuario. La lógica, el estilo, el diseño y las pruebas de esa unidad permanecen encapsulados dentro de los diversos archivos `.component` .

En cuanto a `ng generate` , este comando puede generar esqueletos para cada uno de los [esquemas angulares 2](https://github.com/angular/angular-cli/wiki/generate#available-schematics) disponibles. Vaya a `[name-of-app -> src -> app]` . Intente generar un nuevo `component` ejecutando: `ng generate component [name-of-component]` . Reemplace `[name-of-component]` con lo que quiera. Aparecerá un nuevo archivo `[name-of-component]` junto con sus archivos de `component` necesarios.

Puedes ver que `ng generate` acelera el [código de](https://en.wikipedia.org/wiki/Boilerplate_code) Angular. `ng generate` también cables de las cosas. Los esquemas creados dentro del contexto de un sistema de archivos Angular se conectan con el módulo raíz del sistema. En este caso, sería el archivo `app.module.ts` dentro de `[name-of-app -> src -> app]` .

#### ng construir

Angular es una herramienta frontal. El CLI realiza sus operaciones en nombre de la interfaz de usuario. `ng serve` se encarga de la configuración del servidor back-end. Esto mantiene el desarrollo completamente enfocado en la parte frontal. Dicho esto, también debe ser posible conectar su propio back-end a la aplicación Angular.

`ng build` satisface esta necesidad. Antes de probarlo dentro del sistema de archivos. Vaya a `[name-of-app] -> angular.json` . Busque esta única línea de código: `"outputPath": "dist/my-app"` .

Esta única línea de configuración determina dónde `ng build` descarga sus resultados. Los resultados son la aplicación Angular completa compilada en una carpeta `dist/my-app` . Dentro de esa carpeta, existe `index.html` . Toda la aplicación Angular puede ejecutarse con `index.html` . No es necesario ningún `ng serve` desde aquí. Con este archivo, puede conectar fácilmente su extremo posterior.

Dale una oportunidad: `ng build` . De nuevo, esto debe ejecutarse dentro del sistema de archivos Angular. Basado en el valor clave de `“outputPath:”` en `angular.json` . Se generará un archivo en el que la aplicación original está completamente compilada. Si mantienes el mismo `“outputPath:”` , la aplicación compilada estará en: `[name-of-app] -> dist -> [name-of-app]` .

#### ng actualización

En la actualización angular, haga una actualización automática de todos los paquetes angulares y npm a las últimas versiones.

Aquí está la sintaxis y las opciones se pueden usar con `ng update` .

`ng update [package]`

**Opciones**

*   correr en seco `--dry-run (alias: -d)`
    
    Ejecutar sin hacer ningún cambio.
    
*   fuerza `--force`
    
    Si es falso, se producirá un error si los paquetes instalados son incompatibles con la actualización.
    
*   todas `--all`
    
    Ya sea para actualizar todos los paquetes en package.json.
    
*   siguiente `--next`
    
    Usa la versión más grande, incluyendo beta y RCs.
    
*   solo migrar `--migrate-only`
    
    Solo realiza una migración, no actualiza la versión instalada.
    
*   de `--from`
    
    Versión desde la cual migrar. Solo disponible con un único paquete que se está actualizando, y solo en migración solamente.
    
*   a `--to`
    
    Versión según la cual aplicar las migraciones. Solo disponible con un solo paquete que se actualiza, y solo en migraciones solamente. Requiere de a ser especificado. Predeterminado a la versión instalada detectada.
    
*   registro `--registry`
    
    El registro de NPM a utilizar.
    

#### Conclusión

Estos comandos cumplen con los conceptos básicos. La CLI de Angular es una comodidad increíble que acelera la generación, configuración y expansión de aplicaciones. Hace todo esto mientras mantiene la flexibilidad, lo que permite al desarrollador hacer los cambios necesarios.

Por favor revise esos enlaces en `localhost:4200` si aún no lo ha hecho. No olvides ejecutar `ng serve` antes de abrirlo. Con una mejor comprensión de la CLI, ahora está listo para aprender más sobre lo que se genera con sus comandos más esenciales.

### Fuentes

1.  [Google. "Angular / angular-cli / wiki # comandos-adicionales". GitHub.](https://github.com/angular/angular-cli/wiki#additional-commands)
    
2.  [Google. “Angular / angular-cli / wiki / genera # esquemas disponibles”. GitHub.](https://github.com/angular/angular-cli/wiki/generate#available-schematics)
    

### Recursos

*   [Sitio web de CLI angular](https://cli.angular.io)
    
*   [CLI LECTURA angular](https://github.com/angular/angular-cli#angular-cli)
    
*   [Documentación de CLI angular](https://github.com/angular/angular-cli/wiki)