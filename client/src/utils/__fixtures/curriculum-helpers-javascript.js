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

const testValues = {
  jsCodeWithSingleAndMultLineComments,
  jsCodeWithSingleAndMultLineCommentsRemoved,
  jsCodeWithUrl,
  jsCodeWithUrlUnchanged
};

export default testValues;
