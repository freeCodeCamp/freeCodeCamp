---
title: Routing
localeTitle: Enrutamiento
---
# Enrutamiento

#### Motivación

El enrutamiento es esencial. Muchas aplicaciones web modernas alojan demasiada información en una página. Los usuarios tampoco deberían tener que desplazarse por el contenido de toda una aplicación. Una aplicación necesita dividirse en secciones distinguibles.

Los usuarios priorizan la información necesaria. El enrutamiento les ayuda a encontrar la sección de la aplicación con dicha información. Cualquier otra información útil para otros usuarios puede existir en una ruta completamente separada. Con el enrutamiento, ambos usuarios pueden encontrar lo que necesitan rápidamente. Los detalles irrelevantes permanecen ocultos detrás de rutas irrelevantes.

El enrutamiento es excelente para clasificar y restringir el acceso a los datos de la aplicación. Los datos confidenciales nunca deben mostrarse a usuarios no autorizados. Entre cada ruta puede intervenir la aplicación. Puede examinar la sesión de un usuario para fines de autenticación. Este examen determina lo que representa la ruta si se debe representar. El enrutamiento brinda a los desarrolladores la oportunidad perfecta de verificar a un usuario antes de continuar.

Crear una lista de rutas promueve la organización también. En términos de desarrollo, mantiene al desarrollador pensando en secciones distinguibles. Los usuarios también se benefician de esto, pero también de los desarrolladores cuando navegan por el código de la aplicación. Una lista de enrutadores programáticos pinta un modelo preciso del extremo frontal de la aplicación.

En cuanto a Angular, el enrutamiento ocupa su propia biblioteca completa dentro del marco. Todos los marcos frontales modernos soportan enrutamiento, y Angular no es diferente. El enrutamiento se realiza desde el lado del cliente mediante el hash o el enrutamiento de ubicación. Ambos estilos permiten al cliente gestionar sus propias rutas. No se necesita asistencia adicional del servidor después de la solicitud inicial.

El navegador web rara vez se actualiza utilizando el enrutamiento del lado del cliente. Las utilidades del navegador web, como los marcadores, el historial y la barra de direcciones aún funcionan a pesar de no actualizarse. Esto lo convierte en una experiencia de enrutamiento impecable que no desordena el navegador. No más recargas de páginas saltadas mientras se enruta a una página diferente.

Angular agrega una capa de abstracción sobre las tecnologías centrales utilizadas para el enrutamiento. Este artículo pretende explicar esta abstracción. Existen dos estrategias de enrutamiento en Angular: ubicación de ruta y hash. Este artículo se centra en la estrategia de ubicación de ruta, ya que es la opción predeterminada.

Además, la ubicación de la ruta puede dejar de lado el enrutamiento hash después de la versión completa de [Angular Universal](https://universal.angular.io) . En cualquier caso, las dos estrategias son muy similares en su implementación. Aprender uno aprende el otro. ¡Hora de empezar!

#### Configuración de RouterModule

Las utilidades de enrutamiento exportan con `RouterModule` disponible desde `@angular/router` . No forma parte de la biblioteca principal, ya que no todas las aplicaciones requieren enrutamiento. La forma más convencional de introducir enrutamiento es como su propio [módulo de características](https://angular.io/guide/feature-modules) .

A medida que crece la complejidad de las rutas, tenerlo como su propio módulo promoverá la simplicidad del módulo raíz. Mantenerlo estúpidamente simple sin comprometer la funcionalidad constituye un buen diseño para los módulos.

```typescript
import { NgModule } from '@angular/core'; 
 import { RouterModule, Routes } from '@angular/router'; 
 
 import { AComponent } from '../../components/a/a.component'; 
 import { BComponent } from '../../components/b/b.component'; 
 
 // an array of soon-to-be routes! 
 const routes: Routes = []; 
 
 @NgModule({ 
  imports: [ RouterModule.forRoot(routes) ], 
  exports: [ RouterModule ] 
 }) 
 export class AppRoutingModule { } 
```

`.forRoot(...)` es una función de clase disponible desde la clase RouterModule. La función acepta una matriz de objetos de `Route` como `Routes` . `.forRoot(...)` configura rutas para la carga `.forChild(...)` mientras que su `.forChild(...)` alternativo configura para la carga perezosa.

Eager-loading significa que las rutas cargan su contenido en la aplicación desde el primer momento. La carga perezosa ocurre bajo demanda. El enfoque de este artículo es la carga impaciente. Es el enfoque predeterminado para cargar en una aplicación. La definición de la clase RouterModule se parece al siguiente bloque de código.

```typescript
@NgModule({ 
  // … lots of metadata ... 
 }) 
 export class RouterModule { 
  forRoot(routes: Routes) { 
    // … configuration for eagerly loaded routes … 
  } 
 
  forChild(routes: Routes) { 
    // … configuration for lazily loaded routes … 
  } 
 } 
```

No se preocupe por los detalles de configuración que el ejemplo omite con los comentarios. Tener un entendimiento general servirá por ahora.

Observe cómo AppRoutingModule importa el RouterModule mientras que también lo exporta. Esto tiene sentido dado que AppRoutingModule es un módulo de características. Se importa en el módulo raíz como un módulo de características. Expone las directivas, interfaces y servicios de RouterModule al árbol de componentes raíz.

Esto explica por qué AppRoutingModule debe exportar RouterModule. Lo hace por el bien del árbol de componentes subyacente del módulo raíz. ¡Necesita acceso a esas utilidades de enrutamiento!

```typescript
import { BrowserModule } from '@angular/platform-browser'; 
 import { NgModule } from '@angular/core'; 
 
 import { AppComponent } from './app.component'; 
 import { AComponent } from './components/a/a.component'; 
 import { BComponent } from './components/b/b.component'; 
 import { AppRoutingModule } from './modules/app-routing/app-routing.module'; 
 
 @NgModule({ 
  declarations: [ 
    AppComponent, 
    AComponent, 
    BComponent 
  ], 
  imports: [ 
    AppRoutingModule, // routing feature module 
    BrowserModule 
  ], 
  providers: [], 
  bootstrap: [ AppComponent ] 
 }) 
 export class AppModule { } 
```

El token de AppRoutingModule se importa desde la parte superior. Su token se inserta en la matriz de importaciones del módulo raíz. El árbol de componentes raíz ahora puede utilizar la biblioteca RouterModule. Eso incluye sus directivas, interfaces y servicios como ya se mencionó. ¡Muchas gracias a AppRoutingModule por exportar RouterModule!

Las utilidades de RouterModule serán útiles para los componentes de la raíz. El HTML básico para AppComponent hace uso de una directiva: `router-outlet` .

```html

<!-- app.component.html --> 
 
 <ul> 
  <!-- routerLink(s) here --> 
 </ul> 
 <router-outlet></router-outlet> 
 <!-- routed content appends here (AFTER THE ELEMENT, NOT IN IT!) --> 
```

`routerLink` es una directiva de atributos de RouterModule. Se adjuntará a cada elemento de `<ul></ul>` una vez que se configuren las rutas. `router-outlet` es una directiva de componentes con un comportamiento interesante. Actúa más como un marcador para mostrar contenido enrutado. El contenido enrutado resulta de la navegación a una ruta específica. Por lo general, eso significa que un solo componente está configurado en AppRoutingModule

El contenido enrutado se representa justo después de `<router-outlet></router-outlet>` . Nada se rinde dentro de ella. Esto no hace una gran diferencia. Dicho esto, no espere que el `router-outlet` comporte como un contenedor de contenido enrutado. Es simplemente un marcador para agregar contenido enrutado al Modelo de objetos de documento (DOM).

#### Enrutamiento básico

La sección anterior establece la configuración básica para el enrutamiento. Antes de que ocurra el enrutamiento real, se deben abordar algunas cosas más

La primera pregunta que hay que abordar es ¿qué rutas consumirá esta aplicación? Bueno, hay dos componentes: AComponent y BComponent. Cada uno debe tener su propia ruta. Se pueden procesar desde la salida del `router-outlet` de AppComponent en función de la ubicación de la ruta actual.

La ubicación de la ruta (o ruta) define lo que se agrega al [origen de](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin) un [sitio web](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin) (por ejemplo, http: // localhost: 4200) a través de una serie de barras diagonales ( `/` ).

```typescript
// … same imports from before … 
 
 const routes: Routes = [ 
  { 
    path: 'A', 
    component: AComponent 
  }, 
  { 
    path: 'B', 
    component: BComponent 
  } 
 ]; 
 
 @NgModule({ 
  imports: [ RouterModule.forRoot(routes) ], 
  exports: [ RouterModule ] 
 }) 
 export class AppRoutingModule { } 
```

`http://localhost:4200/A` procesa AComponent desde el `router-outlet` de AppComponent. `http://localhost:4200/B` representa BComponent. Sin embargo, necesita una forma de enrutar a estas ubicaciones sin usar la barra de direcciones. Una aplicación no debe confiar en la barra de direcciones de un navegador web para la navegación.

_El CSS global (hojas de estilo en cascada) complementa el HTML debajo. El enlace del enrutador de una aplicación debe tener un aspecto agradable. Este CSS se aplica a todos los demás ejemplos también._

```css
/* global styles.css */ 
 
 ul li { 
  cursor: pointer; 
  display: inline-block; 
  padding: 20px; 
  margin: 5px; 
  background-color: whitesmoke; 
  border-radius: 5px; 
  border: 1px solid black; 
 } 
 
 ul li:hover { 
  background-color: lightgrey; 
 } 
```

```html

<!-- app.component.html --> 
 
 <ul> 
  <li routerLink="/A">Go to A!</li> 
  <li routerLink="/B">Go to B!</li> 
 </ul> 
 <router-outlet></router-outlet> 
```

Esta es la ruta básica! Al hacer clic en cualquiera de los elementos de routerLink, se enruta la dirección web. Lo reasigna sin actualizar el navegador web. El `Router` de Angular asigna la dirección enrutada a las `Routes` configuradas en AppRoutingModule. Coincide con la dirección de la propiedad de `path` de un solo objeto de `Route` dentro de la matriz. La primera coincidencia siempre gana, por lo que las rutas que coincidan con todas deben estar al final de la matriz de `Routes` .

Coincidir con todas las rutas evita que la aplicación se bloquee si no puede coincidir con la ruta actual. Esto puede suceder desde la barra de direcciones donde el usuario puede escribir cualquier ruta. Para esto, Angular proporciona un valor de ruta de comodín `**` que acepta todas las rutas. Esta ruta generalmente presenta un componente PageNotFoundComponent que muestra el "Error 404: Página no encontrada".

```typescript
// … PageNotFoundComponent imported along with everything else … 
 
 const routes: Routes = [ 
  { 
    path: 'A', 
    component: AComponent 
  }, 
  { 
    path: 'B', 
    component: BComponent 
  }, 
  { 
    path: '', 
    redirectTo: 'A', 
    pathMatch: 'full' 
  }, 
  { 
    path: '**', 
    component: PageNotFoundComponent 
  } 
 ]; 
```

El objeto `Route` que contiene `redirectTo` evita que el PageNotFoundComponent se renderice como resultado de `http://localhost:4200` . Esta es la ruta de inicio de las aplicaciones. Para solucionar este problema, `redirectTo` la ruta principal a `http://localhost:4200/A` `http://localhost:4200/A` convierte indirectamente en la nueva ruta local de la aplicación.

`pathMatch: 'full'` le dice al objeto `Route` que coincida con la ruta local ( `http://localhost:4200` ). Coincide con el camino vacío.

Estos dos nuevos objetos de `Route` van al final de la matriz desde que gana la primera coincidencia. El último elemento de la matriz ( `path: '**'` ) siempre coincide, por lo que es el último.

Hay una última cosa que vale la pena abordar antes de seguir adelante. ¿Cómo sabe el usuario dónde se encuentra en la aplicación en relación con la ruta actual? Seguro que puede haber contenido específico para la ruta, pero ¿cómo se supone que el usuario haga esa conexión? Debe haber alguna forma de resaltado aplicado a los enlaces de enrutador. De esa manera, el usuario sabrá qué ruta está activa para la página web dada.

Esta es una solución fácil. Cuando haces clic en un elemento `routerLink` , el `Router` de Angular le asigna un _enfoque_ . Este enfoque puede desencadenar ciertos estilos que proporcionan comentarios útiles para el usuario. La directiva `routerLinkActive` puede rastrear este enfoque para el desarrollador.

```html

<!-- app.component.html --> 
 
 <ul> 
  <li routerLink="/A" routerLinkActive="active">Go to A!</li> 
  <li routerLink="/B" routerLinkActive="active">Go to B!</li> 
 </ul> 
 <router-outlet></router-outlet> 
```

La asignación correcta de `routerLinkActive` representa una cadena de clases. Este ejemplo representa solo una clase ( `.active` ), pero puede aplicar cualquier número de clases delimitadas por espacios. Cuando el `Router` asigna el _foco_ a un routerLink, las clases delimitadas por el espacio se aplican al elemento host. Cuando el enfoque se aleja, las clases se eliminan automáticamente.

```css
/* global styles.css */ 
 
 .active { 
  background-color: lightgrey !important; 
 } 
```

Los usuarios ahora pueden reconocer fácilmente cómo coinciden la ruta actual y el contenido de la página. `lightgrey` resaltado de color gris claro se aplica al routerLink que coincide con la ruta actual. `!important` asegura que el resaltado sobrescriba los estilos en línea.

#### Rutas parametrizadas

Las rutas no tienen que estar completamente codificadas. Pueden contener variables dinámicas a las que se puede hacer referencia desde el componente correspondiente al objeto `Route` . Estas variables se declaran como parámetros al escribir la ruta de la ruta.

Los parámetros de ruta son opcionales u obligatorios para coincidir con una `Route` particular. Depende de cómo una ruta escriba sus parámetros. Existen dos estrategias: matriz y parametrización tradicional.

La parametrización tradicional comienza desde la matriz de `Routes` configurada en AppRoutingModule.

```typescript
const routes: Routes = [ 
  // … other routes … 
  { 
    path: 'B', 
    component: BComponent 
  }, 
  { 
    path: 'B/:parameter', 
    component: BComponent 
  }, 
  // … other routes … 
 ]; 
```

Centrarse en las dos rutas de BComponent. La parametrización eventualmente ocurrirá en ambas rutas.

La parametrización tradicional se produce en la segunda `Route` BComponent. `B/:parameter` contiene el `parameter` parámetro como se indica con la `:` . Todo lo que sigue a los dos puntos marca el nombre del parámetro. El `parameter` parámetro es necesario para que la segunda `Route` BComponent coincida.

`parameter` lee el valor de lo que se pasa a la ruta. El enrutamiento a `http://localhost:4200/B/randomValue` asignará al `parameter` el valor de `randomValue` . Este valor puede incluir cualquier cosa además de otro `/` . Por ejemplo, `http://localhost:4200/B/randomValue/blahBlah` no activará la segunda `Route` BComponent. El PageNotFoundComponent en su lugar.

BComponent puede hacer referencia a parámetros de ruta de su clase de componente. Ambos enfoques para la parametrización (matriz y tradicional) arrojan los mismos resultados en BComponent. Antes de ver BComponent, examine la forma matricial de parametrización a continuación.

```typescript
// app.component.ts 
 
 import { Component } from '@angular/core'; 
 import { Router } from '@angular/router'; 
 
 @Component({ 
  selector: 'app-root', 
  templateUrl: './app.component.html' 
 }) 
 export class AppComponent { 
  constructor(private router: Router) { } 
 
  routeMatrixParam(value: string) { 
    if (value) 
      this.router.navigate(['B', { parameter: value }]); // matrix parameter 
    else 
      this.router.navigate(['B']); 
  } 
 
  routeAddressParam(value: string) { 
    this.router.navigate(['B', value]); 
  } 
 } 
```

El sistema de inyección de dependencia de Angular proporciona una instanciación del `Router` . Esto permite que el componente se enrute programáticamente. La función `.navigate(...)` acepta una matriz de valores que se resuelve en una ruta _enrutable_ . Algo como `.navigate(['path', 'to', 'something'])` resuelve en `http://localhost:4200/path/to/something` . `.navigate(...)` agrega una delimitación de ruta `/` marcas al normalizar la matriz en una ruta _enrutable_ .

La segunda forma de parametrización ocurre en `routeMatrixParam(...)` . Vea esta línea de código: `this.router.navigate(['B', { parameter: value }])` . Esta forma de `parameter` es un parámetro de matriz. Su valor es opcional para que la primera `Route` BComponent coincida ( `/B` ). La `Route` coincide independientemente de la presencia del parámetro en la ruta.

`routeAddressParam(...)` resuelve una ruta que coincide con el enfoque de parametrización `http://localhost:4200/B/randomValue` . Esta estrategia tradicional necesita un parámetro para coincidir con la segunda ruta BComponent ( `B/:parameter` :).

La estrategia matricial concierne a `routeMatrixParam(...)` . Con o sin un parámetro de matriz en su ruta, la primera ruta BComponent aún coincide. El `parameter` parámetro pasa a BComponent al igual que con el enfoque tradicional.

Para entender el código anterior, aquí está la plantilla HTML correspondiente.

```html

// app.component.html 
 
 <ul> 
  <li routerLink="/A">Go to A!</li> 
  <li> 
    <input #matrixInput> 
    <button (click)="routeMatrixParam(matrixInput.value)">Matrix!</button> 
  </li> 
  <li> 
    <input #paramInput> 
    <button (click)="routeAddressParam(paramInput.value)">Param!</button> 
  </li> 
 </ul> 
 <router-outlet></router-outlet> 
```

En la plantilla, los valores son aceptados como entrada de texto. La entrada lo inyecta en la ruta como parámetro. Existen dos conjuntos separados de cajas para cada estrategia de parametrización (tradicional y matriz). Con todas las piezas unidas, es hora de examinar la clase de componente BComponent.

```typescript
// b.component.ts 
 
 import { Component, OnInit } from '@angular/core'; 
 import { ActivatedRoute, ParamMap } from '@angular/router'; 
 
 @Component({ 
  selector: 'app-b', 
  template: ` 
  <p>Route param: {{ currParam }}</p> 
  ` 
 }) 
 export class BComponent implements OnInit { 
  currParam: string = ""; 
 
  constructor(private route: ActivatedRoute) { } 
 
  ngOnInit() { 
    this.route.params.subscribe((param: ParamMap) => { 
      this.currParam = param['parameter']; 
    }); 
  } 
 } 
```

BComponent resulta de cualquiera de las dos rutas BComponent en AppRoutingModule. `ActivatedRoute` crea una instancia de un conjunto de información útil que pertenece a la ruta actual. Es decir, la ruta que hizo que se generara BComponent. `ActivatedRoute` crea una instancia a través de la inyección de dependencia dirigida al constructor de la clase.

El campo `.params` de `ActivatedRoute.params` devuelve un `Observable` que emite los parámetros de la ruta. Observe cómo los dos enfoques de parametrización diferentes dan como resultado el `parameter` parámetro. El `Observable` devuelto lo emite como un par clave-valor dentro de un objeto `ParamMap` .

Entre los dos enfoques de parametrización, el `parameter` parámetro se resolvió de manera idéntica. El valor se emite desde `ActivatedRoute.params` pesar del enfoque de la parametrización.

La barra de direcciones distingue los resultados finales de cada enfoque. La parametrización de matriz (opcional para la coincidencia de `Route` ) produce la dirección: `http://localhost:4200/B;parameter=randomValue` . La parametrización tradicional (requerida para coincidencia de `Route` ) produce: `http://localhost:4200/B/randomValue` .

De cualquier manera, los mismos resultados de BComponent. La diferencia real: una `Route` BComponent diferente coincide. Esto depende enteramente de la estrategia de parametrización. El enfoque de matriz asegura que los parámetros son opcionales para la coincidencia de `Route` . El enfoque tradicional los exige.

#### Rutas anidadas

`Routes` pueden formar una jerarquía. En el DOM, esto implica que una `router-outlet` principal `router-outlet` al menos una `router-outlet` secundaria. En la barra de direcciones, se ve así: `http://localhost/parentRoutes/childRoutes` . En la configuración de `Routes` , la propiedad `children: []` denota que un objeto `Route` tiene rutas anidadas (secundarias).

```typescript
import { NgModule } from '@angular/core'; 
 import { RouterModule, Routes } from '@angular/router'; 
 
 import { NestComponent } from '../../components/nest/nest.component'; 
 import { AComponent } from '../../components/nest/a/a.component'; 
 import { BComponent } from '../../components/nest/b/b.component'; 
 
 const routes: Routes = [ 
  { 
    path: 'nest', 
    component: NestComponent, 
    children: [ 
      { path: 'A', component: AComponent }, 
      { path: 'B', component: BComponent } 
    ] 
  } 
 ]; 
 
 @NgModule({ 
  imports: [ RouterModule.forRoot(routes) ], 
  exports: [ RouterModule ] 
 }) 
 export class AppRoutingModule { } 
```

```typescript
// nest.component.ts 
 
 import { Component } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-nest', 
  template: ` 
  <ul> 
    <li routerLink="./A">Go to A!</li> 
    <li routerLink="./B">Go to B!</li> 
  </ul> 
  <router-outlet></router-outlet> 
  ` 
 }) 
 export class NestComponent { } 
```

NestComponent procesa una `router-outlet` después de representarse a sí misma desde otra `router-outlet` nivel raíz en AppComponent. El `router-outlet` de la plantilla de NestComponent puede representar AComponent ( `/nest/A` ) o BComponent ( `/nest/B` ).

AppRoutingModule refleja este anidamiento en el objeto `Route` de NestComponent. El campo `children: []` contiene una matriz de objetos de `Route` . Estos objetos de `Route` también pueden anidar rutas en sus `children: []` campos. Esto puede continuar por muchas capas de rutas anidadas. El ejemplo anterior muestra dos capas de anidación.

Cada `routerLink` contiene un `./` en comparación con `/` . El `.` asegura que el routerLink se agregue a la ruta de la ruta. El routerLink reemplaza completamente la ruta de lo contrario. Después de dirigir a `/nest` , `.` se expande en `/nest` .

Esto es útil para enrutar a `/nest/A` o `/nest/B` desde la ruta `.nest` . `A` y `B` constituyen rutas anidadas de `/nest` . El enrutamiento a `/A` o `/B` devuelve PageNotFound. `/nest` debe anteponer las dos rutas.

Eche un vistazo a AppComponent que contiene el `router-outlet` nivel raíz en su plantilla. AppComponent es la primera capa de anidamiento, mientras que NestComponent es el segundo.

```typescript
import { Component } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-root', 
  template: ` 
  <ul> 
    <li routerLink="/nest">Go to nested routes!</li> 
    <li routerLink="/">Back out of the nested routes!</li> 
  </ul> 
  <router-outlet></router-outlet> 
  ` 
 }) 
 export class AppComponent { } 
```

Dentro del objeto `Route` del nido, los `children: []` contiene dos rutas más anidadas. Tienen como resultado un componente y un componente de BC cuando se enrutan desde `/nest` como se explicó anteriormente. Estos componentes son muy simples por el bien de la demostración. `<li routerLink="/">...</li>` permite navegar fuera de las rutas del nido para restablecer el ejemplo, navegando a la ruta local.

```typescript
import { Component } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-a', 
  template: ` 
  <p>a works!</p> 
  ` 
 }) 
 export class AComponent { } 
```

```typescript
import { Component } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-b', 
  template: ` 
  <p>b works!</p> 
  ` 
 }) 
 export class BComponent { } 
```

La matriz `children: []` acepta el objeto `Route` como elementos. `children: []` puede aplicar a cualquiera de estos elementos. Los hijos de estos elementos pueden seguir anidando. Este patrón puede continuar por muchas capas de anidamiento. Inserte una `router-outlet` en la plantilla para cada capa de enrutamiento anidado.

Las técnicas de enrutamiento se aplican independientemente del nivel de anidamiento de un objeto `Route` . Las técnicas de parametrización difieren en un solo aspecto. Las rutas secundarias solo pueden acceder a los parámetros de sus padres a través de `ActivatedRoute.parent.params` . `ActivatedRoute.params` apunta al mismo nivel de rutas anidadas. Esto excluye las rutas de nivel principal y sus parámetros.

`Route` protectores de `Route` son especialmente adecuados para enrutamiento anidado. Un objeto de `Route` puede restringir el acceso a todas sus rutas anidadas (secundarias).

#### Rutas vigiladas

Las aplicaciones web a menudo consisten en datos públicos y privados. Ambos tipos de datos tienden a tener sus propias páginas con rutas _protegidas_ . Estas rutas permiten / restringen el acceso dependiendo de los privilegios del usuario. Los usuarios no autorizados pueden interactuar con una ruta protegida. La ruta debe bloquear al usuario si intenta acceder a su contenido enrutado.

Angular proporciona un conjunto de protecciones de autenticación que se pueden adjuntar a cualquier ruta. Estos métodos se activan automáticamente dependiendo de cómo interactúa el usuario con la ruta protegida.

*   `canActivate(...)` - se `canActivate(...)` cuando el usuario intenta acceder a una ruta
    
*   `canActivateChild(...)` : se `canActivateChild(...)` cuando el usuario intenta acceder a las rutas anidadas (secundarias) de una ruta
    
*   `canDeactivate(...)` : se `canDeactivate(...)` cuando el usuario intenta abandonar una ruta
    

Los métodos de protección de Angular están disponibles en `@angular/router` . Para ayudarlos a autenticarse, pueden recibir opcionalmente algunos parámetros. Tales parámetros no se inyectan vía inyección de dependencia. Bajo el capó, cada valor se pasa como un argumento al método de guardia invocado.

*   `ActivatedRouteSnapshot` : disponible para los tres
    
*   `RouterStateSnapshot` : disponible para los tres
    
*   `Component` - disponible para `canDeactivate(...)`
    

`ActivatedRouteSnapshot` proporciona acceso a los parámetros de ruta de la ruta protegida. `RouterStateSnapshot` expone la dirección `RouterStateSnapshot` la URL (localizador uniforme de recursos) que coincide con la ruta. `Component` referencia al componente representado por la ruta.

Para proteger una ruta, una clase que implemente los métodos de protección debe existir primero como un servicio. El servicio puede inyectarse en AppRoutingModule para proteger sus `Routes` . El valor de token para el servicio puede inyectarse en cualquier objeto `Route` .

```typescript
import { NgModule } from '@angular/core'; 
 import { RouterModule, Routes } from '@angular/router'; 
 
 import { AuthService } from '../../services/auth.service'; 
 import { UserService } from '../../services/user.service'; 
 
 import { PrivateNestComponent } from '../../components/private-nest/private-nest.component'; 
 import { PrivateAComponent } from '../../components/private-nest/private-a/private-a.component'; 
 import { PrivateBComponent } from '../../components/private-nest/private-b/private-b.component'; 
 
 const routes: Routes = [ 
  { 
    path: 'private-nest', 
    component: PrivateNestComponent, 
    canActivate: [ AuthService ], // !!! 
    canActivateChild: [ AuthService ], // !!! 
    canDeactivate: [ AuthService ], // !!! 
    children: [ 
      { path: 'private-A', component: PrivateAComponent }, 
      { path: 'private-B', component: PrivateBComponent } 
    ] 
  } 
 ]; 
 
 @NgModule({ 
  imports: [ RouterModule.forRoot(routes) ], 
  exports: [ RouterModule ], 
  providers: [ 
    AuthService, 
    UserService 
  ] 
 }) 
 export class AppRoutingModule { } 
```

`canActivate` , `canActivateChild` y `canDeactivate` implement desde AuthService. La implementación del servicio se mostrará en breve junto con la implementación UserService.

UserService proporciona la información necesaria para autenticar a un usuario. Las implementaciones del método de protección AuthService realizan la autenticación. AppRoutingModule debe incluir los dos servicios en su matriz de proveedores. Esto es para que el inyector del módulo sepa cómo instanciarlos.

Las rutas anidadas existen fuera de la ruta `/private-nest` . El objeto `Route` para `/private-nest` contiene algunos campos más nuevos. Sus nombres deben parecer familiares ya que reflejan sus correspondientes métodos de guardia.

Cada campo dispara la implementación del método del mismo nombre dentro del servicio cuando se activa. Cualquier número de servicios puede poblar esta matriz también. La implementación del método de cada servicio se pone a prueba. Deben devolver un valor booleano o un `Observable` que emita un valor booleano.

Vea las implementaciones de AuthService y UserService a continuación.

```typescript
// user.service.ts 
 
 import { Injectable } from '@angular/core'; 
 import { Router } from '@angular/router'; 
 
 class TheUser { 
  constructor(public isLoggedIn: boolean = false) { } 
 
  toggleLogin() { 
    this.isLoggedIn = true; 
  } 
 
  toggleLogout() { 
    this.isLoggedIn = false; 
  } 
 } 
 
 const globalUser = new TheUser(); 
 
 @Injectable({ 
  providedIn: 'root' 
 }) 
 export class UserService { 
  theUser: TheUser = globalUser; 
 
  constructor(private router: Router) { } 
 
  get isLoggedIn() { 
    return this.theUser.isLoggedIn; 
  } 
 
  login() { 
    this.theUser.toggleLogin(); 
  } 
 
  logout() { 
    this.theUser.toggleLogout(); 
    this.router.navigate(['/']); 
  } 
 } 
```

La misma instancia de `TheUser` se pasa con cada instanciación de UserService. `TheUser` proporciona acceso a `isLoggedIn` para determinar el estado de inicio de sesión del usuario. Otros dos métodos públicos permiten que UserService alterne el valor de `isLoggedIn` . Esto es para que el usuario pueda iniciar y cerrar sesión.

Puedes pensar en `TheUser` como una instancia global. `UserService` es una interfaz `UserService` que configura este global. Los cambios a `TheUser` desde una instanciación de `UserService` aplican a todas las demás instancias de `UserService` . `UserService` implementa en AuthService para proporcionar acceso a `isLoggedIn` de `TheUser` para la autenticación.

```typescript
import { Component, Injectable } from '@angular/core'; 
 import { CanActivate, CanActivateChild, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'; 
 
 import { UserService } from './user.service'; 
 
 @Injectable({ 
  providedIn: 'root' 
 }) 
 export class AuthService implements CanActivate, CanActivateChild, CanDeactivate<Component> { 
  constructor(private user: UserService) {} 
 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) { 
    if (this.user.isLoggedIn) 
      return true; 
    else 
      return false; 
  } 
 
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) { 
    return this.canActivate(route, state); 
  } 
 
  canDeactivate(component: Component, route: ActivatedRouteSnapshot, state: RouterStateSnapshot) { 
    if (!this.user.isLoggedIn || window.confirm('Leave the nest?')) 
      return true; 
    else 
      return false; 
  } 
 } 
```

AuthService implementa todos los métodos de guarda importados de `@angular/router` . Cada método de guarda se asigna a un campo correspondiente en el objeto `Route` del PrivateNestComponent. Una instancia de UserService crea una instancia del constructor AuthService. AuthService determina si un usuario puede continuar utilizando `isLoggedIn` expuesto por UserService.

Si se devuelve `false` de un guardia, se indica a la ruta que bloquee al usuario para evitar que enrute. Un valor de retorno de `true` permite al usuario proceder a su destino de ruta. Si se autentica más de un servicio, todos deben devolver true para permitir el acceso. `canActivateChild` guarda las rutas secundarias de PrivateNestComponent. Este método de protección cuenta para los usuarios que pasan por alto PrivateNestComponent a través de la barra de direcciones.

Los parámetros del método de guarda pasan automáticamente tras la invocación. Si bien el ejemplo no hace uso de ellos, sí proporcionan información útil de la ruta. El desarrollador puede usar esta información para ayudar a autenticar al usuario.

AppComponent también crea una instancia de UserService para uso directo en su plantilla. La instanciación de UserService de AppComponent y AuthService hace referencia a la misma clase de usuario ( `TheUser` ).

```typescript
import { Component } from '@angular/core'; 
 
 import { UserService } from './services/user.service'; 
 
 @Component({ 
  selector: 'app-root', 
  template: ` 
  <ul> 
    <li routerLink="/private-nest">Enter the secret nest!</li> 
    <li routerLink="/">Leave the secret nest!</li> 
    <li *ngIf="user.isLoggedIn"><button (click)="user.logout()">LOGOUT</button></li> 
    <li *ngIf="!user.isLoggedIn"><button (click)="user.login()">LOGIN</button></li> 
  </ul> 
  <router-outlet></router-outlet> 
  ` 
 }) 
 export class AppComponent { 
  constructor(private user: UserService) { } 
 } 
```

UserService maneja toda la lógica de AppComponent. AppComponent se refiere principalmente a su plantilla. Un UserService crea una instancia como `user` del constructor de la clase. `user` datos del `user` determinan la funcionalidad de la plantilla.

#### Conclusión

El enrutamiento logra un buen equilibrio entre la organización y la restricción de las secciones de la aplicación. Una aplicación más pequeña, como un blog o una página de tributo, puede no requerir ningún enrutamiento. Incluso entonces, incluir un poco de enrutamiento hash no podría hacer daño. Un usuario solo puede querer hacer referencia a una parte de la página después de todo.

Angular aplica su propia biblioteca de enrutamiento construida sobre la [API de historial de](https://developer.mozilla.org/en-US/docs/Web/API/History_API) HTML5. Esta API omite el enrutamiento hash para utilizar en su lugar los `pushState(...)` y `replaceState(...)` . Cambian la URL de la dirección web sin actualizar la página. La estrategia de enrutamiento de ubicación de ruta predeterminada en Angular funciona de esta manera. La configuración de `RouterModule.forRoot(routes, { useHash: true })` habilita el enrutamiento hash si se prefiere.

Este artículo se centró en la estrategia de ubicación de ruta predeterminada. Independientemente de la estrategia, muchas utilidades de enrutamiento están disponibles para enrutar una aplicación. El `RouterModule` expone estas utilidades a través de sus exportaciones. Rutas básicas, parametrizadas, anidadas y protegidas son posibles utilizando RouterModule. Para implementaciones más avanzadas que incluyen rutas cargadas perezosamente, vea los enlaces a continuación.

## Fuentes

*   [Equipo angular. “Enrutamiento y navegación”. _Google_ . Accedido el 8 de junio de 2018.](https://angular.io/guide/router)
*   [Hussain, Asim. “Angular 5: Enrutamiento”. _codecraft.tv_ . Accedido el 8 de junio de 2018.](https://codecraft.tv/courses/angular/routing)
*   [Smith, Peter. “3 tipos de carga de ruta en palabras angulares, explicadas en 500 palabras”. _Upstate Interactive_ , 3 de mayo de 2017. Acceso el 8 de junio de 2018.](https://blog.upstate.agency/3-types-of-route-loading-in-angular-explained-in-500ish-words-f22976e1f60b)
*   [Koretskyi, Maxim. “Evitando confusiones comunes con módulos en Angular”. _Angular en profundidad_ , 10 de agosto de 2017. Consultado el 8 de junio de 2018.](https://blog.angularindepth.com/avoiding-common-confusions-with-modules-in-angular-ada070e6891f)

## Recursos

*   [Documentacion angular](https://angular.io/guide)
*   [Enrutamiento y navegación](https://angular.io/guide/router)
*   [Angular 5: Tutorial de enrutamiento por Asim Hussain](https://codecraft.tv/courses/angular/routing/overview)
*   [Angular en profundidad](https://blog.angularindepth.com)
*   [Repositorio Angular de GitHub](https://github.com/angular/angular)
*   [CLI angular](https://cli.angular.io)