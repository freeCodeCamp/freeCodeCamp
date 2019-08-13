---
title: Git Hooks
localeTitle: Git ganchos
---
## Hooks de Git

Los Hooks de Git son scripts ubicados en el directorio `.git/hooks/` de cualquier repositorio de git. Estos scripts se ejecutan después de ser activados por diferentes etapas en el proceso de control de versiones.

### Ejemplos

En este directorio hay varios scripts de muestra, como `pre-commit.sample`. Este ejemplo en particular se ejecuta cada vez que un usuario ejecuta `git commit`. Si el Hook devuelve un valor distinto de 0, la confirmación se detiene.

### Documentación

*   [Documentación de Git Hooks](https://git-scm.com/docs/githooks)
*   [Tutorial de Atlassian de Git Hooks](https://www.atlassian.com/git/tutorials/git-hooks)
*   [Guía de Hooks de Git](http://githooks.com/)