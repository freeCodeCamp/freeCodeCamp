---
title: Git Hooks
localeTitle: Git ganchos
---
## Git ganchos

Los Git Hooks son scripts ubicados en el `.git/hooks/` de un repositorio de git. Estos scripts se ejecutan después de ser activados por diferentes etapas en el proceso de control de versiones.

### Muestras

En este directorio hay un puñado de scripts de muestra, como `pre-commit.sample` . Esta muestra en particular se ejecuta cada vez que un usuario ejecuta `git commit` . Si el script de enganche sale con un estado distinto de 0, la confirmación se detiene.

### Documentación

*   [Documentación para Git Hooks](https://git-scm.com/docs/githooks)
*   [Atlassian Tutorial en Git Hooks](https://www.atlassian.com/git/tutorials/git-hooks)
*   [Guía de ganchos de Git](http://githooks.com/)