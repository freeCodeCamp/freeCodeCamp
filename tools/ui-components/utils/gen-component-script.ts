import fs from 'fs';
import path from 'path';
import { component, story, test, barrel, type } from './gen-component-template';

// Grab component name from terminal argument
const [name] = process.argv.slice(2);
if (!name) {
  throw new Error('You must include a component name.');
}

if (!/^[A-Z]/.exec(name)) {
  throw new Error('Component name must be in PascalCase.');
}

const toKebabCase = (pascalCasedName: string) =>
  pascalCasedName
    .replace(/([A-Z][a-z])/g, '-$1') // Add a hyphen before each capital letter
    .toLowerCase()
    .substring(1); // Return the string but exclude the hyphen at the beginning

const kebabCasedName = toKebabCase(name);

const dir = path.join(__dirname, `../src/${kebabCasedName}`);

// Throw an error if the component's folder already exists
if (fs.existsSync(dir)) {
  throw new Error('A component with that name already exists.');
}

// Create the folder
fs.mkdirSync(dir);

const writeFileErrorHandler = (err: Error | null) => {
  if (err) {
    throw err;
  }
};

// Create the component file - my-component.tsx
fs.writeFile(
  `${dir}/${kebabCasedName}.tsx`,
  component(name),
  writeFileErrorHandler
);

// Create the type file - types.ts
fs.writeFile(`${dir}/types.ts`, type(name), writeFileErrorHandler);

// Create the test file - my-component.test.tsx
fs.writeFile(
  `${dir}/${kebabCasedName}.test.tsx`,
  test(name),
  writeFileErrorHandler
);

// Create the Storybook file - my-component.stories.tsx
fs.writeFile(
  `${dir}/${kebabCasedName}.stories.tsx`,
  story(name),
  writeFileErrorHandler
);

// Create the barrel file - index.ts
fs.writeFile(
  `${dir}/index.ts`,
  barrel(name, kebabCasedName),
  writeFileErrorHandler
);

console.log(`The ${name} component has been created successfully! 🎉`);
