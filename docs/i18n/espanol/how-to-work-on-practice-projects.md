# Cómo Trabajar en Proyectos de Práctica

La carpeta `tools/challenge-helper-scripts` contiene herramientas para facilitar la creación y mantenimiento del plan de estudio basado en proyectos de FreeCodeCamp.

## Crea un nuevo proyecto

Ejecuta el comando `npm run create-project`. Esto muestra una consola que te guiará durante el proceso. Una vez terminado, debería haber un nuevo desafío en el plan de estudio de Ingles que puedes utilizar para el primer paso del proyecto. Por ejemplo, si creaste un proyecto llamado `test-project` en la certificación de Diseño Web Responsivo, esté debería estar en `curriculum/challenges/english/01-responsive-web-design/test-project`.

Si deseas crear nuevos pasos, las siguientes herramientas simplifican este proceso.

## Crea el siguiente paso

Un script único que automáticamente agregará el siguiente paso basado en el último paso del proyecto. El código de semilla de desafío utilizará el código de semilla de desafío del paso anterior.

### Cómo ejecutar un script:

1. Redirígete al directorio del proyecto.
2. Ejecuta el siguiente comando npm:

```bash
Ejecuta npm crear siguiente paso
```

## Crea pasos vacíos

Un script único que agrega automáticamente un número determinado de pasos. El código para todos los pasos creados estará vacío.

**Nota:** Este script también ejecuta [reorder-steps](#update-step-titles).

### Cómo ejecutar un script:

1. Redirígete al directorio del proyecto.
2. Ejecuta el siguiente comando npm:

```bash
npm run create-empty-steps X # donde X es el número de pasos a crear.
```

## insert-step

Un script único que agrega automáticamente un nuevo paso en una posición especificada, incrementando todos los pasos posteriores (tanto sus títulos como en su meta.json). El código principal del desafío, utilizará el código de los desafíos de pasos anteriores, con los marcadores de región editables (ERM) eliminados.

**Nota:** Este script también ejecuta [reorder-steps](#update-step-titles).

### Cómo ejecutar el script:

1. Redirígete al directorio principal del proyecto.
2. Ejecuta el siguiente comando npm:

```bash
npm run insert-step X # donde X es la posición para insertar el nuevo paso.
```

## Eliminar un paso

Un script único que elimina un paso existente, decrementando todos los pasos posteriores (tanto sus títulos como en su meta.json)

**Nota:** Este script también ejecuta [reorder-steps](#update-step-titles).

### Cómo ejecutar el script

1. Redirígete al directorio principal del proyecto.
2. Ejecuta el siguiente comando npm:

```bash
npm ejecuta delete-step X # donde X es el número de paso a ser eliminado.
```

## update-step-titles

Un script único que actualiza automáticamente la materia frontal en los archivos markdown de un proyecto para que sean consistentes con el meta.json del proyecto. Garantiza que el título de cada paso (y dashedName) coincida con el challengeOrder del meta.

### Cómo ejecutar un script

1. Redirígete al directorio del proyecto.
2. Ejecuta el siguiente comando npm:

```bash
npm run update-step-titles
```
