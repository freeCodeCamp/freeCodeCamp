---
title: How to Install Node Js and Npm on Windows
localeTitle: Cómo instalar Node Js y Npm en Windows
---
## Cómo instalar Node Js y Npm en Windows

Instalar Node.js y Npm en Windows es muy sencillo.

Primero, descargue el instalador de Windows del [sitio web Node.js.](https://nodejs.org/) Tendrá la opción entre la versión **LTS** (Soporte a largo plazo) o la Versión **actual** .

*   La versión **actual** recibe las últimas funciones y se actualiza más rápidamente
*   La versión de **LTS** foregos presenta cambios para mejorar la estabilidad, pero recibe parches como correcciones de errores y actualizaciones de seguridad

Una vez que haya seleccionado una versión que satisfaga sus necesidades, ejecute el instalador. Siga las indicaciones para seleccionar una ruta de instalación y asegúrese de que se **incluya** la **función del administrador de paquetes npm** junto con el **tiempo de ejecución Node.js.** Esta debería ser la configuración por defecto.

Reinicie su computadora una vez finalizada la instalación.

Si instaló bajo la configuración predeterminada, Node.js ahora debe agregarse a su PATH. Ejecute el símbolo del sistema o powershell e ingrese lo siguiente para probarlo:
```
> node -v 
```

La consola debe responder con una cadena de versión. Repita el proceso para Npm:
```
> npm -v 
```

Si ambos comandos funcionan, su instalación fue un éxito, ¡y puede comenzar a usar Node.js!

#### Más información:

Para obtener más información y guías, visite la [página de documentos de Node.js.](https://nodejs.org/en/docs/)