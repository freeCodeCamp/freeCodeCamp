---
title: Views
localeTitle: Puntos de vista
---
# Puntos de vista

#### Motivación

Las vistas ofrecen una capa de abstracción necesaria. Mantienen Angular independiente de las utilidades específicas de la plataforma. Como tecnología multiplataforma, Angular utiliza sus vistas para conectarse con la plataforma.

Para cada elemento en la plantilla HTML de Angular, hay una vista correspondiente. Angular recomienda interactuar con las plataformas a través de estas vistas. Mientras que la manipulación directa es todavía posible, Angular advierte contra ella. Angular ofrece su propia interfaz de programación de aplicaciones (API) para reemplazar las manipulaciones nativas.

Eludir vistas para la API específica de la plataforma tiene sus consecuencias. Al desarrollar Angular en un navegador web, existen elementos en dos lugares: el DOM y la vista. El jugar solo con el DOM no afecta la vista.

Dado que Angular no interactúa con la plataforma, esto crea una discontinuidad. Las vistas deben reflejar la plataforma uno a uno. De lo contrario, Angular desperdicia recursos administrando elementos que no coinciden. Esto es terrible en el caso de elementos eliminados.

Este tipo de discrepancias hace que las vistas parezcan innecesarias. Nunca olvides que Angular es una plataforma de desarrollo universal por encima de todo. Las vistas son una abstracción necesaria para este fin.

Al adherirse a las vistas, las aplicaciones de Angular funcionarán en todas las plataformas de desarrollo compatibles. Las plataformas incluyen la web, Android y Apple iOS.

#### Nota

De aquí en adelante, este artículo supone un entorno de navegador web. No dude en reemplazar mentalmente el DOM con algo más aplicable a su plataforma preferida.

#### ¿Qué son las vistas?

Las vistas son casi como su propio DOM virtual. Cada vista contiene una referencia a una sección correspondiente del DOM. Dentro de una vista hay nodos que reflejan lo que hay en esta sección. Angular asigna un nodo de vista por elemento DOM. Cada nodo contiene una referencia a un elemento coincidente.

Cuando Angular comprueba los cambios, comprueba las vistas. Angular evita el DOM bajo el capó. Las vistas hacen referencia al DOM en su nombre. Existen otros mecanismos para garantizar que los cambios de vista se representen en el DOM. Por el contrario, los cambios en el DOM no afectan a las vistas.

Nuevamente, las vistas son comunes en todas las plataformas de desarrollo, además del DOM. Incluso si se desarrolla para una plataforma, las vistas aún se consideran las mejores prácticas. Garantizan que Angular tiene una correcta interpretación del DOM.

Es posible que las vistas no existan en bibliotecas de terceros. La manipulación directa de DOM es una trampilla de escape para este tipo de escenario. Por supuesto, no espere que la aplicación funcione multiplataforma.

#### Tipos de vistas

Hay dos tipos principales de vistas: incrustadas y de host.

También existen contenedores de vista. Mantienen vistas integradas y de host y, a menudo, se las denomina "vistas" simples.

Cada clase `@Component` registra un contenedor de vista (vista) con Angular. Los nuevos componentes generan un selector personalizado dirigido a un determinado elemento DOM. La vista se adjunta a ese elemento donde quiera que aparezca. Angular ahora sabe que el componente existe mirando el modelo de vista.

Las vistas de host se adjuntan a componentes creados dinámicamente con fábricas. Las fábricas proporcionan un plano para la creación de instancias de vista. De esa manera, la aplicación puede crear una instancia de la vista de host del componente durante el tiempo de ejecución. Una vista de host se adjunta al envoltorio de un componente por su instanciación. Esta vista almacena datos que describen las capacidades de los componentes convencionales.

`<ng-template></ng-template>` es similar al elemento HTML5 `<template></template>` . La `ng-template` de Angular funciona con vistas incrustadas. Estas vistas no se adjuntan a los elementos DOM a diferencia de las vistas de host. Son idénticas a las vistas de host, ya que ambos tipos existen dentro de los contenedores de vista.

Tenga en cuenta que `ng-template` no es un elemento DOM. Se comenta más tarde dejando solo los nodos de vista incrustados.

La diferencia depende de los datos de entrada; Las vistas incrustadas no almacenan datos de componentes. Almacenan una serie de elementos como nodos que conforman su plantilla. La plantilla constituye todo el interiorHTML de `ng-template` . Cada elemento dentro de la vista incrustada es su propio nodo de vista separado.

#### Vistas de host y contenedores

Las vistas de _host alojan_ componentes dinámicos. Ver contenedores (vistas) se adjuntan automáticamente a los elementos que ya están en la plantilla. Las vistas pueden adjuntarse a cualquier elemento más allá de lo que es único para las clases de componentes.

Piense en el método tradicional de generación de componentes. Comienza creando una clase, decorándola con `@Component` y rellenando metadatos. Este enfoque se produce para cualquier elemento componente predefinido de la plantilla.

Intente usar el comando de la interfaz de línea de comando angular (CLI): `ng generate component [name-of-component]` . Se obtiene lo siguiente.

```typescript
import { Component, OnInit } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-example', 
  templateUrl: './example.component.html', 
  styleUrls: ['./example.component.css'] 
 }) 
 export class ExampleComponent implements OnInit { 
  constructor() { } 
 
  ngOnInit() { } 
 } 
```

Esto crea el componente con el `app-example` selector. Esto adjunta un contenedor de vista a `<app-example></app-example>` en la plantilla. Si esta fuera la raíz de la aplicación, su vista encapsularía todas las demás vistas. La vista raíz marca el comienzo de la aplicación desde la perspectiva de Angular.

Crear componentes dinámicamente y registrarlos en el modelo de vista angular requiere algunos pasos adicionales. Las directivas estructurales ayudan a administrar el contenido dinámico ( `*ngIf, *ngFor, and *ngSwitch…` ). Sin embargo, las directivas no se escalan a aplicaciones más grandes. Demasiadas directivas estructurales complica la plantilla.

Aquí es donde la creación de instancias de componentes de la lógica de clase existente resulta útil. Estos componentes necesitan crear una vista de host que se pueda insertar en el modelo de vista. Las vistas de host contienen datos de componentes para que Angular reconozca su propósito estructural.

##### Vistas de host continuadas

Cada componente tiene una definición de clase. Sin embargo, JavaScript no admite clases. Las clases son de azúcar sintáctica. Producen funciones que contienen fábricas de componentes en su lugar.

Las fábricas actúan como planos para las vistas de host. Construyen vistas para interactuar con Angular en nombre de sus componentes. Las vistas de host se adjuntan a los elementos DOM. Técnicamente, cualquier elemento está bien, pero el objetivo más común es `<ng-component></ng-component>` .

Primero debe existir un contenedor de vista (vista) para mantener vistas. `<ng-container></ng-container>` es un excelente lugar para adjuntar un contenedor de vista. Los contenedores de vista son el mismo tipo de vistas que también se aplican a los elementos de clase de plantilla.

Algunos ayudantes y referencias de `@angular/core` proporcionan las otras utilidades necesarias. El siguiente ejemplo lo pone todo junto.

```typescript
// another.component.ts 
 
 import { Component } from '@angular/core'; 
 
 @Component({ 
  template: ` 
  <h1>Another Component Content</h1> 
  <h3>Dynamically Generated!</h3> 
  ` 
 }) 
 export class AnotherComponent { } 
```

```typescript
// example.component.ts 
 
 import { AfterViewInit, Component, ViewChild, 
 ViewContainerRef, ComponentFactoryResolver } from '@angular/core'; 
 import { AnotherComponent } from './another.component'; 
 
 @Component({ 
  selector: 'app-example', 
  template: ` 
  <h1>Application Content</h1> 
  <ng-container #container></ng-container> 
  <h3>End of Application</h3> 
  `, 
  entryComponents: [ AnotherComponent ] 
 }) 
 export class ExampleComponent implements AfterViewInit { 
  @ViewChild("container", { read: ViewContainerRef }) ctr: ViewContainerRef; 
 
  constructor(private resolve: ComponentFactoryResolver) { } 
 
  ngAfterViewInit() { 
    const factory = this.resolve.resolveComponentFactory(AnotherComponent); 
    this.ctr.createComponent(factory); 
  } 
 } 
```

Supongamos que AnotherComponent y ExampleComponent están ambos declarados bajo el mismo módulo. AnotherComponent es un componente de clase simple agregado dinámicamente en la vista de ExampleComponent. Los metadatos de `entryComponents` de `entryComponents` deben contener AnotherComponent para [bootstrapping](https://angular.io/guide/bootstrapping) .

Si bien ExampleComponent forma parte de la plantilla, AnotherComponent permanece desconectado. Se representa dinámicamente en la plantilla de ExampleComponent.

Hay dos contenedores de vista presentes: `<app-example></app-example>` y `<ng-container></ng-container>` . La vista de host para este ejemplo se insertará en `ng-container` .

El `AfterViewInit` ciclo de vida de `AfterViewInit` después de que se `@ViewChild` consultas de `@ViewChild` . Usando la _variable de referencia de_ la _plantilla_ `#container` , `@ViewChild` referencia a `ng-container` como `ctr` .

`ViewContainerRef` es el tipo de referencia para los contenedores de vista (vistas). `ViewContainerRef` referencia a una vista que admite la inserción de otras vistas. `ViewContainerRef` contiene más métodos para administrar sus vistas contenidas.

A través de la inyección de dependencia, el constructor crea una instancia del servicio `ComponentFactoryResolver` de Angular. Este servicio extrae la función de fábrica (modelo de vista de host) de AnotherComponent.

El único argumento de `createComponent` requiere una fábrica. La función `createComponent` deriva de `ViewContainerRef` . Crea una instancia de AnotherComponent en una vista de host derivada de la fábrica del componente.

La vista de host se inserta en el contenedor de vista. `<ng-component></ng-component>` envuelve el componente dentro del contenedor de la vista. Se ha adjuntado la vista de host antes mencionada. `ng-component` es la conexión de la vista de host con el DOM.

Hay otras formas de crear dinámicamente una vista de host desde un componente. Otras formas a menudo se [centran en la optimización](https://blog.angularindepth.com/working-with-dom-in-angular-unexpected-consequences-and-optimization-techniques-682ac09f6866) .

El `ViewContainerRef` tiene una API potente. Puede administrar cualquier número de vistas, ya sea host o incrustado dentro de su vista. La API incluye operaciones de visualización como insertar, mover y eliminar. Esto le permite manipular el DOM a través del modelo de vista de Angular. Esta es la mejor práctica para que Angular y el DOM coincidan entre sí.

#### Vistas incrustadas

Nota: las vistas incrustadas se adjuntan a otras vistas sin entrada adicional. Las vistas de host se adjuntan a un elemento DOM con datos de entrada de su vista de host que lo describen como un componente.

Las directivas estructurales crean una [`ng-template` rodea una parte del contenido HTML](https://angular.io/guide/structural-directives#the-asterisk--prefix) . El elemento host de la directiva tiene un contenedor de vista adjunto. Esto lo hace para que el contenido pueda procesarse condicionalmente en su diseño previsto.

La `ng-template` contiene nodos de vista incrustados que representan cada elemento dentro de su innerHTML. `ng-template` es de ninguna manera un elemento DOM. Se comenta a sí mismo. Las etiquetas definen la extensión de su vista incrustada.

#### Vistas incrustadas continuadas

La creación de una vista incrustada no requiere recursos externos más allá de su propia referencia. La consulta `@ViewChild` puede recuperar eso.

Con la referencia de la plantilla, llamar a `createEmbeddedView` desde allí hace el truco. El InternalHTML de la referencia se convierte en su propia instancia de vista incrustada.

En el siguiente ejemplo, `<ng-container></ng-container>` es un contenedor de vista. `ng-container` se comenta durante la compilación al igual que `ng-template` . Por lo tanto, proporciona una salida para insertar la vista incrustada mientras mantiene el DOM magro.

La plantilla de vista incrustada se inserta en la ubicación de diseño de `ng-container` . Esta vista recién insertada no tiene encapsulación de vista adicional además del contenedor de vista. Recuerde en qué se diferencia de las vistas de host (las vistas de host se adjuntan a su contenedor de elementos `ng-component` )

```typescript
import { Component, AfterViewInit, ViewChild, 
 ViewContainerRef, TemplateRef } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-example', 
  template: ` 
  <h1>Application Content</h1> 
  <ng-container #container></ng-container> <!-- embed view here --> 
  <h3>End of Application</h3> 
 
  <ng-template #template> 
    <h1>Template Content</h1> 
    <h3>Dynamically Generated!</h3> 
  </ng-template> 
  ` 
 }) 
 export class ExampleComponent implements AfterViewInit { 
  @ViewChild("template", { read: TemplateRef }) tpl: TemplateRef<any>; 
  @ViewChild("container", { read: ViewContainerRef }) ctr: ViewContainerRef; 
 
  constructor() { } 
 
  ngAfterViewInit() { 
    const view =  this.tpl.createEmbeddedView(null); 
    this.ctr.insert(view); 
  } 
 } 
```

`@ViewChild` para la _variable de referencia_ de la _plantilla_ `#template` . Esto proporciona una referencia de plantilla de tipo `TemplateRef` . `TemplateRef` tiene la función `createEmbeddedView` . Crea una instancia de la plantilla como una vista incrustada.

El único argumento de `createEmbeddedView` es para el contexto. Si quisiera pasar metadatos adicionales, podría hacerlo aquí como un objeto. Los campos deben coincidir con los atributos de `ng-template` ( `let-[context-field-key-name]=“value”` ). Pasar `null` indica que no se necesitan metadatos adicionales.

Una segunda consulta de `@ViewChild` proporciona una referencia a `ng-container` como `ViewContainerRef` . Las vistas incrustadas solo se adjuntan a otras vistas, nunca al DOM. `ViewContainerRef` referencia a la vista que toma en la vista incrustada.

Una vista incrustada también se puede insertar en la vista de componente de `<app-example></app-example>` . Este enfoque posiciona la vista al final de la vista de ExampleComponent. En este ejemplo, sin embargo, queremos que el contenido se muestre en el medio donde se encuentra `ng-container` .

La función de `insert` `ViewContainerRef` _inserta_ la vista incrustada en el `ng-container` . El contenido de la vista se muestra en la ubicación deseada justo en el centro de la vista de ExampleComponent.

#### Conclusión

No se recomienda manipular el DOM con métodos específicos de la plataforma. Crear y administrar un conjunto ajustado de vistas mantiene Angular y el DOM en la misma página. La actualización de las vistas informa a Angular del estado actual del DOM. Las actualizaciones de las vistas también se transfieren a lo que muestra el DOM.

Angular proporciona una API flexible para la interacción visual. El desarrollo de aplicaciones independientes de la plataforma es posible gracias a este nivel de abstracción. Por supuesto, la tentación de retroceder en las estrategias dependientes de la plataforma persiste. A menos que tenga una buena razón para no hacerlo, intente atenerse a las vistas que proporciona la API Angular. Esto dará resultados predecibles en todas las plataformas.

Echa un vistazo a los recursos a continuación también! Este artículo simplemente rasca la superficie. Las vistas tienen muchos otros casos de uso demasiado vastos para un artículo.

## Fuentes

*   [AngularInDepth.com. “Vista de componente, Vista de host, Vista incrustada”, # 40423772. 11 de julio de 2017. “¿Cuál es la diferencia entre una vista, una vista de host y una vista incrustada?”](https://stackoverflow.com/questions/40423772/what-is-the-difference-between-a-view-a-host-view-and-an-embedded-view)
    
*   [Equipo angular. “Directivas estructurales”. _Google_ . Consultado el 31 de mayo de 2018](https://angular.io/guide/structural-directives)
    
*   [Koretskyi, Maxim. "Exploración de técnicas de manipulación Angular DOM usando ViewContainerRef". _Angular en profundidad_ , 4 de marzo de 2017. Consultado el 30 de mayo de 2018.](https://blog.angularindepth.com/exploring-angular-dom-abstractions-80b3ebcfc02)
    
*   [Koretskyi, Maxim. “Implementando escenarios avanzados de manipulación de DOM”. _Youtube_ , subido por ng-conf, 19 de abril de 2018. Acceso 30 de mayo de 2018](https://www.youtube.com/watch?v=vz9cNCkaPsY)
    
*   [Koretskyi, Maxim. “Trabajando con DOM en Angular: consecuencias inesperadas y técnicas de optimización”. _Angular en profundidad_ , 3 de mayo de 2017. Consultado el 31 de mayo de 2018](https://blog.angularindepth.com/working-with-dom-in-angular-unexpected-consequences-and-optimization-techniques-682ac09f6866)
    

## Recursos

*   [Documentacion angular](https://angular.io/guide/pipes)
    
*   [Angular en profundidad](https://blog.angularindepth.com)
    
*   [ViewContainerRef](https://angular.io/api/core/ViewContainerRef)
    
*   [PlantillaRef](https://angular.io/api/core/TemplateRef)
    
*   [Repositorio Angular de GitHub](https://github.com/angular/angular)
    
*   [CLI angular](https://cli.angular.io)