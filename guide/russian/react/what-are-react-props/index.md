---
title: React TypeChecking with PropTypes
localeTitle: React TypeChecking with PropTypes
---## Реакция PropTypes

Они служат в качестве метода проверки типов, поскольку приложение имеет тенденцию к росту, при этом очень большая база ошибок, как правило, исправляется с использованием этой функции.

## Как получить PropTypes

Начиная с версии React 15.5, эта функция была перенесена в отдельный пакет с именем prop-types.

Чтобы использовать его, он должен быть добавлен в проект в качестве зависимости, выпустив следующую команду в консоли.

```sh
npm install --save prop-types 
```

После этого на самом деле действителен целый ряд валидаторов, которые могут быть использованы для обеспечения того, чтобы данные, которые разработчик собирался получить. Когда отображается недопустимое значение, в консоли JavaScript появится предупреждение.

Обратите внимание, что по соображениям производительности определенные PropTypes проверяются только в режиме разработки.

Также, напротив, состояние компонента, которое можно манипулировать по мере необходимости, эти реквизиты только для чтения.

Это значение не может быть изменено компонентом.

## Доступны профили

Bellow - пример кода с различными валидаторами, предоставляемыми пакетом, и как их вставлять в компонент.

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

## Установка значений по умолчанию

В рамках этой функции также можно определить значения по умолчанию для любого заданного компонента, определенного при разработке.

Они гарантируют, что у prop будет значение, даже если оно не указано родительским компонентом.

Код ниже иллюстрирует, как использовать эту функциональность.

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

Для получения дополнительной информации о PropTypes и других документах в React.

Перейдите на [официальный сайт](https://reactjs.org/) и прочитайте документы, или [Github Repo](https://github.com/facebook/react/)