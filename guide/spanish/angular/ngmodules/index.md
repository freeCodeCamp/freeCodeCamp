---
title: NgModules
localeTitle: iModules
---
# Ngmódulos

#### Motivación

Las aplicaciones angulares comienzan desde la raíz NgModule. Angular gestiona las dependencias de una aplicación a través de su sistema de módulos compuesto por NgModules. Junto con los módulos JavaScript simples, NgModules garantiza la modularidad y encapsulación del código.

Los módulos también proporcionan un alto nivel de código de organización. Cada NgModule secciona su propio fragmento de código como la raíz. Este módulo proporciona encapsulación de arriba a abajo para su código. El bloque de código completo puede exportarse a cualquier otro módulo. En este sentido, los NgModules actúan como guardianes de sus propios bloques de código.

Las utilidades documentadas de Angular provienen de NgModules creados por Angular. Ninguna utilidad está disponible a menos que el NgModule que declara que se incluya en la raíz. Estas utilidades también deben exportar desde su módulo host para que los importadores puedan usarlas. Esta forma de encapsulación permite al desarrollador producir sus propios módulos de ngM dentro del mismo sistema de archivos.

Además, tiene sentido saber por qué la CLI angular (interfaz de línea de comandos) importa `BrowserModule` desde `@angular/core` . Esto sucede cada vez que se genera una nueva aplicación utilizando el comando CLI: `ng new [name-of-app]` .

Comprender el punto de la implementación puede ser suficiente en la mayoría de los casos. Sin embargo, entender cómo la implementación se conecta a la raíz es aún mejor. Todo sucede automáticamente al importar `BrowserModule` en la raíz.

#### Decorador NgModule

Angular define sus módulos decorando una clase genérica. El decorador `@NgModule` indica el propósito modular de la clase para Angular. Una clase NgModule consolida las dependencias raíz accesibles / instanciables desde el alcance del módulo. 'Alcance' significa cualquier cosa que se origine a partir de los metadatos del módulo.

```typescript
import { NgModule } from '@angular/core'; 
 
 @NgModule({ 
  // … metadata … 
 }) 
 export class AppModule { } 
```

#### NgModule Metadata

El NgModule raíz de CLI incluye los siguientes campos de metadatos. Estos campos proporcionan configuración al bloque de código sobre el cual NgModule preside.

*   `declarations: []`
*   `imports: []`
*   `providers: []`
*   `bootstrap: []`

##### Declaraciones

La matriz de declaraciones incluye todos los componentes, directivas o canalizaciones alojadas por un NgModule. Son privados para el módulo a menos que se exporten explícitamente dentro de sus metadatos. Dado este caso de uso, los componentes, directivas y tuberías se denominan "declarables". Un NgModule debe declarar un declarable únicamente. Lo declarable no puede declarar dos veces en NgModules separados. De lo contrario se lanza un error. Vea el siguiente ejemplo.

```typescript
import { NgModule } from '@angular/core'; 
 import { TwoComponent } from './components/two.component.ts'; 
 
 @NgModule({ 
  declarations: [ TwoComponent ] 
 }) 
 export class TwoModule { } 
 
 @NgModule({ 
  imports: [ TwoModule ], 
  declarations: [ TwoComponent ] 
 }) 
 export class OneModule { } 
```

Angular lanza un error por el bien de la encapsulación de NgModule. Los declarables son privados al NgModule que los declara por defecto. Si varios NgModules necesitan un determinado declarable, deben importar el NgModule declarante. Este NgModule debe luego exportar la declaración deseada para que los otros NgModules puedan usarla.

```typescript
import { NgModule } from '@angular/core'; 
 import { TwoComponent } from './components/two.component.ts'; 
 
 @NgModule({ 
  declarations: [ TwoComponent ], 
  exports: [ TwoComponent ] 
 }) 
 export class TwoModule { } 
 
 @NgModule({ 
  imports: [ TwoModule ] // this module can now use TwoComponent 
 }) 
 export class OneModule { } 
```

El ejemplo anterior no arrojará un error. TwoComponent ha sido declarado de forma única entre los dos NgModules. OneModule también tiene acceso a TwoComponent ya que importa TwoModule. TwoModule a su vez exporta el TwoComponent para uso externo.

##### Importaciones

La matriz de importaciones solo acepta NgModules. Esta matriz no acepta elementos declarables, servicios o cualquier otra cosa además de otros NgModules. La importación de un módulo proporciona acceso a lo que el módulo declara publicita.

Esto explica por qué importar `BrowserModule` proporciona acceso a sus diversas utilidades. Cada utilidad declarable declarada en `BrowserModule` exporta desde sus metadatos. Al importar `BrowserModule` , esos declarables exportados pasan a estar disponibles para la importación de NgModule. Los servicios no se exportan en absoluto, ya que carecen de la misma encapsulación.

##### Proveedores

La falta de encapsulación de servicio puede parecer extraña dada la encapsulación de declarables. Recuerde que los servicios entran en la matriz de proveedores por separado de las declaraciones o exportaciones.

Cuando Angular compila, aplana la raíz NgModule y sus importaciones en un módulo. Los servicios se agrupan en una sola matriz de proveedores alojada por el NgModule fusionado. Los declarables mantienen su encapsulación a través de un conjunto de indicadores de tiempo de compilación.

Si los proveedores de NgModule contienen valores de token coincidentes, el módulo raíz de importación tendrá prioridad. Más allá de eso, el último NgModule importado tiene prioridad. Vea el siguiente ejemplo. Preste especial atención al NgModule que importa los otros dos. Reconocer cómo eso afecta la prioridad del servicio proporcionado.

```typescript
import { NgModule } from '@angular/core'; 
 
 @NgModule({ 
  providers: [ AwesomeService ], // 1st precedence + importing module 
  imports: [ 
    BModule, 
    CModule 
  ] 
 }) 
 export class AModule { } 
 
 @NgModule({ 
  providers: [ AwesomeService ]  // 3rd precedence + first import 
 }) 
 export class BModule { } 
 
 @NgModule({ 
  providers: [ AwesomeService ]  // 2nd precedence + last import 
 }) 
 export class CModule { } 
```

Al crear una instancia de AwesomeService desde el alcance de AModule, se obtiene una instancia de AwesomeService como se indica en los metadatos de AModule. Si los proveedores de AModule omitieran este servicio, el AwesomeService of CModule tendría prioridad. De vez en cuando para BModule si los proveedores de CModule omitieron AwesomeService.

##### Oreja

La matriz de arranque acepta componentes. Para cada componente de la matriz, Angular inserta el componente como su propia raíz del archivo `index.html` . El NgModule raíz generado por CLI de una aplicación siempre tendrá este campo.

```typescript
import { BrowserModule } from '@angular/platform-browser'; 
 import { NgModule } from '@angular/core'; 
 import { AppComponent } from './app.component'; 
 
 @NgModule({ 
  declarations: [ AppComponent ], 
  imports: [ BrowserModule ], 
  providers: [], 
  bootstrap: [ AppComponent ] 
 }) 
 export class AppModule { } 
```

El elemento de AppComponent se inyectará en el HTML de nivel básico de la aplicación ( `index.html` ). El resto del árbol componente se despliega desde allí. El alcance del NgModule general cubre todo este árbol más cualquier otro inyectado desde la matriz bootstrap. La matriz usualmente contiene un solo elemento. Este componente representa el módulo como un elemento único y su árbol subyacente.

#### NgModules vs módulos de JavaScript

Ha visto módulos de Angular y JavaScript trabajando juntos en los ejemplos anteriores. Las principales instrucciones `import..from` constituyen el sistema de módulos de JavaScript. Las ubicaciones de archivo de cada destino de declaración deben exportar una clase, variable o función que coincida con la solicitud. `import { TARGET } from './path/to/exported/target'` .

En JavaScript, los módulos están separados por archivos. Importación de archivos usando las palabras clave `import..from` como se acaba de mencionar. NgModules, por otro lado, están separados por clases y decorados con `@NgModule` . Y así, muchos módulos angulares pueden existir en un solo archivo. Esto no puede suceder con JavaScript ya que un archivo define un módulo.

Por supuesto, las convenciones dicen que cada clase decorada `@NgModule` debe tener su propio archivo. Aun así, debes saber que los archivos no constituyen sus propios módulos en Angular. Las clases decoradas con `@NgModule` crean esa distinción.

Los módulos de JavaScript proporcionan referencias de token a los metadatos de `@NgModule` . Esto sucede en la parte superior de un archivo que aloja una clase NgModule. NgModule utiliza estos tokens dentro de sus campos de metadatos (declarables, importaciones, proveedores, etc.). La única razón por la que `@NgModule` puede decorar una clase en primer lugar es porque JavaScript lo importa desde la parte superior del archivo.

```typescript
// JavaScript module system provides tokens 
 import { BrowserModule } from '@angular/platform-browser'; 
 import { NgModule } from '@angular/core'; 
 import { AppComponent } from './app.component'; 
 import { AppService } from './app.service'; 
 // Javascript module system is strict about where it imports. It can only import at the top of files. 
 
 // Angular NgModule uses those tokens in its metadata settings 
 @NgModule({ // import { NgModule } from '@angular/core'; 
  declarations: [ 
    AppComponent // import { AppComponent } from './app.component'; 
  ], 
  imports: [ 
    BrowserModule // import { BrowserModule } from '@angular/platform-browser'; 
  ], 
  providers: [ 
    AppService // import { AppService } from './app.service'; 
  ], 
  bootstrap: [ 
    AppComponent // import { AppComponent } from './app.component'; 
  ] 
 }) 
 export class AppModule { } 
 // JavaScript module system exports the class. Other modules can now import AppModule. 
```

El ejemplo anterior no introduce nada nuevo. El enfoque aquí está en los comentarios que explican cómo los dos sistemas modulares trabajan juntos. JavaScript proporciona referencias de token, mientras que NgModule las utiliza para encapsular y configurar su bloque de código subyacente.

#### Módulos de funciones

Las aplicaciones crecen con el tiempo. Escalado adecuadamente requiere la organización de la aplicación. Un sistema sólido para esto facilitará aún más el desarrollo.

En Angular, los esquemas aseguran que las secciones de código dirigidas a un propósito permanezcan distinguibles. Más allá de los esquemas sub-NgModule, están los propios NgModules. Son un tipo de esquema también. Se ubican por encima del resto en la lista de esquemas excluyendo la aplicación en sí.

El módulo raíz no debe estar solo una vez que la aplicación comienza a escalar. Los módulos de funciones incluyen cualquier NgModule utilizado junto con la raíz NgModule. Puede pensar que el módulo raíz tiene el campo de metadatos `bootstrap: []` . La aplicación de características garantiza que el módulo raíz no sobresaturará sus metadatos.

Los módulos de funciones aíslan una sección de código en nombre de cualquier módulo de importación. Pueden manejar secciones enteras de la aplicación de forma independiente. Esto significa que podría usarse en cualquier aplicación cuyo módulo raíz importe el módulo de características. ¡Esta táctica ahorra tiempo y esfuerzo a los desarrolladores en el transcurso de múltiples aplicaciones! Mantiene la raíz de la aplicación NgModule magra también.

En la raíz de NgModule de una aplicación, agregar el token de un módulo de función a la matriz de `imports` la raíz funciona. Cualquiera que sea el módulo de características que exporte o proporcione, estará disponible para la raíz.

```typescript
// ./awesome.module.ts 
 
 import { NgModule } from '@angular/core'; 
 import { AwesomePipe } from './awesome/pipes/awesome.pipe'; 
 import { AwesomeComponent } from './awesome/components/awesome.component'; 
 import { AwesomeDirective } from './awesome/directives/awesome.directive'; 
 
 @NgModule({ 
  exports: [ 
    AwesomePipe, 
    AwesomeComponent, 
    AwesomeDirective 
  ] 
  declarations: [ 
    AwesomePipe, 
    AwesomeComponent, 
    AwesomeDirective 
  ] 
 }) 
 export class AwesomeModule { } 
```

```typescript
// ./app.module.ts 
 
 import { AwesomeModule } from './awesome.module'; 
 import { BrowserModule } from '@angular/platform-browser'; 
 import { NgModule } from '@angular/core'; 
 import { AppComponent } from './app.component'; 
 
 @NgModule({ 
  declarations: [ 
    AppComponent 
  ], 
  imports: [ 
    AwesomeModule, 
    BrowserModule 
  ], 
  providers: [], 
  bootstrap: [ 
    AppComponent 
  ] 
 }) 
 export class AppModule { } 
```

```typescript
// ./app.component.ts 
 
 import { Component } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-root', 
  template: ` 
  <!-- AwesomeDirective --> 
  <h1 appAwesome>This element mutates as per the directive logic of appAwesome.</h1> 
 
  <!-- AwesomePipe --> 
  <p>Generic output: {{ componentData | awesome }}</p> 
 
  <section> 
    <!-- AwesomeComponent --> 
    <app-awesome></app-awesome> 
  </section> 
  ` 
 }) 
 export class AppComponent { 
  componentData: string = "Lots of transformable data!"; 
 } 
```

`<app-awesome></app-awesome>` (componente), `awesome` (pipe), y `appAwesome` (directiva) son exclusivos de AwesomeModule. Si no hubiera exportado estos elementos declarables o si AppModule no hubiera agregado AwesomeModule a sus importaciones, entonces los elementos declarables de AwesomeModule no habrían sido utilizables por la plantilla de AppComponent. AwesomeModule es un módulo de funciones para la raíz NgModule AppModule.

Angular proporciona algunos de sus propios módulos que complementan la raíz en su importación. Esto se debe a que estos módulos de funciones exportan lo que crean.

#### Métodos de módulo estático

A veces, los módulos brindan la opción de configurarse con un objeto de configuración personalizado. Esto se logra aprovechando los métodos estáticos dentro de la clase de módulo.

Un ejemplo de este enfoque es el `RoutingModule` que proporciona un `.forRoot(...)` directamente en el módulo.

Para definir su propio método de módulo estático, agréguelo a la clase de módulo utilizando la palabra clave `static` . El tipo de retorno debe ser `ModuleWithProviders` .

```ts
// configureable.module.ts 
 
 import { AwesomeModule } from './awesome.module'; 
 import { ConfigureableService, CUSTOM_CONFIG_TOKEN, Config } from './configurable.service'; 
 import { BrowserModule } from '@angular/platform-browser'; 
 import { NgModule } from '@angular/core'; 
 
 
 @NgModule({ 
  imports: [ 
    AwesomeModule, 
    BrowserModule 
  ], 
  providers: [ 
    ConfigureableService 
  ] 
 }) 
 export class ConfigureableModule { 
  static forRoot(config: Config): ModuleWithProviders { 
    return { 
        ngModule: ConfigureableModule, 
        providers: [ 
            ConfigureableService, 
            { 
                provide: CUSTOM_CONFIG_TOKEN, 
                useValue: config 
            } 
        ] 
    }; 
  } 
 } 
```

```ts
// configureable.service.ts 
 
 import { Inject, Injectable, InjectionToken } from '@angular/core'; 
 
 export const CUSTOM_CONFIG_TOKEN: InjectionToken<string> = new InjectionToken('customConfig'); 
 
 export interface Config { 
  url: string 
 } 
 
 @Injectable() 
 export class ConfigureableService { 
  constructor( 
    @Inject(CUSTOM_CONFIG_TOKEN) private config: Config 
  ) 
 } 
```

Observe que el objeto que devuelve el método `forRoot(...)` es casi idéntico a la configuración de `NgModule` .

El `forRoot(...)` acepta un objeto de configuración personalizado que el usuario puede proporcionar al importar el módulo.

```ts
imports: [ 
  ... 
  ConfigureableModule.forRoot({ url: 'http://localhost' }), 
  ... 
 ] 
```

La configuración se proporciona luego utilizando un `InjectionToken` personalizado llamado `CUSTOM_CONFIG_TOKEN` y se inyecta en el servicio `ConfigureableService` . El `ConfigureableModule` debe importarse solo una vez utilizando el `forRoot(...)` . Esto proporciona a `CUSTOM_CONFIG_TOKEN` la configuración personalizada. Todos los demás módulos deberían importar el Módulo `ConfigureableModule` sin el `forRoot(...)` .

#### Ejemplos de NgModule de Angular

Angular proporciona una variedad de módulos importable desde `@angular` . Dos de los módulos más comúnmente importados son `CommonModule` y `HttpClientModule` .

`CommonModule` es en realidad un subconjunto de `BrowserModule` . Ambos proporcionan acceso a las directivas estructurales `*ngIf` y `*ngFor` . `BrowserModule` incluye una instalación específica de la plataforma para el navegador web. `CommonModule` omite esta instalación. El `BrowserModule` debe importar en la raíz NgModule de una aplicación web. `CommonModule` proporciona `*ngIf` y `*ngFor` para módulos de funciones que no requieren una instalación de plataforma.

`HttpClientModule` proporciona el servicio `HttpClient` . Recuerde que los servicios van en la matriz de proveedores de los metadatos de `@NgModule` . No son declarables. Durante la compilación, cada NgModule se consolida en un solo módulo. Los servicios no son encapsulados a diferencia de declarables. Todos son instanciables a través del inyector raíz ubicado junto al NgModule fusionado.

De vuelta al punto. Como cualquier otro servicio, `HttpClient` crea una instancia en una clase a través de su constructor a través de inyección de dependencia (DI). Usando DI, el inyector raíz inyecta una instancia de `HttpClient` en el constructor. Este servicio permite a los desarrolladores realizar solicitudes HTTP con la implementación del servicio.

La implementación de `HttpClient` incluye en la matriz de proveedores `HttpClientModule` . Mientras la raíz NgModule importe `HttpClientModule` , `HttpClient` creará una instancia desde el alcance de la raíz como se espera.

#### Conclusión

Es probable que ya hayas aprovechado los módulos de ng de Angular. Angular hace que sea muy fácil lanzar un módulo en la matriz de importaciones de NgModule de la raíz. Las utilidades a menudo se exportan desde los metadatos del módulo importado. De ahí que sus utilidades se vuelvan repentinamente disponibles al importarlas dentro del NgModule raíz.

NgModules trabaja en estrecha colaboración con los módulos de JavaScript sin formato. Uno proporciona el token mientras que uno los usa para la configuración. Su trabajo en equipo da como resultado un sistema robusto y modular exclusivo del marco angular. Proporciona una nueva capa de organización sobre todos los demás esquemas, excluyendo la aplicación.

Esperemos que este artículo promueva su comprensión de NgModules. Angular puede aprovechar este sistema aún más para algunos de los casos de uso más exóticos. Este artículo cubre los conceptos básicos para que pueda obtener más información utilizando los enlaces a continuación.

## Fuentes

*   [Equipo angular. "NgModules". _Google_ . Accedido el 6 de junio de 2018.](https://angular.io/guide/ngmodules)
*   [Koretskyi, Maxim. “Evitando confusiones comunes con módulos en Angular”. _Angular en profundidad_ , 10 de agosto de 2017. Consultado el 6 de junio de 2018.](https://blog.angularindepth.com/avoiding-common-confusions-with-modules-in-angular-ada070e6891f)

## Recursos

*   [Documentacion angular](https://angular.io/guide)
*   [Angular en profundidad](https://blog.angularindepth.com)
*   [Repositorio Angular de GitHub](https://github.com/angular/angular)
*   [CLI angular](https://cli.angular.io)