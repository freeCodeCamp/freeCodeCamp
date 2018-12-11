---
title: Directives
localeTitle: Directivas
---
# Directivas

#### Motivación

Las directivas son fundamentales para la plantilla HTML de Angular. Los componentes son el ejemplo más significativo. Cada vista de componente se representa debajo de una vista de componente raíz. Esto puede resultar en un árbol de vistas que define una sola aplicación. Una vista constituye una clase ( `component.ts` ) y su plantilla ( `component.html` ).

Otras directivas, aunque no son tan críticas, proporcionan una flexibilidad muy necesaria. Una directiva colocada en un elemento tiene control completo sobre él. El uso de `<ng-template></ng-template>` permite la creación y eliminación dinámica de contenido HTML. Microsyntax ofrece a los desarrolladores la libertad de personalizar aún más el comportamiento de las directivas.

#### La directiva

Las directivas son elementos componentes y atributos creados y reconocidos por Angular. Angular asocia el elemento o atributo con su definición de clase correspondiente. `@Directive` o `@Component` decora estas clases. Ambos son indicativos de Angular que la clase realiza como una directiva.

Algunas directivas modifican el estilo del elemento host. Otras directivas muestran vistas o se insertan en las existentes como vistas incrustadas. En otras palabras, alteran el diseño HTML.

En cualquier caso, las directivas señalan el compilador angular. Marcan componentes para su modificación en función de la lógica de clase de la directiva.

#### Directiva de componentes

Las directivas de los componentes difieren fundamentalmente de los otros tipos de directivas. Por lo general, se les conoce simplemente como componentes. Forman su propia etiqueta HTML única. Para cada componente, hay una cierta cantidad de plantilla HTML. Esto es diferente a las otras dos directivas. Sus clases son lógicas puras que operan en lo que está predefinido en la plantilla HTML.

#### Creación de componentes

Cree un componente con `ng generate component [name-of-component]` ; reemplace `[name-of-component]` con un nombre preferible. El comando produce cuatro archivos diferentes que pertenecen a un componente.

El `component.css` y `component.spec.ts` están fuera del alcance de este artículo. El aspecto _directivo_ del componente involucra a los otros dos archivos. Eche un vistazo a los `component.ts` y `component.html` generados.

```typescript
// example.component.ts 
 import { Component } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-example', 
  templateUrl: './example.component.html' 
 }) 
 export class ExampleComponent { 
  constructor() { } 
 } 
```

Se cortaron un par de detalles irrelevantes de la generación predeterminada de `component.ts` . De esa manera el foco está en el componente en sí.

```html

<!-- example.component.html --> 
 
 <p>example works!</p> 
```

Insertar ExampleComponent como el hijo de otro componente se vería como el siguiente.

```html

<!-- another.component.html --> 
 
 <h1>Welcome to AnotherComponent.</h1> 
 <h3>Check out ExampleComponent!</h3> 
 
 <!-- Outputs “<p>example works!</p>” --> 
 <app-example></app-example> 
 
 <h6>This is the end of the AnotherComponent template HTML.</h6> 
```

Preste atención a `<app-example></app-example>` . El `app-example` coincide con el selector del decorador `@Component` de `@Component` . Esta es una directiva de componentes. Angular reconoce `app-example` y _dirige_ su representación a la clase ExampleComponent.

#### Directiva estructural

Piense en las declaraciones `if` , `for` bucles, y `switch` declaraciones en la lógica de programación. Estas construcciones lógicas determinan la ejecución del código. ¿Se ejecutará el código ( `if` ), cuántas veces se ejecutará ( `for` ) y qué bloque de código se ejecuta ( `switch` )?

Este patrón sigue las directivas estructurales. Ellos determinan la estructura HTML resultante de una plantilla. Siempre implican algún uso de `ng-template` bajo el capó. `ng-template` proporciona un mecanismo para crear HTML renderizado condicionalmente.

Aquí hay tres ejemplos de directivas estructurales. Cada uno tiene una contraparte lógica ( `if` , `for` , y `switch` ).

*   \* ngIf
    
*   \* ngPara
    
*   \* ngSwitchCase y \* ngSwitchDefault
    

**Nota importante:** los tres están disponibles a través de la importación de `CommonModule` . Está disponible en `@angular/common` para la importación dentro del módulo raíz de la aplicación.

##### \* ngIf

`*ngIf` prueba un valor dado para ver si es _verdadero_ o _falso_ basado en una evaluación booleana general en JavaScript. Si es cierto, el elemento y su interiorHTML aparecen. De lo contrario, nunca se procesan en el Modelo de objetos de dominio (DOM).

```html

<!-- renders “<h1>Hello!</h1>” --> 
 <div *ngIf="true"> 
  <h1>Hello!</h1> 
 </div> 
 
 <!-- does not render --> 
 <div *ngIf="false"> 
  <h1>Hi!</h1> 
 </div> 
```

Este es un ejemplo artificial. Cualquier valor de miembro de la clase de componente de la plantilla puede sustituirse por `true` o `false` .

NOTA: También puede hacer lo siguiente con \* ngIf para obtener acceso al valor de observación

```html

<div *ngIf="observable$ | async as anyNameYouWant"> 
  {{  anyNameYouWant }} 
 </div> 
```

##### \* ngPara

`*ngFor` bucles basados ​​en una expresión _microsintáctica_ asignada por el derecho. Microsyntax se mueve más allá del alcance de este artículo. Sepa que la microsyntax es una forma corta de expresión lógica. Ocurre como una sola cadena capaz de hacer referencia a valores de miembros de clase. Puede enlazar valores iterables lo que lo hace útil para `*ngFor` .

```html

<ul> 
  <li *ngFor=“let potato of ['Russet', 'Sweet', 'Laura']; let i=index”> 
      Potato {{ i + 1 }}: {{ potato }} 
  </li> 
  <!-- Outputs 
  <li> 
      Potato 1: Russet 
  </li> 
  <li> 
      Potato 2: Sweet 
  </li> 
  <li> 
      Potato 3: Laura 
  </li> 
  --> 
 </ul> 
```

`['Russet', 'Sweet', 'Laura']` es un valor iterable. Las matrices son uno de los iterables más comunes. El `*ngFor` escupe un nuevo `<li></li>` por elemento de matriz. A cada elemento del array se le asigna la variable `potato` . Todo esto se hace utilizando microsyntax. El `*ngFor` define el contenido estructural del elemento `ul` . Eso es característico de una directiva estructural.

NOTA: También puede hacer lo siguiente con la directiva \* ngFor para obtener acceso al valor de observación (hacky)

```html

<div *ngFor="let anyNameYouWant of [(observable$ | async)]"> 
  {{  anyNameYouWant }} 
 </div> 
```

##### \* ngSwitchCase y \* ngSwitchDefault

Estas dos directivas estructurales trabajan juntas para proporcionar la funcionalidad de `switch` a la plantilla HTML.

```html

<div [ngSwitch]=“potato”> 
  <h1 *ngSwitchCase=“'Russet'”>{{ potato }} is a Russet Potato.</h1> 
  <h1 *ngSwitchCase=“'Sweet'”>{{ potato }} is a Sweet Potato.</h1> 
  <h1 *ngSwitchCase=“'Laura'”>{{ potato }} is a Laura Potato.</h1> 
  <h1 *ngSwitchDefault>{{ potato }} is not a Russet, Sweet, nor Laura Potato.</h1> 
 </div> 
```

Solo una de las expresiones `*ngSwitch…` renderiza. Observe el atributo `[ngSwitch]` dentro del elemento `div` que envuelve el conmutador. Esto pasa el valor de la `potato` largo de la cadena `*ngSwitch...` Esta cadena de directivas estructurales determina qué elemento `h1` se procesa.

Como tal, `[ngSwitch]` no es una directiva estructural a diferencia de las declaraciones `*ngSwitch…` Pasa el valor a lo largo mientras que el bloque de conmutación determina el diseño final de HTML.

Recuerde que la estilización y la transferencia de valores no son responsabilidad de las directivas estructurales. Eso concierne a las directivas de atributos. Directivas estructurales determinan sólo el diseño.

#### Directiva estructural de creación [1](https://angular.io/guide/structural-directives)

Hay algo importante que entender sobre los ejemplos anteriores. Todos ellos son taquigrafía al principio asterisco ( `*` ). `ng-template` se utiliza debajo del capó en cada aplicación del asterisco.

`ng-template` define directivas estructurales. Explica cómo pueden configurar la plantilla HTML para producir HTML real. Comience por crear una directiva con `ng generate directive [name-of-directive]` . Reemplace `[name-of-directive]` con un nombre preferible. El comando produce lo siguiente.

```typescript
import { Directive } from '@angular/core'; 
 
 @Directive({ 
  selector: '[appExample]' 
 }) 
 export class ExampleDirective { 
  constructor() { } 
 } 
```

Este esqueleto directivo es bastante desnudo. Todavía no sabe si estamos construyendo una directiva estructural o de atributos. El `selector: '[appExample]'` le dice a Angular a qué atributo se asigna la directiva. Ya que está creando una directiva estructural, modifique el esqueleto de la siguiente manera.

```typescript
Import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core'; 
 
 @Directive({ 
  selector: '[appExample]' 
 }) 
 export class ExampleDirective { 
  @Input() set appExample(booleanValue: boolean) { 
      if (booleanValue) { 
          this.ngTemplate.createEmbeddedView(this.innerHTMLOfTemplateScope); 
      } 
      else { 
          this.ngTemplate.clear(); 
      } 
  } 
 
  constructor( 
      private innerHTMLOfTemplateScope:TemplateRef<any>, 
      private ngTemplate:ViewContainerRef 
  ) { } 
 } 
```

Incluir un elemento arbitrario con el atributo `appExample` sirve como un buen ejemplo.

```html

<div *appExample=“value”>innerHTML content</div> 
 <!-- This is shorthand for: 
 <ng-template> 
  <div>innerHTML content</div> 
 </ng-template> 
 --> 
```

Esto es mucho para `@Input() set ...` . El conjunto de `@Input() set ...` es una declaración de miembro establecedor. Se ejecuta cuando el atributo `appExample` aparece dentro de un elemento y se le asigna un valor booleano. La función de establecimiento recibe ese valor booleano como su parámetro para la ejecución.

`TemplateRef<any>` referencia al innerHTML de `<ng-template></ng-template>` . El asterisco utilizado en ejemplos anteriores es una abreviatura del comentario en el bloque de código anterior. `ng-template` actúa como la _salsa secreta_ de las directivas estructurales.

`ViewContainerRef` referencia al ámbito de encapsulación de `<ng-template></ng-template>` . `ng-template` no es un elemento real. Es un marcador para el compilador Angular que eventualmente se comenta.

`ViewContainerRef` tiene dos métodos: `clear()` y `createEmbeddedView()` . Puede pensar en las vistas incrustadas como el ámbito HTML dentro de un elemento `ng-template` .

`clear()` elimina cualquier ámbito HTML existente dentro de `ng-template` de la pantalla HTML. `createEmbeddedView()` tiene como objetivo el HTML dentro de `ng-template` como HTML visualizable.

Si entiendes el último ejemplo de código, entonces tienes un agarre sólido `*ngIf` , `*ngFor` , `*ngSwitchCase` y `*ngSwitchDefault` . Todos determinan el diseño con referencia a `TemplateRef<any>` y `ViewContainerRef` .

De hecho, el ExampleDirective anterior imita la funcionalidad de `*ngIf` !

```html

<!-- renders “<h1>Hello!</h1>” --> 
 <div *ngExample="true"> 
  <h1>Hello!</h1> 
 </div> 
 
 <!-- does not render --> 
 <div *appExample="false"> 
  <h1>Hi!</h1> 
 </div> 
```

Nunca olvides el asterisco ( `*` ). Es una abreviatura para el elemento `ng-template` que hace referencia nuestra clase directiva.

#### Directiva de Atributos

Las directivas de atributos son similares a las estructurales. Excepto, las directivas de atributos tienen efecto cero en el diseño HTML. No implementan `<ng-template></ng-template>` . Son atributos que hacen referencia a su elemento host para cambios estilísticos.

Un ejemplo explica mejor su propósito.

#### Directiva de atributos de creación [2](https://angular.io/guide/attribute-directives)

Genere otra directiva: `ng generate directive [name-of-directive]` . Reemplace `[name-of-directive]` con un nombre preferible.

```typescript
import { Directive } from '@angular/core'; 
 
 @Directive({ 
  selector: '[appExample]' 
 }) 
 export class ExampleDirective { 
  constructor() { } 
 } 
```

Las directivas de atributos y estructurales comienzan con el mismo esqueleto. Unas pocas adiciones más distinguirán la directiva de atributos.

```typescript
import { Directive, Input, ElementRef } from '@angular/core'; 
 
 @Directive({ 
  selector: '[appExample]' 
 }) 
 export class ExampleDirective { 
  @Input() set appExample(color:string) { 
      this.host.nativeElement.style.color = color; 
  } 
 
  constructor(private host:ElementRef) { } 
 } 
```

Unos pocos elementos para probar ayudarán.

```html

<!-- the intended results are self-explanatory --> 
 <div appExample=“purple”>This text is purple!</div> 
 <div appExample=“blue”>This text is blue!</div> 
 <div appExample=“red”>This text is red!</div> 
```

`ElementRef` proporciona una referencia directa al elemento host. `ElementRef.nativeElement` toma el nodo DOM. Con el nodo, el estilo del componente es tan simple como `this.host.nativeElement.style.color = color` .

`@Input() set ...` es otra función de establecimiento que lee el valor que se le asigna en su implementación como un atributo. Se reasigna la propiedad de color de la hoja de estilo de cada elemento.

#### Conclusión

Las directivas son una herramienta poderosa disponible en la plantilla HTML de Angular. Son cómo los componentes se conectan entre sí. Dentro de cada componente proporcionan un medio de estilo y diseño.

Hay muchas otras opciones para construir cada tipo de directiva. Desafortunadamente, cubrir cada uno es demasiado para un artículo. Tener una comprensión básica de las directivas es suficiente para avanzar con recursos más avanzados.

Echa un vistazo a los siguientes recursos para bucear más profundo. Hay enlaces para cada tipo de directiva. Cada enlace es parte de la misma documentación, por lo que no es necesario volver aquí después de visitar el primer enlace.

## Fuentes

1.  [Equipo angular. _Directivas estructurales_ . Google. Consultado el 28 de mayo de 2018](https://angular.io/guide/structural-directives)
    
2.  [Equipo angular. _Directivas de atributos_ . Google. Consultado el 28 de mayo de 2018](https://angular.io/guide/attribute-directives)
    

## Recursos

*   [Documentacion angular](https://angular.io/guide/pipes)
    
*   [Repositorio Angular de GitHub](https://github.com/angular/angular)
    
*   [Componentes angulares](https://angular.io/guide/architecture-components)
    
*   [Directivas estructurales angulares](https://angular.io/guide/structural-directives)
    
*   [Directivas de atributos angulares](https://angular.io/guide/attribute-directives)
    
*   [CLI angular](https://cli.angular.io)