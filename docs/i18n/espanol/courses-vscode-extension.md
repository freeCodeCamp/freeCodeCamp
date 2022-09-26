# Cursos de extensión de VSCode

Esto detalla las guías de mantenimiento para el repositorio de  [freeCodeCamp/courses-vscode-extensión](https://github.com/freeCodeCamp/courses-vscode-extension), el cual contiene el código fuente de la extensión [freeCodeCamp - Courses](https://marketplace.visualstudio.com/items?itemName=freeCodeCamp.freecodecamp-courses).

## Publicando la Extensión

'GitHub Action' publica automáticamente la extensión en el Marketplace de Visual Studio,  cada vez que se publica una nueva versión en GitHub.

1. Empaquete una nueva versión de la extensión:

```bash
npm run pack -- <tag_type>
```

Donde `<tag_type>` es uno de: `mayor`, `menor`, `parchar`.

2. Envía la nueva versión a `main`:

```bash
git commit -am "<tag_type>(<version>): <description>"
git push
```

Opcionalmente puedes empujar directamente al `upstream/main`pero abrir un nuevo PR es recomendado para mejor órden.

3. Cree una nueva versión de GitHub usando la interfaz de usuario de GitHub:

- Incremente correctamente el número de versión al crear una nueva etiqueta.
- actualizar el archivo `.vsix` con la nueva versión.
- Publique el lanzamiento y confirme que la acción se realizó correctamente.

> [!NOTE] La creación de una versión requiere acceso de escritura al repositorio `freeCodeCamp/courses-vscode-extension` repositorio.

## Publicación Manual de la Extensión

Se puede realizar una carga manual en Visual Studio Marketplace siguiendo estos pasos:

1. Visite https://marketplace.visualstudio.com/ e inicie sesión
2. Vaya a la [página del editor de freeCodeCamp](https://marketplace.visualstudio.com/manage/publishers/freecodecamp)
3. Seleccione la extensión relevante y seleccione `Actualizar`
4. Sube el archivo desde tus archivos locales
