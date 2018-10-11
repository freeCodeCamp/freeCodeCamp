---
title: Compose React Components
---
## Compose React Components

Time to get comfortable with composing components within components. 

```javascript
class ComplexComponent extends React.Component{
    constructor(props){
    super(props);
    }
    render() {
    return(
        <SimpleComponent/>
        <LittleComponent/>
        );
    }
};

class HugeComponent extends React.Component {
    constructor(props){
        super(props);
        }
    render(){
        return(
        <ComplexComponent/>
        );
     }   
 };
```
The Complex Component in this example can contain several Simple Components, and can itself be contained inside the Huge Component! 
