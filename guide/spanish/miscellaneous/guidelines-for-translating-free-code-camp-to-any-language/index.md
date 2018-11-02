---
title: Guidelines for Translating Free Code Camp to Any Language
localeTitle: Pautas para traducir Free Code Camp a cualquier idioma
---
Muchas gracias por su interés en traducir FreeCodeCamp. Se recomienda leer este documento para participar en un esfuerzo colectivo para llevar FreeCodeCamp a más y más personas en todo el mundo.

## ¿Cómo contribuir a las traducciones?

Hay varias formas en las que puedes contribuir en colaboración a las traducciones. Cada esfuerzo de traducción generalmente sigue el flujo de trabajo a continuación.

> _Sugerencia profesional: puede contribuir a cualquiera o todas las fases siguientes en el flujo de trabajo según su interés._

*   [Revisa el trabajo de otro traductor](https://forum.freecodecamp.com/t/guidelines-for-translating-free-code-camp-to-any-language/19111/3) .
*   [Crear problemas de `Translation` para seguir el progreso](https://forum.freecodecamp.com/t/guidelines-for-translating-free-code-camp-to-any-language/19111/4) .
*   [Implementar Traducciones](https://forum.freecodecamp.com/t/guidelines-for-translating-free-code-camp-to-any-language/19111/5) .
*   [Crear solicitudes de extracción para agregar las traducciones a la base de código](https://forum.freecodecamp.com/t/guidelines-for-translating-free-code-camp-to-any-language/19111/6)

## Pautas y recursos

### Reglas generales

*   Trate de no ser demasiado formal pero no demasiado informal, solo para mantener las cosas amigables.
*   Para hacer que los contenidos sean más comprensibles para los hablantes nativos de su idioma de destino (piense en aquellos que no hablan inglés), traduzca todo lo que pueda, intente usar una palabra en inglés solo si ya se usa ampliamente en los países. donde se habla su idioma de destino.

### Glosario

Es eficiente si todos los traductores que trabajan en el mismo idioma crean un glosario que muestra la traducción de las palabras en inglés empleadas en los desafíos de FreeCodeCamp. A veces hay más de una forma de traducir algunos términos, y las diferencias regionales pueden crear confusión (por ejemplo, algunos términos pueden diferir entre el español de España y América Latina, o entre el idioma francés empleado en Canadá y en Francia). ¡Sé democrático! Elija la traducción más adecuada votando y mantenga un registro de los resultados. Un ejemplo de dicho registro se puede encontrar aquí: [FreeCodeCamp Glossary (inglés a español)](https://docs.google.com/spreadsheets/d/1c60Sl4MAAsZ7biCPgur7A4aVqhErIfwrE1SulPqbOGo/edit#gid=0) Use la sala de chat para discutir el glosario, para que nadie se pierda nada.

### Si necesitas ayuda con Google Translator Toolkit

Puede encontrar ayuda para automatizar el proceso de traducción empleando el kit de herramientas de traducción de Google, consulte [la guía en español.](https://github.com/vtamara/fcc_trad)

### Creando una instancia de prueba de FreeCodeCamp

Ver el producto final a medida que avanza con la traducción puede ayudarlo a mantenerse motivado. Por eso es una buena idea crear una instancia de prueba de FreeCodeCamp donde pueda incluir los cambios más recientes de la traducción del idioma en el que está trabajando y usar FreeCodeCamp, incluidos esos cambios. La siguiente instancia de prueba se creó para la versión en español de FreeCodeCamp: [Getting Started](https://github.com/freeCodeCamp/freeCodeCamp/blob/staging/seed/challenges/00-getting-started/getting-started.json) . Para crear una instancia de prueba, siga los siguientes pasos:

1.  Siga las instrucciones de la [página Contribución,](https://github.com/FreeCodeCamp/FreeCodeCamp/blob/staging/CONTRIBUTING.md) asegúrese de poder ver una instancia en ejecución en inglés
2.  Abra [Supported Languages.js](https://github.com/freeCodeCamp/freeCodeCamp/blob/staging/common/utils/supported-languages.js) y agregue el idioma de su instancia (por ejemplo, `es: 'Spanish'` ), reinicie su instancia.
3.  Cambie la url con un prefijo de su idioma (por ejemplo, para español, `/en/challenges/` to `/es/challenges/` ), si la página ha sido traducida, debería poder verla.
4.  Busque el archivo de idioma, intente buscar palabras clave en su repositorio, puede encontrar todos los desafíos en `/seed/challenges/` por ejemplo, la página de _[Introducción](https://github.com/freeCodeCamp/freeCodeCamp/blob/staging/seed/challenges/00-getting-started/getting-started.json)_ se encuentra en `freeCodeCamp/seed/challenges/00-getting-started/getting-started.json` _[Getting](https://github.com/freeCodeCamp/freeCodeCamp/blob/staging/seed/challenges/00-getting-started/getting-started.json)_ `freeCodeCamp/seed/challenges/00-getting-started/getting-started.json` _[Getting](https://github.com/freeCodeCamp/freeCodeCamp/blob/staging/seed/challenges/00-getting-started/getting-started.json)_ `freeCodeCamp/seed/challenges/00-getting-started/getting-started.json`
5.  ¡Feliz traducción!
6.  Antes de enviar PR, asegúrese de **NO** incluir `supported-lamguages.js` en su confirmación, ( `$ git reset -- common/utils/supported-languages.js` )
7.  El último pero no el menos importante, asegúrese de seguir todas las reglas en [la Guía del contribuyente](https://github.com/freeCodeCamp/freeCodeCamp/blob/staging/CONTRIBUTING.md) .
8.  Gracias por tu contribución!

### Referencias

*   [Documentación del código fuente de FreeCodeCamp.](https://github.com/FreeCodeCamp/FreeCodeCamp/blob/staging/README.md)
*   [Extraer solicitud de contribución](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Pull-Request-Contribute)
*   [Archivos de ayuda para traducir los desafíos e indicaciones de FreeCodeCamp usando Google Translator Toolkit.](https://github.com/vtamara/fcc_trad/blob/master/README.md)
*   [Guía del colaborador](https://github.com/freeCodeCamp/freeCodeCamp/blob/staging/CONTRIBUTING.md)

Si lo encuentra útil, puede traducir estas instrucciones a su idioma y adaptarlas a su equipo de traducción (ver, por ejemplo, el [original en español](https://github.com/vtamara/fcc_trad/blob/master/Recomendaciones.md) ) [.](https://github.com/vtamara/fcc_trad/blob/master/Recomendaciones.md)

_Esta guía se basa en [este artículo](https://github.com/vtamara/fcc_trad/blob/master/Recomendaciones.EN.md) ._