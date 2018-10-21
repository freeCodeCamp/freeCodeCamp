---
title: Props
---
## React Native - Props

The term props, short for 'properties', means some type of data that is passed from one component into another. Props always flow downward from the parent component to the child.


In React, the child component has access to the information from a parent via props:

```jsx
// the child Header component receives the text prop and can access it via this.props.text
class Header extends Component {
  render () {
    return (
      <Text>{this.props.text}</Text>
    )
  }
}

class App extends Component {
  render () {
    return (
      <Header text="Welcome!" />
    );
  }
}

```

This also works the same way in functional components:

```jsx
// in functional components, props will be received as a parameter 'props'
const Header = (props) => {
  return (
    <Text>{props.title}</Text>
  );
};

class App extends Component {
  render () {
    return (
      <View>
	<Header text="Welcome!" />
      </View>
    );
  }
}

```

Other libraries you import will also give you access to additional properties inside your components. Here is an example from the [react-native-elements](https://github.com/react-native-training/react-native-elements) library.

```jsx
import { Button } from 'react-native-elements';

// here 'buttonStyle' and 'title' are props passed into the Button component
class App extends Component {
  render () {
    return (
      <Button
	buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
	title={`Submit`}
      />
    );
  }
}
```

