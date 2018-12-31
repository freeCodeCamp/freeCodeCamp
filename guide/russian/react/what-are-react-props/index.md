---
title: React TypeChecking with PropTypes
localeTitle: React TypeChecking с помошью PropTypes
---
## React PropTypes

Они служат в качестве метода проверки типов, поскольку приложение имеет тенденцию к росту, при этом очень большая база ошибок, как правило, исправляется с использованием этой функции.

## Как получить PropTypes

Начиная с версии React 15.5, эта функция была перенесена в отдельный пакет с именем prop-types.

Чтобы использовать его, он должен быть добавлен в проект в качестве зависимости, выпустив следующую команду в консоли.

```sh
npm install --save prop-types 
```

После этого, на самом деле, доступен целый ряд валидаторов, которые могут быть использованы для обеспечения того, чтобы данные, получаемы разработчиком верны.
Когда отображается недопустимое значение, в консоли JavaScript появится предупреждение.

Обратите внимание, что по соображениям производительности определенные PropTypes проверяются только в режиме разработки.

Также, напротив, состояние компонента, которое можно манипулировать по мере необходимости, эти props только для чтения.

Это значение не может быть изменено компонентой.

## Доступные PropTypes

Ниже пример кода с различными валидаторами, предоставляемыми пакетом, и пример как их добавлять в компоненту.

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
  // prop, который описывает примитивные типы данных в JS. По умолчинаию они необязательны
  optionalArray: PropTypes.array, 
  optionalBool: PropTypes.bool, 
  optionalFunc: PropTypes.func, 
  optionalNumber: PropTypes.number, 
  optionalObject: PropTypes.object, 
  optionalString: PropTypes.string, 
  optionalSymbol: PropTypes.symbol, 
 
  // Все что может быть отрисовано: числа, строки, элементы или массивы 
  // или fragment, содержащий эти типы данных. 
  optionalNode: PropTypes.node, 
 
  // React элемент в качестве PropType 
  optionalElement: PropTypes.element, 
 
  // Определение того что prop это экзампляр класса. Для этого нужно использовать 
  // JS's instanceof оператор. 
  optionalMessage: PropTypes.instanceOf(AnotherComponent), 
 
  // Вы можете ограничить prop определив конкретное значание для него
  optionalEnum: PropTypes.oneOf(['News', 'Photos']), 
 
  // Объект определенный как несколько различных типов 
  optionalUnion: PropTypes.oneOfType([ 
    PropTypes.string, 
    PropTypes.number, 
    PropTypes.instanceOf(AnotherComponent) 
  ]), 
 
  // Массив с элементами определенного типа 
  optionalArrayOf: PropTypes.arrayOf(PropTypes.number), 
 
  // Объект с элементами определенного типа 
  optionalObjectOf: PropTypes.objectOf(PropTypes.number), 
 
  // Объект с определенной формой 
  optionalObjectWithShape: PropTypes.shape({ 
    color: PropTypes.string, 
    fontSize: PropTypes.number 
  }), 
 
  // Вы можете добавить в цепочке определение ключевое слово `isRequired`,
  // чтобы быть уверенным что будет показано предупреждение, что prop отсутсвует
  requiredFunc: PropTypes.func.isRequired, 
 
  // Любой тип данных 
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
