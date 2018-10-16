---
title: Getting Started with Back End Projects
localeTitle: Comenzando con proyectos de back-end
---
El plan de estudios hacia el primer Proyecto Back End no es muy completo. Aquí hay una serie de recursos comunes que otros campistas han encontrado útiles.

*   Introducción a Yeoman - Muchos consejos y trucos útiles para la configuración de Fullstack Angular de Yeoman
*   [Angular Generator](https://github.com/DaftMonk/generator-angular-fullstack#generators) : generador utilizado por Yeoman. Puede encontrar la sintaxis y los archivos que crea.

## APIs

*   API para registrar el mercado de valores: [https://www.quandl.com/help/api](https://www.quandl.com/help/api)

## MEAR Stack Tutorials & Videos

*   Serie de 5 partes sobre la configuración de una pila MEAN  
    [https://www.youtube.com/watch?v=kHV7gOHvNdk](https://www.youtube.com/watch?v=kHV7gOHvNdk)
*   Un tutorial MEAN que crea un simple clon de Twitter  
    [https://channel9.msdn.com/Series/MEAN-Stack-Jump-Start](https://channel9.msdn.com/Series/MEAN-Stack-Jump-Start)
*   Clementine es una pila de MEAN reducida, ideal para aprender los fundamentos.  
    [https://johnstonbl01.github.io/clementinejs/tutorials/tutorial-beginner.html](https://johnstonbl01.github.io/clementinejs/tutorials/tutorial-beginner.html)
*   Autenticación con pasaporte para la pila MEAN:  
    [https://vickev.com/#!/article/authentication-in-single-page-applications-node-js-passportjs-angularjs](https://vickev.com/#!/article/authentication-in-single-page-applications-node-js-passportjs-angularjs)
*   Una increíble lista de recursos para aprender la pila MEAN:  
    [https://github.com/ericdouglas/MEAN-Learning](https://github.com/ericdouglas/MEAN-Learning)

## Scotch IO Tutorials

*   [https://scotch.io/tutorials/setting-up-a-mean-stack-single-page-application](https://scotch.io/tutorials/setting-up-a-mean-stack-single-page-application)
*   [https://scotch.io/tutorials/node-and-angular-to-do-app-application-organization-and-structure](https://scotch.io/tutorials/node-and-angular-to-do-app-application-organization-and-structure)

## Nodo / Expreso

*   [Depuración en línea para Node.js / Express](http://stackoverflow.com/a/16512303/1420506)

## Nube 9 trucos

### Acelere las recargas del navegador

1.  Abra gruntfile.js y edite ambas instancias de `livereload: true` a `livereload: false` .
2.  Abra server / config / express.js y comente la línea `app.use(require('connect-livereload')());`