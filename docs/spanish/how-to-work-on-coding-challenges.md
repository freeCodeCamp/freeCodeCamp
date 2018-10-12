# Cómo trabajar en los retos de programación

### Modificaciones en GitHub

Cada reto está alojado en su propio archivo. Esto permite poder editar facilmente los retos desde GitHub.

Puedes realizar cambios sin ejecutar nada en tu sistema local.

Tras localizar el archivo que deseas modificar dentro de GitHub, pulsa en el icono de edición para comenzar a editar el archivo. Esto creará automáticamente una rama dentro del proyecto si no tenías ya una.

También puedes clonar el proyecto y editarlo de manera local en tu ordenador. Si necesitas ayuda con esto, lee la guía de contribución.

### Plantilla de retos

Aquí tienes un ejemplo del aspecto final de un archivo de reto.

````md
---
id: identificador único (alfanumérico, MongoDB _id)
título: Título del reto
Tipo de reto: 0
URLguía: 'url del artículo de guía'
videoUrl: 'url de vídeo con explicación'
---

## Descripción
<section id='descripción'>
Una descripción del reto y qué hacer para superarlo
</section>

## Instrucciones
<section id='instrucciones'>
Instrucciones sobre qué debe hacerse
</section>
## Tests
<section id='tests'>

``` yml
- texto: Debería mostrar "foo".
  testString: 'A stringified function using Chai asserts'
```

</section>

<div id='js-seed'>

```js
Código mostrado en el editor por defecto.
```

</div>

### Before Test
<div id='js-setup'>

```js
Código de definición de test.
```

</div>

</section>

### After Test
<div id='js-teardown'>

```js
 Código de resultado de test.
```

</div>

</section>

## Solución
<section id='solutción'>

```js
Código de solución.
```

</section>
````

### Links útiles

Creando y editando retos:

1. [Guía de estilo de retos](style-guide-for-curriculum-challenges.md) - Cómo crear y editar retos

2. [Tipos de reto](https://github.com/freeCodeCamp/learn/blob/a5cb25704168aa37f59a582f0bb5a19b7bd89b46/utils/challengeTypes.js) - Qué significan los valores numéricos del tipo de reto (enum).

3. [Contribuir a FreeCodeCamp - Escribir tests para retos en ES6](https://www.youtube.com/watch?v=iOdD84OSfAE#t=2h49m55s) - Vídeo de [Ethan Arrowood](https://twitter.com/ArrowoodTech) contribuyendo a la versión antigua del currículum
