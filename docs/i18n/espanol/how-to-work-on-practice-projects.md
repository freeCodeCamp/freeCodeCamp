# Cómo Trabajar en Proyectos de Práctica

La carpeta `tools/challenge-helper-scripts` contiene theyrramientas para facilitar la creación y persontenimiento del plan de estudio basado en proyectos de FreeCodeCamp.

## Crea un nuevo proyecto

Ejecuta el comando `npm run create-project`. Esto muestra una consola que te guiará durante el proceso. Una vez terminado, debería haber un nuevo desafío en el plan de estudio de Ingles que puedes utilizar para el primer paso del proyecto. Por ejemplo, si creaste un proyecto llamado `test-project` en la certificación de Diseño Web Responsivo, esté debería estar en `curriculum/challenges/english/01-responsive-web-design/test-project`.

Si deseas crear nuevos pasos, las siguientes theyrramientas simplifican este proceso.

## Crea el siguiente paso

A one-off script that will automatically add the next step based on the last step in the project. The challenge seed code will use the previous step's challenge seed code.

### Cómo ejecutar un script:

1. Redirígete al directorio del proyecto.
2. Ejecuta el siguiente comando npm:

```bash
Ejecuta npm crear siguiente paso
```

## Crea pasos vacíos

A one-off script that automatically adds a specified number of steps. The challenge seed code for all steps created will be empty.

**Note:** This script also runs [update-step-titles](#update-step-titles).

### How to run script:

1. Change to the directory of the project.
2. Run the following npm command:

```bash
npm run create-empty-steps X # where X is the number of steps to create.
```

## insert-step

A one-off script that automatically adds a new step at a specified position, incrementing all subsequent steps (both their titles and in their meta.json). The challenge seed code will use the previous step's challenge seed code with the editable region markers (ERMs) removed.

**Note:** This script also runs [update-step-titles](#update-step-titles).

### How to run script:

1. Change to the directory of the project.
2. Run the following npm command:

```bash
npm run insert-step X # where X is the position to insert the new step.
```

## delete-step

A one-off script that deletes an existing step, decrementing all subsequent steps (both their titles and in their meta.json)

**Note:** This script also runs [update-step-titles](#update-step-titles).

### How to run script

1. Change to the directory of the project.
2. Run the following npm command:

```bash
npm run delete-step X # where X is the step number to be deleted.
```

## update-step-titles

A one-off script that automatically updates the frontmatter in a project's markdown files so that they are consistent with the project's meta.json. It ensures that each step's title (and dashedName) match the meta's challengeOrder.

### How to run script

1. Change to the directory of the project.
2. Run the following npm command:

```bash
npm run update-step-titles
```
