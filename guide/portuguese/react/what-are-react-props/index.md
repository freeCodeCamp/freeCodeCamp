---
title: Typechecking With PropTypes
localeTitle: Checagem de tipo com PropTypes
---

## React PropTypes

PropTypes servem como um método de typechecking à medida que um aplicativo tende a crescer, com isso uma base muito grande de bugs tende a ser corrigida com o uso desse recurso.

## Como instalar PropTypes

Começando com o React versão 15.5, esse recurso foi movido para um pacote separado chamado prop-types.

Para usá-lo, é necessário que ele seja adicionado ao projeto como uma dependência, digitando o seguinte comando em um console.

```shell
npm install --save prop-types 
```

Depois disso, toda uma gama de validadores de tipo podem ser usados para garantir que os dados que o desenvolvedor receberá realmente sejam válidos. Quando um valor inválido é fornecido, haverá um aviso aparecendo no console do JavaScript.

Observe que, por motivos de desempenho, os propTypes definidos são verificados apenas no modo de desenvolvimento.

Também, ao contrário do estado do componente, que pode ser manipulado conforme necessário, essas propriedades (props) são somente leitura.

Seu valor não pode ser alterado pelo componente.

## Proptypes disponíveis

Abaixo está um exemplo de código com os diferentes validadores fornecidos pelo pacote e como injetá-los no componente.

```javascript
import PropTypes from 'prop-types'; 
 class MyComponent extends Component{ 
    constructor(props){ 
        super(props); 
    } 
    render(){ 
        return ( 
            ... 
        ); 
    } 
 } 
 
 MyComponent.propTypes = { 
  // A prop that is a specific JS primitive. By default, these 
  // are all optional. 
  optionalArray: PropTypes.array, 
  optionalBool: PropTypes.bool, 
  optionalFunc: PropTypes.func, 
  optionalNumber: PropTypes.number, 
  optionalObject: PropTypes.object, 
  optionalString: PropTypes.string, 
  optionalSymbol: PropTypes.symbol, 
 
  // Anything that can be rendered: numbers, strings, elements or an array 
  // (or fragment) containing these types. 
  optionalNode: PropTypes.node, 
 
  // A React element as a PropType 
  optionalElement: PropTypes.element, 
 
  // Declaring that a prop is an instance of a class. This uses 
  // JS's instanceof operator. 
  optionalMessage: PropTypes.instanceOf(AnotherComponent), 
 
  // You can ensure that your prop is limited to specific values by treating 
  // it as an enum. 
  optionalEnum: PropTypes.oneOf(['News', 'Photos']), 
 
  // An object that could be one of many types 
  optionalUnion: PropTypes.oneOfType([ 
    PropTypes.string, 
    PropTypes.number, 
    PropTypes.instanceOf(AnotherComponent) 
  ]), 
 
  // An array of a certain type 
  optionalArrayOf: PropTypes.arrayOf(PropTypes.number), 
 
  // An object with property values of a certain type 
  optionalObjectOf: PropTypes.objectOf(PropTypes.number), 
 
  // An object taking on a particular shape 
  optionalObjectWithShape: PropTypes.shape({ 
    color: PropTypes.string, 
    fontSize: PropTypes.number 
  }), 
 
  // You can chain any of the above with `isRequired` to make sure a warning 
  // is shown if the prop isn't provided. 
  requiredFunc: PropTypes.func.isRequired, 
 
  // A value of any data type 
  requiredAny: PropTypes.any.isRequired, 
 }; 
```

## Configurando Valores Padrão

Como parte deste recurso, também é possível definir valores padrão para qualquer componente definido durante o desenvolvimento.

Eles garantem que a propriedade tenha um valor, mesmo que não especificado pelo componente pai.

O código abaixo ilustra como usar essa funcionalidade.

```javascript
import React,{Component} from 'react'; 
 import PropTypes from 'prop-types'; 
 class MyComponent extends Component{ 
    constructor(props){ 
        super(props); 
    } 
    render(){ 
        return ( 
            <h3>Hello, {this.props.name}</h3> 
        ); 
    } 
 } 
 MyComponent.defaultProps = { 
  name: 'Stranger' 
 }; 
```

Para obter mais informações sobre PropTypes e outros recursos do React.

Vá para o [site oficial](https://reactjs.org/) ou o [Github Repo](https://github.com/facebook/react/)
