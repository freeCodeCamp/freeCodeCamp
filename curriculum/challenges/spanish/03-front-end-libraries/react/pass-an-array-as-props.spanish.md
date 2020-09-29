---
id: 5a24c314108439a4d403616a
title: Pass an Array as Props
challengeType: 6
videoUrl: ''
localeTitle: Pasar una matriz como apoyos
---

## Description
<section id="description"> El último desafío demostró cómo pasar información de un componente de los padres a un componente secundario como <code>props</code> o propiedades. Este desafío analiza cómo se pueden pasar las matrices como <code>props</code> . Para pasar una matriz a un elemento JSX, se debe tratar como JavaScript y se debe incluir entre llaves. <blockquote> &lt;ParentComponent&gt; <br> &lt;ChildComponent colors = {[&quot;green&quot;, &quot;blue&quot;, &quot;red&quot;]} /&gt; <br> &lt;/ParentComponent&gt; </blockquote> El componente hijo tiene acceso a los <code>colors</code> propiedad de matriz. Se pueden usar métodos de matriz como <code>join()</code> al acceder a la propiedad. <code>const ChildComponent = (props) =&gt; &lt;p&gt;{props.colors.join(&#39;, &#39;)}&lt;/p&gt;</code> Esto unirá todos los elementos de matriz de <code>colors</code> en una cadena separada por comas y producirá: <code>&lt;p&gt;green, blue, red&lt;/p&gt;</code> Más adelante, aprenderemos sobre otros métodos comunes para procesar matrices de datos en React. </section>

## Instructions
<section id="instructions"> Hay componentes <code>List</code> y <code>ToDo</code> en el editor de código. Al representar cada <code>List</code> desde el componente de <code>ToDo</code> , pase una propiedad de <code>tasks</code> asignada a una serie de tareas a realizar, por ejemplo <code>[&quot;walk dog&quot;, &quot;workout&quot;]</code> . Luego acceda a esta matriz de <code>tasks</code> en el componente <code>List</code> , mostrando su valor dentro del elemento <code>p</code> . Utilice <code>join(&quot;, &quot;)</code> para mostrar la matriz <code>props.tasks</code> en el elemento <code>p</code> como una lista separada por comas. La lista de hoy debe tener al menos 2 tareas y la de mañana debe tener al menos 3 tareas. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El componente <code>ToDo</code> debe devolver un solo <code>div</code> exterior.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ToDo)); return mockedComponent.children().first().type() === "div"; })(), "The <code>ToDo</code> component should return a single outer <code>div</code>.");'
  - text: El tercer elemento secundario del componente <code>ToDo</code> debe ser una instancia del componente <code>List</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ToDo)); return mockedComponent.children().first().childAt(2).name() === "List"; })(), "The third child of the <code>ToDo</code> component should be an instance of the <code>List</code> component.");'
  - text: El quinto elemento secundario del componente <code>ToDo</code> debe ser una instancia del componente <code>List</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ToDo)); return mockedComponent.children().first().childAt(4).name() === "List"; })(), "The fifth child of the <code>ToDo</code> component should be an instance of the <code>List</code> component.");'
  - text: Ambas instancias del componente <code>List</code> deben tener una propiedad llamada <code>tasks</code> y las <code>tasks</code> deben ser de tipo array.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ToDo)); return Array.isArray(mockedComponent.find("List").get(0).props.tasks) && Array.isArray(mockedComponent.find("List").get(1).props.tasks); })(), "Both instances of the <code>List</code> component should have a property called <code>tasks</code> and <code>tasks</code> should be of type array.");'
  - text: El primer componente de la <code>List</code> que representa las tareas de hoy debe tener 2 o más elementos.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ToDo)); return mockedComponent.find("List").get(0).props.tasks.length >= 2; })(), "The first <code>List</code> component representing the tasks for today should have 2 or more items.");'
  - text: El segundo componente de la <code>List</code> que representa las tareas para mañana debe tener 3 o más elementos.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ToDo)); return mockedComponent.find("List").get(1).props.tasks.length >= 3; })(), "The second <code>List</code> component representing the tasks for tomorrow should have 3 or more items.");'
  - text: 'El componente <code>List</code> debe representar el valor de las <code>tasks</code> prop en la etiqueta <code>p</code> como una lista separada por comas, por ejemplo, <code>walk dog, workout</code> .'
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ToDo)); return mockedComponent.find("p").get(0).props.children === mockedComponent.find("List").get(0).props.tasks.join(", ") && mockedComponent.find("p").get(1).props.children === mockedComponent.find("List").get(1).props.tasks.join(", "); })(), "The <code>List</code> component should render the value from the <code>tasks</code> prop in the <code>p</code> tag as a comma separated list, for example <code>walk dog, workout</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const List= (props) => {
  { /* change code below this line */ }
  return <p>{}</p>
  { /* change code above this line */ }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* change code below this line */ }
        <List/>
        <h2>Tomorrow</h2>
        <List/>
        { /* change code above this line */ }
      </div>
    );
  }
};

```

</div>


### After Test
<div id='jsx-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
