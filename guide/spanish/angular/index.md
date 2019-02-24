---
title: Angular
localeTitle: Angular
---
## Angular

Angular (versiones 2 y posteriores) es un marco de código abierto basado en TypeScript para desarrollar aplicaciones web front-end.  Es el sucesr de AngularJS y todas las menciones a Angular se refieren a las versiones a partir de la 2 en adelante. Por favor, revisa la categoría aparte de AngularJS para las guías correspondientes. Angular tiene las siguientes funciones como genéricos, escritura estática y también algunas características de ES6.

## Historial de versiones

Google lanzó la versión inicial de AngularJS el 20 de octubre de 2010. El lanzamiento estable de AngularJS fue el 18 de diciembre de 2017 de la versión 1.6.8. El lanzamiento de la última versión significativa de AngularJS, la versión 1.7, ocurrió el 1 de julio de 2018 y se encuentra en un periodo de soporte a largo plazo de 3 años. El lanzamiento de Angular 2.0 tuvo lugar el 22 de septiembre de 2014 en la conferencia ng-Europe. Una de las características nuevas de Angular 2.0 es la carga dinámica y la mayoría de su funcionalidad central fue cambiada a módulos.

Después de algunas modificaciones, Angular 4.0 fue lanzado en diciembre de 2016. Angular 4 es compatible con versiones anteriores de Angular 2.0 y algunas de sus nuevas funcionalidades fueron la biblioteca HttpClient y el nuevo ciclo de vida de los eventos del ruteador. El lanzamiento de Angular 5 se realizó el 1 de noviembre de 2017. El soporte para aplicaciones web progresivas fue una de las mejoras en Angular 5.0. El lanzamiento de Angular 6 fue en mayo de 2018 y Angular 7 en octubre de 2018. La última versión estable es la [7.2.6] (https://angular.io/guide/releases)

## Instalación

La forma más fácil de instalar Angular es através de la [línea de comandos] (https://cli.angular.io/). Esta herramienta permite la creación de nuevos proyectos y generar componentes, servicios, módulos y todo lo que el equipo de Angular considera mejores prácticas.

### Angular 2.x y Posteriores

#### Instalar Línea de Comandos de Angular (CLI)
```shell
npm install -g @angular/cli
```

#### Crear un Espacio de Trabajo e Iniciar una Aplicación
Puedes crear aplicaciones en el contexto de un espacio de trabajo de Angular. Un espacio de trabajo contiene los archivos para uno o más proyectos. Un proyecto es un conjunto de archivos que comprenden una aplicación, una librería o pruebas de extremo a extremo (e2e).
```shell
ng new my-app
```

#### Correr la Aplicación
Angular incluye un servidor para que fácilmente puedas construir y correr tu aplicación localmente.
  1. Navega hacia la carpeta del espacio de trabajo ('my-app')
  2. Corre el servidor utilizando el comando `ng-serve` con la opción `--open`
```shell
cd my-app
ng serve --open
```

¡Muy bien, Has creado tu primera aplicación en Angular!

Para obtener más información, consulta la documentación oficial de [Angular](https://angular.io/docs) o [Angular CLI](https://cli.angular.io/).

_Nota: Consulte la documentación de Angular para obtener información actualizada._
