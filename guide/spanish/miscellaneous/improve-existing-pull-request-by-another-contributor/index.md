---
title: Improve Existing Pull Request by Another Contributor
localeTitle: Mejorar la solicitud de extracción existente por otro colaborador
---
Cómo tomar las relaciones públicas de alguien y hacer su propio basado en él manteniendo su compromiso:

1.  Haga una nueva rama, preferiblemente con el PR # del original.

`git checkout -b pr/xyz`

1.  Tire de los cambios a ella.

`git pull git://github.com/rafase282/wiki.git update/pr-guide`

Básicamente, esto significa extracción desde el repositorio **Rafase282 / wiki** , rama **actualización / pr / guía** en su rama actual **pr / xyz** .

1.  Realice sus cambios, agregue, cometa, empuje. Si necesita aplastar, asegúrese de mantener el compromiso del colaborador original intacto.

**Nota** : Es posible que deba forzar push `git push -f origin pr/xyz`

1.  Cree su PR y, en la descripción, haga que cierre el PR original con `closes #xyz`

Eso debería hacer una nueva solicitud de extracción con los cambios originales, más la suya propia en una nueva solicitud de extracción que automáticamente hará referencia y cerrará la original cuando se fusione.