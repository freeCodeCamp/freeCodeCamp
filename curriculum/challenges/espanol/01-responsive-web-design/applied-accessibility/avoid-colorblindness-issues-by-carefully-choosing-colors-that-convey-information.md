---
id: 587d778f367417b2b2512aad
title: >-
  Evita problemas de color para usuarios daltónicos eligiendo cuidadosamente los colores que transmiten información
challengeType: 0
videoUrl: 'https://scrimba.com/c/c437as3'
forumTopicId: 301011
dashedName: >-
  avoid-colorblindness-issues-by-carefully-choosing-colors-that-convey-information
---

# --description--

Existen varias formas de daltonismo o ceguera al color. Estos pueden ir desde tener una sensibilidad reducida a una longitud de onda de luz específica, hasta la incapacidad total de ver algún color. La forma más común en que se presenta es una sensibilidad reducida para detectar tonos de verde.

Por ejemplo, si dos colores verdes similares son el color usado en el primer plano y el fondo de tu contenido, un usuario daltónico podría no ser capaz de distinguirlos entre sí. Podemos pensar en los colores cercanos como aquellos colores que son vecinos o adyacentes en la rueda de color. Por este motivo, las combinaciones de estos colores deben evitarse cuando se usan para transmitir información importante.

**Nota:** Algunas herramientas de selección de colores disponibles en Internet incluyen simulaciones visuales de cómo serían vistos por usuarios con diversos tipos de daltonismo. Estos son excelentes recursos que puedes aprovechar, sumados a las calculadoras para verificar el contraste de color que puedes encontrar en Internet.

# --instructions--

Camper Cat está probando diferentes estilos para un botón importante, pero el `background-color` amarillo (`#FFF33`) y el `color` de texto verde (`#33FF33`) son tonos vecinos en la rueda de color, por lo que resultan prácticamente indistinguibles para algunos usuarios daltónicos. (Además, como tienen un nivel de luminosidad similar, no pasan la verificación de índice de contraste o contrast ratio). Cambia el `color` del texto a azul oscuro (`#003366`) para resolver ambos problemas.

# --hints--

Tu código debe cambiar el `color` del texto en el `button` al color azul oscuro.

```js
assert($('button').css('color') == 'rgb(0, 51, 102)');
```

# --seed--

## --seed-contents--

```html
<head>
  <style>
  button {
    color: #33FF33;
    background-color: #FFFF33;
    font-size: 14px;
    padding: 10px;
  }
  </style>
</head>
<body>
  <header>
    <h1>Danger!</h1>
  </header>
  <button>Delete Internet</button>
</body>
```

# --solutions--

```html
<head>
  <style>
    button {
      color: #003366;
      background-color: #FFFF33;
      font-size: 14px;
      padding: 10px;
    }
  </style>
</head>
<body>
  <header>
    <h1>Danger!</h1>
  </header>
  <button>Delete Internet</button>
</body>
```
