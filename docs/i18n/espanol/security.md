# Política de Seguridad de freeCodeCamp.org

Este documento describe nuestra política de seguridad para los códigos, plataformas que operamos, y cómo reportar vulnerabilidades.

## Informar una vulnerabilidad

> [!NOTE] Si crees que has encontrado una vulnerabilidad, **por favor, informa de ella de forma responsable**. No cree propuestas de GitHub para problemas de seguridad. En su lugar, siga esta guía.

### Directrices

Agradecemos la divulgación responsable de las vulnerabilidades que puedan afectar a la integridad de nuestras plataformas y usuarios. En aras de ahorrar tiempo a todo el mundo, le animamos a informar de las vulnerabilidades teniendo en cuenta esto:

1. Asegúrese de que está utilizando las versiones **más recientes**, **estables** y **actualizadas** del sistema operativo y del navegador o navegadores web disponibles en su máquina.
2. Consideramos que el uso de herramientas y utilidades en línea para informar de problemas con las configuraciones de SPF y DKIM, las pruebas del servidor SSL, etc., entra en la categoría de ["mendigar recompensas"](https://www.troyhunt.com/beg-bounties) y no podemos responder a estos informes.
3. Aunque por el momento no ofrecemos recompensas ni botines, estaremos encantados de incluir tu nombre en nuestra lista del [Salón de la Fama](security-hall-of-fame.md), siempre que los informes no sean de bajo esfuerzo.

### Reportando

Después de confirmar las directrices anteriores, no dude en enviar un correo electrónico a `possible-security-issue [at] freecodecamp.org`. También puede enviarnos un mensaje cifrado con PGP a `flowcrypt.com/me/freecodecamp`.

Una vez que nos informe de una vulnerabilidad, la investigaremos y nos aseguraremos de que no sea un falso positivo. Si necesitamos aclarar algún detalle, nos pondremos en contacto con usted. Puede enviar informes separados para cada problema que encuentre. Tenga en cuenta que no podremos responder a las cuestiones que consideremos que están fuera de las directrices.

## Plataformas y Bases de Código

Esta es una lista de las plataformas y bases de código para las que aceptamos informes:

### Plataforma de Aprendizaje

| Versión    | Rama           | Soportado | Sitio web activo         |
| ---------- | -------------- | --------- | ------------------------ |
| producción | `prod-current` | Sí        | `freecodecamp.org/learn` |
| escenario  | `prod-staging` | Sí        | `freecodecamp.dev/learn` |
| desarrollo | `principal`    | No        |                          |

### Plataforma de Publicación

| Versión    | Soportado | Sitio web activo                         |
| ---------- | --------- | ---------------------------------------- |
| producción | Sí        | `freecodecamp.org/news`                  |
| localizado | Sí        | `freecodecamp.org/<language>/news` |

### Aplicación Móvil

| Versión    | Soportado | Sitio web activo                                                 |
| ---------- | --------- | ---------------------------------------------------------------- |
| producción | Sí        | `https://play.google.com/store/apps/details?id=org.freecodecamp` |

### Otras Plataformas

Aparte de lo anterior, también aceptamos informes para los repositorios alojados en GitHub bajo la organización de freeCodeCamp.

### Otras Aplicaciones Autoalojadas

Algunas de nuestras plataformas las alojamos nosotros mismos utilizando software de código abierto como Ghost y Discourse. Si está informando de una vulnerabilidad, asegúrese de que no se trata de un error en el software de origen.
