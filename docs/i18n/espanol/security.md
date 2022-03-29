# Política de seguridad

Este documento describe nuestra política de seguridad para los códigos, plataformas que operamos, y cómo reportar vulnerabilidades.

## Informar una vulnerabilidad

Si crees que has encontrado una vulnerabilidad, _informa responsablemente_. No crees temas de GitHub para problemas de seguridad. En su lugar, por favor envía un correo electrónico a `security@freecodecamp.org` y lo estudiaremos inmediatamente.

Asegúrese de que está usando la **última**, **estable** y **actualizaron** versión del sistema operativo y del navegador Web disponible para usted en su máquina.

Apreciamos cualquier divulgación responsable de vulnerabilidades que puedan afectar la integridad de nuestras plataformas y usuarios.

Una vez que informe de una vulnerabilidad, la examinaremos y nos aseguraremos de que no sea un falso positivo. Nos pondremos en contacto con usted si necesitamos aclarar cualquier detalle. Puedes enviar informes separados para cada número que encuentres.

Aunque no ofrecemos ninguna recompensa o swags en este momento, Estaremos encantados de listar tu nombre en nuestra lista de [Hall of Fame](security-hall-of-fame.md), siempre y cuando los informes no sean de bajo esfuerzo.

Consideramos el uso de theyrramientas y utilidades en línea para informar problemas con configuraciones SPF y DKIM, o pruebas de servidor SSL, etc. en la categoría de ["recompensas"](https://www.troyhunt.com/beg-bounties/) y no pueden responder a estos informes.

## Plataformas y Bases de Código

Aquí hay una lista de las plataformas y bases de código para las que estamos aceptando informes:

### Plataforma de aprendizaje

| Versión    | Rama           | Soportado | Sitio web activo         |
| ---------- | -------------- | --------- | ------------------------ |
| producción | `prod-current` | Sí        | `freecodecamp.org/learn` |
| escenario  | `prod-staging` | Sí        | `freecodecamp.dev/learn` |
| desarrollo | `principal`    | No        |                          |

### Plataforma de publicación

| Versión    | Soportado | Sitio web activo                         |
| ---------- | --------- | ---------------------------------------- |
| producción | Sí        | `freecodecamp.org/news`                  |
| localizado | Sí        | `freecodecamp.org/<language>/news` |

### Aplicación Móvil

| Versión    | Soportado | Sitio web activo                                                 |
| ---------- | --------- | ---------------------------------------------------------------- |
| producción | Sí        | `https://play.google.com/store/apps/details?id=org.freecodecamp` |

Aparte de lo anterior, también estamos aceptando informes para repositorios alojados en GitHub, bajo la organización freeCodeCamp.

Auto-alojamos algunas de nuestras plataformas utilizando software de código abierto como Ghost & Discourse. Si está reportando una vulnerabilidad, asegúrese de que no es un error en el software original.
