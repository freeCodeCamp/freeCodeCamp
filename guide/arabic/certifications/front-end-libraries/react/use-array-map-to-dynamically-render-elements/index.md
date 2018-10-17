---
title: Use Array.map() to Dynamically Render Elements
localeTitle: استخدم Array.map () Dynamically Render Elements
---
## استخدم Array.map () Dynamically Render Elements

## تلميح 1:

حدد الدولتين `object` JavaScript.

 `{object: state, object: state} 
` 

## تلميح 2:

تحتاج `.map()` لإنشاء خط لكل كائن في الصفيف.

 `this.state.toDoList.map(i => <li>{i}</li>); 
` 

## حل:

بمجرد إضافة وظيفة الخريطة ، ستلاحظ أنها ستقوم بإنشاء `<li>` لكل عنصر تضعه في القائمة.

 `const textAreaStyles = { 
  width: 235, 
  margin: 5 
 }; 
 
 class MyToDoList extends React.Component { 
  constructor(props) { 
    super(props); 
    // change code below this line 
    this.state = { 
      userInput: '', 
      toDoList: [] 
    } 
    // change code above this line 
    this.handleSubmit = this.handleSubmit.bind(this); 
    this.handleChange = this.handleChange.bind(this); 
  } 
  handleSubmit() { 
    const itemsArray = this.state.userInput.split(','); 
    this.setState({ 
      toDoList: itemsArray 
    }); 
  } 
  handleChange(e) { 
    this.setState({ 
      userInput: e.target.value 
    }); 
  } 
  render() { 
    const items = this.state.toDoList.map(i => <li>{i}</li>); // change code here 
    return ( 
      <div> 
        <textarea 
          onChange={this.handleChange} 
          value={this.state.userInput} 
          style={textAreaStyles} 
          placeholder="Separate Items With Commas" /><br /> 
        <button onClick={this.handleSubmit}>Create List</button> 
        <h1>My "To Do" List:</h1> 
        <ul> 
          {items} 
        </ul> 
      </div> 
    ); 
  } 
 }; 
`