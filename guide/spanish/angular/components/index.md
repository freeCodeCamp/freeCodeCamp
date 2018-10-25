---
title: Components
localeTitle: Componentes
---
# Componentes

#### Motivación

Angular contiene muchos _esquemas_ para aplicaciones de construcción. Los componentes son uno de esos esquemas. Abarcan una sola unidad de lógica relacionada con una sola parte de la aplicación. Los componentes a menudo se asocian con otros esquemas para operar de manera más efectiva.

Entre todos los esquemas, los componentes tienden a consumir más de lo que proporcionan. Mientras que otros esquemas como directivas, tuberías y servicios ofrecen utilidad, los componentes se utilizan. Son responsables de la interfaz de la aplicación, por lo que tiene sentido el uso de la utilidad.

Los componentes simplifican la aplicación. Su principal objetivo es canalizar la lógica en una sola sección de la interfaz visible. Para compilar aplicaciones paso a paso, debe compilar componente por componente. Los componentes actúan como bloques de construcción de Angular después de todo.

#### Introducción de componentes

Como se mencionó, los componentes consumen utilidad (servicios / recursos). Se interponen entre la lógica empresarial y la presentación para producir una unidad cohesiva. Angular une diversos mecanismos a cada componente. Estos adjuntos identifican una clase como un componente y definen sus capacidades estándar.

Angular debe reconocer componentes cuando se encuentra con ellos. Para hacer esto, `@Component` debe decorar cada clase que pretende ser un componente. Los decoradores indican a Angular lo que es la clase '.

En el caso de un componente, debe saber cómo interactuar con su inyector, conectarse con una plantilla, extraer de una lista de estilos, encapsular sus estilos, etc. Angular se encarga de la mayoría de los requisitos de bajo nivel. Los desarrolladores aún necesitan configurar el comportamiento de un componente, importar sus dependencias y extender su lógica.

Para todas esas cosas, tenemos la clase del componente. La clase mantiene todo relativamente uniforme. Se encapsula la lógica empresarial del componente.

#### Clase de componente y metadatos

Continúe e instale la [interfaz de línea de comandos Angular (CLI)](https://cli.angular.io) . Puedes aprender más sobre esto en [este artículo](https://guide.freecodecamp.org/angular/command-line-interface) . El comando CLI `ng generate component [name-of-component]` produce lo siguiente.

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

Este es el esqueleto básico del cual se originan todos los grandes componentes. El decorador `@Component` es la parte más importante. Sin ella, el ejemplo anterior se convierte en una clase genérica. Angular confía en los decoradores para discernir el tipo de esquema de una clase.

`@Component` recibe metadatos como un solo objeto. Los decoradores son solo funciones de JavaScript bajo el capó. Toman argumentos como con el objeto de metadatos. El objeto de metadatos configura las dependencias básicas de un componente. Cada campo juega un papel.

*   `selector:` le dice a Angular que asocie el componente con un determinado elemento en la plantilla HTML de la aplicación.
    
*   `templateUrl:` acepta la ubicación del archivo HTML de la plantilla del componente (aquí es donde se muestran los datos).
    
*   `styleUrls:` acepta una matriz de ubicaciones de archivos de hojas de estilo (cadenas). Estas hojas de estilo apuntan a la plantilla asignada del componente.
    

Piense en los metadatos como un gran blob de configuración. El decorador lo toma para que pueda generar los datos específicos del componente. El decorador _decora_ la clase subyacente con los datos necesarios para el comportamiento de su clase. Una clase _componente_ que es.

La firma de la clase se exporta de forma predeterminada para que se pueda importar el componente. `ngOnInit` también se implementa. `implements` le dice a la clase que defina ciertos métodos según la definición de la interfaz. `ngOnInit` es un gancho de ciclo de vida.

#### Componente del ciclo de vida y detección de cambios

Los componentes utilizan todo tipo de herramientas, servicios y características. Una característica clave disponible para los componentes son los ganchos del ciclo de vida. Una explicación para cada gancho existe [en este artículo](https://guide.freecodecamp.org/angular/lifecycle-hooks) .

Hay un total de ocho y todas ellas sirven como funciones de temporización. Se ejecutan condicionalmente como las transiciones de componentes de estado a estado a través de la [detección de cambios](https://blog.angularindepth.com/everything-you-need-to-know-about-change-detection-in-angular-8006c51d206f) . Este proceso ocurre constantemente en el árbol de componentes. Busca cambios en los datos que merecen una representación de la plantilla.

Tiempo de seguir adelante. Consulte los artículos mencionados anteriormente para obtener más información sobre el ciclo de vida de los componentes. Merece mucha más explicación.

#### Datos del componente

Los datos impulsan todo. Los componentes no son una excepción. Los componentes encapsulan todos sus datos. Para recibir datos externamente, un componente debe declararlo explícitamente. Esta forma de privacidad evita que la información entre en conflicto en el árbol de componentes.

Los datos determinan lo que se muestra desde la clase de componente a su plantilla. Cualquier actualización de los datos de la clase (o al menos debería) actualizará la visualización de la plantilla.

Los componentes a menudo inicializan un conjunto de miembros (o variables) que almacenan datos. Se utilizan en toda la lógica de la clase de componentes para mayor comodidad. Esta información alimenta la lógica que resulta en la plantilla y su comportamiento. Vea el siguiente ejemplo.

```typescript
// ./components/example/example.component.ts 
 
 import { Component, OnInit } from '@angular/core'; 
 import { Post, DATA } from '../../data/posts.data'; 
 
 @Component({ 
  selector: 'app-example', 
  templateUrl: './example.component.html' 
 }) 
 export class ExampleComponent implements OnInit { 
  username: string; 
  totalPosts: number; 
  allPosts: Post[]; 
 
  deletePost(index: number): void { 
    this.allPosts.splice(index, 1); 
    this.totalPosts = this.allPosts.length; 
  } 
 
  ngOnInit(): void { 
    this.username = DATA.author; 
    this.totalPosts = DATA.thePosts.length; 
    this.allPosts = DATA.thePosts; 
  } 
 } 
```

```html

<!-- ./components/example/example.component.html --> 
 
 <h1>{{ username }}</h1> 
 <span>Change Name: </span><input [(ngModel)]="username"> 
 <h3>Posts: {{ totalPosts }}</h3> 
 <ul> 
 <hr/> 
 <div *ngFor="let post of allPosts; let i=index"> 
  <button (click)="deletePost(i)">DELETE</button> 
  <h6>{{ post.title }}</h6> 
  <p>{{ post.body }}</p> 
  <hr/> 
 </div> 
 </ul> 
```

Tenga en cuenta las formas en que el componente interactúa con sus datos. Primero lo obtiene de `../../data/posts.data` antes de comenzar a reenviarlo a la plantilla para su visualización.

Los datos aparecen en toda la plantilla. Dentro de las llaves dobles, el valor de una variable se asigna desde la clase de componente a las llaves. El `*ngFor` recorre la `allPosts` clase `allPosts` . Al hacer clic en el botón, se elimina un elemento específico de `allPosts` por su índice. Incluso puede cambiar el `username` de `username` superior escribiendo en el cuadro de entrada.

Las interacciones anteriores modifican los datos de la clase del componente que a su vez actualiza la plantilla HTML del componente. Los componentes proporcionan la lógica de la red troncal que facilita el flujo de datos. La plantilla HTML hace que los datos sean legibles para el usuario.

#### Plantilla de componente

La plantilla HTML del ejemplo anterior presentaba una sintaxis interesante. La sintaxis no era HTML real. Era la plantilla HTML de Angular. Algunos a menudo se refieren a que tiene HTML _Plus_ reconocible solo por el compilador de Angular. El compilador soporta una sintaxis que resulta en la manipulación dinámica de HTML. Este artículo a menudo se referirá a él como 'plantilla HTML' o 'plantilla'.

La sintaxis permite a los componentes inyectar datos directamente en la plantilla HTML. La inyección es dinámica. Es decir, los datos pueden iterar y mostrarse como HTML sin necesidad de asistencia externa. El compilador Angular lo compila en HTML real en el momento en que llega al navegador web.

Para obtener más información sobre algunas de las formas en que los datos se unen a la plantilla, lea sobre [el enlace de datos en Angular](https://guide.freecodecamp.org/angular/data-binding) . Algunos ejemplos de enlace de datos ocurrieron en el ejemplo anterior ( `{{ ... }}` ). Para este artículo, es suficiente reconocer que las interacciones de datos ocurrieron entre la clase de componente y su plantilla.

#### Consultar la plantilla

Los datos que gestionan el estado de la plantilla funcionan de forma imperativa y están bien. Sin embargo, los datos puros no siempre cumplen con el diseño previsto de una aplicación. Puede ser necesario interactuar más directamente con el Modelo de objetos de documento (DOM).

Para hacer eso, el componente debe tener referencia a los elementos de la plantilla. Cuando los datos cambian, el componente puede manipular el DOM explícitamente. Este es un enfoque más declarativo.

Los componentes pueden capturar referencias utilizando la interfaz de programación de aplicaciones (API) de un navegador web. Aunque mala idea Angular prefiere la compatibilidad multiplataforma. Para que un componente funcione fuera del navegador web, necesita usar la API de Angular en lugar de los DOM.

Los componentes pueden consultar sus plantillas utilizando los decoradores `@ViewChild` y `ContentChild` . Recogen referencias a elementos de plantilla en nombre de la clase de componente.

```typescript
import { Component, ViewChild, ContentChild, ElementRef, Renderer2, AfterContentChecked, AfterViewChecked } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-child', 
  template: ` 
  <button (click)="toggleEnlarge()">Toggle Enlarge</button> 
  <ng-content></ng-content> 
  ` 
 }) 
 export class ChildComponent implements AfterContentChecked { 
  @ContentChild("pReference", { read: ElementRef }) pElement: ElementRef; 
  textEnlarge: boolean = false; 
 
  constructor(private renderer: Renderer2) { } 
 
  toggleEnlarge() { 
    this.textEnlarge = !this.textEnlarge; 
  } 
 
  ngAfterContentChecked() { 
    if (this.textEnlarge) 
      this.renderer.setStyle(this.pElement.nativeElement, 'font-size', '25px'); 
      else 
      this.renderer.setStyle(this.pElement.nativeElement, 'font-size', 'initial'); 
    } 
 } 
 
 @Component({ 
  selector: 'app-parent', 
  template: ` 
  <button (click)="toggleHighlight()">Toggle Highlight</button> 
  <h1 #hOneRefereance>View Child</h1> 
  <app-child> 
    <p #pReference>Content Child</p> 
  </app-child> 
  ` 
 }) 
 export class ParentComponent implements AfterViewChecked { 
  @ViewChild("hOneRefereance", { read: ElementRef }) hOneElement: ElementRef; 
  textHighlight: boolean = false; 
 
  constructor(private renderer: Renderer2) { } 
 
  toggleHighlight() { 
    this.textHighlight = !this.textHighlight; 
  } 
 
  ngAfterViewChecked() { 
    if (this.textHighlight) 
      this.renderer.setStyle(this.hOneElement.nativeElement, 'background-color', 'yellow'); 
    else 
      this.renderer.setStyle(this.hOneElement.nativeElement, 'background-color', 'initial'); 
  } 
 } 
```

El ejemplo anterior contiene dos botones que alternan un cierto estilo para cada elemento. Al hacer clic en los botones se alternan los valores verdaderos / falsos únicos de cada componente. Estos booleanos determinan si se aplican los estilos personalizados. En lugar de que estos valores causen cambios de forma imperativa, el ciclo de vida se enlaza ( `ngAfterViewChecked` y `ngAfterContentChecked` ) altera de forma declarativa el DOM.

El enfoque declarativo cambia explícitamente el estilo a través de la referencia del elemento. En la programación imperativa, los cambios en los datos basados ​​en DOM son implícitos. Echa un vistazo a este artículo sobre programación [imperativa y declarativa](https://codeburst.io/declarative-vs-imperative-programming-a8a7c93d9ad2) para obtener más información.

Lo principal a tener en cuenta es cómo estas referencias se extraen de la plantilla. En el ejemplo, hay dos secciones de la plantilla consultadas usando dos decoradores: `@ViewChild` y `@ContentChild` .

Se diferencian en dónde buscan la referencia de un elemento, ya sea en el contenido DOM o en la vista DOM. Estos dos DOM existen en la plantilla de ParentComponent. La diferenciación entre ellos es importante porque terminan de renderizarse en momentos separados.

Esta es la razón `@ViewChild` cual `@ViewChild` y `@ContentChild` existen. Trabajan juntos con sus ganchos de ciclo de vida complementarios `ngAfterViewChecked` y `ngAfterContentChecked` . Estos enganches de ciclo de vida esperan que sus respectivas consultas se resuelvan antes de ejecutarse.

Una vez resuelto, `@ViewChild` y `@ContentChild` proporcionan referencias a dos elementos. Ambos existen en partes separadas del DOM. Los datos booleanos todavía determinan el resultado. Cómo se traduce ese resultado al DOM es la diferencia clave de antes. El DOM se actualiza a través de la manipulación directa de `Renderer2` .

#### Proyección de contenido

El contenido DOM existe en el elemento innerHTML del elemento `<app-child></app-child>` de ChildComponent. Todo está posicionado dentro de la plantilla de ParentComponent. El HTML interno de los _proyectos_ de `app-child` en la plantilla de ChildComponent a través de `<ng-content></ng-content>` .

Esto ejemplifica la proyección de contenido. Viendo el contenido de `one` componente a otro utilizando el innerHTML de `another` 's etiquetas en `one` ' plantilla s para que `another` componente que puede tirar innerHTML en su propia plantilla a través de `<ng-content></ng-content>` . _Gracias por leer esa frase._

De ahí que ChildComponent haga referencia a su elemento `<p></p>` mediante `@ContentChild` . El contenido contenido dentro de `<app-child></app-child>` en la plantilla de ParentComponent conforma el contenido DOM. ChildComponent hace referencia al elemento con una consulta `@ContentChild` .

La vista de ParentComponent consiste en todo lo que se puede acceder desde la vista del componente. Esto no incluye necesariamente la plantilla completa dado el código interno de `<app-child></app-child>` . Nuevamente, esta parte del DOM se consulta desde ChildComponent usando `@ContentChild` . Todo lo demás se consulta utilizando `@ViewChild` desde la clase ParentComponent.

Esta es una excelente manera para que los componentes intercambien contenido y consulten su propio contenido, independientemente de su tipo de DOM. Los componentes pueden comunicarse entre sí y con otros mediante el enlace de datos. Lea más sobre esto en [este artículo](https://guide.freecodecamp.org/angular/data-binding) .

#### Estilos de componentes

Los estilos son críticos para la legibilidad e interactividad de un componente. Cada componente encapsula sus dependencias de hojas de estilo. De esa manera solo se aplican a la plantilla HTML del componente. Una técnica especial introducida por la sombra de HTML DOM hace esto posible.

Una rama DOM de sombra puede existir en cualquier elemento. Esta parte del DOM no puede verse desde el código fuente del HTML. Los elementos HTML estándar aprovechan el DOM de la sombra para proporcionar sus apariencias de marca registrada. Una rama DOM en la sombra debe anclarse a un componente visible para que pueda personalizarlo y personalizarlo.

El aspecto único de una rama DOM en la sombra es su encapsulación. Todo lo que se usa para estilizar el elemento raíz de una rama DOM en la sombra es privado. Ningún otro elemento puede acceder a él.

Angular abraza esta forma de encapsulación con componentes. La hoja de estilo y la plantilla de un componente se encapsulan juntos. Ningún otro componente tiene acceso a ellos. Los choques de hojas de estilo no pueden ocurrir.

Angular no usa el DOM de sombra por defecto. Utiliza un sistema de emulación que imita el comportamiento del DOM de la sombra. Esta es una medida temporal, ya que algunos navegadores web aún no son compatibles con la API DOM de la sombra.

Los metadatos de `@Component` contienen el campo de `encapsulation` . Esto permite a los desarrolladores alternar entre el DOM de sombra emulado, el DOM de sombra real o ninguno de los dos. Aquí están las opciones en su respectivo orden:

*   `ViewEncapsulation.Emulated` : falso DOM de sombra (predeterminado)
    
*   `ViewEncapsulation.Native` - DOM de sombra real (ahora en desuso desde Angular 6.0.8)
    
*   `ViewEncapsulation.None` - ninguno
    

`ViewEncapsulation.None` significa que las hojas de estilo del componente se elevan al alcance global. No se recomienda considerar que los componentes deben formar su propia unidad privada (encapsulación). Angular todavía lo proporciona como una escotilla de escape para situaciones extremas.

#### Conclusión

Los componentes construyen aplicaciones. Tienen un ámbito privado y son uniformemente separados entre sí, a menos que se configure de otra manera. Las aplicaciones tienden a comenzar desde el módulo raíz. Más allá de eso, los componentes forman un árbol alargado que define el resto de la aplicación.

Un componente cubre una unidad designada de la interfaz de la aplicación. Esto incluye sus estilos, lógica y diseño. Otros esquemas, como tuberías, servicios y directivas, se utilizan frecuentemente en el código de componentes. Puede aprender más sobre estas interacciones en algunos de los otros artículos de la guía angular.

No olvides que los componentes deben [arrancar](https://angular.io/guide/bootstrapping) . Esto puede suceder en el módulo raíz o en los metadatos del componente. Esto es así por lo que Angular reconoce el componente donde sea que aparezca en la aplicación.

Siempre se puede aprender más explorando los enlaces que se muestran a continuación. El componente es mucho más profundo que lo que este artículo podría transmitir.

## Fuentes

*   [Equipo angular. "Documentos Angulares". _Google_ . Accedido el 3 de junio de 2018](https://angular.io/guide)
*   [Comunidad MDN Mozilla. "Utilizando Shadow DOM". _Mozilla_ , actualizado el 30 de mayo de 2018. Acceso el 3 de junio de 2018](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)
*   [Mundy, Ian. “Programación declarativa vs imperativa”. _codeburst.io_ , 20 de febrero de 2017. Acceso el 3 de junio de 2018](https://codeburst.io/declarative-vs-imperative-programming-a8a7c93d9ad2)

## Recursos

*   [Documentacion angular](https://angular.io/guide)
*   [Repositorio Angular de GitHub](https://github.com/angular/angular)
*   [Introducción a los componentes](https://angular.io/guide/architecture-components)
*   [Componentes en profundidad](https://angular.io/guide/displaying-data)
*   [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)