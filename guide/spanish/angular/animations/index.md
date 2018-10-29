---
title: Animations
localeTitle: Animaciones
---
# Animaciones

#### Motivación

Los componentes web modernos utilizan con frecuencia animaciones. Las hojas de estilo en cascada (CSS) arman a los desarrolladores con las herramientas para crear animaciones impresionantes. Las transiciones de propiedades, animaciones con nombres únicos, fotogramas clave de varias partes son posibles con CSS. Las posibilidades animables son infinitas gracias a CSS.

En una aplicación web moderna, la animación enfoca la atención del usuario. Las buenas animaciones buscan guiar la atención del usuario de manera satisfactoria y productiva. Las animaciones no deben resultar molestas para el usuario.

Las animaciones ofrecen retroalimentación en forma de movimiento. Muestran al usuario que la aplicación está manejando activamente sus solicitudes. Algo tan simple como una pulsación de un botón visible o un cargador cuando la aplicación debe cargar llama la atención del usuario.

Las animaciones siguen siendo cada vez más relevantes en el caso de Angular. Google desarrolla Angular mientras promueve la filosofía de Diseño de Materiales. Fomenta interfaces de usuario concisas (IU) complementadas con comentarios animados de usuarios. Hace que las aplicaciones web se sientan un tanto vivas y divertidas de usar.

La comunidad Angular desarrolla una biblioteca de widgets principales llamada [Material2](https://github.com/angular/material2) . Este proyecto agrega una variedad de módulos de widgets a Angular. La mayoría de ellos cuentan con animaciones. Para entender cómo funcionan, este artículo recomienda estudiar las animaciones de CSS antes de seguir leyendo.

Las animaciones angulares son la versión optimizada del marco de lo que CSS proporciona de forma nativa. CSS es la tecnología central para las animaciones angulares que se producen en el navegador web. CSS está más allá del alcance de este artículo sin embargo. Es hora de abordar las animaciones angulares de frente.

#### Configuración de animaciones

Antes de animar, `BrowserAnimationsModule` debe incluirse en la matriz de importaciones del módulo raíz. Está disponible en `@angular/platform-browser/animations` . Este NgModule garantiza que las animaciones funcionen para la plataforma dada. Este artículo asume el navegador web estándar para cada ejemplo.

Las animaciones angulares se declaran dentro de los metadatos de `@Component` . `@Component` decora una clase para distinguirla como un componente a Angular. Sus metadatos contienen configuraciones de componentes que incluyen las `animations: []` campo `animations: []` . Cada elemento de la matriz de este campo representa un activador de animación ( `AnimationTriggerMetadata` ).

Las animaciones son exclusivas de su componente de host a través de los metadatos del decorador. Las animaciones solo se pueden utilizar en la plantilla del componente host. Las animaciones no heredan a los hijos del componente. Hay una solución fácil para esto.

Siempre se puede crear un archivo separado que exporte una matriz. Cualquier clase de componente puede importar esa matriz desde la parte superior de su archivo host. El token de matriz importado entra en los metadatos de las animaciones del componente. Repita este proceso para cualquier otro componente que requiera la misma matriz en sus metadatos de animaciones.

La proyección de contenido le permite aplicar animaciones al contenido del componente A (Modelo de objetos de documento). El componente B que envuelve este contenido DOM puede proyectar los contenidos en su propia plantilla. Una vez que lo hace, las animaciones del componente A no se niegan. El componente B incorpora las animaciones de A a través de la proyección de contenido.

DE ACUERDO. Usted sabe cómo configurar animaciones y dónde declararlas. La implementación es el siguiente paso.

#### Metodos de animacion

Las animaciones angulares utilizan una serie de llamadas a métodos importable de `@angular/animations` . Cada elemento de la `@Component` animaciones `@Component` comienza como un solo método. Sus argumentos se desenredan como una secuencia de llamadas a métodos de orden superior. La siguiente lista muestra algunos de los métodos utilizados para construir animaciones angulares.

*   `trigger(selector: string, AnimationMetadata[])`

devuelve `AnimationTriggerMetadata`

*   `state(data: string, AnimationStyleMetadata, options?: object)`

devuelve `AnimationStateMetadata`

*   `style(CSSKeyValues: object)`

devuelve `AnimationStyleMetadata`

*   `animate(timing: string|number, AnimationStyleMetadata|KeyframesMetadata)`

devuelve `AnimationAnimateMetadata`

*   `transition(stateChange: string, AnimationMetadata|AnimationMetadata[], options?: object)`

devuelve `AnimationTransitionMetadata`

Si bien hay ciertamente [más métodos](https://angular.io/api/animations) para elegir, estos cinco métodos manejan los conceptos básicos. Tratar de entender estos métodos básicos como una lista no ayuda mucho. Las explicaciones paso a paso seguidas de un ejemplo le darán un mejor sentido.

##### disparador (selector: cadena, AnimationMetadata \[\])

El método `trigger(...)` encapsula un solo elemento de animación dentro de la matriz de animaciones.

El primer `selector: string` argumentos del método `selector: string` coincide con el atributo de miembro `[@selector]` . Actúa como una directiva de atributos en la plantilla de componente. Básicamente, conecta el elemento de animación a la plantilla a través de un selector de atributos.

El segundo argumento es una matriz que contiene una lista de métodos de animación aplicables. El `trigger(...)` mantiene en conjunto en una sola matriz.

##### estado (datos: cadena, AnimationStyleMetadata, opciones ?: objeto)

El método `state(...)` define el estado final de la animación. Aplica una lista de propiedades CSS al elemento de destino después de que concluye una animación. Esto es así para que el CSS del elemento animado coincida con la resolución de la animación.

El primer argumento coincide con el valor de los datos vinculados al enlace de animación. Es decir, el valor vinculado a `[@selector]` en la plantilla coincide con el primer argumento de un `state(...)` . El valor de los datos determina el estado final. El cambio del valor determina los medios de animación (ver `transition(...)` ).

El segundo argumento alberga los estilos CSS que se aplican a un elemento posterior a la animación. Los estilos se pasan invocando `style(...)` y pasando a su argumento los estilos deseados como un objeto.

Una lista de opciones ocupa opcionalmente el tercer argumento. Las opciones predeterminadas de `state(...)` deben permanecer sin cambios a menos que se indique lo contrario.

##### estilo (CSSKeyValues: objeto)

Es posible que haya observado `AnimationStyleMetadata` varias veces en la lista anterior. El componente `style(...)` devuelve este tipo exacto de metadatos. Dondequiera que se apliquen estilos CSS, el método `style(...)` debe invocar. Un objeto que contiene estilos CSS representa su argumento.

Por supuesto, los estilos que se pueden animar en CSS se transfieren al método de `style(...)` Angular `style(...)` . Por supuesto, nada de lo imposible para CSS se vuelve repentinamente posible con las animaciones angulares.

##### animate (timing: string | number, AnimationStyleMetadata | AnimationKeyframesMetadata)

La función `animate(...)` acepta una expresión de tiempo como su primer argumento. Este argumento cronometra, acelera y / o retrasa la animación del método. Este argumento acepta un número o una expresión de cadena. El formato se explica [aquí](https://angular.io/api/animations/animate#usage) .

El segundo argumento de `animate(...)` es la propiedad CSS que garantiza la animación. Esto toma la forma del método de `style(...)` que devuelve `AnimationStyleMetadata` . Piense en `animate(...)` como el método que inicia la animación.

Una serie de fotogramas clave también puede aplicarse al segundo argumento. Keyframes es una opción más avanzada que este artículo explica más adelante. Los fotogramas clave distinguen varias secciones de la animación.

`animate(...)` no puede recibir un segundo argumento. En ese caso, el tiempo de animación del método solo se aplica al CSS reflejado en los métodos de `state(...)` . Los cambios de propiedad en los métodos de `state(...)` del activador `state(...)` se animarán.

##### transición (changExpr: cadena, AnimationMetadata | AnimationMetadata \[\], opciones ?: objeto)

`animate(...)` inicia una animación mientras que la `transition(...)` determina qué animación se inicia.

El primer argumento consiste en una forma única de micro-sintaxis. Denota un cambio en el estado (o cambio en los datos) que tiene lugar. Los datos vinculados al enlace de animación de la plantilla ( `[selector]="value"` ) determinan esta expresión. La próxima sección titulada "Estado de animación" explica este concepto un poco más.

El segundo argumento de `transition(...)` comprende `AnimationMetadata` (devuelto por `animate(...)` ). El argumento acepta una matriz de `AnimationMetadata` o una sola instancia.

El valor del primer argumento coincide con el valor del límite de datos en la plantilla ( `[selector]="value"` ). Si se produce una coincidencia perfecta, el argumento se evalúa correctamente. El segundo argumento inicia una animación en respuesta al éxito del primero.

Una lista de opciones ocupa opcionalmente el tercer argumento. Las opciones de `transition(...)` predeterminadas `transition(...)` deben permanecer sin cambios a menos que se indique lo contrario.

##### Ejemplo de animación

```typescript
import { Component, OnInit } from '@angular/core'; 
 import { trigger, state, style, animate, transition } from '@angular/animations'; 
 
 @Component({ 
  selector: 'app-example', 
  template: ` 
  <h3>Click the button to change its color!</h3> 
  <button (click)="toggleIsCorrect()"     // event binding 
    [@toggleClick]="isGreen">Toggle Me!</button>  // animation binding 
    `, 
    animations: [       // metadata array 
      trigger('toggleClick', [     // trigger block 
      state('true', style({      // final CSS following animation 
        backgroundColor: 'green' 
      })), 
      state('false', style({ 
        backgroundColor: 'red' 
      })), 
      transition('true => false', animate('1000ms linear')),  // animation timing 
      transition('false => true', animate('1000ms linear')) 
    ]) 
  ]        // end of trigger block 
 }) 
 export class ExampleComponent { 
  isGreen: string = 'true'; 
 
  toggleIsCorrect() { 
    this.isGreen = this.isGreen === 'true' ? 'false' : 'true'; // change in data-bound value 
  } 
 } 
```

El ejemplo anterior realiza un intercambio de color muy simple con cada clic del botón. Por supuesto, las transiciones de color rápidamente en un fundido lineal según `animate('1000ms linear')` . La animación se une al botón al hacer coincidir el primer argumento del `trigger(...)` con el `[@toggleClick]` animación `[@toggleClick]` .

El enlace se enlaza al valor de `isGreen` desde la clase de componente. Este valor determina el color resultante según lo establecido por los dos métodos de `style(...)` dentro del bloque de `trigger(...)` . El enlace de animación es unidireccional, por lo que los cambios a `isGreen` en la clase de componente notifican el enlace de plantilla. Es decir, la animación de enlace `[@toggleClick]` .

El elemento de botón en la plantilla también tiene un evento de `click` vinculado a él. Al hacer clic en el botón, `isGreen` valores. Esto cambia los datos de la clase de componente. El enlace de animación recoge esto e invoca su método `trigger(...)` . El `trigger(...)` encuentra dentro de la matriz de animaciones de los metadatos del componente. Dos cosas ocurren en la invocación del disparador.

La primera aparición se refiere a los dos métodos de `state(...)` . El nuevo valor de `isGreen` coincide con el primer argumento del método `state(...)` . Una vez que coincida, los estilos de `style(...)` CSS `style(...)` aplican al estado final del elemento host del enlace de animación. \`El estado final entra en vigor después de toda la animación.

Ahora para la segunda aparición. El cambio de datos que invocó el enlace de animación se compara entre los dos métodos de `transition(...)` . Uno de ellos hace coincidir el cambio en los datos con su primer argumento. El primer clic en el botón hizo que `isGreen` pasara de 'verdadero' a 'falso' ('verdadero => falso'). Eso significa que el primer método de `transition(...)` activa su segundo argumento.

La función `animate(...)` correspondiente al método de `transition(...)` evaluado con éxito inicia. Este método establece la duración del fundido de color animado junto con el ritmo del fundido. La animación se ejecuta y el botón se desvanece en rojo.

Este proceso puede ocurrir cualquier número de veces después de hacer clic en un botón. El color de `backgroundColor` del botón alternará entre verde y rojo en un fundido lineal.

#### Estado de animacion

La `transition(...)` micro-sintaxis vale la pena abordar en detalle. Angular determina las animaciones y su tiempo al evaluar esta sintaxis. Existen las siguientes transiciones de estado. Modelan un cambio en los datos vinculados a un enlace de animación.

*   `'someValue' => 'anotherValue'`

Un activador de animación donde los datos enlazados cambian de 'someValue' a 'anotherValue'.

*   `'anotherValue' => 'someValue'`

Un activador de animación donde los datos enlazados cambian de 'anotherValue' a 'someValue'.

*   `'someValue' <=> 'anotherValue'`

Los datos cambian de 'someValue\` a' anotherValue 'o viceversa.

También existe `void` y `*` estados. `void` indica que el componente está entrando o saliendo del DOM. Esto es perfecto para animaciones de entrada y salida.

*   `'someValue' => void` : el componente de host de los datos enlazados está _saliendo_ del DOM
    
*   `void => 'someValue'` : el componente host de los datos enlazados está _ingresando_ al DOM
    

`*` denota un estado comodín. Los estados comodín pueden interpretar a "cualquier estado". Esto incluye el `void` y cualquier otro cambio en los datos enlazados.

#### Fotogramas clave

Este artículo tocó lo básico para animar aplicaciones angulares. Técnicas avanzadas de animación existen junto con estos conceptos básicos. Agrupar los fotogramas clave es una de estas técnicas. Está inspirado en la regla `@keyframes` CSS. Si ha trabajado con CSS `@keyframes` , ya entiende cómo funcionan los keyframes en Angular. Se convierte en una cuestión de sintaxis.

El método de `keyframes(...)` se importa desde `@angular/animations` . Pasa al segundo argumento de `animate(...)` lugar del típico `AnimationStyleMetadata` . El método de `keyframes(...)` acepta un argumento como una matriz de `AnimationStyleMetadata` . Esto también puede denominarse una matriz de métodos de `style(...)` .

Cada fotograma clave de la animación va dentro de la matriz de `keyframes(...)` . Estos elementos de fotograma clave son métodos de `style(...)` que admiten la propiedad de `offset` . `offset` indica un punto en la duración de la animación donde deben aplicarse las propiedades de estilo que lo acompañan. Su valor se extiende desde 0 (inicio de animación) hasta 1 (final de animación).

```typescript
import { Component } from '@angular/core'; 
 import { trigger, state, style, animate, transition, keyframes } from '@angular/animations'; 
 
 @Component({ 
  selector: 'app-example', 
  styles: [ 
    `.ball { 
      position: relative; 
      background-color: black; 
      border-radius: 50%; 
      top: 200px; 
      height: 25px; 
      width: 25px; 
    }` 
  ], 
  template: ` 
  <h3>Arcing Ball Animation</h3> 
  <button (click)="toggleBounce()">Arc the Ball!</button> 
  <div [@animateArc]="arc" class="ball"></div> 
  `, 
  animations: [ 
    trigger('animateArc', [ 
      state('true', style({ 
        left: '400px', 
        top: '200px' 
      })), 
      state('false', style({ 
        left: '0', 
        top: '200px' 
      })), 
      transition('false => true', animate('1000ms linear', keyframes([ 
        style({ left: '0',     top: '200px', offset: 0 }), 
        style({ left: '200px', top: '100px', offset: 0.50 }), 
        style({ left: '400px', top: '200px', offset: 1 }) 
      ]))), 
      transition('true => false', animate('1000ms linear', keyframes([ 
        style({ left: '400px', top: '200px', offset: 0 }), 
        style({ left: '200px', top: '100px', offset: 0.50 }), 
        style({ left: '0',     top: '200px', offset: 1 }) 
      ]))) 
    ]) 
  ] 
 }) 
 export class ExampleComponent { 
  arc: string = 'false'; 
 
  toggleBounce(){ 
    this.arc = this.arc === 'false' ? 'true' : 'false'; 
  } 
 } 
```

La principal diferencia del ejemplo anterior en comparación con el otro ejemplo es el segundo argumento de `animate(...)` . Ahora contiene un método de `keyframes(...)` que hospeda una serie de fotogramas clave de animación. Si bien la animación en sí también es diferente, la técnica para animar es similar.

Al hacer clic en el botón, el botón aparece en la pantalla. El arco se mueve según los elementos de la matriz (fotogramas clave) del método de `keyframes(...)` ). En el punto medio de la animación ( `offset: 0.50` ), la pelota cambia de trayectoria. Desciende a su altura original a medida que avanza por la pantalla. Al hacer clic en el botón de nuevo se invierte la animación.

`left` y la `top` son propiedades animables después de establecer la `position: relative;` para el elemento. La propiedad de `transform` puede realizar animaciones similares basadas en movimiento. `transform` es una propiedad expansiva pero totalmente animable.

Cualquier número de fotogramas clave puede existir entre el desplazamiento 0 y 1. Secuencias de animación complejas toman la forma de fotogramas clave. Son una de las muchas técnicas avanzadas en animaciones angulares.

### Animaciones con enlace de host

Sin duda, se encontrará con la situación en la que desea adjuntar una animación al elemento HTML de un componente en sí, en lugar de un elemento en la plantilla del componente. Esto requiere un poco más de esfuerzo, ya que no puede simplemente ingresar a la plantilla HTML y adjuntar la animación allí. En su lugar, tendrás que importar `HostBinding` y utilizar eso.

El código mínimo para este escenario se muestra a continuación. Reutilizaré la misma condición de animación para el código anterior para mantener la coherencia y no muestro ninguno del código de animación real, ya que puede encontrarlo fácilmente arriba.

```typescript
import { Component, HostBinding } from '@angular/core'; 
 
 @Component({ 
 ... 
 }) 
 export class ExampleComponent { 
  @HostBinding('@animateArc') get arcAnimation() { 
    return this.arc; 
  } 
 } 
```

La idea detrás de animar el componente host es casi lo mismo que animar un elemento de la plantilla, con la única diferencia que es su falta de acceso al elemento que está animando. Todavía tiene que pasar el nombre de la animación ( `@animateArc` ) al declarar el `HostBinding` y todavía tiene que devolver el estado actual de la animación ( `this.arc` ). El nombre de la función no importa realmente, por lo que `arcAnimation` podría haberse cambiado a cualquier cosa, siempre y cuando no coincida con los nombres de propiedades existentes en el componente, y funcionaría perfectamente bien.

#### Conclusión

Esto cubre los fundamentos de la animación con Angular. Angular hace que la configuración de animaciones sea muy fácil usando Angular CLI. Comenzar con su primera animación solo requiere una clase de componente. Recuerda, las animaciones abarcan la plantilla del componente. Exporte su matriz de transiciones desde un archivo separado si planea usarla en múltiples componentes.

Cada utilidad / método de animación se exporta desde `@angular/animations` . Todos trabajan juntos para proporcionar un sistema robusto de animación inspirado en CSS. Hay más métodos más allá de lo que este artículo podría cubrir.

Ahora que ya sabe lo básico, siéntase libre de explorar los enlaces a continuación para obtener más información sobre animaciones angulares.

## Fuentes

*   [Equipo angular. “Animaciones”. _Google_ . Accedido el 7 de junio de 2018.](https://angular.io/guide/animations)
*   [Equipo angular. “Paquete de animaciones”. _Google_ . Accedido el 7 de junio de 2018.](https://angular.io/api/animations)

## Recursos

*   [Documentacion angular](https://angular.io/guide)
*   [Tutorial de animaciones angulares](https://angular.io/guide/animations)
*   [API de animaciones angulares](https://angular.io/api/animations)
*   [Repositorio Angular de GitHub](https://github.com/angular/angular)
*   [CLI angular](https://cli.angular.io)