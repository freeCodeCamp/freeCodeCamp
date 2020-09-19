const htmlFullExample = `
<!--
multi line html comment
-->

not a comment

not a commment <!-- single line html comment --> not a comment
not a comment
<!-- this is my blog: <mynixworld.inf> -->
not a comment
`;

const htmlCodeWithCommentsRemoved = `


not a comment

not a commment  not a comment
not a comment

not a comment
`;

const testValues = {
  htmlFullExample,
  htmlCodeWithCommentsRemoved
};

export default testValues;
