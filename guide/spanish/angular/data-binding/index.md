---
title: Data Binding
localeTitle: El enlace de datos
---
# El enlace de datos

#### Motivación

Los datos a menudo definen el aspecto de una aplicación. La interpretación de esos datos en la interfaz de usuario implica lógica de clase ( `.component.html` ) y una vista de plantilla ( `.component.ts` ). Angular los conecta a través del enlace de datos. Piense en el enlace de datos como una herramienta para la interacción de componentes.

#### Componente y plantilla

El componente almacena la mayor parte de su lógica y datos dentro de su clase decorada con `@Component` . Este decorador define la clase como un componente con plantilla HTML. La plantilla del componente representa la clase dentro de la aplicación. El foco aquí debe estar entre la clase del componente y la plantilla HTML.

Aquí es donde se produce el enlace de datos. Las propiedades de los elementos y los eventos obtienen valores asignados. Estos valores, definidos por la clase de componente, cumplen una de dos funciones. Una es producir los datos que la plantilla recibe. El otro maneja los eventos emitidos por el elemento plantilla.

![Ejemplo de código](https://raw.githubusercontent.com/sosmaniac-FCC/designatedata/master/image4.png)

Trate de usar esta imagen como modelo mental para la siguiente sección.

#### Direcciones de Encuadernación

Hay dos formas en que los datos se enlazan: unidireccional y bidireccional. Angular técnicamente solo utiliza flujo de datos unidireccional. El flujo bidireccional es en última instancia unidireccional. Ocurre en dos aplicaciones de flujo unidireccional, una para cada dirección. Más sobre eso más adelante.

El flujo unidireccional define la interacción unidireccional. El componente envía datos a la plantilla o la plantilla emite un evento a la lógica del componente. Los cambios de datos dentro del alcance de la plantilla no se filtran a la clase de componente. La emisión de eventos es una transacción unidireccional que comienza a partir de los elementos de la plantilla.

Bidireccional constituye ambas direcciones. Esto significa que los cambios en los datos en la lógica de la clase o la plantilla HTML persisten entre sí. El alcance de los cambios es la vista del componente. La vista comprende la clase y la plantilla del componente juntas.

#### Propiedades del elemento

Para reconocer las propiedades de los elementos enlazados a datos, Angular usa una sintaxis de corchete especial.

```typescript
// my.component.ts 
 @Component({ 
  templateUrl: './my.component.html' 
 }) 
 
 export class MyComponent { 
  value:type = /* some value of type */; 
 } 
```

```html

<!-- my.component.html --> 
 <any-element [property]=“value”>innerHTML</any-element> 
```

Tengan paciencia en este caso.

`[property]` refleja la propiedad en el nodo objeto del elemento Modelo de objeto de dominio (DOM). No confunda las propiedades del objeto con los atributos de un elemento DOM. Las propiedades y los atributos a menudo comparten el mismo nombre y hacen lo mismo. Sin embargo, hay una distinción clara.

Recuerde que `attr` (atributos) es una propiedad única del objeto DOM subyacente. Se declara en la instanciación del DOM con valores de atributos que coinciden con la definición del elemento. Mantiene el mismo valor después de eso. Cada una de las propiedades tiene su propio campo clave-valor en un nodo de objeto DOM. Estas propiedades son mutables post-instanciación.

Conoce la diferencia entre atributos y propiedades. Esto conducirá a una mejor comprensión de cómo Angular vincula datos a propiedades (enlace de propiedades). Angular casi nunca vinculará datos a los atributos de un elemento. Las excepciones a esto son muy raras. Una última vez: ¡Angular une datos de componentes a propiedades, no a atributos!

Con referencia al ejemplo, el `[ … ]` en la asignación de propiedades del elemento tiene un significado especial. Los paréntesis muestran que la `property` está vinculada a `“value”` a la derecha de la asignación.

`value` también tiene un significado especial dentro del contexto de los paréntesis. `value` por sí mismo es una cadena literal. Angular lo lee y compara su valor con los miembros de la clase de componentes. Angular sustituirá el valor del atributo de miembro coincidente. Por supuesto, esto se refiere a la misma clase de componente que aloja la plantilla HTML.

El flujo unidireccional de datos del componente a la plantilla está completo. El miembro que coincide con la asignación correcta de la propiedad entre corchetes proporciona el `value` . Tenga en cuenta que los cambios en el valor del miembro en la clase de componente se filtran hasta la plantilla. Esa es la detección del cambio de Angular en el trabajo. Los cambios dentro del alcance de la plantilla no tienen efecto en el miembro de la clase de componente.

Retiro clave: la clase de componente proporciona los datos mientras que la plantilla los muestra.

No mencioné que los valores de los datos también pueden aparecer en el `innerHTML` un componente. Este último ejemplo implementa llaves dobles. Angular reconoce estos aparatos e interpola los datos de clase de componente correspondiente en el `innerHTML` del `div` .

```html

<div>The value of the component class member 'value' is {{value}}.</div> 
```

#### Manejo de eventos

Si el componente suministra datos, entonces la plantilla suministra eventos.

```typescript
// my.component.ts 
 @Component({ 
  templateUrl: './my.component.html' 
 }) 
 
 export class MyComponent { 
  handler(event):void { 
      // function does stuff 
  } 
 } 
```

```html

// my.component.html 
 <any-element (event)=“handler($event)”>innerHTML</any-element> 
```

Esto funciona de manera similar a la unión de propiedades.

El `(event)` pertenece a cualquier tipo de evento válido. Por ejemplo, uno de los tipos de eventos más comunes es `click` . Se emite al _hacer clic con_ el ratón. Independientemente del tipo, el `event` está vinculado a `“handler”` en el ejemplo. Los controladores de eventos suelen ser funciones miembro de la clase de componente.

Los `( … )` son especiales para Angular. Los paréntesis indican a Angular que un evento está limitado a la asignación correcta del `handler` . El evento en sí se origina en el elemento host.

Cuando el evento se emite, pasa el objeto Evento en forma de `$event` . El `handler` asigna a la función de `handler` nombre idéntico de la clase de componente. El intercambio unidireccional desde el elemento vinculado a evento a la clase de componente está completo.

La emisión de eventos desde el controlador, mientras sea posible, no afecta al elemento de plantilla. La unión es unidireccional después de todo.

#### Encuadernación bidireccional

Los formularios de entrada proporcionan un gran ejemplo de por qué es necesaria la vinculación bidireccional. Los enlaces de datos bidireccionales son más costosos que los enlaces de eventos o propiedades.

El enlace de datos bidireccional tiene su propio módulo. Antes de echar un vistazo a eso, considere el siguiente ejemplo.

```typescript
// my.component.ts 
 @Component({ 
  templateUrl: './my.component.html' 
 }) 
 export class MyComponent { 
  inputValue:string = ""; 
 
  handler(event) { 
      this.inputValue = event.target.value; 
  } 
 } 
```

```html

<!-- my.component.html --> 
 <input (input)=“handler($event)” [value]=“inputValue”> 
```

Es hora de romper esto.

Este ejemplo combina los dos anteriores. Eso explica por qué es más costoso. Siguiendo la lógica, asuma que el usuario escribe algo en el elemento de entrada. El elemento emite un evento de `input` al `handler` de la clase de componente de la plantilla. El controlador asigna el miembro de clase `inputValue` al valor del evento emitido. Con esto concluye el evento de manejo / encuadernación.

Ahora en el enlace de la propiedad. Al `inputValue` se le asignó un nuevo valor. Como `inputValue` está vinculado al `value` del elemento de entrada, su cambio en los datos se filtra hacia abajo en la propiedad de `value` del elemento de entrada. El `value` del elemento de entrada coincide con `inputValue` . Esto concluye la vinculación de la propiedad.

Ahí tienes. El enlace de datos bidireccional ocurre con ambas aplicaciones de enlace unidireccional aplicadas consecutivamente. Sin embargo, la sintaxis es un poco desordenada.

Afortunadamente, Angular proporciona `NgModel` para simplificar la sintaxis. El siguiente ejemplo es sinónimo de lo anterior.

```typescript
// my.component.ts 
 @Component({ 
  templateUrl: './my.component.html' 
 }) 
 
 export class MyComponent { 
  inputValue:string = ""; 
 } 
```

```html

<!-- my.component.html --> 
 <input [(ngModel)]=“inputValue”> 
```

`ngModel` es una buena conveniencia. Debe importar FormsModule en la raíz de su aplicación antes de usarlo. Con eso al cuadrado, el enlace de datos bidireccional se vuelve mucho más fácil de trabajar.

Para reforzar todo lo que ha aprendido, consulte esta imagen en la [Documentación Angular](https://angular.io/guide/architecture-components#data-binding) oficial [1](https://angular.io/guide/architecture-components#data-binding) .

![Diagrama de flujo de datos](https://raw.githubusercontent.com/sosmaniac-FCC/designatedata/master/image2.png)

Puede resumir visualmente todo hasta este punto con esta imagen. La documentación de Angular tiene muchas otras imágenes que vale la pena ver. Este debería ser suficiente dado el alcance de este artículo.

#### Componente a componente

Para enlazar datos y eventos en diferentes componentes, debe usar los decoradores @Input y @Output. Los componentes angulares son de ámbito privado. No se puede acceder a ninguno de los miembros de un componente desde cualquier lugar fuera de su vista nativa.

El decorador @Input indica que el valor de un miembro proviene de la función principal. Esto requiere visualización para comprender mejor.

![Ejemplo de código](https://raw.githubusercontent.com/sosmaniac-FCC/designatedata/master/image3_.png)

Observe la transferencia del miembro de `value` del padre al miembro de `property` del niño. Esto no sería posible si la `property` no tuviera un decorador @Input. El compilador angular depende de ello.

Otro ejemplo para @Output muestra cómo un evento viaja de niño a padre. Tenga en cuenta que @Output casi siempre se refiere a enlaces de eventos personalizados.

![Ejemplo de código](https://raw.githubusercontent.com/sosmaniac-FCC/designatedata/master/image1.png)

Asegúrese de importar `EventEmitter` , `@Input` y `@Output` desde `@angular/common` si desea replicar cualquiera de estos ejemplos.

#### Conclusión

Este es un buen lugar para detenerse. El enlace de datos abarca una amplia gama de casos de uso. Vale la pena explorar este tema en [el sitio web de Angular](https://angular.io) . Estas no son las únicas formas en que puede manipular los datos en Angular. Vea los enlaces en Recursos para más información.

### Fuentes

1.  [Equipo angular. Introducción a los componentes. Google. Consultado el 26 de mayo de 2018](https://angular.io/guide/architecture-components#data-binding)

### Recursos

*   [Documentacion angular](https://angular.io/docs)
    
*   [Repositorio Angular de GitHub](https://github.com/angular/angular)
    
*   [Más sobre Componentes y Plantillas en Angular](https://angular.io/guide/displaying-data)