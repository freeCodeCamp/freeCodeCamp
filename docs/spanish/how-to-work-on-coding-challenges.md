<table>
    <tr>
        <td> Read these guidelines in </td>
        <td><a href="/CONTRIBUTING.md"> English </a></td>
        <td><a href="/docs/chinese/CONTRIBUTING.md"> 中文 </a></td>
        <td><a href="/docs/russian/CONTRIBUTING.md"> русский </a></td>
        <td><a href="/docs/arabic/CONTRIBUTING.md"> عربي </a></td>
        <td><a href="/docs/spanish/CONTRIBUTING.md"> Español </a></td>
        <td><a href="/docs/portuguese/CONTRIBUTING.md"> Português </a></td>
    </tr>
</table>

# Cómo trabajar en los Desafíos de Programación

### Editando en GitHub

Cada desafío está almacenado en su propio archivo markdown. De esa forma resulta sencillo editar los desafíos directamente desde GitHub.

Puedes realizar los cambios sin tener que ejecutar nada desde tu sistema local.

Después de que encuentres el archivo que quieras modificar desde la interfaz de GitHub, haz clic en el icono de lápiz para comenzar a editar el archivo. Esto automáticamente creara una bifurcación del proyecto, si es que no tienes una todavía.

También puedes clonar el proyecto y editarlo de manera local en tu ordenador. Si necesitas ayuda al respecto, dale un vistazo a la [guía principal de contribución](/CONTRIBUTING.md).

### Patrón de los Desafíos.

He aquí un patrón de cómo se verán los archivos markdown correspondientes a los desafíos.

````md
---
id: Identificador Único (alfanumérico, _id de MongoDB)
title: Título del desafío
challengeType: 0
guideUrl: 'URL del artículo guía'
videoUrl: 'URL del video explicatorio'
---

## Descripción
<section id='description'>
Una descripción del desafío y de los requerimientos aprobatorios
</section>

## Instrucciones
<section id='instructions'>
Instrucciones acerca de lo que se necesita hacer exactamente
</section>
## Pruebas
<section id='tests'>

``` yml
- text: Debe regresar "foo".
  testString: 'Una función "encadenada" utilizando afirmaciones Chai'
```

</section>

<div id='js-seed'>

```js
Código mostrado en el editor por defecto.
```

</div>

### Antes de las pruebas
<div id='js-setup'>

```js
Código inicial de las pruebas
```

</div>

</section>

### Después de las pruebas
<div id='js-teardown'>

```js
Código posterior a las pruebas
```

</div>

</section>

## Solución
<section id='solution'>

```js
Solución en código del desafío.
```

</section>
````

### Enlaces útiles

Creando y Editando Desafíos:

1. [Guía de Diseño de Desafíos](style-guide-for-curriclum-challenges.md) - como crear y formatear desafíos

2. [Tipos de desafíos](https://github.com/freeCodeCamp/learn/blob/a5cb25704168aa37f59a582f0bb5a19b7bd89b46/utils/challengeTypes.js) - significado del valor numérico de 'challengeType' (enum).

3. [Contribuyendo a freeCodeCamp - Escribiendo Pruebas de Desafío en ES6](https://www.youtube.com/watch?v=iOdD84OSfAE#t=2h49m55s) - un video siguiendo a [Ethan Arrowood](https://twitter.com/ArrowoodTech) mientras contribuye a la version antigua del currículo 
