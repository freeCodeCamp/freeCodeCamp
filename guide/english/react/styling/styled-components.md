## Syled Components
This library, created by Max Stoiber, provides an elegant solution to keeping the styling and javascript for your components in one place. 
The library uses template literals that allow for writing css in .js or .jsx files (no more camel casing style props objects). 

### Example
```
import styled from 'styled-components`
import { Link } from 'react-router-dom'

const MyCoolLink = styled(Link)`
  text-decoration: none;
  color: palevioletred;
  font-size: 1.25em;
  &:hover {
  box-shadow: 0 0.25rem 0.5rem -0.25rem rgba(black, 0.25);
  transform: scale(0.9875);
  > * {
    transform: translate3d(0, 0, 0);
  }
`

const MyComponent = props => (
 <div>
  <h3>Find out more by clicking the cool looking link below</h3>
  <MyCoolLink to={`props.destination`}>Click me, I'm Stylin</MyCoolLink>
</div>
);
```

Find out more about this groundbreaking library
[Official Docs](https://www.styled-components.com/docs)
