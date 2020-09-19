const cssFullExample = `
a {
  color: green;
  display: flex;
}
.aClass {
  font-size: 32px;
  /* the property below should not appear in final css string
  width: 400px;
  height: 200px;
  */
  flex: 1;
  flex-direction: row;
}
/* Set the background color to blue for screens that are 300px or less */
@media screen and (max-width: 300px) {
  body {
    background-color: blue;
  }
}`;

const cssCodeWithCommentsRemoved = `
a {
  color: green;
  display: flex;
}
.aClass {
  font-size: 32px;
  
  flex: 1;
  flex-direction: row;
}

@media screen and (max-width: 300px) {
  body {
    background-color: blue;
  }
}`;

const testValues = {
  cssFullExample,
  cssCodeWithCommentsRemoved
};

export default testValues;
