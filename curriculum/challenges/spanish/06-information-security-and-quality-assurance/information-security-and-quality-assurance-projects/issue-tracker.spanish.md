---
id: 587d8249367417b2b2512c42
title: Issue Tracker
challengeType: 4
isRequired: true
videoUrl: ''
localeTitle: Rastreador de problemas
---

## Description
<section id="description"> Cree una aplicación de JavaScript de pila completa que sea funcionalmente similar a esto: <a href="https://protective-garage.glitch.me/" target="_blank">https://protective-garage.glitch.me/</a> . Trabajar en este proyecto implicará que escriba su código en Glitch en nuestro proyecto de inicio. Después de completar este proyecto, puede copiar su URL de error público (en la página de inicio de su aplicación) en esta pantalla para probarlo. Opcionalmente, puede optar por escribir su proyecto en otra plataforma, pero debe ser visible públicamente para nuestras pruebas. ¡Comience este proyecto en Glitch usando <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-project-issuetracker/">este enlace</a> o clone <a href="https://github.com/freeCodeCamp/boilerplate-project-issuetracker/">este repositorio</a> en GitHub! Si utiliza Glitch, recuerde guardar el enlace a su proyecto en un lugar seguro. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Prevenir ataques de scripts entre sitios (XSS).
    testString: ''
  - text: 'Puedo POST / api / issues / {projectname} con los datos del formulario que contengan issue_title, issue_text, created_by, y opcional asignado a to y status_text.'
    testString: ''
  - text: 'El objeto guardado (y devuelto) incluirá todos esos campos (en blanco para no entrada opcional) y también incluye created_on (fecha / hora), updated_on (fecha / hora), abierto (booleano, verdadero para abierto, falso para cerrado), y _id.'
    testString: ''
  - text: 'Puedo PUT / api / issues / {projectname} con un ID y cualquier campo en el objeto con un valor para objetar dicho objeto. Devuelto será "actualizado con éxito" o "no se pudo actualizar" + id. Esto siempre debe actualizar updated_on. Si no se envían campos, devuelva "no se envió ningún campo actualizado".'
    testString: ''
  - text: 'Puedo DELETE / api / issues / {projectname} con un ID para eliminar completamente un problema. Si no se envía ningún _id, devuelva "id error", éxito: "eliminado" + id, falló: "no se pudo eliminar" + id.'
    testString: ''
  - text: 'Puedo GET / api / issues / {projectname} para una serie de todos los problemas en ese proyecto específico con toda la información para cada problema que se devolvió cuando se publicó.'
    testString: ''
  - text: 'Puedo filtrar mi solicitud de obtención pasando también cualquier campo y valor en la consulta (es decir, / api / issues / {project}? Open = false). Puedo pasar tantos campos / valores como quiera.'
    testString: ''
  - text: Todas las 11 pruebas funcionales están completas y aprobadas.
    testString: ''

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
