const jsCodeWithSingleAndMultLineComments = `
function nonMutatingPush(original, newItem) {
  /* This is a 
    multi-line comment 
    that should be removed. */
  return original.push(newItem);
}
var first = [1, 2, 3];
// This is a single line comment
var second = [4, 5];
nonMutatingPush(first, second);`;

const jsCodeWithSingleAndMultLineCommentsRemoved = `
function nonMutatingPush(original, newItem) {
    return original.push(newItem);
}
var first = [1, 2, 3];

var second = [4, 5];
nonMutatingPush(first, second);`;

const jsCodeWithUrl = `
function nonMutatingPush(original, newItem) {
  var url = 'https://freecodecamp.org'; // this comment should vanish
  return original.push(newItem);
}`;

const jsCodeWithUrlUnchanged = `
function nonMutatingPush(original, newItem) {
  var url = 'https://freecodecamp.org'; 
  return original.push(newItem);
}`;

const jsCodeWithNoCall = `function myFunc() {
  return Math.random();
}
`;

const jsCodeWithNoArgCall = `function myFunc() {
  return Math.random();
}
myFunc();
`;

const jsCodeWithArgCall = `function myFunc() {
  return Math.random();
}
myFunc('this shouldn't be here');
`;

const jsCodeWithCommentedCall = `function myFunc() {
  return Math.random();
}
/*
myFunc();
*/
`;

const jsString = `const a = 1;
  let b = 2;
  var c = 3;
  console.log(a + b + c);
  
  function add(param1, param2) {
    const tot = param1 + param2;
    return tot;
  }
  
  add(a, b);
  
  const complexType = {
    a: 1,
    b: [1, 2, '3'],
    c: {
      d: true,
    },
    e: () => {
      const inner = 24;
    }
  }`;

const testValues = {
  jsCodeWithSingleAndMultLineComments,
  jsCodeWithSingleAndMultLineCommentsRemoved,
  jsCodeWithUrl,
  jsCodeWithUrlUnchanged,
  jsCodeWithNoCall,
  jsCodeWithNoArgCall,
  jsCodeWithArgCall,
  jsCodeWithCommentedCall,
  jsString,
};

export default testValues;
