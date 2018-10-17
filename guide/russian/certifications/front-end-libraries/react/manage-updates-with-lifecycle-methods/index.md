---
title: Manage Updates with Lifecycle Methods
localeTitle: Управление обновлениями с помощью методов жизненного цикла
---
## Управление обновлениями с помощью методов жизненного цикла

Эта задача состоит в том, что вы создаете пару функций жизненного цикла, componentWillUpdate и ComponentWillReceiveProps. Вам будет предоставлена ​​другая функция componentDidUpdate. Мы обсудим, как вы используете их на каждом этапе жизненного цикла компонента, и почему вы должны использовать их, когда проверяете разные этапы своего компонента.

Давайте поговорим о функциях и о том, как вы будете их использовать. Жизненные циклы компонентов можно разбить на 4 этапа. Initlization -> Mounting -> Updating -> Unmounting. Компоненты, с которыми вы будете работать, будут находиться на этапе обновления.

Происхождение, в котором эти функции вызывают, выглядит следующим образом: componentWillReceiveProps -> componentWillUpdate -> componentDidUpdate

Когда вы создаете компонент componentWillReceiveProps, эта функция проверяет, есть ли новые реквизиты. Если компонент получил новые реквизиты, тогда функция будет вызываться, и внутри блока вы можете сравнить два состояния prop. Функция будет принимать аргумент, обычно называемый nextProps, и будет сравнивать его с this.props. Задача состоит в том, что вы создаете эту функцию, используя переданный аргумент nextProps. См. Приведенную ниже функцию.

Затем в компоненте жизненного цикла компонента будет вызван компонентWillUpdate, эта функция проверит, были ли какие-либо обновления для реквизита или состояния и вызывается перед отображением компонента. Задача уже предоставила вам эту функцию, и она выйдет из системы «Компонент собирается обновить».

Как только компонент пройдет через фазу componentWillUpdate и компонент отобразит, будет вызван компонентDidUpdate. На этом этапе вы можете вызвать this.setState для обновления любых состояний chanegs, которые произошли в течение первых двух фаз. Примечание: вы можете вызвать setState, только если вы завершите условие. Поскольку эта проблема только вы поцарапаете поверхность, они хотели бы, чтобы вы вышли из системы, что «Компонент обновлен».

После того, как вы внедрили все функции жизненного цикла, вы увидите некоторые отображаемые на экране консольные журналы. Сначала вы увидите, что componentWillReceiveProps отправит вам this.props и nextProps. Затем вы увидите консольный журнал, в котором вы узнаете, что componentWillUpdate. Наконец, после того, как компонент отобразит, он вызовет компонентDidUpdate и выйдет из системы, «Компонент обновился».

Примечание. Компоненты, которые вы создаете, устарели и будут доступны для использования до версии 17. Дополнительные сведения об этих функциях можно найти в разделе ресурсов ниже.

```javascript
class Dialog extends React.Component { 
  constructor(props) { 
    super(props); 
  } 
  componentWillUpdate() { 
    console.log('Component is about to update...'); 
  } 
  // change code below this line 
 
  // Create componentWillReceiveProps 
  // Pass in argument nextProps and log out the current prop and next prop 
  componentWillReceiveProps(nextProps) { 
    // Log the current property and the next property 
    console.log(this.props, nextProps) 
  } 
 
  // Create function componentDidUpdate 
  // Log out that the component has updated 
  componentDidUpdate() { 
    console.log("Component has updated") 
  } 
 
  // change code above this line 
  render() { 
    return <h1>{this.props.message}</h1> 
  } 
 }; 
 
 class Controller extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      message: 'First Message' 
    }; 
    this.changeMessage = this.changeMessage.bind(this); 
  } 
  changeMessage() { 
    this.setState({ 
      message: 'Second Message' 
    }); 
  } 
  render() { 
    return ( 
      <div> 
        <button onClick={this.changeMessage}>Update</button> 
        <Dialog message={this.state.message}/> 
      </div> 
    ); 
  } 
 }; 
```

### Ресурсы

*   [Реагировать жизненный цикл компонентов](https://reactjs.org/docs/react-component.html#the-component-lifecycle)
*   [Реагирование жизненного цикла компонентов](https://cdn-images-1.medium.com/max/2000/1*sn-ftowp0_VVRbeUAFECMA.png)