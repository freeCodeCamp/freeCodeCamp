---
id: 5a24c314108439a4d403616f
title: Review Using Props with Stateless Functional Components
challengeType: 6
isHidden: false
isRequired: false
forumTopicId: 301411
---

## Description
<section id='description'>
Except for the last challenge, you've been passing props to stateless functional components. These components act like pure functions. They accept props as input and return the same view every time they are passed the same props. You may be wondering what state is, and the next challenge will cover it in more detail. Before that, here's a review of the terminology for components.
A <em>stateless functional component</em> is any function you write which accepts props and returns JSX. A <em>stateless component</em>, on the other hand, is a class that extends <code>React.Component</code>, but does not use internal state (covered in the next challenge). Finally, a <em>stateful component</em> is a class component that does maintain its own internal state. You may see stateful components referred to simply as components or React components.
A common pattern is to try to minimize statefulness and to create stateless functional components wherever possible. This helps contain your state management to a specific area of your application. In turn, this improves development and maintenance of your app by making it easier to follow how changes to state affect its behavior.
</section>

## Instructions
<section id='instructions'>
The code editor has a <code>CampSite</code> component that renders a <code>Camper</code> component as a child. Define the <code>Camper</code> component and assign it default props of <code>{ name: 'CamperBot' }</code>. Inside the <code>Camper</code> component, render any code that you want, but make sure to have one <code>p</code> element that includes only the <code>name</code> value that is passed in as a <code>prop</code>. Finally, define <code>propTypes</code> on the <code>Camper</code> component to require <code>name</code> to be provided as a prop and verify that it is of type <code>string</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>CampSite</code> component should render.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(CampSite)); return mockedComponent.find('CampSite').length === 1; })());
  - text: The <code>Camper</code> component should render.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(CampSite)); return mockedComponent.find('Camper').length === 1; })());
  - text: The <code>Camper</code> component should include default props which assign the string <code>CamperBot</code> to the key <code>name</code>.
    testString: assert(/Camper.defaultProps={name:(['"`])CamperBot\1,?}/.test(code.replace(/\s/g, '')));
  - text: The <code>Camper</code> component should include prop types which require the <code>name</code> prop to be of type <code>string</code>.
    testString: assert(/Camper.propTypes={name:PropTypes.string.isRequired,?}/.test(code.replace(/\s/g, '')));
  - text: The <code>Camper</code> component should contain a <code>p</code> element with only the text from the <code>name</code> prop.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(CampSite)); return mockedComponent.find('p').text() === mockedComponent.find('Camper').props().name; })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
// change code below this line

```

</div>

### Before Test
<div id='jsx-setup'>

```jsx
var PropTypes = {
   string: { isRequired: true }
};
```

</div>

### After Test
<div id='jsx-teardown'>

```js
ReactDOM.render(<CampSite />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```js
class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
// change code below this line

const Camper = (props) => {
   return (
     <div>
       <p>{props.name}</p>
     </div>
   );
};

Camper.propTypes = {
  name: PropTypes.string.isRequired
};

Camper.defaultProps = {
  name: 'CamperBot'
};

```

</section>
