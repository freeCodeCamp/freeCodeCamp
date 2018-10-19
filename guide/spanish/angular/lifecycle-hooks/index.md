---
title: Lifecycle Hooks
localeTitle: Ganchos de ciclo de vida
---
# Ganchos de ciclo de vida

#### Motivación

Los marcos front-end modernos mueven la aplicación de estado a estado. Los datos alimentan estas actualizaciones. Estas tecnologías interactúan con los datos que a su vez hacen la transición al estado. Con cada cambio de estado, hay muchos momentos específicos donde ciertos activos están disponibles.

En una instancia, la plantilla podría estar lista, en otra información habrá terminado de cargarse. La codificación para cada instancia requiere un medio de detección. Los ganchos del ciclo de vida responden a esta necesidad. Los frameworks front-end modernos se empaquetan con una variedad de ganchos de ciclo de vida. Angular no es una excepción

#### Los ganchos del ciclo de vida explicados

Los ganchos del ciclo de vida son métodos cronometrados. Se diferencian en cuándo y por qué se ejecutan. La detección de cambios dispara estos métodos. Se ejecutan en función de las condiciones del ciclo actual. Ejecuciones angulares cambian la detección constantemente en sus datos. Los ganchos de ciclo de vida ayudan a gestionar sus efectos.

Un aspecto importante de estos ganchos es su orden de ejecución. Nunca se desvía. Se ejecutan basándose en una serie predecible de eventos de carga producidos a partir de un ciclo de detección. Esto los hace predecibles. Algunos activos solo están disponibles después de que se ejecuta un determinado gancho. Por supuesto, un gancho solo se ejecuta bajo ciertas condiciones establecidas en el ciclo de detección de cambio actual.

Este artículo presenta los ganchos del ciclo de vida en orden de su ejecución (si todos se ejecutan). Ciertas condiciones merecen la activación de un gancho. Hay algunos que solo se ejecutan una vez después de la inicialización del componente.

Todos los métodos de ciclo de vida están disponibles en `@angular/core` . Aunque no es obligatorio, Angular [recomienda implementar cada gancho](https://angular.io/guide/lifecycle-hooks#interfaces-are-optional-technically) . Esta práctica conduce a mejores mensajes de error con respecto al componente.

### En orden de su ejecución ...

#### ngOnChanges

`ngOnChanges` desencadena tras la modificación de los miembros de la clase enlazada de `@Input` . Los datos vinculados por el decorador `@Input()` provienen de una fuente externa. Cuando la fuente externa altera esos datos de manera detectable, pasa nuevamente a través de la propiedad `@Input` .

Con esta actualización, `ngOnChanges` se dispara inmediatamente. También se dispara en la inicialización de los datos de entrada. El gancho recibe un parámetro opcional de tipo `SimpleChanges` . Este valor contiene información sobre las propiedades de límite de entrada modificadas.

```typescript
import { Component, Input, OnChanges } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-child', 
  template: ` 
  <h3>Child Component</h3> 
  <p>TICKS: {{ lifecycleTicks }}</p> 
  <p>DATA: {{ data }}</p> 
  ` 
 }) 
 export class ChildComponent implements OnChanges { 
  @Input() data: string; 
  lifecycleTicks: number = 0; 
 
  ngOnChanges() { 
    this.lifecycleTicks++; 
  } 
 } 
 
 @Component({ 
  selector: 'app-parent', 
  template: ` 
  <h1>ngOnChanges Example</h1> 
  <app-child [data]="arbitraryData"></app-child> 
  ` 
 }) 
 export class ParentComponent { 
  arbitraryData: string = 'initial'; 
 
  constructor() { 
    setTimeout(() => { 
      this.arbitraryData = 'final'; 
    }, 5000); 
  } 
 } 
```

**Resumen:** ParentComponent enlaza los datos de entrada al ChildComponent. El componente recibe estos datos a través de su propiedad `@Input` . `ngOnChanges` incendios. Después de cinco segundos, el `setTimeout` llamada. ParentComponent muta la fuente de datos de la propiedad enlazada por entrada de ChildComponent. Los nuevos datos fluyen a través de la propiedad de entrada. `ngOnChanges` dispara una vez más.

#### ngOnInit

`ngOnInit` una vez que se inicializan las propiedades de `@Input` de entrada ( `@Input` ) de un componente. El siguiente ejemplo se verá similar al anterior. El gancho no se dispara cuando ChildComponent recibe los datos de entrada. Más bien, se dispara justo después de que los datos se representen en la plantilla de ChildComponent.

```typescript
import { Component, Input, OnInit } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-child', 
  template: ` 
  <h3>Child Component</h3> 
  <p>TICKS: {{ lifecycleTicks }}</p> 
  <p>DATA: {{ data }}</p> 
  ` 
 }) 
 export class ChildComponent implements OnInit { 
  @Input() data: string; 
  lifecycleTicks: number = 0; 
 
  ngOnInit() { 
    this.lifecycleTicks++; 
  } 
 } 
 
 @Component({ 
  selector: 'app-parent', 
  template: ` 
  <h1>ngOnInit Example</h1> 
  <app-child [data]="arbitraryData"></app-child> 
  ` 
 }) 
 export class ParentComponent { 
  arbitraryData: string = 'initial'; 
 
  constructor() { 
    setTimeout(() => { 
      this.arbitraryData = 'final'; 
    }, 5000); 
  } 
 } 
```

**Resumen:** ParentComponent enlaza los datos de entrada al ChildComponent. ChildComponent recibe estos datos a través de su propiedad `@Input` . Los datos se representan en la plantilla. `ngOnInit` dispara. Después de cinco segundos, el `setTimeout` llamada. ParentComponent muta la fuente de datos de la propiedad enlazada por entrada de ChildComponent. ngOnInit **NO FUEGO** .

`ngOnInit` es un gancho de una vez y hecho. La inicialización es su única preocupación.

#### ngDoCheck

`ngDoCheck` con cada ciclo de detección de cambios. Las corridas angulares cambian la detección frecuentemente. Realizar cualquier acción hará que se active. `ngDoCheck` dispara con estos ciclos. Úsalo con precaución. Puede crear problemas de rendimiento cuando se implementa incorrectamente.

`ngDoCheck` permite a los desarrolladores verificar sus datos manualmente. Pueden desencadenar una nueva fecha de aplicación condicionalmente. Junto con `ChangeDetectorRef` , los desarrolladores pueden crear sus propios controles para la detección de cambios.

```typescript
import { Component, DoCheck, ChangeDetectorRef } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-example', 
  template: ` 
  <h1>ngDoCheck Example</h1> 
  <p>DATA: {{ data[data.length - 1] }}</p> 
  ` 
 }) 
 export class ExampleComponent implements DoCheck { 
  lifecycleTicks: number = 0; 
  oldTheData: string; 
  data: string[] = ['initial']; 
 
  constructor(private changeDetector: ChangeDetectorRef) { 
    this.changeDetector.detach(); // lets the class perform its own change detection 
 
    setTimeout(() => { 
      this.oldTheData = 'final'; // intentional error 
      this.data.push('intermediate'); 
    }, 3000); 
 
    setTimeout(() => { 
      this.data.push('final'); 
      this.changeDetector.markForCheck(); 
    }, 6000); 
  } 
 
  ngDoCheck() { 
    console.log(++this.lifecycleTicks); 
 
    if (this.data[this.data.length - 1] !== this.oldTheData) { 
      this.changeDetector.detectChanges(); 
    } 
  } 
 } 
```

Preste atención a la consola frente a la pantalla. Los datos avanzan hasta "intermedio" antes de la congelación. Se producen tres rondas de detección de cambios durante este período, como se indica en la consola. Se produce una ronda más de detección de cambios a medida que 'final' se `this.data` hasta el final de `this.data` . Entonces ocurre una última ronda de detección de cambios. La evaluación de la sentencia if determina que no es necesario actualizar la vista.

**Resumen: la** clase se crea una instancia después de dos rondas de detección de cambios. El constructor de la clase inicia `setTimeout` dos veces. Después de tres segundos, el primer `setTimeout` activa la detección de cambios. `ngDoCheck` marca la pantalla para una actualización. Tres segundos después, el segundo `setTimeout` activa la detección de cambios. No se necesitan actualizaciones de visualización según la evaluación de `ngDoCheck` .

##### Advertencia

Antes de continuar, aprenda la diferencia entre el contenido DOM y la vista DOM (DOM significa Document Object Model).

El contenido DOM define el código interno de los elementos directivos. A la inversa, el DOM de vista es una plantilla de componente que excluye cualquier plantilla HTML anidada dentro de una directiva. Para una mejor comprensión, consulte [esta entrada de blog](http://blog.mgechev.com/2016/01/23/angular2-viewchildren-contentchildren-difference-viewproviders) .

#### ngAfterContentInit

`ngAfterContentInit` después de que el DOM del contenido del componente se inicializa (se carga por primera vez). La espera en las consultas de `@ContentChild(ren)` es el caso de uso principal del gancho.

`@ContentChild(ren)` producen referencias de elementos para el contenido DOM. Como tales, no están disponibles hasta después de que se cargue el contenido del DOM. De ahí que se `ngAfterContentInit` y su contraparte `ngAfterContentChecked` .

```typescript
import { Component, ContentChild, AfterContentInit, ElementRef, Renderer2 } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-c', 
  template: ` 
  <p>I am C.</p> 
  <p>Hello World!</p> 
  ` 
 }) 
 export class CComponent { } 
 
 @Component({ 
  selector: 'app-b', 
  template: ` 
  <p>I am B.</p> 
  <ng-content></ng-content> 
  ` 
 }) 
 export class BComponent implements AfterContentInit { 
  @ContentChild("BHeader", { read: ElementRef }) hRef: ElementRef; 
  @ContentChild(CComponent, { read: ElementRef }) cRef: ElementRef; 
 
  constructor(private renderer: Renderer2) { } 
 
  ngAfterContentInit() { 
    this.renderer.setStyle(this.hRef.nativeElement, 'background-color', 'yellow') 
 
    this.renderer.setStyle(this.cRef.nativeElement.children.item(0), 'background-color', 'pink'); 
    this.renderer.setStyle(this.cRef.nativeElement.children.item(1), 'background-color', 'red'); 
  } 
 } 
 
 @Component({ 
  selector: 'app-a', 
  template: ` 
  <h1>ngAfterContentInit Example</h1> 
  <p>I am A.</p> 
  <app-b> 
    <h3 #BHeader>BComponent Content DOM</h3> 
    <app-c></app-c> 
  </app-b> 
  ` 
 }) 
 export class AComponent { } 
```

Los resultados de la consulta `@ContentChild` están disponibles en `ngAfterContentInit` . `Renderer2` actualiza el contenido DOM de BComponent que contiene una etiqueta `h3` y CComponent. Este es un ejemplo común de [proyección](https://alligator.io/angular/content-projection-angular) de [contenido](https://alligator.io/angular/content-projection-angular) .

**Resumen: El** renderizado comienza con AComponent. Para que termine, AComponent debe renderizar BComponent. BComponent proyecta contenido anidado en su elemento a través del elemento `<ng-content></ng-content>` . CComponent es parte del contenido proyectado. El contenido proyectado termina de renderizarse. `ngAfterContentInit` dispara. BComponent termina de renderizarse. AComponent termina de renderizar. `ngAfterContentInit` no se disparará de nuevo.

#### ngAfterContentChecked

`ngAfterContentChecked` después de cada ciclo de detección de cambios orientado al contenido DOM. Esto permite a los desarrolladores facilitar cómo reacciona el contenido DOM para cambiar la detección. `ngAfterContentChecked` puede dispararse con frecuencia y causar problemas de rendimiento si se implementa de manera deficiente.

`ngAfterContentChecked` durante las etapas de inicialización de un componente. Viene justo después de `ngAfterContentInit` .

```typescript
import { Component, ContentChild, AfterContentChecked, ElementRef, Renderer2 } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-c', 
  template: ` 
  <p>I am C.</p> 
  <p>Hello World!</p> 
  ` 
 }) 
 export class CComponent { } 
 
 @Component({ 
  selector: 'app-b', 
  template: ` 
  <p>I am B.</p> 
  <button (click)="$event">CLICK</button> 
  <ng-content></ng-content> 
  ` 
 }) 
 export class BComponent implements AfterContentChecked { 
  @ContentChild("BHeader", { read: ElementRef }) hRef: ElementRef; 
  @ContentChild(CComponent, { read: ElementRef }) cRef: ElementRef; 
 
  constructor(private renderer: Renderer2) { } 
 
  randomRGB(): string { 
    return `rgb(${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)})`; 
  } 
 
  ngAfterContentChecked() { 
    this.renderer.setStyle(this.hRef.nativeElement, 'background-color', this.randomRGB()); 
    this.renderer.setStyle(this.cRef.nativeElement.children.item(0), 'background-color', this.randomRGB()); 
    this.renderer.setStyle(this.cRef.nativeElement.children.item(1), 'background-color', this.randomRGB()); 
  } 
 } 
 
 @Component({ 
  selector: 'app-a', 
  template: ` 
  <h1>ngAfterContentChecked Example</h1> 
  <p>I am A.</p> 
  <app-b> 
    <h3 #BHeader>BComponent Content DOM</h3> 
    <app-c></app-c> 
  </app-b> 
  ` 
 }) 
 export class AComponent { } 
```

Esto apenas difiere de `ngAfterContentInit` . Se agregó un simple `<button></button>` a BComponent. Al hacer clic en él se produce un ciclo de detección de cambios Esto activa el gancho según lo indicado por la aleatorización de `background-color` de `background-color` .

**Resumen: El** renderizado comienza con AComponent. Para que termine, AComponent debe renderizar BComponent. BComponent proyecta contenido anidado en su elemento a través del elemento `<ng-content></ng-content>` . CComponent es parte del contenido proyectado. El contenido proyectado termina de renderizarse. `ngAfterContentChecked` incendios BComponent termina de renderizarse. AComponent termina de renderizar. `ngAfterContentChecked` puede dispararse de nuevo a través de la detección de cambios.

#### ngAfterViewInit

`ngAfterViewInit` una vez después de que la vista DOM finaliza la inicialización. La vista siempre se carga justo después del contenido. `ngAfterViewInit` espera a que se `@ViewChild(ren)` consultas de `@ViewChild(ren)` . Estos elementos se consultan desde la misma vista del componente.

En el siguiente ejemplo, se consulta el encabezado `h3` de BComponent. `ngAfterViewInit` ejecuta tan pronto como los resultados de la consulta estén disponibles.

```typescript
import { Component, ViewChild, AfterViewInit, ElementRef, Renderer2 } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-c', 
  template: ` 
  <p>I am C.</p> 
  <p>Hello World!</p> 
  ` 
 }) 
 export class CComponent { } 
 
 @Component({ 
  selector: 'app-b', 
  template: ` 
  <p #BStatement>I am B.</p> 
  <ng-content></ng-content> 
  ` 
 }) 
 export class BComponent implements AfterViewInit { 
  @ViewChild("BStatement", { read: ElementRef }) pStmt: ElementRef; 
 
  constructor(private renderer: Renderer2) { } 
 
  ngAfterViewInit() { 
    this.renderer.setStyle(this.pStmt.nativeElement, 'background-color', 'yellow'); 
  } 
 } 
 
 @Component({ 
  selector: 'app-a', 
  template: ` 
  <h1>ngAfterViewInit Example</h1> 
  <p>I am A.</p> 
  <app-b> 
    <h3>BComponent Content DOM</h3> 
    <app-c></app-c> 
  </app-b> 
  ` 
 }) 
 export class AComponent { } 
```

`Renderer2` cambia el color de fondo del encabezado de BComponent. Esto indica que el elemento de vista fue consultado con éxito gracias a `ngAfterViewInit` .

**Resumen: El** renderizado comienza con AComponent. Para que termine, AComponent debe renderizar BComponent. BComponent proyecta contenido anidado en su elemento a través del elemento `<ng-content></ng-content>` . CComponent es parte del contenido proyectado. El contenido proyectado termina de renderizarse. BComponent termina de renderizarse. `ngAfterViewInit` dispara. AComponent termina de renderizar. `ngAfterViewInit` no se disparará de nuevo.

#### ngAfterViewChecked

`ngAfterViewChecked` después de cualquier ciclo de detección de cambios orientado a la vista del componente. El gancho `ngAfterViewChecked` permite a los desarrolladores facilitar cómo la detección de cambios afecta la vista DOM.

```typescript
import { Component, ViewChild, AfterViewChecked, ElementRef, Renderer2 } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-c', 
  template: ` 
  <p>I am C.</p> 
  <p>Hello World!</p> 
  ` 
 }) 
 export class CComponent { } 
 
 @Component({ 
  selector: 'app-b', 
  template: ` 
  <p #BStatement>I am B.</p> 
  <button (click)="$event">CLICK</button> 
  <ng-content></ng-content> 
  ` 
 }) 
 export class BComponent implements AfterViewChecked { 
  @ViewChild("BStatement", { read: ElementRef }) pStmt: ElementRef; 
 
  constructor(private renderer: Renderer2) { } 
 
  randomRGB(): string { 
    return `rgb(${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)})`; 
  } 
 
  ngAfterViewChecked() { 
    this.renderer.setStyle(this.pStmt.nativeElement, 'background-color', this.randomRGB()); 
  } 
 } 
 
 @Component({ 
  selector: 'app-a', 
  template: ` 
  <h1>ngAfterViewChecked Example</h1> 
  <p>I am A.</p> 
  <app-b> 
    <h3>BComponent Content DOM</h3> 
    <app-c></app-c> 
  </app-b> 
  ` 
 }) 
 export class AComponent { } 
```

**Resumen: El** renderizado comienza con AComponent. Para que termine, AComponent debe renderizar BComponent. BComponent proyecta contenido anidado en su elemento a través del elemento `<ng-content></ng-content>` . CComponent es parte del contenido proyectado. El contenido proyectado termina de renderizarse. BComponent termina de renderizarse. `ngAfterViewChecked` incendios AComponent termina de renderizar. `ngAfterViewChecked` puede dispararse de nuevo a través de la detección de cambios.

Al hacer clic en el elemento `<button></button>` se inicia una ronda de detección de cambios. `ngAfterContentChecked` dispara y `ngAfterContentChecked` azar el `background-color` de `background-color` de los elementos consultados con cada botón.

#### ngOnDestroy

`ngOnDestroy` cuando se `ngOnDestroy` un componente de la vista y el DOM posterior. Este gancho brinda la oportunidad de limpiar los cabos sueltos antes de la eliminación de un componente.

```typescript
import { Directive, Component, OnDestroy } from '@angular/core'; 
 
 @Directive({ 
  selector: '[appDestroyListener]' 
 }) 
 export class DestroyListenerDirective implements OnDestroy { 
  ngOnDestroy() { 
    console.log("Goodbye World!"); 
  } 
 } 
 
 @Component({ 
  selector: 'app-example', 
  template: ` 
  <h1>ngOnDestroy Example</h1> 
  <button (click)="toggleDestroy()">TOGGLE DESTROY</button> 
  <p appDestroyListener *ngIf="destroy">I can be destroyed!</p> 
  ` 
 }) 
 export class ExampleComponent { 
  destroy: boolean = true; 
 
  toggleDestroy() { 
    this.destroy = !this.destroy; 
  } 
 } 
```

**Resumen:** Se hace clic en el botón. El miembro `destroy` de ExampleComponent alterna falso. La directiva estructural `*ngIf` evalúa como falso. `ngOnDestroy` incendios. `*ngIf` elimina su host `<p></p>` . Este proceso se repite varias veces haciendo clic en el botón para alternar `destroy` a falso.

#### Conclusión

Recuerde que ciertas condiciones deben cumplirse para cada gancho. Siempre se ejecutarán en orden unos de otros independientemente. Esto hace que los ganchos sean lo suficientemente predecibles para trabajar, incluso si algunos no se ejecutan.

Con los ganchos del ciclo de vida, cronometrar la ejecución de una clase es fácil. Permiten a los desarrolladores realizar un seguimiento de dónde se produce la detección de cambios y cómo debe reaccionar la aplicación. Se detienen para el código que requiere dependencias basadas en la carga disponibles solo después de algún tiempo.

El ciclo de vida de los componentes caracteriza los marcos frontales modernos. Angular establece su ciclo de vida proporcionando los ganchos mencionados anteriormente.

## Fuentes

*   [Equipo angular. "Ganchos de ciclo de vida". _Google_ . Consultado el 2 de junio de 2018](https://angular.io/guide/lifecycle-hooks)
*   [Gechev, Minko. “ViewChildren y ContentChildren in Angular”. Consultado el 2 de junio de 2018](http://blog.mgechev.com/2016/01/23/angular2-viewchildren-contentchildren-difference-viewproviders)

## Recursos

*   [Documentacion angular](https://angular.io/docs)
*   [Repositorio Angular de GitHub](https://github.com/angular/angular)
*   [Ganchos de ciclo de vida en profundidad](https://angular.io/guide/lifecycle-hooks)