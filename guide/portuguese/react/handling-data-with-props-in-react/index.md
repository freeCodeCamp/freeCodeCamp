---
title: Handling Data with Props in React
localeTitle: Manipulando dados com adereços no React
---
## Manipulando dados com adereços no React

Adereços fornecem uma maneira de passar e acessar dados em componentes do React.

Os dados são passados ​​para os componentes do React como um atributo no JSX.

```javascript
<MyComponent someAttribute={data.value} /> 
```

No JSX, as chaves indicam uma expressão JavaScript que deve retornar um valor. Os dados passados ​​são acessados ​​via adereços no componente definido.

```javascript
const MyComponent = props => { 
  <p>{props.someAttribute}</p> 
 }; 
```

Agora vamos percorrer um exemplo no CodePen.

### Começando

Se você ainda não o fez, vá em frente e inscreva-se para uma [conta gratuita da CodePen](https://codepen.io/accounts/signup/user/free) .

Crie uma nova caneta selecionando "Criar"> "Nova caneta" ao lado da sua foto de perfil do CodePen.

Em seguida, adicionaremos as bibliotecas apropriadas para renderizar nossos componentes React.

Abra o painel de configurações do JavaScript selecionando "Configurações"> "JavaScript". Selecione "Babel" em "Preprocessador JavaScript".

Em seguida, vamos adicionar nossas bibliotecas React. Em "JavaScript externo", selecione a lista suspensa "Adicionar rápido" e adicione as bibliotecas "Reagir" e "Reagir DOM".

### Usando Adereços

Primeiro vamos definir alguns dados fictícios no nosso arquivo JavaScript.

```javascript
const blogData = { 
  title: 'My blog title', 
  body: 'Arcu viverra dolor eros interdum, quis nonummy accusantium at lorem luctus iaculis.' 
 }; 
```

Em seguida, vamos definir nossos componentes do blog.

```javascript
const Heading = () => { 
  return ( 
    <h1>My Blog</h1> 
  ); 
 }; 
 
 const Blog = props => { 
  return ( 
    <div> 
      <h2>{props.title}</h2> 
      <p>{props.body}</p> 
    </div> 
  ); 
 }; 
```

Percebeu como usamos o objeto props para renderizar os valores de título e corpo que serão passados ​​para o componente Blog. Adereços é somente leitura ou imutável, então não precisamos nos preocupar em mudar os valores dos adereços.

Antes de escrevermos nosso componente App, precisamos proteger nosso componente para definir o tipo de variável que será transmitido para cada prop. Vamos definir isso usando React.PropTypes. Adicione o seguinte ao seu arquivo JavaScript.

```javascript
Blog.propTypes = { 
  title: React.PropTypes.string, 
  body: React.PropTypes.string 
 }; 
```

Aqui estamos definindo que os dados passados ​​para o nosso componente Blog serão strings para título e corpo. Confira [a documentação do React](https://reactjs.org/docs/typechecking-with-proptypes.html) para uma lista de todos os propTypes.

Agora vamos juntar isso em um componente de aplicativo e passar nossos dados.

```javascript
const App = props => { 
  return ( 
    <div> 
      <Heading /> 
      <Blog title={blogData.title} body={blogData.body} /> 
      <Blog title={blogData.title} body={blogData.body} /> 
      <Blog title={blogData.title} body={blogData.body} /> 
    </div> 
  ); 
 }; 
```

Finalmente, vamos renderizar nosso aplicativo (não se esqueça de adicionar uma tag raiz `<div>` ao arquivo HTML):

```javascript
ReactDOM.render( 
  <App />, 
  document.getElementById('root') 
 ); 
```

Agora você deve ver nossos componentes do blog renderizados com os dados fictícios transmitidos via adereços.

Você pode ver um exemplo de CodePen [aqui](https://codepen.io/trey-davis/pen/MvdZGX) .