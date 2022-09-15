# Estructura de archivos del currículo

Nuestro contenido instructivo principal se encuentra dentro del directorio convenientemente llamado `curriculum`. Esta página desglosará cómo están organizados estos archivos.

## Terminología

Hay algunos términos que utilizamos cuando hablamos del contenido de nuestro currículo.

- `certification` : Cuando se hace referencia a una certificación en este caso, se está hablando del certificado real que los usuarios reclaman.  Que es independiente del nombre del súper bloque.
- `superBlock` : Un súper bloque es la colección de desafíos del nivel superior. Cada súper bloque corresponde a una certificacion en el currículo (p. ej. Diseño Web Responsivo).
- `block` : Un bloque es una sección dentro de un súper bloque. Un bloque corresponde a un grupo de desafíos en una certificacion determinada (p. ej. HTML Básico y HTML5)
- `challenge`: Un desafío es una sola lección dentro del currículo (p. ej. Di hola a los Elementos HTML)

## Árbol de archivos

Usando esos términos, así es como se definiría la estructura de archivos:

<!-- prettier-ignore -->
```md

curriculum/
├─ _meta/
│  ├─ {block}/
│  │  ├─ meta.json
├─ {language}/
│  ├─ {superBlock}/
│  │  ├─ {block}/
│  │  │  ├─ {challenge}.md
```

## El directorio `_meta`

El directorio `_meta` es un directorio especial que contiene archivos `.json`. Estos archivos corresponden a cada bloque en el currículo y son utilizados para determinar a qué súper bloque pertenece cada bloque y el orden de los desafíos dentro de ese bloque.

## Renombrando archivos

Puede haber ocasiones en las que necesites renombrar un certificado, súper bloque, bloque o desafío. Esta sección describirá los pasos necesarios para evitar errores de compilación al hacerlo.

> [!ATTENTION] Renombrar archivos dentro de la estructura del currículo puede cambiar a menudo la ruta (o URL) del contenido en la página web principal. Debe hacerse con cuidado, ya que se deben establecer redireccionamientos para cada cambio que se realice.

### Renombrando una certificación

Al renombrar una certificación, es probable que desees renombrar el súper bloque asociado junto a ella. Haz lo siguiente para renombrar sólo el certificado:

1. Cambia el nombre de la carpeta `curriculum/challenges/_meta/{superBlock}-certificate` por el nuevo nombre.
1. En el archivo `meta.json` de esa carpeta, cambia los valores en `name`, `dashedName` y `challengeOrder` al nuevo nombre de certificado.
1. En `curriculum/challenges/english/12-certificate`, cambia el nombre de la carpeta `{superBlock}-certificate` y el archivo YAML dentro de ella, por el nuevo nombre.
1. En el archivo YAML, cambia el `title` por el nuevo nombre.
1. Renombra el archivo y la carpeta del paso 3 para el resto de los lenguajes del currículo.
1. Actualiza `client/src/redux/index.ts` para que utilice el `title` correcto.
1. Como alternativa, actualiza el `certSlug` para el súper bloque en el mismo archivo.  **Ten en cuenta** que renombrar un `certSlug` cambiará el URL para las certificaciones y solo debe hacerse con consideración.
1. Actualiza el `title` en `client/src/resources/cert-and-project-map.ts` por el nuevo valor. **Ten en cuenta que** cambiar el `title` aquí **romperá** la página del súper bloque asociada a la certificación. Depende del título del súper Bloque para que coincida con el título de la certificación. Es probable que desees renombrar el súper bloque al mismo tiempo.
1. Si renombraste `certSlug` en el paso 7, cámbialo aquí para el "cert" y todos los valores de `projects` anidados.
1. En `config/certification-settings.js`, actualiza el valor de `certTypeTitleMap` al nuevo nombre.
1. Si renombraste el `certSlug` en el paso 7, actualiza la clave de `certSlugTypeMap` en el mismo archivo.
1. Actualiza el nombre del certificado en el arreglo `legacyCerts` dentro del `client/src/client-only-routes/show-project-links.tsx` si es necesario.
1. Actualiza el archivo principal `README.md` al nuevo nombre.

### Renombrar un súper bloque

> [!NOTE] Cuando renombras un súper bloque, el nuevo nombre de carpeta es usado como la ruta y debe considerarse el nombre "correcto". Todos los demás valores deben actualizarse para reflejar ese cambio.

Además, es probable que desees renombrar el certificado y el bloque  `{superBlock}-projects` cuando renombres un súper bloque, ya que todos comparten un nombre. Para renombrar solamente un súper bloque necesitas:

1. Renombrar la carpeta del super bloque en el directorio `curriculum/challenges/english`.
1. Renombra la carpeta súper bloque en _todos_ los otros directorios `curriculum/challenges/{language}`.
1. Para cada bloque dentro del súper bloque, actualice el valor `superBlock` en el archivo  `meta.json` a su nombre con guiones. No necesitas renombrar ninguna carpeta aquí. Hazlo cuando renombres un bloque.
1. Renombra la carpeta súper bloque en `client/src/pages/learn`.
1. Actualiza el archivo `index.md` en la carpeta superior, cambiado los valores de `title` y `superBlock` al nuevo nombre.
1. Para cada carpeta de bloque dentro de la superior, actualiza el `index.md` para que utilice el valor de `superBlock` correcto.
1. En el archivo `cliente/src/recursos/cert-and-project-map.ts`, actualiza la ruta para certificado en la parte superior del archivo y el valor `title` para ese súper bloque. **Ten en cuenta** que cambiar el `title` aquí **interrumpirá** la capacidad de ver la certificación real para este súper bloque. Depende del título del súper Bloque para que coincida con el título de la certificación. Es probable que desees renombrar la certificación al mismo tiempo.
1. Actualiza la clave `superBlockCertTypeMap` en `config/certification-settings.js` al nuevo nombre del súper Bloque.
1. Actualiza el valor de la ruta en `client/src/assets/icons/index.tsx`.
1. Para cada idioma en `client/i18n/locales`, actualiza el archivo `intro.json` para que utilice el nuevo `dashedName` (nombre con guiones) del súper Bloque. En el archivo en inglés, actualiza también el `title`.
1. Verifique el archivo `config/i18n/all-langs.js` para ver si el súper Bloque está habilitado en las compilaciones de i18n. Actualiza todos los valores donde sea usado.
1. Actualiza el archivo principal `README.md` al nuevo nombre.

### Renombrando un bloque

Cuando renombras un bloque del currículo, tienes que:

1. Cambiar el nombre de la carpeta del bloque en el directorio `curriculum/challenges/english/{superBlock}`.
1. Cambiar el nombre de la misma carpeta de bloque en _todos_ los demás directorios de lenguajes para que coincidan. Estos deben ser todos iguales a la estructura en inglés o se producirá un error en la compilación.
1. Cambiar el nombre de la carpeta del bloque en el directorio `_meta`.
1. Actualizar las propiedades `nombre` y `dashedName` (nombre con guiones) del archivo `meta.json` de ese bloque.
1. Actualizar el `client/utils/help-category-map.json` para que utilice el nuevo nombre de bloque como clave.
1. Actualizar la carpeta del bloque en `client/src/pages/learn/{superBlock}`.
1. En el archivo `index.md` de la carpeta superior, actualizar el valor del `block` prematuramente.
1. En los archivos `client/i18n/locales/{language}/intro.json`, actualizar el nombre del bloque al nuevo nombre para todos los idiomas. En el archivo `intro.json` en inglés, actualiza también el `title`.
1. Actualizar el archivo principal `README.md` con el nuevo nombre.

### Renombrando un desafío

Al renombras un solo archivo de desafío, tienes que:

1. Cambiar el nombre del archivo del desafío en el directorio `curriculum/challenges/english`.
1. Cambiar el nombre del `title` y de `dashedName` (nombre con guiones) dentro de ese archivo.
1. Cambiar el nombre del archivo y los `dashedName` en esos archivos para coincidir con _todos_ los demás directorios de idiomas.
1. Actualizar el nombre del desafío en el archivo `meta.json` correspondiente. Los nombres de los desafíos aquí no se utilizan en la compilación, pero proveen una forma amigable al usuario de identificar el orden de los mismos.
1. Si el desafío es un proyecto de certificado, actualizar el archivo YAML en `curriculum/english/12-certificates/<superBlock>` con el nuevo nombre.
1. Si el desafío es un proyecto de certificado, actualizar el `title` y el `link` en `client/src/resources/cert-and-project-map.ts`
1. Si el desafío es un proyecto de certificado, actualizar el archivo principal `README.md` con el nuevo nombre.

## La propiedad `dashedName`

La propiedad `dashedName` se usa para generar la ruta URL para el súper bloque, el bloque o el desafío. Por lo general, estos deberían coincidir con los nombres que generaría el asistente `/utils/slugs.js` para el nombre del archivo.
