# Estructura de archivos del currículo

Nuestro contenido instructivo principal se encuentra dentro del directorio convenientemente llamado `curriculum`. Esta página desglosará cómo están organizados estos archivos.

## Terminología

Hay algunos términos que usamos cuando hablamos del contenido de nuestro currículo.

- `certification` : Cuando se hace referencia a una certificación en este caso, se está hablando del certificado real que los usuarios reclaman.  Que es independiente del nombre del súper bloque.
- `superBlock` : Un súper bloque es la colección de desafíos del nivel superior. Cada súper bloque corresponde a una certificación en el currículo (p. ej. Diseño Web Responsivo).
- `block` : Un bloque es una sección dentro de un súper bloque. Un bloque corresponde a un grupo de desafíos en una certificación determinada (p. ej. HTML básico y HTML5)
- `challenge` : Un desafío es una sola lección dentro del currículo (p. ej. Di hola a los elementos HTML)

## Árbol de archivos

Usando esos términos, así es como se definiría la estructura de archivos:

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
1. Actualiza `client/src/redux/index.ts` para que use el `title` correcto.
1. Como alternativa, actualiza el `certSlug` para el súper bloque en el mismo archivo.  **Ten en cuenta** que renombrar un `certSlug` cambiará el URL para las certificaciones y solo debe hacerse con consideración.
1. Actualiza el `title` en `client/src/resources/cert-and-project-map.ts` por el nuevo valor. **Ten en cuenta que** cambiar el `title` aquí **romperá** la página del súper bloque asociada a la certificación. Depende del título del súper bloque en coincidir con el título de la certificación. Es probable que desees renombrar el súper bloque al mismo tiempo.
1. Si renombraste `certSlug` en el paso 7, cámbialo aquí para el "cert" y todos los valores de `projects` anidados.
1. En `config/certification-settings.js`, actualiza el valor de `certTypeTitleMap` al nuevo nombre.
1. Si renombraste el `certSlug` en el paso 7, actualiza la clave de `certSlugTypeMap` en el mismo archivo.
1. Actualiza el nombre del certificado en el arreglo `legacyCerts` dentro del `client/src/client-only-routes/show-project-links.tsx` si es necesario.
1. Actualiza el archivo principal `README.md` al nuevo nombre.

### Renombrar un súper bloque

> [!NOTE] Cuando renombras un súper bloque, el nuevo nombre de carpeta es usado como la ruta y debe considerarse el nombre "correcto". Todos los demás valores deben actualizarse para reflejar ese cambio.

Also, you will likely want to rename the certificate and the `{superBlock}-projects` block when you rename a superBlock since they all shares a name. To rename only a superBlock you need to:

1. Rename the superBlock folder in the `curriculum/challenges/english` directory.
1. Rename the superBlock folder in *all* other `curriculum/challenges/{language}` directories.
1. For each block within that superBlock, update the `superBlock` value in the `meta.json` file to its dashedName. You don't need to rename any folders here. Do that when renaming a block.
1. Rename the superblock folder in `client/src/pages/learn`.
1. Update the `index.md` file in the above folder, changing the `title` and `superBlock` values to the new name.
1. For each block folder within the above, update the `index.md` to use the correct `superBlock` value.
1. In the `client/src/resources/cert-and-project-map.ts` file, update the path for the cert at the top of the file, and the `title` value for that superBlock. **Note** that changing the `title` here **will break** the ability to view the actual certification for this superBlock. It relies on the superBlock title to match the certification title. You will likely want to rename the certification at the same time.
1. Update the `superBlockCertTypeMap` key in `config/certification-settings.js` to the new superBlock name.
1. Update the path value in `client/src/assets/icons/index.tsx`.
1. For each language in `client/i18n/locales`, update the `intro.json` file to use the new superBlock `dashedName`. In the English file, also update the `title`.
1. Check the `config/i18n/all-langs.js` file to see if the superBlock is enabled in i18n builds. Update all the values where it is used.
1. Update the main `README.md` file to the new name.

### Renaming a Block

When renaming a curriculum block, you need to:

1. Change the name of the block folder in the `curriculum/challenges/english/{superBlock}` directory.
1. Change the name of the same block folder in *all* of the other language directories to match. These must all be the same as the English structure or the build will error out.
1. Change the name of the block folder in the `_meta` directory.
1. Update the `name` and `dashedName` property for that block's `meta.json` file.
1. Update the `client/utils/help-category-map.json` to use the new block name as the key.
1. Update the block folder in `client/src/pages/learn/{superBlock}`.
1. In the `index.md` file of the above folder, update the `block` value in the frontmatter.
1. In the `client/i18n/locales/{language}/intro.json` files, update the block name to the new name for all the languages. In the English `intro.json` file, update the `title` as well.
1. Update the main `README.md` file to the new name.

### Renaming a Challenge

When renaming a single challenge file, you need to:

1. Change the name of the challenge file in the `curriculum/challenges/english` directory.
1. Change the name of the `title` and `dashedName` within that file.
1. Change the name of the file, and the `dashedName` in those files for *all* of the other language directories to match.
1. Update the name of the challenge in the relevant `meta.json` file. The challenge names here are not used in the build, but provide a user-friendly way to identify the challenge order.
1. If the challenge is a certificate project, update the YAML file in `curriculum/english/12-certificates/<superBlock>` to the new name.
1. If the challenge is a certificate project, update the `title` and `link` in `client/src/resources/cert-and-project-map.ts`
1. If the challenge is a certificate project, update the main `README.md` file to the new name.

## The `dashedName` Property

The `dashedName` property is used to generate the URL path for the superblock, block, or challenge. These should generally match what the `/utils/dasherize.js` helper would output for the file name.
