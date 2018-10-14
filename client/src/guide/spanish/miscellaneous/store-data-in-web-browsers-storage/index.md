---
title: Store Data in Web Browsers Storage
localeTitle: Almacenar datos en almacenamiento de navegadores web
---
Para administrar los datos que maneja su aplicación web, no necesariamente necesita una base de datos. Las respectivas funciones de almacenamiento del navegador son compatibles con Chrome (versión 4 y superior), Mozilla Firefox (versión 3.5 y superior) e Internet Explorer (versión 8 y superior), y una gama de otros navegadores, incluidos los de iOS y Android.

Hay dos posibilidades principales para el almacenamiento del navegador:

## 1\. Almacenamiento local

Cualquier contenido / datos guardados en el objeto `localStorage` estará disponible después de que el navegador haya sido reiniciado (cerrado y abierto nuevamente). Para **_guardar un elemento_** en `localStorage` , puede usar el método `setItem()` . Este método debe entregarse una clave y un valor.
```
Example: localStorage.setItem("mykey","myvalue"); 
```

Para **_recuperar el elemento de localStorage_** , se debe usar el método `getItem` . El método `getItem` debe recibir la clave de los datos que desea recuperar:
```
  Example: localStorage.getItem("mykey"); 
```

Puede eliminar un elemento de `localStorage` utilizando el método `removeItem()` . Este método debe entregarse la clave del elemento que se va a eliminar:
```
  Example: localStorage.removeItem("mykey"); 
```

Para borrar todo el `localStorage` , debe usar el método `clear()` en el objeto `localStorage` :
```
  Example: localStorage.clear(); 
```

## 2\. sessionStorage

Los elementos guardados en el objeto `sessionStorage` permanecerán hasta que el usuario cierre el navegador. Entonces, el almacenamiento se borrará.

Puede guardar un elemento en `sessionStorage` , use el método `setItem()` en el objeto `sessionStorage` :
```
Example: sessionStorage.setItem("mykey","myvalue"); 
```

Para **_recuperar el elemento del sessionStorage_** , se debe usar el método `getItem` . El método `getItem` debe recibir la clave de los datos que desea recuperar:
```
  Example: sessionStorage.getItem("mykey"); 
```

Puede eliminar un elemento de `sessionStorage` utilizando el método `removeItem()` . Este método debe entregarse la clave del elemento que se va a eliminar:
```
  Example: sessionStorage.removeItem("mykey"); 
```

Para borrar todo el `sessionStorage` , debe usar el método `clear()` en el objeto `sessionStorage` :
```
  Example: sessionStorage.clear(); 
```

## Guardar arrays en localStorage y sessionStorage

No solo puede guardar valores individuales en `localStorage` y `sessionStorage` , sino que también puede guardar el contenido de una matriz.

En este ejemplo, tenemos una matriz con números:
```
var ourArray =[1,2,3,4,5]; 
```

Ahora podemos guardarlo en `localStorage` o `sessionStorage` usando el método `setItem()` :
```
localStorage.setItem("ourarraykey",JSON.stringify(ourArray)); 
```

o, para `sessionStorage` :
```
sessionStorage.setItem("ourarraykey",JSON.stringify(ourArray)); 
```

Para guardarse, primero se debe convertir la matriz en una cadena. En el ejemplo que se muestra arriba, estamos usando el método `JSON.stringify` para lograr esto.

Cuando recupere nuestros datos de `localStorage` o `sessionStorage` , vuelva a convertirlos en una matriz:
```
var storedArray = localStorage.getItem("ourarraykey"); 
 ourArray = JSON.parse(storedArray); 
```

o, para `sessionStorage` :
```
var storedArray = sessionStorage.getItem("ourarraykey"); 
 ourArray = JSON.parse(storedArray); 

```