---
title: Writing Good Git Commit Messages
localeTitle: Escribir buenos mensajes de Git Commit
---
1.  Separar sujeto del cuerpo con una línea en blanco.
2.  Limite la línea de asunto a 50 caracteres
3.  Capitalizar la línea de asunto
4.  No termine la línea de asunto con un punto
5.  Utilice el estado de ánimo imperativo en la línea de asunto
6.  Envuelve el cuerpo a 72 caracteres
7.  Usa el cuerpo para explicar qué y por qué frente a cómo

**Una línea de asunto de git commit correctamente formada siempre debe poder completar la siguiente oración:**

> Si se aplica, esta confirmación será _`<<your subject line here>>`_

**Por ejemplo:**

*   Si se aplica, este compromiso **_Refactorizará el subsistema X para facilitar la lectura._**
*   Si se aplica, esta confirmación **_actualizará la documentación de inicio._**
*   Si se aplica, esta confirmación **_eliminará los métodos en desuso._**
*   Si se aplica, este commit lanzará la **_versión 1.0.0._**
*   Si se aplica, esta confirmación **_fusionará la solicitud de extracción \# 123 del usuario / rama_**

**Observe cómo esto no funciona para las otras formas no imperativas:**

*   Si se aplica, esta confirmación _solucionará el error con Y_
*   Si se aplica, esta confirmación _cambiará el comportamiento de X_
*   Si se aplica, esta confirmación tendrá _más correcciones para las cosas rotas._
*   Si se aplica, esta confirmación será _dulce nuevos métodos API_

**Recuerde: el** _uso del imperativo es importante solo en la línea de asunto. Puedes relajar esta restricción cuando estás escribiendo el cuerpo._

**Referencia:** [http://chris.beams.io/posts/git-commit](http://chris.beams.io/posts/git-commit)