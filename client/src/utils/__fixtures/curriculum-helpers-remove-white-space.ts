const stringWithWhiteSpaceChars = `
This string sentence has various white spaces characters:
\t* This line starts with a tab character.
\t* This line has several preceding white space characters.`;

/* eslint-disable max-len */
const stringWithWhiteSpaceCharsRemoved =
  'Thisstringsentencehasvariouswhitespacescharacters:*Thislinestartswithatabcharacter.*Thislinehasseveralprecedingwhitespacecharacters.';
/* esline-enable max-len */

const testValues = {
  stringWithWhiteSpaceChars,
  stringWithWhiteSpaceCharsRemoved
};

export default testValues;
