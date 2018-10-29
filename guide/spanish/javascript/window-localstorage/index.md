---
title: Window.localStorage
localeTitle: Window.localStorage
---
## window.localStorage

`localStorage` proporciona una forma para que sus aplicaciones web almacenen datos localmente dentro del navegador del usuario.

Antes de HTML5, los datos de la aplicación debían almacenarse en cookies. Las cookies se incluyen con cada solicitud HTTP, lo que ralentiza su aplicación web al transmitir los mismos datos. Las cookies también están limitadas a aproximadamente 4 KB de datos, lo que podría no ser suficiente para almacenar los datos requeridos.

`localStorage` límite de `localStorage` es mayor que el de las cookies con hasta 10 MB de datos por dominio y la información nunca se transfiere al servidor.

### Tipos de almacenamiento local

Hay dos tipos principales de almacenamiento web:

*   Almacenamiento local: Esto almacena los datos sin fecha de caducidad. Los datos en `localStorage` persistirían incluso cuando el navegador del usuario se cierra y se vuelve a abrir.
*   Almacenamiento de sesión: es similar a `localStorage` , excepto que almacena datos solo para una sesión. Una vez que el usuario cierre el navegador, esa sesión se perderá y los datos persistentes se eliminarán del navegador.

### Métodos de almacenamiento local HTML5

`localStorage` viene con algunos métodos diferentes de JavaScript que hacen que sea muy fácil trabajar con ellos, veamos algunos:

_NB: estos métodos se aplican a ambos tipos de almacenamiento web (almacenamiento local y almacenamiento de sesión)_

Para configurar los datos, tenemos que hacer lo siguiente:

```javascript
localStorage.setItem('Name', 'somevalue'); 
```

Para recuperar algunos datos del almacenamiento:

```javascript
localStorage.getItem('Name'); 
```

Para eliminar o eliminar algunos datos, podemos hacer esto:

```javascript
localStorage.removeItem('Name'); 
```

Para borrar todo el almacenamiento (no solo un elemento individual), podemos usar:

```javascript
localStorage.clear(); 
```

Para obtener el número de propiedades en el almacenamiento:

```javascript
localStorage.length; 
```

#### Más información:

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)