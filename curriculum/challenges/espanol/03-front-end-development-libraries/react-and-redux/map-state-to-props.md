---
id: 5a24c314108439a4d4036145
title: Asigna el estado a props
challengeType: 6
forumTopicId: 301433
dashedName: map-state-to-props
---

# --description--

El componente `Provider` te permite proporcionar `state` y `dispatch` a tus componentes React, pero debes especificar exactamente qué estado y acciones quieres. De esta manera, te aseguras de que cada componente sólo tiene acceso al estado que necesita. Esto se consigue creando dos funciones: `mapStateToProps()` y `mapDispatchToProps()`.

En estas funciones, declaras a qué partes del estado quieres tener acceso y qué creadores de acción necesitas poder enviar. Una vez que estas funciones están en su lugar, verás cómo usar el método React Redux `connect` para conectarlos a tus componentes en otro desafío.

**Nota:** Tras bambalinas, React Redux utiliza el método `store.subscribe()` para implementar `mapStateToProps()`.

# --instructions--

Crea una función `mapStateToProps()`. Esta función debe tomar `state` como argumento, y luego devolver un objeto que asigna ese estado a nombres de propiedades específicas. Estas propiedades serán accesibles a tu componente a través de `props`. Dado que este ejemplo mantiene todo el estado de la aplicación en un solo arreglo, puedes pasar todo ese estado a tu componente. Crea una propiedad `messages` en el objeto que se devuelve, y establécela como `state`.

# --hints--

La const `state` debe ser un arreglo vacío.

```js
assert(Array.isArray(state) && state.length === 0);
```

`mapStateToProps` debe ser una función.

```js
assert(typeof mapStateToProps === 'function');
```

`mapStateToProps` debe devolver un objeto.

```js
assert(typeof mapStateToProps() === 'object');
```

Pasar un arreglo como estado a `mapStateToProps` debe devolver este arreglo asignado a una clave de `messages`.

```js
assert(mapStateToProps(['messages']).messages.pop() === 'messages');
```

# --seed--

## --seed-contents--

```jsx
const state = [];

// Change code below this line
```

# --solutions--

```jsx
const state = [];

// Change code below this line

const mapStateToProps = (state) => {
  return {
    messages: state
  }
};
```
