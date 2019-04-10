---
title: Dependency Injection
localeTitle: Inyección de dependencia
---
# Inyección de dependencia

#### Motivación

La inyección de dependencia a menudo se conoce más simplemente como DI. El paradigma existe en todo Angular. Mantiene el código flexible, comprobable y mutable. Las clases pueden heredar la lógica externa sin saber cómo crearla. Cualquier consumidor de esas clases tampoco necesita saber nada.

DI ahorra clases y consumidores por igual de tener que saber más de lo necesario. Sin embargo, el código es tan modular como lo era antes gracias a los mecanismos que soportan DI en Angular.

Los servicios son un benefactor clave de DI. Se basan en el paradigma de la _inyección_ en varios consumidores. Esos consumidores pueden aprovechar ese servicio que ofrece y / o reenviarlo a otra parte.

El servicio no está solo. Directivas, tuberías, componentes, etc.: todos los esquemas en Angular se benefician de DI de alguna manera u otra.

#### Inyectores

Los inyectores son estructuras de datos que almacenan instrucciones que detallan dónde y cómo se forman los servicios. Actúan como intermediarios dentro del sistema Angular DI.

Las clases de módulos, directivas y componentes contienen metadatos específicos de los inyectores. Una nueva instancia de inyector acompaña a cada una de estas clases. De esta manera, el árbol de aplicaciones refleja su jerarquía de inyectores.

Los `providers: []` metadatos aceptan servicios que luego se registran con el inyector de la clase. Este campo de proveedor agrega las instrucciones necesarias para que funcione un inyector. Una clase (asumiendo que tiene dependencias) crea una instancia de un servicio tomando su clase como su tipo de datos. El inyector alinea este tipo a crea una instancia de ese servicio en nombre de la clase.

Por supuesto, la clase solo puede instanciar lo que el inyector tiene instrucciones para. Si el inyector propio de la clase no tiene el servicio registrado, entonces consulta a su padre. Sigue y sigue hasta llegar a un inyector con el servicio o la raíz de la aplicación.

Los servicios pueden registrarse en cualquier inyector dentro de la aplicación. Los servicios van en los `providers: []` campo de metadatos de módulos de clase, directivas o componentes. Los niños de la clase pueden crear una instancia de un servicio registrado en el inyector de la clase. Los inyectores de niños recurren a los padres inyectores después de todo.

#### Inyección de dependencia

Eche un vistazo a los esqueletos de cada clase: servicio, módulo, directiva y componente.

```typescript
// service 
 
 import { Injectable } from '@angular/core'; 
 
 @Injectable({ 
  providedIn: /* injector goes here */ 
 }) 
 export class TemplateService { 
  constructor() { } 
 } 
```

```typescript
// module 
 
 import { NgModule } from '@angular/core'; 
 import { CommonModule } from '@angular/common'; 
 
 @NgModule({ 
  imports: [ 
    CommonModule 
  ], 
  declarations: [], 
  providers: [ /* services go here */ ] 
 }) 
 export class TemplateModule { } 
```

```typescript
// directive 
 
 import { Directive } from '@angular/core'; 
 
 @Directive({ 
  selector: '[appTemplate]', 
  providers: [ /* services go here */ ] 
 }) 
 export class TemplateDirective { 
  constructor() { } 
 } 
```

```typescript
//component 
 
 import { Component } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-template', 
  templateUrl: './template.component.html', 
  styleUrls: ['./template.component.css'], 
  providers: [ /* services go here */ ] 
 }) 
 export class TemplateComponent { 
  // class logic ... 
 } 
```

Cada esqueleto puede registrar servicios a un inyector. De hecho, TemplateService _es_ un servicio. A partir de Angular 6, los servicios ahora pueden registrarse con inyectores utilizando metadatos `@Injectable` .

##### En todo caso

Observe los `@Injectable` `providedIn: string` ( `@Injectable` ) y `providers: []` ( `@Directive` , `@Componet` y `@Module` ). Le dicen a los inyectores dónde y cómo crear un servicio. De lo contrario, los inyectores no sabrían cómo instanciar.

¿Qué pasa si un servicio tiene dependencias? ¿A dónde irían los resultados? Los proveedores responden esas preguntas para que los inyectores puedan instanciar correctamente.

Los inyectores forman la columna vertebral del marco DI. Almacenan instrucciones para crear servicios para que los consumidores no tengan que hacerlo. ¡Reciben instancias de servicio sin necesidad de saber nada sobre la dependencia de origen!

También debo señalar que otros esquemas sin inyectores todavía pueden utilizar la inyección de dependencia. No pueden registrar servicios adicionales, pero aún pueden instanciar desde inyectores.

##### Servicio

El metadatos de `providedIn: string` `@Injectable` especifica con qué inyector se registra. Usando este método, y dependiendo de si el servicio se usa, el servicio puede o no registrarse con el inyector. Angular llama a este _árbol temblando_ .

De forma predeterminada, el valor se establece en `'root'` . Esto se traduce en el inyector de raíz de la aplicación. Básicamente, establecer el campo en `'root'` hace que el servicio esté disponible en cualquier lugar.

##### Nota rápida

Como se mencionó anteriormente, los inyectores de niños recurren a sus padres. Esta estrategia de respaldo garantiza que los padres no tengan que volver a registrarse para cada inyector. Consulte este artículo sobre [Servicios e inyectores](https://guide.freecodecamp.org/angular/services-and-injectors) para obtener una ilustración de este concepto.

Los servicios registrados son _singletons_ . Es decir, las instrucciones para crear una instancia del servicio existen en un solo inyector. Esto supone que no se ha registrado explícitamente en ningún otro lugar.

##### Módulo, Directiva y Componente

Cada módulo y sus componentes tienen su propia instancia de inyector. Esto es evidente dados los `providers: []` campo de metadatos. Este campo toma una serie de servicios y los registra en el inyector del módulo o clase de componente. Este enfoque ocurre en los `@NgModule` , `@Directive` o `@Component` .

Esta estrategia omite _la sacudida de árboles_ o la eliminación opcional de los servicios no utilizados de los inyectores. Las instancias de servicio viven en sus inyectores durante la vida útil del módulo o componente.

#### Referencias instantáneas

Las referencias al DOM pueden instanciarse de cualquier clase. Tenga en cuenta que las referencias siguen siendo servicios. Se diferencian de los servicios tradicionales en representar el estado de otra cosa. Estos servicios incluyen funciones para interactuar con su referencia.

Las directivas están en constante necesidad de referencias DOM. Las directivas realizan mutaciones en sus elementos de host a través de estas referencias. Vea el siguiente ejemplo. El inyector de la directiva crea una instancia del elemento host en el constructor de la clase.

```typescript
// directives/highlight.directive.ts 
 
 import { Directive, ElementRef, Renderer2, Input } from '@angular/core'; 
 
 @Directive({ 
  selector: '[appHighlight]' 
 }) 
 export class HighlightDirective { 
  constructor( 
    private renderer: Renderer2, 
    private host: ElementRef 
  ) { } 
 
  @Input() set appHighlight (color: string) { 
    this.renderer.setStyle(this.host.nativeElement, 'background-color', color); 
  } 
 } 
```

```html

// app.component.html 
 
 <p [appHighlight]="'yellow'">Highlighted Text!</p> 
```

`Renderer2` también se instancia. ¿De qué inyector provienen estos servicios? Bueno, el código fuente de cada servicio proviene de `@angular/core` . Estos servicios deben registrarse con el inyector raíz de la aplicación.

```typescript
import { BrowserModule } from '@angular/platform-browser'; 
 import { NgModule } from '@angular/core'; 
 import { AppComponent } from './app.component'; 
 import { HighlightDirective } from './directives/highlight.directive'; 
 
 @NgModule({ 
  declarations: [ 
    AppComponent, 
    HighlightDirective 
  ], 
  imports: [ 
    BrowserModule 
  ], 
  providers: [], 
  bootstrap: [ 
    AppComponent 
  ] 
 }) 
 export class AppModule { } 
```

¿Una matriz de proveedores vacía? No tener miedo. Angular registra muchos servicios con el inyector de raíz automáticamente. Esto incluye `ElementRef` y `Renderer2` . En este ejemplo, estamos administrando el elemento host a través de su interfaz derivada de la `ElementRef` de instancias de `ElementRef` . `Renderer2` nos permite actualizar el DOM a través del modelo de vista de Angular.

Puedes leer más sobre las vistas de [este artículo](https://guide.freecodecamp.org/angular/views) . Son el método preferido para las actualizaciones de DOM / view en aplicaciones Angular.

Es importante reconocer el papel que desempeñan los inyectores en el ejemplo anterior. Al declarar tipos de variables en el constructor, la clase obtiene servicios valiosos. El tipo de datos de cada parámetro se asigna a un conjunto de instrucciones dentro del inyector. Si el inyector tiene ese tipo, devuelve una instancia de dicho tipo.

#### Servicios de instanciación

El artículo de [Servicios e inyectores](https://guide.freecodecamp.org/angular/services-and-injectors) explica esta sección en cierta medida. Sin embargo, esta sección repite la sección anterior o la mayor parte. Los servicios a menudo proporcionarán referencias a otra cosa. También pueden proporcionar una interfaz que amplíe las capacidades de una clase.

El siguiente ejemplo definirá un servicio de registro que se agrega al inyector de un componente a través de sus `providers: []` metadatos.

```typescript
// services/logger.service.ts 
 
 import { Injectable } from '@angular/core'; 
 
 @Injectable() 
 export class LoggerService { 
  callStack: string[] = []; 
 
  addLog(message: string): void { 
    this.callStack = [message].concat(this.callStack); 
    this.printHead(); 
  } 
 
  clear(): void { 
    this.printLog(); 
    this.callStack = []; 
    console.log(“DELETED LOG”); 
  } 
 
  private printHead(): void { 
    console.log(this.callStack[0] || null); 
  } 
 
  private printLog(): void { 
    this.callStack.reverse().forEach((log) => console.log(message)); 
  } 
 } 
```

```typescript
// app.component.ts 
 
 import { Component } from '@angular/core'; 
 import { LoggerService } from './services/logger.service'; 
 
 @Component({ 
  selector: 'app-root', 
  templateUrl: './app.component.html', 
  providers: [LoggerService] 
 }) 
 export class AppComponent { 
  constructor(private logger: LoggerService) { } 
 
  logMessage(event: any, message: string): void { 
    event.preventDefault(); 
    this.logger.addLog(`Message: ${message}`); 
  } 
 
  clearLog(): void { 
    this.logger.clear(); 
  } 
 } 
```

```html

// app.component.html 
 
 <h1>Log Example</h1> 
 <form (submit)="logMessage($event, userInput.value)"> 
  <input #userInput placeholder="Type a message..."> 
  <button type="submit">SUBMIT</button> 
 </form> 
 
 <h3>Delete Logged Messages</h3> 
 <button type="button" (click)="clearLog()">CLEAR</button> 
```

Centrarse en el constructor de AppComponent y los metadatos. El inyector de componentes recibe instrucciones del campo de metadatos del proveedor que contiene LoggerService. El inyector entonces sabe de qué instanciase LoggerService a partir de lo solicitado en el constructor.

El parámetro constructor `loggerService` tiene el tipo `LoggerService` que reconoce el inyector. El inyector sigue a través de la instanciación como se mencionó.

#### Conclusión

La inyección de dependencia (DI) es un paradigma. La forma en que funciona en Angular es a través de una jerarquía de inyectores. Una clase recibe sus recursos sin tener que crearlos o conocerlos. Los inyectores reciben instrucciones y ejemplifican un servicio dependiendo de cuál fue solicitado.

DI aparece mucho en Angular. La documentación oficial de Angular explica por qué el paradigma prevalece tanto. También continúan describiendo los numerosos casos de uso para DI en forma Angular más allá de lo que se discutió en este artículo. ¡Compruébalo haciendo clic abajo!

## Fuentes

*   [Equipo angular. “Patrón de inyección de dependencia”. _Google_ . Consultado el 1 de junio de 2018](https://angular.io/guide/dependency-injection-pattern)
    
*   [Zuev, Alexey. “Lo que siempre quiso saber sobre el árbol de inyección de dependencia angular”. _Angular en profundidad_ , 21 de marzo de 2018. Consultado el 1 de junio de 2018](https://blog.angularindepth.com/angular-dependency-injection-and-tree-shakeable-tokens-4588a8f70d5d)
    

## Recursos

*   [Documentacion angular](https://angular.io/guide/pipes)
    
*   [Repositorio Angular de GitHub](https://github.com/angular/angular)
    
*   [Introducción a la inyección de dependencia](https://angular.io/guide/architecture-services)
    
*   [Inyección de Dependencia Avanzada](https://angular.io/guide/dependency-injection-pattern)