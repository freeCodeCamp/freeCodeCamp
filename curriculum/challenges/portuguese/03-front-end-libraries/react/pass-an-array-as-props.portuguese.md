---
id: 5a24c314108439a4d403616a
title: Pass an Array as Props
challengeType: 6
videoUrl: ''
localeTitle: Passar uma matriz como adereços
---

## Description
<section id="description"> O último desafio demonstrou como passar informações de um componente pai para um componente filho como <code>props</code> ou propriedades. Este desafio analisa como as matrizes podem ser passadas como <code>props</code> . Para passar uma matriz para um elemento JSX, ela deve ser tratada como JavaScript e envolvida em chaves. <blockquote> &lt;ParentComponent&gt; <br> &lt;Cores do ChildComponent = {[&quot;green&quot;, &quot;blue&quot;, &quot;red&quot;]} /&gt; <br> &lt;/ ParentComponent&gt; </blockquote> O componente filho, em seguida, tem acesso às <code>colors</code> propriedade de matriz. Métodos de matriz como <code>join()</code> podem ser usados ​​ao acessar a propriedade. <code>const ChildComponent = (props) =&gt; &lt;p&gt;{props.colors.join(&#39;, &#39;)}&lt;/p&gt;</code> Isso unirá todos os itens da matriz de <code>colors</code> em uma string separada por vírgula e produzirá: <code>&lt;p&gt;green, blue, red&lt;/p&gt;</code> Mais tarde, aprenderemos sobre outros métodos comuns para renderizar matrizes de dados no React. </section>

## Instructions
<section id="instructions"> Existem componentes <code>List</code> e <code>ToDo</code> no editor de código. Ao renderizar cada <code>List</code> do componente <code>ToDo</code> , passe uma propriedade de <code>tasks</code> atribuída a uma matriz de tarefas, por exemplo <code>[&quot;walk dog&quot;, &quot;workout&quot;]</code> . Em seguida, acesse essa matriz de <code>tasks</code> no componente <code>List</code> , mostrando seu valor dentro do elemento <code>p</code> . Use <code>join(&quot;, &quot;)</code> para exibir a matriz <code>props.tasks</code> no elemento <code>p</code> como uma lista separada por vírgulas. A lista de hoje deve ter pelo menos duas tarefas e a de amanhã deve ter pelo menos três tarefas. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O componente <code>ToDo</code> deve retornar um único <code>div</code> externo.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ToDo)); return mockedComponent.children().first().type() === "div"; })(), "The <code>ToDo</code> component should return a single outer <code>div</code>.");'
  - text: O terceiro filho do componente <code>ToDo</code> deve ser uma instância do componente <code>List</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ToDo)); return mockedComponent.children().first().childAt(2).name() === "List"; })(), "The third child of the <code>ToDo</code> component should be an instance of the <code>List</code> component.");'
  - text: O quinto filho do componente <code>ToDo</code> deve ser uma instância do componente <code>List</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ToDo)); return mockedComponent.children().first().childAt(4).name() === "List"; })(), "The fifth child of the <code>ToDo</code> component should be an instance of the <code>List</code> component.");'
  - text: Ambas as instâncias do componente <code>List</code> devem ter uma propriedade chamada <code>tasks</code> e <code>tasks</code> devem ser do tipo array.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ToDo)); return Array.isArray(mockedComponent.find("List").get(0).props.tasks) && Array.isArray(mockedComponent.find("List").get(1).props.tasks); })(), "Both instances of the <code>List</code> component should have a property called <code>tasks</code> and <code>tasks</code> should be of type array.");'
  - text: O primeiro componente <code>List</code> que representa as tarefas para hoje deve ter dois ou mais itens.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ToDo)); return mockedComponent.find("List").get(0).props.tasks.length >= 2; })(), "The first <code>List</code> component representing the tasks for today should have 2 or more items.");'
  - text: O segundo componente <code>List</code> que representa as tarefas de amanhã deve ter 3 ou mais itens.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ToDo)); return mockedComponent.find("List").get(1).props.tasks.length >= 3; })(), "The second <code>List</code> component representing the tasks for tomorrow should have 3 or more items.");'
  - text: 'O componente <code>List</code> deve renderizar o valor das <code>tasks</code> prop da tag <code>p</code> como uma lista separada por vírgulas, por exemplo <code>walk dog, workout</code> .'
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
