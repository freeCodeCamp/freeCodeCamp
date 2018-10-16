---
title: Seed Data in Angular
localeTitle: Datos de Semillas en Angular
---
Las _cosas_ que se muestran en la vista principal de su aplicación son parte de algunos datos semilla que se agregan a su base de datos (incluidos los usuarios de prueba y de administración) cada vez que reinicia su aplicación (ejecutando `grunt serve` en la línea de comandos). Estos datos se definen en **/server/config/seed.js** .

Puede agregar, eliminar o cambiar datos en este archivo, y se escribirá en su base de datos, sobrescribiendo cualquier duplicado la próxima vez que ejecute el `grunt serve` . Si se sobrescribe un objeto definido en **seed.js** , la base de datos asignará una nueva _._ propiedad ID\_ a él (vamos a _cubrir._ ID\_ propiedades en la siguiente sección), que le puede dar algunos problemas más adelante en la prueba. Para evitar esto, puede desactivar la `seedDB: false` configurando `seedDB: false` en **/server/config/environment/development.js** .