---
title: What Does JavaScript Void 0 Mean
localeTitle: ¿Qué significa JavaScript Void 0?
---
## ¿Qué significa JavaScript Void 0?

**El operador de vacío de JavaScript evalúa una expresión y devuelve undefined** .

Usando la consola para verificar lo mismo: -

![Salida de consola](https://github.com/srawat19/-Guide_Images/blob/master/VoidConsole.PNG?raw=true)

**_Nota_** : - **anular** independientemente de cualquier valor pasado, _siempre devuelve **undefined** como se muestra arriba_ . Pero, el **vacío con el operando 0 es el preferido** .

**Dos formas de usar el operando 0 -> void (0) o void 0.** Cualquiera de las dos está bien.

#### ¿Cuándo usar Javascript void (0)?

Cuando haga clic en el enlace, no desea que el navegador cargue una nueva página o actualice la misma página (dependiendo de la URL especificada). En su lugar, realice el JavaScript adjunto a ese enlace.

#### Ejemplo de ejemplo 1 con Javascript nulo (0):

```html

<html> 
 <body> 
 <a href="javascript:void(0);alert('Hello ! I am here')">Click Me</a> 
 </body> 
 </html> 
```

#### Salida:

Cuando se hace clic en el enlace de ClickMe, aparece una alerta de la siguiente manera:

![Salida1](https://github.com/srawat19/-Guide_Images/blob/master/voidOutput1.PNG?raw=true)

#### Ejemplo de ejemplo 2 con Javascript nulo (0):

```html

<html> 
 <body> 
 <a href="javascript:void(0)" ondblclick="alert('Hi,i didnt refresh the page')" )>Click Me</a> 
 </body> 
 </html> 
```

#### Salida:

Cuando haga doble clic en el enlace, aparecerá una alerta emergente sin ninguna actualización de página.

#### Ejemplo de ejemplo 3 con Javascript nulo (0):

```html

<html> 
 <body> 
 <a href="javascript:void(0);https://www.google.co.in/" 
 ondblclick="alert('Hello !! You will see me and not get redirected to google.com ')">Click Me</a> 
 </body> 
 </html> 
```

#### Salida:

Cuando haga doble clic en el enlace, se abrirá una alerta y, al cerrarlo, tampoco se redirigirá a google.com.

#### Ejemplo de muestra sin Javascript void (0):

```html

<html> 
 <body> 
 <a href="https://www.google.co.in/" ondblclick="alert('Hello !! You will see me and then get redirected to google.com even if not needed')">Click Me</a> 
 </body> 
 </html> 
```

#### Salida:

Cuando haga doble clic en el enlace, se abrirá una alerta y, al cerrarlo, se redirigirá a google.com.

#### Conclusión:

**void** operator es útil cuando necesita evitar cualquier actualización o redirección no deseada de la página. Más bien, realizar alguna operación javascript.

#### Más información:

1) [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void) 2) [Entendiendo el vacío 0](https://www.quackit.com/javascript/tutorial/javascript_void_0.cfm)