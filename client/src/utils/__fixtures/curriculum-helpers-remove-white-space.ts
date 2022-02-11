const stringWithWhiteSpaceChars = `
This string sentence has various white spaces characters:
\t* This line starts with a tab character.
\t* This line has several preceding white space characters.`;

const stringWithWhiteSpaceCharsRemoved =
  'Thisstringsentencehasvariouswhitespacescharacters:*Thislinestartswithatabcharacter.*Thislinehasseveralprecedingwhitespacecharacters.';

const testValues = {
  stringWithWhiteSpaceChars,
  stringWithWhiteSpaceCharsRemoved
};

export default testValues;
