---
title: Transferring a Heroku Project Between Nonprofit Project Owners
localeTitle: Transferencia de un proyecto Heroku entre propietarios de proyectos sin fines de lucro
---
## Heroku:

Una vez que la persona que recibirá la aplicación Heroku haya creado una cuenta de Heroku, siga los pasos que se encuentran aquí para transferirla: [https://devcenter.heroku.com/articles/transferring-apps](https://devcenter.heroku.com/articles/transferring-apps)

## MLAB:

Cree una cuenta de "usuario" de MLAB para la persona a la que desea transferir su base de datos de MLAB: [http://docs.mlab.com/accounts/#account-users](http://docs.mlab.com/accounts/#account-users)

Luego tendrían que reasignar sus privilegios de administrador a la cuenta que acaba de crear: [http://docs.mlab.com/accounts/#re-assign-admin-privileges-admin-only](http://docs.mlab.com/accounts/#re-assign-admin-privileges-admin-only)

## GitHub o BitBucket

Los nuevos propietarios del proyecto pueden bifurcar su repositorio existente o puede transferir la propiedad de él en GitHub: [https://help.github.com/articles/about-repository-transfers/](https://help.github.com/articles/about-repository-transfers/)

Para transferirlo a BitBucket: [https://confluence.atlassian.com/bitbucket/change-or-transfer-repository-ownership-289964397.html](https://confluence.atlassian.com/bitbucket/change-or-transfer-repository-ownership-289964397.html)

## Asegúrate de que no queden llaves en tu historial de Git

Si su proyecto será de código abierto, tenga cuidado de eliminar cualquier clave (en primer lugar, nunca deberían haberse comprometido, pero es mejor tarde que eliminarlas nunca). Aquí es cómo buscar a través de su historial de código para ellos:

Si encuentra una clave en algún lugar de su repositorio, o descubre que un archivo confidencial como su .env se confirmó en algún momento, puede borrarlo de su historial de git con BFG: [https://help.github.com/articles / eliminar datos sensibles /](https://help.github.com/articles/remove-sensitive-data/)