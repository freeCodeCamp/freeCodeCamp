# shallow-compare

[![npm version](https://badge.fury.io/js/shallow-compare.svg)](https://badge.fury.io/js/shallow-compare)

Stand alone shallowCompare for use in libraries that support shouldComponentUpdate

## API

`shallowCompare(instance, nextProps, nextState)`

 - instance (_component instance_) - the component's instance (`this`)
 - nextProps (_object_) - the next props
 - nextState (_object_) - the next state
 
## Example
```javascript
class Foo extends Component {
  constructor (props) {
    super(props);
    this.state = { color: 'blue' }
  }

  shouldComponentUpdate (nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState)
  }

  render () {
    return (
      <div>{this.state.color}</div>
    )
  }
}
```
