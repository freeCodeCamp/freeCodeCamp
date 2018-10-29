---
title: Pipes
localeTitle: Tubería
---
# Tubería

#### Motivación

Transformaciones de datos de salida. Aseguran que los datos estén en un formato deseable en el momento en que se cargan en la pantalla del usuario. Normalmente los datos se transforman tras bambalinas. Con tuberías, los datos de transformación pueden tener lugar en la plantilla HTML. Las tuberías transforman los datos de la plantilla directamente.

Las tuberías se ven bien y son convenientes. Ayudan a mantener la clase del componente de las transformaciones básicas. Para ponerlo técnicamente, las tuberías encapsulan la lógica de transformación de datos.

#### Transformación de salida

Como se mencionó en la sección anterior, las tuberías transforman los datos en línea. La sintaxis de las tuberías correlaciona shell scripting. En muchos scripts, la salida de una parte del comando se _canaliza_ como salida en la siguiente parte como entrada. Esa misma tendencia caracteriza a los tubos angulares.

En Angular, existen muchas formas de interactuar con los datos en la plantilla HTML. Las tuberías pueden aplicarse en cualquier lugar donde los datos se analicen en la plantilla HTML. Pueden ocurrir dentro de la lógica microsyntax y las interpolaciones de variables internasHTML. Las tuberías tienen en cuenta todas las transformaciones sin agregar a la clase de componente.

Las tuberías también son _chainable_ . Puede integrar tuberías una tras otra para realizar transformaciones cada vez más complejas. Como transformadores de datos especializados, las tuberías no son triviales.

#### Casos de uso

Angular viene preempacado con un conjunto básico de tuberías. Trabajar con un par de ellos desarrollará la intuición para manejar el resto. La siguiente lista proporciona dos ejemplos.

*   AsyncPipe
    
*   DatePipe
    

Estos dos realizan tareas simples. Su simplicidad es enormemente beneficiosa.

##### AsyncPipe

Esta sección requiere un entendimiento básico de Promesas u Observables para apreciarlo completamente. El AsyncPipe opera en cualquiera de los dos. AsyncPipe extrae datos de Promises / Observables como salida para lo que venga a continuación.

En el caso de Obervables, AsyncPipe se suscribe automáticamente al origen de datos. Sin importar de dónde provengan los datos, AsyncPipe se suscribe a la fuente observable. `async` es el nombre sintáctico de AsyncPipe como se muestra a continuación.

```html

<ul *ngFor=“let potato of (potatoSack$ | async); let i=index”> 
  <li>Potatoe {{i + 1}}: {{potato}}</li> 
 </ul> 
```

En el ejemplo, `potatoSack$` es un Observable pendiente de una carga de papas. Una vez que llegan las papas, ya sea de forma síncrona o asíncrona, el AsyncPipe las recibe como una matriz _iterable_ . El elemento de la lista se llena de patatas.

##### DatePipe

El formato de las cadenas de fecha requiere un poco de pirateo con el objeto `Date` JavaScript. El DatePipe proporciona una forma eficaz de formatear fechas asumiendo que la entrada dada es un formato de hora válido.

```typescript
// example.component.ts 
 
 @Component({ 
  templateUrl: './example.component.html' 
 }) 
 export class ExampleComponent { 
  timestamp:string = '2018-05-24T19:38:11.103Z'; 
 } 
```

```html

<!-- example.component.html --> 
 
 <div>Current Time: {{timestamp | date:'short'}}</div> 
```

El formato de la `timestamp` anterior es [ISO 8601 1,](https://en.wikipedia.org/wiki/ISO_8601) no es el más fácil de leer. El DatePipe ( `date` ) transforma el formato de fecha ISO en un formato más convencional `mm/dd/yy, hh:mm AM|PM` . Hay muchas otras opciones de formato. Todas estas opciones están en la [documentación oficial](https://angular.io/api/common/DatePipe) .

#### Creando Tubos

Si bien Angular solo tiene un número determinado de canales, el decorador `@Pipe` permite a los desarrolladores crear los suyos. El proceso comienza con `ng generate pipe [name-of-pipe]` , reemplazando `[name-of-pipe]` con un nombre de archivo preferible. Este es un comando de [CLI angular](https://cli.angular.io) . Se obtiene lo siguiente.

```typescript
import { Pipe, PipeTransform } from '@angular/core'; 
 
 @Pipe({ 
  name: 'example' 
 }) 
 export class ExamplePipe implements PipeTransform { 
  transform(value: any, args?: any): any { 
      return null; 
  } 
 } 
```

Esta plantilla de tubería simplifica la creación de tubería personalizada. El decorador `@Pipe` le dice a Angular que la clase es un pipe. El valor de `name: 'example'` , en este caso de `example` , es el valor que Angular reconoce al escanear HTML de plantilla en busca de canalizaciones personalizadas.

A la lógica de clase. La implementación de `PipeTransform` proporciona las instrucciones para la función de `transform` . Esta función tiene un significado especial dentro del contexto del decorador `@Pipe` . Recibe dos parámetros por defecto.

`value: any` es la salida que recibe el tubo. Piensa en `<div>{{ someValue | example }}</div>` . El valor de someValue se pasa al `value: any` la función de `transform` `value: any` parámetro. Esta es la misma función de `transform` definida en la clase ExamplePipe.

`args?: any` es cualquier argumento que la tubería recibe opcionalmente. Piensa en `<div>{{ someValue | example:[some-argument] }}</div>` . `[some-argument]` puede ser reemplazado por cualquier valor. Este valor se pasa a los `args?: any` la función de `transform` `args?: any` parámetro. Es decir, la función de `transform` definida en la clase ExamplePipe.

Cualquiera que sea la función que devuelve ( `return null;` ) se convierte en la salida de la operación de tubería. Eche un vistazo al siguiente ejemplo para ver un ejemplo completo de ExamplePipe. Dependiendo de la variable que reciba la tubería, puede hacer mayúsculas o minúsculas en la entrada como nueva salida. Un argumento no válido o inexistente hará que la canalización devuelva la misma entrada que la salida.

```typescript
// example.pipe.ts 
 
 @Pipe({ 
  name: 'example' 
 }) 
 export class ExamplePipe implements PipeTransform { 
  transform(value:string, args?:string): any { 
    switch(args || null) { 
      case 'uppercase': 
        return value.toUpperCase(); 
      case 'lowercase': 
        return value.toLowerCase(); 
      default: 
        return value; 
    } 
  } 
 } 
```

```typescript
// app.component.ts 
 
 @Component({ 
  templateUrl: 'app.component.html' 
 }) 
 export class AppComponent { 
  someValue:string = "HeLlO WoRlD!"; 
 } 
```

```html

<!-- app.component.html --> 
 
 <!-- Outputs “HeLlO WoRlD!” --> 
 <h6>{{ someValue | example }}</h6> 
 
 <!-- Outputs “HELLO WORLD!” --> 
 <h6>{{ someValue | example:'uppercase' }}</h6> 
 
 <!-- Outputs “hello world!” --> 
 <h6>{{ someValue | example:'lowercase' }}</h6> 
```

Comprender el ejemplo anterior significa que usted entiende las tuberías angulares. Solo queda un tema más por discutir.

#### Tubos puros e impuros

Todo lo que has visto hasta ahora ha sido una pipa _pura_ . `pure: true` se establece de forma predeterminada en los metadatos del decorador `@Pipe` . La diferencia entre los dos constituye la detección del cambio de Angular.

Los tubos puros se actualizan automáticamente cada vez que cambia el valor de su entrada derivada. La tubería se volverá a ejecutar para producir una nueva salida ante un cambio detectable en el valor de entrada. Los cambios detectables están determinados por el bucle de detección de cambios de Angular.

Las tuberías impuras se actualizan automáticamente cada vez que se produce un ciclo de detección de cambios. La detección del cambio angular ocurre muy a menudo. Indica si se han producido cambios en los datos de los miembros de la clase de componente. Si es así, la plantilla HTML se actualiza con los datos actualizados. De lo contrario, no pasará nada.

En el caso de una tubería impura, se actualizará independientemente de si hay un cambio detectable o no. Un tubo impuro se actualiza cada vez que se cambian los bucles de detección. Las tuberías impuras usualmente consumen muchos recursos y generalmente son mal aconsejadas. Dicho esto, operan más como una escotilla de escape. Si alguna vez necesita una tubería sensible a la detección, alterne `pure: false` en los metadatos del decorador `@Pipe` .

#### Conclusión

Que cubre las tuberías. Las tuberías tienen mucho potencial más allá del alcance de este artículo. Las tuberías contribuyen con transformaciones de datos sucintas a la plantilla HTML de sus componentes. Son una buena práctica en situaciones donde los datos deben sufrir pequeñas transformaciones.

## Fuentes

1.  [Comunidad Wiki. _ISO 8601_ . Wikipedia Consultado el 27 de mayo de 2018](https://en.wikipedia.org/wiki/ISO_8601)

## Recursos

*   [Documentacion angular](https://angular.io/guide/pipes)
*   [Repositorio Angular de GitHub](https://github.com/angular/angular)
*   [Lista de tubos pre-envasados ​​con Angular](https://angular.io/api?query=pipe)
*   [CLI angular](https://cli.angular.io)