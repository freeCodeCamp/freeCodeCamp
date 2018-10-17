---
title: Life Cycle Methods Of A Component
localeTitle: Métodos del ciclo de vida de un componente
---## Métodos del ciclo de vida de un componente

Cuando comenzamos a trabajar con componentes, necesitamos realizar varias acciones para actualizar el estado o realizar algunas acciones cuando algo cambia en ese componente. En este escenario, ¡los métodos de ciclo de vida de un componente son útiles! Así que vamos a sumergirnos en ellos en este artículo.

En términos generales, podemos dividir los métodos del ciclo de vida en **3** categorías.

1.  Montaje
2.  Actualizando
3.  Desmontaje

Como los métodos del ciclo de vida son autoexplicativos, solo mencionaré los nombres de los métodos. Por favor, siéntase libre de contribuir a este artículo, si es necesario.

## Montaje:

a. `constructor()`

segundo. `componentWillMount()`

do. `render()`

re. `componentDidMount()`

## Actualizando:

a. `componentWillRecieveProps()`

segundo. `shouldComponentUpdate()`

do. `componentWillUpdate()`

re. `render()`

mi. `componentDidUpdate()`

## Desmontaje:

a. `componentWillUnmount()`

## Algunos datos interesantes a tener en cuenta:

*   `constructor` , `componentWillMount` , `componentDidMount` y `componentWillUnmount` se llamarán solo una vez durante el ciclo de vida de un componente.
*   `componentWillUpdate` , y `componentDidUpdate` solo se ejecutarán si y solo si `shouldComponentUpdate` devuelve true.
*   Se llamará a `componentWillUnmount()` justo antes de desmontar cualquier componente y, por lo tanto, se puede usar para liberar la memoria utilizada, cerrar cualquier conexión a DB, etc.

Se pueden aprender muchas cosas sumergiéndose en la codificación. Así que ensucia tus manos codificando.

Nota:

> "Las advertencias de desaprobación se habilitarán con una futura versión 16.x, **pero los ciclos de vida heredados continuarán funcionando hasta la versión 17.** " 1
> 
> "Incluso en la versión 17, aún será posible usarlos, pero tendrán un alias con un prefijo" SEGURO\_ "para indicar que podrían causar problemas. También hemos preparado un [script automatizado para cambiar el nombre](https://github.com/reactjs/react-codemod#rename-unsafe-lifecycles) en el código existente". 1

En otras palabras, estos métodos de ciclos de vida anteriores aún estarán disponibles como:

*   `UNSAFE_componentWillMount`
*   `UNSAFE_componentWillReceiveProps`
*   `UNSAFE_componentWillUpdate`

## Nuevos métodos de ciclo de vida

Se introducirán nuevos métodos de ciclo de vida en React 17

*   `getDerivedStateFromProps` será una alternativa más segura a `componentWillReceiveProps` .
*   `getSnapshotBeforeUpdate` agregará `getSnapshotBeforeUpdate` para admitir la lectura segura de las propiedades de DOM.

Se pueden aprender muchas cosas sumergiéndose en la codificación. Así que ensucia tus manos codificando.

### Fuentes

1.  [Vaughn, Brian. "React v16.3.0: nuevos ciclos de vida y API de contexto". 29 de marzo de 2018. Acceso: 22 de mayo de 2018.](https://reactjs.org/blog/2018/03/29/react-v-16-3.html)

### Recursos

[Actualización sobre renderizado asíncrono](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html)