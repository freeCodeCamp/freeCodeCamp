---
title: Services and Injectors
localeTitle: Servicios e inyectores
---
# Servicios e inyectores

#### Motivación

Los componentes son responsables de los datos que se representan en la plantilla. Tener _servicios_ externos a los que recurrir puede simplificar esta responsabilidad. Además, encapsular lo extraño es mucho más fácil de mantener.

Delegar demasiadas responsabilidades en un solo componente puede complicar la clase del componente. ¿Y si estas responsabilidades se aplicaran a varios componentes? Copiar y pegar tal lógica es una práctica extremadamente pobre. Cualquier cambio futuro en la lógica sería más difícil de implementar y probar.

Angular destinado a frenar este problema con servicios e inyección de dependencia. Ambos conceptos trabajan juntos para proporcionar _una_ funcionalidad _modular_ .

Los componentes tampoco necesitan proporcionar información extraña. Un servicio importa lo que necesita para funcionar en nombre de los componentes que _atiende_ . Los componentes solo necesitan instanciar el servicio. A partir de ahí están al _servicio de_ sus propias necesidades con la instancia de servicio instanciada.

En cuanto a las pruebas y futuras modificaciones, toda la lógica está en un solo lugar. El servicio se instancia desde su origen. Las pruebas y modificaciones a la fuente se aplican en cualquier lugar donde se inyecte el servicio.

#### Introducción a los servicios

Un servicio es un tipo de _esquema_ disponible en Angular. Se puede generar mediante la interfaz de línea de comandos (CLI): `ng generate service [name-of-service]` . Reemplace `[name-of-service]` con un nombre preferible. El comando CLI produce lo siguiente.

```typescript
import { Injectable } from '@angular/core'; 
 
 @Injectable({ 
  providedIn: 'root' 
 }) 
 export class LoggerService { 
  constructor() { } 
 } 
```

La lógica de un servicio es distinta dentro de su clase. Angular interpreta una clase como un servicio _inyectable_ basado en el decorador `@Injectable` . Los servicios inyectables deben _registrarse_ con un inyector.

El componente crea una instancia de un servicio mientras que el inyector proporciona esa instancia. Siga leyendo en la siguiente sección para obtener más información sobre los inyectores.

El campo de metadatos `@Injectable` `providedIn: 'root'` dirige al módulo raíz de la aplicación actual ( `app.module.ts` ). Registra el servicio con el inyector del módulo para que pueda _inyectar_ ese servicio en cualquiera de sus hijos.

Los inyectores son los componentes básicos del sistema de inyección de dependencia de Angular. Los inyectores son un buen lugar para enfocar su atención antes de continuar con los servicios.

#### Inyectores

Una aplicación, que comienza con `app.module.ts` , contiene una jerarquía de inyectores. Existen junto a cada módulo y componente en el árbol de la aplicación.

![Jerarquía de aplicaciones](https://raw.githubusercontent.com/sosmaniac-FCC/designatedata/master/image5.png)

Los círculos verdes indican inyectores. Proporcionan instancias de servicio para instanciar componentes. Dependiendo de en qué inyector se haya registrado un servicio, puede o no estar disponible para un componente.

Los servicios registrados en la raíz de la aplicación ( `app.module.ts` ) están disponibles para todos los componentes. Un inyector para un componente no puede tener un determinado servicio registrado. Si ese es el caso y el componente solicita su creación de instancias, el inyector se remitirá a su matriz. Esta tendencia continúa hasta que llega al inyector de raíz o se encuentra el servicio.

Mirando el diagrama, diga que un servicio se registra en el inyector del punto B. Todos los componentes en el punto C y hacia abajo no podrán acceder al servicio registrado en el inyector de B. Los inyectores nunca remitirán a sus hijos por una instancia de servicio.

#### Inyección de dependencia

Hay varias formas de registrar un servicio con los inyectores de una aplicación.

El campo de metadatos'Instable `providedIn: 'root'` `@Injectable` de `@Injectable` proporciona el enfoque más recomendado. Este campo de metadatos lanzado con Angular 6.

Tal como se mencionó anteriormente, " `providedIn: 'root'` registra un servicio con el inyector del módulo raíz. Es instantánea en toda la aplicación como resultado.

La novedad de `providedIn: 'root'` es _sacudir el árbol_ . Si el servicio no se utiliza a pesar de su registro, se _agita_ de la aplicación en tiempo de ejecución. De esa forma no consume ningún recurso.

Las otras dos formas son más directas y tradicionales. Por supuesto, no ofrecen sacudidas de árboles.

Un servicio puede registrarse con cualquier inyector a lo largo del árbol de componentes. Usted inserta el servicio como proveedor en el campo de metadatos de `@Component` : `providers: []` . El servicio está disponible para el componente y sus hijos.

En la tercera estrategia de registro, los `providers: []` metadatos existen como su propio campo en el decorador `@NgModule` . El servicio es instanciable desde el módulo hasta el árbol de componentes subyacente.

Recuerda que, a diferencia de `providedIn: 'root'` `@NgModule` `providedIn: 'root'` , `@NgModule` , el registro no ofrece sacudidas de árboles. Ambas estrategias son idénticas. Una vez que un servicio se registra con `@NgModule` , consume recursos incluso si la aplicación no los utiliza.

#### Servicios continuados

Escribir un servicio real es lo siguiente. Para resumir, los servicios manejan ciertas funciones en nombre de los componentes de una aplicación.

Los servicios sobresalen en el manejo de operaciones comunes. Les ahorran a los componentes la responsabilidad al hacerlo. Ahorra tiempo al no tener que volver a escribir operaciones comunes en varios componentes. También es más comprobable porque el código está en un lugar. Los cambios solo tienen que ocurrir en un lugar sin tener que buscar en otro lugar.

#### Casos de uso

Un par de ejemplos van un largo camino hacia una comprensión completa de los servicios.

*   registros de consola
    
*   Solicitudes de API
    

Ambos son comunes en la mayoría de las aplicaciones. Tener servicios para manejar estas operaciones reducirá la complejidad de los componentes.

##### Registros de la consola

Este ejemplo se acumula a partir del esqueleto de `@Injectable` base. El esqueleto está disponible a través de la ejecución de la CLI ( `ng generate service [name-of-service]]` ).

```typescript
// services/logger.service.ts 
 
 import { Injectable } from '@angular/core'; 
 
 interface LogMessage { 
  message:string; 
  timestamp:Date; 
 } 
 
 @Injectable({ 
  providedIn: 'root' 
 }) 
 export class LoggerService { 
  callStack:LogMessage[] = []; 
 
  constructor() { } 
 
  addLog(message:string):void { 
      // prepend new log to bottom of stack 
      this.callStack = [{ message, timestamp: new Date() }].concat(this.callStack); 
  } 
 
  clear():void { 
      // clear stack 
      this.callStack = []; 
  } 
 
  printHead():void { 
      // print bottom of stack 
      console.log(this.callStack[0] || null); 
  } 
 
  printLog():void { 
      // print bottom to top of stack on screen 
      this.callStack.reverse().forEach((logMessage) => console.log(logMessage)); 
  } 
 
  getLog():LogMessage[] { 
      // return the entire log as an array 
      return this.callStack.reverse(); 
  } 
 } 
```

LoggerService se registra en el módulo raíz a través de los metadatos de `@Injectable` . Por lo tanto, puede instanciar en el `app.component.html` .

```typescript
// app.component.ts 
 
 import { Component, OnInit } from '@angular/core'; 
 import { LoggerService } from './services/logger.service'; 
 
 @Component({ 
  selector: 'app-root', 
  templateUrl: './app.component.html' 
 }) 
 export class AppComponent implements OnInit { 
  logs:object[] = []; 
 
  constructor(private logger:LoggerService) { } 
 
  updateLog():void { 
      this.logger.printHead(); 
      this.logs = this.logger.getLog(); 
  } 
 
  logMessage(event:any, message:string):void { 
      event.preventDefault(); 
 
      this.logger.addLog(`Message: ${message}`); 
      this.updateLog(); 
  } 
 
  clearLog():void { 
      this.logger.clear(); 
      this.logs = []; 
  } 
 
  ngOnInit():void { 
      this.logger.addLog(“View Initialized”); 
      this.updateLog(); 
  } 
 } 
```

La plantilla HTML proporciona información adicional sobre el uso del componente de LoggerService.

```html

<!-- app.component.html --> 
 
 <h1>Log Example</h1> 
 
 <form (submit)="logMessage($event, userInput.value)"> 
  <input #userInput placeholder="Type a message..."> 
  <button type="submit">SUBMIT</button> 
 </form> 
 
 <h3>Complete Log</h3> 
 <button type="button" (click)="clearLog()">CLEAR</button> 
 <ul> 
  <li *ngFor="let log of logs; let i=index">{{ logs.length - i }} > {{ log.message }} @ {{ log.timestamp }}</li> 
 </ul> 
```

Esto tiene la sensación de una aplicación ToDo. Puede registrar mensajes y borrar el registro de mensajes. ¡Imagínese si toda la lógica del servicio se introdujera en AppComponent! Habría complicado el código. LoggerService mantiene el código relacionado con el registro encapsulado desde la clase central AppComponent.

##### Solicitudes de búsqueda

Aquí hay un ejemplo más con el que vale la pena jugar. Este ejemplo es posible gracias a [JSONPlaceholder 1 de typicode](https://jsonplaceholder.typicode.com) . La API es pública y de uso gratuito.

```typescript
import { Injectable } from '@angular/core'; 
 import { HttpClient } from '@angular/common/http'; 
 import { Observable } from 'rxjs'; 
 
 // https://jsonplaceholder.typicode.com 
 // public API created by typicode @ https://github.com/typicode 
 
 interface Post { 
  userId:number; 
  id:number; 
  title:string; 
  body:string; 
 } 
 
 @Injectable({ 
  providedIn: 'root' 
 }) 
 export class PlaceholderService { 
  constructor(private http:HttpClient) { } 
 
  getPosts():Observable<Post[]> { 
      return this.http.get('https://jsonplaceholder.typicode.com/posts'); 
  } 
 
  getPost(id:number):Observable<Post> { 
      return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`); 
  } 
 } 
```

Esta es más una pieza independiente que un ejemplo completamente desarrollado. Las solicitudes de recuperación tienden a funcionar mejor como un servicio inyectable. La alternativa es un componente demasiado complicado. La clase inyectada se suscribe a lo que el PlaceholderService pre-configura.

#### Conclusión

Los servicios y la inyección de dependencia son muy útiles juntos. Permiten a los desarrolladores encapsular la lógica común e inyectar a través de múltiples componentes diferentes. Esto solo es una comodidad masiva para cualquier mantenimiento futuro.

Los inyectores funcionan como intermediarios. Median entre la creación de componentes de instanciación y una reserva de servicios registrados. Los inyectores ofrecen estos servicios instantáneos a sus hijos de la rama.

Consulte los siguientes enlaces para obtener más información sobre los servicios y la inyección de dependencia.

## Fuentes

1.  [Typicode, _JSONPlaceholder_ , https://jsonplaceholder.typicode.com, consultado el 29 de mayo de 2018.](https://jsonplaceholder.typicode.com)

## Recursos

*   [Documentacion angular](https://angular.io/docs)
    
*   [Repositorio Angular de GitHub](https://github.com/angular/angular)
    
*   [Inyección de dependencia](https://angular.io/guide/dependency-injection-pattern)
    
*   [Introducción a Servicios y DI](https://angular.io/guide/architecture-services)