---
id: Unique identifier (alphanumerical, MongoDB_id)
title: Create React Hook
challengeType: 0
videoUrl: 'url of video explanation'
---

## Description
<section id='description'>
This challenge will convert a React class to a React hook
</section>

## Instructions
<section id='instructions'>
Convert this class to a react hook and update the state accordingly
</section>

## Tests
<section id='tests'>

``` yml
tests:
    - text: <code>MyComponent</code> should return JSX.
        testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.length === 1; })(), '<code>MyComponent</code> should return JSX.');
    - text: <code>MyComponent</code> should return 'This is a React hook'.
        testString: testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.find('div').text() == 'This is a React hook'; })(), 'The <code>div</code> should return 'This is a React hook.');
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='{ext}-seed'>

```jsx
import React from 'react'

class MyComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            componentType: 'class'
        }
    }

    render() {
        return (
            <div>This is a React {this.state.componentType}</div>
        )
    }
}
```

</div>

<!-- ### Before Test
<div id='{ext}-setup'>

```{ext}
Optional Test setup code.
``` -->

</div>

### After Test
<div id='{ext}-teardown'>

```js
ReactDOM.render(<MyComponent />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>

```jsx
import React, { useState } from 'react'

const MyComponent = () => {
    const [componentType, setComponentType] = useState('hook')

    return (
        <div>This is a React {componentType}</div>
    )
}
```

</section>