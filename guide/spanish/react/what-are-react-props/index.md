---
title: React TypeChecking with PropTypes
localeTitle: React TypeChecking con PropTypes
---
## React PropTypes

Estos sirven como un método de verificación de tipos, ya que una aplicación tiende a crecer, con esto, una gran base de errores tiende a corregirse con el uso de esta función.

## Cómo obtener PropTypes

A partir de la versión 15.5 de React, esta característica se movió a un paquete separado llamado prop-types.

Para usarlo, se requiere que se agregue al proyecto como una dependencia emitiendo el siguiente comando en una consola.

```shell
npm install --save prop-types 
```

Después de eso, toda una gama de validadores que pueden usarse para asegurarse de que los datos que el desarrollador va a recibir son realmente válidos. Cuando se proporciona un valor no válido, aparecerá una advertencia en la consola de JavaScript.

Tenga en cuenta que, por razones de rendimiento, los PropTypes definidos solo se verifican en el modo de desarrollo.

Además, al contrario del estado del componente, que puede manipularse según sea necesario, estos accesorios son de solo lectura.

Su valor no puede ser cambiado por el componente.

## Tipos disponibles

A continuación se muestra un ejemplo de código con los diferentes validadores proporcionados por el paquete y cómo inyectarlos en el componente.

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

## Configuración de valores por defecto

Como parte de esta característica, también es posible definir valores predeterminados para cualquier componente definido durante el desarrollo.

Estos se aseguran de que el prop tenga un valor incluso si no está especificado por el componente principal.

El siguiente código ilustra cómo usar esta funcionalidad.

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

Para obtener más información sobre PropTypes y otros documentos sobre React.

Vaya al [sitio oficial](https://reactjs.org/) y lea los documentos, o [GitHub Repo](https://github.com/facebook/react/)
