---
title: npm
localeTitle: asl
---
## npm

npm es un administrador de paquetes y se utiliza para instalar y administrar dependencias.

npm es fundamental para la vibrante comunidad de JavaScript (y específicamente para Node.js), al hacer que la reutilización de módulos y códigos en proyectos sea muy simple. Actualmente, npm tiene más de 500,000 paquetes disponibles.

npm es útil no solo para proyectos del lado del servidor. Las bibliotecas front-end más populares como Bootstrap y Font Awesome también están disponibles.

**Nota:**

*   npm sale de la caja con Node.js por lo que es necesario instalar Node.js primero
*   npm no tiene una forma completa debido a su uso más allá de los proyectos específicos de Node.js. Anteriormente se llamaba Node Package Manager.

### npm Uso

npm se usa comúnmente desde la línea de comando. Los comandos que se dan a continuación son posiblemente los más importantes para comenzar:
```
npm init 
```

Ejecutar este comando en el directorio raíz de su proyecto lo inicializa para usarlo con npm creando un archivo `package.json` . Se le pedirá la Nombre del proyecto, descripción, nombre del autor y más. Esta información se utiliza para rellenar el archivo `package.json` , que también contendrá el Información sobre las dependencias y requerimientos del proyecto. Puede alterar esa información manualmente más tarde.
```
npm install [name-of-package] 
```

Esto instala automáticamente un paquete y todas sus dependencias, y lo guarda en el archivo `package.json` . Si está instalando una dependencia de desarrollo, es posible que desee utilizar el `--save-dev` o `-D` . npm guardará el paquete como una dependencia de desarrollo.

Los paquetes se instalan localmente en el directorio `node_modules` en el directorio raíz de su proyecto. A veces es posible que desee tener un paquete disponible en diferentes proyectos. Esto se hace con el interruptor `--global` o `-g` . Esto suele ser útil para las herramientas de desarrollo y las utilidades de línea de comandos.
```
npm install 
```

Al ejecutar npm install en el directorio raíz de un proyecto sin un nombre de paquete específico, instala todas las dependencias necesarias para ese proyecto. Esos son Calculado de acuerdo al archivo `package.json` del proyecto. Esto demuestra el poder de npm, donde un solo comando puede alcanzar decenas o cientos de dependencias automáticamente para usted, y es útil cuando se `git clone` un repositorio, por ejemplo.

#### Más información:

*   Sitio web de Node.js: [nodejs](https://nodejs.org)
*   El sitio web oficial de npm, puede leer sobre npm, así como buscar los diferentes paquetes disponibles: [npmjs](https://www.npmjs.com)
*   Leer más sobre npm: [Wikipedia](https://en.wikipedia.org/wiki/Npm_(software))
*   Una guía para principiantes de npm: [sitepoint](https://www.sitepoint.com/beginners-guide-node-package-manager/)
*   Si quieres una serie completa de videos, mira esto: [youtube](https://youtu.be/6fj0cpmMiVg)
*   Y aquí está la serie oficial de npm: [youtube.](https://youtu.be/pa4dc480Apo)