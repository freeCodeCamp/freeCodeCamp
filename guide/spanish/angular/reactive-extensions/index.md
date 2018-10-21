---
title: Reactive Extensions
localeTitle: Extensiones reactivas
---
# Extensiones reactivas en angular

#### Motivación

Las extensiones reactivas para JavaScript (RxJS) son una biblioteca para flujos de datos _observables_ . RxJS se instala con Angular en la ejecución de la línea de comandos de `ng new [name-of-application]` . Esto utiliza la interfaz de línea de comandos angular (CLI). RxJS complementa cómo se simplifican los datos a través de un `Observable` . El objeto `Observable` facilita el flujo de datos _iterables_ .

Los flujos de datos no son el caso de uso principal. Después de todo, los flujos de datos son flujos de eventos paralelos. Los eventos se emiten para que una aplicación sepa cuándo llegan los datos. Si bien las secuencias de eventos forman el núcleo de lo que RxJS complementa, este artículo también se refiere a ellas como secuencias de datos.

Las secuencias se ejecutan de forma síncrona (inmediata) o asíncrona (horas extras). RxJS maneja ambos casos con facilidad a través del flujo de datos `Observable` . Sin embargo, la asincronía estricta se puede cambiar. Al trabajar con la memoria, los datos _iterables_ se _producen_ inmediatamente, mientras que la obtención de datos externos lleva tiempo. Angular es compatible con la biblioteca RxJS para que pueda manejar ambos casos de uso con flujos de datos.

#### Programación reactiva

Antes de sumergirse, es importante comprender el paradigma que respalda la biblioteca RxJS. Como se mencionó, funciona a través del objeto `Observable` que optimiza los datos que emiten eventos.

RxJS funciona alrededor de la base `Observable` . Toda su biblioteca complementa lo que puede hacer. RxJS incluso incluye otros objetos, incluyendo `Subject` , `Subscription` y `Observer` . Cada uno es su propia variante personalizada de la base `Observable` .

RxJS surgió del paradigma de la programación reactiva. Este paradigma introdujo el patrón _observable_ . En él existe esta idea clave: un único `Observable` emite mientras todos sus `Observer` reciben una notificación. `Observer` _suscriben_ a los `Observable` para recibir una notificación. Esta notificación puede significar varias cosas.

Podría indicar un cambio en los datos o la llegada de datos como se indica comúnmente en este artículo. Podría indicar un cambio en alguna parte de la aplicación que afecta a los `Observer` .

Este patrón _observable_ también se esfuerza por desacoplar los conceptos. Un `Observable` debe poder funcionar sin ningún `Observer` y viceversa. Por lo general, esto significa que pueden ser independientes en lugar de funcionar completamente sin el otro.

Si es curioso, puede aprender más sobre los fundamentos de la Programación reactiva leyendo [este artículo de Wikipedia](https://en.wikipedia.org/wiki/Reactive_programming) . Esta sección cubre lo que es necesario para el resto del artículo.

#### Observables

Para reiterar rápidamente, `Observable` pueden _observarse_ s. Esto para que un `Observable` proporcione retroalimentación a sus dependencias en base a un flujo de datos. En RxJS, el `Observable` es su propia función de fábrica utilizada para crear objetos `Observable` . Su plano básico es el siguiente.

```typescript
import { Observable } from 'rxjs'; 
 
 const observable = Observable.create((source) => { 
  source.next(data); 
 }); 
```

`.next` pasa datos mientras emite un evento a sus observadores. Un `Observable` emite datos desde dentro de su `.create` callback usando `.next` . Acepta un argumento que representa los datos a emitir. El `Observable` no se ha implementado en JavaScript todavía. RxJS proporciona un reemplazo de su biblioteca.

El siguiente paso son los observadores. Para decirle a una función u objeto que _observe_ un `Observable` , se usa la siguiente sintaxis: `observable.subscribe(observer)` . Otra forma de verlo es `producer.subscribe(consumer)` . Los observables _producen_ datos llamando a `.next` . Los consumidores son notificados mientras reciben los datos.

```typescript
import { Observable } from 'rxjs'; 
 
 const observable = Observable.create((source) => { 
  source.next("Hello"); 
  source.next("World!"); 
 }); 
 
 observable.subscribe((word) => console.log(word)); 
 // console output 
 /* 
 Hello 
 World! 
 */ 
```

Dos invocaciones de `.next` producen dentro de la devolución de llamada `.create` del `Observable` (productor de datos). Esto da como resultado dos salidas de consola separadas desde el observador (consumidor de datos).

Las dos invocaciones de `.next` representan un flujo síncrono de datos. Los flujos conceptualizan los datos como un flujo lineal, en orden. Se resuelve de forma síncrona o asíncrona según la disponibilidad de los datos.

Si los datos que comprenden un flujo están disponibles, se ejecutan de forma síncrona. De lo contrario, el flujo se resuelve de forma asíncrona en el tiempo extra. El orden de los datos en ambos casos es siempre el mismo, dependiendo de la invocación de `.next` dentro del observable.

Un `Observable` opera como una cola. Llamar a `.next` en un dato lo empuja al final de la cola. Los datos aparecen desde el frente una vez resueltos.

`Observable` flujos de datos `Observable` tienen un gran atractivo. Son deterministas en su orden y se ejecutan sensiblemente en función de la disponibilidad de los datos. Además, cualquier número de observadores puede _observar_ la fuente de datos `Observable` . Esto significa que los datos pueden producirse una vez y emitirse en cualquier lugar, todo en una operación.

Las funciones de devolución de llamada no son la única forma de consumir datos. Los observables pueden encadenarse entre sí como productores y consumidores.

```typescript
const observableI = Observable.create((source) => { 
  source.next("Hello World!"); 
 }); 
 
 const observableII = new Observable().subscribe((v) => console.log(v)); 
 
 observableI.subscribe(observableII); 
 // console output 
 /* 
 Hello World! 
 */ 
```

`.subscribe` está en el objeto `Observable` . Puede llamarlo con un `Observable` como su origen (productor) y otro observable como su argumento (consumidor). Los datos pueden fluir (emitir) a través de cualquier número de observables.

#### Extensiones reactivas para JavaScript (RxJS)

La transmisión de datos es agradable, pero ¿cuál es el punto si los observables no pueden editar la transmisión? Aquí es donde entra en juego la biblioteca RxJS. Proporciona operadores que realizan varias mutaciones en el flujo de datos.

Angular aprovecha estos operadores para transformar los datos entrantes. Los desarrolladores pueden recortar cualquier dato innecesario de un flujo entrante utilizando operadores RxJS. Esto ahorra memoria y alivia la necesidad de una lógica de transformación adicional.

RxJS ofrece desviaciones del `Observable` estándar como `Subject` , `Subscription` y `Observer` . Piense en estas desviaciones como sabores especiales de los `Observable` tradicionales. No son necesarios para hacer uso de la biblioteca. Dicho esto, las variantes como `Subject` tienen casos de uso increíbles que superan el estándar `Observable` .

Este artículo se mantiene con el estándar `Observable` . Todos los operadores de flujo de datos de RxJS trabajan a través del `Observable` .

Muchos operadores RxJS principales se originaron a partir de Array Extras de JavaScript. El prototipo del objeto Array contiene muchos paralelismos con la biblioteca RxJS. Estos son también conocidos como 'Extras'. Las matrices son estructuras similares a corrientes similares a los vapores de datos observables.

Para comprender mejor a los operadores de RxJS, este artículo tratará brevemente los Array Extras de JavaScript. Cada uno funciona de forma casi idéntica a su contraparte RxJS. La diferencia es simplemente el formato de los datos (matriz iterable vs flujo iterable).

#### Array Extras

Las matrices contienen muchos métodos de utilidad. Estos métodos se llaman Array Extras. Todos ellos existen en el prototipo del objeto Array. La siguiente lista contiene cinco Extras con paralelos RxJS.

*   `.reduce`
*   `.filter`
*   `.map`
*   `.every`
*   `.forEach`

Para cada ejemplo, la matriz se itera sobre sí misma para producir un resultado final.

`.reduce` minimiza una matriz en un solo valor. `.filter` recorta una matriz con evaluación booleana. `.map` transforma una matriz elemento por elemento. `.every` evalúa verdadero o falso para toda la matriz en función de una condición booleana. `.forEach` itera a través de los elementos de una matriz.

Arreglos de arroyos modelo. Están en orden unos de otros y se repiten uno por uno. Los observables racionalizan los elementos de datos a sus observadores de una manera similar. Esta es la razón por la que RxJS incluye una contraparte lógica para cada Array Extra en su biblioteca. Por supuesto, RxJS proporciona muchos más operadores propios que Array Extras.

#### Operadores RxJS básicos

Hay literalmente el valor de una biblioteca completa de operadores RxJS. Este artículo se centra en los que se enumeran a continuación, en los que se inspiró el Array Extras.

*   `.reduce`
*   `.filter`
*   `.map`
*   `.every`
*   `.forEach`

Nada ha cambiado desde la lista anterior. Su comprensión de Array Extras se aplica a los operadores de RxJS. La única pega a esto es una función llamada `.pipe` que verá mucho uso en los siguientes ejemplos. `.pipe` encadena a los operadores de RxJS. Los resultados del operador anterior continúan en el siguiente hasta el operador final. Los datos resultantes luego se emiten desde el flujo observable.

Tenga en cuenta el ejemplo estándar a continuación. Úselo para comparar el impacto de cada operador en el flujo de datos emitido.

```typescript
import { Observable, from } from 'rxjs'; 
 
 const stream: number[] = [1, 2, 3, 4, 5]; 
 
 const observable: Observable<number> = from(stream); 
 observable.subscribe((val: number) => console.log(val)); 
 
 // console output 
 /* 
 1 
 2 
 3 
 4 
 5 
 */ 
```

`.from` convierte una matriz en un objeto `Observable` que llama a `.next` en cada elemento de la matriz. La función `.pipe` acepta cualquier número de argumentos como operadores de matriz. Aquí es donde cada operador se implementa. Los operadores ejecutan en datos optimizados en orden de su implementación como argumentos para `.pipe` .

##### Reducir

`.reduce` minimiza el flujo de datos en un solo valor antes de emitir.

```typescript
import { reduce } from 'rxjs/operators'; 
 
 const stream: number[] = [1, 2, 3, 4, 5]; 
 
 const observable: Observable<number> = from(stream).pipe( 
  reduce((accum, val) => (accum + val)) 
 ); 
 observable.subscribe((val: number) => console.log(val)); 
 
 // console output 
 /* 
 15 
 */ 
```

##### Filtrar

`.filter` recorta un flujo, eliminando los valores de flujo que no satisfacen su condición.

```typescript
import { filter } from 'rxjs/operators'; 
 
 const stream: number[] = [1, 2, 3, 4, 5]; 
 
 const observable: Observable<number> = from(stream).pipe( 
  filter((val) => (val % 2 === 0)) // filters out odd numbers 
 ); 
 observable.subscribe((val: number) => console.log(val)); 
 
 // console output 
 /* 
 2 
 4 
 */ 
```

##### Mapa

`.map` apunta y transforma cada valor de flujo continuo.

```typescript
const stream: number[] = [1, 2, 3, 4, 5]; 
 
 const observable: Observable<number> = from(stream).pipe( 
    map((val) => (val + 1)) 
 ); 
 observable.subscribe((val: number) => console.log(val)); 
 
 // console output 
 /* 
 2 
 3 
 4 
 5 
 6 
 */ 
```

##### Desafío: cada y para cada

Con el conocimiento de `.every` y `.forEach` como extras de matriz, tratar de ponerlas en práctica ya que los operadores RxJS. Siéntase libre de usar los ejemplos anteriores para orientación. ¡Un poco de práctica va muy lejos después de mucha lectura!

#### HTTP en Angular

Esta sección reúne a RxJS y Angular para mostrar cómo interactúan. Típicamente, un servicio provisto por Angular proporcionará el `Observable` . El flujo de datos del `Observable` puede luego mutar utilizando operadores `.pipe` con `.pipe` .

Angular proporciona un servicio `HttpClient` través de `@angular/common/http` . `HttpClientModule` también es de `@angular/common/http` y exporta el servicio `HttpClient` . El módulo raíz de la aplicación debe importar `HttpClientModule` . Esto hace que `HttpClientModule` sea _inyectable_ desde cualquier lugar de la aplicación.

El servicio `HttpClientModule` realiza solicitudes HTTP. Estas solicitudes son asíncronas. Lo que los hace interesantes para Angular es cómo se maneja la solicitud. Un `Observable` se devuelve con cada solicitud. RxJS puede quitarlo de allí.

El próximo ejemplo utiliza una API pública construida por [Typicode](https://jsonplaceholder.typicode.com) . La API proporciona una matriz de 100 elementos por solicitud `GET` asíncrona.

```typescript
// ./models/post.model.ts 
 
 export interface Post { 
  userId: number; 
  id: number; 
  title: string; 
  body: string; 
 } 
```

```typescript
// ./services/json.service.ts 
 
 import { HttpClient } from '@angular/common/http'; 
 import { Injectable } from '@angular/core'; 
 
 import { Observable, from } from 'rxjs'; 
 import { switchMap, map, filter, reduce } from 'rxjs/operators'; 
 
 import { Post } from '../models/post.model'; 
 
 @Injectable({ 
  providedIn: 'root' 
 }) 
 export class JsonService { 
  constructor(private http: HttpClient) { } 
 
  getPostsByUserId(id: number): Observable<any> { 
    const trim$ = (stream) => from(stream) 
      .pipe( 
        filter((post: Post) => +post.userId === +id), 
        map((post: Post) => ({ title: post.title, body: post.body })), 
        reduce((accum: Post[], post: Post) => accum.concat([post]), []) 
      ); 
 
    return this.http.get("https://jsonplaceholder.typicode.com/posts") 
      .pipe( 
        switchMap((value) => trim$(value)) 
      ); 
  } 
 } 
```

```typescript
// ./components/example/example.component.ts 
 
 import { Component } from '@angular/core'; 
 
 import { JsonService } from '../../services/json.service'; 
 import { Post } from '../../models/post.model'; 
 
 @Component({ 
  selector: 'app-example', 
  template: ` 
  <h1>Request User Posts</h1> 
  <span>User: </span><input #userInput> 
  <button (click)="requestForPosts(userInput.value)">REQUEST</button> 
  <hr> 
  <ul> 
    <div *ngIf="userPosts"> 
      <div *ngFor="let post of userPosts"> 
        <h3>{{ post.title }}</h3> 
        <p>{{ post.body }}</p> 
      </div> 
    </div> 
    <h3 *ngIf="!userPosts">No posts shown...</h3> 
  </ul> 
  ` 
 }) 
 export class ExampleComponent { 
  userPosts: Post[]; 
 
  constructor(private json: JsonService) { } 
 
  requestForPosts(id: number): void { 
    this.json.getPostsByUserId(id) 
      .subscribe((posts: Post[]) => { this.userPosts = posts.length > 0 ? posts : null; }); 
  } 
 } 
```

`json.service.ts` crea un `Observable` en nombre de `component.example.ts` . El componente puede suscribirse al `Observable` devuelto. Solo un valor se emite en el momento en que el `Observable` resuelve el flujo de datos.

La solicitud a `jsonplaceholder.typicode.com` produce una matriz única de 100 publicaciones. La solicitud a través de `HttpClient` produce un `Observable` . El operador `switchMap` devuelve otro `Observable` que sobrescribe la secuencia actual. La variable `trim$` almacena el `Observable` como su valor. Agregar una `$` a una variable utilizada para almacenar `Observable` s es una convención.

`from` convierte la matriz de `jsonplaceholder.typicode.com` en un `Observable` emite 100 valores. Los operadores de RxJS luego filtran cada parte de los datos en el flujo. Se eliminan los valores de flujo irrelevantes para la solicitud. El recorte de datos se lleva a cabo para que los valores de flujo se mantengan escasos de información innecesaria. Los resultados finales se unen una vez más como una única matriz que emite uno a sus observadores.

En `component.example.ts` , JsonService hace referencia al método que devuelve el `Observable` recién descrito. Este método invoca al hacer clic en el botón en la plantilla del componente. El cuadro de entrada también en la plantilla proporciona el argumento de `id` único.

Con el botón presionado, JsonService devuelve un `Observable` que emite una única matriz. `.subscribe` invoca en el `Observable` devuelto. El componente luego establece el valor de `userPosts` igual a la matriz emitida.

La Detección de Cambio Angular recoge el cambio en los datos de clase. La plantilla se actualiza y `*ngFor` garantiza que cada elemento de la matriz de `userPosts` su propio elemento de plantilla.

#### Conclusión

RxJS proporciona el núcleo `Observable` junto con sus operadores. La biblioteca se instala automáticamente desde la línea de comandos usando `ng new [name-of-app]` (CLI angular). Los tipos principales y operadores de `rxjs` descargan a `rxjs` y `rxjs/operators` , respectivamente.

Incluso si no utiliza la CLI, los servicios como `HttpClient` pueden seguir utilizándose. El servicio devuelve una `Promise` lugar de un `Observable` si RxJS no está disponible. El objeto `Promise` es nativo de JavaScript, a diferencia del `Observable` . Esto probablemente cambiará en la próxima versión oficial de JavaScript.

Dicho esto, ¡aprovecha al máximo RxJS! Cualquier estructura iterable puede acomodar al `Observable` . Con él, toda la biblioteca RxJS se vuelve utilizable. Sus operadores transforman eficientemente los datos de un flujo en resultados. Además, los observadores pueden suscribirse a los resultados, lo que aumenta la portabilidad general de los datos.

## Fuentes

*   [Equipo angular. "La biblioteca RxJS". _Google_ . Accedido el 5 de junio de 2018.](https://angular.io/guide/rx-library)
*   [Forbes, Elliot. "Creación de una aplicación en tiempo real con Angular y Socket.io Tutorial". _TutorialEdge.net_ , 10 de enero de 2017. Accedido el 5 de junio de 2018.](https://tutorialedge.net/typescript/angular/angular-socket-io-tutorial)
*   [Equipo RxJS. “Documentación RxJS”. _RxJS_ . Accedido el 5 de junio de 2018.](https://rxjs-dev.firebaseapp.com)
*   [Sukale, Ryan. “Diferencia entre Sujeto Rxjs y Observable”. _TutorialHorizon_ , 23 de marzo de 2017. Accedido el 5 de junio de 2018.](https://javascript.tutorialhorizon.com/2017/03/23/rxjs-subject-vs-observable)
*   [Comunidad de Wikipedia. “Programación reactiva”. _Wikipedia_ , 2 de junio de 2018. Accedido el 5 de junio de 2018.](https://en.wikipedia.org/wiki/Reactive_programming)

## Recursos

*   [Documentacion angular](https://angular.io/guide)
*   [Angular en GitHub](https://github.com/angular/angular)
*   [CLI angular](https://cli.angular.io)
*   [RxJS y Angular](https://angular.io/guide/rx-library)
*   [Programación reactiva](https://en.wikipedia.org/wiki/Reactive_programming)
*   [Extensiones reactivas para JavaScript](https://rxjs-dev.firebaseapp.com)