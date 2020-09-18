---
id: 5a24c314108439a4d403616f
title: Review Using Props with Stateless Functional Components
challengeType: 6
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(CampSite)); return mockedComponent.find("CampSite").length === 1; })(), "The <code>CampSite</code> component should render.");'
  - text: ''
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(CampSite)); return mockedComponent.find("Camper").length === 1; })(), "The <code>Camper</code> component should render.");'
  - text: ''
    testString: 'getUserInput => assert((function() { const noWhiteSpace = getUserInput("index").replace(/\s/g, ""); const verify1 = "Camper.defaultProps={name:\"CamperBot\"}"; const verify2 = "Camper.defaultProps={name:"CamperBot"}"; return (noWhiteSpace.includes(verify1) || noWhiteSpace.includes(verify2)); })(), "The <code>Camper</code> component should include default props which assign the string <code>CamperBot</code> to the key <code>name</code>.");'
  - text: ''
    testString: 'getUserInput => assert((function() { const mockedComponent = Enzyme.mount(React.createElement(CampSite)); const noWhiteSpace = getUserInput("index").replace(/\s/g, ""); const verifyDefaultProps = "Camper.propTypes={name:PropTypes.string.isRequired}"; return noWhiteSpace.includes(verifyDefaultProps); })(), "The <code>Camper</code> component should include prop types which require the <code>name</code> prop to be of type <code>string</code>.");'
  - text: ''
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(CampSite)); return mockedComponent.find("p").text() === mockedComponent.find("Camper").props().name; })(), "The <code>Camper</code> component should contain a <code>p</code> element with only the text from the <code>name</code> prop.");'

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
